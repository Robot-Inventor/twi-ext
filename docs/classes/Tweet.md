[**twi-ext v0.13.12**](../README.md)

***

[twi-ext](../README.md) / Tweet

# Class: Tweet

Defined in: [ts/tweet.ts:19](https://github.com/Robot-Inventor/twi-ext/blob/8b545e372d37d3bd8a9a60b4daddf6602af884b4/src/ts/tweet.ts#L19)

Represents a tweet.

## Constructors

### new Tweet()

> **new Tweet**(`tweet`): [`Tweet`](Tweet.md)

Defined in: [ts/tweet.ts:26](https://github.com/Robot-Inventor/twi-ext/blob/8b545e372d37d3bd8a9a60b4daddf6602af884b4/src/ts/tweet.ts#L26)

Represents a tweet.

#### Parameters

##### tweet

`HTMLElement`

The tweet element.

#### Returns

[`Tweet`](Tweet.md)

## Accessors

### element

#### Get Signature

> **get** **element**(): `HTMLElement`

Defined in: [ts/tweet.ts:45](https://github.com/Robot-Inventor/twi-ext/blob/8b545e372d37d3bd8a9a60b4daddf6602af884b4/src/ts/tweet.ts#L45)

Get the tweet element.

##### Returns

`HTMLElement`

The tweet element.

***

### metadata

#### Get Signature

> **get** **metadata**(): [`TweetMetadata`](../interfaces/TweetMetadata.md)

Defined in: [ts/tweet.ts:64](https://github.com/Robot-Inventor/twi-ext/blob/8b545e372d37d3bd8a9a60b4daddf6602af884b4/src/ts/tweet.ts#L64)

Get metadata of the tweet.

##### Returns

[`TweetMetadata`](../interfaces/TweetMetadata.md)

Metadata of the tweet.

***

### props

#### Get Signature

> **get** **props**(): [`BasicTweetProps`](../interfaces/BasicTweetProps.md)

Defined in: [ts/tweet.ts:53](https://github.com/Robot-Inventor/twi-ext/blob/8b545e372d37d3bd8a9a60b4daddf6602af884b4/src/ts/tweet.ts#L53)

Get the React props of the tweet element.

##### Returns

[`BasicTweetProps`](../interfaces/BasicTweetProps.md)

The React props of the tweet element.

## Methods

### quoteTweet()

> **quoteTweet**(`text`, `timeoutMs`, `shouldOpenInNewTab`): `Promise`\<`void`\>

Defined in: [ts/tweet.ts:139](https://github.com/Robot-Inventor/twi-ext/blob/8b545e372d37d3bd8a9a60b4daddf6602af884b4/src/ts/tweet.ts#L139)

Quote specified tweet with specified text.
This function opens the compose screen and inputs text.
It does not click the submit button.

If the tweet is not retweetable, or failed to open the compose screen,
it opens new tab with the specified text and the tweet URL.

#### Parameters

##### text

`string`

Text to tweet.

##### timeoutMs

`number` = `1000`

Timeout in milliseconds. After the specified time has elapsed, it moves to fallback mode.

##### shouldOpenInNewTab

`boolean` = `false`

Whether to open the tweet composer in a new tab immediately.

#### Returns

`Promise`\<`void`\>
