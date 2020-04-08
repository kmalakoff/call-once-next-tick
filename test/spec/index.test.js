var assert = require('assert');
var callOnce = require('../..');

describe('callOnce', function () {
  it('does not call multiple times', function (done) {
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

      setImmediate(function () {
        assert.equal(results.length, 1);
        done();
      }, 10);
    }, 10);
  });
});
