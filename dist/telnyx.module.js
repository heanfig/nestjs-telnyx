"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "node_modules/es-errors/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Error;
  }
});

// node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "node_modules/es-errors/eval.js"(exports2, module2) {
    "use strict";
    module2.exports = EvalError;
  }
});

// node_modules/es-errors/range.js
var require_range = __commonJS({
  "node_modules/es-errors/range.js"(exports2, module2) {
    "use strict";
    module2.exports = RangeError;
  }
});

// node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "node_modules/es-errors/ref.js"(exports2, module2) {
    "use strict";
    module2.exports = ReferenceError;
  }
});

// node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "node_modules/es-errors/syntax.js"(exports2, module2) {
    "use strict";
    module2.exports = SyntaxError;
  }
});

// node_modules/es-errors/type.js
var require_type = __commonJS({
  "node_modules/es-errors/type.js"(exports2, module2) {
    "use strict";
    module2.exports = TypeError;
  }
});

// node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "node_modules/es-errors/uri.js"(exports2, module2) {
    "use strict";
    module2.exports = URIError;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports2, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports2, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/has-proto/index.js
var require_has_proto = __commonJS({
  "node_modules/has-proto/index.js"(exports2, module2) {
    "use strict";
    var test = {
      __proto__: null,
      foo: {}
    };
    var $Object = Object;
    module2.exports = function hasProto() {
      return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
    };
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports2, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports2, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/hasown/index.js
var require_hasown = __commonJS({
  "node_modules/hasown/index.js"(exports2, module2) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module2.exports = bind.call(call, $hasOwn);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports2, module2) {
    "use strict";
    var undefined2;
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var hasProto = require_has_proto()();
    var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
      return x.__proto__;
    } : null);
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn2 = require_hasown();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn2(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn2(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn2(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn2(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "node_modules/es-define-property/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module2.exports = $defineProperty;
  }
});

// node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/gopd/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module2.exports = $gOPD;
  }
});

// node_modules/define-data-property/index.js
var require_define_data_property = __commonJS({
  "node_modules/define-data-property/index.js"(exports2, module2) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var gopd = require_gopd();
    module2.exports = function defineDataProperty(obj, property, value) {
      if (!obj || typeof obj !== "object" && typeof obj !== "function") {
        throw new $TypeError("`obj` must be an object or a function`");
      }
      if (typeof property !== "string" && typeof property !== "symbol") {
        throw new $TypeError("`property` must be a string or a symbol`");
      }
      if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
        throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
        throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
        throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
      }
      if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
        throw new $TypeError("`loose`, if provided, must be a boolean");
      }
      var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
      var nonWritable = arguments.length > 4 ? arguments[4] : null;
      var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
      var loose = arguments.length > 6 ? arguments[6] : false;
      var desc = !!gopd && gopd(obj, property);
      if ($defineProperty) {
        $defineProperty(obj, property, {
          configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
          enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
          value,
          writable: nonWritable === null && desc ? desc.writable : !nonWritable
        });
      } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
        obj[property] = value;
      } else {
        throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
      }
    };
  }
});

// node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/has-property-descriptors/index.js"(exports2, module2) {
    "use strict";
    var $defineProperty = require_es_define_property();
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      return !!$defineProperty;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!$defineProperty) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module2.exports = hasPropertyDescriptors;
  }
});

// node_modules/set-function-length/index.js
var require_set_function_length = __commonJS({
  "node_modules/set-function-length/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var define = require_define_data_property();
    var hasDescriptors = require_has_property_descriptors()();
    var gOPD = require_gopd();
    var $TypeError = require_type();
    var $floor = GetIntrinsic("%Math.floor%");
    module2.exports = function setFunctionLength(fn, length) {
      if (typeof fn !== "function") {
        throw new $TypeError("`fn` is not a function");
      }
      if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
        throw new $TypeError("`length` must be a positive 32-bit integer");
      }
      var loose = arguments.length > 2 && !!arguments[2];
      var functionLengthIsConfigurable = true;
      var functionLengthIsWritable = true;
      if ("length" in fn && gOPD) {
        var desc = gOPD(fn, "length");
        if (desc && !desc.configurable) {
          functionLengthIsConfigurable = false;
        }
        if (desc && !desc.writable) {
          functionLengthIsWritable = false;
        }
      }
      if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
        if (hasDescriptors) {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length,
            true,
            true
          );
        } else {
          define(
            /** @type {Parameters<define>[0]} */
            fn,
            "length",
            length
          );
        }
      }
      return fn;
    };
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports2, module2) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var setFunctionLength = require_set_function_length();
    var $TypeError = require_type();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $defineProperty = require_es_define_property();
    var $max = GetIntrinsic("%Math.max%");
    module2.exports = function callBind(originalFunction) {
      if (typeof originalFunction !== "function") {
        throw new $TypeError("a function is required");
      }
      var func = $reflectApply(bind, $call, arguments);
      return setFunctionLength(
        func,
        1 + $max(0, originalFunction.length - (arguments.length - 1)),
        true
      );
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "node_modules/object-inspect/util.inspect.js"(exports2, module2) {
    module2.exports = require("util").inspect;
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports2, module2) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util_inspect();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    module2.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn2 = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn2.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list2, key) {
      var prev = list2;
      var curr;
      for (; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list2.next;
          list2.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('.').ListNode<typeof value>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      return !!listGetNode(objects, key);
    };
    module2.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o) {
              return listGet($o, key);
            }
          }
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o) {
              return listHas($o, key);
            }
          }
          return false;
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key, value);
          }
        }
      };
      return channel;
    };
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports2, module2) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module2.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/qs/lib/utils.js"(exports2, module2) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var limit = 1024;
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module2.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports2, module2) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify2 = function stringify3(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? prefix.replace(/\./g, "%2E") : prefix;
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? key.replace(/\./g, "%2E") : key;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify3(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys, stringify2(
          obj[key],
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") {
          obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        if (options.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
        }
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports2, module2) {
    "use strict";
    var stringify2 = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module2.exports = {
      formats,
      parse,
      stringify: stringify2
    };
  }
});

// node_modules/telnyx/dist/utils.js
function isAuthKey(key) {
  return typeof key == "string" && /^KEY[A-Z0-9]{32}_[a-zA-Z0-9]{22}$/.test(key);
}
function isJsonString(str) {
  try {
    if (!str || str.includes("filter[tag]=")) {
      return false;
    }
    JSON.parse(str);
  } catch (_e) {
    return false;
  }
  return true;
}
function isOptionsHash(o) {
  return o && typeof o === "object" && OPTIONS_KEYS.some((prop) => Object.prototype.hasOwnProperty.call(o, prop));
}
function removeEmpty(obj) {
  if (typeof obj !== "object") {
    throw new Error("Argument must be an object");
  }
  Object.keys(obj).forEach(function(key) {
    if (obj[key] === null || obj[key] === void 0) {
      delete obj[key];
    }
  });
  return obj;
}
function snakeToCamelCase(name) {
  const words = name.split("_");
  return words.reduce(function(acc, nextWord) {
    return acc + nextWord.charAt(0).toUpperCase() + nextWord.slice(1);
  });
}
function callbackifyPromiseWithTimeout(promise, callback) {
  if (callback) {
    return promise.then((res) => {
      setTimeout(() => {
        callback(null, res);
      }, 0);
    }, (err) => {
      setTimeout(() => {
        callback(err, null);
      }, 0);
    });
  }
  return promise;
}
function addResourceToResponseData(response, telnyx, resourceName, methods) {
  if (response && response.data && typeof response.data === "object") {
    const resourceFulData = telnyx[resourceName];
    Object.assign(resourceFulData, response.data, methods);
    response.data = resourceFulData;
  }
  return response;
}
function createNestedMethods(telnyxMethod97, names, spec) {
  const methods = {};
  names.forEach(function(name) {
    methods[name] = methods[snakeToCamelCase(name)] = telnyxMethod97(spec(name));
  });
  return methods;
}
function getDataFromArgs(args) {
  if (!Array.isArray(args) || !args[0] || typeof args[0] !== "object") {
    return {};
  }
  if (!isOptionsHash(args[0])) {
    return args.shift();
  }
  const argKeys = Object.keys(args[0]);
  const optionKeysInArgs = argKeys.filter((key) => OPTIONS_KEYS.includes(key));
  if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
    emitWarning(`Options found in arguments (${optionKeysInArgs.join(", ")}). Did you mean to pass an options object?`);
  }
  return {};
}
function getOptionsFromArgs(args) {
  const opts = {
    auth: null,
    headers: {}
  };
  if (args.length > 0) {
    const arg = args[args.length - 1];
    if (isAuthKey(arg)) {
      opts.auth = args.pop();
    } else if (isOptionsHash(arg)) {
      const params = { ...args.pop() };
      const extraKeys = Object.keys(params).filter(function(key) {
        return OPTIONS_KEYS.indexOf(key) == -1;
      });
      if (extraKeys.length) {
        emitWarning("Invalid options found (" + extraKeys.join(", ") + "); ignoring.");
      }
      if (params.api_key) {
        opts.auth = params.apiKey;
      }
    }
  }
  return opts;
}
function emitWarning(warning) {
  if (typeof process.emitWarning !== "function") {
    return console.warn(`Telnyx: ${warning}`);
  }
  return process.emitWarning(warning, "Telnyx");
}
function toSingular(name) {
  if (name.endsWith("s")) {
    return name.slice(0, -1);
  }
  return name;
}
function pascalToCamelCase(name) {
  var _a;
  return ((_a = name[0]) == null ? void 0 : _a.toLowerCase()) + name.substring(1);
}
function stringifyRequestData(data) {
  return qs.stringify(data, {
    arrayFormat: "brackets",
    serializeDate: (d) => Math.floor(d.getTime() / 1e3).toString()
  }).replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function protoExtend(sub) {
  const Super = this;
  const Constructor = Object.prototype.hasOwnProperty.call(sub, "constructor") ? sub.constructor : (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function(...args) {
      Super.apply(this, args);
    }
  );
  Object.assign(Constructor, Super);
  Constructor.prototype = Object.create(Super.prototype);
  Object.assign(Constructor.prototype, sub);
  return Constructor;
}
function tryParseJSON(jsonString) {
  try {
    if (jsonString === "") {
      const defaultValue = {
        data: jsonString
      };
      return defaultValue;
    }
    return JSON.parse(jsonString);
  } catch (_e) {
    const defaultValue = {
      data: jsonString
    };
    return defaultValue;
  }
}
var qs, OPTIONS_KEYS, makeURLInterpolator;
var init_utils = __esm({
  "node_modules/telnyx/dist/utils.js"() {
    qs = __toESM(require_lib(), 1);
    OPTIONS_KEYS = ["api_key"];
    makeURLInterpolator = /* @__PURE__ */ (() => {
      const rc = {
        "\n": "\\n",
        '"': '\\"',
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
      };
      return (str) => {
        const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0] || "");
        return (outputs) => {
          return cleanString.replace(/\{([\s\S]+?)\}/g, (_$0, $1) => (
            // @ts-expect-error TODO: cast outputs to string
            encodeURIComponent(outputs[$1] || "")
          ));
        };
      };
    })();
  }
});

// node_modules/telnyx/dist/Error.js
var Error_exports = {};
__export(Error_exports, {
  TelnyxAPIError: () => TelnyxAPIError,
  TelnyxAuthenticationError: () => TelnyxAuthenticationError,
  TelnyxConnectionError: () => TelnyxConnectionError,
  TelnyxError: () => TelnyxError,
  TelnyxInvalidParametersError: () => TelnyxInvalidParametersError,
  TelnyxInvalidRequestError: () => TelnyxInvalidRequestError,
  TelnyxMethodNotSupportedError: () => TelnyxMethodNotSupportedError,
  TelnyxPermissionError: () => TelnyxPermissionError,
  TelnyxRateLimitError: () => TelnyxRateLimitError,
  TelnyxResourceNotFoundError: () => TelnyxResourceNotFoundError,
  TelnyxServiceUnavailableError: () => TelnyxServiceUnavailableError,
  TelnyxSignatureVerificationError: () => TelnyxSignatureVerificationError,
  TelnyxTimeoutError: () => TelnyxTimeoutError,
  TelnyxUnsupportedMediaTypeError: () => TelnyxUnsupportedMediaTypeError,
  generate: () => generate
});
var generate, TelnyxError, TelnyxInvalidRequestError, TelnyxAPIError, TelnyxAuthenticationError, TelnyxPermissionError, TelnyxResourceNotFoundError, TelnyxMethodNotSupportedError, TelnyxTimeoutError, TelnyxUnsupportedMediaTypeError, TelnyxInvalidParametersError, TelnyxRateLimitError, TelnyxServiceUnavailableError, TelnyxConnectionError, TelnyxSignatureVerificationError;
var init_Error = __esm({
  "node_modules/telnyx/dist/Error.js"() {
    generate = (rawTelnyxError) => {
      switch (rawTelnyxError.statusCode) {
        case 400:
          return new TelnyxInvalidRequestError(rawTelnyxError);
        case 401:
          return new TelnyxAuthenticationError(rawTelnyxError);
        case 403:
          return new TelnyxPermissionError(rawTelnyxError);
        case 404:
          return new TelnyxResourceNotFoundError(rawTelnyxError);
        case 405:
          return new TelnyxMethodNotSupportedError(rawTelnyxError);
        case 408:
          return new TelnyxTimeoutError(rawTelnyxError);
        case 415:
          return new TelnyxUnsupportedMediaTypeError(rawTelnyxError);
        case 422:
          return new TelnyxInvalidParametersError(rawTelnyxError);
        case 429:
          return new TelnyxRateLimitError(rawTelnyxError);
        case 500:
          return new TelnyxAPIError(rawTelnyxError);
        case 503:
          return new TelnyxServiceUnavailableError(rawTelnyxError);
      }
      return new TelnyxError({ type: "Generic", message: "Unknown Error" });
    };
    TelnyxError = class extends Error {
      message;
      type;
      raw;
      headers;
      requestId;
      detail;
      code;
      statusCode;
      responseBody;
      constructor(raw = {}, type = null) {
        super(raw.message);
        this.type = type || this.constructor.name;
        this.raw = raw;
        this.code = raw.code;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        this.responseBody = raw.responseBody;
        this.message = raw.message;
      }
      /**
       * Helper factory which takes raw Telnyx errors and outputs wrapping instances
       */
      static generate = generate;
    };
    TelnyxInvalidRequestError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxInvalidRequestError");
      }
    };
    TelnyxAPIError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxAPIError");
      }
    };
    TelnyxAuthenticationError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxAuthenticationError");
      }
    };
    TelnyxPermissionError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxPermissionError");
      }
    };
    TelnyxResourceNotFoundError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxResourceNotFoundError");
      }
    };
    TelnyxMethodNotSupportedError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxMethodNotSupportedError");
      }
    };
    TelnyxTimeoutError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxTimeoutError");
      }
    };
    TelnyxUnsupportedMediaTypeError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxUnsupportedMediaTypeError");
      }
    };
    TelnyxInvalidParametersError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxInvalidParametersError");
      }
    };
    TelnyxRateLimitError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxRateLimitError");
      }
    };
    TelnyxServiceUnavailableError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxServiceUnavailableError");
      }
    };
    TelnyxConnectionError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxConnectionError");
      }
    };
    TelnyxSignatureVerificationError = class extends TelnyxError {
      constructor(raw = {}) {
        super(raw, "TelnyxSignatureVerificationError");
      }
    };
  }
});

// node_modules/telnyx/dist/makeRequest.js
function _getRequestOpts(self2, requestArgs, spec, overrideData) {
  const commandPath = typeof spec.path == "function" ? spec.path : makeURLInterpolator(spec.path || "");
  const requestMethod = (spec.method || "GET").toUpperCase();
  const urlParams = spec.urlParams || [];
  const encode = spec.encode || function(data2) {
    return data2;
  };
  const host = spec.host;
  const args = [].slice.call(requestArgs);
  const urlData = self2.createUrlData();
  for (let i = 0, l = urlParams.length; i < l; ++i) {
    let path2;
    const arg = args[0];
    let param = urlParams[i] || "";
    const isOptional = OPTIONAL_REGEX.test(param);
    param = param.replace(OPTIONAL_REGEX, "");
    if (param == "id" && typeof arg !== "string") {
      path2 = self2.createResourcePathWithSymbols(spec.path);
      throw new Error('Telnyx: "id" must be a string, but got: ' + typeof arg + " (on API request to `" + requestMethod + " " + path2 + "`)");
    }
    if (!arg) {
      if (isOptional) {
        urlData[param] = "";
        continue;
      }
      path2 = self2.createResourcePathWithSymbols(spec.path);
      throw new Error('Telnyx: Argument "' + urlParams[i] + '" required, but got: ' + arg + " (on API request to `" + requestMethod + " " + path2 + "`)");
    }
    urlData[param] = args.shift();
  }
  const dataFromArgs = getDataFromArgs(args);
  const data = encode(Object.assign({}, dataFromArgs, overrideData));
  const options = getOptionsFromArgs(args);
  if (args.length) {
    const path2 = self2.createResourcePathWithSymbols(spec.path);
    throw new Error("Telnyx: Unknown arguments (" + args + "). Did you mean to pass an options object? (on API request to " + requestMethod + " `" + path2 + "`)");
  }
  const requestPath = self2.createFullPath(commandPath, urlData);
  const headers = Object.assign(options.headers, spec.headers);
  if (spec.validator) {
    spec.validator(data, { headers });
  }
  return {
    requestMethod,
    requestPath,
    data,
    auth: options.auth,
    headers,
    host
  };
}
function makeRequest(self2, requestArgs, spec, overrideData) {
  return new Promise(function(resolve, reject) {
    let opts;
    try {
      opts = _getRequestOpts(self2, requestArgs, spec, overrideData);
    } catch (err) {
      reject(err);
      return;
    }
    function requestCallback(err, response) {
      if (err) {
        reject(err);
      } else {
        resolve(spec.transformResponseData && (response == null ? void 0 : response.data) ? spec.transformResponseData(response, self2._telnyx) : response);
      }
    }
    self2._request(opts.requestMethod, opts.host, opts.requestPath, opts.data, opts.auth, { headers: opts.headers }, requestCallback);
  });
}
var OPTIONAL_REGEX, makeRequest_default;
var init_makeRequest = __esm({
  "node_modules/telnyx/dist/makeRequest.js"() {
    init_utils();
    OPTIONAL_REGEX = /^optional!/;
    makeRequest_default = makeRequest;
  }
});

// node_modules/telnyx/dist/autoPagination.js
function makeAutoPaginationMethods(self2, requestArgs, spec, firstPagePromise) {
  const promiseCache = { currentPromise: null };
  let listPromise = firstPagePromise;
  let i = 0;
  function iterate(listResult) {
    if (!(listResult && listResult.data && typeof listResult.data.length === "number")) {
      throw Error("Unexpected: Telnyx API response does not have a well-formed `data` array.");
    }
    if (i < listResult.data.length) {
      const value = listResult.data[i];
      i += 1;
      return { value, done: false };
    } else if (hasMore(listResult)) {
      i = 0;
      const nextPageNumber = getNextPageNumber(listResult);
      const pageSize = getPageSize(listResult);
      listPromise = makeRequest_default(self2, requestArgs, spec, {
        page: { number: nextPageNumber, size: pageSize }
      });
      return listPromise.then(iterate);
    }
    return { value: void 0, done: true };
  }
  function hasMore(listResult) {
    return listResult.data.length && listResult.meta.page_number && listResult.meta.total_pages && listResult.meta.total_pages > listResult.meta.page_number;
  }
  function getNextPageNumber(listResult) {
    return listResult.meta.page_number + 1;
  }
  function getPageSize(listResult) {
    return listResult.meta.page_size;
  }
  function asyncIteratorNext() {
    return memoizedPromise(promiseCache, function(resolve, reject) {
      return listPromise.then(iterate).then(resolve).catch(reject);
    });
  }
  const autoPagingEach = makeAutoPagingEach(asyncIteratorNext);
  const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
  const autoPaginationMethods = {
    autoPagingEach,
    autoPagingToArray,
    // Async iterator functions:
    next: asyncIteratorNext,
    return: function() {
      return {};
    },
    [getAsyncIteratorSymbol()]: function() {
      return autoPaginationMethods;
    }
  };
  return autoPaginationMethods;
}
function getAsyncIteratorSymbol() {
  if (typeof Symbol !== "undefined" && Symbol.asyncIterator) {
    return Symbol.asyncIterator;
  }
  return "@@asyncIterator";
}
function getDoneCallback(args) {
  if (args.length < 2) {
    return null;
  }
  const onDone = args[1];
  if (typeof onDone !== "function") {
    throw Error("The second argument to autoPagingEach, if present, must be a callback function; receieved " + typeof onDone);
  }
  return onDone;
}
function getItemCallback(args) {
  if (args.length === 0) {
    return void 0;
  }
  const onItem = args[0];
  if (typeof onItem !== "function") {
    throw Error("The first argument to autoPagingEach, if present, must be a callback function; receieved " + typeof onItem);
  }
  if (onItem.length === 2) {
    return onItem;
  }
  if (onItem.length > 2) {
    throw Error("The `onItem` callback function passed to autoPagingEach must accept at most two arguments; got " + onItem);
  }
  return function _onItem(item, next) {
    const shouldContinue = onItem(item);
    next(shouldContinue);
  };
}
function memoizedPromise(promiseCache, cb) {
  if (promiseCache.currentPromise) {
    return promiseCache.currentPromise;
  }
  promiseCache.currentPromise = new Promise(cb).then(function(ret) {
    promiseCache.currentPromise = void 0;
    return ret;
  });
  return promiseCache.currentPromise;
}
function makeAutoPagingEach(asyncIteratorNext) {
  return function autoPagingEach(...args) {
    const onItem = getItemCallback(args);
    const onDone = getDoneCallback(args);
    if (args.length > 2) {
      throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
    }
    const autoPagePromise = wrapAsyncIteratorWithCallback(
      asyncIteratorNext,
      // @ts-expect-error we might need a null check
      onItem
    );
    return callbackifyPromiseWithTimeout(autoPagePromise, onDone);
  };
}
function makeAutoPagingToArray(autoPagingEach) {
  return function autoPagingToArray(opts, onDone) {
    const limit = opts && opts.limit;
    if (!limit) {
      throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
    }
    if (limit > 1e4) {
      throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
    }
    const promise = new Promise((resolve, reject) => {
      const items = [];
      autoPagingEach((item) => {
        items.push(item);
        if (items.length >= limit) {
          return false;
        }
      }).then(() => {
        resolve(items);
      }).catch(reject);
    });
    return callbackifyPromiseWithTimeout(promise, onDone);
  };
}
function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
  return new Promise((resolve, reject) => {
    function handleIteration(iterResult) {
      if (iterResult.done) {
        resolve();
        return;
      }
      const item = iterResult.value;
      return new Promise((next) => {
        onItem(item, next);
      }).then((shouldContinue) => {
        if (shouldContinue === false) {
          return handleIteration({ done: true });
        } else {
          return asyncIteratorNext().then(handleIteration);
        }
      });
    }
    asyncIteratorNext().then(handleIteration).catch(reject);
  });
}
var init_autoPagination = __esm({
  "node_modules/telnyx/dist/autoPagination.js"() {
    init_makeRequest();
    init_utils();
  }
});

// node_modules/telnyx/dist/TelnyxMethod.js
function telnyxMethod(spec) {
  return function(...args) {
    if (spec.paramsValues) {
      populateUrlParamsWithResource(this, args, spec);
    }
    const callback = typeof args[args.length - 1] == "function" && args.pop();
    const requestPromise = callbackifyPromiseWithTimeout(makeRequest_default(this, args, spec, {}), callback);
    if (spec.methodType === "list") {
      const autoPaginationMethods = makeAutoPaginationMethods(this, args, spec, requestPromise);
      Object.assign(requestPromise, autoPaginationMethods);
    }
    return requestPromise;
  };
}
function populateUrlParamsWithResource(self2, args, spec) {
  if (spec.paramsValues && !spec.paramsValues[0]) {
    const paramsValues = (spec.paramsNames || []).reduce(function(result, name) {
      if (self2[name]) {
        result.push(self2[name]);
      }
      return result;
    }, []);
    args.unshift(paramsValues);
  } else {
    args.unshift(spec.paramsValues);
  }
}
var TelnyxMethod_default;
var init_TelnyxMethod = __esm({
  "node_modules/telnyx/dist/TelnyxMethod.js"() {
    init_utils();
    init_makeRequest();
    init_autoPagination();
    TelnyxMethod_default = telnyxMethod;
  }
});

// node_modules/telnyx/dist/TelnyxMethod.basic.js
var TelnyxMethod_basic_exports = {};
__export(TelnyxMethod_basic_exports, {
  create: () => create,
  del: () => del,
  list: () => list,
  retrieve: () => retrieve,
  update: () => update
});
var create, list, retrieve, update, del;
var init_TelnyxMethod_basic = __esm({
  "node_modules/telnyx/dist/TelnyxMethod.basic.js"() {
    init_TelnyxMethod();
    create = TelnyxMethod_default({
      method: "POST"
    });
    list = TelnyxMethod_default({
      method: "GET",
      methodType: "list"
    });
    retrieve = TelnyxMethod_default({
      method: "GET",
      path: "/{id}",
      urlParams: ["id"]
    });
    update = TelnyxMethod_default({
      method: "PATCH",
      path: "{id}",
      urlParams: ["id"]
    });
    del = TelnyxMethod_default({
      method: "DELETE",
      path: "{id}",
      urlParams: ["id"]
    });
  }
});

// node_modules/telnyx/dist/TelnyxResource.js
function TelnyxResource(telnyx, urlData) {
  this._telnyx = telnyx;
  this._urlData = urlData || {};
  this.basePath = makeURLInterpolator(
    // @ts-expect-error changing type of basePath
    this.basePath || telnyx.getApiField("basePath")
  );
  this.resourcePath = this.path;
  this.path = makeURLInterpolator(this.path);
  if (this.includeBasic) {
    this.includeBasic.forEach((methodName) => {
      this[methodName] = TelnyxResource.BASIC_METHODS[methodName];
    }, this);
  }
  if (this.nestedResources) {
    for (const resource in this.nestedResources) {
      this[pascalToCamelCase(resource)] = new this.nestedResources[resource](telnyx);
    }
  }
  if (this.instanceMethods) {
    Object.assign(this, this.instanceMethods);
  }
  this.initialize.apply(this, [telnyx, urlData]);
}
var http, https, path, hasOwn, TelnyxResource_default;
var init_TelnyxResource = __esm({
  "node_modules/telnyx/dist/TelnyxResource.js"() {
    http = __toESM(require("http"), 1);
    https = __toESM(require("https"), 1);
    path = __toESM(require("path"), 1);
    init_utils();
    init_Error();
    init_TelnyxMethod();
    init_TelnyxMethod_basic();
    hasOwn = {}.hasOwnProperty;
    TelnyxResource.extend = protoExtend;
    TelnyxResource.method = TelnyxMethod_default;
    TelnyxResource.BASIC_METHODS = TelnyxMethod_basic_exports;
    TelnyxResource.MAX_BUFFERED_REQUEST_METRICS = 100;
    TelnyxResource.prototype = {
      _telnyx: null,
      _urlData: null,
      // @ts-expect-error the type of path changes in ctor
      path: "",
      resourcePath: "",
      // Properties are set in the constructor above
      // Methods that don't use the API's default '/v1' path can override it with this setting.
      basePath: null,
      includeBasic: null,
      nestedResources: null,
      instanceMethods: null,
      initialize: function() {
      },
      // Function to override the default data processor. This allows full control
      // over how a TelnyxResource's request data will get converted into an HTTP
      // body. This is useful for non-standard HTTP requests. The function should
      // take method name, data, and headers as arguments.
      requestDataProcessor: null,
      // Function to add a validation checks before sending the request, errors should
      // be thrown, and they will be passed to the callback/promise.
      validateRequest: null,
      createFullPath(commandPath, urlData) {
        return path.join(this.basePath(urlData), this.path(urlData), typeof commandPath == "function" ? commandPath(urlData) : commandPath).replace(/\\/g, "/");
      },
      // Creates a relative resource path with symbols left in (unlike
      // createFullPath which takes some data to replace them with). For example it
      // might produce: /invoices/{id}
      createResourcePathWithSymbols(pathWithSymbols) {
        return "/" + path.join(this.resourcePath, pathWithSymbols || "").replace(/\\/g, "/");
      },
      createUrlData: function() {
        const urlData = {};
        for (const i in this._urlData) {
          if (hasOwn.call(this._urlData, i)) {
            urlData[i] = this._urlData[i];
          }
        }
        return urlData;
      },
      _timeoutHandler: function(timeout, req, callback) {
        return () => {
          const timeoutErr = new Error("ETIMEDOUT");
          req._isAborted = true;
          req.abort();
          callback.call(this, new TelnyxConnectionError({
            message: "Request aborted due to timeout being reached (" + timeout + "ms)",
            detail: timeoutErr
          }), null);
        };
      },
      _responseHandler(req, callback) {
        const self2 = this;
        return function(res) {
          let response = "";
          res.setEncoding("utf8");
          res.on("data", function(chunk) {
            response += chunk;
          });
          res.on("end", function() {
            const headers = res.headers || {};
            res.requestId = headers["request-id"] || headers["x-request-id"] || "";
            const requestDurationMs = Date.now() - req._requestStart;
            const responseEvent = removeEmpty({
              method: req._requestEvent.method,
              path: req._requestEvent.path,
              status: res.statusCode,
              request_id: res.requestId,
              elapsed: requestDurationMs
            });
            self2._telnyx._emitter.emit("response", responseEvent);
            let responseBody;
            try {
              responseBody = tryParseJSON(response);
              if (!responseBody) {
                responseBody = {};
              } else if (responseBody.errors) {
                const error = {};
                error.errors = responseBody.errors;
                error.headers = headers;
                error.statusCode = res.statusCode;
                error.requestId = res.requestId;
                const err = self2._buildError(error, res.statusCode);
                return callback.call(self2, err, null);
              }
            } catch (e) {
              return callback.call(self2, new TelnyxAPIError({
                message: "Invalid JSON received from the Telnyx API",
                responseBody: response,
                detail: e,
                requestId: res.requestId
              }), null);
            }
            Object.defineProperty(responseBody, "lastResponse", {
              enumerable: false,
              writable: false,
              value: res
            });
            callback.call(self2, null, responseBody);
          });
        };
      },
      _buildError: function(error, statusCode) {
        let err;
        switch (statusCode) {
          case 400:
            err = new TelnyxInvalidRequestError(error);
            break;
          case 401:
            err = new TelnyxAuthenticationError(error);
            break;
          case 403:
            err = new TelnyxPermissionError(error);
            break;
          case 404:
            err = new TelnyxResourceNotFoundError(error);
            break;
          case 405:
            err = new TelnyxMethodNotSupportedError(error);
            break;
          case 408:
            err = new TelnyxTimeoutError(error);
            break;
          case 415:
            err = new TelnyxUnsupportedMediaTypeError(error);
            break;
          case 422:
            err = new TelnyxInvalidParametersError(error);
            break;
          case 429:
            err = new TelnyxRateLimitError(error);
            break;
          case 500:
            err = new TelnyxAPIError(error);
            break;
          case 503:
            err = new TelnyxServiceUnavailableError(error);
            break;
          default:
            err = new TelnyxAPIError(error);
        }
        return err;
      },
      _generateConnectionErrorMessage(requestRetries) {
        return "An error occurred with our connection to Telnyx." + (requestRetries > 0 ? " Request was retried " + requestRetries + " times." : "");
      },
      _errorHandler: function(req, requestRetries, callback) {
        return (error) => {
          if (req._isAborted) {
            return;
          }
          callback.call(this, new TelnyxConnectionError({
            message: this._generateConnectionErrorMessage(requestRetries),
            responseBody: error
          }), null);
        };
      },
      _shouldRetry: function(res, numRetries) {
        var _a;
        if (numRetries >= this._telnyx.getMaxNetworkRetries()) {
          return false;
        }
        if (!res) {
          return true;
        }
        if (res.statusCode === 409 || res.statusCode === 503) {
          return true;
        }
        if (res.statusCode && res.statusCode >= 500 && ((_a = res.req._requestEvent) == null ? void 0 : _a.method) !== "POST") {
          return true;
        }
        return false;
      },
      _getSleepTimeInMS: function(numRetries) {
        const initialNetworkRetryDelay = this._telnyx.getInitialNetworkRetryDelay();
        const maxNetworkRetryDelay = this._telnyx.getMaxNetworkRetryDelay();
        let sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(numRetries - 1, 2), maxNetworkRetryDelay);
        sleepSeconds *= 0.5 * (1 + Math.random());
        sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
        return sleepSeconds * 1e3;
      },
      _defaultHeaders: function(auth, requestData) {
        let userAgentString = "Telnyx/v2 NodeBindings/" + this._telnyx.getConstant("PACKAGE_VERSION");
        if (this._telnyx._appInfo) {
          userAgentString += " " + this._telnyx.getAppInfoAsString();
        }
        const headers = {
          // Use specified auth token or use default from this telnyx instance:
          Authorization: auth ? "Bearer " + auth : this._telnyx.getApiField("auth"),
          Accept: "*/*",
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(requestData),
          "User-Agent": userAgentString
        };
        return headers;
      },
      _request: function(method, _host, path2, data, auth, options, callback) {
        const self2 = this;
        let requestData;
        function makeRequestWithData(error, data2) {
          let headers = {};
          if (error) {
            return callback(error);
          }
          if (method == "GET") {
            if (data2 != "" && data2 != null) {
              path2 = path2 + "?" + data2;
              requestData = "";
            } else {
              requestData = "";
            }
          } else if (isJsonString((data2 == null ? void 0 : data2.toString()) || "")) {
            requestData = data2;
          } else if (data2 != "" && data2 != null) {
            path2 = path2 + "?" + encodeURI(data2.toString());
            requestData = "";
          } else {
            requestData = "";
          }
          headers = self2._defaultHeaders(auth, requestData);
          self2._telnyx.getClientUserAgent(function(cua) {
            headers["X-Telnyx-Client-User-Agent"] = cua;
            if (options.headers) {
              Object.assign(headers, options.headers);
            }
            makeRequest2(headers);
          });
        }
        if (self2.requestDataProcessor) {
          self2.requestDataProcessor(method, data, options.headers, makeRequestWithData);
        } else if (method == "GET") {
          makeRequestWithData(null, data ? stringifyRequestData(data) : "");
        } else {
          let parameters;
          if (data) {
            if (data.filter && Object.keys(data.filter).length) {
              parameters = stringifyRequestData(data);
            } else {
              parameters = JSON.stringify(data);
              if (parameters === "{}") {
                parameters = "";
              }
            }
          } else {
            parameters = "";
          }
          makeRequestWithData(null, parameters);
        }
        function retryRequest(requestFn, headers, requestRetries) {
          requestRetries += 1;
          return setTimeout(requestFn, self2._getSleepTimeInMS(requestRetries), headers, requestRetries);
        }
        function makeRequest2(headers, numRetries) {
          const timeout = self2._telnyx.getApiField("timeout");
          const isInsecureConnection = self2._telnyx.getApiField("protocol") == "http";
          const agent = isInsecureConnection ? self2._telnyx.getApiField("http_agent") : self2._telnyx.getApiField("https_agent");
          if (headers["Content-Length"] === 0) {
            delete headers["Content-Length"];
            delete headers["Content-Type"];
          }
          const req = (isInsecureConnection ? http : https).request({
            host: self2._telnyx.getApiField("host") || "127.0.0.1",
            port: self2._telnyx.getApiField("port"),
            path: path2,
            method,
            agent,
            headers,
            ciphers: "DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5"
          });
          const requestEvent = removeEmpty({
            method,
            path: path2
          });
          const requestRetries = numRetries || 0;
          req._requestEvent = requestEvent;
          req._requestStart = Date.now();
          self2._telnyx._emitter.emit("request", requestEvent);
          req.setTimeout(timeout, self2._timeoutHandler(timeout, req, callback));
          req.on("response", function(res) {
            if (self2._shouldRetry(res, requestRetries)) {
              return retryRequest(makeRequest2, headers, requestRetries);
            } else {
              return self2._responseHandler(req, callback)(res);
            }
          });
          req.on("error", function(error) {
            if (self2._shouldRetry(null, requestRetries)) {
              return retryRequest(makeRequest2, headers, requestRetries);
            } else {
              return self2._errorHandler(req, requestRetries, callback)(error);
            }
          });
          req.on("socket", function(socket) {
            if (socket.connecting) {
              socket.on(isInsecureConnection ? "connect" : "secureConnect", function() {
                req.write(requestData);
                req.end();
              });
            } else {
              req.write(requestData);
              req.end();
            }
          });
        }
      }
    };
    TelnyxResource_default = TelnyxResource;
  }
});

// node_modules/telnyx/dist/resources/AccessIpAddress.js
var AccessIpAddress;
var init_AccessIpAddress = __esm({
  "node_modules/telnyx/dist/resources/AccessIpAddress.js"() {
    init_TelnyxResource();
    AccessIpAddress = TelnyxResource_default.extend({
      path: "access_ip_address",
      includeBasic: ["list", "create", "retrieve", "del"]
    });
  }
});

// node_modules/telnyx/dist/resources/AccessIpRanges.js
var AccessIpRanges;
var init_AccessIpRanges = __esm({
  "node_modules/telnyx/dist/resources/AccessIpRanges.js"() {
    init_TelnyxResource();
    AccessIpRanges = TelnyxResource_default.extend({
      path: "access_ip_ranges",
      includeBasic: ["list", "create", "retrieve", "del"]
    });
  }
});

// node_modules/telnyx/dist/resources/ActionsSimCards.js
var telnyxMethod2, ActionsSimCards;
var init_ActionsSimCards = __esm({
  "node_modules/telnyx/dist/resources/ActionsSimCards.js"() {
    init_TelnyxResource();
    telnyxMethod2 = TelnyxResource_default.method;
    ActionsSimCards = TelnyxResource_default.extend({
      path: "actions",
      register: telnyxMethod2({
        method: "POST",
        path: "/register/sim_cards"
      }),
      bulkNetworkPreferences: telnyxMethod2({
        method: "PUT",
        path: "/network_preferences/sim_cards"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Actions.js
var Actions;
var init_Actions = __esm({
  "node_modules/telnyx/dist/resources/Actions.js"() {
    init_TelnyxResource();
    init_ActionsSimCards();
    Actions = TelnyxResource_default.extend({
      path: "actions",
      nestedResources: {
        SimCards: ActionsSimCards
      }
    });
  }
});

// node_modules/telnyx/dist/resources/ActivateDeactivateBulkCredentials.js
function transformResponseData(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "actions", {});
}
var telnyxMethod3, ActivateDeactivateBulkCredentials;
var init_ActivateDeactivateBulkCredentials = __esm({
  "node_modules/telnyx/dist/resources/ActivateDeactivateBulkCredentials.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod3 = TelnyxResource_default.method;
    ActivateDeactivateBulkCredentials = TelnyxResource_default.extend({
      path: "actions",
      create: telnyxMethod3({
        method: "POST",
        path: "/{action}/telephony_credentials",
        urlParams: ["action"],
        transformResponseData
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Addresses.js
function transformResponseData2(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "addresses", {
    del: telnyxMethod4({
      method: "DELETE",
      path: "/{addressId}",
      urlParams: ["addressId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod4, Addresses;
var init_Addresses = __esm({
  "node_modules/telnyx/dist/resources/Addresses.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod4 = TelnyxResource_default.method;
    Addresses = TelnyxResource_default.extend({
      path: "addresses",
      includeBasic: ["del"],
      list: telnyxMethod4({
        method: "GET",
        methodType: "list"
      }),
      create: telnyxMethod4({
        method: "POST",
        transformResponseData: transformResponseData2
      }),
      retrieve: telnyxMethod4({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData2
      }),
      validate: telnyxMethod4({
        method: "POST",
        path: "/actions/validate"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/AiAssistants.js
var telnyxMethod5, AiAssistants;
var init_AiAssistants = __esm({
  "node_modules/telnyx/dist/resources/AiAssistants.js"() {
    init_TelnyxResource();
    telnyxMethod5 = TelnyxResource_default.method;
    AiAssistants = TelnyxResource_default.extend({
      path: "ai/assistants",
      includeBasic: ["list", "create"],
      retrieve: telnyxMethod5({
        method: "GET",
        path: "/{assistant_id}",
        urlParams: ["assistant_id"]
      }),
      update: telnyxMethod5({
        method: "POST",
        path: "/{assistant_id}",
        urlParams: ["assistant_id"]
      }),
      del: telnyxMethod5({
        method: "DELETE",
        path: "/{assistant_id}",
        urlParams: ["assistant_id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/AiAudioTranscriptions.js
var AiAudioTranscriptions;
var init_AiAudioTranscriptions = __esm({
  "node_modules/telnyx/dist/resources/AiAudioTranscriptions.js"() {
    init_TelnyxResource();
    AiAudioTranscriptions = TelnyxResource_default.extend({
      path: "ai/audio/transcriptions",
      includeBasic: ["create"]
    });
  }
});

// node_modules/telnyx/dist/resources/AiChatCompletions.js
var AiChatCompletions;
var init_AiChatCompletions = __esm({
  "node_modules/telnyx/dist/resources/AiChatCompletions.js"() {
    init_TelnyxResource();
    AiChatCompletions = TelnyxResource_default.extend({
      path: "ai/chat/completions",
      includeBasic: ["create"]
    });
  }
});

// node_modules/telnyx/dist/resources/AiEmbeddings.js
var telnyxMethod6, AiEmbeddings;
var init_AiEmbeddings = __esm({
  "node_modules/telnyx/dist/resources/AiEmbeddings.js"() {
    init_TelnyxResource();
    telnyxMethod6 = TelnyxResource_default.method;
    AiEmbeddings = TelnyxResource_default.extend({
      path: "ai/embeddings",
      includeBasic: ["list", "create"],
      retrieve: telnyxMethod6({
        method: "GET",
        path: "/{task_id}",
        urlParams: ["task_id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/AiEmbeddingsBuckets.js
var telnyxMethod7, AiEmbeddingsBuckets;
var init_AiEmbeddingsBuckets = __esm({
  "node_modules/telnyx/dist/resources/AiEmbeddingsBuckets.js"() {
    init_TelnyxResource();
    telnyxMethod7 = TelnyxResource_default.method;
    AiEmbeddingsBuckets = TelnyxResource_default.extend({
      path: "ai/embeddings/buckets",
      includeBasic: ["list"],
      retrieve: telnyxMethod7({
        method: "GET",
        path: "/{bucket_name}",
        urlParams: ["bucket_name"]
      }),
      del: telnyxMethod7({
        method: "DELETE",
        path: "/{bucket_name}",
        urlParams: ["bucket_name"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/AiEmbeddingsSimilaritySearch.js
var AiEmbeddingsSimilaritySearch;
var init_AiEmbeddingsSimilaritySearch = __esm({
  "node_modules/telnyx/dist/resources/AiEmbeddingsSimilaritySearch.js"() {
    init_TelnyxResource();
    AiEmbeddingsSimilaritySearch = TelnyxResource_default.extend({
      path: "ai/embeddings/similarity-search",
      includeBasic: ["create"]
    });
  }
});

// node_modules/telnyx/dist/resources/AiModels.js
var AiModels;
var init_AiModels = __esm({
  "node_modules/telnyx/dist/resources/AiModels.js"() {
    init_TelnyxResource();
    AiModels = TelnyxResource_default.extend({
      path: "ai/models",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/AiSummarize.js
var AiSummarize;
var init_AiSummarize = __esm({
  "node_modules/telnyx/dist/resources/AiSummarize.js"() {
    init_TelnyxResource();
    AiSummarize = TelnyxResource_default.extend({
      path: "ai/summarize",
      includeBasic: ["create"]
    });
  }
});

// node_modules/telnyx/dist/resources/AuthenticationProviders.js
var AuthenticationProviders;
var init_AuthenticationProviders = __esm({
  "node_modules/telnyx/dist/resources/AuthenticationProviders.js"() {
    init_TelnyxResource();
    AuthenticationProviders = TelnyxResource_default.extend({
      path: "authentication_providers",
      includeBasic: ["list", "create", "retrieve", "update", "del"]
    });
  }
});

// node_modules/telnyx/dist/resources/AvailablePhoneNumbers.js
var AvailablePhoneNumbers;
var init_AvailablePhoneNumbers = __esm({
  "node_modules/telnyx/dist/resources/AvailablePhoneNumbers.js"() {
    init_TelnyxResource();
    AvailablePhoneNumbers = TelnyxResource_default.extend({
      path: "available_phone_numbers",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/Balance.js
var Balance;
var init_Balance = __esm({
  "node_modules/telnyx/dist/resources/Balance.js"() {
    init_TelnyxResource();
    Balance = TelnyxResource_default.extend({
      path: "balance",
      retrieve: TelnyxResource_default.method({ method: "GET" })
    });
  }
});

// node_modules/telnyx/dist/resources/BillingGroups.js
var BillingGroups;
var init_BillingGroups = __esm({
  "node_modules/telnyx/dist/resources/BillingGroups.js"() {
    init_TelnyxResource();
    BillingGroups = TelnyxResource_default.extend({
      path: "billing_groups",
      includeBasic: ["list", "create", "retrieve", "del", "update"]
    });
  }
});

// node_modules/telnyx/dist/resources/Brands.js
var telnyxMethod8, Brands;
var init_Brands = __esm({
  "node_modules/telnyx/dist/resources/Brands.js"() {
    init_TelnyxResource();
    telnyxMethod8 = TelnyxResource_default.method;
    Brands = TelnyxResource_default.extend({
      path: "brand",
      basePath: "/10dlc/",
      includeBasic: ["create", "list"],
      retrieve: telnyxMethod8({
        method: "GET",
        path: "/brand/{brandId}",
        urlParams: ["brandId"]
      }),
      update: telnyxMethod8({
        method: "PUT",
        path: "/brand/{brandId}",
        urlParams: ["brandId"]
      }),
      del: telnyxMethod8({
        method: "DELETE",
        path: "/brand/{brandId}",
        urlParams: ["brandId"]
      }),
      resend2faEmail: telnyxMethod8({
        method: "POST",
        path: "/brand/{brandId}/2faEmail",
        urlParams: ["brandId"]
      }),
      listExternalVettings: telnyxMethod8({
        method: "GET",
        path: "/brand/{brandId}/externalVetting",
        urlParams: ["brandId"],
        methodType: "list"
      }),
      importExternalVettings: telnyxMethod8({
        method: "PUT",
        path: "/brand/{brandId}/externalVetting",
        urlParams: ["brandId"]
      }),
      orderExternalVettings: telnyxMethod8({
        method: "POST",
        path: "/brand/{brandId}/externalVetting",
        urlParams: ["brandId"]
      }),
      revet: telnyxMethod8({
        method: "PUT",
        path: "/brand/{brandId}/revet",
        urlParams: ["brandId"]
      }),
      feedback: telnyxMethod8({
        method: "GET",
        path: "/brand/feedback/{brandId}",
        urlParams: ["brandId"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/BulkCredentials.js
var telnyxMethod9, BulkCredentials;
var init_BulkCredentials = __esm({
  "node_modules/telnyx/dist/resources/BulkCredentials.js"() {
    init_TelnyxResource();
    telnyxMethod9 = TelnyxResource_default.method;
    BulkCredentials = TelnyxResource_default.extend({
      path: "bulk_credentials",
      includeBasic: ["create", "delete"],
      BulkCredentialAction: telnyxMethod9({
        method: "POST",
        path: "/actions/{action}/telephony_credentials",
        urlParams: ["action"]
      }),
      DeleteTelephonyCredentials: telnyxMethod9({
        method: "DELETE",
        path: "/actions/bulk/telephony_credentials"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/BulkSoleProprietorCreation.js
var telnyxMethod10, BulkSoleProprietorCreation;
var init_BulkSoleProprietorCreation = __esm({
  "node_modules/telnyx/dist/resources/BulkSoleProprietorCreation.js"() {
    init_TelnyxResource();
    telnyxMethod10 = TelnyxResource_default.method;
    BulkSoleProprietorCreation = TelnyxResource_default.extend({
      path: "bulk_sole_proprietor_creation",
      includeBasic: ["list", "retrieve"],
      GetBulkCreationTaskStatus: telnyxMethod10({
        method: "GET",
        path: "/bulkCreation/{taskId}",
        urlParams: ["taskId"]
      }),
      GetAllTasks: telnyxMethod10({
        method: "GET",
        path: "/bulkCreation"
      }),
      GetTaskDetailedStatus: telnyxMethod10({
        method: "GET",
        path: "/bulkCreation/{taskId}/detailedStatus",
        urlParams: ["taskId"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/BulkTelephonyCredentials.js
function transformResponseData3(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "bulkTelephonyCredentials", {
    del: telnyxMethod11({
      method: "DELETE",
      path: "actions/bulk/telephony_credentials",
      urlParams: ["bulkTelephonyCredentials"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod11({
      method: "PATCH",
      path: "actions/bulk/telephony_credentials",
      urlParams: ["bulkTelephonyCredentials"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod11, BulkTelephonyCredentials;
var init_BulkTelephonyCredentials = __esm({
  "node_modules/telnyx/dist/resources/BulkTelephonyCredentials.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod11 = TelnyxResource_default.method;
    BulkTelephonyCredentials = TelnyxResource_default.extend({
      path: "actions/bulk/telephony_credentials",
      updateCredentials: telnyxMethod11({
        method: "PATCH",
        transformResponseData: transformResponseData3
      }),
      deleteCredentials: telnyxMethod11({
        method: "DELETE",
        transformResponseData: transformResponseData3
      }),
      create: telnyxMethod11({
        method: "POST",
        transformResponseData: transformResponseData3
      })
    });
  }
});

// node_modules/telnyx/dist/resources/CallControlApplications.js
function transformResponseData4(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "callControlApplications", {
    del: telnyxMethod12({
      method: "DELETE",
      path: "/{callControlId}",
      urlParams: ["callControlId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod12({
      method: "PATCH",
      path: "/{callControlId}",
      urlParams: ["callControlId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod12, CallControlApplications;
var init_CallControlApplications = __esm({
  "node_modules/telnyx/dist/resources/CallControlApplications.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod12 = TelnyxResource_default.method;
    CallControlApplications = TelnyxResource_default.extend({
      path: "call_control_applications",
      includeBasic: ["list", "update", "del"],
      create: telnyxMethod12({
        method: "POST",
        transformResponseData: transformResponseData4
      }),
      retrieve: telnyxMethod12({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData4
      })
    });
  }
});

// node_modules/telnyx/dist/resources/CallEvents.js
var CallEvents;
var init_CallEvents = __esm({
  "node_modules/telnyx/dist/resources/CallEvents.js"() {
    init_TelnyxResource();
    CallEvents = TelnyxResource_default.extend({
      path: "call_events",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/CallRecordings.js
var telnyxMethod13, CallRecordings;
var init_CallRecordings = __esm({
  "node_modules/telnyx/dist/resources/CallRecordings.js"() {
    init_TelnyxResource();
    telnyxMethod13 = TelnyxResource_default.method;
    CallRecordings = TelnyxResource_default.extend({
      path: "recordings",
      includeBasic: ["list"],
      retrieve: telnyxMethod13({
        method: "GET",
        path: "/{recording_id}",
        urlParams: ["recording_id"]
      }),
      del: telnyxMethod13({
        method: "DELETE",
        path: "/{recording_id}",
        urlParams: ["recording_id"]
      }),
      bulkDel: telnyxMethod13({
        method: "DELETE",
        path: "/recordings/actions/delete"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Calls.js
function getSpec(callControlId) {
  if (callControlId) {
    return function(methodName) {
      return {
        method: "POST",
        path: `/{call_control_id}/actions/${methodName}`,
        urlParams: ["call_control_id"],
        paramsValues: [callControlId],
        paramsNames: ["call_control_id"],
        methodType: "create"
      };
    };
  }
  return function(methodName) {
    return {
      method: "POST",
      path: `/{call_control_id}/actions/${methodName}`,
      urlParams: ["call_control_id"],
      paramsNames: ["call_control_id"],
      methodType: "create"
    };
  };
}
var telnyxMethod14, CALL_COMMANDS, Calls;
var init_Calls = __esm({
  "node_modules/telnyx/dist/resources/Calls.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod14 = TelnyxResource_default.method;
    CALL_COMMANDS = [
      "answer",
      "reject",
      "hangup",
      "bridge",
      "speak",
      "fork_start",
      "fork_stop",
      "gather",
      "gather_using_audio",
      "gather_using_speak",
      "gather_stop",
      "playback_start",
      "playback_stop",
      "record_start",
      "record_stop",
      "record_pause",
      "record_resume",
      "refer",
      "send_dtmf",
      "streaming_start",
      "streaming_stop",
      "suppression_start",
      "suppression_stop",
      "transfer",
      "transcription_start",
      "transcription_stop",
      "enqueue",
      "leave_queue"
    ];
    Calls = TelnyxResource_default.extend({
      path: "calls",
      includeBasic: ["retrieve"],
      // status method
      dial: telnyxMethod14({
        // dial method
        method: "POST",
        transformResponseData: function(response, telnyx) {
          return addResourceToResponseData(response, telnyx, "calls", createNestedMethods(telnyxMethod14, CALL_COMMANDS, getSpec(response.data.call_control_id)));
        }
      }),
      create: telnyxMethod14({
        // dial method
        method: "POST",
        transformResponseData: function(response, telnyx) {
          return addResourceToResponseData(response, telnyx, "calls", createNestedMethods(telnyxMethod14, CALL_COMMANDS, getSpec(response.data.call_control_id)));
        }
      }),
      updateClientState: telnyxMethod14({
        path: "/{call_control_id}/actions/client_state_update",
        urlParams: ["call_control_id"],
        method: "PUT"
      }),
      instanceMethods: createNestedMethods(telnyxMethod14, CALL_COMMANDS, getSpec())
    });
  }
});

// node_modules/telnyx/dist/resources/Campaign.js
function transformResponseData5(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "/campaign", {
    del: telnyxMethod15({
      method: "DELETE",
      path: "/campaign",
      urlParams: ["campaign"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod15({
      method: "PATCH",
      path: "/campaign",
      urlParams: ["campaign"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod15, Campaign;
var init_Campaign = __esm({
  "node_modules/telnyx/dist/resources/Campaign.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod15 = TelnyxResource_default.method;
    Campaign = TelnyxResource_default.extend({
      path: "campaign",
      includeBasic: ["create", "list"],
      acceptShareCampaign: telnyxMethod15({
        method: "POST",
        transformResponseData: transformResponseData5,
        path: "/acceptSharing/{campaignId}"
      }),
      getCampaignCost: telnyxMethod15({
        method: "GET",
        transformResponseData: transformResponseData5,
        path: "/usecase/cost"
      }),
      retrieveCampaignId: telnyxMethod15({
        method: "GET",
        path: "/{campaignId}",
        urlParams: ["campaignId"],
        transformResponseData: transformResponseData5
      }),
      updateCampaignId: telnyxMethod15({
        method: "PATCH",
        path: "/{campaignId}",
        urlParams: ["campaignId"],
        transformResponseData: transformResponseData5
      }),
      deactivateCampaignId: telnyxMethod15({
        method: "DELETE",
        path: "/{campaignId}",
        urlParams: ["campaignId"],
        transformResponseData: transformResponseData5
      }),
      retrieveMnoMetadata: telnyxMethod15({
        method: "GET",
        path: "/{campaignId}/mnoMetadata",
        urlParams: ["campaignId"],
        transformResponseData: transformResponseData5
      }),
      retrieveOperationStatus: telnyxMethod15({
        method: "GET",
        path: "/{campaignId}/operationStatus",
        urlParams: ["campaignId"],
        transformResponseData: transformResponseData5
      }),
      retrieveOsrCampaignAttributes: telnyxMethod15({
        method: "GET",
        path: "/{campaignId}/osr/attributes",
        urlParams: ["campaignId"]
      }),
      retrieveSharingStatus: telnyxMethod15({
        method: "GET",
        path: "/{campaignId}/sharing",
        urlParams: ["campaignId"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/CampaignBuilder.js
function transformResponseData6(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "/campaignBuilder", {
    del: telnyxMethod16({
      method: "DELETE",
      path: "/campaignBuilder",
      urlParams: ["campaignBuilder"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod16({
      method: "PATCH",
      path: "/campaignBuilder",
      urlParams: ["campaignBuilder"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod16, CampaignBuilder;
var init_CampaignBuilder = __esm({
  "node_modules/telnyx/dist/resources/CampaignBuilder.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod16 = TelnyxResource_default.method;
    CampaignBuilder = TelnyxResource_default.extend({
      path: "/campaignBuilder",
      basePath: "/10dlc/",
      create: telnyxMethod16({
        method: "POST",
        transformResponseData: transformResponseData6
      }),
      retrieveQualifyByUsecase: telnyxMethod16({
        method: "GET",
        path: "/brand/{brandId}/usecase/{usecase}",
        urlParams: ["brandId", "usecase"],
        transformResponseData: transformResponseData6
      })
    });
  }
});

// node_modules/telnyx/dist/resources/CdrUsageReports.js
var telnyxMethod17, CdrUsageReports;
var init_CdrUsageReports = __esm({
  "node_modules/telnyx/dist/resources/CdrUsageReports.js"() {
    init_TelnyxResource();
    telnyxMethod17 = TelnyxResource_default.method;
    CdrUsageReports = TelnyxResource_default.extend({
      path: "reports/cdr_usage_reports",
      retrieveUsageReportSync: telnyxMethod17({
        path: "/sync",
        method: "GET",
        urlParams: []
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Channelzones.js
var telnyxMethod18, Channelzones;
var init_Channelzones = __esm({
  "node_modules/telnyx/dist/resources/Channelzones.js"() {
    init_TelnyxResource();
    telnyxMethod18 = TelnyxResource_default.method;
    Channelzones = TelnyxResource_default.extend({
      path: "channel_zones",
      includeBasic: ["list"],
      update: telnyxMethod18({
        method: "PATCH",
        path: "/{channel_zone_id}",
        urlParams: ["channel_zone_id"]
      }),
      retrieve: telnyxMethod18({
        method: "GET",
        path: "/{channel_zone_id}",
        urlParams: ["channel_zone_id"]
      }),
      createPhoneNumber: telnyxMethod18({
        method: "POST",
        path: "/{channel_zone_id}/channel_zone_phone_numbers",
        urlParams: ["channel_zone_id"]
      }),
      listPhoneNumbers: telnyxMethod18({
        method: "GET",
        path: "/{channel_zone_id}/channel_zone_phone_numbers"
      }),
      delPhoneNumber: telnyxMethod18({
        method: "DELETE",
        path: "/{channel_zone_id}/channel_zone_phone_numbers/{phone_number}",
        urlParams: ["channel_zone_id", "phone_number"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Conferences.js
function getSpec2(conferenceId) {
  if (conferenceId) {
    return function(methodName) {
      return {
        method: "POST",
        path: `/{conferenceId}/actions/${methodName}`,
        urlParams: ["conferenceId"],
        paramsValues: [conferenceId],
        paramsNames: ["conferenceId"],
        methodType: "create"
      };
    };
  }
  return function(methodName) {
    return {
      method: "POST",
      path: `/{conferenceId}/actions/${methodName}`,
      urlParams: ["conferenceId"],
      paramsNames: ["conferenceId"],
      methodType: "create"
    };
  };
}
var telnyxMethod19, CONFERENCES_COMMANDS, transformResponseData7, Conferences;
var init_Conferences = __esm({
  "node_modules/telnyx/dist/resources/Conferences.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod19 = TelnyxResource_default.method;
    CONFERENCES_COMMANDS = [
      "join",
      "mute",
      "unmute",
      "hold",
      "unhold",
      "speak",
      "play",
      "stop",
      "record_start",
      "record_stop",
      "update",
      "leave",
      "record_resume",
      "record_pause"
    ];
    transformResponseData7 = (response, telnyx) => {
      const methods = createNestedMethods(telnyxMethod19, CONFERENCES_COMMANDS, getSpec2(response.data.id));
      methods.listParticipants = telnyxMethod19({
        method: "GET",
        path: "/{conferenceId}/participants",
        urlParams: ["conferenceId"]
      });
      return addResourceToResponseData(response, telnyx, "conferences", methods);
    };
    Conferences = TelnyxResource_default.extend({
      path: "conferences",
      includeBasic: ["list"],
      retrieve: telnyxMethod19({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData7
      }),
      create: telnyxMethod19({
        method: "POST",
        transformResponseData: transformResponseData7
      }),
      listParticipants: telnyxMethod19({
        method: "GET",
        path: "/{conferenceId}/participants",
        urlParams: ["conferenceId"]
      }),
      instanceMethods: createNestedMethods(telnyxMethod19, CONFERENCES_COMMANDS, getSpec2())
    });
  }
});

// node_modules/telnyx/dist/resources/Connections.js
var telnyxMethod20, Connections;
var init_Connections = __esm({
  "node_modules/telnyx/dist/resources/Connections.js"() {
    init_TelnyxResource();
    telnyxMethod20 = TelnyxResource_default.method;
    Connections = TelnyxResource_default.extend({
      path: "connections",
      includeBasic: ["list", "retrieve"],
      listActiveCalls: telnyxMethod20({
        method: "GET",
        path: "/{connection_id}/active_calls"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/CredentialConnections.js
var CredentialConnections;
var init_CredentialConnections = __esm({
  "node_modules/telnyx/dist/resources/CredentialConnections.js"() {
    init_TelnyxResource();
    CredentialConnections = TelnyxResource_default.extend({
      path: "credential_connections",
      includeBasic: ["list", "create", "retrieve", "del", "update"]
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumbersCsvDownloads.js
var PhoneNumbersCsvDownloads;
var init_PhoneNumbersCsvDownloads = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumbersCsvDownloads.js"() {
    init_TelnyxResource();
    PhoneNumbersCsvDownloads = TelnyxResource_default.extend({
      path: "/phone_numbers/csv_downloads",
      includeBasic: ["list", "create", "retrieve"]
    });
  }
});

// node_modules/telnyx/dist/resources/CustomerServiceRecords.js
var telnyxMethod21, CustomerServiceRecords;
var init_CustomerServiceRecords = __esm({
  "node_modules/telnyx/dist/resources/CustomerServiceRecords.js"() {
    init_TelnyxResource();
    telnyxMethod21 = TelnyxResource_default.method;
    CustomerServiceRecords = TelnyxResource_default.extend({
      path: "customer_service_records",
      includeBasic: ["list", "create"],
      retrieve: telnyxMethod21({
        method: "GET",
        path: "/{customer_service_record_id}",
        urlParams: ["customer_service_record_id"]
      }),
      verifyPhoneNumbersCoverage: telnyxMethod21({
        method: "POST",
        path: "/phone_number_coverages"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/DetailRecords.js
var telnyxMethod22, DetailRecords;
var init_DetailRecords = __esm({
  "node_modules/telnyx/dist/resources/DetailRecords.js"() {
    init_TelnyxResource();
    telnyxMethod22 = TelnyxResource_default.method;
    DetailRecords = TelnyxResource_default.extend({
      path: "detail_records",
      search: telnyxMethod22({
        method: "GET",
        methodType: "list"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/DialogflowConnections.js
var telnyxMethod23, DialogflowConnections;
var init_DialogflowConnections = __esm({
  "node_modules/telnyx/dist/resources/DialogflowConnections.js"() {
    init_TelnyxResource();
    telnyxMethod23 = TelnyxResource_default.method;
    DialogflowConnections = TelnyxResource_default.extend({
      path: "dialogflow_connections",
      retrieve: telnyxMethod23({
        method: "GET",
        path: "/{connection_id}",
        urlParams: ["connection_id"],
        methodType: "retrieve"
      }),
      create: telnyxMethod23({
        method: "POST",
        path: "/{connection_id}",
        urlParams: ["connection_id"]
      }),
      update: telnyxMethod23({
        method: "PUT",
        path: "/{connection_id}",
        urlParams: ["connection_id"]
      }),
      del: telnyxMethod23({
        method: "DELETE",
        path: "/{connection_id}",
        urlParams: ["connection_id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/DocumentLinks.js
var DocumentLinks;
var init_DocumentLinks = __esm({
  "node_modules/telnyx/dist/resources/DocumentLinks.js"() {
    init_TelnyxResource();
    DocumentLinks = TelnyxResource_default.extend({
      path: "/document_links",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/Documents.js
var telnyxMethod24, Documents;
var init_Documents = __esm({
  "node_modules/telnyx/dist/resources/Documents.js"() {
    init_TelnyxResource();
    telnyxMethod24 = TelnyxResource_default.method;
    Documents = TelnyxResource_default.extend({
      path: "documents",
      includeBasic: ["list", "update", "del", "create", "retrieve"],
      upload: telnyxMethod24({
        method: "POST"
      }),
      download: telnyxMethod24({
        method: "GET",
        path: "/{id}/download",
        urlParams: ["id"],
        headers: {
          "Content-Type": "*"
        }
      })
    });
  }
});

// node_modules/telnyx/dist/resources/DynamicEmergencyAddresses.js
var DynamicEmergencyAddresses;
var init_DynamicEmergencyAddresses = __esm({
  "node_modules/telnyx/dist/resources/DynamicEmergencyAddresses.js"() {
    init_TelnyxResource();
    DynamicEmergencyAddresses = TelnyxResource_default.extend({
      path: "dynamic_emergency_addresses",
      includeBasic: ["list", "retrieve", "create", "del"]
    });
  }
});

// node_modules/telnyx/dist/resources/DynamicEmergencyEndpoints.js
var DynamicEmergencyEndpoints;
var init_DynamicEmergencyEndpoints = __esm({
  "node_modules/telnyx/dist/resources/DynamicEmergencyEndpoints.js"() {
    init_TelnyxResource();
    DynamicEmergencyEndpoints = TelnyxResource_default.extend({
      path: "dynamic_emergency_endpoints",
      includeBasic: ["list", "retrieve", "create", "del"]
    });
  }
});

// node_modules/telnyx/dist/resources/DynamicEmergency.js
var DynamicEmergency;
var init_DynamicEmergency = __esm({
  "node_modules/telnyx/dist/resources/DynamicEmergency.js"() {
    init_TelnyxResource();
    init_DynamicEmergencyAddresses();
    init_DynamicEmergencyEndpoints();
    DynamicEmergency = TelnyxResource_default.extend({
      nestedResources: {
        Addresses: DynamicEmergencyAddresses,
        Endpoints: DynamicEmergencyEndpoints
      }
    });
  }
});

// node_modules/telnyx/dist/resources/AuditEvents.js
var AuditEvents;
var init_AuditEvents = __esm({
  "node_modules/telnyx/dist/resources/AuditEvents.js"() {
    init_TelnyxResource();
    AuditEvents = TelnyxResource_default.extend({
      path: "audit_events",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/ExternalConnections.js
var telnyxMethod25, ExternalConnections;
var init_ExternalConnections = __esm({
  "node_modules/telnyx/dist/resources/ExternalConnections.js"() {
    init_TelnyxResource();
    telnyxMethod25 = TelnyxResource_default.method;
    ExternalConnections = TelnyxResource_default.extend({
      path: "external_connections",
      includeBasic: ["list", "retrieve", "create", "update", "del"],
      listLogMessages: telnyxMethod25({
        method: "GET",
        path: "/log/messages"
      }),
      retrieveLogMessage: telnyxMethod25({
        method: "GET",
        path: "/log/messages/{id}",
        urlParams: ["id"]
      }),
      delLogMessage: telnyxMethod25({
        method: "DELETE",
        path: "/log/messages/{id}",
        urlParams: ["id"]
      }),
      listCivicAddresses: telnyxMethod25({
        method: "GET",
        path: "/{id}/civic_addresses",
        urlParams: ["id"]
      }),
      retrieveCivicAddress: telnyxMethod25({
        method: "GET",
        path: "/{id}/civic_addresses/{address_id}",
        urlParams: ["id", "address_id"]
      }),
      listPhoneNumbers: telnyxMethod25({
        method: "GET",
        path: "/{id}/phone_numbers",
        urlParams: ["id"]
      }),
      retrievePhoneNumber: telnyxMethod25({
        method: "GET",
        path: "/{id}/phone_numbers/{phone_number_id}",
        urlParams: ["id", "phone_number_id"]
      }),
      listReleases: telnyxMethod25({
        method: "GET",
        path: "/{id}/releases",
        urlParams: ["id"]
      }),
      retrieveRelease: telnyxMethod25({
        method: "GET",
        path: "/{id}/releases/{release_id}",
        urlParams: ["id", "release_id"]
      }),
      listUploads: telnyxMethod25({
        method: "GET",
        path: "/{id}/uploads",
        urlParams: ["id"]
      }),
      retrieveUpload: telnyxMethod25({
        method: "GET",
        path: "/{id}/uploads/{ticket_id}",
        urlParams: ["id", "ticket_id"]
      }),
      refreshUploads: telnyxMethod25({
        method: "POST",
        path: "/{id}/uploads/refresh",
        urlParams: ["id"]
      }),
      retrieveUploadsStatus: telnyxMethod25({
        method: "GET",
        path: "/{id}/uploads/status",
        urlParams: ["id"]
      }),
      retryUpload: telnyxMethod25({
        method: "POST",
        path: "/{id}/uploads/{ticket_id}/retry",
        urlParams: ["id", "ticket_id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/FaxApplications.js
function transformResponseData8(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "faxApplications", {
    del: telnyxMethod26({
      method: "DELETE",
      path: "/{faxApplicationId}",
      urlParams: ["faxApplicationId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod26({
      method: "PATCH",
      path: "/{faxApplicationId}",
      urlParams: ["faxApplicationId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod26, FaxApplications;
var init_FaxApplications = __esm({
  "node_modules/telnyx/dist/resources/FaxApplications.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod26 = TelnyxResource_default.method;
    FaxApplications = TelnyxResource_default.extend({
      path: "fax_applications",
      list: telnyxMethod26({
        method: "GET",
        methodType: "list"
      }),
      create: telnyxMethod26({
        method: "POST",
        transformResponseData: transformResponseData8
      }),
      retrieve: telnyxMethod26({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData8
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Faxes.js
function transformResponseData9(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "faxes", {
    del: telnyxMethod27({
      method: "DELETE",
      path: "/{faxId}",
      urlParams: ["faxId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod27, Faxes;
var init_Faxes = __esm({
  "node_modules/telnyx/dist/resources/Faxes.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod27 = TelnyxResource_default.method;
    Faxes = TelnyxResource_default.extend({
      path: "faxes",
      list: telnyxMethod27({
        method: "GET",
        methodType: "list"
      }),
      create: telnyxMethod27({
        method: "POST",
        transformResponseData: transformResponseData9
      }),
      send: telnyxMethod27({
        method: "POST",
        transformResponseData: transformResponseData9
      }),
      retrieve: telnyxMethod27({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData9
      })
    });
  }
});

// node_modules/telnyx/dist/resources/FqdnConnections.js
function transformResponseData10(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "fqdnConnections", {
    del: telnyxMethod28({
      method: "DELETE",
      path: "/{fqdnConnectionId}",
      urlParams: ["fqdnConnectionId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod28({
      method: "PATCH",
      path: "/{fqdnConnectionId}",
      urlParams: ["fqdnConnectionId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod28, FqdnConnections;
var init_FqdnConnections = __esm({
  "node_modules/telnyx/dist/resources/FqdnConnections.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod28 = TelnyxResource_default.method;
    FqdnConnections = TelnyxResource_default.extend({
      path: "fqdn_connections",
      list: telnyxMethod28({
        method: "GET",
        methodType: "list"
      }),
      create: telnyxMethod28({
        method: "POST",
        transformResponseData: transformResponseData10
      }),
      retrieve: telnyxMethod28({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData10
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Fqdns.js
function transformResponseData11(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "fqdns", {
    del: telnyxMethod29({
      method: "DELETE",
      path: "/{fqdnId}",
      urlParams: ["fqdnId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod29({
      method: "PATCH",
      path: "/{fqdnId}",
      urlParams: ["fqdnId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod29, Fqdns;
var init_Fqdns = __esm({
  "node_modules/telnyx/dist/resources/Fqdns.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod29 = TelnyxResource_default.method;
    Fqdns = TelnyxResource_default.extend({
      path: "fqdns",
      list: telnyxMethod29({
        method: "GET",
        methodType: "list"
      }),
      create: telnyxMethod29({
        method: "POST",
        transformResponseData: transformResponseData11
      }),
      retrieve: telnyxMethod29({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData11
      })
    });
  }
});

// node_modules/telnyx/dist/resources/GlobalIps.js
var telnyxMethod30, GlobalIps;
var init_GlobalIps = __esm({
  "node_modules/telnyx/dist/resources/GlobalIps.js"() {
    init_TelnyxResource();
    telnyxMethod30 = TelnyxResource_default.method;
    GlobalIps = TelnyxResource_default.extend({
      path: "global_ips",
      includeBasic: ["delete", "list", "retrieve"],
      DeleteGlobalIpAssignment: telnyxMethod30({
        method: "DELETE",
        path: "/global_ip_assignments/{id}"
      }),
      DeleteGlobalIpHealthCheck: telnyxMethod30({
        method: "DELETE",
        path: "/global_ip_health/checks/{id}"
      }),
      DeleteGlobalIp: telnyxMethod30({
        method: "DELETE",
        path: "/global/ips/{id}"
      }),
      ListGlobalIpAssignments: telnyxMethod30({
        method: "GET",
        path: "/global_ip_assignments"
      }),
      ListGlobalIpProtocols: telnyxMethod30({
        method: "GET",
        path: "/global_ip_protocols"
      }),
      ListGlobalIps: telnyxMethod30({
        method: "GET",
        path: "/global/ips"
      }),
      ListGlobalIpHealthChecks: telnyxMethod30({
        method: "GET",
        path: "/global_ip_health/checks"
      }),
      ListGlobalIpAllowedPorts: telnyxMethod30({
        method: "GET",
        path: "/global_ip_allowed/ports"
      }),
      ListGlobalIpHealthCheckTypes: telnyxMethod30({
        method: "GET",
        path: "/global_ip_health/check/types"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/InventoryCoverage.js
var telnyxMethod31, InventoryCoverage;
var init_InventoryCoverage = __esm({
  "node_modules/telnyx/dist/resources/InventoryCoverage.js"() {
    init_TelnyxResource();
    telnyxMethod31 = TelnyxResource_default.method;
    InventoryCoverage = TelnyxResource_default.extend({
      path: "inventory_coverage",
      list: telnyxMethod31({
        method: "GET",
        methodType: "list"
      }),
      request: telnyxMethod31({
        method: "GET",
        methodType: "list"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/IpConnections.js
function transformResponseData12(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "ipConnections", {
    del: telnyxMethod32({
      method: "DELETE",
      path: "/{ipConnectionId}",
      urlParams: ["ipConnectionId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod32({
      method: "PATCH",
      path: "/{ipConnectionId}",
      urlParams: ["ipConnectionId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod32, IpConnections;
var init_IpConnections = __esm({
  "node_modules/telnyx/dist/resources/IpConnections.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod32 = TelnyxResource_default.method;
    IpConnections = TelnyxResource_default.extend({
      path: "ip_connections",
      list: telnyxMethod32({
        method: "GET",
        methodType: "list"
      }),
      create: telnyxMethod32({
        method: "POST",
        transformResponseData: transformResponseData12
      }),
      retrieve: telnyxMethod32({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData12
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Ips.js
function transformResponseData13(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "ips", {
    del: telnyxMethod33({
      method: "DELETE",
      path: "/{ipId}",
      urlParams: ["ipId"],
      paramsValues: [response.data.id],
      paramsNames: ["ipId"]
    }),
    update: telnyxMethod33({
      method: "PATCH",
      path: "/{ipId}",
      urlParams: ["ipId"],
      paramsValues: [response.data.id],
      paramsNames: ["ipId"]
    })
  });
}
var telnyxMethod33, Ips;
var init_Ips = __esm({
  "node_modules/telnyx/dist/resources/Ips.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod33 = TelnyxResource_default.method;
    Ips = TelnyxResource_default.extend({
      path: "ips",
      list: telnyxMethod33({
        method: "GET",
        methodType: "list",
        transformResponseData: transformResponseData13
      }),
      create: telnyxMethod33({
        method: "POST",
        transformResponseData: transformResponseData13
      }),
      retrieve: telnyxMethod33({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData13
      })
    });
  }
});

// node_modules/telnyx/dist/resources/ManagedAccounts.js
function transformResponseData14(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "managedAccounts", {
    update: telnyxMethod34({
      method: "PATCH",
      path: "/managed_accounts/{id}",
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod34, ManagedAccounts;
var init_ManagedAccounts = __esm({
  "node_modules/telnyx/dist/resources/ManagedAccounts.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod34 = TelnyxResource_default.method;
    ManagedAccounts = TelnyxResource_default.extend({
      path: "/managed_accounts",
      list: telnyxMethod34({
        method: "GET",
        transformResponseData: transformResponseData14
      }),
      create: telnyxMethod34({
        method: "POST",
        transformResponseData: transformResponseData14
      }),
      retrieveManagedAccount: telnyxMethod34({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData14
      }),
      updateManagedAccount: telnyxMethod34({
        method: "PATCH",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData14
      }),
      disableAccount: telnyxMethod34({
        method: "POST",
        path: "/{id}/actions/disable",
        urlParams: ["id"],
        transformResponseData: transformResponseData14
      }),
      enableAccount: telnyxMethod34({
        method: "POST",
        path: "/{id}/actions/enable",
        urlParams: ["id"],
        transformResponseData: transformResponseData14
      })
    });
  }
});

// node_modules/telnyx/dist/resources/MdrDetailReports.js
var telnyxMethod35, MdrDetailReports;
var init_MdrDetailReports = __esm({
  "node_modules/telnyx/dist/resources/MdrDetailReports.js"() {
    init_TelnyxResource();
    telnyxMethod35 = TelnyxResource_default.method;
    MdrDetailReports = TelnyxResource_default.extend({
      path: "mdr_detail_reports",
      includeBasic: ["list", "retrieve", "delete"],
      GetCdrRequests: telnyxMethod35({
        method: "GET",
        path: "/reports/batch_mdr_reports"
      }),
      GetPaginatedMdrs: telnyxMethod35({
        method: "GET",
        path: "/reports/mdrs"
      }),
      DeleteMdrRequest: telnyxMethod35({
        method: "DELETE",
        path: "/reports/batch_mdr_reports/{id}",
        urlParams: ["id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/MdrUsageReports.js
var telnyxMethod36, MdrUsageReports;
var init_MdrUsageReports = __esm({
  "node_modules/telnyx/dist/resources/MdrUsageReports.js"() {
    init_TelnyxResource();
    telnyxMethod36 = TelnyxResource_default.method;
    MdrUsageReports = TelnyxResource_default.extend({
      path: "mdr_usage_reports",
      includeBasic: ["delete", "list", "retrieve"],
      DeleteUsageReport: telnyxMethod36({
        method: "DELETE",
        path: "/reports/mdr_/usage_reports/{id}",
        urlParams: ["id"]
      }),
      GetUsageReportSync: telnyxMethod36({
        method: "GET",
        path: "/reports/mdr_/usage_reports/sync"
      }),
      GetUsageReports: telnyxMethod36({
        method: "GET",
        path: "/reports/mdr_/usage_reports"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/MediaStorageApi.js
var telnyxMethod37, MediaStorageApi;
var init_MediaStorageApi = __esm({
  "node_modules/telnyx/dist/resources/MediaStorageApi.js"() {
    init_TelnyxResource();
    telnyxMethod37 = TelnyxResource_default.method;
    MediaStorageApi = TelnyxResource_default.extend({
      path: "media_storage_api",
      includeBasic: ["delete", "list", "retrieve"],
      DeleteMediaStorage: telnyxMethod37({
        method: "DELETE",
        path: "/media/{media/name}"
      }),
      DownloadMedia: telnyxMethod37({
        method: "GET",
        path: "/media/{media_name}/download"
      }),
      ListMediaStorage: telnyxMethod37({
        method: "GET",
        path: "/media"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Messages.js
var telnyxMethod38, Messages;
var init_Messages = __esm({
  "node_modules/telnyx/dist/resources/Messages.js"() {
    init_TelnyxResource();
    telnyxMethod38 = TelnyxResource_default.method;
    Messages = TelnyxResource_default.extend({
      path: "messages",
      includeBasic: ["create", "retrieve"],
      send: telnyxMethod38({
        method: "POST"
      }),
      sendGroupMms: telnyxMethod38({
        method: "POST",
        path: "/group_mms"
      }),
      sendLongCode: telnyxMethod38({
        method: "POST",
        path: "/long_code"
      }),
      sendNumberPool: telnyxMethod38({
        method: "POST",
        path: "/number_pool"
      }),
      sendShortCode: telnyxMethod38({
        method: "POST",
        path: "/short_code"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/MessagingHostedNumberOrders.js
var MessagingHostedNumberOrders;
var init_MessagingHostedNumberOrders = __esm({
  "node_modules/telnyx/dist/resources/MessagingHostedNumberOrders.js"() {
    init_TelnyxResource();
    MessagingHostedNumberOrders = TelnyxResource_default.extend({
      path: "messaging_hosted_number_orders",
      includeBasic: ["list", "retrieve", "create", "del"]
    });
  }
});

// node_modules/telnyx/dist/resources/MessagingHostedNumbers.js
var MessagingHostedNumbers;
var init_MessagingHostedNumbers = __esm({
  "node_modules/telnyx/dist/resources/MessagingHostedNumbers.js"() {
    init_TelnyxResource();
    MessagingHostedNumbers = TelnyxResource_default.extend({
      path: "messaging_hosted_numbers",
      includeBasic: ["del"]
    });
  }
});

// node_modules/telnyx/dist/resources/MessagingProfileMetrics.js
var MessagingProfileMetrics;
var init_MessagingProfileMetrics = __esm({
  "node_modules/telnyx/dist/resources/MessagingProfileMetrics.js"() {
    init_TelnyxResource();
    MessagingProfileMetrics = TelnyxResource_default.extend({
      path: "messaging_profile_metrics",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/MessagingProfiles.js
function getSpec3(messagingProfileId) {
  return function(methodName) {
    return {
      method: "GET",
      path: `/{messagingProfileId}/${methodName}`,
      urlParams: ["messagingProfileId"],
      paramsValues: [messagingProfileId],
      paramsNames: ["messagingProfileId"],
      methodType: "list"
    };
  };
}
var telnyxMethod39, MESSAGING_PROFILES_COMMANDS, transformResponseData15, MessagingProfiles;
var init_MessagingProfiles = __esm({
  "node_modules/telnyx/dist/resources/MessagingProfiles.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod39 = TelnyxResource_default.method;
    MESSAGING_PROFILES_COMMANDS = ["phone_numbers", "short_codes"];
    transformResponseData15 = (response, telnyx) => {
      const methods = createNestedMethods(telnyxMethod39, MESSAGING_PROFILES_COMMANDS, getSpec3(response.data.id));
      methods.del = telnyxMethod39({
        method: "DELETE",
        path: "/{messagingProfileId}",
        urlParams: ["messagingProfileId"],
        paramsValues: [response.data.id],
        paramsNames: ["messagingProfileId"]
      });
      methods.listAutorespConfigs = telnyxMethod39({
        method: "GET",
        path: "/{profileId}/autoresp_configs",
        urlParams: ["profileId"],
        paramsValues: [response.data.id],
        paramsNames: ["profileId"],
        methodType: "list"
      });
      methods.createAutorespConfig = telnyxMethod39({
        method: "POST",
        path: "/{profileId}/autoresp_configs",
        urlParams: ["profileId"],
        paramsValues: [response.data.id],
        paramsNames: ["profileId"],
        methodType: "create"
      });
      methods.delAutorespConfig = telnyxMethod39({
        method: "DELETE",
        path: "/{profileId}/autoresp_configs/{autorespCfgId}",
        paramsValues: [response.data.id],
        urlParams: ["profileId", "autorespCfgId"],
        paramsNames: ["profileId", "autorespCfgId"]
      });
      methods.retrieveAutorespConfig = telnyxMethod39({
        method: "GET",
        path: "/{profileId}/autoresp_configs/{autorespCfgId}",
        paramsValues: [response.data.id],
        urlParams: ["profileId", "autorespCfgId"],
        paramsNames: ["profileId", "autorespCfgId"],
        methodType: "retrieve"
      });
      methods.updateAutorespConfig = telnyxMethod39({
        method: "PUT",
        path: "/{profileId}/autoresp_configs/{autorespCfgId}",
        paramsValues: [response.data.id],
        urlParams: ["profileId", "autorespCfgId"],
        paramsNames: ["profileId", "autorespCfgId"]
      });
      methods.retrieveMetrics = telnyxMethod39({
        method: "GET",
        path: "/{messagingProfileId}/metrics",
        urlParams: ["messagingProfileId"],
        paramsValues: [response.data.id],
        paramsNames: ["messagingProfileId"],
        methodType: "retrieve"
      });
      return addResourceToResponseData(response, telnyx, "messagingProfiles", methods);
    };
    MessagingProfiles = TelnyxResource_default.extend({
      path: "messaging_profiles",
      includeBasic: ["list", "del", "update"],
      create: telnyxMethod39({
        method: "POST",
        transformResponseData: transformResponseData15
      }),
      retrieve: telnyxMethod39({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData15
      }),
      listPhoneNumbers: telnyxMethod39({
        method: "GET",
        path: "/{messagingProfileId}/phone_numbers",
        urlParams: ["messagingProfileId"],
        methodType: "list"
      }),
      listShortCodes: telnyxMethod39({
        method: "GET",
        path: "/{messagingProfileId}/short_codes",
        urlParams: ["messagingProfileId"],
        methodType: "list"
      }),
      listAutorespConfigs: telnyxMethod39({
        method: "GET",
        path: "/{profileId}/autoresp_configs",
        urlParams: ["profileId"],
        paramsNames: ["profileId"],
        methodType: "list"
      }),
      createAutorespConfig: telnyxMethod39({
        method: "POST",
        path: "/{profileId}/autoresp_configs",
        urlParams: ["profileId"],
        paramsNames: ["profileId"],
        methodType: "create"
      }),
      delAutorespConfig: telnyxMethod39({
        method: "DELETE",
        path: "/{profileId}/autoresp_configs/{autorespCfgId}",
        urlParams: ["profileId", "autorespCfgId"],
        paramsNames: ["profileId", "autorespCfgId"]
      }),
      retrieveAutorespConfig: telnyxMethod39({
        method: "GET",
        path: "/{profileId}/autoresp_configs/{autorespCfgId}",
        urlParams: ["profileId", "autorespCfgId"],
        paramsNames: ["profileId", "autorespCfgId"],
        methodType: "retrieve"
      }),
      updateAutorespConfig: telnyxMethod39({
        method: "PUT",
        path: "/{profileId}/autoresp_configs/{autorespCfgId}",
        urlParams: ["profileId", "autorespCfgId"],
        paramsNames: ["profileId", "autorespCfgId"]
      }),
      retrieveMetrics: telnyxMethod39({
        method: "GET",
        path: "/{id}/metrics",
        urlParams: ["id"],
        methodType: "retrieve"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/MessagingShortCodes.js
var MessagingShortCodes;
var init_MessagingShortCodes = __esm({
  "node_modules/telnyx/dist/resources/MessagingShortCodes.js"() {
    init_TelnyxResource();
    MessagingShortCodes = TelnyxResource_default.extend({
      path: "short_codes",
      includeBasic: ["list", "retrieve", "update"]
    });
  }
});

// node_modules/telnyx/dist/resources/MessagingTollfreeVerification.js
var telnyxMethod40, MessagingTollfreeVerification;
var init_MessagingTollfreeVerification = __esm({
  "node_modules/telnyx/dist/resources/MessagingTollfreeVerification.js"() {
    init_TelnyxResource();
    telnyxMethod40 = TelnyxResource_default.method;
    MessagingTollfreeVerification = TelnyxResource_default.extend({
      path: "messaging/tollfree_verification",
      includeBasic: ["list", "retrieve", "delete"],
      ListVerificationRequests: telnyxMethod40({
        method: "GET",
        path: "/messaging/tollfree_verification_requests"
      }),
      DeleteVerificationRequest: telnyxMethod40({
        method: "DELETE",
        path: "/messaging/tollfree_verification_requests_{id}",
        urlParams: ["id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/MessagingUrlDomains.js
var telnyxMethod41, MessagingUrlDomains;
var init_MessagingUrlDomains = __esm({
  "node_modules/telnyx/dist/resources/MessagingUrlDomains.js"() {
    init_TelnyxResource();
    telnyxMethod41 = TelnyxResource_default.method;
    MessagingUrlDomains = TelnyxResource_default.extend({
      path: "messaging/url_domains",
      includeBasic: ["list", "retrieve"],
      ListMessagingUrlDomains: telnyxMethod41({
        method: "GET",
        path: "/messaging/url_domains"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/MobileNetworkOperators.js
var telnyxMethod42, MobileNetworkOperators;
var init_MobileNetworkOperators = __esm({
  "node_modules/telnyx/dist/resources/MobileNetworkOperators.js"() {
    init_TelnyxResource();
    telnyxMethod42 = TelnyxResource_default.method;
    MobileNetworkOperators = TelnyxResource_default.extend({
      path: "mobile_network_operators",
      includeBasic: ["list", "retrieve"],
      GetMobileNetworkOperators: telnyxMethod42({
        method: "GET",
        path: "/mobile_network_operators"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/MobileOperatorNetworks.js
var MobileOperatorNetworks;
var init_MobileOperatorNetworks = __esm({
  "node_modules/telnyx/dist/resources/MobileOperatorNetworks.js"() {
    init_TelnyxResource();
    MobileOperatorNetworks = TelnyxResource_default.extend({
      path: "mobile_operator_networks",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/Networks.js
var telnyxMethod43, Networks;
var init_Networks = __esm({
  "node_modules/telnyx/dist/resources/Networks.js"() {
    init_TelnyxResource();
    telnyxMethod43 = TelnyxResource_default.method;
    Networks = TelnyxResource_default.extend({
      path: "networks",
      includeBasic: ["delete", "list", "retrieve"],
      DeleteNetwork: telnyxMethod43({
        method: "DELETE",
        path: "/networks/{id}"
      }),
      ListNetworkInterfaces: telnyxMethod43({
        method: "GET",
        path: "/networks/{id}/network_interfaces"
      }),
      ListNetworks: telnyxMethod43({
        method: "GET",
        path: "/networks"
      }),
      DeleteDefaultGateway: telnyxMethod43({
        method: "DELETE",
        path: "/networks/{id}/default_gateway"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/NotificationEvents.js
var NotificationEvents;
var init_NotificationEvents = __esm({
  "node_modules/telnyx/dist/resources/NotificationEvents.js"() {
    init_TelnyxResource();
    NotificationEvents = TelnyxResource_default.extend({
      path: "notification_events",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/NumberBackgroundJobs.js
var telnyxMethod44, NumberBackgroundJobs;
var init_NumberBackgroundJobs = __esm({
  "node_modules/telnyx/dist/resources/NumberBackgroundJobs.js"() {
    init_TelnyxResource();
    telnyxMethod44 = TelnyxResource_default.method;
    NumberBackgroundJobs = TelnyxResource_default.extend({
      path: "phone_numbers/jobs",
      includeBasic: ["list", "retrieve"],
      updateEmergencySettings: telnyxMethod44({
        method: "POST",
        path: "/update_emergency_settings"
      }),
      updateNumbers: telnyxMethod44({
        method: "POST",
        path: "/update_phone_numbers"
      }),
      deleteNumbers: telnyxMethod44({
        method: "POST",
        path: "/delete_phone_numbers"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/NumberLookup.js
var NumberLookup;
var init_NumberLookup = __esm({
  "node_modules/telnyx/dist/resources/NumberLookup.js"() {
    init_TelnyxResource();
    NumberLookup = TelnyxResource_default.extend({
      path: "number_lookup",
      includeBasic: ["retrieve"]
    });
  }
});

// node_modules/telnyx/dist/resources/NumberOrderDocuments.js
var telnyxMethod45, NumberOrderDocuments;
var init_NumberOrderDocuments = __esm({
  "node_modules/telnyx/dist/resources/NumberOrderDocuments.js"() {
    init_TelnyxResource();
    telnyxMethod45 = TelnyxResource_default.method;
    NumberOrderDocuments = TelnyxResource_default.extend({
      path: "number_order_documents",
      includeBasic: ["list", "retrieve", "update"],
      upload: telnyxMethod45({
        method: "POST",
        methodType: "create"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/NumberOrders.js
function transformResponseData16(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "numberOrders", {
    update: telnyxMethod46({
      method: "PATCH",
      path: "/{number_order_id}",
      urlParams: ["number_order_id"],
      paramsValues: [response.data.id],
      paramsNames: ["number_order_id"]
    })
  });
}
var telnyxMethod46, NumberOrders;
var init_NumberOrders = __esm({
  "node_modules/telnyx/dist/resources/NumberOrders.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod46 = TelnyxResource_default.method;
    NumberOrders = TelnyxResource_default.extend({
      path: "number_orders",
      includeBasic: ["list", "update"],
      create: telnyxMethod46({
        method: "POST",
        transformResponseData: transformResponseData16
      }),
      retrieve: telnyxMethod46({
        method: "GET",
        path: "/{number_order_id}",
        urlParams: ["number_order_id"],
        transformResponseData: transformResponseData16
      })
    });
  }
});

// node_modules/telnyx/dist/resources/NumberPortouts.js
function transformResponseData17(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "numberPortouts", {
    del: telnyxMethod47({
      method: "DELETE",
      path: "/portouts",
      urlParams: ["portouts"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod47({
      method: "PATCH",
      path: "/portouts",
      urlParams: ["portouts"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod47, NumberPortouts;
var init_NumberPortouts = __esm({
  "node_modules/telnyx/dist/resources/NumberPortouts.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod47 = TelnyxResource_default.method;
    NumberPortouts = TelnyxResource_default.extend({
      path: "portouts",
      list: telnyxMethod47({
        method: "GET",
        transformResponseData: transformResponseData17
      }),
      retrieve: telnyxMethod47({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData17
      }),
      retrieveComments: telnyxMethod47({
        method: "GET",
        path: "/{id}/comments",
        urlParams: ["id"],
        transformResponseData: transformResponseData17
      }),
      create: telnyxMethod47({
        path: "/{id}/comments",
        urlParams: ["id"],
        method: "POST",
        transformResponseData: transformResponseData17
      }),
      listSupportingDocuments: telnyxMethod47({
        method: "GET",
        path: "/{id}/supporting_documents",
        urlParams: ["id"],
        transformResponseData: transformResponseData17
      }),
      createListOfSupportingDocuments: telnyxMethod47({
        method: "POST",
        path: "/{id}/supporting_documents",
        urlParams: ["id"],
        transformResponseData: transformResponseData17
      }),
      updateStatus: telnyxMethod47({
        method: "PATCH",
        path: "/{id}/{status}",
        urlParams: ["id"],
        transformResponseData: transformResponseData17
      })
    });
  }
});

// node_modules/telnyx/dist/resources/NumberReservations.js
var telnyxMethod48, NumberReservations;
var init_NumberReservations = __esm({
  "node_modules/telnyx/dist/resources/NumberReservations.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod48 = TelnyxResource_default.method;
    NumberReservations = TelnyxResource_default.extend({
      path: "number_reservations",
      includeBasic: ["list", "retrieve"],
      create: telnyxMethod48({
        method: "POST",
        transformResponseData: function(response, telnyx) {
          return addResourceToResponseData(response, telnyx, "numberReservations", {
            extend: telnyxMethod48({
              method: "POST",
              path: "/{numberReservationId}/actions/extend",
              urlParams: ["numberReservationId"],
              paramsValues: [response.data.id],
              paramsNames: ["id"],
              methodType: "create"
            })
          });
        }
      })
    });
  }
});

// node_modules/telnyx/dist/resources/NumbersFeatures.js
var telnyxMethod49, NumbersFeatures;
var init_NumbersFeatures = __esm({
  "node_modules/telnyx/dist/resources/NumbersFeatures.js"() {
    init_TelnyxResource();
    telnyxMethod49 = TelnyxResource_default.method;
    NumbersFeatures = TelnyxResource_default.extend({
      path: "numbers_features",
      includeBasic: ["create"],
      PostNumbersFeatures: telnyxMethod49({
        method: "POST",
        path: "/numbers_features"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Object.js
var telnyxMethod50, Object2;
var init_Object = __esm({
  "node_modules/telnyx/dist/resources/Object.js"() {
    init_TelnyxResource();
    telnyxMethod50 = TelnyxResource_default.method;
    Object2 = TelnyxResource_default.extend({
      path: "object",
      includeBasic: ["delete"],
      DeleteObject: telnyxMethod50({
        method: "DELETE",
        path: "/{bucketName}/{objectName}",
        urlParams: ["bucketName", "objectName"]
      }),
      DeleteBucket: telnyxMethod50({
        method: "DELETE",
        path: "/{bucketName}",
        urlParams: ["bucketName"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/OtaUpdates.js
var telnyxMethod51, OtaUpdates;
var init_OtaUpdates = __esm({
  "node_modules/telnyx/dist/resources/OtaUpdates.js"() {
    init_TelnyxResource();
    telnyxMethod51 = TelnyxResource_default.method;
    OtaUpdates = TelnyxResource_default.extend({
      path: "ota_updates",
      includeBasic: ["list", "retrieve"],
      GetOtaUpdate: telnyxMethod51({
        method: "GET",
        path: "/ota_updates/{id}"
      }),
      ListOtaUpdates: telnyxMethod51({
        method: "GET",
        path: "/ota_updates"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/OutboundVoiceProfiles.js
function transformResponseData18(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "outboundVoiceProfiles", {
    del: telnyxMethod52({
      method: "DELETE",
      path: "/{outboundId}",
      urlParams: ["outboundId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod52({
      method: "PATCH",
      path: "/{outboundId}",
      urlParams: ["outboundId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod52, OutboundVoiceProfiles;
var init_OutboundVoiceProfiles = __esm({
  "node_modules/telnyx/dist/resources/OutboundVoiceProfiles.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod52 = TelnyxResource_default.method;
    OutboundVoiceProfiles = TelnyxResource_default.extend({
      path: "outbound_voice_profiles",
      includeBasic: ["list", "update", "del"],
      create: telnyxMethod52({
        method: "POST",
        transformResponseData: transformResponseData18
      }),
      retrieve: telnyxMethod52({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData18
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Payment.js
var telnyxMethod53, Payment;
var init_Payment = __esm({
  "node_modules/telnyx/dist/resources/Payment.js"() {
    init_TelnyxResource();
    telnyxMethod53 = TelnyxResource_default.method;
    Payment = TelnyxResource_default.extend({
      path: "payment",
      getAutoRechargePrefs: telnyxMethod53({
        method: "GET",
        path: "/auto_recharge_prefs"
      }),
      updateAutoRechargePrefs: telnyxMethod53({
        method: "PATCH",
        path: "/auto_recharge_prefs"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumberAssignmentByProfile.js
function transformResponseData19(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "phoneNumberAssignmentByProfile", {
    del: telnyxMethod54({
      method: "DELETE",
      path: "/{phoneNumberAssignmentByProfileId}",
      urlParams: ["phoneNumberAssignmentByProfileId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod54({
      method: "PATCH",
      path: "/{phoneNumberAssignmentByProfileId}",
      urlParams: ["phoneNumberAssignmentByProfileId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod54, PhoneNumberAssignmentByProfile;
var init_PhoneNumberAssignmentByProfile = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumberAssignmentByProfile.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod54 = TelnyxResource_default.method;
    PhoneNumberAssignmentByProfile = TelnyxResource_default.extend({
      path: "phoneNumberAssignmentByProfile",
      create: telnyxMethod54({
        method: "POST",
        transformResponseData: transformResponseData19
      }),
      retrieve: telnyxMethod54({
        method: "GET",
        path: "/{taskId}",
        urlParams: ["taskId"],
        transformResponseData: transformResponseData19
      }),
      retrieveTaskStatus: telnyxMethod54({
        method: "GET",
        path: "/{taskId}",
        urlParams: ["taskId"],
        transformResponseData: transformResponseData19
      }),
      phoneNumbers: telnyxMethod54({
        method: "GET",
        path: "/{taskId}/phoneNumbers",
        urlParams: ["taskId"],
        transformResponseData: transformResponseData19
      }),
      retrievePhoneNumberStatus: telnyxMethod54({
        method: "GET",
        path: "/{taskId}/phoneNumbers",
        urlParams: ["taskId"],
        transformResponseData: transformResponseData19
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumberBlockOrders.js
var telnyxMethod55, PhoneNumberBlockOrders;
var init_PhoneNumberBlockOrders = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumberBlockOrders.js"() {
    init_TelnyxResource();
    telnyxMethod55 = TelnyxResource_default.method;
    PhoneNumberBlockOrders = TelnyxResource_default.extend({
      path: "phone_number_block_orders",
      includeBasic: ["list", "retrieve"],
      RetrieveNumberBlockOrder: telnyxMethod55({
        method: "GET",
        path: "/number_block_orders/{number_block_order_id}",
        urlParams: ["number_block_order_id"]
      }),
      ListNumberBlockOrders: telnyxMethod55({
        method: "GET",
        path: "/number_block_orders"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumberBlocksBackgroundJobs.js
var telnyxMethod56, PhoneNumberBlocksBackgroundJobs;
var init_PhoneNumberBlocksBackgroundJobs = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumberBlocksBackgroundJobs.js"() {
    init_TelnyxResource();
    telnyxMethod56 = TelnyxResource_default.method;
    PhoneNumberBlocksBackgroundJobs = TelnyxResource_default.extend({
      path: "phone_number_blocks_background_jobs",
      includeBasic: ["create", "list", "retrieve"],
      CreatePhoneNumberBlockDeletionJob: telnyxMethod56({
        method: "POST",
        path: "phone_number_blocks_jobs/delete/phone_number_block"
      }),
      GetPhoneNumberBlocksJob: telnyxMethod56({
        method: "GET",
        path: "phone_number_blocks_jobs{id}",
        urlParams: ["id"]
      }),
      ListPhoneNumberBlocksJobs: telnyxMethod56({
        method: "GET",
        path: "/phone_number_blocks_jobs"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumberCampaigns.js
var telnyxMethod57, PhoneNumberCampaigns;
var init_PhoneNumberCampaigns = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumberCampaigns.js"() {
    init_TelnyxResource();
    telnyxMethod57 = TelnyxResource_default.method;
    PhoneNumberCampaigns = TelnyxResource_default.extend({
      path: "phone_number_campaigns",
      includeBasic: ["delete", "list", "retrieve"],
      DeletePhoneNumberCampaign: telnyxMethod57({
        method: "DELETE",
        path: "/phone_number_campaigns/{phoneNumber}",
        urlParams: ["phoneNumber"]
      }),
      GetAllPhoneNumberCampaigns: telnyxMethod57({
        method: "GET",
        path: "/phone_number_campaigns"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumberOrderDocuments.js
var telnyxMethod58, PhoneNumberOrderDocuments;
var init_PhoneNumberOrderDocuments = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumberOrderDocuments.js"() {
    init_TelnyxResource();
    telnyxMethod58 = TelnyxResource_default.method;
    PhoneNumberOrderDocuments = TelnyxResource_default.extend({
      path: "phone_number_order_documents",
      includeBasic: ["list", "retrieve"],
      ListNumberOrderDocuments: telnyxMethod58({
        method: "GET",
        path: "/number_order_documents"
      }),
      RetrieveNumberOrderDocument: telnyxMethod58({
        method: "GET",
        path: "/number_order_documents/{number_order_document_id}",
        urlParams: ["number_order_document_id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumbersMessaging.js
var PhoneNumbersMessaging;
var init_PhoneNumbersMessaging = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumbersMessaging.js"() {
    init_TelnyxResource();
    PhoneNumbersMessaging = TelnyxResource_default.extend({
      path: "phone_numbers/messaging",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumbersVoice.js
var PhoneNumbersVoice;
var init_PhoneNumbersVoice = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumbersVoice.js"() {
    init_TelnyxResource();
    PhoneNumbersVoice = TelnyxResource_default.extend({
      path: "phone_numbers/voice",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumbersInboundChannels.js
var telnyxMethod59, PhoneNumbersInboundChannels;
var init_PhoneNumbersInboundChannels = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumbersInboundChannels.js"() {
    init_TelnyxResource();
    telnyxMethod59 = TelnyxResource_default.method;
    PhoneNumbersInboundChannels = TelnyxResource_default.extend({
      path: "phone_numbers/inbound_channels",
      includeBasic: ["list"],
      update: telnyxMethod59({
        method: "PATCH",
        methodType: "update"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumbers.js
function transformResponseData20(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "phoneNumbers", {
    del: telnyxMethod60({
      method: "DELETE",
      path: "/{intId}",
      urlParams: ["intId"],
      paramsValues: [response.data.id],
      paramsNames: ["intId"]
    }),
    update: telnyxMethod60({
      method: "PATCH",
      path: "/{intId}",
      urlParams: ["intId"],
      paramsValues: [response.data.id],
      paramsNames: ["intId"]
    })
  });
}
var telnyxMethod60, PhoneNumbers;
var init_PhoneNumbers = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumbers.js"() {
    init_TelnyxResource();
    init_utils();
    init_PhoneNumbersMessaging();
    init_PhoneNumbersVoice();
    init_PhoneNumbersInboundChannels();
    telnyxMethod60 = TelnyxResource_default.method;
    PhoneNumbers = TelnyxResource_default.extend({
      path: "phone_numbers",
      includeBasic: ["list", "update", "del"],
      nestedResources: {
        Messaging: PhoneNumbersMessaging,
        Voice: PhoneNumbersVoice,
        Inbound: PhoneNumbersInboundChannels
      },
      retrieve: telnyxMethod60({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData20
      }),
      retrieveVoiceSettings: telnyxMethod60({
        method: "GET",
        path: "/{intId}/voice",
        urlParams: ["intId"],
        paramsNames: ["intId"],
        methodType: "retrieve"
      }),
      updateVoiceSettings: telnyxMethod60({
        method: "PATCH",
        path: "/{intId}/voice",
        urlParams: ["intId"],
        paramsNames: ["intId"]
      }),
      retrieveMessagingSettings: telnyxMethod60({
        method: "GET",
        path: "/{intId}/messaging",
        urlParams: ["intId"],
        paramsNames: ["intId"],
        methodType: "retrieve"
      }),
      updateMessagingSettings: telnyxMethod60({
        method: "PATCH",
        path: "/{intId}/messaging",
        urlParams: ["intId"],
        paramsNames: ["intId"]
      }),
      enableEmergencySettings: telnyxMethod60({
        method: "POST",
        path: "/{intId}/actions/enable_emergency",
        urlParams: ["intId"],
        paramsNames: ["intId"]
      }),
      retrieveVoicemail: telnyxMethod60({
        method: "GET",
        path: "/{phone_number_id}/voicemail",
        urlParams: ["phone_number_id"],
        paramsNames: ["phone_number_id"],
        methodType: "retrieve"
      }),
      createVoicemail: telnyxMethod60({
        method: "POST",
        path: "/{phone_number_id}/voicemail",
        urlParams: ["phone_number_id"],
        paramsNames: ["phone_number_id"]
      }),
      updateVoicemail: telnyxMethod60({
        method: "PATCH",
        path: "/{phone_number_id}/voicemail",
        urlParams: ["phone_number_id"],
        paramsNames: ["phone_number_id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumbersRegulatoryRequirements.js
var PhoneNumbersRegulatoryRequirements;
var init_PhoneNumbersRegulatoryRequirements = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumbersRegulatoryRequirements.js"() {
    init_TelnyxResource();
    PhoneNumbersRegulatoryRequirements = TelnyxResource_default.extend({
      path: "phone_numbers_regulatory_requirements",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/PhoneNumbersSlim.js
var PhoneNumbersSlim;
var init_PhoneNumbersSlim = __esm({
  "node_modules/telnyx/dist/resources/PhoneNumbersSlim.js"() {
    init_TelnyxResource();
    PhoneNumbersSlim = TelnyxResource_default.extend({
      path: "phone_numbers/slim",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/PortabilityChecks.js
var telnyxMethod61, PortabilityChecks;
var init_PortabilityChecks = __esm({
  "node_modules/telnyx/dist/resources/PortabilityChecks.js"() {
    init_TelnyxResource();
    telnyxMethod61 = TelnyxResource_default.method;
    PortabilityChecks = TelnyxResource_default.extend({
      path: "portability_checks",
      run: telnyxMethod61({
        method: "POST"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PortingEvents.js
var telnyxMethod62, PortingEvents;
var init_PortingEvents = __esm({
  "node_modules/telnyx/dist/resources/PortingEvents.js"() {
    init_TelnyxResource();
    telnyxMethod62 = TelnyxResource_default.method;
    PortingEvents = TelnyxResource_default.extend({
      path: "porting/events",
      includeBasic: ["list", "retrieve"],
      republish: telnyxMethod62({
        method: "POST",
        path: "/{id}/republish",
        urlParams: ["id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PortoutEvents.js
var telnyxMethod63, PortoutEvents;
var init_PortoutEvents = __esm({
  "node_modules/telnyx/dist/resources/PortoutEvents.js"() {
    init_TelnyxResource();
    telnyxMethod63 = TelnyxResource_default.method;
    PortoutEvents = TelnyxResource_default.extend({
      path: "portout/events",
      includeBasic: ["list", "retrieve"],
      republish: telnyxMethod63({
        method: "POST",
        path: "/{id}/republish",
        urlParams: ["id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PortingOrders.js
function transformResponseData21(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "portingOrders", {
    del: telnyxMethod64({
      method: "DELETE",
      path: "/{portingOrderId}",
      urlParams: ["portingOrderId"],
      paramsValues: [response.data.id],
      paramsNames: ["portingOrderId"]
    }),
    update: telnyxMethod64({
      method: "PATCH",
      path: "/{portingOrderId}",
      urlParams: ["portingOrderId"],
      paramsValues: [response.data.id],
      paramsNames: ["portingOrderId"]
    })
  });
}
var telnyxMethod64, PortingOrders;
var init_PortingOrders = __esm({
  "node_modules/telnyx/dist/resources/PortingOrders.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod64 = TelnyxResource_default.method;
    PortingOrders = TelnyxResource_default.extend({
      path: "porting_orders",
      list: telnyxMethod64({
        method: "GET",
        methodType: "list"
      }),
      create: telnyxMethod64({
        method: "POST",
        methodType: "create"
      }),
      // include_phone_numbers query param
      retrieve: telnyxMethod64({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData21
      }),
      listExceptionTypes: telnyxMethod64({
        method: "GET",
        path: "/exception_types",
        methodType: "list"
      }),
      listActivationJobs: telnyxMethod64({
        method: "GET",
        path: "/{id}/activation_jobs",
        methodType: "list",
        urlParams: ["id"]
      }),
      cancelOrder: telnyxMethod64({
        method: "POST",
        path: "/{orderId}/actions/cancel",
        urlParams: ["orderId"],
        paramsNames: ["orderId"],
        methodType: "create"
      }),
      listAllowedFocWindows: telnyxMethod64({
        method: "GET",
        path: "/{id}/allowed_foc_windows",
        methodType: "list",
        urlParams: ["id"]
      }),
      retrieveLoaTemplate: telnyxMethod64({
        method: "GET",
        path: "/{id}/loa_template",
        urlParams: ["id"]
      }),
      confirmOrder: telnyxMethod64({
        method: "POST",
        path: "/{id}/actions/confirm",
        urlParams: ["id"]
      }),
      createComment: telnyxMethod64({
        method: "POST",
        path: "/{id}/comments",
        methodType: "create",
        urlParams: ["id"]
      }),
      listComments: telnyxMethod64({
        method: "GET",
        path: "/{id}/comments",
        methodType: "list",
        urlParams: ["id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PortingPhoneNumbers.js
var PortingPhoneNumbers;
var init_PortingPhoneNumbers = __esm({
  "node_modules/telnyx/dist/resources/PortingPhoneNumbers.js"() {
    init_TelnyxResource();
    PortingPhoneNumbers = TelnyxResource_default.extend({
      path: "porting_phone_numbers",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/PortoutRequests.js
var telnyxMethod65, PortoutRequests;
var init_PortoutRequests = __esm({
  "node_modules/telnyx/dist/resources/PortoutRequests.js"() {
    init_TelnyxResource();
    telnyxMethod65 = TelnyxResource_default.method;
    PortoutRequests = TelnyxResource_default.extend({
      path: "portouts",
      includeBasic: ["list", "retrieve"],
      updateStatus: telnyxMethod65({
        method: "PATCH",
        path: "/{id}/{status}",
        urlParams: ["id", "status"]
      }),
      listComments: telnyxMethod65({
        method: "GET",
        path: "/{id}/comments",
        urlParams: ["id"],
        methodType: "list"
      }),
      createComment: telnyxMethod65({
        method: "POST",
        path: "/{id}/comments",
        urlParams: ["id"],
        methodType: "create"
      }),
      retrieveRequest: telnyxMethod65({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        methodType: "retrieve"
      }),
      retrieveComment: telnyxMethod65({
        method: "GET",
        path: "/{id}/comments",
        urlParams: ["id"],
        methodType: "retrieve"
      }),
      listDocuments: telnyxMethod65({
        method: "GET",
        path: "/{id}/supporting_documents",
        urlParams: ["id"],
        methodType: "list"
      }),
      createDocuments: telnyxMethod65({
        method: "POST",
        path: "/{id}/supporting_documents",
        urlParams: ["id"],
        methodType: "create"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PresignedObjectUrls.js
var telnyxMethod66, PresignedObjectUrls;
var init_PresignedObjectUrls = __esm({
  "node_modules/telnyx/dist/resources/PresignedObjectUrls.js"() {
    init_TelnyxResource();
    telnyxMethod66 = TelnyxResource_default.method;
    PresignedObjectUrls = TelnyxResource_default.extend({
      path: "presigned_object_urls",
      includeBasic: ["create"],
      GetPresignedObjectUrl: telnyxMethod66({
        method: "POST",
        path: "/storage_buckets/{bucketName}/{objectName}/presigned_url",
        urlParams: ["bucketName", "objectName"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PrivateWirelessGateways.js
var telnyxMethod67, PrivateWirelessGateways;
var init_PrivateWirelessGateways = __esm({
  "node_modules/telnyx/dist/resources/PrivateWirelessGateways.js"() {
    init_TelnyxResource();
    telnyxMethod67 = TelnyxResource_default.method;
    PrivateWirelessGateways = TelnyxResource_default.extend({
      path: "private_wireless_gateways",
      includeBasic: ["list", "retrieve", "delete"],
      GetPrivateWirelessGateways: telnyxMethod67({
        method: "GET",
        path: "/private_wireless_gateways"
      }),
      DeleteWirelessGateway: telnyxMethod67({
        method: "DELETE",
        path: "/private_wireless_gateways/{id}"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PublicInternetGateways.js
var telnyxMethod68, PublicInternetGateways;
var init_PublicInternetGateways = __esm({
  "node_modules/telnyx/dist/resources/PublicInternetGateways.js"() {
    init_TelnyxResource();
    telnyxMethod68 = TelnyxResource_default.method;
    PublicInternetGateways = TelnyxResource_default.extend({
      path: "public_internet_gateways",
      includeBasic: ["delete", "list", "retrieve"],
      DeletePublicInternetGateway: telnyxMethod68({
        method: "DELETE",
        path: "/public_internet_gateways/{id}"
      }),
      ListPublicInternetGateways: telnyxMethod68({
        method: "GET",
        path: "/public_internet_gateways"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/PushCredentials.js
var telnyxMethod69, PushCredentials;
var init_PushCredentials = __esm({
  "node_modules/telnyx/dist/resources/PushCredentials.js"() {
    init_TelnyxResource();
    telnyxMethod69 = TelnyxResource_default.method;
    PushCredentials = TelnyxResource_default.extend({
      path: "push_credentials",
      includeBasic: ["list", "retrieve", "delete"],
      ListPushCredentials: telnyxMethod69({
        method: "GET",
        path: "/mobile_push_credentials"
      }),
      DeletePushCredentialById: telnyxMethod69({
        method: "DELETE",
        path: "/mobile_push_credentials/{push/credential/id}",
        urlParams: ["push_credential_id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Queues.js
function getSpec4(queueName) {
  return function(methodName) {
    return {
      method: "GET",
      path: `/{queueName}/${methodName}`,
      urlParams: ["queueName"],
      paramsValues: [queueName],
      paramsNames: ["queueName"],
      methodType: "list"
    };
  };
}
function transformResponseData22(response, telnyx) {
  const methods = createNestedMethods(telnyxMethod70, ACTIONS, getSpec4(response.data.name));
  methods.retrieveCall = telnyxMethod70({
    method: "GET",
    path: "/{queue_name}/calls/{call_control_id}",
    urlParams: ["queue_name", "call_control_id"],
    paramsValues: [response.data.queue_name],
    paramsNames: ["queue_name", "call_control_id"]
  });
  return addResourceToResponseData(response, telnyx, "queues", methods);
}
var telnyxMethod70, ACTIONS, Queues;
var init_Queues = __esm({
  "node_modules/telnyx/dist/resources/Queues.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod70 = TelnyxResource_default.method;
    ACTIONS = ["calls"];
    Queues = TelnyxResource_default.extend({
      path: "queues",
      retrieve: telnyxMethod70({
        method: "GET",
        path: "/{queue_name}",
        urlParams: ["queue_name"],
        transformResponseData: transformResponseData22
      }),
      listCalls: telnyxMethod70({
        method: "GET",
        path: "/{queue_name}/calls",
        urlParams: ["queue_name"]
      }),
      retrieveCall: telnyxMethod70({
        method: "GET",
        path: "/{queue_name}/calls/{call_control_id}",
        urlParams: ["queue_name", "call_control_id"],
        paramsNames: ["queue_name", "call_control_id"],
        methodType: "retrieve"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/RecordingsCommands.js
var telnyxMethod71, RecordingsCommands;
var init_RecordingsCommands = __esm({
  "node_modules/telnyx/dist/resources/RecordingsCommands.js"() {
    init_TelnyxResource();
    telnyxMethod71 = TelnyxResource_default.method;
    RecordingsCommands = TelnyxResource_default.extend({
      path: "recordings_commands",
      includeBasic: ["list", "retrieve"],
      RetrieveRecording: telnyxMethod71({
        method: "GET",
        path: "/recordings/{id}",
        urlParams: ["id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Regions.js
var telnyxMethod72, Regions;
var init_Regions = __esm({
  "node_modules/telnyx/dist/resources/Regions.js"() {
    init_TelnyxResource();
    telnyxMethod72 = TelnyxResource_default.method;
    Regions = TelnyxResource_default.extend({
      path: "regions",
      includeBasic: ["list", "retrieve"],
      ListRegions: telnyxMethod72({
        method: "GET",
        path: "/regions"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/RegulatoryRequirements.js
var RegulatoryRequirements;
var init_RegulatoryRequirements = __esm({
  "node_modules/telnyx/dist/resources/RegulatoryRequirements.js"() {
    init_TelnyxResource();
    RegulatoryRequirements = TelnyxResource_default.extend({
      path: "regulatory_requirements",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/Reporting.js
var telnyxMethod73, Reporting;
var init_Reporting = __esm({
  "node_modules/telnyx/dist/resources/Reporting.js"() {
    init_TelnyxResource();
    telnyxMethod73 = TelnyxResource_default.method;
    Reporting = TelnyxResource_default.extend({
      path: "reporting",
      includeBasic: ["list", "retrieve", "delete"],
      GetWdrReports: telnyxMethod73({
        method: "GET",
        path: "/wireless_detail_records/reports"
      }),
      DeleteWdrReport: telnyxMethod73({
        method: "DELETE",
        path: "/wireless_detail_records/reports/{id}"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Reports.js
var telnyxMethod74, Reports;
var init_Reports = __esm({
  "node_modules/telnyx/dist/resources/Reports.js"() {
    init_TelnyxResource();
    telnyxMethod74 = TelnyxResource_default.method;
    Reports = TelnyxResource_default.extend({
      path: "reports",
      includeBasic: ["list", "retrieve", "create"],
      GetBillingGroupReport: telnyxMethod74({
        method: "GET",
        path: "/ledger/billing_group/reports/{id}"
      }),
      CreateBillingGroupReport: telnyxMethod74({
        method: "POST",
        path: "/ledger/billing_group/reports"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/ReportsMdrs.js
var ReportsMdrs;
var init_ReportsMdrs = __esm({
  "node_modules/telnyx/dist/resources/ReportsMdrs.js"() {
    init_TelnyxResource();
    ReportsMdrs = TelnyxResource_default.extend({
      path: "/reports/mdrs",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/resources/Requirements.js
var telnyxMethod75, Requirements;
var init_Requirements = __esm({
  "node_modules/telnyx/dist/resources/Requirements.js"() {
    init_TelnyxResource();
    telnyxMethod75 = TelnyxResource_default.method;
    Requirements = TelnyxResource_default.extend({
      path: "requirements",
      includeBasic: ["list", "retrieve"],
      ListRequirements: telnyxMethod75({
        method: "GET",
        path: "/requirements"
      }),
      RetrieveDocumentRequirements: telnyxMethod75({
        method: "GET",
        path: "/requirements/{id}"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/RequirementTypes.js
var telnyxMethod76, RequirementTypes;
var init_RequirementTypes = __esm({
  "node_modules/telnyx/dist/resources/RequirementTypes.js"() {
    init_TelnyxResource();
    telnyxMethod76 = TelnyxResource_default.method;
    RequirementTypes = TelnyxResource_default.extend({
      path: "requirement_types",
      includeBasic: ["list", "retrieve"],
      RetrieveRequirementType: telnyxMethod76({
        method: "GET",
        path: "/requirement_types/{id}"
      }),
      ListRequirementTypes: telnyxMethod76({
        method: "GET",
        path: "/requirement_types"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/RoomCompositions.js
var RoomCompositions;
var init_RoomCompositions = __esm({
  "node_modules/telnyx/dist/resources/RoomCompositions.js"() {
    init_TelnyxResource();
    RoomCompositions = TelnyxResource_default.extend({
      path: "/room_compositions",
      includeBasic: ["list", "retrieve", "create", "del"]
    });
  }
});

// node_modules/telnyx/dist/resources/RoomParticipants.js
var RoomParticipants;
var init_RoomParticipants = __esm({
  "node_modules/telnyx/dist/resources/RoomParticipants.js"() {
    init_TelnyxResource();
    RoomParticipants = TelnyxResource_default.extend({
      path: "/room_participants",
      includeBasic: ["list", "retrieve"]
    });
  }
});

// node_modules/telnyx/dist/resources/RoomRecordings.js
var telnyxMethod77, RoomRecordings;
var init_RoomRecordings = __esm({
  "node_modules/telnyx/dist/resources/RoomRecordings.js"() {
    init_TelnyxResource();
    telnyxMethod77 = TelnyxResource_default.method;
    RoomRecordings = TelnyxResource_default.extend({
      path: "room_recordings",
      includeBasic: ["delete"],
      DeleteRoomRecording: telnyxMethod77({
        method: "DELETE",
        path: "/room_recordings/{room/recording/id}",
        urlParams: ["room_recording_id"]
      }),
      DeleteRoomRecordings: telnyxMethod77({
        method: "DELETE",
        path: "/room_recordings"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Rooms.js
var Rooms;
var init_Rooms = __esm({
  "node_modules/telnyx/dist/resources/Rooms.js"() {
    init_TelnyxResource();
    Rooms = TelnyxResource_default.extend({
      path: "rooms",
      includeBasic: ["list", "create", "retrieve", "update", "del"]
    });
  }
});

// node_modules/telnyx/dist/resources/RoomsClientToken.js
var telnyxMethod78, RoomsClientToken;
var init_RoomsClientToken = __esm({
  "node_modules/telnyx/dist/resources/RoomsClientToken.js"() {
    init_TelnyxResource();
    telnyxMethod78 = TelnyxResource_default.method;
    RoomsClientToken = TelnyxResource_default.extend({
      path: "rooms/{room_id}/actions",
      retrieveGenerateJoinClientToken: telnyxMethod78({
        method: "POST",
        path: "/generate_join_client_token",
        urlParams: ["room_id"]
      }),
      retrieveRefreshClientToken: telnyxMethod78({
        method: "POST",
        path: "/refresh_client_token",
        urlParams: ["room_id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/RoomsClientTokens.js
var telnyxMethod79, RoomsClientTokens;
var init_RoomsClientTokens = __esm({
  "node_modules/telnyx/dist/resources/RoomsClientTokens.js"() {
    init_TelnyxResource();
    telnyxMethod79 = TelnyxResource_default.method;
    RoomsClientTokens = TelnyxResource_default.extend({
      path: "rooms_client_tokens",
      includeBasic: ["create"],
      refreshRoomClientToken: telnyxMethod79({
        method: "POST",
        path: "/rooms/{room/id}/actions/refresh/client_token",
        urlParams: ["room_id"]
      }),
      createRoomClientToken: telnyxMethod79({
        method: "POST",
        path: "/rooms/{room/id}/actions/generate/join/client_token",
        urlParams: ["room_id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/RoomSessions.js
var telnyxMethod80, RoomSessions;
var init_RoomSessions = __esm({
  "node_modules/telnyx/dist/resources/RoomSessions.js"() {
    init_TelnyxResource();
    telnyxMethod80 = TelnyxResource_default.method;
    RoomSessions = TelnyxResource_default.extend({
      path: "/room_sessions",
      list: telnyxMethod80({
        method: "GET"
      }),
      retrieveRoomSessionId: telnyxMethod80({
        method: "GET",
        path: "/{room_session_id}",
        urlParams: ["room_session_id"]
      }),
      muteSession: telnyxMethod80({
        method: "POST",
        path: "/{room_session_id}/actions/mute",
        urlParams: ["room_session_id"]
      }),
      unmuteSession: telnyxMethod80({
        method: "POST",
        path: "/{room_session_id}/actions/unmute",
        urlParams: ["room_session_id"]
      }),
      kickParticipant: telnyxMethod80({
        method: "POST",
        path: "/{room_session_id}/actions/kick",
        urlParams: ["room_session_id"]
      }),
      endSession: telnyxMethod80({
        method: "POST",
        path: "/{room_session_id}/actions/end",
        urlParams: ["room_session_id"]
      }),
      retrieveParticipants: telnyxMethod80({
        method: "GET",
        path: "/{room_session_id}/participants",
        urlParams: ["room_session_id"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/SharedCampaigns.js
var telnyxMethod81, SharedCampaigns;
var init_SharedCampaigns = __esm({
  "node_modules/telnyx/dist/resources/SharedCampaigns.js"() {
    init_TelnyxResource();
    telnyxMethod81 = TelnyxResource_default.method;
    SharedCampaigns = TelnyxResource_default.extend({
      path: "shared_campaigns",
      includeBasic: ["list", "retrieve"],
      GetPartnerCampaignsSharedByUser: telnyxMethod81({
        method: "GET",
        path: "/partnerCampaign/sharedByMe"
      }),
      GetCampaignSharingStatus: telnyxMethod81({
        method: "GET",
        path: "/partnerCampaign/{campaignId}/sharing",
        urlParams: ["campaignId"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/ShortCodes.js
function transformResponseData23(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "shortCodes", {
    update: telnyxMethod82({
      method: "PATCH",
      path: "/{shortCodeId}",
      urlParams: ["shortCodeId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod82, ShortCodes;
var init_ShortCodes = __esm({
  "node_modules/telnyx/dist/resources/ShortCodes.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod82 = TelnyxResource_default.method;
    ShortCodes = TelnyxResource_default.extend({
      path: "short_codes",
      list: telnyxMethod82({
        method: "GET",
        methodType: "list"
      }),
      retrieve: telnyxMethod82({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData23
      })
    });
  }
});

// node_modules/telnyx/dist/resources/SimCardActions.js
var telnyxMethod83, SimCardActions;
var init_SimCardActions = __esm({
  "node_modules/telnyx/dist/resources/SimCardActions.js"() {
    init_TelnyxResource();
    telnyxMethod83 = TelnyxResource_default.method;
    SimCardActions = TelnyxResource_default.extend({
      path: "sim_card_actions",
      includeBasic: ["list", "retrieve"],
      ListSimCardActions: telnyxMethod83({
        method: "GET",
        path: "/sim/card/actions"
      }),
      ListBulkSimCardActions: telnyxMethod83({
        method: "GET",
        path: "/bulk/sim/card/actions"
      }),
      GetBulkSimCardAction: telnyxMethod83({
        method: "GET",
        path: "/bulk/sim/card/actions/{id}"
      }),
      GetSimCardAction: telnyxMethod83({
        method: "GET",
        path: "/sim/card/actions/{id}"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/SimCardGroupActions.js
var telnyxMethod84, SimCardGroupActions;
var init_SimCardGroupActions = __esm({
  "node_modules/telnyx/dist/resources/SimCardGroupActions.js"() {
    init_TelnyxResource();
    telnyxMethod84 = TelnyxResource_default.method;
    SimCardGroupActions = TelnyxResource_default.extend({
      path: "sim_card_group_actions",
      includeBasic: ["list", "retrieve"],
      GetSimCardGroupAction: telnyxMethod84({
        method: "GET",
        path: "/sim_card_group/actions/{id}"
      }),
      GetSimCardGroupActions: telnyxMethod84({
        method: "GET",
        path: "/sim_card_group/actions"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/SimCardGroups.js
function transformResponseData24(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "simCardGroups", {
    del: telnyxMethod85({
      method: "DELETE",
      path: "/{simCardGroupId}",
      urlParams: ["simCardGroupId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    update: telnyxMethod85({
      method: "PATCH",
      path: "/{simCardGroupId}",
      urlParams: ["simCardGroupId"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod85, SimCardGroups;
var init_SimCardGroups = __esm({
  "node_modules/telnyx/dist/resources/SimCardGroups.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod85 = TelnyxResource_default.method;
    SimCardGroups = TelnyxResource_default.extend({
      path: "sim_card_groups",
      list: telnyxMethod85({
        method: "GET",
        methodType: "list",
        transformResponseData: transformResponseData24
      }),
      create: telnyxMethod85({
        method: "POST",
        transformResponseData: transformResponseData24
      }),
      retrieve: telnyxMethod85({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData24
      })
    });
  }
});

// node_modules/telnyx/dist/resources/SimCardOrders.js
var SimCardOrders;
var init_SimCardOrders = __esm({
  "node_modules/telnyx/dist/resources/SimCardOrders.js"() {
    init_TelnyxResource();
    SimCardOrders = TelnyxResource_default.extend({
      path: "sim_card_orders",
      includeBasic: ["list", "retrieve"]
    });
  }
});

// node_modules/telnyx/dist/resources/SimCards.js
function transformResponseData25(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "simCards", {
    del: telnyxMethod86({
      method: "DELETE",
      path: "/{sim_card_id}",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    save: telnyxMethod86({
      method: "PATCH",
      path: "/{sim_card_id}",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    activate: telnyxMethod86({
      method: "POST",
      path: "/{sim_card_id}/actions/enable",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    deactivate: telnyxMethod86({
      method: "POST",
      path: "/{sim_card_id}/actions/disable",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    enable: telnyxMethod86({
      method: "POST",
      path: "/{sim_card_id}/actions/enable",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    disable: telnyxMethod86({
      method: "POST",
      path: "/{sim_card_id}/actions/disable",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    setStandby: telnyxMethod86({
      method: "POST",
      path: "/{sim_card_id}/actions/set_standby",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    retrieveNetworkPreferences: telnyxMethod86({
      method: "GET",
      path: "/{sim_card_id}/network_preferences",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    setNetworkPreferences: telnyxMethod86({
      method: "PUT",
      path: "/{sim_card_id}/network_preferences",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    deleteNetworkPreferences: telnyxMethod86({
      method: "DELETE",
      path: "/{sim_card_id}/network_preferences",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    }),
    retrievePublicIP: telnyxMethod86({
      method: "GET",
      path: "/{sim_card_id}/public_ip",
      urlParams: ["sim_card_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod86, SimCards;
var init_SimCards = __esm({
  "node_modules/telnyx/dist/resources/SimCards.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod86 = TelnyxResource_default.method;
    SimCards = TelnyxResource_default.extend({
      path: "sim_cards",
      includeBasic: ["update"],
      list: telnyxMethod86({
        method: "GET",
        methodType: "list",
        transformResponseData: transformResponseData25
      }),
      create: telnyxMethod86({
        method: "POST",
        transformResponseData: transformResponseData25
      }),
      retrieve: telnyxMethod86({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData25
      })
    });
  }
});

// node_modules/telnyx/dist/resources/StorageBuckets.js
var telnyxMethod87, StorageBuckets;
var init_StorageBuckets = __esm({
  "node_modules/telnyx/dist/resources/StorageBuckets.js"() {
    init_TelnyxResource();
    telnyxMethod87 = TelnyxResource_default.method;
    StorageBuckets = TelnyxResource_default.extend({
      path: "storage/buckets",
      usage: telnyxMethod87({
        method: "GET",
        path: "/{bucketName}/usage/storage",
        urlParams: ["bucketName"]
      }),
      apiUsage: telnyxMethod87({
        method: "GET",
        path: "/{bucketName}/usage/api",
        urlParams: ["bucketName"]
      }),
      sslCertificate: telnyxMethod87({
        method: "GET",
        path: "/{bucketName}/ssl_certificate",
        urlParams: ["bucketName"]
      }),
      addSslCertificate: telnyxMethod87({
        method: "PUT",
        path: "/{bucketName}/ssl_certificate",
        urlParams: ["bucketName"]
      }),
      delSslCertificate: telnyxMethod87({
        method: "DELETE",
        path: "/{bucketName}/ssl_certificate",
        urlParams: ["bucketName"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/TelephonyCredentials.js
function transformResponseData26(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "telephonyCredentials", {
    del: telnyxMethod88({
      method: "DELETE",
      path: "/{telephony_credential_id}",
      urlParams: ["telephony_credential_id"],
      paramsValues: [response.data.id],
      paramsNames: ["id"]
    })
  });
}
var telnyxMethod88, TelephonyCredentials;
var init_TelephonyCredentials = __esm({
  "node_modules/telnyx/dist/resources/TelephonyCredentials.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod88 = TelnyxResource_default.method;
    TelephonyCredentials = TelnyxResource_default.extend({
      path: "telephony_credentials",
      includeBasic: ["del", "list", "update"],
      create: telnyxMethod88({
        method: "POST",
        transformResponseData: transformResponseData26
      }),
      retrieve: telnyxMethod88({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData26
      }),
      createToken: telnyxMethod88({
        method: "POST",
        path: "/{id}/token",
        urlParams: ["id"]
      }),
      listTags: telnyxMethod88({
        method: "GET",
        path: "/tags"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Texml.js
var telnyxMethod89, Texml;
var init_Texml = __esm({
  "node_modules/telnyx/dist/resources/Texml.js"() {
    init_TelnyxResource();
    telnyxMethod89 = TelnyxResource_default.method;
    Texml = TelnyxResource_default.extend({
      path: "texml",
      createSecret: telnyxMethod89({
        method: "POST",
        path: "/secrets",
        methodType: "create"
      }),
      createCall: telnyxMethod89({
        method: "POST",
        path: "/calls/{application_id}",
        urlParams: ["application_id"],
        paramsNames: ["application_id"],
        methodType: "create"
      }),
      updateCall: telnyxMethod89({
        method: "POST",
        path: "/calls/{call_sid}/update",
        urlParams: ["call_sid"],
        paramsNames: ["call_sid"]
      })
    });
  }
});

// node_modules/telnyx/dist/resources/TexmlApplications.js
function transformResponseData27(response, telnyx) {
  return addResourceToResponseData(response, telnyx, "texmlApplications", {
    del: telnyxMethod90({
      method: "DELETE",
      path: "/{texmlApplicationId}",
      urlParams: ["texmlApplicationId"],
      paramsValues: [response.data.id],
      paramsNames: ["texmlApplicationId"]
    }),
    update: telnyxMethod90({
      method: "PATCH",
      path: "/{texmlApplicationId}",
      urlParams: ["texmlApplicationId"],
      paramsValues: [response.data.id],
      paramsNames: ["texmlApplicationId"]
    })
  });
}
var telnyxMethod90, TexmlApplications;
var init_TexmlApplications = __esm({
  "node_modules/telnyx/dist/resources/TexmlApplications.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod90 = TelnyxResource_default.method;
    TexmlApplications = TelnyxResource_default.extend({
      path: "texml_applications",
      includeBasic: ["list", "update", "del"],
      create: telnyxMethod90({
        method: "POST",
        transformResponseData: transformResponseData27
      }),
      retrieve: telnyxMethod90({
        method: "GET",
        path: "/{id}",
        urlParams: ["id"],
        transformResponseData: transformResponseData27
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Verifications.js
var telnyxMethod91, transformResponseData28, Verifications;
var init_Verifications = __esm({
  "node_modules/telnyx/dist/resources/Verifications.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod91 = TelnyxResource_default.method;
    transformResponseData28 = (response, telnyx) => {
      return addResourceToResponseData(response, telnyx, "verifiedNumbers", {
        verify: telnyxMethod91({
          method: "POST",
          path: "/{verification_id}/actions/verify",
          urlParams: ["verification_id"],
          paramsNames: ["verification_id"],
          paramsValues: [response.data.id]
        })
      });
    };
    Verifications = TelnyxResource_default.extend({
      path: "verifications",
      callVerify: telnyxMethod91({
        method: "POST",
        path: "/call",
        methodType: "create"
      }),
      flashcallVerify: telnyxMethod91({
        method: "POST",
        path: "/flashcall",
        methodType: "create"
      }),
      smsVerify: telnyxMethod91({
        method: "POST",
        path: "/sms",
        methodType: "create"
      }),
      retrieve: telnyxMethod91({
        method: "GET",
        path: "/{verification_id}",
        urlParams: ["verification_id"],
        transformResponseData: transformResponseData28
      }),
      verify: telnyxMethod91({
        method: "POST",
        path: "/{verification_id}/actions/verify",
        urlParams: ["verification_id"],
        paramsNames: ["verification_id"]
      }),
      listByPhoneNumber: telnyxMethod91({
        method: "GET",
        path: "/by_phone_number/{phone_number}",
        urlParams: ["phone_number"],
        paramsNames: ["phone_number"],
        methodType: "list"
      }),
      verifyByPhoneNumber: telnyxMethod91({
        method: "POST",
        path: "/by_phone_number/{phone_number}/actions/verify",
        urlParams: ["phone_number"],
        paramsNames: ["phone_number"],
        methodType: "create"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/VerifiedNumbers.js
var telnyxMethod92, transformResponseData29, VerifiedNumbers;
var init_VerifiedNumbers = __esm({
  "node_modules/telnyx/dist/resources/VerifiedNumbers.js"() {
    init_TelnyxResource();
    init_utils();
    telnyxMethod92 = TelnyxResource_default.method;
    transformResponseData29 = (response, telnyx) => {
      return addResourceToResponseData(response, telnyx, "verifiedNumbers", {
        verify: telnyxMethod92({
          method: "POST",
          path: "/{phone_number}/actions/verify",
          urlParams: ["phone_number"],
          paramsNames: ["phone_number"],
          paramsValues: [response.data.id]
        })
      });
    };
    VerifiedNumbers = TelnyxResource_default.extend({
      path: "verified_numbers",
      includeBasic: ["list", "del"],
      retrieve: telnyxMethod92({
        method: "GET",
        path: "/{phone_number}",
        urlParams: ["phone_number"],
        transformResponseData: transformResponseData29
      }),
      create: telnyxMethod92({
        method: "POST",
        transformResponseData: transformResponseData29
      }),
      request: telnyxMethod92({
        method: "POST",
        transformResponseData: transformResponseData29
      }),
      verify: telnyxMethod92({
        method: "POST",
        path: "/{phone_number}/actions/verify",
        urlParams: ["phone_number"],
        paramsNames: ["phone_number"],
        methodType: "create"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/VerifyProfiles.js
var telnyxMethod93, VerifyProfiles;
var init_VerifyProfiles = __esm({
  "node_modules/telnyx/dist/resources/VerifyProfiles.js"() {
    init_TelnyxResource();
    telnyxMethod93 = TelnyxResource_default.method;
    VerifyProfiles = TelnyxResource_default.extend({
      path: "verify_profiles",
      includeBasic: ["list", "create", "retrieve", "update", "del"],
      listTemplates: telnyxMethod93({
        method: "GET",
        path: "/templates",
        methodType: "list"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/VirtualCrossConnects.js
var telnyxMethod94, VirtualCrossConnects;
var init_VirtualCrossConnects = __esm({
  "node_modules/telnyx/dist/resources/VirtualCrossConnects.js"() {
    init_TelnyxResource();
    telnyxMethod94 = TelnyxResource_default.method;
    VirtualCrossConnects = TelnyxResource_default.extend({
      path: "virtual_cross_connects",
      includeBasic: ["list", "retrieve", "delete", "create"],
      ListVirtualCrossConnectRegions: telnyxMethod94({
        method: "GET",
        path: "/virtual_cross_connect/regions"
      }),
      DeleteVirtualCrossConnect: telnyxMethod94({
        method: "DELETE",
        path: "/virtual_cross_connects/{id}"
      }),
      GetVirtualCrossConnectRegion: telnyxMethod94({
        method: "GET",
        path: "/virtual_cross_connect/regions/{id}"
      }),
      ListVirtualCrossConnects: telnyxMethod94({
        method: "GET",
        path: "/virtual_cross_connects"
      }),
      ProvisionVirtualCrossConnect: telnyxMethod94({
        method: "POST",
        path: "/virtual_cross_connects/{id}/actions/provision"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/WdrDetailReports.js
var telnyxMethod95, WdrDetailReports;
var init_WdrDetailReports = __esm({
  "node_modules/telnyx/dist/resources/WdrDetailReports.js"() {
    init_TelnyxResource();
    telnyxMethod95 = TelnyxResource_default.method;
    WdrDetailReports = TelnyxResource_default.extend({
      path: "wdr_detail_reports",
      includeBasic: ["list", "retrieve"],
      GetPaginatedWdrs: telnyxMethod95({
        method: "GET",
        path: "/reports/wdrs"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/Webhooks.js
var Webhooks;
var init_Webhooks = __esm({
  "node_modules/telnyx/dist/resources/Webhooks.js"() {
    init_TelnyxResource();
    Webhooks = TelnyxResource_default.extend({
      path: "webhook_deliveries",
      includeBasic: ["list", "retrieve"]
    });
  }
});

// node_modules/telnyx/dist/resources/WireguardInterfaces.js
var telnyxMethod96, WireguardInterfaces;
var init_WireguardInterfaces = __esm({
  "node_modules/telnyx/dist/resources/WireguardInterfaces.js"() {
    init_TelnyxResource();
    telnyxMethod96 = TelnyxResource_default.method;
    WireguardInterfaces = TelnyxResource_default.extend({
      path: "wireguard_interfaces",
      includeBasic: ["list", "retrieve", "delete"],
      GetWireguardPeerAllowedIp: telnyxMethod96({
        method: "GET",
        path: "/wireguard_peers/{id}/allowed_ips/{child_id}"
      }),
      DeleteWireguardInterface: telnyxMethod96({
        method: "DELETE",
        path: "/wireguard_interfaces/{id}"
      }),
      DeleteWireguardPeer: telnyxMethod96({
        method: "DELETE",
        path: "/wireguard_peers/{id}"
      }),
      ListWireguardPeers: telnyxMethod96({
        method: "GET",
        path: "/wireguard_peers"
      }),
      GetWireguardPeerConfig: telnyxMethod96({
        method: "GET",
        path: "/wireguard_peers/{id}/config"
      }),
      ListWireguardInterfaces: telnyxMethod96({
        method: "GET",
        path: "/wireguard_interfaces"
      }),
      ListWireguardPeerAllowedIps: telnyxMethod96({
        method: "GET",
        path: "/wireguard_peers/{id}/allowed_ips"
      })
    });
  }
});

// node_modules/telnyx/dist/resources/WirelessDetailRecordReports.js
var WirelessDetailRecordReports;
var init_WirelessDetailRecordReports = __esm({
  "node_modules/telnyx/dist/resources/WirelessDetailRecordReports.js"() {
    init_TelnyxResource();
    WirelessDetailRecordReports = TelnyxResource_default.extend({
      path: "wireless/detail_records_reports",
      includeBasic: ["list", "retrieve", "create", "del"]
    });
  }
});

// node_modules/tweetnacl/nacl-fast.js
var require_nacl_fast = __commonJS({
  "node_modules/tweetnacl/nacl-fast.js"(exports2, module2) {
    (function(nacl2) {
      "use strict";
      var gf = function(init) {
        var i, r = new Float64Array(16);
        if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
        return r;
      };
      var randombytes = function() {
        throw new Error("no PRNG");
      };
      var _0 = new Uint8Array(16);
      var _9 = new Uint8Array(32);
      _9[0] = 9;
      var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
      function ts64(x, i, h, l) {
        x[i] = h >> 24 & 255;
        x[i + 1] = h >> 16 & 255;
        x[i + 2] = h >> 8 & 255;
        x[i + 3] = h & 255;
        x[i + 4] = l >> 24 & 255;
        x[i + 5] = l >> 16 & 255;
        x[i + 6] = l >> 8 & 255;
        x[i + 7] = l & 255;
      }
      function vn(x, xi, y, yi, n) {
        var i, d = 0;
        for (i = 0; i < n; i++) d |= x[xi + i] ^ y[yi + i];
        return (1 & d - 1 >>> 8) - 1;
      }
      function crypto_verify_16(x, xi, y, yi) {
        return vn(x, xi, y, yi, 16);
      }
      function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
      }
      function core_salsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i = 0; i < 20; i += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x2 = x2 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x1 >>> 0 & 255;
        o[5] = x1 >>> 8 & 255;
        o[6] = x1 >>> 16 & 255;
        o[7] = x1 >>> 24 & 255;
        o[8] = x2 >>> 0 & 255;
        o[9] = x2 >>> 8 & 255;
        o[10] = x2 >>> 16 & 255;
        o[11] = x2 >>> 24 & 255;
        o[12] = x3 >>> 0 & 255;
        o[13] = x3 >>> 8 & 255;
        o[14] = x3 >>> 16 & 255;
        o[15] = x3 >>> 24 & 255;
        o[16] = x4 >>> 0 & 255;
        o[17] = x4 >>> 8 & 255;
        o[18] = x4 >>> 16 & 255;
        o[19] = x4 >>> 24 & 255;
        o[20] = x5 >>> 0 & 255;
        o[21] = x5 >>> 8 & 255;
        o[22] = x5 >>> 16 & 255;
        o[23] = x5 >>> 24 & 255;
        o[24] = x6 >>> 0 & 255;
        o[25] = x6 >>> 8 & 255;
        o[26] = x6 >>> 16 & 255;
        o[27] = x6 >>> 24 & 255;
        o[28] = x7 >>> 0 & 255;
        o[29] = x7 >>> 8 & 255;
        o[30] = x7 >>> 16 & 255;
        o[31] = x7 >>> 24 & 255;
        o[32] = x8 >>> 0 & 255;
        o[33] = x8 >>> 8 & 255;
        o[34] = x8 >>> 16 & 255;
        o[35] = x8 >>> 24 & 255;
        o[36] = x9 >>> 0 & 255;
        o[37] = x9 >>> 8 & 255;
        o[38] = x9 >>> 16 & 255;
        o[39] = x9 >>> 24 & 255;
        o[40] = x10 >>> 0 & 255;
        o[41] = x10 >>> 8 & 255;
        o[42] = x10 >>> 16 & 255;
        o[43] = x10 >>> 24 & 255;
        o[44] = x11 >>> 0 & 255;
        o[45] = x11 >>> 8 & 255;
        o[46] = x11 >>> 16 & 255;
        o[47] = x11 >>> 24 & 255;
        o[48] = x12 >>> 0 & 255;
        o[49] = x12 >>> 8 & 255;
        o[50] = x12 >>> 16 & 255;
        o[51] = x12 >>> 24 & 255;
        o[52] = x13 >>> 0 & 255;
        o[53] = x13 >>> 8 & 255;
        o[54] = x13 >>> 16 & 255;
        o[55] = x13 >>> 24 & 255;
        o[56] = x14 >>> 0 & 255;
        o[57] = x14 >>> 8 & 255;
        o[58] = x14 >>> 16 & 255;
        o[59] = x14 >>> 24 & 255;
        o[60] = x15 >>> 0 & 255;
        o[61] = x15 >>> 8 & 255;
        o[62] = x15 >>> 16 & 255;
        o[63] = x15 >>> 24 & 255;
      }
      function core_hsalsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i = 0; i < 20; i += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x5 >>> 0 & 255;
        o[5] = x5 >>> 8 & 255;
        o[6] = x5 >>> 16 & 255;
        o[7] = x5 >>> 24 & 255;
        o[8] = x10 >>> 0 & 255;
        o[9] = x10 >>> 8 & 255;
        o[10] = x10 >>> 16 & 255;
        o[11] = x10 >>> 24 & 255;
        o[12] = x15 >>> 0 & 255;
        o[13] = x15 >>> 8 & 255;
        o[14] = x15 >>> 16 & 255;
        o[15] = x15 >>> 24 & 255;
        o[16] = x6 >>> 0 & 255;
        o[17] = x6 >>> 8 & 255;
        o[18] = x6 >>> 16 & 255;
        o[19] = x6 >>> 24 & 255;
        o[20] = x7 >>> 0 & 255;
        o[21] = x7 >>> 8 & 255;
        o[22] = x7 >>> 16 & 255;
        o[23] = x7 >>> 24 & 255;
        o[24] = x8 >>> 0 & 255;
        o[25] = x8 >>> 8 & 255;
        o[26] = x8 >>> 16 & 255;
        o[27] = x8 >>> 24 & 255;
        o[28] = x9 >>> 0 & 255;
        o[29] = x9 >>> 8 & 255;
        o[30] = x9 >>> 16 & 255;
        o[31] = x9 >>> 24 & 255;
      }
      function crypto_core_salsa20(out, inp, k, c) {
        core_salsa20(out, inp, k, c);
      }
      function crypto_core_hsalsa20(out, inp, k, c) {
        core_hsalsa20(out, inp, k, c);
      }
      var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
      function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for (i = 0; i < 16; i++) z[i] = 0;
        for (i = 0; i < 8; i++) z[i] = n[i];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < 64; i++) c[cpos + i] = m[mpos + i] ^ x[i];
          u = 1;
          for (i = 8; i < 16; i++) {
            u = u + (z[i] & 255) | 0;
            z[i] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
          mpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < b; i++) c[cpos + i] = m[mpos + i] ^ x[i];
        }
        return 0;
      }
      function crypto_stream_salsa20(c, cpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for (i = 0; i < 16; i++) z[i] = 0;
        for (i = 0; i < 8; i++) z[i] = n[i];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < 64; i++) c[cpos + i] = x[i];
          u = 1;
          for (i = 8; i < 16; i++) {
            u = u + (z[i] & 255) | 0;
            z[i] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < b; i++) c[cpos + i] = x[i];
        }
        return 0;
      }
      function crypto_stream(c, cpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
        return crypto_stream_salsa20(c, cpos, d, sn, s);
      }
      function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i = 0; i < 8; i++) sn[i] = n[i + 16];
        return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
      }
      var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t2, t3, t4, t5, t6, t7;
        t0 = key[0] & 255 | (key[1] & 255) << 8;
        this.r[0] = t0 & 8191;
        t1 = key[2] & 255 | (key[3] & 255) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        t2 = key[4] & 255 | (key[5] & 255) << 8;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        t3 = key[6] & 255 | (key[7] & 255) << 8;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        t4 = key[8] & 255 | (key[9] & 255) << 8;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this.r[5] = t4 >>> 1 & 8190;
        t5 = key[10] & 255 | (key[11] & 255) << 8;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        t6 = key[12] & 255 | (key[13] & 255) << 8;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        t7 = key[14] & 255 | (key[15] & 255) << 8;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this.r[9] = t7 >>> 5 & 127;
        this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
        this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
        this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
        this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
        this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
        this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
        this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
        this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
      };
      poly1305.prototype.blocks = function(m, mpos, bytes) {
        var hibit = this.fin ? 0 : 1 << 11;
        var t0, t1, t2, t3, t4, t5, t6, t7, c;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
        while (bytes >= 16) {
          t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
          h0 += t0 & 8191;
          t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
          h2 += (t1 >>> 10 | t2 << 6) & 8191;
          t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
          h3 += (t2 >>> 7 | t3 << 9) & 8191;
          t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          c = 0;
          d0 = c;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h2 * (5 * r8);
          d0 += h3 * (5 * r7);
          d0 += h4 * (5 * r6);
          c = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r5);
          d0 += h6 * (5 * r4);
          d0 += h7 * (5 * r3);
          d0 += h8 * (5 * r2);
          d0 += h9 * (5 * r1);
          c += d0 >>> 13;
          d0 &= 8191;
          d1 = c;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h2 * (5 * r9);
          d1 += h3 * (5 * r8);
          d1 += h4 * (5 * r7);
          c = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c += d1 >>> 13;
          d1 &= 8191;
          d2 = c;
          d2 += h0 * r2;
          d2 += h1 * r1;
          d2 += h2 * r0;
          d2 += h3 * (5 * r9);
          d2 += h4 * (5 * r8);
          c = d2 >>> 13;
          d2 &= 8191;
          d2 += h5 * (5 * r7);
          d2 += h6 * (5 * r6);
          d2 += h7 * (5 * r5);
          d2 += h8 * (5 * r4);
          d2 += h9 * (5 * r3);
          c += d2 >>> 13;
          d2 &= 8191;
          d3 = c;
          d3 += h0 * r3;
          d3 += h1 * r2;
          d3 += h2 * r1;
          d3 += h3 * r0;
          d3 += h4 * (5 * r9);
          c = d3 >>> 13;
          d3 &= 8191;
          d3 += h5 * (5 * r8);
          d3 += h6 * (5 * r7);
          d3 += h7 * (5 * r6);
          d3 += h8 * (5 * r5);
          d3 += h9 * (5 * r4);
          c += d3 >>> 13;
          d3 &= 8191;
          d4 = c;
          d4 += h0 * r4;
          d4 += h1 * r3;
          d4 += h2 * r2;
          d4 += h3 * r1;
          d4 += h4 * r0;
          c = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c += d4 >>> 13;
          d4 &= 8191;
          d5 = c;
          d5 += h0 * r5;
          d5 += h1 * r4;
          d5 += h2 * r3;
          d5 += h3 * r2;
          d5 += h4 * r1;
          c = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c += d5 >>> 13;
          d5 &= 8191;
          d6 = c;
          d6 += h0 * r6;
          d6 += h1 * r5;
          d6 += h2 * r4;
          d6 += h3 * r3;
          d6 += h4 * r2;
          c = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c += d6 >>> 13;
          d6 &= 8191;
          d7 = c;
          d7 += h0 * r7;
          d7 += h1 * r6;
          d7 += h2 * r5;
          d7 += h3 * r4;
          d7 += h4 * r3;
          c = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c += d7 >>> 13;
          d7 &= 8191;
          d8 = c;
          d8 += h0 * r8;
          d8 += h1 * r7;
          d8 += h2 * r6;
          d8 += h3 * r5;
          d8 += h4 * r4;
          c = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c += d8 >>> 13;
          d8 &= 8191;
          d9 = c;
          d9 += h0 * r9;
          d9 += h1 * r8;
          d9 += h2 * r7;
          d9 += h3 * r6;
          d9 += h4 * r5;
          c = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c += d9 >>> 13;
          d9 &= 8191;
          c = (c << 2) + c | 0;
          c = c + d0 | 0;
          d0 = c & 8191;
          c = c >>> 13;
          d1 += c;
          h0 = d0;
          h1 = d1;
          h2 = d2;
          h3 = d3;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
      };
      poly1305.prototype.finish = function(mac, macpos) {
        var g = new Uint16Array(10);
        var c, mask, f, i;
        if (this.leftover) {
          i = this.leftover;
          this.buffer[i++] = 1;
          for (; i < 16; i++) this.buffer[i] = 0;
          this.fin = 1;
          this.blocks(this.buffer, 0, 16);
        }
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        for (i = 2; i < 10; i++) {
          this.h[i] += c;
          c = this.h[i] >>> 13;
          this.h[i] &= 8191;
        }
        this.h[0] += c * 5;
        c = this.h[0] >>> 13;
        this.h[0] &= 8191;
        this.h[1] += c;
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        this.h[2] += c;
        g[0] = this.h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 8191;
        for (i = 1; i < 10; i++) {
          g[i] = this.h[i] + c;
          c = g[i] >>> 13;
          g[i] &= 8191;
        }
        g[9] -= 1 << 13;
        mask = (c ^ 1) - 1;
        for (i = 0; i < 10; i++) g[i] &= mask;
        mask = ~mask;
        for (i = 0; i < 10; i++) this.h[i] = this.h[i] & mask | g[i];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
        f = this.h[0] + this.pad[0];
        this.h[0] = f & 65535;
        for (i = 1; i < 8; i++) {
          f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
          this.h[i] = f & 65535;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 255;
        mac[macpos + 1] = this.h[0] >>> 8 & 255;
        mac[macpos + 2] = this.h[1] >>> 0 & 255;
        mac[macpos + 3] = this.h[1] >>> 8 & 255;
        mac[macpos + 4] = this.h[2] >>> 0 & 255;
        mac[macpos + 5] = this.h[2] >>> 8 & 255;
        mac[macpos + 6] = this.h[3] >>> 0 & 255;
        mac[macpos + 7] = this.h[3] >>> 8 & 255;
        mac[macpos + 8] = this.h[4] >>> 0 & 255;
        mac[macpos + 9] = this.h[4] >>> 8 & 255;
        mac[macpos + 10] = this.h[5] >>> 0 & 255;
        mac[macpos + 11] = this.h[5] >>> 8 & 255;
        mac[macpos + 12] = this.h[6] >>> 0 & 255;
        mac[macpos + 13] = this.h[6] >>> 8 & 255;
        mac[macpos + 14] = this.h[7] >>> 0 & 255;
        mac[macpos + 15] = this.h[7] >>> 8 & 255;
      };
      poly1305.prototype.update = function(m, mpos, bytes) {
        var i, want;
        if (this.leftover) {
          want = 16 - this.leftover;
          if (want > bytes)
            want = bytes;
          for (i = 0; i < want; i++)
            this.buffer[this.leftover + i] = m[mpos + i];
          bytes -= want;
          mpos += want;
          this.leftover += want;
          if (this.leftover < 16)
            return;
          this.blocks(this.buffer, 0, 16);
          this.leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this.blocks(m, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (i = 0; i < bytes; i++)
            this.buffer[this.leftover + i] = m[mpos + i];
          this.leftover += bytes;
        }
      };
      function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
        var s = new poly1305(k);
        s.update(m, mpos, n);
        s.finish(out, outpos);
        return 0;
      }
      function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
        var x = new Uint8Array(16);
        crypto_onetimeauth(x, 0, m, mpos, n, k);
        return crypto_verify_16(h, hpos, x, 0);
      }
      function crypto_secretbox(c, m, d, n, k) {
        var i;
        if (d < 32) return -1;
        crypto_stream_xor(c, 0, m, 0, d, n, k);
        crypto_onetimeauth(c, 16, c, 32, d - 32, c);
        for (i = 0; i < 16; i++) c[i] = 0;
        return 0;
      }
      function crypto_secretbox_open(m, c, d, n, k) {
        var i;
        var x = new Uint8Array(32);
        if (d < 32) return -1;
        crypto_stream(x, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
        crypto_stream_xor(m, 0, c, 0, d, n, k);
        for (i = 0; i < 32; i++) m[i] = 0;
        return 0;
      }
      function set25519(r, a) {
        var i;
        for (i = 0; i < 16; i++) r[i] = a[i] | 0;
      }
      function car25519(o) {
        var i, v, c = 1;
        for (i = 0; i < 16; i++) {
          v = o[i] + c + 65535;
          c = Math.floor(v / 65536);
          o[i] = v - c * 65536;
        }
        o[0] += c - 1 + 37 * (c - 1);
      }
      function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for (var i = 0; i < 16; i++) {
          t = c & (p[i] ^ q[i]);
          p[i] ^= t;
          q[i] ^= t;
        }
      }
      function pack25519(o, n) {
        var i, j, b;
        var m = gf(), t = gf();
        for (i = 0; i < 16; i++) t[i] = n[i];
        car25519(t);
        car25519(t);
        car25519(t);
        for (j = 0; j < 2; j++) {
          m[0] = t[0] - 65517;
          for (i = 1; i < 15; i++) {
            m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
            m[i - 1] &= 65535;
          }
          m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
          b = m[15] >> 16 & 1;
          m[14] &= 65535;
          sel25519(t, m, 1 - b);
        }
        for (i = 0; i < 16; i++) {
          o[2 * i] = t[i] & 255;
          o[2 * i + 1] = t[i] >> 8;
        }
      }
      function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
      }
      function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
      }
      function unpack25519(o, n) {
        var i;
        for (i = 0; i < 16; i++) o[i] = n[2 * i] + (n[2 * i + 1] << 8);
        o[15] &= 32767;
      }
      function A(o, a, b) {
        for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
      }
      function Z(o, a, b) {
        for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
      }
      function M(o, a, b) {
        var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o[0] = t0;
        o[1] = t1;
        o[2] = t2;
        o[3] = t3;
        o[4] = t4;
        o[5] = t5;
        o[6] = t6;
        o[7] = t7;
        o[8] = t8;
        o[9] = t9;
        o[10] = t10;
        o[11] = t11;
        o[12] = t12;
        o[13] = t13;
        o[14] = t14;
        o[15] = t15;
      }
      function S(o, a) {
        M(o, a, a);
      }
      function inv25519(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++) c[a] = i[a];
        for (a = 253; a >= 0; a--) {
          S(c, c);
          if (a !== 2 && a !== 4) M(c, c, i);
        }
        for (a = 0; a < 16; a++) o[a] = c[a];
      }
      function pow2523(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++) c[a] = i[a];
        for (a = 250; a >= 0; a--) {
          S(c, c);
          if (a !== 1) M(c, c, i);
        }
        for (a = 0; a < 16; a++) o[a] = c[a];
      }
      function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80), r, i;
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
        for (i = 0; i < 31; i++) z[i] = n[i];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x, p);
        for (i = 0; i < 16; i++) {
          b[i] = x[i];
          d[i] = a[i] = c[i] = 0;
        }
        a[0] = d[0] = 1;
        for (i = 254; i >= 0; --i) {
          r = z[i >>> 3] >>> (i & 7) & 1;
          sel25519(a, b, r);
          sel25519(c, d, r);
          A(e, a, c);
          Z(a, a, c);
          A(c, b, d);
          Z(b, b, d);
          S(d, e);
          S(f, a);
          M(a, c, a);
          M(c, b, e);
          A(e, a, c);
          Z(a, a, c);
          S(b, a);
          Z(c, d, f);
          M(a, c, _121665);
          A(a, a, d);
          M(c, c, a);
          M(a, d, f);
          M(d, b, x);
          S(b, e);
          sel25519(a, b, r);
          sel25519(c, d, r);
        }
        for (i = 0; i < 16; i++) {
          x[i + 16] = a[i];
          x[i + 32] = c[i];
          x[i + 48] = b[i];
          x[i + 64] = d[i];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
      }
      function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
      }
      function crypto_box_keypair(y, x) {
        randombytes(x, 32);
        return crypto_scalarmult_base(y, x);
      }
      function crypto_box_beforenm(k, y, x) {
        var s = new Uint8Array(32);
        crypto_scalarmult(s, x, y);
        return crypto_core_hsalsa20(k, _0, s, sigma);
      }
      var crypto_box_afternm = crypto_secretbox;
      var crypto_box_open_afternm = crypto_secretbox_open;
      function crypto_box(c, m, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_afternm(c, m, d, n, k);
      }
      function crypto_box_open(m, c, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_open_afternm(m, c, d, n, k);
      }
      var K = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ];
      function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while (n >= 128) {
          for (i = 0; i < 16; i++) {
            j = 8 * i + pos;
            wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
            wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
          }
          for (i = 0; i < 80; i++) {
            bh0 = ah0;
            bh1 = ah1;
            bh2 = ah2;
            bh3 = ah3;
            bh4 = ah4;
            bh5 = ah5;
            bh6 = ah6;
            bh7 = ah7;
            bl0 = al0;
            bl1 = al1;
            bl2 = al2;
            bl3 = al3;
            bl4 = al4;
            bl5 = al5;
            bl6 = al6;
            bl7 = al7;
            h = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
            l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah4 & ah5 ^ ~ah4 & ah6;
            l = al4 & al5 ^ ~al4 & al6;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = K[i * 2];
            l = K[i * 2 + 1];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = wh[i % 16];
            l = wl[i % 16];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 65535 | d << 16;
            tl = a & 65535 | b << 16;
            h = th;
            l = tl;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
            l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
            l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = c & 65535 | d << 16;
            bl7 = a & 65535 | b << 16;
            h = bh3;
            l = bl3;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = th;
            l = tl;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = c & 65535 | d << 16;
            bl3 = a & 65535 | b << 16;
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i % 16 === 15) {
              for (j = 0; j < 16; j++) {
                h = wh[j];
                l = wl[j];
                a = l & 65535;
                b = l >>> 16;
                c = h & 65535;
                d = h >>> 16;
                h = wh[(j + 9) % 16];
                l = wl[(j + 9) % 16];
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j + 1) % 16];
                tl = wl[(j + 1) % 16];
                h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j + 14) % 16];
                tl = wl[(j + 14) % 16];
                h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                wh[j] = c & 65535 | d << 16;
                wl[j] = a & 65535 | b << 16;
              }
            }
          }
          h = ah0;
          l = al0;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[0];
          l = hl[0];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[0] = ah0 = c & 65535 | d << 16;
          hl[0] = al0 = a & 65535 | b << 16;
          h = ah1;
          l = al1;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[1];
          l = hl[1];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[1] = ah1 = c & 65535 | d << 16;
          hl[1] = al1 = a & 65535 | b << 16;
          h = ah2;
          l = al2;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[2];
          l = hl[2];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[2] = ah2 = c & 65535 | d << 16;
          hl[2] = al2 = a & 65535 | b << 16;
          h = ah3;
          l = al3;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[3];
          l = hl[3];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[3] = ah3 = c & 65535 | d << 16;
          hl[3] = al3 = a & 65535 | b << 16;
          h = ah4;
          l = al4;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[4];
          l = hl[4];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[4] = ah4 = c & 65535 | d << 16;
          hl[4] = al4 = a & 65535 | b << 16;
          h = ah5;
          l = al5;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[5];
          l = hl[5];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[5] = ah5 = c & 65535 | d << 16;
          hl[5] = al5 = a & 65535 | b << 16;
          h = ah6;
          l = al6;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[6];
          l = hl[6];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[6] = ah6 = c & 65535 | d << 16;
          hl[6] = al6 = a & 65535 | b << 16;
          h = ah7;
          l = al7;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[7];
          l = hl[7];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[7] = ah7 = c & 65535 | d << 16;
          hl[7] = al7 = a & 65535 | b << 16;
          pos += 128;
          n -= 128;
        }
        return n;
      }
      function crypto_hash(out, m, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
        hh[0] = 1779033703;
        hh[1] = 3144134277;
        hh[2] = 1013904242;
        hh[3] = 2773480762;
        hh[4] = 1359893119;
        hh[5] = 2600822924;
        hh[6] = 528734635;
        hh[7] = 1541459225;
        hl[0] = 4089235720;
        hl[1] = 2227873595;
        hl[2] = 4271175723;
        hl[3] = 1595750129;
        hl[4] = 2917565137;
        hl[5] = 725511199;
        hl[6] = 4215389547;
        hl[7] = 327033209;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for (i = 0; i < n; i++) x[i] = m[b - n + i];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, b / 536870912 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for (i = 0; i < 8; i++) ts64(out, 8 * i, hh[i], hl[i]);
        return 0;
      }
      function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p[0], p[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c, p[3], q[3]);
        M(c, c, D2);
        M(d, p[2], q[2]);
        A(d, d, d);
        Z(e, b, a);
        Z(f, d, c);
        A(g, d, c);
        A(h, b, a);
        M(p[0], e, f);
        M(p[1], h, g);
        M(p[2], g, f);
        M(p[3], e, h);
      }
      function cswap(p, q, b) {
        var i;
        for (i = 0; i < 4; i++) {
          sel25519(p[i], q[i], b);
        }
      }
      function pack(r, p) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M(tx, p[0], zi);
        M(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
      }
      function scalarmult(p, q, s) {
        var b, i;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for (i = 255; i >= 0; --i) {
          b = s[i / 8 | 0] >> (i & 7) & 1;
          cswap(p, q, b);
          add(q, p);
          add(p, p);
          cswap(p, q, b);
        }
      }
      function scalarbase(p, s) {
        var q = [gf(), gf(), gf(), gf()];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p, q, s);
      }
      function crypto_sign_keypair(pk, sk, seeded) {
        var d = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()];
        var i;
        if (!seeded) randombytes(sk, 32);
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        scalarbase(p, d);
        pack(pk, p);
        for (i = 0; i < 32; i++) sk[i + 32] = pk[i];
        return 0;
      }
      var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
      function modL(r, x) {
        var carry, i, j, k;
        for (i = 63; i >= 32; --i) {
          carry = 0;
          for (j = i - 32, k = i - 12; j < k; ++j) {
            x[j] += carry - 16 * x[i] * L[j - (i - 32)];
            carry = Math.floor((x[j] + 128) / 256);
            x[j] -= carry * 256;
          }
          x[j] += carry;
          x[i] = 0;
        }
        carry = 0;
        for (j = 0; j < 32; j++) {
          x[j] += carry - (x[31] >> 4) * L[j];
          carry = x[j] >> 8;
          x[j] &= 255;
        }
        for (j = 0; j < 32; j++) x[j] -= carry * L[j];
        for (i = 0; i < 32; i++) {
          x[i + 1] += x[i] >> 8;
          r[i] = x[i] & 255;
        }
      }
      function reduce(r) {
        var x = new Float64Array(64), i;
        for (i = 0; i < 64; i++) x[i] = r[i];
        for (i = 0; i < 64; i++) r[i] = 0;
        modL(r, x);
      }
      function crypto_sign(sm, m, n, sk) {
        var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var i, j, x = new Float64Array(64);
        var p = [gf(), gf(), gf(), gf()];
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        var smlen = n + 64;
        for (i = 0; i < n; i++) sm[64 + i] = m[i];
        for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for (i = 32; i < 64; i++) sm[i] = sk[i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for (i = 0; i < 64; i++) x[i] = 0;
        for (i = 0; i < 32; i++) x[i] = r[i];
        for (i = 0; i < 32; i++) {
          for (j = 0; j < 32; j++) {
            x[i + j] += h[i] * d[j];
          }
        }
        modL(sm.subarray(32), x);
        return smlen;
      }
      function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num)) return -1;
        if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
      }
      function crypto_sign_open(m, sm, n, pk) {
        var i;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
        if (n < 64) return -1;
        if (unpackneg(q, pk)) return -1;
        for (i = 0; i < n; i++) m[i] = sm[i];
        for (i = 0; i < 32; i++) m[i + 32] = pk[i];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p, q, h);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
          for (i = 0; i < n; i++) m[i] = 0;
          return -1;
        }
        for (i = 0; i < n; i++) m[i] = sm[i + 64];
        return n;
      }
      var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
      nacl2.lowlevel = {
        crypto_core_hsalsa20,
        crypto_stream_xor,
        crypto_stream,
        crypto_stream_salsa20_xor,
        crypto_stream_salsa20,
        crypto_onetimeauth,
        crypto_onetimeauth_verify,
        crypto_verify_16,
        crypto_verify_32,
        crypto_secretbox,
        crypto_secretbox_open,
        crypto_scalarmult,
        crypto_scalarmult_base,
        crypto_box_beforenm,
        crypto_box_afternm,
        crypto_box,
        crypto_box_open,
        crypto_box_keypair,
        crypto_hash,
        crypto_sign,
        crypto_sign_keypair,
        crypto_sign_open,
        crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES,
        crypto_hash_BYTES,
        gf,
        D,
        L,
        pack25519,
        unpack25519,
        M,
        A,
        S,
        Z,
        pow2523,
        add,
        set25519,
        modL,
        scalarmult,
        scalarbase
      };
      function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES) throw new Error("bad key size");
        if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error("bad nonce size");
      }
      function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error("bad public key size");
        if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error("bad secret key size");
      }
      function checkArrayTypes() {
        for (var i = 0; i < arguments.length; i++) {
          if (!(arguments[i] instanceof Uint8Array))
            throw new TypeError("unexpected type, use Uint8Array");
        }
      }
      function cleanup(arr) {
        for (var i = 0; i < arr.length; i++) arr[i] = 0;
      }
      nacl2.randomBytes = function(n) {
        var b = new Uint8Array(n);
        randombytes(b, n);
        return b;
      };
      nacl2.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c = new Uint8Array(m.length);
        for (var i = 0; i < msg.length; i++) m[i + crypto_secretbox_ZEROBYTES] = msg[i];
        crypto_secretbox(c, m, m.length, nonce, key);
        return c.subarray(crypto_secretbox_BOXZEROBYTES);
      };
      nacl2.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m = new Uint8Array(c.length);
        for (var i = 0; i < box.length; i++) c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
        if (c.length < 32) return null;
        if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
        return m.subarray(crypto_secretbox_ZEROBYTES);
      };
      nacl2.secretbox.keyLength = crypto_secretbox_KEYBYTES;
      nacl2.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
      nacl2.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
      nacl2.scalarMult = function(n, p) {
        checkArrayTypes(n, p);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        if (p.length !== crypto_scalarmult_BYTES) throw new Error("bad p size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n, p);
        return q;
      };
      nacl2.scalarMult.base = function(n) {
        checkArrayTypes(n);
        if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error("bad n size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n);
        return q;
      };
      nacl2.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
      nacl2.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
      nacl2.box = function(msg, nonce, publicKey, secretKey) {
        var k = nacl2.box.before(publicKey, secretKey);
        return nacl2.secretbox(msg, nonce, k);
      };
      nacl2.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k, publicKey, secretKey);
        return k;
      };
      nacl2.box.after = nacl2.secretbox;
      nacl2.box.open = function(msg, nonce, publicKey, secretKey) {
        var k = nacl2.box.before(publicKey, secretKey);
        return nacl2.secretbox.open(msg, nonce, k);
      };
      nacl2.box.open.after = nacl2.secretbox.open;
      nacl2.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl2.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl2.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
      nacl2.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
      nacl2.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
      nacl2.box.nonceLength = crypto_box_NONCEBYTES;
      nacl2.box.overheadLength = nacl2.secretbox.overheadLength;
      nacl2.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
      };
      nacl2.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0) return null;
        var m = new Uint8Array(mlen);
        for (var i = 0; i < m.length; i++) m[i] = tmp[i];
        return m;
      };
      nacl2.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl2.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
        return sig;
      };
      nacl2.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES)
          throw new Error("bad signature size");
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i;
        for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
        for (i = 0; i < msg.length; i++) sm[i + crypto_sign_BYTES] = msg[i];
        return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
      };
      nacl2.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl2.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32 + i];
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl2.sign.keyPair.fromSeed = function(seed) {
        checkArrayTypes(seed);
        if (seed.length !== crypto_sign_SEEDBYTES)
          throw new Error("bad seed size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for (var i = 0; i < 32; i++) sk[i] = seed[i];
        crypto_sign_keypair(pk, sk, true);
        return { publicKey: pk, secretKey: sk };
      };
      nacl2.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
      nacl2.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
      nacl2.sign.seedLength = crypto_sign_SEEDBYTES;
      nacl2.sign.signatureLength = crypto_sign_BYTES;
      nacl2.hash = function(msg) {
        checkArrayTypes(msg);
        var h = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h, msg, msg.length);
        return h;
      };
      nacl2.hash.hashLength = crypto_hash_BYTES;
      nacl2.verify = function(x, y) {
        checkArrayTypes(x, y);
        if (x.length === 0 || y.length === 0) return false;
        if (x.length !== y.length) return false;
        return vn(x, 0, y, 0, x.length) === 0 ? true : false;
      };
      nacl2.setPRNG = function(fn) {
        randombytes = fn;
      };
      (function() {
        var crypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (crypto && crypto.getRandomValues) {
          var QUOTA = 65536;
          nacl2.setPRNG(function(x, n) {
            var i, v = new Uint8Array(n);
            for (i = 0; i < n; i += QUOTA) {
              crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
            }
            for (i = 0; i < n; i++) x[i] = v[i];
            cleanup(v);
          });
        } else if (typeof require !== "undefined") {
          crypto = require("crypto");
          if (crypto && crypto.randomBytes) {
            nacl2.setPRNG(function(x, n) {
              var i, v = crypto.randomBytes(n);
              for (i = 0; i < n; i++) x[i] = v[i];
              cleanup(v);
            });
          }
        }
      })();
    })(typeof module2 !== "undefined" && module2.exports ? module2.exports : self.nacl = self.nacl || {});
  }
});

// node_modules/telnyx/dist/Webhooks.js
function throwSignatureVerificationError(payload, signatureHeader, timestampHeader) {
  throw new TelnyxSignatureVerificationError({
    message: "Signature is invalid and does not match the payload",
    detail: {
      signatureHeader,
      timestampHeader,
      payload
    }
  });
}
var import_tweetnacl, Webhooks2, Webhooks_default;
var init_Webhooks2 = __esm({
  "node_modules/telnyx/dist/Webhooks.js"() {
    import_tweetnacl = __toESM(require_nacl_fast(), 1);
    init_Error();
    Webhooks2 = {
      DEFAULT_TOLERANCE: 300,
      // 5 minutes
      decoder: new TextDecoder("utf8"),
      constructEvent: function(payload, signatureHeader, timestampHeader = "", publicKey, tolerance) {
        this.signature.verifySignature(payload, signatureHeader, timestampHeader, publicKey, tolerance || Webhooks2.DEFAULT_TOLERANCE);
        const jsonPayload = JSON.parse(payload);
        return jsonPayload;
      },
      signature: {
        verifySignature: function(payload, signatureHeader, timestampHeader, publicKey, tolerance) {
          const payloadBuffer = Buffer.from(`${timestampHeader}|${payload}`, "utf8");
          const signature = signatureHeader || Buffer.from("", "base64");
          let verification;
          try {
            verification = import_tweetnacl.default.sign.detached.verify(payloadBuffer, signature, publicKey);
          } catch (_e) {
            console.log(_e);
            throwSignatureVerificationError(payload, signature, timestampHeader);
          }
          if (!verification) {
            throwSignatureVerificationError(payload, signature, timestampHeader);
          }
          const timestampAge = Math.floor(Date.now() / 1e3) - parseInt(timestampHeader);
          if (tolerance && tolerance > 0 && timestampAge > tolerance) {
            throw new TelnyxSignatureVerificationError({
              message: "Timestamp outside the tolerance zone",
              detail: {
                signatureHeader,
                timestampHeader,
                payload
              }
            });
          }
          return true;
        }
      }
    };
    Webhooks_default = Webhooks2;
  }
});

// node_modules/telnyx/dist/resources/AvailablePhoneNumbersBlocks.js
var AvailablePhoneNumbersBlocks;
var init_AvailablePhoneNumbersBlocks = __esm({
  "node_modules/telnyx/dist/resources/AvailablePhoneNumbersBlocks.js"() {
    init_TelnyxResource();
    AvailablePhoneNumbersBlocks = TelnyxResource_default.extend({
      path: "available_phone_number_blocks",
      includeBasic: ["list"]
    });
  }
});

// node_modules/telnyx/dist/telnyx.js
function createTelnyx() {
  Telnyx2.DEFAULT_HOST = process.env.TELNYX_API_BASE || "api.telnyx.com";
  Telnyx2.DEFAULT_PORT = "443";
  Telnyx2.DEFAULT_BASE_PATH = "/v2/";
  Telnyx2.DEFAULT_TIMEOUT = http2.createServer().timeout;
  Telnyx2.PACKAGE_VERSION = process.env.npm_package_version || "2.x";
  Telnyx2.REQUESTS = [];
  Telnyx2.LAST_REQUEST = null;
  Telnyx2.USER_AGENT = {
    bindings_version: Telnyx2.PACKAGE_VERSION,
    lang: "node",
    lang_version: process.version,
    platform: process.platform,
    publisher: "telnyx",
    uname: null
  };
  Telnyx2.USER_AGENT_SERIALIZED = process.env.USER_AGENT_SERIALIZED || null;
  Telnyx2.MAX_NETWORK_RETRY_DELAY_SEC = 2;
  Telnyx2.INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
  const APP_INFO_PROPERTIES = ["name", "version", "url", "partner_id"];
  const resources = {
    AccessIpAddress,
    AccessIpRanges,
    Actions,
    ActionsSimCards,
    ActivateDeactivateBulkCredentials,
    Addresses,
    AiAssistants,
    AiAudioTranscriptions,
    AiChatCompletions,
    AiEmbeddings,
    AiEmbeddingsBuckets,
    AiEmbeddingsSimilaritySearch,
    AiModels,
    AiSummarize,
    AuthenticationProviders,
    AvailablePhoneNumbers,
    AvailablePhoneNumbersBlocks,
    Balance,
    BillingGroups,
    Brands,
    BulkCredentials,
    BulkSoleProprietorCreation,
    BulkTelephonyCredentials,
    CallControlApplications,
    CallEvents,
    CallRecordings,
    Calls,
    Campaign,
    CampaignBuilder,
    CdrUsageReports,
    Channelzones,
    Conferences,
    Connections,
    CredentialConnections,
    CustomerServiceRecords,
    DetailRecords,
    DialogflowConnections,
    DocumentLinks,
    Documents,
    DynamicEmergency,
    DynamicEmergencyAddresses,
    DynamicEmergencyEndpoints,
    AuditEvents,
    ExternalConnections,
    FaxApplications,
    Faxes,
    FqdnConnections,
    Fqdns,
    GlobalIps,
    InventoryCoverage,
    IpConnections,
    Ips,
    ManagedAccounts,
    MdrDetailReports,
    MdrUsageReports,
    MediaStorageApi,
    Messages,
    MessagingHostedNumberOrders,
    MessagingHostedNumbers,
    MessagingProfileMetrics,
    MessagingProfiles,
    MessagingShortCodes,
    MessagingTollfreeVerification,
    MessagingUrlDomains,
    MobileNetworkOperators,
    MobileOperatorNetworks,
    Networks,
    NotificationEvents,
    NumberBackgroundJobs,
    NumberLookup,
    NumberOrderDocuments,
    NumberOrders,
    NumberPortouts,
    NumberReservations,
    NumbersFeatures,
    ObjectApi: Object2,
    OtaUpdates,
    OutboundVoiceProfiles,
    Payment,
    PhoneNumberAssignmentByProfile,
    PhoneNumberBlockOrders,
    PhoneNumberBlocksBackgroundJobs,
    PhoneNumberCampaigns,
    PhoneNumberOrderDocuments,
    PhoneNumbersRegulatoryRequirements,
    PhoneNumbersSlim,
    PhoneNumbers,
    PhoneNumbersInboundChannels,
    PhoneNumbersMessaging,
    PhoneNumbersVoice,
    PhoneNumbersCsvDownloads,
    PortingEvents,
    PortoutEvents,
    PortabilityChecks,
    PortingOrders,
    PortingPhoneNumbers,
    PortoutRequests,
    PresignedObjectUrls,
    PrivateWirelessGateways,
    PublicInternetGateways,
    PushCredentials,
    Queues,
    RecordingsCommands,
    Regions,
    RegulatoryRequirements,
    Reporting,
    Reports,
    ReportsMdrs,
    Requirements,
    RequirementTypes,
    RoomCompositions,
    RoomParticipants,
    RoomRecordings,
    Rooms,
    RoomsClientToken,
    RoomsClientTokens,
    RoomSessions,
    SharedCampaigns,
    ShortCodes,
    SimCardActions,
    SimCardGroupActions,
    SimCardGroups,
    SimCardOrders,
    SimCards,
    StorageBuckets,
    TelephonyCredentials,
    Texml,
    TexmlApplications,
    Verifications,
    VerifiedNumbers,
    VerifyProfiles,
    VirtualCrossConnects,
    WdrDetailReports,
    WebhooksApi: Webhooks,
    WireguardInterfaces,
    WirelessDetailRecordReports
  };
  Telnyx2.TelnyxResource = TelnyxResource_default;
  Telnyx2.resources = resources;
  function Telnyx2(key, version) {
    if (!(this instanceof Telnyx2)) {
      return new Telnyx2(key, version);
    }
    Object.defineProperty(this, "_emitter", {
      value: new import_events.EventEmitter(),
      enumerable: false,
      configurable: false,
      writable: false
    });
    this.on = this._emitter.on.bind(this._emitter);
    this.off = this._emitter.removeListener.bind(this._emitter);
    this._api = {
      auth: null,
      host: Telnyx2.DEFAULT_HOST,
      port: Telnyx2.DEFAULT_PORT,
      protocol: "https",
      basePath: Telnyx2.DEFAULT_BASE_PATH,
      timeout: Telnyx2.DEFAULT_TIMEOUT,
      http_agent: new http2.Agent({ keepAlive: true }),
      https_agent: new https2.Agent({ keepAlive: true }),
      dev: false,
      maxNetworkRetries: 0
    };
    this._setApiKey(key);
    this._prepResources();
    this.errors = Error_exports;
    this.webhooks = Webhooks_default;
    this._prevRequestMetrics = [];
  }
  Telnyx2.errors = Error_exports;
  Telnyx2.webhooks = Webhooks_default;
  Telnyx2.prototype = {
    // Properties are set in the constructor above
    _appInfo: void 0,
    on: null,
    off: null,
    once: null,
    VERSION: null,
    TelnyxResource: null,
    webhooks: null,
    errors: null,
    _api: null,
    _prevRequestMetrics: null,
    _emitter: null,
    _requestSender: null,
    _platformFunctions: null,
    REQUESTS: null,
    LAST_REQUEST: null,
    setHost: function(host, port, protocol) {
      this._setApiField("host", host);
      if (port) {
        this.setPort(port);
      }
      if (protocol) {
        this.setProtocol(protocol);
      }
    },
    setProtocol: function(protocol) {
      this._setApiField("protocol", protocol.toLowerCase());
    },
    setPort: function(port) {
      this._setApiField("port", port);
    },
    /**
     * @private
     */
    _setApiKey(key) {
      if (key) {
        this._setApiField("auth", "Bearer " + key);
      }
    },
    setTimeout: function(timeout) {
      this._setApiField("timeout", timeout == null ? Telnyx2.DEFAULT_TIMEOUT : timeout);
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _setAppInfo: function(info) {
      if (info && typeof info !== "object") {
        throw new Error("AppInfo must be an object.");
      }
      if (info && !info.name) {
        throw new Error("AppInfo.name is required");
      }
      info = info || {};
      const appInfo = APP_INFO_PROPERTIES.reduce(
        function(accum, prop) {
          if (typeof info[prop] == "string") {
            accum = accum || {};
            accum[prop] = info[prop];
          }
          return accum;
        },
        // @ts-expect-error force default of appInfo to be undefined with default param
        void 0
      );
      Telnyx2.USER_AGENT_SERIALIZED = null;
      this._appInfo = appInfo;
    },
    setHttpAgent: function(agent) {
      if (agent instanceof https2.Agent) {
        this._setApiField("https_agent", agent);
      } else {
        this._setApiField("http_agent", agent);
      }
    },
    _setApiField: function(key, value) {
      this._api[key] = value;
    },
    getApiField: function(key) {
      return this._api[key];
    },
    setClientId: function(clientId) {
      this._clientId = clientId;
    },
    getClientId: function() {
      return this._clientId;
    },
    getConstant: function(c) {
      switch (c) {
        case "DEFAULT_HOST":
          return Telnyx2.DEFAULT_HOST;
        case "DEFAULT_PORT":
          return Telnyx2.DEFAULT_PORT;
        case "DEFAULT_BASE_PATH":
          return Telnyx2.DEFAULT_BASE_PATH;
        case "DEFAULT_TIMEOUT":
          return Telnyx2.DEFAULT_TIMEOUT;
        case "MAX_NETWORK_RETRY_DELAY_SEC":
          return Telnyx2.MAX_NETWORK_RETRY_DELAY_SEC;
        case "INITIAL_NETWORK_RETRY_DELAY_SEC":
          return Telnyx2.INITIAL_NETWORK_RETRY_DELAY_SEC;
      }
      return Telnyx2[c];
    },
    getMaxNetworkRetries: function() {
      return this.getApiField("maxNetworkRetries");
    },
    setMaxNetworkRetries: function(maxNetworkRetries) {
      if (maxNetworkRetries && typeof maxNetworkRetries !== "number" || typeof maxNetworkRetries === "undefined" || arguments.length < 1) {
        throw new Error("maxNetworkRetries must be a number.");
      }
      this._setApiField("maxNetworkRetries", maxNetworkRetries);
    },
    getMaxNetworkRetryDelay: function() {
      return this.getConstant("MAX_NETWORK_RETRY_DELAY_SEC");
    },
    getInitialNetworkRetryDelay: function() {
      return this.getConstant("INITIAL_NETWORK_RETRY_DELAY_SEC");
    },
    /**
     * @private
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent and uses a cached version for a slight
     * speed advantage.
     */
    getClientUserAgent: function(cb) {
      if (Telnyx2.USER_AGENT_SERIALIZED) {
        return cb(Telnyx2.USER_AGENT_SERIALIZED);
      }
      this.getClientUserAgentSeeded(Telnyx2.USER_AGENT, function(cua) {
        Telnyx2.USER_AGENT_SERIALIZED = cua;
        cb(Telnyx2.USER_AGENT_SERIALIZED);
      });
    },
    /**
     * @private
     *
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent by encoding a seeded object and
     * fetching a uname from the system.
     */
    getClientUserAgentSeeded: function(seed, cb) {
      (0, import_child_process.exec)("uname -a", (_err, uname) => {
        const userAgent = {};
        for (const field in seed) {
          userAgent[field] = encodeURIComponent(seed[field] ?? "null");
        }
        userAgent.uname = encodeURIComponent(uname) || "UNKNOWN";
        if (this._appInfo) {
          userAgent.application = this._appInfo;
        }
        cb(JSON.stringify(userAgent));
      });
    },
    getAppInfoAsString: function() {
      if (!this._appInfo) {
        return "";
      }
      let formatted = this._appInfo.name;
      if (this._appInfo.version) {
        formatted += "/" + this._appInfo.version;
      }
      if (this._appInfo.url) {
        formatted += " (" + this._appInfo.url + ")";
      }
      return formatted;
    },
    _buildDefaultAgent: function(protocol) {
      if (protocol === "http") {
        return new http2.Agent({ keepAlive: true });
      }
      return new https2.Agent({ keepAlive: true });
    },
    _prepResources: function() {
      for (const name in resources) {
        this._instantiateResource(name, this);
        this[toSingular(name)] = this._createConstructor(name, this);
      }
    },
    _instantiateResource: function(name, self2) {
      const camelCaseName = pascalToCamelCase(name);
      self2[camelCaseName] = new resources[name](self2);
      return self2[camelCaseName];
    },
    _createConstructor: function(resourceName, self2) {
      return function(args) {
        return Object.assign(self2._instantiateResource(resourceName, self2), args || {});
      };
    }
  };
  return Telnyx2;
}
var http2, https2, import_events, import_child_process;
var init_telnyx = __esm({
  "node_modules/telnyx/dist/telnyx.js"() {
    http2 = __toESM(require("http"), 1);
    https2 = __toESM(require("https"), 1);
    import_events = require("events");
    import_child_process = require("child_process");
    init_utils();
    init_AccessIpAddress();
    init_AccessIpRanges();
    init_Actions();
    init_ActionsSimCards();
    init_ActivateDeactivateBulkCredentials();
    init_Addresses();
    init_AiAssistants();
    init_AiAudioTranscriptions();
    init_AiChatCompletions();
    init_AiEmbeddings();
    init_AiEmbeddingsBuckets();
    init_AiEmbeddingsSimilaritySearch();
    init_AiModels();
    init_AiSummarize();
    init_AuthenticationProviders();
    init_AvailablePhoneNumbers();
    init_Balance();
    init_BillingGroups();
    init_Brands();
    init_BulkCredentials();
    init_BulkSoleProprietorCreation();
    init_BulkTelephonyCredentials();
    init_CallControlApplications();
    init_CallEvents();
    init_CallRecordings();
    init_Calls();
    init_Campaign();
    init_CampaignBuilder();
    init_CdrUsageReports();
    init_Channelzones();
    init_Conferences();
    init_Connections();
    init_CredentialConnections();
    init_PhoneNumbersCsvDownloads();
    init_CustomerServiceRecords();
    init_DetailRecords();
    init_DialogflowConnections();
    init_DocumentLinks();
    init_Documents();
    init_DynamicEmergency();
    init_DynamicEmergencyAddresses();
    init_DynamicEmergencyEndpoints();
    init_AuditEvents();
    init_ExternalConnections();
    init_FaxApplications();
    init_Faxes();
    init_FqdnConnections();
    init_Fqdns();
    init_GlobalIps();
    init_InventoryCoverage();
    init_IpConnections();
    init_Ips();
    init_ManagedAccounts();
    init_MdrDetailReports();
    init_MdrUsageReports();
    init_MediaStorageApi();
    init_Messages();
    init_MessagingHostedNumberOrders();
    init_MessagingHostedNumbers();
    init_MessagingProfileMetrics();
    init_MessagingProfiles();
    init_MessagingShortCodes();
    init_MessagingTollfreeVerification();
    init_MessagingUrlDomains();
    init_MobileNetworkOperators();
    init_MobileOperatorNetworks();
    init_Networks();
    init_NotificationEvents();
    init_NumberBackgroundJobs();
    init_NumberLookup();
    init_NumberOrderDocuments();
    init_NumberOrders();
    init_NumberPortouts();
    init_NumberReservations();
    init_NumbersFeatures();
    init_Object();
    init_OtaUpdates();
    init_OutboundVoiceProfiles();
    init_Payment();
    init_PhoneNumberAssignmentByProfile();
    init_PhoneNumberBlockOrders();
    init_PhoneNumberBlocksBackgroundJobs();
    init_PhoneNumberCampaigns();
    init_PhoneNumberOrderDocuments();
    init_PhoneNumbers();
    init_PhoneNumbersInboundChannels();
    init_PhoneNumbersMessaging();
    init_PhoneNumbersRegulatoryRequirements();
    init_PhoneNumbersSlim();
    init_PhoneNumbersVoice();
    init_PortabilityChecks();
    init_PortingEvents();
    init_PortoutEvents();
    init_PortingOrders();
    init_PortingPhoneNumbers();
    init_PortoutRequests();
    init_PresignedObjectUrls();
    init_PrivateWirelessGateways();
    init_PublicInternetGateways();
    init_PushCredentials();
    init_Queues();
    init_RecordingsCommands();
    init_Regions();
    init_RegulatoryRequirements();
    init_Reporting();
    init_Reports();
    init_ReportsMdrs();
    init_Requirements();
    init_RequirementTypes();
    init_RoomCompositions();
    init_RoomParticipants();
    init_RoomRecordings();
    init_Rooms();
    init_RoomsClientToken();
    init_RoomsClientTokens();
    init_RoomSessions();
    init_SharedCampaigns();
    init_ShortCodes();
    init_SimCardActions();
    init_SimCardGroupActions();
    init_SimCardGroups();
    init_SimCardOrders();
    init_SimCards();
    init_StorageBuckets();
    init_TelephonyCredentials();
    init_Texml();
    init_TexmlApplications();
    init_Verifications();
    init_VerifiedNumbers();
    init_VerifyProfiles();
    init_VirtualCrossConnects();
    init_WdrDetailReports();
    init_Webhooks();
    init_WireguardInterfaces();
    init_WirelessDetailRecordReports();
    init_TelnyxResource();
    init_Error();
    init_Webhooks2();
    init_AvailablePhoneNumbersBlocks();
  }
});

// node_modules/telnyx/dist/telnyx.node.js
var telnyx_node_exports = {};
__export(telnyx_node_exports, {
  Telnyx: () => Telnyx,
  default: () => telnyx_node_default
});
var Telnyx, telnyx_node_default;
var init_telnyx_node = __esm({
  "node_modules/telnyx/dist/telnyx.node.js"() {
    init_telnyx();
    Telnyx = createTelnyx();
    telnyx_node_default = Telnyx;
  }
});

// src/telnyx.module.ts
var telnyx_module_exports = {};
__export(telnyx_module_exports, {
  TelnyxModule: () => TelnyxModule
});
module.exports = __toCommonJS(telnyx_module_exports);
var import_common = require("@nestjs/common");
var TelnyxModule = class {
  static async forRoot(apiKey) {
    const telnyxClient = await Promise.resolve().then(() => (init_telnyx_node(), telnyx_node_exports)).then((telnyx) => new telnyx.default(apiKey)).catch((error) => {
      throw new Error(`Failed to initialize Telnyx client: ${error.message}`);
    });
    return {
      module: TelnyxModule,
      providers: [
        {
          provide: "TELNYX_CLIENT",
          useValue: telnyxClient
        }
      ],
      exports: ["TELNYX_CLIENT"]
    };
  }
};
TelnyxModule = __decorateClass([
  (0, import_common.Global)(),
  (0, import_common.Module)({})
], TelnyxModule);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TelnyxModule
});
