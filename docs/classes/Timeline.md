[twi-ext - v0.8.1](../README.md) / Timeline

# Class: Timeline

A class that observes the timeline and calls a callback when a new tweet is added.

## Table of contents

### Constructors

- [constructor](Timeline.md#constructor)

### Methods

- [onNewProfile](Timeline.md#onnewprofile)
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

[ts/timeline.ts:30](https://github.com/Robot-Inventor/twi-ext/blob/e55cd2d8fa0f6dc5d7ec2e51e49bc3d00578e799/src/ts/timeline.ts#L30)

## Methods

### onNewProfile

▸ **onNewProfile**(`callback`): `void`

Set a callback that is called when a new profile is added.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`profile`: [`Profile`](Profile.md)) => `void` | A callback that is called when a new profile is added. |

#### Returns

`void`

#### Defined in

[ts/timeline.ts:89](https://github.com/Robot-Inventor/twi-ext/blob/e55cd2d8fa0f6dc5d7ec2e51e49bc3d00578e799/src/ts/timeline.ts#L89)

___

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

[ts/timeline.ts:81](https://github.com/Robot-Inventor/twi-ext/blob/e55cd2d8fa0f6dc5d7ec2e51e49bc3d00578e799/src/ts/timeline.ts#L81)
