## call-once-next-tick

Calls a callback once after platform-independent next tick.

```
var next = callOnce('call-once-next-tick');
var assert = require('assert');

var results = [];

function addResults() {
  results.push(arguments);
}

var callback1 = callOnce(addResults);
assert.ok(!results.length);
callback1('error', 'value1', 'value2');
assert.ok(!results.length);

setImmediate(function () {
  assert.equal(results.length, 1);
  callback1('error', 'value1', 'value2');
  assert.equal(results.length, 1);
});

```
