simplev is a versioning scheme, like Semantic Versioning, but with simpler syntax and different rules of meaning.

The package exports a single function that takes one simplev string argument and returns an `Object` describing its meaning or `null` if it wasn't a valid simplev.

```javascript
var parse = require('simplev-parse')
```

Every simplev has three numbers separated by periods. The numbers are called "major", "minor", and "fix".

```javascript
var assert = require('assert')

assert.deepEqual(
  parse('1.3.9'),
  { major: 1, minor: 3, fix: 9 })

assert.deepEqual(
  parse('garbage'),
  null)
```

Major cannot be zero, but one or both of minor and fix can.

```javascript
assert.deepEqual(
  parse('0.1.1'),
  null)
```

Apart from when minor or fix are zero, no number can start with zero.

```javascript
assert.deepEqual(
  parse('1.01.1'),
  null)
```

The simplev for the second draft of `7.2.5` is written:

```javascript
assert.deepEqual(
  parse('7.2.5-2'),
  { major: 7, minor: 2, fix: 5, draft: 2 })
```
