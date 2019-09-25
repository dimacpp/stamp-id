# About

Library to generate and validate ID by pattern.

[![no dependencies](https://img.shields.io/badge/dependencies-none-green.svg)]()

## Install

`npm install stamp-id --save`

## Examples

### General usage

    const stampId = require('stamp-id');

    // generate
    const id = stampId.generate();

    // validate
    const isValid = stampId.validate(id);


### Generate examples

    // 1
    const id = stampId.generate('ddd-dd-dddd');
    // --> "253-15-7920

    // 2
    stampId.setAlphabet('N', '23456789');
    const id = stampId.generate('+1 Ndd-Ndd-dddd');
    // --> "+1 517-724-3835"

    // 3
    stampId.setAlphabet('R', 'AAAAAAAAAB');
    const id = stampId.generate('R');
    // --> "A" (90% probability) or "B" (10% probability)


### Built-in alphabets

    'b': '01',
    'd': '0123456789',
    'h': '0123456789abcdef',
    'H': '0123456789ABCDEF',
    'c': 'abcdefghijklmnopqrstuvwxyz',
    'C': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'a': 'abcdefghijklmnopqrstuvwxyz0123456789',
    'A': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    'z': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',

### Validate examples

    // 1
    const id = 'FRIDAY13';
    const isValid = stampId.validate(id, 'CCCCCC13');
    // --> true

    // 1
    stampId.setAlphabet('?', '-+./');
    const id = 'a0+b1/z9.gg-zz';
    const isValid = stampId.validate(id, 'aa?aa?aa?aa?aa');
    // --> true

### API

<dl>
<dt><a href="#generate">generate([pattern])</a> ⇒ <code>string</code></dt>
<dd><p>Generate new random id.</p>
</dd>
<dt><a href="#validate">validate(id, [pattern])</a> ⇒ <code>boolean</code></dt>
<dd><p>Validate id against pattern.</p>
</dd>
<dt><a href="#setAlphabet">setAlphabet(code, abc)</a></dt>
<dd><p>Add new or update exist alphabet.</p>
</dd>
</dl>

<a name="generate"></a>

#### generate([pattern]) ⇒ <code>string</code>
Generate new random id.

**Kind**: global function
**Returns**: <code>string</code> - id Random id.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [pattern] | <code>string</code> | <code>&quot;zzzzzzzz&quot;</code> | Text pattern of desired id. |

<a name="validate"></a>

#### validate(id, [pattern]) ⇒ <code>boolean</code>
Validate id against pattern.

**Kind**: global function
**Returns**: <code>boolean</code> - True if the id could be generated with the pattern.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| id | <code>string</code> |  | Id to test. |
| [pattern] | <code>string</code> | <code>&quot;zzzzzzzz&quot;</code> | Text pattern. |

<a name="setAlphabet"></a>

#### setAlphabet(code, abc)
Add new or update exist alphabet.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | One character which will be used in patterns. |
| abc | <code>string</code> | Alphabet chars. |

