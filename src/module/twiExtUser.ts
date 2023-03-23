import { ReactPropsUserInfo } from "../types/internal";

class TwiExtUser {
    private readonly userInfo;

    constructor(userInfo: ReactPropsUserInfo) {
        this.userInfo = userInfo;
    }

    /**
     * User ID (not screen name). For example, [@Twitter](https://twitter.com/twitter)'s ID is ``783214``.
     */
    get id(): string {
        return this.userInfo.id_str;
    }

    /**
     * User name (not screen name). For example, [@TwitterDev](https://twitter.com/TwitterDev)'s user name is ``Twitter Dev``.
     */
    get userName(): string {
        return this.userInfo.name;
    }

    /**
     * Screen name starting with ``@``.
     */
    get screenName(): `@${string}` {
        return `@${this.userInfo.screen_name}`;
    }

    /**
     * Bio text.
     */
    get description(): string {
        return this.userInfo.description;
    }

    /**
     * Verified account or not.
     */
    get verified(): boolean {
        return this.userInfo.verified;
    }

    /**
     * Twitter Blue verified account or not.
     */
    get blueVerified(): boolean {
        return this.userInfo.is_blue_verified;
    }

    /**
     * Private account or not.
     */
    get protected(): boolean {
        return Boolean(this.userInfo.protected);
    }

    /**
     * The date the account was created, in ISO 8601 format.
     * The time zone is zero UTC offset, as indicated by the suffix Z.
     */
    get createdAt(): string {
        return this.userInfo.created_at;
    }

    /**
     * Whether the currently logged-in user is following this account.
     */
    get following(): boolean {
        return Boolean(this.userInfo.following);
    }

    /**
     * Whether the currently logged in user is followed by this account.
     */
    get followedBy(): boolean {
        return Boolean(this.userInfo.followed_by);
    }

    /**
     * Whether the currently logged-in user is blocking this account.
     */
    get blocking(): boolean {
        return Boolean(this.userInfo.blocking);
    }

    /**
     * Whether the currently logged in user is blocked by this account.
     */
    get blockedBy(): boolean {
        return Boolean(this.userInfo.blocked_by);
    }

    /**
     * Whether the currently logged-in user is muting this account.
     */
    get muting(): boolean {
        return Boolean(this.userInfo.muting);
    }

    /**
     * Number of followers.
     */
    get followersCount(): number {
        return this.userInfo.followers_count;
    }

    /**
     * Number of accounts the user is following.
     */
    get followsCount(): number {
        return this.userInfo.friends_count;
    }

    /**
     * Number of tweets by the user.
     */
    get tweetsCount(): number {
        return this.userInfo.statuses_count;
    }

    /**
     * Number of media posted by the user.
     */
    get mediaCount(): number | undefined {
        return this.userInfo.media_count;
    }

    /**
     * The number of tweets liked by the user.
     */
    get favoritesCount(): number {
        return this.userInfo.favourites_count;
    }
}

export { TwiExtUser };
