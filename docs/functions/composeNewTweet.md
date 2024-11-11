[**twi-ext v0.12.2**](../README.md) • **Docs**

***

[twi-ext v0.12.2](../README.md) / composeNewTweet

# Function: composeNewTweet()

> **composeNewTweet**(`text`, `timeoutMs`, `shouldOpenInNewTab`): `Promise`\<`void`\>

Compose a new tweet with the specified text.
If the function fails to compose a tweet within the specified timeout, it opens a new tab with the tweet text and URL.

## Parameters

• **text**: `string`

Text to tweet.

• **timeoutMs**: `number` = `1000`

Timeout in milliseconds. After the specified time has elapsed, it throws an error.

• **shouldOpenInNewTab**: `boolean` = `false`

Whether to open the tweet composer in a new tab immediately.

## Returns

`Promise`\<`void`\>

## Defined in

[ts/util.ts:90](https://github.com/Robot-Inventor/twi-ext/blob/1b0570cc904bcdfb1a5730f7cb91ae1b53d0f2e8/src/ts/util.ts#L90)
