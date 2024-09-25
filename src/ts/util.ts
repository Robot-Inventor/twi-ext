import { TWEETDECK_DOMAINS } from "./constants.js";
import { asyncQuerySelector } from "async-query";

/**
 * Get the current color scheme of the page.
 * @returns The color scheme of the page. The possible values are "light", "darkblue", "black", and "unknown".
 */
const getColorScheme = (): "light" | "darkblue" | "black" | "unknown" => {
    const background = document.body.style.backgroundColor;
    switch (background) {
        case "rgb(255, 255, 255)":
            return "light";

        case "rgb(21, 32, 43)":
            return "darkblue";

        case "rgb(0, 0, 0)":
            return "black";

        default:
            return "unknown";
    }
};

/**
 * Get the text box of the tweet composer.
 * This method should be called after open tweet composer.
 * @param timeoutMs Timeout in milliseconds. After the specified time has elapsed, it throws an error.
 * @returns Text box of the tweet composer.
 */
const getTweetTextBox = async (timeoutMs: number): Promise<Element> => {
    const isTweetDeck = TWEETDECK_DOMAINS.includes(location.hostname);
    const selector = isTweetDeck
        ? "[role='dialog'] [data-text='true'], [role='dialog'] textarea[data-testid='tweetTextarea_0']"
        : "[role='dialog'] [data-text='true'], textarea[data-testid='tweetTextarea_0']";

    const textBoxMarker = await asyncQuerySelector(selector, document, timeoutMs);
    if (!textBoxMarker) throw new Error("[twi-ext] Failed to get text box marker of tweet");

    const isTextArea = textBoxMarker.tagName === "TEXTAREA";
    const textBox = isTextArea ? textBoxMarker : textBoxMarker.parentElement;
    if (!textBox) throw new Error("[twi-ext] Failed to get text box of tweet");

    return textBox;
};

/**
 * Enter the specified text to the tweet composer.
 * @param text Text to tweet.
 * @param timeoutMs Timeout in milliseconds. After the specified time has elapsed, it throws an error.
 */
const enterTweetText = async (text: string, timeoutMs: number): Promise<void> => {
    const textBox = await getTweetTextBox(timeoutMs);
    textBox.innerHTML = text;
    textBox.dispatchEvent(new Event("input", { bubbles: true }));
};

/**
 * Compose a new tweet with the specified text.
 * If the function fails to compose a tweet within the specified timeout, it opens a new tab with the tweet text and URL.
 * @param text Text to tweet.
 * @param timeoutMs Timeout in milliseconds. After the specified time has elapsed, it throws an error.
 */
// eslint-disable-next-line no-magic-numbers
const composeNewTweet = async (text: string, timeoutMs = 1000): Promise<void> => {
    const isTweetDeck = TWEETDECK_DOMAINS.includes(location.hostname);
    const composeButtonSelector = isTweetDeck
        ? 'div:has([data-testid="SideNav_AccountSwitcher_Button"]) ~ div button[role="button"][aria-label]'
        : '[data-testid="SideNav_NewTweet_Button"], [data-testid="FloatingActionButtonBase"] a[href="/compose/post"]';

    const composeButton = document.querySelector<HTMLElement>(composeButtonSelector);
    if (!composeButton) {
        const tweetText = `${text}`;
        open(`https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, "_blank");
        return;
    }

    try {
        composeButton.click();
        await enterTweetText(text, timeoutMs);
    } catch {
        const tweetText = `${text}`;
        open(`https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, "_blank");
    }
};

export { getColorScheme, enterTweetText, composeNewTweet };
