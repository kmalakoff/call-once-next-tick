var nextTick = require('next-tick');

module.exports = function callOnceNextTick(callback) {
  var called = false;
  return function (arg1, arg2, arg3, arg4, arg5, arg6) {
    if (called) return;
    called = true;

    var args = arguments;
    nextTick(function () {
      switch (arguments.length) {
        case 3:
          return callback(arg1);
        case 4:
          return callback(arg1, arg2);
        case 5:
          return callback(arg1, arg2, arg3);
        case 6:
          return callback(arg1, arg2, arg3, arg4);
        case 7:
          return callback(arg1, arg2, arg3, arg4, arg5);
        case 8:
          return callback(arg1, arg2, arg3, arg4, arg5, arg6);
        default:
          return callback.apply(null, args);
      }
    });
  };
};
