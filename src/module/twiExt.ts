import { TwiExtTweet } from "./twiExtTweet";

class TwiExt {
    private readonly SELECTOR;
    private readonly CHECKED_TWEETS_CLASS_NAME: string;

    constructor() {
        this.SELECTOR = {
            TIMELINE: "main[role='main'] [data-testid='primaryColumn']",
            TWEET_OUTER: "[data-testid='cellInnerDiv']",
            TWEET_INNER: "[data-testid='tweet']"
        } as const;
        this.CHECKED_TWEETS_CLASS_NAME = `twi-ext-checked-${this.generateRandomString()}`;
    }

    /**
     * Generate 10 random alphanumeric characters.
     * @returns Random string.
     */
    private generateRandomString(): string {
        const string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "";
        for (let i = 0; i < 10; i++) {
            result += string.charAt(Math.floor(Math.random() * string.length));
        }
        return result;
    }

    /**
     * Execute the callback function when the timeline is loaded.
     * "Timeline" includes the notification page, but doesn't include the DM page.
     * @param callback Callback function.
     */
    onTimelineLoaded(callback: Function): void {
        const timeline = document.body.querySelector(this.SELECTOR.TIMELINE);
        if (timeline) {
            callback();
            return;
        }

        const observer = new MutationObserver(() => {
            const timeline = document.body.querySelector(this.SELECTOR.TIMELINE);
            if (!timeline) return;
            observer.disconnect();
            callback();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    private waitForTweetLoading(callback: (tweet: Element) => void): void {
        const tweet = document.body.querySelector(this.SELECTOR.TWEET_OUTER);

        if (tweet) {
            callback(tweet);
        } else {
            const main = document.body.querySelector("main");
            if (!main) throw new Error("Failed to find main element.");

            const observer = new MutationObserver(() => {
                const tweet = document.body.querySelector(this.SELECTOR.TWEET_OUTER);
                if (!tweet) return;
                observer.disconnect();
                callback(tweet);
            });
            observer.observe(main, { childList: true, subtree: true, attributes: true });
        }
    }

    private setTimelineRemovalObserver(
        tweet: Element,
        observer: MutationObserver,
        observerOption: MutationObserverInit
    ): void {
        const sectionInTimeline = document.body.querySelector('[data-testid="primaryColumn"] section');
        if (!(sectionInTimeline && sectionInTimeline.parentElement)) throw new Error("Failed to find section element.");
        if (!(tweet.parentElement && tweet.parentElement.parentElement))
            throw new Error("Failed to find timeline outer.");
        observer.observe(sectionInTimeline.parentElement, observerOption);
        observer.observe(tweet.parentElement.parentElement, observerOption);
    }

    /**
     * Execute the callback function when the timeline is changed.
     * "Timeline" includes the notification page, but doesn't include the DM page.
     * @param callback Callback function.
     */
    onTimeLineChanged(callback: Function): void {
        const TIMELINE_OBSERVER_OPTION: MutationObserverInit = { childList: true };
        const TIMELINE_REMOVAL_OBSERVER_OPTION: MutationObserverInit = { childList: true, attributes: true };

        this.waitForTweetLoading((tweet) => {
            const mainElementChild = document.body.querySelector("main > div");
            if (!mainElementChild) throw new Error("Failed to fine main element.");

            const timeline = tweet.parentElement;
            if (!timeline) throw new Error("Failed to find timeline.");

            callback();

            let timelineObserver = new MutationObserver(() => {
                callback();
            });
            timelineObserver.observe(timeline, TIMELINE_OBSERVER_OPTION);

            const timelineRemovalObserver = new MutationObserver(() => {
                this.waitForTweetLoading((newTweet) => {
                    const timeline = newTweet.parentElement;
                    if (!timeline) throw new Error("Failed to find timeline.");

                    callback();
                    timelineObserver.observe(timeline, TIMELINE_OBSERVER_OPTION);
                    this.setTimelineRemovalObserver(newTweet, timelineRemovalObserver, TIMELINE_OBSERVER_OPTION);
                });
            });

            this.setTimelineRemovalObserver(tweet, timelineRemovalObserver, TIMELINE_OBSERVER_OPTION);
            timelineRemovalObserver.observe(mainElementChild, TIMELINE_REMOVAL_OBSERVER_OPTION);
        });
    }

    /**
     * Get tweets from timeline.
     * This **includes** tweets that have been once retrieved.
     * To get only new tweets, use {@link getNewTweets()}.
     * @returns Tweets.
     */
    getTweets(): TwiExtTweet[] {
        let tweets: TwiExtTweet[] = [];
        const maybeTweets = document.body.querySelectorAll(this.SELECTOR.TWEET_OUTER);

        maybeTweets.forEach((maybeTweet) => {
            maybeTweet.classList.add(this.CHECKED_TWEETS_CLASS_NAME);
            if (!maybeTweet.querySelector(this.SELECTOR.TWEET_INNER)) return;
            const tweet = new TwiExtTweet(maybeTweet as HTMLElement);
            tweets.push(tweet);
        });

        return tweets;
    }

    /**
     * Get tweets from timeline.
     * This **doesn't includes** tweets that have been once retrieved.
     * To get all tweets, including those already retrieved, use {@link getTweets()}.
     * @returns Tweets.
     */
    getNewTweets(): TwiExtTweet[] {
        return this.getTweets().filter((tweet) =>
            tweet.getOuterElement().classList.contains(this.CHECKED_TWEETS_CLASS_NAME)
        );
    }
}

export { TwiExt };
