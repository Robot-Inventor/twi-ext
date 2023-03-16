/**
 * @see {isReactProps} ts-auto-guard:type-guard
 */
interface ReactProps {
    children: [
        unknown,
        {
            props: {
                retweetWithCommentLink: {
                    state: {
                        quotedStatus: ReactPropsTweetInfo;
                    };
                };
            };
        }
    ];
}

interface ReactPropsEntities {
    hashtags: {
        text: string;
    }[];
    urls: {
        display_url: string;
        expanded_url: string;
        url: string;
    }[];
    user_mentions: {
        screen_name: string;
    }[];
}

interface ReactPropsCardPollBindingValuesBase {
    selected_choice?: {
        string_value: string;
        type: "STRING";
    };
    counts_are_final: {
        boolean_value: boolean;
        type: "BOOLEAN";
    };
}

interface ReactPropsCardPoll2 {
    name: "poll2choice_text_only";
    binding_values: {
        choice1_label: {
            string_value: string;
            type: "STRING";
        };
        choice2_label: {
            string_value: string;
            type: "STRING";
        };
        choice1_count: {
            string_value: string;
            type: "STRING";
        };
        choice2_count: {
            string_value: string;
            type: "STRING";
        };
    } & ReactPropsCardPollBindingValuesBase;
}

interface ReactPropsCardPoll3 {
    name: "poll3choice_text_only";
    binding_values: {
        choice1_label: {
            string_value: string;
            type: "STRING";
        };
        choice2_label: {
            string_value: string;
            type: "STRING";
        };
        choice3_label: {
            string_value: string;
            type: "STRING";
        };
        choice1_count: {
            string_value: string;
            type: "STRING";
        };
        choice2_count: {
            string_value: string;
            type: "STRING";
        };
        choice3_count: {
            string_value: string;
            type: "STRING";
        };
    } & ReactPropsCardPollBindingValuesBase;
}

interface ReactPropsCardPoll4 {
    name: "poll4choice_text_only";
    binding_values: {
        choice1_label: {
            string_value: string;
            type: "STRING";
        };
        choice2_label: {
            string_value: string;
            type: "STRING";
        };
        choice3_label: {
            string_value: string;
            type: "STRING";
        };
        choice4_label: {
            string_value: string;
            type: "STRING";
        };
        choice1_count: {
            string_value: string;
            type: "STRING";
        };
        choice2_count: {
            string_value: string;
            type: "STRING";
        };
        choice3_count: {
            string_value: string;
            type: "STRING";
        };
        choice4_count: {
            string_value: string;
            type: "STRING";
        };
    } & ReactPropsCardPollBindingValuesBase;
}

export interface ReactPropsTweetInfo {
    id_str: string;
    full_text: string;
    entities: ReactPropsEntities;
    note_tweet?: {
        text: string;
        entity_set: ReactPropsEntities;
    };
    lang: string;

    reply_count: number;
    retweet_count: number;
    quote_count: number;
    favorite_count: number;
    views?: {
        count?: number;
    };

    created_at: string;
    source_name: string;
    source_url: string;

    card?:
        | ReactPropsCardPoll2
        | ReactPropsCardPoll3
        | ReactPropsCardPoll4
        | { name: "unified_card" | "summary_large_image" | "player"; binding_values: object };

    user: ReactPropsUserInfo;
}

interface ReactPropsUserInfo {
    id_str: string;
    name: string;
    screen_name: string;
    description: string;
    verified: boolean;
    is_blue_verified: boolean;
    protected?: boolean;
    created_at: string;

    following?: boolean | null;
    followed_by?: boolean;
    blocking?: boolean | null;
    blocked_by?: boolean;
    muting?: boolean | null;

    followers_count: number;
    friends_count: number;
    statuses_count: number;
    media_count: number;
    favourites_count: number;
}

export type { ReactProps, ReactPropsUserInfo };
