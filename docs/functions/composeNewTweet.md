[**twi-ext v1.0.3**](../README.md)

***

[twi-ext](../README.md) / composeNewTweet

# Function: composeNewTweet()

> **composeNewTweet**(`text`, `timeoutMs?`, `shouldOpenInNewTab?`): `Promise`\<`void`\>

Defined in: [ts/util.ts:112](https://github.com/Robot-Inventor/twi-ext/blob/f6b42de4ba939c7be1878addfa766c1637b8ba7f/src/ts/util.ts#L112)

Compose a new tweet with the specified text.
If the function fails to compose a tweet within the specified timeout, it opens a new tab with the tweet text and URL.

## Parameters

### text

`string`

Text to tweet.

### timeoutMs?

`number` = `1000`

Timeout in milliseconds. After the specified time has elapsed, it throws an error.

### shouldOpenInNewTab?

`boolean` = `false`

Whether to open the tweet composer in a new tab immediately.

## Returns

`Promise`\<`void`\>
