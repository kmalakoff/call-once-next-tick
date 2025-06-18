import asap from 'asap';
import assert from 'assert';

// @ts-ignore
import once from 'call-once-next-tick';

describe('once', () => {
  describe('does not call multiple times', () => {
    let args = [];

    function addArguments() {
      // biome-ignore lint/complexity/noArguments: Apply arguments
      args.push(Array.prototype.slice.call(arguments, 0));
    }

    it('0 arguments', (done) => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1();
      assert.ok(!args.length);

      asap(() => {
        assert.equal(args.length, 1);
        callback1();
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], []);

        asap(() => {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('1 argument', (done) => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1);
      assert.ok(!args.length);

      asap(() => {
        assert.equal(args.length, 1);
        callback1(101);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1]);

        asap(() => {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('2 arguments', (done) => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2);
      assert.ok(!args.length);

      asap(() => {
        assert.equal(args.length, 1);
        callback1(101, 102);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2]);

        asap(() => {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('3 arguments', (done) => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3);
      assert.ok(!args.length);

      asap(() => {
        assert.equal(args.length, 1);
        callback1(101, 102, 103);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2, 3]);

        asap(() => {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('4 arguments', (done) => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4);
      assert.ok(!args.length);

      asap(() => {
        assert.equal(args.length, 1);
        callback1(101, 102, 103, 104);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2, 3, 4]);

        asap(() => {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('5 arguments', (done) => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5);
      assert.ok(!args.length);

      asap(() => {
        assert.equal(args.length, 1);
        callback1(101, 102, 103, 104, 105);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2, 3, 4, 5]);

        asap(() => {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('6 arguments', (done) => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5, 6);
      assert.ok(!args.length);

      asap(() => {
        assert.equal(args.length, 1);
        callback1(101, 102, 103, 104, 105, 106);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2, 3, 4, 5, 6]);

        asap(() => {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });

    it('7 arguments', (done) => {
      args = [];
      const callback1 = once(addArguments);
      assert.ok(!args.length);
      callback1(1, 2, 3, 4, 5, 6, 7);
      assert.ok(!args.length);

      asap(() => {
        assert.equal(args.length, 1);
        callback1(101, 102, 103, 104, 105, 106, 107);
        assert.equal(args.length, 1);
        assert.deepEqual(args[0], [1, 2, 3, 4, 5, 6, 7]);

        asap(() => {
          assert.equal(args.length, 1);
          done();
        }, 10);
      }, 10);
    });
  });
});
