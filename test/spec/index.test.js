var assert = require('assert');
var callOnce = require('../..');

describe('callOnce', function () {
  describe('does not call multiple times', function () {
    var args = [];

    function addArguments() {
      args.push(Array.prototype.slice.call(arguments, 0));
    }

    it('0 arguments', function (done) {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1();
      assert.ok(!args.length);

      setImmediate(function () {
        assert.equal(args.length, 1);
        callback1();
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], []);

        setImmediate(function () {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('1 argument', function (done) {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1);
      assert.ok(!args.length);

      setImmediate(function () {
        assert.equal(args.length, 1);
        callback1(101);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1]);

        setImmediate(function () {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('2 arguments', function (done) {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2);
      assert.ok(!args.length);

      setImmediate(function () {
        assert.equal(args.length, 1);
        callback1(101, 102);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2]);

        setImmediate(function () {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('3 arguments', function (done) {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3);
      assert.ok(!args.length);

      setImmediate(function () {
        assert.equal(args.length, 1);
        callback1(101, 102, 103);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2, 3]);

        setImmediate(function () {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('4 arguments', function (done) {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4);
      assert.ok(!args.length);

      setImmediate(function () {
        assert.equal(args.length, 1);
        callback1(101, 102, 103, 104);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2, 3, 4]);

        setImmediate(function () {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('5 arguments', function (done) {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5);
      assert.ok(!args.length);

      setImmediate(function () {
        assert.equal(args.length, 1);
        callback1(101, 102, 103, 104, 105);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2, 3, 4, 5]);

        setImmediate(function () {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('6 arguments', function (done) {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5, 6);
      assert.ok(!args.length);

      setImmediate(function () {
        assert.equal(args.length, 1);
        callback1(101, 102, 103, 104, 105, 106);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2, 3, 4, 5, 6]);

        setImmediate(function () {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('7 arguments', function (done) {
      args = [];
      var callback1 = callOnce(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5, 6, 7);
      assert.ok(!args.length);

      setImmediate(function () {
        assert.equal(args.length, 1);
        callback1(101, 102, 103, 104, 105, 106, 107);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2, 3, 4, 5, 6, 7]);

        setImmediate(function () {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });
  });
});
