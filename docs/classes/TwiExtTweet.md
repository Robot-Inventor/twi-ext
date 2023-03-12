[twi-ext - v1.0.0](../README.md) / TwiExtTweet

# Class: TwiExtTweet

## Table of contents

### Constructors

- [constructor](TwiExtTweet.md#constructor)

### Accessors

- [favoriteCount](TwiExtTweet.md#favoritecount)
- [hashtags](TwiExtTweet.md#hashtags)
- [id](TwiExtTweet.md#id)
- [lang](TwiExtTweet.md#lang)
- [poll](TwiExtTweet.md#poll)
- [postedDate](TwiExtTweet.md#posteddate)
- [quoteCount](TwiExtTweet.md#quotecount)
- [replyCount](TwiExtTweet.md#replycount)
- [retweetCount](TwiExtTweet.md#retweetcount)
- [sourceName](TwiExtTweet.md#sourcename)
- [sourceUrl](TwiExtTweet.md#sourceurl)
- [text](TwiExtTweet.md#text)
- [urls](TwiExtTweet.md#urls)
- [user](TwiExtTweet.md#user)
- [userMentions](TwiExtTweet.md#usermentions)
- [viewCount](TwiExtTweet.md#viewcount)

### Methods

- [getFormattedText](TwiExtTweet.md#getformattedtext)
- [getOuterElement](TwiExtTweet.md#getouterelement)

## Constructors

### constructor

• **new TwiExtTweet**(`tweetOuter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tweetOuter` | `HTMLElement` |

#### Defined in

module/twiExtTweet.ts:9

## Accessors

### favoriteCount

• `get` **favoriteCount**(): `number`

Number of likes.

#### Returns

`number`

#### Defined in

module/twiExtTweet.ts:133

___

### hashtags

• `get` **hashtags**(): \`#${string}\`[]

Array of hashtags.

#### Returns

\`#${string}\`[]

#### Defined in

module/twiExtTweet.ts:82

___

### id

• `get` **id**(): `string`

The ID of the tweet.
For example, the ID of ``https://twitter.com/TwitterDev/status/1621026986784337922`` is ``1621026986784337922``.

#### Returns

`string`

#### Defined in

module/twiExtTweet.ts:31

___

### lang

• `get` **lang**(): `string`

Language of the tweet.

#### Returns

`string`

#### Defined in

module/twiExtTweet.ts:103

___

### poll

• `get` **poll**(): `undefined` \| [`TwiExtPollData`](../interfaces/TwiExtPollData.md)

Poll data. If the tweet does not have a poll, returns undefined.

#### Returns

`undefined` \| [`TwiExtPollData`](../interfaces/TwiExtPollData.md)

#### Defined in

module/twiExtTweet.ts:178

___

### postedDate

• `get` **postedDate**(): `string`

The date the tweet was posted, in ISO 8601 format.
The time zone is zero UTC offset, as indicated by the suffix Z.

#### Returns

`string`

#### Defined in

module/twiExtTweet.ts:150

___

### quoteCount

• `get` **quoteCount**(): `number`

Number of retweets **with** comments.
To get the number of retweets without comments, use [retweetCount](TwiExtTweet.md#retweetcount) instead.

#### Returns

`number`

#### Defined in

module/twiExtTweet.ts:126

___

### replyCount

• `get` **replyCount**(): `number`

Number of replies.

#### Returns

`number`

#### Defined in

module/twiExtTweet.ts:110

___

### retweetCount

• `get` **retweetCount**(): `number`

Number of retweets **without** comments.
To get the number of retweets including retweets with comments, add [retweetCount](TwiExtTweet.md#retweetcount) and [quoteCount](TwiExtTweet.md#quotecount).

#### Returns

`number`

#### Defined in

module/twiExtTweet.ts:118

___

### sourceName

• `get` **sourceName**(): `string`

The source name from which the tweet was sent (e.g., ``Twitter Web App``, ``Twitter for Android``).

#### Returns

`string`

#### Defined in

module/twiExtTweet.ts:157

___

### sourceUrl

• `get` **sourceUrl**(): `string`

The source URL from which the tweet was sent (e.g., ``Twitter Web App`` is ``https://mobile.twitter.com``, ``Twitter for Android`` is ``http://twitter.com/download/android``).

#### Returns

`string`

#### Defined in

module/twiExtTweet.ts:164

___

### text

• `get` **text**(): `string`

Full text of the tweet.
URLs are shortened (e.g. https://example.com is shortened as https://t.co/Cae7rEHPww).
To get in other formats, use [()](TwiExtTweet.md#getformattedtext).

#### Returns

`string`

#### Defined in

module/twiExtTweet.ts:40

___

### urls

• `get` **urls**(): `string`[]

Array of URLs.

#### Returns

`string`[]

#### Defined in

module/twiExtTweet.ts:89

___

### user

• `get` **user**(): [`TwiExtUser`](TwiExtUser.md)

Information about the user who sent the tweet.

#### Returns

[`TwiExtUser`](TwiExtUser.md)

#### Defined in

module/twiExtTweet.ts:171

___

### userMentions

• `get` **userMentions**(): \`@${string}\`[]

Array of user mentions.

#### Returns

\`@${string}\`[]

#### Defined in

module/twiExtTweet.ts:96

___

### viewCount

• `get` **viewCount**(): `undefined` \| `number`

Number of views. If view count is unavailable, returns undefined.

#### Returns

`undefined` \| `number`

#### Defined in

module/twiExtTweet.ts:140

## Methods

### getFormattedText

▸ **getFormattedText**(`option`): `string`

Select the format of the URL contained in the tweet to retrieve the full text of the tweet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `option` | `Object` | Select the URL format. If ``default`` is given, the URL in the text will be returned in shortened form. ``display`` expands the URL, but omits the protocol, etc. ``expanded`` uses the full URL. |
| `option.linkType` | ``"default"`` \| ``"display"`` \| ``"expanded"`` | - |

#### Returns

`string`

Full text of the tweet.

#### Defined in

module/twiExtTweet.ts:56

___

### getOuterElement

▸ **getOuterElement**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

module/twiExtTweet.ts:246
