[**twi-ext v0.9.5**](../README.md) • **Docs**

***

[twi-ext v0.9.5](../README.md) / Timeline

# Class: Timeline

A class that observes the timeline and calls a callback when a new tweet is added.

## Constructors

### new Timeline()

> **new Timeline**(`options`?): [`Timeline`](Timeline.md)

A class that observes the timeline and calls a callback when a new tweet is added.

#### Parameters

• **options?**: `Partial`\<[`TimelineOptions`](../interfaces/TimelineOptions.md)\>

Options for the timeline observer.

#### Returns

[`Timeline`](Timeline.md)

#### Source

[ts/timeline.ts:30](https://github.com/Robot-Inventor/twi-ext/blob/0043afb9bd23d6bf1ccfc7a09fc743107f67542c/src/ts/timeline.ts#L30)

## Methods

### onNewProfile()

> **onNewProfile**(`callback`): `void`

Set a callback that is called when a new profile is added.

#### Parameters

• **callback**

A callback that is called when a new profile is added.

#### Returns

`void`

#### Source

[ts/timeline.ts:89](https://github.com/Robot-Inventor/twi-ext/blob/0043afb9bd23d6bf1ccfc7a09fc743107f67542c/src/ts/timeline.ts#L89)

***

### onNewTweet()

> **onNewTweet**(`callback`): `void`

Set a callback that is called when a new tweet is added.

#### Parameters

• **callback**

A callback that is called when a new tweet is added.

#### Returns

`void`

#### Source

[ts/timeline.ts:81](https://github.com/Robot-Inventor/twi-ext/blob/0043afb9bd23d6bf1ccfc7a09fc743107f67542c/src/ts/timeline.ts#L81)
