import {
    isFocalTweetOuterReactPropsData,
    isMenuBarReactProps,
    isTweetOuterReactPropsData
} from "../types/reactProps.guard.js";
import { BasicTweetProps } from "../types/reactProps.js";
import { asyncQuerySelector } from "async-query";
import { getReactProps } from "./internal/utility.js";

interface TweetMetadata {
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
        if (!menuBar) throw new Error("Failed to get menu bar of tweet");

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
        if (!isMenuBarReactProps(props)) throw new Error("Failed to get React props of tweet");
        return props.children[1].props.retweetWithCommentLink.state.quotedStatus;
    }

    /**
     * Get metadata of the tweet.
     * @returns Metadata of the tweet.
     */
    public get metadata(): TweetMetadata {
        const tweetAuthorScreenName = this.props.user.screen_name;
        const tweetOuterProps = getReactProps(this.element);
        if (!tweetOuterProps) throw new Error("Failed to get React props of tweet");

        let loggedInUserScreenName: string | null = null;

        if (isTweetOuterReactPropsData(tweetOuterProps)) {
            loggedInUserScreenName =
                tweetOuterProps.children[0][1].props.children[0].props.children[1].props.children[1][2].props
                    .loggedInUser.screen_name;
        }

        if (isFocalTweetOuterReactPropsData(tweetOuterProps)) {
            loggedInUserScreenName =
                tweetOuterProps.children[0][1].props.children[0].props.children[2].props.children[7].props.loggedInUser
                    .screen_name;
        }

        const result: TweetMetadata = {
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
        if (!retweetButton) throw new Error("Failed to get retweet button of tweet");
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
        if (!quoteButton) throw new Error("Failed to get quote button of tweet");
        quoteButton.click();
    }

    /**
     * Get the text box of the tweet composer.
     * This method should be called after {@link clickQuoteButton}.
     * @param timeoutMs Timeout in milliseconds. After the specified time has elapsed, it throws an error.
     * @returns Text box of the tweet composer.
     */
    private static async getTweetTextBox(timeoutMs: number): Promise<Element> {
        const isTweetDeck = location.hostname === "pro.twitter.com";
        const selector = isTweetDeck
            ? "[role='dialog'] [data-text='true'], [role='dialog'] textarea[data-testid='tweetTextarea_0']"
            : "[role='dialog'] [data-text='true'], textarea[data-testid='tweetTextarea_0']";

        const textBoxMarker = await asyncQuerySelector(selector, document, timeoutMs);
        if (!textBoxMarker) throw new Error("Failed to get text box marker of tweet");

        const isTextArea = textBoxMarker.tagName === "TEXTAREA";
        const textBox = isTextArea ? textBoxMarker : textBoxMarker.parentElement;
        if (!textBox) throw new Error("Failed to get text box of tweet");

        return textBox;
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
    public async quoteTweet(text: string, timeoutMs: number = 1000): Promise<void> {
        try {
            await this.clickRetweetButton(timeoutMs);
            await Tweet.clickQuoteButton(timeoutMs);

            const textBox = await Tweet.getTweetTextBox(timeoutMs);
            textBox.innerHTML = text;
            textBox.dispatchEvent(new Event("input", { bubbles: true }));
        } catch (error) {
            const sourceTweetPermalink = this.props.permalink;
            const tweetText = `${text}\nhttps://twitter.com${sourceTweetPermalink}`;
            open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, "_blank");
        }
    }
}

export { TweetMetadata, Tweet };
