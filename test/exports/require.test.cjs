const assert = require('assert');
const once = require('call-once-next-tick');

describe('exports .cjs', () => {
  it('default', () => {
    assert.equal(typeof once, 'function');
  });
});
