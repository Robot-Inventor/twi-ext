import { TwiExtTweet } from "./twiExtTweet";

class TwiExt {
    private readonly SELECTOR;
    private readonly CHECKED_TWEETS_CLASS: string;

    constructor() {
        this.SELECTOR = {
            TIMELINE: "main[role='main'] [data-testid='primaryColumn']",
            TWEET_OUTER: "[data-testid='cellInnerDiv']",
            TWEET_INNER: "[data-testid='tweet']"
        } as const;
        this.CHECKED_TWEETS_CLASS = "twi-ext-checked";
    }

    /**
     * Execute the callback function when the timeline is loaded.
     * "Timeline" includes the notification page, but doesn't include the DM page.
     * @param callback Callback function.
     */
    onTimelineLoaded(callback: Function) {
        const observer = new MutationObserver(() => {
            const timeline = document.body.querySelector(this.SELECTOR.TIMELINE);
            if (!timeline) return;
            observer.disconnect();
            callback();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    /**
     * Get tweets from timeline.
     * This **includes** tweets that have been once retrieved.
     * To get only new tweets, use {@link getNewTweets()}.
     * @returns Tweets.
     */
    getTweets(): TwiExtTweet[] {
        const tweetElements = [...document.body.querySelectorAll(this.SELECTOR.TWEET_OUTER)].filter((element) =>
            element.querySelector(this.SELECTOR.TWEET_INNER)
        ) as HTMLElement[];

        for (const element of tweetElements) {
            element.classList.add(this.CHECKED_TWEETS_CLASS);
        }

        const tweets = [...tweetElements].map((tweet) => new TwiExtTweet(tweet));
        return tweets;
    }

    /**
     * Get tweets from timeline.
     * This **doesn't includes** tweets that have been once retrieved.
     * To get all tweets, including those already retrieved, use {@link getTweets()}.
     * @returns Tweets.
     */
    getNewTweets(): TwiExtTweet[] {
        const tweetElements = [...document.body.querySelectorAll(this.SELECTOR.TWEET_OUTER)].filter(
            (element) =>
                element.querySelector(this.SELECTOR.TWEET_INNER) &&
                ![...element.classList].includes(this.CHECKED_TWEETS_CLASS)
        ) as HTMLElement[];

        for (const element of tweetElements) {
            element.classList.add(this.CHECKED_TWEETS_CLASS);
        }

        const tweets = [...tweetElements].map((tweet) => new TwiExtTweet(tweet));
        return tweets;
    }
}

export { TwiExt };
