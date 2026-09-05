import assert from 'assert';
import once from 'call-once-next-tick';

describe('exports .mjs', () => {
  it('default', () => {
    assert.equal(typeof once, 'function');
  });
});
