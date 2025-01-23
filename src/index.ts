import asap from 'asap';

export default function once(fn) {
  let called = false;
  return function wrapper(arg1?, arg2?, arg3?, arg4?, arg5?, arg6?) {
    if (called) return;
    called = true;

    asap(() => {
      // biome-ignore lint/style/noArguments: <explanation>
      switch (arguments.length) {
        case 0:
          return fn();
        case 1:
          return fn(arg1);
        case 2:
          return fn(arg1, arg2);
        case 3:
          return fn(arg1, arg2, arg3);
        case 4:
          return fn(arg1, arg2, arg3, arg4);
        case 5:
          return fn(arg1, arg2, arg3, arg4, arg5);
        case 6:
          return fn(arg1, arg2, arg3, arg4, arg5, arg6);
        default:
          // biome-ignore lint/style/noArguments: <explanation>
          return fn.apply(null, arguments);
      }
    });
  };
}
