[twi-ext - v0.3.1](../README.md) / Tweet

# Class: Tweet

Represents a tweet.

## Table of contents

### Constructors

- [constructor](Tweet.md#constructor)

### Accessors

- [element](Tweet.md#element)
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

[ts/tweet.ts:16](https://github.com/Robot-Inventor/twi-ext/blob/65d76bc9ad8547ef2aca87fa54e7ee6fa6a0c57e/src/ts/tweet.ts#L16)

## Accessors

### element

• `get` **element**(): `HTMLElement`

Get the tweet element.

#### Returns

`HTMLElement`

The tweet element.

#### Defined in

[ts/tweet.ts:35](https://github.com/Robot-Inventor/twi-ext/blob/65d76bc9ad8547ef2aca87fa54e7ee6fa6a0c57e/src/ts/tweet.ts#L35)

___

### props

• `get` **props**(): [`BasicTweetProps`](../interfaces/BasicTweetProps.md)

Get the React props of the tweet element.

#### Returns

[`BasicTweetProps`](../interfaces/BasicTweetProps.md)

The React props of the tweet element.

#### Defined in

[ts/tweet.ts:43](https://github.com/Robot-Inventor/twi-ext/blob/65d76bc9ad8547ef2aca87fa54e7ee6fa6a0c57e/src/ts/tweet.ts#L43)

## Methods

### quoteTweet

▸ **quoteTweet**(`text`, `timeoutMs`): `Promise`\<`void`\>

Quote specified tweet with specified text.
This function opens the compose screen and inputs text.
It does not click the submit button.

If the tweet is not retweetable, or failed to open the compose screen,
it opens new tab with the specified text and the tweet URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text to tweet. |
| `timeoutMs` | `number` | Timeout in milliseconds. After the specified time has elapsed, it moves to fallback mode. |

#### Returns

`Promise`\<`void`\>

**`Default`**

```ts
1000
```

#### Defined in

[ts/tweet.ts:116](https://github.com/Robot-Inventor/twi-ext/blob/65d76bc9ad8547ef2aca87fa54e7ee6fa6a0c57e/src/ts/tweet.ts#L116)
