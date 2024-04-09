type ProfileInterstitialType = "" | "sensitive_media" | "fake_account" | "offensive_profile_content" | "timeout";

interface UserProps {
    possibly_sensitive?: boolean | null;
    screen_name: string;
    profile_interstitial_type: ProfileInterstitialType;
    withheld_in_countries: string[];
}

interface BasicTweetProps {
    possibly_sensitive?: boolean | null;
    possibly_sensitive_editable?: boolean | null;
    permalink: string;
    user: UserProps;
}

/** @see {isMenuBarReactProps} ts-auto-guard:type-guard */
interface menubarReactProps {
    children: [
        unknown,
        {
            props: {
                retweetWithCommentLink: {
                    state: {
                        quotedStatus: BasicTweetProps;
                    };
                };
            };
        }
    ];
}

export { ProfileInterstitialType, UserProps, BasicTweetProps, menubarReactProps };
