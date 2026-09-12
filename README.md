# call-once-next-tick

Calls a callback once after platform-independent next tick.

```bash
npm install call-once-next-tick
```

```js
var once = require('call-once-next-tick');
var assert = require('assert');

var results = [];

var callback1 = once(function () {
  results.push(Array.prototype.slice.call(arguments));
});
assert.ok(!results.length);
callback1('error', 'value1', 'value2');
assert.ok(!results.length);

setImmediate(function () {
  assert.equal(results.length, 1);
  assert.deepEqual(results[0], ['error', 'value1', 'value2']);
  callback1('error', 'value1', 'value2');
  assert.equal(results.length, 1);
});
```
