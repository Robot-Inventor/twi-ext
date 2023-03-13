[twi-ext - v1.0.0](../README.md) / TwiExtUser

# Class: TwiExtUser

## Table of contents

### Constructors

- [constructor](TwiExtUser.md#constructor)

### Accessors

- [blockedBy](TwiExtUser.md#blockedby)
- [blocking](TwiExtUser.md#blocking)
- [blueVerified](TwiExtUser.md#blueverified)
- [createdAt](TwiExtUser.md#createdat)
- [description](TwiExtUser.md#description)
- [favoritesCount](TwiExtUser.md#favoritescount)
- [followedBy](TwiExtUser.md#followedby)
- [followersCount](TwiExtUser.md#followerscount)
- [following](TwiExtUser.md#following)
- [followsCount](TwiExtUser.md#followscount)
- [id](TwiExtUser.md#id)
- [mediaCount](TwiExtUser.md#mediacount)
- [muting](TwiExtUser.md#muting)
- [protected](TwiExtUser.md#protected)
- [screenName](TwiExtUser.md#screenname)
- [tweetsCount](TwiExtUser.md#tweetscount)
- [userName](TwiExtUser.md#username)
- [verified](TwiExtUser.md#verified)

## Constructors

### constructor

• **new TwiExtUser**(`userInfo`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userInfo` | `ReactPropsUserInfo` |

#### Defined in

[module/twiExtUser.ts:6](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L6)

## Accessors

### blockedBy

• `get` **blockedBy**(): `boolean`

Whether the currently logged in user is blocked by this account.

#### Returns

`boolean`

#### Defined in

[module/twiExtUser.ts:91](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L91)

___

### blocking

• `get` **blocking**(): `boolean`

Whether the currently logged-in user is blocking this account.

#### Returns

`boolean`

#### Defined in

[module/twiExtUser.ts:84](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L84)

___

### blueVerified

• `get` **blueVerified**(): `boolean`

Twitter Blue verified account or not.

#### Returns

`boolean`

#### Defined in

[module/twiExtUser.ts:48](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L48)

___

### createdAt

• `get` **createdAt**(): `string`

The date the account was created, in ISO 8601 format.
The time zone is zero UTC offset, as indicated by the suffix Z.

#### Returns

`string`

#### Defined in

[module/twiExtUser.ts:63](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L63)

___

### description

• `get` **description**(): `string`

Bio text.

#### Returns

`string`

#### Defined in

[module/twiExtUser.ts:34](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L34)

___

### favoritesCount

• `get` **favoritesCount**(): `number`

The number of tweets liked by the user.

#### Returns

`number`

#### Defined in

[module/twiExtUser.ts:133](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L133)

___

### followedBy

• `get` **followedBy**(): `boolean`

Whether the currently logged in user is followed by this account.

#### Returns

`boolean`

#### Defined in

[module/twiExtUser.ts:77](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L77)

___

### followersCount

• `get` **followersCount**(): `number`

Number of followers.

#### Returns

`number`

#### Defined in

[module/twiExtUser.ts:105](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L105)

___

### following

• `get` **following**(): `boolean`

Whether the currently logged-in user is following this account.

#### Returns

`boolean`

#### Defined in

[module/twiExtUser.ts:70](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L70)

___

### followsCount

• `get` **followsCount**(): `number`

Number of accounts the user is following.

#### Returns

`number`

#### Defined in

[module/twiExtUser.ts:112](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L112)

___

### id

• `get` **id**(): `string`

User ID (not screen name). For example, [@Twitter](https://twitter.com/twitter)'s ID is ``783214``.

#### Returns

`string`

#### Defined in

[module/twiExtUser.ts:13](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L13)

___

### mediaCount

• `get` **mediaCount**(): `number`

Number of media posted by the user.

#### Returns

`number`

#### Defined in

[module/twiExtUser.ts:126](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L126)

___

### muting

• `get` **muting**(): `boolean`

Whether the currently logged-in user is muting this account.

#### Returns

`boolean`

#### Defined in

[module/twiExtUser.ts:98](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L98)

___

### protected

• `get` **protected**(): `boolean`

Private account or not.

#### Returns

`boolean`

#### Defined in

[module/twiExtUser.ts:55](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L55)

___

### screenName

• `get` **screenName**(): \`@${string}\`

Screen name starting with ``@``.

#### Returns

\`@${string}\`

#### Defined in

[module/twiExtUser.ts:27](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L27)

___

### tweetsCount

• `get` **tweetsCount**(): `number`

Number of tweets by the user.

#### Returns

`number`

#### Defined in

[module/twiExtUser.ts:119](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L119)

___

### userName

• `get` **userName**(): `string`

User name (not screen name). For example, [@TwitterDev](https://twitter.com/TwitterDev)'s user name is ``Twitter Dev``.

#### Returns

`string`

#### Defined in

[module/twiExtUser.ts:20](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L20)

___

### verified

• `get` **verified**(): `boolean`

Verified account or not.

#### Returns

`boolean`

#### Defined in

[module/twiExtUser.ts:41](https://github.com/Robot-Inventor/twi-ext/blob/29a0089/src/module/twiExtUser.ts#L41)
