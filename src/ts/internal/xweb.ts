/* oxlint-disable eslint-core-js/camelcase */
import { type DataRecord, asRecord, getAncestorProps } from "./committedFiber.js";
import type { XwebProfileData, XwebTweetData, XwebTweetProps, XwebUserProps } from "../../types/data.js";
import { createIs } from "typia";

type ReadRecord = (id: string) => DataRecord | null;

const isXwebUserProps = createIs<XwebUserProps>();
const isXwebTweetProps = createIs<XwebTweetProps>();

const callMethod = (record: DataRecord | null, key: string): DataRecord | null => {
    const method = record?.[key];

    return typeof method === "function" ? asRecord(Reflect.apply(method, record, [])) : null;
};

const getReadRecord = (ancestors: readonly DataRecord[]): ReadRecord | null => {
    for (const props of ancestors) {
        const environment = asRecord(asRecord(props["value"])?.["environment"]);
        const store = callMethod(environment, "getStore");
        const source = callMethod(store, "getSource");
        const get = source?.["get"];

        // Relay's record source methods depend on their receiver.
        if (typeof get === "function") return (id) => asRecord(Reflect.apply(get, source, [id]));
    }

    return null;
};

const readLinked = (read: ReadRecord, value: unknown): DataRecord | null => {
    const id = asRecord(value)?.["__ref"];

    return typeof id === "string" ? read(id) : null;
};

const readUser = (read: ReadRecord, user: DataRecord | null): XwebUserProps | undefined => {
    if (user?.["__typename"] !== "User") return;

    const props = {
        has_graduated_access: user["has_graduated_access"],
        possibly_sensitive: user["possibly_sensitive"],
        profile_interstitial_type: readLinked(read, user["profile_metadata"])?.["profile_interstitial_type"],
        screen_name: readLinked(read, user["core"])?.["screen_name"],
        withheld_in_countries: readLinked(read, user["legacy"])?.["withheld_in_countries"]
    } as const;

    if (!isXwebUserProps(props)) return;

    return props;
};

interface StatusLink {
    id: string;
    permalink: string;
}

const getStatusLink = (href: unknown): StatusLink | null => {
    if (typeof href !== "string" || !href.startsWith("/")) return null;

    const url = URL.parse(href, "https://x.com");
    if (url?.origin !== "https://x.com") return null;

    const [author, rest] = url.pathname.split("/status/");
    const [id] = rest?.split("/") ?? [];
    if (!author || !id) return null;

    return {
        id,
        permalink: `${author}/status/${id}`
    };
};

const readMetadata = (ancestors: readonly DataRecord[], authorId: unknown): XwebTweetData["metadata"] => {
    const isFocalMode = ancestors.map((props) => props["isFocal"]).find((value) => typeof value === "boolean");
    const viewerId = ancestors
        .map((props) => asRecord(props["value"])?.["viewerId"])
        .find((value) => typeof value === "string");

    return {
        isFocalMode,
        // oxlint-disable-next-line no-undefined
        isPostedByCurrentUser: viewerId && typeof authorId === "string" ? viewerId === authorId : undefined
    };
};

const readTweetCandidates = (
    ancestors: readonly DataRecord[],
    read: ReadRecord
): Array<{
    id: string;
    link: StatusLink | null;
    record: DataRecord;
}> =>
    ancestors.flatMap((props) => {
        const fragment = asRecord(props["tweet"]);
        const fragmentId = fragment?.["__id"];
        if (typeof fragmentId !== "string") return [];

        const record = read(fragmentId);
        if (record?.["__typename"] !== "Tweet" || typeof record["rest_id"] !== "string") return [];

        return [
            {
                id: record["rest_id"],
                link: getStatusLink(asRecord(fragment?.["permalink"])?.["href"]),
                record
            }
        ];
    });

const readXwebTweet = (element: HTMLElement): XwebTweetData | null => {
    const ancestors = getAncestorProps(element);
    const read = getReadRecord(ancestors);
    if (!read) return null;

    const candidates = readTweetCandidates(ancestors, read);
    const row = element.closest("[data-href]")?.getAttribute("data-href");
    const rowLink = row
        ? getStatusLink(row)
        : ancestors.map((props) => getStatusLink(props["data-href"])).find(Boolean);

    // A repost can have fragments for both the repost and the original post.
    const rowId = rowLink?.id;
    const [first] = candidates;
    const selected = rowId ? candidates.find((candidate) => candidate.id === rowId) : first;
    if (!selected) return null;

    const { id, record } = selected;
    const link = candidates.find((candidate) => candidate.id === id && candidate.link?.id === id)?.link;
    const core = readLinked(read, record["core"]);
    const userRecord = readLinked(read, readLinked(read, core?.["user_results"])?.["result"]);
    const props = {
        id,
        permalink: link?.permalink ?? rowLink?.permalink,
        possibly_sensitive: readLinked(read, record["legacy"])?.["possibly_sensitive"],
        user: readUser(read, userRecord)
    } as const;

    if (!isXwebTweetProps(props)) return null;

    return {
        client: "xweb",
        metadata: readMetadata(ancestors, userRecord?.["rest_id"]),
        props
    };
};

const readXwebProfile = (element: HTMLElement): XwebProfileData | null => {
    const ancestors = getAncestorProps(element);
    const read = getReadRecord(ancestors);
    if (!read) return null;

    for (const ancestor of ancestors) {
        const user = asRecord(ancestor["user"]);
        const fragments = asRecord(user?.["__fragments"]);
        const id = user?.["__id"];
        const isProfileUser = fragments && Object.hasOwn(fragments, "profileInterstitialGate_user");
        const props = typeof id === "string" && isProfileUser ? readUser(read, read(id)) : null;

        if (props) {
            const isLoggedInUser = ancestors
                .map((candidate) => candidate["isOwnProfile"])
                .find((value) => typeof value === "boolean");

            return {
                client: "xweb",
                isLoggedInUser,
                props
            };
        }
    }

    return null;
};

export { readXwebProfile, readXwebTweet };
