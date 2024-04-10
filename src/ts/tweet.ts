import { BasicTweetProps } from "../types/reactProps.js";
import { asyncQuerySelector } from "async-query";
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
     * @returns Menu bar of the tweet.
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

    /**
     * Click the retweet button of the specified tweet.
     * @param timeoutMs Timeout in milliseconds. After the specified time has elapsed, it throws an error.
     */
    private async clickRetweetButton(timeoutMs: number): Promise<void> {
        const retweetButton = await asyncQuerySelector<HTMLElement>(
            "[data-testid='unretweet'], [data-testid='retweet']",
            this.tweet,
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
    private async clickQuoteButton(timeoutMs: number): Promise<void> {
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
    private async getTweetTextBox(timeoutMs: number): Promise<Element> {
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
     * @param timeoutMs Timeout in milliseconds. After the specified time has elapsed, it moves to fallback mode.
     * @default 1000
     */
    public async quoteTweet(text: string, timeoutMs: number): Promise<void> {
        try {
            await this.clickRetweetButton(timeoutMs);
            await this.clickQuoteButton(timeoutMs);

            const textBox = await this.getTweetTextBox(timeoutMs);
            textBox.innerHTML = text;
            textBox.dispatchEvent(new Event("input", { bubbles: true }));
        } catch (error) {
            const sourceTweetPermalink = this.props.permalink;
            const tweetText = `${text}\nhttps://twitter.com${sourceTweetPermalink}`;
            open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, "_blank");
        }
    }
}

export { Tweet };
