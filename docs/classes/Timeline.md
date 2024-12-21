[**twi-ext v0.13.5**](../README.md)

***

[twi-ext](../README.md) / Timeline

# Class: Timeline

A class that observes the timeline and calls a callback when a new tweet is added.

## Constructors

### new Timeline()

> **new Timeline**(`options`?): [`Timeline`](Timeline.md)

A class that observes the timeline and calls a callback when a new tweet is added.

#### Parameters

##### options?

`Partial`\<[`TimelineOptions`](../interfaces/TimelineOptions.md)\>

Options for the timeline observer.

#### Returns

[`Timeline`](Timeline.md)

#### Defined in

[ts/timeline.ts:29](https://github.com/Robot-Inventor/twi-ext/blob/161180962d20763ef92b105acdbfd3ec11584936/src/ts/timeline.ts#L29)

## Methods

### onNewProfile()

> **onNewProfile**(`callback`): `void`

Set a callback that is called when a new profile is added.

#### Parameters

##### callback

(`profile`) => `void`

A callback that is called when a new profile is added.

#### Returns

`void`

#### Defined in

[ts/timeline.ts:88](https://github.com/Robot-Inventor/twi-ext/blob/161180962d20763ef92b105acdbfd3ec11584936/src/ts/timeline.ts#L88)

***

### onNewTweet()

> **onNewTweet**(`callback`): `void`

Set a callback that is called when a new tweet is added.

#### Parameters

##### callback

(`tweet`) => `void`

A callback that is called when a new tweet is added.

#### Returns

`void`

#### Defined in

[ts/timeline.ts:80](https://github.com/Robot-Inventor/twi-ext/blob/161180962d20763ef92b105acdbfd3ec11584936/src/ts/timeline.ts#L80)
