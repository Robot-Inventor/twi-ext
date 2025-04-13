[**twi-ext v0.13.13**](../README.md)

***

[twi-ext](../README.md) / composeNewTweet

# Function: composeNewTweet()

> **composeNewTweet**(`text`, `timeoutMs`, `shouldOpenInNewTab`): `Promise`\<`void`\>

Defined in: [ts/util.ts:92](https://github.com/Robot-Inventor/twi-ext/blob/db8d2997cb698cd5fee2ae46f3b7bc7c50c3658f/src/ts/util.ts#L92)

Compose a new tweet with the specified text.
If the function fails to compose a tweet within the specified timeout, it opens a new tab with the tweet text and URL.

## Parameters

### text

`string`

Text to tweet.

### timeoutMs

`number` = `1000`

Timeout in milliseconds. After the specified time has elapsed, it throws an error.

### shouldOpenInNewTab

`boolean` = `false`

Whether to open the tweet composer in a new tab immediately.

## Returns

`Promise`\<`void`\>
