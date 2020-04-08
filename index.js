var nextTick = require('next-tick');

module.exports = function callOnceNextTick(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    var self = this;
    var args = arguments;
    nextTick(function () {
      callback.apply(self, args);
    });
  };
};
