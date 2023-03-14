# twi-ext

Unofficial utility to develop browser extensions  or user scripts for Twitter. It allows easy access to the DOM and various information about tweets without Twitter API.

## Usage

For more information, please read the [documentation](https://github.com/Robot-Inventor/twi-ext/blob/main/docs).

```console
npm install twi-ext
```

```javascript
import { TwiExt } from "twi-ext";

const twiExt = new TwiExt();

twiExt.onTimeLineChanged(() => {
    // Get new tweets.
    const tweets = twiExt.getNewTweets();

    for (const tweet of tweets) {
        // Get tweet information.
        const info = {
            screenName: tweet.user.screenName,
            name: tweet.user.userName,
            text: tweet.text,
            likes: tweet.favoriteCount,
            retweets: tweet.retweetCount,
            comments: tweet.quoteCount,
            replies: tweet.replyCount
        };
        console.log(info);
        // Get the element of the tweet and add class "foo".
        tweet.getOuterElement().classList.add("foo");
    }
});

```

## ⚠️IMPORTANT⚠️

If you use this module for a browser extension, **DO NOT** use it in content scripts.

Instead, register a script using this module in Web Accessible Resources and load it by dynamically generating script tags in content scripts.

This is because this module works by retrieving React Props from the Twitter DOM, but cannot reference those properties from content scripts. For more information, please refer to the [MDN article](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment).

The following is a simple example.

```json
// manifest.json
{
    .
    .
    .
    "content_scripts": [
        {
            "matches": [
                "https://twitter.com/*",
                "https://mobile.twitter.com/*"
            ],
            "js": [
                "dist/contentScript.js"
            ]
        }
    ],
    "web_accessible_resources": [
        "dist/index.js"
    ]
}
```

```javascript
// dist/contentScript.js
const script = document.createElement("script");
script.src = chrome.runtime.getURL("dist/index.js");
script.addEventListener("load", () => {
    script.remove();
});
document.body.appendChild(script);
```

```javascript
// dist/index.js
import { TwiExt } from "twi-ext";

const twiExt = new TwiExt();
.
.
.
```

## Development

### Build

```console
npm run build
```

### Generate Document

```console
npm run doc
```
