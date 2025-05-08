import { createIs } from "typia";

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
        },
        ...unknown[]
    ];
}

const isMenubarReactProps = createIs<MenubarReactProps>();

interface MenubarGrandparentReactProps {
    children: {
        props: {
            isFocalTweet: boolean;
        };
    };
}

const isMenubarGrandparentReactProps = createIs<MenubarGrandparentReactProps>();

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

const isProfileReactPropsData = createIs<ProfileReactPropsData>();

export {
    type ProfileInterstitialType,
    type UserProps,
    type BasicTweetProps,
    isMenubarReactProps,
    isMenubarGrandparentReactProps,
    isProfileReactPropsData
};
