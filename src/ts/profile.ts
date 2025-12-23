import { type UserProps, isProfileReactPropsData } from "../types/reactProps.js";
import { getReactProps, getUserPropsFromFiberTree } from "./internal/utility.js";

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
}

export { Profile };
