[twi-ext - v1.0.0](../README.md) / TwiExt

# Class: TwiExt

## Table of contents

### Constructors

- [constructor](TwiExt.md#constructor)

### Methods

- [getNewTweets](TwiExt.md#getnewtweets)
- [getTweets](TwiExt.md#gettweets)
- [onTimeLineChanged](TwiExt.md#ontimelinechanged)
- [onTimelineLoaded](TwiExt.md#ontimelineloaded)

## Constructors

### constructor

• **new TwiExt**()

#### Defined in

[module/twiExt.ts:7](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExt.ts#L7)

## Methods

### getNewTweets

▸ **getNewTweets**(): [`TwiExtTweet`](TwiExtTweet.md)[]

Get tweets from timeline.
This **doesn't includes** tweets that have been once retrieved.
To get all tweets, including those already retrieved, use [()](TwiExt.md#gettweets).

#### Returns

[`TwiExtTweet`](TwiExtTweet.md)[]

Tweets.

#### Defined in

[module/twiExt.ts:77](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExt.ts#L77)

___

### getTweets

▸ **getTweets**(): [`TwiExtTweet`](TwiExtTweet.md)[]

Get tweets from timeline.
This **includes** tweets that have been once retrieved.
To get only new tweets, use [()](TwiExt.md#getnewtweets).

#### Returns

[`TwiExtTweet`](TwiExtTweet.md)[]

Tweets.

#### Defined in

[module/twiExt.ts:58](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExt.ts#L58)

___

### onTimeLineChanged

▸ **onTimeLineChanged**(`callback`): `void`

Execute the callback function when the timeline is changed.
"Timeline" includes the notification page, but doesn't include the DM page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `Function` | Callback function. |

#### Returns

`void`

#### Defined in

[module/twiExt.ts:42](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExt.ts#L42)

___

### onTimelineLoaded

▸ **onTimelineLoaded**(`callback`): `void`

Execute the callback function when the timeline is loaded.
"Timeline" includes the notification page, but doesn't include the DM page.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `Function` | Callback function. |

#### Returns

`void`

#### Defined in

[module/twiExt.ts:21](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExt.ts#L21)
