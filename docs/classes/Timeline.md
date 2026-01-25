[**twi-ext v0.15.8**](../README.md)

***

[twi-ext](../README.md) / Timeline

# Class: Timeline

Defined in: [ts/timeline.ts:16](https://github.com/Robot-Inventor/twi-ext/blob/7ee806f02dbb102c30250ab8be38fd51dec87978/src/ts/timeline.ts#L16)

A class that observes the timeline and calls a callback when a new tweet is added.

## Constructors

### Constructor

> **new Timeline**(`options?`): `Timeline`

Defined in: [ts/timeline.ts:40](https://github.com/Robot-Inventor/twi-ext/blob/7ee806f02dbb102c30250ab8be38fd51dec87978/src/ts/timeline.ts#L40)

A class that observes the timeline and calls a callback when a new tweet is added.

#### Parameters

##### options?

`Partial`\<[`TimelineOptions`](../interfaces/TimelineOptions.md)\>

Options for the timeline observer.

#### Returns

`Timeline`

## Methods

### onNewProfile()

> **onNewProfile**(`callback`): `void`

Defined in: [ts/timeline.ts:108](https://github.com/Robot-Inventor/twi-ext/blob/7ee806f02dbb102c30250ab8be38fd51dec87978/src/ts/timeline.ts#L108)

Set a callback that is called when a new profile is added.

#### Parameters

##### callback

(`profile`) => `void`

A callback that is called when a new profile is added.

#### Returns

`void`

***

### onNewTweet()

> **onNewTweet**(`callback`): `void`

Defined in: [ts/timeline.ts:100](https://github.com/Robot-Inventor/twi-ext/blob/7ee806f02dbb102c30250ab8be38fd51dec87978/src/ts/timeline.ts#L100)

Set a callback that is called when a new tweet is added.

#### Parameters

##### callback

(`tweet`) => `void`

A callback that is called when a new tweet is added.

#### Returns

`void`
