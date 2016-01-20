simplev is a versioning scheme, like Semantic Versioning, but with simpler syntax and different rules of meaning.

The package exports a single function that takes one simplev string argument and returns an `Object` describing its meaning or `null` if it wasn't a valid simplev.

```javascript
var parse = require('simplev-parse')
```

Every simplev has three numbers separated by periods. The numbers are called "edition", "update", and "correction".

```javascript
var assert = require('assert')

assert.deepEqual(
  parse('1.3.9'),
  { edition: 1, update: 3, correction: 9 })

assert.deepEqual(
  parse('garbage'),
  null)
```

Edition cannot be zero, but one or both of update and correction can.

```javascript
assert.deepEqual(
  parse('0.1.1'),
  null)

assert.deepEqual(
  parse('1.0.1'),
  { edition: 1, update: 0, correction: 1 })

assert.deepEqual(
  parse('2.7.0'),
  { edition: 2, update: 7, correction: 0 })

assert.deepEqual(
  parse('3.0.0'),
  { edition: 3, update: 0, correction: 0 })
```

Apart from when update or correction are zero, no number can start with zero.

```javascript
assert.deepEqual(
  parse('1.01.1'),
  null)
```

The simplev for the second draft of `7.2.5` is written:

```javascript
assert.deepEqual(
  parse('7.2.5-2'),
  { edition: 7, update: 2, correction: 5, draft: 2 })
```

Draft numbers start from one and increase from there:

```javascript
assert.deepEqual(
  parse('7.2.5-0'),
  null)
```
