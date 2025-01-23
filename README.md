## call-once-next-tick

Calls a callback once after platform-independent next tick.

```
import once from 'call-once-next-tick';
import assert from 'assert';

const results = [];

const callback1 = once(() => results.push(arguments));
assert.ok(!results.length);
callback1('error', 'value1', 'value2');
assert.ok(!results.length);

setImmediate(() => {
  assert.equal(results.length, 1);
  callback1('error', 'value1', 'value2');
  assert.equal(results.length, 1);
});
```
