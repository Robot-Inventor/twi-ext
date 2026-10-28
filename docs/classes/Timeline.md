[**twi-ext v1.2.0**](../README.md)

***

[twi-ext](../README.md) / Timeline

# Class: Timeline

Defined in: [ts/timeline.ts:16](https://github.com/Robot-Inventor/twi-ext/blob/d9195f45c87571df058113d45334572dfcd89487/src/ts/timeline.ts#L16)

A class that observes the timeline and calls a callback when a new tweet is added.

## Constructors

### Constructor

> **new Timeline**(`options?`): `Timeline`

Defined in: [ts/timeline.ts:39](https://github.com/Robot-Inventor/twi-ext/blob/d9195f45c87571df058113d45334572dfcd89487/src/ts/timeline.ts#L39)

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

Defined in: [ts/timeline.ts:110](https://github.com/Robot-Inventor/twi-ext/blob/d9195f45c87571df058113d45334572dfcd89487/src/ts/timeline.ts#L110)

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

Defined in: [ts/timeline.ts:102](https://github.com/Robot-Inventor/twi-ext/blob/d9195f45c87571df058113d45334572dfcd89487/src/ts/timeline.ts#L102)

Set a callback that is called when a new tweet is added.

#### Parameters

##### callback

(`tweet`) => `void`

A callback that is called when a new tweet is added.

#### Returns

`void`
