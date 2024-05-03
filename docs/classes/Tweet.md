[**twi-ext v0.8.2**](../README.md) • **Docs**

***

[twi-ext v0.8.2](../README.md) / Tweet

# Class: Tweet

Represents a tweet.

## Constructors

### new Tweet()

> **new Tweet**(`tweet`): [`Tweet`](Tweet.md)

Represents a tweet.

#### Parameters

• **tweet**: `HTMLElement`

The tweet element.

#### Returns

[`Tweet`](Tweet.md)

#### Source

[ts/tweet.ts:24](https://github.com/Robot-Inventor/twi-ext/blob/ea76001205c6fba1f3478194a75c56db78c28f28/src/ts/tweet.ts#L24)

## Accessors

### element

> `get` **element**(): `HTMLElement`

Get the tweet element.

#### Returns

`HTMLElement`

The tweet element.

#### Source

[ts/tweet.ts:43](https://github.com/Robot-Inventor/twi-ext/blob/ea76001205c6fba1f3478194a75c56db78c28f28/src/ts/tweet.ts#L43)

***

### metadata

> `get` **metadata**(): [`TweetMetadata`](../interfaces/TweetMetadata.md)

Get metadata of the tweet.

#### Returns

[`TweetMetadata`](../interfaces/TweetMetadata.md)

Metadata of the tweet.

#### Source

[ts/tweet.ts:61](https://github.com/Robot-Inventor/twi-ext/blob/ea76001205c6fba1f3478194a75c56db78c28f28/src/ts/tweet.ts#L61)

***

### props

> `get` **props**(): [`BasicTweetProps`](../interfaces/BasicTweetProps.md)

Get the React props of the tweet element.

#### Returns

[`BasicTweetProps`](../interfaces/BasicTweetProps.md)

The React props of the tweet element.

#### Source

[ts/tweet.ts:51](https://github.com/Robot-Inventor/twi-ext/blob/ea76001205c6fba1f3478194a75c56db78c28f28/src/ts/tweet.ts#L51)

## Methods

### quoteTweet()

> **quoteTweet**(`text`, `timeoutMs`): `Promise`\<`void`\>

Quote specified tweet with specified text.
This function opens the compose screen and inputs text.
It does not click the submit button.

If the tweet is not retweetable, or failed to open the compose screen,
it opens new tab with the specified text and the tweet URL.

#### Parameters

• **text**: `string`

Text to tweet.

• **timeoutMs**: `number`= `1000`

Timeout in milliseconds. After the specified time has elapsed, it moves to fallback mode. Default is ``1000``.

#### Returns

`Promise`\<`void`\>

#### Source

[ts/tweet.ts:155](https://github.com/Robot-Inventor/twi-ext/blob/ea76001205c6fba1f3478194a75c56db78c28f28/src/ts/tweet.ts#L155)
