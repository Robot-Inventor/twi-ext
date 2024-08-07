[**twi-ext v0.9.7**](../README.md) • **Docs**

***

[twi-ext v0.9.7](../README.md) / Tweet

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

[ts/tweet.ts:25](https://github.com/Robot-Inventor/twi-ext/blob/688a3de578bc93fd7a7ce028029a01d82ab7e041/src/ts/tweet.ts#L25)

## Accessors

### element

> `get` **element**(): `HTMLElement`

Get the tweet element.

#### Returns

`HTMLElement`

The tweet element.

#### Defined in

[ts/tweet.ts:44](https://github.com/Robot-Inventor/twi-ext/blob/688a3de578bc93fd7a7ce028029a01d82ab7e041/src/ts/tweet.ts#L44)

***

### metadata

> `get` **metadata**(): [`TweetMetadata`](../interfaces/TweetMetadata.md)

Get metadata of the tweet.

#### Returns

[`TweetMetadata`](../interfaces/TweetMetadata.md)

Metadata of the tweet.

#### Defined in

[ts/tweet.ts:62](https://github.com/Robot-Inventor/twi-ext/blob/688a3de578bc93fd7a7ce028029a01d82ab7e041/src/ts/tweet.ts#L62)

***

### props

> `get` **props**(): [`BasicTweetProps`](../interfaces/BasicTweetProps.md)

Get the React props of the tweet element.

#### Returns

[`BasicTweetProps`](../interfaces/BasicTweetProps.md)

The React props of the tweet element.

#### Defined in

[ts/tweet.ts:52](https://github.com/Robot-Inventor/twi-ext/blob/688a3de578bc93fd7a7ce028029a01d82ab7e041/src/ts/tweet.ts#L52)

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

[ts/tweet.ts:158](https://github.com/Robot-Inventor/twi-ext/blob/688a3de578bc93fd7a7ce028029a01d82ab7e041/src/ts/tweet.ts#L158)
