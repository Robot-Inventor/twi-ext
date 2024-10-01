[**twi-ext v0.11.4**](../README.md) • **Docs**

***

[twi-ext v0.11.4](../README.md) / composeNewTweet

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

[ts/util.ts:81](https://github.com/Robot-Inventor/twi-ext/blob/03168b941ce741c510b889fc4bbe7294b3071dcd/src/ts/util.ts#L81)
