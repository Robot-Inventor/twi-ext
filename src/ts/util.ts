import { TWEETDECK_DOMAINS } from "./constants.js";
import { asyncQuerySelectorAll } from "async-query";
import { isNonEmptyArray } from "@robot-inventor/ts-utils";

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
 * Check if the specified element is a text area.
 * @param element Element to check.
 * @returns True if the element is a text area, otherwise false.
 */
const isTextArea = (element: Element): element is HTMLTextAreaElement => element.tagName === "TEXTAREA";

/**
 * Get the text box element from the specified marker element.
 * @param marker Marker element of the text box.
 * @returns The text box element. If the text box element is not found, it returns null.
 */
const getTextBoxFromMarker = (marker: HTMLElement): HTMLElement | HTMLTextAreaElement | null =>
    isTextArea(marker) ? marker : marker.parentElement;

/**
 * Enter the specified text to the tweet composer.
 * @param text Text to tweet.
 * @param timeoutMs Timeout in milliseconds. After the specified time has elapsed, it throws an error.
 */
// eslint-disable-next-line max-statements
const enterTweetText = async (text: string, timeoutMs: number): Promise<void> => {
    const isTweetDeck = TWEETDECK_DOMAINS.includes(location.hostname);
    const selector = isTweetDeck
        ? "[role='dialog'] [data-text='true'], [role='dialog'] textarea[data-testid='tweetTextarea_0']"
        : "[role='dialog'] [data-text='true'], textarea[data-testid='tweetTextarea_0']";

    const textBoxMarkers = [...(await asyncQuerySelectorAll<HTMLElement>(selector, document, timeoutMs))];
    if (!isNonEmptyArray(textBoxMarkers)) throw new Error("[twi-ext] Failed to get text box marker of tweet");

    // Clear existing text.
    // eslint-disable-next-line id-length
    for (let i = 0; i < textBoxMarkers.length; i++) {
        const textBoxMarker = textBoxMarkers[i];
        // eslint-disable-next-line no-magic-numbers
        if (i !== 0 && textBoxMarker) {
            const textBox = getTextBoxFromMarker(textBoxMarker);
            if (textBox) {
                textBox.remove();
            }
        }
    }

    const textBox = getTextBoxFromMarker(textBoxMarkers[0]);
    if (!textBox) throw new Error("[twi-ext] Failed to get text box of tweet");

    textBox.innerHTML = text;
    textBox.dispatchEvent(new Event("input", { bubbles: true }));
};

/**
 * Open the tweet composer in a new tab with the specified text.
 * @param text Text to tweet.
 */
const openTweetComposerInNewTab = (text: string): void => {
    open(`https://x.com/intent/tweet?text=${encodeURIComponent(text)}`, "_blank");
};

/**
 * Compose a new tweet with the specified text.
 * If the function fails to compose a tweet within the specified timeout, it opens a new tab with the tweet text and URL.
 * @param text Text to tweet.
 * @param timeoutMs Timeout in milliseconds. After the specified time has elapsed, it throws an error.
 * @param shouldOpenInNewTab Whether to open the tweet composer in a new tab immediately.
 */
// eslint-disable-next-line no-magic-numbers
const composeNewTweet = async (text: string, timeoutMs = 1000, shouldOpenInNewTab = false): Promise<void> => {
    if (shouldOpenInNewTab) {
        openTweetComposerInNewTab(text);
        return;
    }

    const keyboardEvent = new KeyboardEvent("keypress", {
        bubbles: true,
        keyCode: 78,
        which: 78
    });
    document.dispatchEvent(keyboardEvent);

    try {
        await enterTweetText(text, timeoutMs);
    } catch {
        openTweetComposerInNewTab(text);
    }
};

export { getColorScheme, enterTweetText, openTweetComposerInNewTab, composeNewTweet };
