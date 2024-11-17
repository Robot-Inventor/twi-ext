import { Profile } from "./profile.js";
import { Tweet } from "./tweet.js";
import { asyncQuerySelector } from "async-query";

interface TimelineOptions {
    /**
     * The maximum time to wait for the timeline element to be found.
     * @default 10000
     */
    timeoutMs: number;
}

/**
 * A class that observes the timeline and calls a callback when a new tweet is added.
 */
class Timeline {
    private readonly OBSERVER_OPTIONS = {
        childList: true,
        subtree: true
    } as const;

    private onNewTweetCallback: ((tweet: Tweet) => void) | null = null;
    private onNewProfileCallback: ((profile: Profile) => void) | null = null;

    /**
     * A class that observes the timeline and calls a callback when a new tweet is added.
     * @param options Options for the timeline observer.
     */
    public constructor(options?: Partial<TimelineOptions>) {
        // Generate a unique data attribute name for each instance.
        const checkedDataAttribute = `data-twi-ext-checked-${crypto.randomUUID()}`;

        const defaultOptions: TimelineOptions = {
            timeoutMs: 10000
        } as const;
        const mergedOptions = { ...defaultOptions, ...options };

        const timelineObserver = new MutationObserver(() => {
            if (this.onNewTweetCallback) {
                const tweets = document.querySelectorAll<HTMLElement>(
                    `[data-testid="tweet"]:not([${checkedDataAttribute}])`
                );

                for (const tweet of tweets) {
                    tweet.setAttribute(checkedDataAttribute, "");
                    this.onNewTweetCallback(new Tweet(tweet));
                }
            }

            if (this.onNewProfileCallback) {
                const profile = document.querySelector<HTMLElement>(
                    `:not([data-testid="tweet"]) [data-testid="UserName"]:not([${checkedDataAttribute}])`
                );

                if (profile) {
                    profile.setAttribute(checkedDataAttribute, "");
                    this.onNewProfileCallback(new Profile(profile));
                }
            }
        });

        void asyncQuerySelector("main", document, mergedOptions.timeoutMs).then((main) => {
            if (!main) throw new Error("[twi-ext] Failed to get main element");

            timelineObserver.observe(main, this.OBSERVER_OPTIONS);
        });

        // #layers includes tweets that appear next to the image when you click on the image
        void asyncQuerySelector("#layers", document, mergedOptions.timeoutMs).then((layers) => {
            if (!layers) throw new Error("[twi-ext] Failed to get #layers element");

            timelineObserver.observe(layers, this.OBSERVER_OPTIONS);
        });
    }

    /**
     * Set a callback that is called when a new tweet is added.
     * @param callback A callback that is called when a new tweet is added.
     */
    public onNewTweet(callback: (tweet: Tweet) => void): void {
        this.onNewTweetCallback = callback;
    }

    /**
     * Set a callback that is called when a new profile is added.
     * @param callback A callback that is called when a new profile is added.
     */
    public onNewProfile(callback: (profile: Profile) => void): void {
        this.onNewProfileCallback = callback;
    }
}

export { type TimelineOptions, Timeline };
