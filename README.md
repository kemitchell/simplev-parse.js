```javascript
var assert = require('assert')
var parse = require('simplev-parse')

assert.deepEqual(
  parse('1.0.0'),
  { major: 1, minor: 0, fix: 0 })

assert.deepEqual(
  parse('7.112.2-3'),
  { major: 7, minor: 112, fix: 2, draft: 3 })

assert.deepEqual(
  parse('7.112.2-3'),
  { major: 7, minor: 112, fix: 2, draft: 3 })

assert.deepEqual(
  parse('garbage'),
  null)

assert.deepEqual(
  parse('0.1.1'),
  null)

assert.deepEqual(
  parse('00.0.0'),
  null)
```
