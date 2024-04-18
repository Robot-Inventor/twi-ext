[twi-ext - v0.7.3](../README.md) / Tweet

# Class: Tweet

Represents a tweet.

## Table of contents

### Constructors

- [constructor](Tweet.md#constructor)

### Accessors

- [element](Tweet.md#element)
- [metadata](Tweet.md#metadata)
- [props](Tweet.md#props)

### Methods

- [quoteTweet](Tweet.md#quotetweet)

## Constructors

### constructor

• **new Tweet**(`tweet`): [`Tweet`](Tweet.md)

Represents a tweet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tweet` | `HTMLElement` | The tweet element. |

#### Returns

[`Tweet`](Tweet.md)

#### Defined in

[ts/tweet.ts:24](https://github.com/Robot-Inventor/twi-ext/blob/d220db1abc25f7500da3ac50bc159c9a4370046e/src/ts/tweet.ts#L24)

## Accessors

### element

• `get` **element**(): `HTMLElement`

Get the tweet element.

#### Returns

`HTMLElement`

The tweet element.

#### Defined in

[ts/tweet.ts:43](https://github.com/Robot-Inventor/twi-ext/blob/d220db1abc25f7500da3ac50bc159c9a4370046e/src/ts/tweet.ts#L43)

___

### metadata

• `get` **metadata**(): [`TweetMetadata`](../interfaces/TweetMetadata.md)

Get metadata of the tweet.

#### Returns

[`TweetMetadata`](../interfaces/TweetMetadata.md)

Metadata of the tweet.

#### Defined in

[ts/tweet.ts:61](https://github.com/Robot-Inventor/twi-ext/blob/d220db1abc25f7500da3ac50bc159c9a4370046e/src/ts/tweet.ts#L61)

___

### props

• `get` **props**(): [`BasicTweetProps`](../interfaces/BasicTweetProps.md)

Get the React props of the tweet element.

#### Returns

[`BasicTweetProps`](../interfaces/BasicTweetProps.md)

The React props of the tweet element.

#### Defined in

[ts/tweet.ts:51](https://github.com/Robot-Inventor/twi-ext/blob/d220db1abc25f7500da3ac50bc159c9a4370046e/src/ts/tweet.ts#L51)

## Methods

### quoteTweet

▸ **quoteTweet**(`text`, `timeoutMs?`): `Promise`\<`void`\>

Quote specified tweet with specified text.
This function opens the compose screen and inputs text.
It does not click the submit button.

If the tweet is not retweetable, or failed to open the compose screen,
it opens new tab with the specified text and the tweet URL.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | Text to tweet. |
| `timeoutMs` | `number` | `1000` | Timeout in milliseconds. After the specified time has elapsed, it moves to fallback mode. Default is ``1000``. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[ts/tweet.ts:155](https://github.com/Robot-Inventor/twi-ext/blob/d220db1abc25f7500da3ac50bc159c9a4370046e/src/ts/tweet.ts#L155)
