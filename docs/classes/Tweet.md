[**twi-ext v0.15.2**](../README.md)

***

[twi-ext](../README.md) / Tweet

# Class: Tweet

Defined in: [ts/tweet.ts:14](https://github.com/Robot-Inventor/twi-ext/blob/e1fc343be23436036fe5edff8ee4936391bb2f4f/src/ts/tweet.ts#L14)

Represents a tweet.

## Constructors

### Constructor

> **new Tweet**(`tweet`): `Tweet`

Defined in: [ts/tweet.ts:21](https://github.com/Robot-Inventor/twi-ext/blob/e1fc343be23436036fe5edff8ee4936391bb2f4f/src/ts/tweet.ts#L21)

Represents a tweet.

#### Parameters

##### tweet

`HTMLElement`

The tweet element.

#### Returns

`Tweet`

## Accessors

### element

#### Get Signature

> **get** **element**(): `HTMLElement`

Defined in: [ts/tweet.ts:40](https://github.com/Robot-Inventor/twi-ext/blob/e1fc343be23436036fe5edff8ee4936391bb2f4f/src/ts/tweet.ts#L40)

Get the tweet element.

##### Returns

`HTMLElement`

The tweet element.

***

### metadata

#### Get Signature

> **get** **metadata**(): [`TweetMetadata`](../interfaces/TweetMetadata.md)

Defined in: [ts/tweet.ts:58](https://github.com/Robot-Inventor/twi-ext/blob/e1fc343be23436036fe5edff8ee4936391bb2f4f/src/ts/tweet.ts#L58)

Get metadata of the tweet.

##### Returns

[`TweetMetadata`](../interfaces/TweetMetadata.md)

Metadata of the tweet.

***

### props

#### Get Signature

> **get** **props**(): [`BasicTweetProps`](../interfaces/BasicTweetProps.md)

Defined in: [ts/tweet.ts:48](https://github.com/Robot-Inventor/twi-ext/blob/e1fc343be23436036fe5edff8ee4936391bb2f4f/src/ts/tweet.ts#L48)

Get the React props of the tweet element.

##### Returns

[`BasicTweetProps`](../interfaces/BasicTweetProps.md)

The React props of the tweet element.

## Methods

### quoteTweet()

> **quoteTweet**(`text`, `timeoutMs`, `shouldOpenInNewTab`): `Promise`\<`void`\>

Defined in: [ts/tweet.ts:129](https://github.com/Robot-Inventor/twi-ext/blob/e1fc343be23436036fe5edff8ee4936391bb2f4f/src/ts/tweet.ts#L129)

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
