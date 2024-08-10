[**twi-ext v0.9.8**](../README.md) • **Docs**

***

[twi-ext v0.9.8](../README.md) / Timeline

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

#### Defined in

[ts/timeline.ts:30](https://github.com/Robot-Inventor/twi-ext/blob/fe225ae86f60058d4dbea270685e7d16b53aa7a0/src/ts/timeline.ts#L30)

## Methods

### onNewProfile()

> **onNewProfile**(`callback`): `void`

Set a callback that is called when a new profile is added.

#### Parameters

• **callback**

A callback that is called when a new profile is added.

#### Returns

`void`

#### Defined in

[ts/timeline.ts:89](https://github.com/Robot-Inventor/twi-ext/blob/fe225ae86f60058d4dbea270685e7d16b53aa7a0/src/ts/timeline.ts#L89)

***

### onNewTweet()

> **onNewTweet**(`callback`): `void`

Set a callback that is called when a new tweet is added.

#### Parameters

• **callback**

A callback that is called when a new tweet is added.

#### Returns

`void`

#### Defined in

[ts/timeline.ts:81](https://github.com/Robot-Inventor/twi-ext/blob/fe225ae86f60058d4dbea270685e7d16b53aa7a0/src/ts/timeline.ts#L81)
