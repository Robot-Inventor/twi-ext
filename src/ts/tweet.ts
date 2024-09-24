import {
    isFocalTweetOuterReactPropsData,
    isMenuBarReactProps,
    isTweetOuterReactPropsData
} from "../types/reactProps.guard.js";
import type { BasicTweetProps } from "../types/reactProps.js";
import { asyncQuerySelector } from "async-query";
import { enterTweetText } from "./util.js";
import { getReactProps } from "./internal/utility.js";

interface TweetMetadata {
    isFocalMode: boolean;
    isPostedByCurrentUser: boolean;
}

/**
 * Represents a tweet.
 */
class Tweet {
    private readonly tweetElement: HTMLElement;

    /**
     * Represents a tweet.
     * @param tweet The tweet element.
     */
    public constructor(tweet: HTMLElement) {
        this.tweetElement = tweet;
    }

    /**
     * Get the menu bar of the tweet.
     * @returns Menu bar of the tweet.
     */
    private getMenuBar(): HTMLElement {
        const menuBar = this.tweetElement.querySelector<HTMLElement>("div[role='group'][id]");
        if (!menuBar) throw new Error("[twi-ext] Failed to get menu bar of tweet");

        return menuBar;
    }

    /**
     * Get the tweet element.
     * @returns The tweet element.
     */
    public get element(): HTMLElement {
        return this.tweetElement;
    }

    /**
     * Get the React props of the tweet element.
     * @returns The React props of the tweet element.
     */
    public get props(): BasicTweetProps {
        const props = getReactProps(this.getMenuBar());
        if (!isMenuBarReactProps(props)) throw new Error("[twi-ext] Failed to get React props of tweet");
        return props.children[1].props.retweetWithCommentLink.state.quotedStatus;
    }

    /**
     * Get metadata of the tweet.
     * @returns Metadata of the tweet.
     */
    // eslint-disable-next-line max-statements
    public get metadata(): TweetMetadata {
        const tweetAuthorScreenName = this.props.user.screen_name;
        const tweetOuterProps = getReactProps(this.element);
        if (!tweetOuterProps) throw new Error("[twi-ext] Failed to get React props of tweet");

        let loggedInUserScreenName: string | null = null;
        const isFocalMode = isFocalTweetOuterReactPropsData(tweetOuterProps);

        if (isTweetOuterReactPropsData(tweetOuterProps)) {
            loggedInUserScreenName =
                tweetOuterProps.children[0][1].props.children[0].props.children[1].props.children[1][2].props
                    .loggedInUser.screen_name;
        }

        if (isFocalMode) {
            loggedInUserScreenName =
                tweetOuterProps.children[0][1].props.children[0].props.children[2].props.children[7].props.loggedInUser
                    .screen_name;
        }

        const result: TweetMetadata = {
            isFocalMode,
            isPostedByCurrentUser: tweetAuthorScreenName === loggedInUserScreenName
        } as const;

        return result;
    }

    /**
     * Click the retweet button of the specified tweet.
     * @param timeoutMs Timeout in milliseconds. After the specified time has elapsed, it throws an error.
     */
    private async clickRetweetButton(timeoutMs: number): Promise<void> {
        const retweetButton = await asyncQuerySelector<HTMLElement>(
            "[data-testid='unretweet'], [data-testid='retweet']",
            this.tweetElement,
            timeoutMs
        );
        if (!retweetButton) throw new Error("[twi-ext] Failed to get retweet button of tweet");
        retweetButton.click();
    }

    /**
     * Click the quote button.
     * **This method should be called after {@link clickRetweetButton}.**
     * @param timeoutMs Timeout in milliseconds. After the specified time has elapsed, it throws an error.
     */
    private static async clickQuoteButton(timeoutMs: number): Promise<void> {
        const quoteButton = await asyncQuerySelector<HTMLElement>(
            [
                // PC
                "[data-testid='Dropdown'] [href='/compose/post']",
                // Mobile
                "[data-testid='sheetDialog'] [href='/compose/post']"
            ].join(","),
            document,
            timeoutMs
        );
        if (!quoteButton) throw new Error("[twi-ext] Failed to get quote button of tweet");
        quoteButton.click();
    }

    /**
     * Quote specified tweet with specified text.
     * This function opens the compose screen and inputs text.
     * It does not click the submit button.
     *
     * If the tweet is not retweetable, or failed to open the compose screen,
     * it opens new tab with the specified text and the tweet URL.
     * @param text Text to tweet.
     * @param timeoutMs
     * Timeout in milliseconds. After the specified time has elapsed, it moves to fallback mode. Default is ``1000``.
     */
    // eslint-disable-next-line no-magic-numbers
    public async quoteTweet(text: string, timeoutMs = 1000): Promise<void> {
        try {
            await this.clickRetweetButton(timeoutMs);
            await Tweet.clickQuoteButton(timeoutMs);

            await enterTweetText(text, timeoutMs);
        } catch {
            const sourceTweetPermalink = this.props.permalink;
            const tweetText = `${text}\nhttps://twitter.com${sourceTweetPermalink}`;
            open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, "_blank");
        }
    }
}

export { type TweetMetadata, Tweet };
