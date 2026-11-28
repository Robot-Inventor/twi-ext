[**twi-ext v1.3.0**](../README.md)

***

[twi-ext](../README.md) / Timeline

# Class: Timeline

Defined in: [ts/timeline.ts:21](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/timeline.ts#L21)

A class that observes the timeline and calls a callback when a new tweet is added.

## Constructors

### Constructor

> **new Timeline**(`options?`): `Timeline`

Defined in: [ts/timeline.ts:43](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/timeline.ts#L43)

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

Defined in: [ts/timeline.ts:141](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/timeline.ts#L141)

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

Defined in: [ts/timeline.ts:128](https://github.com/Robot-Inventor/twi-ext/blob/a682c13bb6196300a0957ddb155b2d1927be8b52/src/ts/timeline.ts#L128)

Set a callback that is called when a new tweet is added.

#### Parameters

##### callback

(`tweet`) => `void`

A callback that is called when a new tweet is added.

#### Returns

`void`
