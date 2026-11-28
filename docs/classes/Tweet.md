[**twi-ext v1.3.0**](../README.md)

***

[twi-ext](../README.md) / Tweet

# Class: Tweet

Defined in: [ts/tweet.ts:17](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/tweet.ts#L17)

Represents a tweet.

## Constructors

### Constructor

> **new Tweet**(`tweet`): `Tweet`

Defined in: [ts/tweet.ts:24](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/tweet.ts#L24)

Represents a tweet.

#### Parameters

##### tweet

`HTMLElement`

The tweet element.

#### Returns

`Tweet`

## Accessors

### data

#### Get Signature

> **get** **data**(): [`TweetData`](../type-aliases/TweetData.md)

Defined in: [ts/tweet.ts:62](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/tweet.ts#L62)

Read the tweet data using the web client that rendered it.

##### Returns

[`TweetData`](../type-aliases/TweetData.md)

Tweet data tagged with the web client.

***

### element

#### Get Signature

> **get** **element**(): `HTMLElement`

Defined in: [ts/tweet.ts:43](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/tweet.ts#L43)

Get the tweet element.

##### Returns

`HTMLElement`

The tweet element.

***

### metadata

#### Get Signature

> **get** **metadata**(): [`TweetMetadata`](../interfaces/TweetMetadata.md)

Defined in: [ts/tweet.ts:80](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/tweet.ts#L80)

Get metadata of the tweet.

##### Returns

[`TweetMetadata`](../interfaces/TweetMetadata.md)

Metadata of the tweet.

***

### props

#### Get Signature

> **get** **props**(): [`BasicTweetProps`](../interfaces/BasicTweetProps.md)

Defined in: [ts/tweet.ts:51](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/tweet.ts#L51)

Get the React props of the tweet element.

##### Returns

[`BasicTweetProps`](../interfaces/BasicTweetProps.md)

The React props of the tweet element.

## Methods

### quoteTweet()

> **quoteTweet**(`text`, `timeoutMs?`, `shouldOpenInNewTab?`): `Promise`\<`void`\>

Defined in: [ts/tweet.ts:155](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/tweet.ts#L155)

Quote specified tweet with specified text.
This function opens the compose screen and inputs text.
It does not click the submit button.

If the tweet is not retweetable, or failed to open the compose screen,
it opens new tab with the specified text and the tweet URL.

#### Parameters

##### text

`string`

Text to tweet.

##### timeoutMs?

`number` = `1000`

Timeout in milliseconds. After the specified time has elapsed, it moves to fallback mode.

##### shouldOpenInNewTab?

`boolean` = `false`

Whether to open the tweet composer in a new tab immediately.

#### Returns

`Promise`\<`void`\>
