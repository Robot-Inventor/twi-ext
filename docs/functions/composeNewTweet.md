[**twi-ext v0.11.2**](../README.md) • **Docs**

***

[twi-ext v0.11.2](../README.md) / composeNewTweet

# Function: composeNewTweet()

> **composeNewTweet**(`text`, `timeoutMs`): `Promise`\<`void`\>

Compose a new tweet with the specified text.
If the function fails to compose a tweet within the specified timeout, it opens a new tab with the tweet text and URL.

## Parameters

• **text**: `string`

Text to tweet.

• **timeoutMs**: `number` = `1000`

Timeout in milliseconds. After the specified time has elapsed, it throws an error.

## Returns

`Promise`\<`void`\>

## Defined in

[ts/util.ts:65](https://github.com/Robot-Inventor/twi-ext/blob/ebead7f2aef513bf4e9ea1360935b159bfe61389/src/ts/util.ts#L65)
