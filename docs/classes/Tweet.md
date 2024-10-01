[**twi-ext v0.11.4**](../README.md) • **Docs**

***

[twi-ext v0.11.4](../README.md) / Tweet

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

#### Defined in

[ts/tweet.ts:26](https://github.com/Robot-Inventor/twi-ext/blob/03168b941ce741c510b889fc4bbe7294b3071dcd/src/ts/tweet.ts#L26)

## Accessors

### element

> `get` **element**(): `HTMLElement`

Get the tweet element.

#### Returns

`HTMLElement`

The tweet element.

#### Defined in

[ts/tweet.ts:45](https://github.com/Robot-Inventor/twi-ext/blob/03168b941ce741c510b889fc4bbe7294b3071dcd/src/ts/tweet.ts#L45)

***

### metadata

> `get` **metadata**(): [`TweetMetadata`](../interfaces/TweetMetadata.md)

Get metadata of the tweet.

#### Returns

[`TweetMetadata`](../interfaces/TweetMetadata.md)

Metadata of the tweet.

#### Defined in

[ts/tweet.ts:64](https://github.com/Robot-Inventor/twi-ext/blob/03168b941ce741c510b889fc4bbe7294b3071dcd/src/ts/tweet.ts#L64)

***

### props

> `get` **props**(): [`BasicTweetProps`](../interfaces/BasicTweetProps.md)

Get the React props of the tweet element.

#### Returns

[`BasicTweetProps`](../interfaces/BasicTweetProps.md)

The React props of the tweet element.

#### Defined in

[ts/tweet.ts:53](https://github.com/Robot-Inventor/twi-ext/blob/03168b941ce741c510b889fc4bbe7294b3071dcd/src/ts/tweet.ts#L53)

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

• **timeoutMs**: `number` = `1000`

Timeout in milliseconds. After the specified time has elapsed, it moves to fallback mode. Default is ``1000``.

#### Returns

`Promise`\<`void`\>

#### Defined in

[ts/tweet.ts:138](https://github.com/Robot-Inventor/twi-ext/blob/03168b941ce741c510b889fc4bbe7294b3071dcd/src/ts/tweet.ts#L138)
