import type { BasicTweetProps, UserProps } from "./reactProps.js";

/** User fields available from xweb. A timeline author may only have a screen name. */
interface XwebUserProps {
    has_graduated_access?: boolean | undefined;
    possibly_sensitive?: boolean | null | undefined;
    profile_interstitial_type?: string | null | undefined;
    screen_name: string;
    withheld_in_countries?: string[] | null | undefined;
}

interface XwebTweetProps {
    id: string;
    permalink?: string | undefined;
    possibly_sensitive?: boolean | null | undefined;
    user?: XwebUserProps | undefined;
}

interface XwebTweetData {
    client: "xweb";
    props: XwebTweetProps;
    metadata: {
        isFocalMode?: boolean | undefined;
        isPostedByCurrentUser?: boolean | undefined;
    };
}

interface XwebProfileData {
    client: "xweb";
    props: XwebUserProps;
    isLoggedInUser?: boolean | undefined;
}

type TweetData =
    | {
          client: "rweb";
          props: BasicTweetProps;
      }
    | XwebTweetData;

type ProfileData =
    | {
          client: "rweb";
          props: UserProps;
      }
    | XwebProfileData;

export {
    type ProfileData,
    type TweetData,
    type XwebProfileData,
    type XwebTweetData,
    type XwebTweetProps,
    type XwebUserProps
};
