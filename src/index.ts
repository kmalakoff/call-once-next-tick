export type Function = (...args: unknown[]) => unknown;

const defer = typeof setImmediate === 'function' ? setImmediate : (fn: () => void) => setTimeout(fn, 0);

export default function once(fn: Function) {
  let called = false;
  return function wrapper(arg1?: unknown, arg2?: unknown, arg3?: unknown, arg4?: unknown, arg5?: unknown, arg6?: unknown, ..._args: unknown[]) {
    if (called) return;
    called = true;

    defer(() => {
      // biome-ignore lint/complexity/noArguments: Apply arguments
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
          // biome-ignore lint/complexity/noArguments: Apply arguments
          return fn.apply(null, arguments);
      }
    });
  };
}
