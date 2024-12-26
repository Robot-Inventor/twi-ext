import typia from "typia";

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

interface MenubarReactProps {
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

const isMenubarReactProps = typia.createIs<MenubarReactProps>();

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
                                                    },
                                                    ...unknown[]
                                                ],
                                                ...unknown[]
                                            ];
                                        };
                                    },
                                    ...unknown[]
                                ];
                            };
                        },
                        ...unknown[]
                    ];
                };
            },
            ...unknown[]
        ],
        ...unknown[]
    ];
}

const isTweetOuterReactPropsData = typia.createIs<TweetOuterReactPropsData>();

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
                                                },
                                                ...unknown[]
                                            ];
                                        };
                                    },
                                    ...unknown[]
                                ];
                            };
                        },
                        ...unknown[]
                    ];
                };
            },
            ...unknown[]
        ],
        ...unknown[]
    ];
}

const isFocalTweetOuterReactPropsData = typia.createIs<FocalTweetOuterReactPropsData>();

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

const isProfileReactPropsData = typia.createIs<ProfileReactPropsData>();

export {
    isTweetOuterReactPropsData,
    isFocalTweetOuterReactPropsData,
    type ProfileInterstitialType,
    type UserProps,
    type BasicTweetProps,
    isMenubarReactProps,
    isProfileReactPropsData
};
