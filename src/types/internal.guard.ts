/*
 * Generated type guards for "internal.ts".
 * WARNING: Do not manually change this file.
 */
import { ReactProps } from "./internal";

export function isReactProps(obj: unknown): obj is ReactProps {
    const typedObj = obj as ReactProps
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        Array.isArray(typedObj["children"]) &&
        (typedObj["children"][1] !== null &&
            typeof typedObj["children"][1] === "object" ||
            typeof typedObj["children"][1] === "function") &&
        (typedObj["children"][1]["props"] !== null &&
            typeof typedObj["children"][1]["props"] === "object" ||
            typeof typedObj["children"][1]["props"] === "function") &&
        (typedObj["children"][1]["props"]["retweetWithCommentLink"] !== null &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"] === "object" ||
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"] === "function") &&
        (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"] !== null &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"] === "object" ||
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"] === "function") &&
        (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"] !== null &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"] === "object" ||
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"] === "function") &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["id_str"] === "string" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["full_text"] === "string" &&
        (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["entities"] !== null &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["entities"] === "object" ||
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["entities"] === "function") &&
        Array.isArray(typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["entities"]["hashtags"]) &&
        typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["entities"]["hashtags"].every((e: any) =>
            (e !== null &&
                typeof e === "object" ||
                typeof e === "function") &&
            typeof e["text"] === "string"
        ) &&
        Array.isArray(typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["entities"]["urls"]) &&
        typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["entities"]["urls"].every((e: any) =>
            (e !== null &&
                typeof e === "object" ||
                typeof e === "function") &&
            typeof e["display_url"] === "string" &&
            typeof e["expanded_url"] === "string" &&
            typeof e["url"] === "string"
        ) &&
        Array.isArray(typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["entities"]["user_mentions"]) &&
        typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["entities"]["user_mentions"].every((e: any) =>
            (e !== null &&
                typeof e === "object" ||
                typeof e === "function") &&
            typeof e["screen_name"] === "string"
        ) &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"] === "undefined" ||
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"]["text"] === "string" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"]["entity_set"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"]["entity_set"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"]["entity_set"] === "function") &&
            Array.isArray(typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"]["entity_set"]["hashtags"]) &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"]["entity_set"]["hashtags"].every((e: any) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                typeof e["text"] === "string"
            ) &&
            Array.isArray(typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"]["entity_set"]["urls"]) &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"]["entity_set"]["urls"].every((e: any) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                typeof e["display_url"] === "string" &&
                typeof e["expanded_url"] === "string" &&
                typeof e["url"] === "string"
            ) &&
            Array.isArray(typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"]["entity_set"]["user_mentions"]) &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["note_tweet"]["entity_set"]["user_mentions"].every((e: any) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                typeof e["screen_name"] === "string"
            )) &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["lang"] === "string" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["reply_count"] === "number" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["retweet_count"] === "number" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["quote_count"] === "number" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["favorite_count"] === "number" &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["views"] === "undefined" ||
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["views"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["views"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["views"] === "function") &&
            (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["views"]["count"] === "undefined" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["views"]["count"] === "number")) &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["created_at"] === "string" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["source_name"] === "string" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["source_url"] === "string" &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] === "undefined" ||
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] === "function") &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["name"] === "poll2choice_text_only" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "function") &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "function") &&
            (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] === "undefined" ||
                (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] !== null &&
                    typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] === "object" ||
                    typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] === "function") &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"]["string_value"] === "string" &&
                typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"]["type"] === "STRING") &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"]["boolean_value"] === "boolean" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"]["type"] === "BOOLEAN" ||
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] === "function") &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["name"] === "poll3choice_text_only" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "function") &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_label"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_label"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_label"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_label"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_label"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_count"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_count"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_count"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_count"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_count"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "function") &&
            (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] === "undefined" ||
                (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] !== null &&
                    typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] === "object" ||
                    typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] === "function") &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"]["string_value"] === "string" &&
                typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"]["type"] === "STRING") &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"]["boolean_value"] === "boolean" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"]["type"] === "BOOLEAN" ||
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] === "function") &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["name"] === "poll4choice_text_only" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "function") &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_label"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_label"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_label"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_label"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_label"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_label"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_label"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice4_label"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice4_label"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice4_label"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice4_label"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice4_label"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice1_count"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice2_count"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_count"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_count"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_count"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_count"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice3_count"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice4_count"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice4_count"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice4_count"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice4_count"]["string_value"] === "string" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["choice4_count"]["type"] === "STRING" &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "function") &&
            (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] === "undefined" ||
                (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] !== null &&
                    typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] === "object" ||
                    typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"] === "function") &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"]["string_value"] === "string" &&
                typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["selected_choice"]["type"] === "STRING") &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"] === "function") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"]["boolean_value"] === "boolean" &&
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"]["counts_are_final"]["type"] === "BOOLEAN" ||
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] !== null &&
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] === "object" ||
                typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"] === "function") &&
            (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["name"] === "unified_card" ||
                typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["name"] === "summary_large_image" ||
                typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["name"] === "player") &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["card"]["binding_values"] === "object") &&
        (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"] !== null &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"] === "object" ||
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"] === "function") &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["id_str"] === "string" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["name"] === "string" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["screen_name"] === "string" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["description"] === "string" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["verified"] === "boolean" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["is_blue_verified"] === "boolean" &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["protected"] === "undefined" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["protected"] === false ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["protected"] === true) &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["created_at"] === "string" &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["following"] === "undefined" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["following"] === null ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["following"] === false ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["following"] === true) &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["followed_by"] === "undefined" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["followed_by"] === false ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["followed_by"] === true) &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["blocking"] === "undefined" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["blocking"] === null ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["blocking"] === false ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["blocking"] === true) &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["blocked_by"] === "undefined" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["blocked_by"] === false ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["blocked_by"] === true) &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["muting"] === "undefined" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["muting"] === null ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["muting"] === false ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["muting"] === true) &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["followers_count"] === "number" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["friends_count"] === "number" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["statuses_count"] === "number" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["media_count"] === "number" &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["favourites_count"] === "number"
    )
}
