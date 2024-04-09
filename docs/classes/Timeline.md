[twi-ext - v0.2.0](../README.md) / Timeline

# Class: Timeline

A class that observes the timeline and calls a callback when a new tweet is added.

## Table of contents

### Constructors

- [constructor](Timeline.md#constructor)

### Methods

- [onNewTweet](Timeline.md#onnewtweet)

## Constructors

### constructor

• **new Timeline**(`options?`): [`Timeline`](Timeline.md)

A class that observes the timeline and calls a callback when a new tweet is added.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Partial`\<[`TimelineOptions`](../interfaces/TimelineOptions.md)\> | Options for the timeline observer. |

#### Returns

[`Timeline`](Timeline.md)

#### Defined in

[src/timeline.ts:29](https://github.com/Robot-Inventor/twi-ext/blob/4b3d0146f22c3d7721c389c8ed678ae408d12cdd/src/timeline.ts#L29)

## Methods

### onNewTweet

▸ **onNewTweet**(`callback`): `void`

Set a callback that is called when a new tweet is added.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`tweet`: [`Tweet`](../interfaces/Tweet.md)) => `void` | A callback that is called when a new tweet is added. |

#### Returns

`void`

#### Defined in

[src/timeline.ts:63](https://github.com/Robot-Inventor/twi-ext/blob/4b3d0146f22c3d7721c389c8ed678ae408d12cdd/src/timeline.ts#L63)
