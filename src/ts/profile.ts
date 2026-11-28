import { type UserProps, isProfileReactPropsData } from "../types/reactProps.js";
import { getReactProps, getUserPropsFromFiberTree } from "./internal/utility.js";
import type { ProfileData } from "../types/data.js";
import { getWebClient } from "./internal/webClient.js";
import { readXwebProfile } from "./internal/xweb.js";

/**
 * Represents a profile.
 */
class Profile {
    private readonly profileElement: HTMLElement;

    /**
     * Represents a profile.
     * @param profile The profile element.
     */
    public constructor(profile: HTMLElement) {
        this.profileElement = profile;
    }

    /**
     * Get the React props of the profile element.
     * @returns The React props of the profile element.
     */
    public get props(): UserProps {
        const userFromFiber = getUserPropsFromFiberTree(this.profileElement);
        if (userFromFiber) return userFromFiber;

        const props = getReactProps(this.profileElement);
        if (!isProfileReactPropsData(props)) throw new Error("Failed to get React props of profile");

        return props.children[0].props.children[1].props.user;
    }

    /**
     * Read the profile data using the web client that rendered it.
     * @returns Profile data tagged with the web client.
     */
    public get data(): ProfileData {
        if (getWebClient() === "xweb") {
            const data = readXwebProfile(this.profileElement);
            if (!data) throw new Error("[twi-ext] Failed to get xweb profile data");

            return data;
        }

        return {
            client: "rweb",
            props: this.props
        };
    }
}

export { Profile };
