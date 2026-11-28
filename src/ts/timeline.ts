import { WEB_ENTRY, getWebClient } from "./internal/webClient.js";
import { XWEB_CONVERSATION_SELECTOR, observeXwebConversations } from "./internal/xwebConversation.js";
import { readXwebProfile, readXwebTweet } from "./internal/xweb.js";
import { Profile } from "./profile.js";
import { Tweet } from "./tweet.js";
import { asyncQuerySelector } from "async-query";

interface TimelineOptions {
    /**
     * The maximum time to wait for the timeline element to be found.
     * @default 10000
     */
    timeoutMs: number;
}

const DEFAULT_TIMEOUT_MS = 10000;

/**
 * A class that observes the timeline and calls a callback when a new tweet is added.
 */
class Timeline {
    private readonly OBSERVER_OPTIONS = {
        childList: true,
        subtree: true
    } as const satisfies MutationObserverInit;
    /* oxlint-disable no-magic-numbers */
    private static readonly PROFILE_PROPS_MAX_ATTEMPTS = 30;
    /* oxlint-enable no-magic-numbers */
    private static readonly PROFILE_SELECTOR = ':not([data-testid="tweet"]) [data-testid="UserName"]';
    private static readonly XWEB_TWEET_SELECTOR = "article:not(article article)";

    private readonly seenTweets = new WeakSet<HTMLElement>();
    private readonly seenProfiles = new WeakMap<HTMLElement, string>();
    private readonly profileNameObservers = new WeakMap<HTMLElement, string>();

    private onNewTweetCallback: ((tweet: Tweet) => void) | null = null;
    private onNewProfileCallback: ((profile: Profile) => void) | null = null;

    /**
     * A class that observes the timeline and calls a callback when a new tweet is added.
     * @param options Options for the timeline observer.
     */
    public constructor(options?: Partial<TimelineOptions>) {
        const timeoutMs = options?.timeoutMs ?? DEFAULT_TIMEOUT_MS;

        void Promise.all([
            asyncQuerySelector("main", document, timeoutMs),
            asyncQuerySelector(WEB_ENTRY, document, timeoutMs)
        ]).then(([main, entry]) => {
            if (!main || !entry) throw new Error("[twi-ext] Failed to find the X timeline or web client");

            if (getWebClient() === "xweb") {
                this.observeXweb(main);
            } else {
                this.observeRweb(main, timeoutMs);
            }
        });
    }

    private observeRweb(main: HTMLElement, timeoutMs: number): void {
        const scan = (): void => {
            const callback = this.onNewTweetCallback;
            if (callback) {
                const tweets = document.querySelectorAll<HTMLElement>('[data-testid="tweet"]');

                for (const tweet of tweets) {
                    if (!this.seenTweets.has(tweet)) {
                        this.seenTweets.add(tweet);
                        callback(new Tweet(tweet));
                    }
                }
            }

            if (this.onNewProfileCallback) {
                const profiles = document.querySelectorAll<HTMLElement>(Timeline.PROFILE_SELECTOR);
                const profile = Array.from(profiles).find((element) => !this.seenProfiles.has(element));

                if (profile) {
                    this.handleProfile(profile);
                }
            }
        };

        const observer = new MutationObserver(scan);
        observer.observe(main, this.OBSERVER_OPTIONS);

        // #layers includes tweets that appear next to the image when you click on the image
        void asyncQuerySelector("#layers", document, timeoutMs).then((layers) => {
            if (layers) {
                observer.observe(layers, this.OBSERVER_OPTIONS);
            }
        });

        // Handle back forward cache / history restores where no DOM mutations fire but the visible profile has changed (e.g., browser back/forward).
        window.addEventListener("pageshow", () => {
            if (this.onNewProfileCallback) {
                const profile = document.querySelector<HTMLElement>(Timeline.PROFILE_SELECTOR);
                if (profile) {
                    this.handleProfile(profile, { forceRefresh: true });
                }
            }
        });
    }

    private observeXweb(main: HTMLElement): void {
        const scan = (): void => {
            this.scanXwebTweets(main);
            this.scanXwebProfile();
        };

        new MutationObserver(scan).observe(main, this.OBSERVER_OPTIONS);
        observeXwebConversations(this.OBSERVER_OPTIONS, (conversation) => {
            this.scanXwebTweets(conversation);
        });

        window.addEventListener("pageshow", (event) => {
            this.scanXwebTweets(main);
            this.scanXwebProfile(event.persisted);
        });

        scan();
    }

    /**
     * Set a callback that is called when a new tweet is added.
     * @param callback A callback that is called when a new tweet is added.
     */
    public onNewTweet(callback: (tweet: Tweet) => void): void {
        this.onNewTweetCallback = callback;
        if (getWebClient() === "xweb") {
            queueMicrotask(() => {
                this.scanXwebTweets(document, `:is(main, ${XWEB_CONVERSATION_SELECTOR})`);
            });
        }
    }

    /**
     * Set a callback that is called when a new profile is added.
     * @param callback A callback that is called when a new profile is added.
     */
    public onNewProfile(callback: (profile: Profile) => void): void {
        this.onNewProfileCallback = callback;
        if (getWebClient() === "xweb") {
            queueMicrotask(() => {
                this.scanXwebProfile();
            });
        }
    }

    private scanXwebTweets(root: ParentNode, scope = ""): void {
        const callback = this.onNewTweetCallback;
        if (!callback) return;

        const tweets = root.querySelectorAll<HTMLElement>(`${scope} ${Timeline.XWEB_TWEET_SELECTOR}`);
        for (const tweet of tweets) {
            if (!this.seenTweets.has(tweet) && readXwebTweet(tweet)) {
                this.seenTweets.add(tweet);
                callback(new Tweet(tweet));
            }
        }
    }

    private scanXwebProfile(forceRefresh = false): void {
        const callback = this.onNewProfileCallback;
        if (!callback) return;

        const main = document.querySelector("main");
        const heading = main?.querySelector<HTMLElement>("h1");
        const name = location.pathname.split("/")[1]?.toLowerCase();
        if (!heading || !name) return;

        const alreadySeen = this.seenProfiles.get(heading) === name;
        if (!forceRefresh && alreadySeen) return;

        const profileName = readXwebProfile(heading)?.props.screen_name.toLowerCase();
        if (profileName === name) {
            this.seenProfiles.set(heading, name);
            callback(new Profile(heading));
        }
    }

    /**
     * Observe the screen name container within a profile element and fire
     * the profile callback when its text changes (handles SPA navigation
     * where the element is reused between profiles).
     * @param nameContainer The screen name container to observe.
     */
    private observeProfileName(nameContainer: HTMLElement): void {
        if (this.profileNameObservers.has(nameContainer)) return;

        const currentText = nameContainer.innerText.trim();

        this.profileNameObservers.set(nameContainer, currentText);
        new MutationObserver(() => {
            const latestText = nameContainer.innerText.trim();
            if (latestText === this.profileNameObservers.get(nameContainer)) return;

            this.profileNameObservers.set(nameContainer, latestText);
            const normalizedText = Timeline.normalizeScreenName(latestText);

            requestAnimationFrame(() => {
                this.emitProfileWithFreshProps(nameContainer, normalizedText);
            });
        }).observe(nameContainer, {
            characterData: true,
            childList: true,
            subtree: true
        });
    }

    /**
     * Normalize a screen name by trimming whitespace, removing the leading `@` symbol, and converting it to lowercase.
     * @param screenName The raw screen name to normalize.
     * @returns The normalized screen name.
     */
    private static normalizeScreenName(screenName: string): string {
        return screenName.trim().replace(/^@/u, "").toLowerCase();
    }

    /**
     * Retrieve the container element that holds the screen name within a profile element.
     * @param profile The profile element to search within.
     * @returns The HTMLElement containing the screen name, or null if not found.
     */
    private static getNameContainerFromProfile(profile: HTMLElement): HTMLElement | null {
        // The screen name lives in a [tabindex] [dir] element inside the profile.
        return profile.querySelector<HTMLElement>(`${Timeline.PROFILE_SELECTOR} [tabindex] [dir]`) ?? null;
    }

    /**
     * Handle a newly found or restored profile element consistently.
     * @param profile The profile element.
     * @param options Optional flags.
     * @param options.forceRefresh Re-emit even if previously handled.
     */
    private handleProfile(profile: HTMLElement, options?: { forceRefresh?: boolean }): void {
        if (!this.onNewProfileCallback) return;
        // If this is a repeated element and not forced, avoid double-processing.
        if (!options?.forceRefresh && this.seenProfiles.has(profile)) return;

        this.seenProfiles.set(profile, "");

        // Ensure we listen for subsequent name changes.
        const nameContainer = Timeline.getNameContainerFromProfile(profile);
        if (nameContainer) {
            this.observeProfileName(nameContainer);
        }

        const expectedScreenName = nameContainer ? Timeline.normalizeScreenName(nameContainer.innerText) : null;
        this.emitProfileWithFreshProps(profile, expectedScreenName);
    }

    /**
     * Emit a Profile after waiting for React props to align with the visible name.
     * @param targetElement Any descendant within the profile to anchor lookup.
     * @param $expectedScreenName Optional lowercase screen name text to match.
     * @param attempt Current retry attempt count.
     */
    private emitProfileWithFreshProps(
        targetElement: HTMLElement,
        $expectedScreenName?: string | null,
        // oxlint-disable-next-line no-magic-numbers
        attempt = 0
    ): void {
        const callback = this.onNewProfileCallback;
        if (!callback) return;

        const profileElement = targetElement.closest<HTMLElement>('[data-testid="UserName"]');
        if (!profileElement) return;

        const profile = new Profile(profileElement);
        const screenName = Timeline.normalizeScreenName(profile.props.screen_name);
        const expectedScreenName = $expectedScreenName ?? screenName;

        if (screenName !== expectedScreenName && attempt < Timeline.PROFILE_PROPS_MAX_ATTEMPTS) {
            requestAnimationFrame(() => {
                // oxlint-disable-next-line no-magic-numbers
                this.emitProfileWithFreshProps(targetElement, expectedScreenName, attempt + 1);
            });

            return;
        }

        callback(profile);
    }
}

export { type TimelineOptions, Timeline };
