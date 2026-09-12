import assert from 'assert';
import once from 'call-once-next-tick';

describe('exports .ts', () => {
  it('default', () => {
    assert.equal(typeof once, 'function');
  });
});
