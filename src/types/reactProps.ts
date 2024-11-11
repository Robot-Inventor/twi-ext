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

/**
 * @internal
 * @see {isTweetOuterReactPropsData} ts-auto-guard:type-guard
 */
interface TweetOuterReactPropsData {
    children: [
        [
            unknown,
            {
                props: {
                    children: [
                        {
                            props: {
                                children: [
                                    unknown,
                                    {
                                        props: {
                                            children: [
                                                unknown,
                                                [
                                                    unknown,
                                                    unknown,
                                                    {
                                                        props: {
                                                            loggedInUser: {
                                                                screen_name: string;
                                                            };
                                                        };
                                                    }
                                                ]
                                            ];
                                        };
                                    }
                                ];
                            };
                        }
                    ];
                };
            }
        ]
    ];
}

/**
 * @internal
 * @see {isFocalTweetOuterReactPropsData} ts-auto-guard:type-guard
 */
interface FocalTweetOuterReactPropsData {
    children: [
        [
            unknown,
            {
                props: {
                    children: [
                        {
                            props: {
                                children: [
                                    unknown,
                                    unknown,
                                    {
                                        props: {
                                            children: [
                                                unknown,
                                                unknown,
                                                unknown,
                                                unknown,
                                                unknown,
                                                unknown,
                                                unknown,
                                                {
                                                    props: {
                                                        loggedInUser: {
                                                            screen_name: string;
                                                        };
                                                    };
                                                }
                                            ];
                                        };
                                    }
                                ];
                            };
                        }
                    ];
                };
            }
        ]
    ];
}

/** @see {isProfileReactPropsData} ts-auto-guard:type-guard */
interface ProfileReactPropsData {
    children: [
        {
            props: {
                children: [
                    unknown,
                    {
                        props: {
                            user: UserProps;
                        };
                    }
                ];
            };
        },
        unknown
    ];
}

export type {
    TweetOuterReactPropsData,
    FocalTweetOuterReactPropsData,
    ProfileInterstitialType,
    UserProps,
    BasicTweetProps,
    menubarReactProps,
    ProfileReactPropsData
};
