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
    /* eslint-disable no-magic-numbers */
    private static readonly PROFILE_PROPS_MAX_ATTEMPTS = 30;
    private static readonly PROFILE_PROPS_INITIAL_ATTEMPT = 0;
    private static readonly PROFILE_PROPS_RETRY_INCREMENT = 1;
    /* eslint-enable no-magic-numbers */
    private static readonly PROFILE_SELECTOR = ':not([data-testid="tweet"]) [data-testid="UserName"]';

    private readonly checkedDataAttribute: string;
    private readonly profileNameObservers = new WeakMap<
        HTMLElement,
        { observer: MutationObserver; lastName: string }
    >();

    private onNewTweetCallback: ((tweet: Tweet) => void) | null = null;
    private onNewProfileCallback: ((profile: Profile) => void) | null = null;

    /**
     * A class that observes the timeline and calls a callback when a new tweet is added.
     * @param options Options for the timeline observer.
     */
    // eslint-disable-next-line max-lines-per-function
    public constructor(options?: Partial<TimelineOptions>) {
        // Generate a unique data attribute name for each instance.
        this.checkedDataAttribute = `data-twi-ext-checked-${crypto.randomUUID()}`;

        const defaultOptions = {
            timeoutMs: 10000
        } as const satisfies TimelineOptions;
        const mergedOptions = { ...defaultOptions, ...options };

        const timelineObserver = new MutationObserver(() => {
            if (this.onNewTweetCallback) {
                const tweets = document.querySelectorAll<HTMLElement>(
                    `[data-testid="tweet"]:not([${this.checkedDataAttribute}])`
                );

                for (const tweet of tweets) {
                    tweet.setAttribute(this.checkedDataAttribute, "");
                    this.onNewTweetCallback(new Tweet(tweet));
                }
            }

            if (this.onNewProfileCallback) {
                const profile = document.querySelector<HTMLElement>(
                    `${Timeline.PROFILE_SELECTOR}:not([${this.checkedDataAttribute}])`
                );

                if (profile) {
                    this.handleProfile(profile);
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

        // Handle back forward cache / history restores where no DOM mutations fire but the visible profile has changed (e.g., browser back/forward).
        window.addEventListener("pageshow", () => {
            if (!this.onNewProfileCallback) return;

            const profile = document.querySelector<HTMLElement>(Timeline.PROFILE_SELECTOR);
            if (!profile) return;

            this.handleProfile(profile, { forceRefresh: true });
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

    /**
     * Observe the screen name container within a profile element and fire
     * the profile callback when its text changes (handles SPA navigation
     * between profiles where the checked attribute persists).
     * @param profile The profile element to observe.
     */
    private observeProfileName(profile: HTMLElement): void {
        const nameContainer = Timeline.getNameContainerFromProfile(profile);
        if (!nameContainer || !this.onNewProfileCallback) return;

        if (this.profileNameObservers.has(nameContainer)) return;

        const currentText = nameContainer.innerText.trim();

        const observer = new MutationObserver(() => {
            const latestText = nameContainer.innerText.trim();
            const tracked = this.profileNameObservers.get(nameContainer);
            if (!tracked) return;

            if (latestText !== tracked.lastName && this.onNewProfileCallback) {
                tracked.lastName = latestText;
                const normalizedText = Timeline.normalizeScreenName(latestText);

                requestAnimationFrame(() => {
                    this.emitProfileWithFreshProps(nameContainer, normalizedText);
                });
            }
        });

        this.profileNameObservers.set(nameContainer, { lastName: currentText, observer });
        observer.observe(nameContainer, {
            characterData: true,
            childList: true,
            subtree: true
        });
    }

    /**
     * Normalize a screen name by trimming whitespace, removing the leading `@` symbol, and converting it to lowercase.
     * @param screenName The raw screen name to normalize.
     * @returns The normalized screen name.
     */
    private static normalizeScreenName(screenName: string): string {
        return screenName.trim().replace(/^@/u, "").toLowerCase();
    }

    /**
     * Retrieve the container element that holds the screen name within a profile element.
     * @param profile The profile element to search within.
     * @returns The HTMLElement containing the screen name, or null if not found.
     */
    private static getNameContainerFromProfile(profile: HTMLElement): HTMLElement | null {
        // The screen name lives in a [tabindex] [dir] element inside the profile.
        return profile.querySelector<HTMLElement>(`${Timeline.PROFILE_SELECTOR} [tabindex] [dir]`) ?? null;
    }

    /**
     * Handle a newly found or restored profile element consistently.
     * @param profile The profile element.
     * @param options Optional flags.
     * @param options.forceRefresh Re-emit even if previously handled.
     */
    // eslint-disable-next-line max-statements
    private handleProfile(profile: HTMLElement, options?: { forceRefresh?: boolean }): void {
        if (!this.onNewProfileCallback) return;
        // If this is a repeated element and not forced, avoid double-processing.
        if (!options?.forceRefresh && profile.hasAttribute(this.checkedDataAttribute)) return;
        profile.setAttribute(this.checkedDataAttribute, "");

        // Ensure we listen for subsequent name changes.
        this.observeProfileName(profile);

        const nameContainer = Timeline.getNameContainerFromProfile(profile);
        if (nameContainer) {
            const tracked = this.profileNameObservers.get(nameContainer);
            if (tracked) {
                tracked.lastName = nameContainer.innerText.trim();
            }
        }

        const expectedScreenName = nameContainer?.innerText && Timeline.normalizeScreenName(nameContainer.innerText);
        this.emitProfileWithFreshProps(profile, expectedScreenName);
    }

    /**
     * Emit a Profile after waiting for React props to align with the visible name.
     * @param targetElement Any descendant within the profile to anchor lookup.
     * @param expectedScreenName Optional lowercase screen name text to match.
     * @param attempt Current retry attempt count.
     */
    private emitProfileWithFreshProps(
        targetElement: HTMLElement,
        expectedScreenName?: string,
        attempt = Timeline.PROFILE_PROPS_INITIAL_ATTEMPT
    ): void {
        if (!this.onNewProfileCallback) return;

        const profileElement = targetElement.closest<HTMLElement>('[data-testid="UserName"]');
        if (!profileElement) return;

        const profile = new Profile(profileElement);
        const screenName = Timeline.normalizeScreenName(profile.props.screen_name);
        const expected = expectedScreenName ?? screenName;

        if (screenName !== expected && attempt < Timeline.PROFILE_PROPS_MAX_ATTEMPTS) {
            requestAnimationFrame(() => {
                this.emitProfileWithFreshProps(
                    targetElement,
                    expectedScreenName,
                    attempt + Timeline.PROFILE_PROPS_RETRY_INCREMENT
                );
            });
            return;
        }

        this.onNewProfileCallback(profile);
    }
}

export { type TimelineOptions, Timeline };
