"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return once;
    }
});
var _nexttick = /*#__PURE__*/ _interop_require_default(require("next-tick"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function once(callback) {
    var called = false;
    return function onceWrapper(arg1, arg2, arg3, arg4, arg5, arg6) {
        if (called) return;
        called = true;
        // biome-ignore lint/style/noArguments: <explanation>
        var args = arguments;
        (0, _nexttick.default)(function() {
            switch(args.length){
                case 1:
                    return callback(arg1);
                case 2:
                    return callback(arg1, arg2);
                case 3:
                    return callback(arg1, arg2, arg3);
                case 4:
                    return callback(arg1, arg2, arg3, arg4);
                case 5:
                    return callback(arg1, arg2, arg3, arg4, arg5);
                case 6:
                    return callback(arg1, arg2, arg3, arg4, arg5, arg6);
                default:
                    // biome-ignore lint/style/noArguments: <explanation>
                    return callback.apply(null, args);
            }
        });
    };
}
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }