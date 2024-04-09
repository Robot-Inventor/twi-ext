/*
 * Generated type guards for "reactProps.d.ts".
 * WARNING: Do not manually change this file.
 */
import { menubarReactProps } from "./reactProps";

export function isMenuBarReactProps(obj: unknown): obj is menubarReactProps {
    const typedObj = obj as menubarReactProps
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
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["possibly_sensitive"] === "undefined" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["possibly_sensitive"] === null ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["possibly_sensitive"] === false ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["possibly_sensitive"] === true) &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["possibly_sensitive_editable"] === "undefined" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["possibly_sensitive_editable"] === null ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["possibly_sensitive_editable"] === false ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["possibly_sensitive_editable"] === true) &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["permalink"] === "string" &&
        (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"] !== null &&
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"] === "object" ||
            typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"] === "function") &&
        (typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["possibly_sensitive"] === "undefined" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["possibly_sensitive"] === null ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["possibly_sensitive"] === false ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["possibly_sensitive"] === true) &&
        typeof typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["screen_name"] === "string" &&
        (typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["profile_interstitial_type"] === "" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["profile_interstitial_type"] === "sensitive_media" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["profile_interstitial_type"] === "fake_account" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["profile_interstitial_type"] === "offensive_profile_content" ||
            typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["profile_interstitial_type"] === "timeout") &&
        Array.isArray(typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["withheld_in_countries"]) &&
        typedObj["children"][1]["props"]["retweetWithCommentLink"]["state"]["quotedStatus"]["user"]["withheld_in_countries"].every((e: any) =>
            typeof e === "string"
        )
    )
}
