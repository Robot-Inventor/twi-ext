import { BasicTweetProps } from "../types/reactProps.js";
import { getReactProps } from "./internal/utility.js";
import { isMenuBarReactProps } from "../types/reactProps.guard.js";

/**
 * Represents a tweet.
 */
class Tweet {
    private readonly tweet: HTMLElement;

    /**
     * Represents a tweet.
     * @param tweet The tweet element.
     */
    public constructor(tweet: HTMLElement) {
        this.tweet = tweet;
    }

    /**
     * Get the menu bar of the tweet.
     * @returns menu bar of the tweet
     */
    private getMenuBar(): HTMLElement {
        const menuBar = this.tweet.querySelector<HTMLElement>("div[role='group'][id]");
        if (!menuBar) throw new Error("Failed to get menu bar of tweet");

        return menuBar;
    }

    /**
     * Get the tweet element.
     * @returns The tweet element.
     */
    public get element(): HTMLElement {
        return this.tweet;
    }

    /**
     * Get the React props of the tweet element.
     * @returns The React props of the tweet element.
     */
    public get props(): BasicTweetProps {
        const props = getReactProps(this.getMenuBar());
        if (!isMenuBarReactProps(props)) throw new Error("Failed to get React props of tweet");
        return props.children[1].props.retweetWithCommentLink.state.quotedStatus;
    }
}

export { Tweet };
