[**twi-ext v0.13.12**](../README.md)

***

[twi-ext](../README.md) / Timeline

# Class: Timeline

Defined in: [ts/timeline.ts:16](https://github.com/Robot-Inventor/twi-ext/blob/8b545e372d37d3bd8a9a60b4daddf6602af884b4/src/ts/timeline.ts#L16)

A class that observes the timeline and calls a callback when a new tweet is added.

## Constructors

### new Timeline()

> **new Timeline**(`options`?): [`Timeline`](Timeline.md)

Defined in: [ts/timeline.ts:29](https://github.com/Robot-Inventor/twi-ext/blob/8b545e372d37d3bd8a9a60b4daddf6602af884b4/src/ts/timeline.ts#L29)

A class that observes the timeline and calls a callback when a new tweet is added.

#### Parameters

##### options?

`Partial`\<[`TimelineOptions`](../interfaces/TimelineOptions.md)\>

Options for the timeline observer.

#### Returns

[`Timeline`](Timeline.md)

## Methods

### onNewProfile()

> **onNewProfile**(`callback`): `void`

Defined in: [ts/timeline.ts:88](https://github.com/Robot-Inventor/twi-ext/blob/8b545e372d37d3bd8a9a60b4daddf6602af884b4/src/ts/timeline.ts#L88)

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

Defined in: [ts/timeline.ts:80](https://github.com/Robot-Inventor/twi-ext/blob/8b545e372d37d3bd8a9a60b4daddf6602af884b4/src/ts/timeline.ts#L80)

Set a callback that is called when a new tweet is added.

#### Parameters

##### callback

(`tweet`) => `void`

A callback that is called when a new tweet is added.

#### Returns

`void`
