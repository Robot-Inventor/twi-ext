import type { TwiExtPollData } from "../types/index";
import { isReactProps } from "../types/internal.guard";
import { getReactProps } from "./utility";
import { ReactPropsTweetInfo } from "../types/internal";
import { TwiExtUser } from "./twiExtUser";

class TwiExtTweet {
    private readonly tweetOuter;

    constructor(tweetOuter: HTMLElement) {
        this.tweetOuter = tweetOuter;
    }

    /**
     * Get tweet information from React props.
     */
    private getTweetInfo(): ReactPropsTweetInfo {
        const buttonGroup: HTMLElement | null = this.tweetOuter.querySelector("[role='group'][id]");
        if (!buttonGroup) throw new Error("Couldn't get information about the tweet.");

        const props = getReactProps(buttonGroup);
        if (!isReactProps(props)) throw new Error("Tweet information format is invalid.");

        const tweetInfo = props.children[1].props.retweetWithCommentLink.state.quotedStatus;
        return tweetInfo;
    }

    /**
     * The ID of the tweet.
     * For example, the ID of ``https://twitter.com/TwitterDev/status/1621026986784337922`` is ``1621026986784337922``.
     */
    get id(): string {
        return this.getTweetInfo().id_str;
    }

    /**
     * Full text of the tweet.
     * URLs are shortened (e.g. https://example.com is shortened as https://t.co/Cae7rEHPww).
     * To get in other formats, use {@link getFormattedText()}.
     */
    get text(): string {
        const tweetInfo = this.getTweetInfo();

        if (tweetInfo.note_tweet) {
            return tweetInfo.note_tweet.text;
        } else {
            return tweetInfo.full_text;
        }
    }

    /**
     * Select the format of the URL contained in the tweet to retrieve the full text of the tweet.
     * @param option Select the URL format. If ``default`` is given, the URL in the text will be returned in shortened form.
     *               ``display`` expands the URL, but omits the protocol, etc. ``expanded`` uses the full URL.
     * @returns Full text of the tweet.
     */
    getFormattedText(option: { linkType: "default" | "display" | "expanded" }): string {
        let text = this.text;
        const tweetInfo = this.getTweetInfo();
        const urls = tweetInfo.note_tweet ? tweetInfo.note_tweet.entity_set.urls : tweetInfo.entities.urls;

        switch (option.linkType) {
            case "default":
                return text;

            case "display":
                for (const url of urls) {
                    text = text.replace(url.url, url.display_url);
                }
                return text;

            case "expanded":
                for (const url of urls) {
                    text = text.replace(url.url, url.expanded_url);
                }
                return text;
        }
    }

    /**
     * Array of hashtags.
     */
    get hashtags(): `#${string}`[] {
        return this.getTweetInfo().entities.hashtags.map((tag) => `#${tag.text}`) as `#${string}`[];
    }

    /**
     * Array of URLs.
     */
    get urls(): string[] {
        return this.getTweetInfo().entities.urls.map((url) => url.expanded_url);
    }

    /**
     * Array of user mentions.
     */
    get userMentions(): `@${string}`[] {
        return this.getTweetInfo().entities.user_mentions.map((mention) => `@${mention.screen_name}`) as `@${string}`[];
    }

    /**
     * Language of the tweet.
     */
    get lang(): string {
        return this.getTweetInfo().lang;
    }

    /**
     * Number of replies.
     */
    get replyCount(): number {
        return this.getTweetInfo().reply_count;
    }

    /**
     * Number of retweets **without** comments.
     * To get the number of retweets including retweets with comments, add {@link retweetCount} and {@link quoteCount}.
     */
    get retweetCount(): number {
        return this.getTweetInfo().retweet_count;
    }

    /**
     * Number of retweets **with** comments.
     * To get the number of retweets without comments, use {@link retweetCount} instead.
     */
    get quoteCount(): number {
        return this.getTweetInfo().quote_count;
    }

    /**
     * Number of likes.
     */
    get favoriteCount(): number {
        return this.getTweetInfo().favorite_count;
    }

    /**
     * Number of views. If view count is unavailable, returns undefined.
     */
    get viewCount(): number | undefined {
        const viewInfo = this.getTweetInfo().views;
        if (!viewInfo) return undefined;
        return viewInfo.count;
    }

    /**
     * The date the tweet was posted, in ISO 8601 format.
     * The time zone is zero UTC offset, as indicated by the suffix Z.
     */
    get postedDate(): string {
        return this.getTweetInfo().created_at;
    }

    /**
     * The source name from which the tweet was sent (e.g., ``Twitter Web App``, ``Twitter for Android``).
     */
    get sourceName(): string {
        return this.getTweetInfo().source_name;
    }

    /**
     * The source URL from which the tweet was sent (e.g., ``Twitter Web App`` is ``https://mobile.twitter.com``, ``Twitter for Android`` is ``http://twitter.com/download/android``).
     */
    get sourceUrl(): string {
        return this.getTweetInfo().source_url;
    }

    /**
     * Information about the user who sent the tweet.
     */
    get user(): TwiExtUser {
        return new TwiExtUser(this.getTweetInfo().user);
    }

    /**
     * Poll data. If the tweet does not have a poll, returns undefined.
     */
    get poll(): TwiExtPollData | undefined {
        const tweetInfo = this.getTweetInfo();
        if (!tweetInfo.card) return undefined;

        const cardData = tweetInfo.card;
        if (!("counts_are_final" in cardData.binding_values)) return undefined;

        let choices: TwiExtPollData["choices"] = [];
        switch (cardData.name) {
            case "poll2choice_text_only":
                choices = [
                    {
                        label: cardData.binding_values.choice1_label.string_value,
                        count: parseInt(cardData.binding_values.choice1_count.string_value)
                    },
                    {
                        label: cardData.binding_values.choice2_label.string_value,
                        count: parseInt(cardData.binding_values.choice2_count.string_value)
                    }
                ];
                break;

            case "poll3choice_text_only":
                choices = [
                    {
                        label: cardData.binding_values.choice1_label.string_value,
                        count: parseInt(cardData.binding_values.choice1_count.string_value)
                    },
                    {
                        label: cardData.binding_values.choice2_label.string_value,
                        count: parseInt(cardData.binding_values.choice2_count.string_value)
                    },
                    {
                        label: cardData.binding_values.choice3_label.string_value,
                        count: parseInt(cardData.binding_values.choice3_count.string_value)
                    }
                ];
                break;

            case "poll4choice_text_only":
                choices = [
                    {
                        label: cardData.binding_values.choice1_label.string_value,
                        count: parseInt(cardData.binding_values.choice1_count.string_value)
                    },
                    {
                        label: cardData.binding_values.choice2_label.string_value,
                        count: parseInt(cardData.binding_values.choice2_count.string_value)
                    },
                    {
                        label: cardData.binding_values.choice3_label.string_value,
                        count: parseInt(cardData.binding_values.choice3_count.string_value)
                    },
                    {
                        label: cardData.binding_values.choice4_label.string_value,
                        count: parseInt(cardData.binding_values.choice4_count.string_value)
                    }
                ];
                break;
        }

        const totalVotes = choices.map((choice) => choice.count).reduce((a, b) => a + b);
        const result = {
            isFinal: cardData.binding_values.counts_are_final.boolean_value,
            totalVotes,
            choices
        };
        return result;
    }

    getOuterElement(): HTMLElement {
        return this.tweetOuter;
    }
}

export { TwiExtTweet };
