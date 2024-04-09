[twi-ext - v0.3.1](../README.md) / Timeline

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

[ts/timeline.ts:28](https://github.com/Robot-Inventor/twi-ext/blob/acadbd1188db69e7b5ac3a875eb3264554878484/src/ts/timeline.ts#L28)

## Methods

### onNewTweet

▸ **onNewTweet**(`callback`): `void`

Set a callback that is called when a new tweet is added.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`tweet`: [`Tweet`](Tweet.md)) => `void` | A callback that is called when a new tweet is added. |

#### Returns

`void`

#### Defined in

[ts/timeline.ts:62](https://github.com/Robot-Inventor/twi-ext/blob/acadbd1188db69e7b5ac3a875eb3264554878484/src/ts/timeline.ts#L62)
