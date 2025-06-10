/* Copyright © 2025 Navarrotech */
var dn = Object.defineProperty;
var un = (e, t, n) => t in e ? dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var k = (e, t, n) => un(e, typeof t != "symbol" ? t + "" : t, n);
import Rt, { Component as ge, useState as ie, useEffect as G, createElement as ne, useCallback as fn, Children as Ot, isValidElement as St, useRef as hn } from "react";
import { createPortal as mn } from "react-dom";
class bi extends ge {
  constructor(t) {
    super(t);
  }
  componentDidMount() {
    this.setState({
      value: this.props.defaultValue
    });
  }
}
function gn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ke = { exports: {} }, te = typeof Reflect == "object" ? Reflect : null, xt = te && typeof te.apply == "function" ? te.apply : function(t, n, r) {
  return Function.prototype.apply.call(t, n, r);
}, ye;
te && typeof te.ownKeys == "function" ? ye = te.ownKeys : Object.getOwnPropertySymbols ? ye = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : ye = function(t) {
  return Object.getOwnPropertyNames(t);
};
function vn(e) {
  console && console.warn && console.warn(e);
}
var Pt = Number.isNaN || function(t) {
  return t !== t;
};
function E() {
  E.init.call(this);
}
Ke.exports = E;
Ke.exports.once = yn;
E.EventEmitter = E;
E.prototype._events = void 0;
E.prototype._eventsCount = 0;
E.prototype._maxListeners = void 0;
var bt = 10;
function Ee(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(E, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return bt;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Pt(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    bt = e;
  }
});
E.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
E.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Pt(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function kt(e) {
  return e._maxListeners === void 0 ? E.defaultMaxListeners : e._maxListeners;
}
E.prototype.getMaxListeners = function() {
  return kt(this);
};
E.prototype.emit = function(t) {
  for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
  var s = t === "error", u = this._events;
  if (u !== void 0)
    s = s && u.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var l;
    if (n.length > 0 && (l = n[0]), l instanceof Error)
      throw l;
    var d = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
    throw d.context = l, d;
  }
  var c = u[t];
  if (c === void 0)
    return !1;
  if (typeof c == "function")
    xt(c, this, n);
  else
    for (var h = c.length, v = It(c, h), r = 0; r < h; ++r)
      xt(v[r], this, n);
  return !0;
};
function Lt(e, t, n, r) {
  var s, u, l;
  if (Ee(n), u = e._events, u === void 0 ? (u = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (u.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    n.listener ? n.listener : n
  ), u = e._events), l = u[t]), l === void 0)
    l = u[t] = n, ++e._eventsCount;
  else if (typeof l == "function" ? l = u[t] = r ? [n, l] : [l, n] : r ? l.unshift(n) : l.push(n), s = kt(e), s > 0 && l.length > s && !l.warned) {
    l.warned = !0;
    var d = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    d.name = "MaxListenersExceededWarning", d.emitter = e, d.type = t, d.count = l.length, vn(d);
  }
  return e;
}
E.prototype.addListener = function(t, n) {
  return Lt(this, t, n, !1);
};
E.prototype.on = E.prototype.addListener;
E.prototype.prependListener = function(t, n) {
  return Lt(this, t, n, !0);
};
function xn() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Dt(e, t, n) {
  var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, s = xn.bind(r);
  return s.listener = n, r.wrapFn = s, s;
}
E.prototype.once = function(t, n) {
  return Ee(n), this.on(t, Dt(this, t, n)), this;
};
E.prototype.prependOnceListener = function(t, n) {
  return Ee(n), this.prependListener(t, Dt(this, t, n)), this;
};
E.prototype.removeListener = function(t, n) {
  var r, s, u, l, d;
  if (Ee(n), s = this._events, s === void 0)
    return this;
  if (r = s[t], r === void 0)
    return this;
  if (r === n || r.listener === n)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, r.listener || n));
  else if (typeof r != "function") {
    for (u = -1, l = r.length - 1; l >= 0; l--)
      if (r[l] === n || r[l].listener === n) {
        d = r[l].listener, u = l;
        break;
      }
    if (u < 0)
      return this;
    u === 0 ? r.shift() : bn(r, u), r.length === 1 && (s[t] = r[0]), s.removeListener !== void 0 && this.emit("removeListener", t, d || n);
  }
  return this;
};
E.prototype.off = E.prototype.removeListener;
E.prototype.removeAllListeners = function(t) {
  var n, r, s;
  if (r = this._events, r === void 0)
    return this;
  if (r.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[t]), this;
  if (arguments.length === 0) {
    var u = Object.keys(r), l;
    for (s = 0; s < u.length; ++s)
      l = u[s], l !== "removeListener" && this.removeAllListeners(l);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = r[t], typeof n == "function")
    this.removeListener(t, n);
  else if (n !== void 0)
    for (s = n.length - 1; s >= 0; s--)
      this.removeListener(t, n[s]);
  return this;
};
function At(e, t, n) {
  var r = e._events;
  if (r === void 0)
    return [];
  var s = r[t];
  return s === void 0 ? [] : typeof s == "function" ? n ? [s.listener || s] : [s] : n ? jn(s) : It(s, s.length);
}
E.prototype.listeners = function(t) {
  return At(this, t, !0);
};
E.prototype.rawListeners = function(t) {
  return At(this, t, !1);
};
E.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Bt.call(e, t);
};
E.prototype.listenerCount = Bt;
function Bt(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function")
      return 1;
    if (n !== void 0)
      return n.length;
  }
  return 0;
}
E.prototype.eventNames = function() {
  return this._eventsCount > 0 ? ye(this._events) : [];
};
function It(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r)
    n[r] = e[r];
  return n;
}
function bn(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function jn(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function yn(e, t) {
  return new Promise(function(n, r) {
    function s(l) {
      e.removeListener(t, u), r(l);
    }
    function u() {
      typeof e.removeListener == "function" && e.removeListener("error", s), n([].slice.call(arguments));
    }
    $t(e, t, u, { once: !0 }), t !== "error" && Cn(e, s, { once: !0 });
  });
}
function Cn(e, t, n) {
  typeof e.on == "function" && $t(e, "error", t, n);
}
function $t(e, t, n, r) {
  if (typeof e.on == "function")
    r.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function s(u) {
      r.once && e.removeEventListener(t, s), n(u);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var wn = Ke.exports;
const qe = /* @__PURE__ */ gn(wn), En = (e) => e;
class $ {
  static changeLanguage(t) {
    this.language = t, this.events.emit("language", t);
  }
  static onLanguageChange(t) {
    const n = (r) => t(r);
    return this.events.on("language", n), () => this.events.removeListener("language", n);
  }
  static getCurrentLanguage() {
    return this.language;
  }
}
// //////////////////////////// //
//    Translation & Language    //
// //////////////////////////// //
k($, "translationFunction", En), k($, "language", ""), k($, "events", new qe()), // ////////////////////////// //
//    Targets and defaults    //
// ////////////////////////// //
k($, "CustomErrorBoundary", null), k($, "CustomModalParentElement", document.getElementById("body"));
$.events.setMaxListeners(1 / 0);
var Ve = { exports: {} }, ue = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function Nn() {
  if (jt) return ue;
  jt = 1;
  var e = Rt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, c, h) {
    var v, m = {}, y = null, L = null;
    h !== void 0 && (y = "" + h), c.key !== void 0 && (y = "" + c.key), c.ref !== void 0 && (L = c.ref);
    for (v in c) r.call(c, v) && !u.hasOwnProperty(v) && (m[v] = c[v]);
    if (d && d.defaultProps) for (v in c = d.defaultProps, c) m[v] === void 0 && (m[v] = c[v]);
    return { $$typeof: t, type: d, key: y, ref: L, props: m, _owner: s.current };
  }
  return ue.Fragment = n, ue.jsx = l, ue.jsxs = l, ue;
}
var fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Tn() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Rt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), S = Symbol.iterator, H = "@@iterator";
    function U(i) {
      if (i === null || typeof i != "object")
        return null;
      var o = S && i[S] || i[H];
      return typeof o == "function" ? o : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(i) {
      {
        for (var o = arguments.length, f = new Array(o > 1 ? o - 1 : 0), g = 1; g < o; g++)
          f[g - 1] = arguments[g];
        K("error", i, f);
      }
    }
    function K(i, o, f) {
      {
        var g = D.ReactDebugCurrentFrame, w = g.getStackAddendum();
        w !== "" && (o += "%s", f = f.concat([w]));
        var N = f.map(function(j) {
          return String(j);
        });
        N.unshift("Warning: " + o), Function.prototype.apply.call(console[i], console, N);
      }
    }
    var ae = !1, B = !1, X = !1, ve = !1, Xe = !1, Te;
    Te = Symbol.for("react.module.reference");
    function Ze(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === u || Xe || i === s || i === h || i === v || ve || i === L || ae || B || X || typeof i == "object" && i !== null && (i.$$typeof === y || i.$$typeof === m || i.$$typeof === l || i.$$typeof === d || i.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Te || i.getModuleId !== void 0));
    }
    function Qe(i, o, f) {
      var g = i.displayName;
      if (g)
        return g;
      var w = o.displayName || o.name || "";
      return w !== "" ? f + "(" + w + ")" : f;
    }
    function _e(i) {
      return i.displayName || "Context";
    }
    function F(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case s:
          return "StrictMode";
        case h:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case d:
            var o = i;
            return _e(o) + ".Consumer";
          case l:
            var f = i;
            return _e(f._context) + ".Provider";
          case c:
            return Qe(i, i.render, "ForwardRef");
          case m:
            var g = i.displayName || null;
            return g !== null ? g : F(i.type) || "Memo";
          case y: {
            var w = i, N = w._payload, j = w._init;
            try {
              return F(j(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, Z = 0, Re, Oe, Se, Pe, ke, Le, De;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function pe() {
      {
        if (Z === 0) {
          Re = console.log, Oe = console.info, Se = console.warn, Pe = console.error, ke = console.group, Le = console.groupCollapsed, De = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        Z++;
      }
    }
    function et() {
      {
        if (Z--, Z === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, i, {
              value: Re
            }),
            info: Y({}, i, {
              value: Oe
            }),
            warn: Y({}, i, {
              value: Se
            }),
            error: Y({}, i, {
              value: Pe
            }),
            group: Y({}, i, {
              value: ke
            }),
            groupCollapsed: Y({}, i, {
              value: Le
            }),
            groupEnd: Y({}, i, {
              value: De
            })
          });
        }
        Z < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = D.ReactCurrentDispatcher, be;
    function re(i, o, f) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (w) {
            var g = w.stack.trim().match(/\n( *(at )?)/);
            be = g && g[1] || "";
          }
        return `
` + be + i;
      }
    }
    var je = !1, se;
    {
      var tt = typeof WeakMap == "function" ? WeakMap : Map;
      se = new tt();
    }
    function Be(i, o) {
      if (!i || je)
        return "";
      {
        var f = se.get(i);
        if (f !== void 0)
          return f;
      }
      var g;
      je = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = xe.current, xe.current = null, pe();
      try {
        if (o) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (A) {
              g = A;
            }
            Reflect.construct(i, [], j);
          } else {
            try {
              j.call();
            } catch (A) {
              g = A;
            }
            i.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            g = A;
          }
          i();
        }
      } catch (A) {
        if (A && g && typeof A.stack == "string") {
          for (var b = A.stack.split(`
`), P = g.stack.split(`
`), _ = b.length - 1, R = P.length - 1; _ >= 1 && R >= 0 && b[_] !== P[R]; )
            R--;
          for (; _ >= 1 && R >= 0; _--, R--)
            if (b[_] !== P[R]) {
              if (_ !== 1 || R !== 1)
                do
                  if (_--, R--, R < 0 || b[_] !== P[R]) {
                    var I = `
` + b[_].replace(" at new ", " at ");
                    return i.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", i.displayName)), typeof i == "function" && se.set(i, I), I;
                  }
                while (_ >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        je = !1, xe.current = N, et(), Error.prepareStackTrace = w;
      }
      var ee = i ? i.displayName || i.name : "", q = ee ? re(ee) : "";
      return typeof i == "function" && se.set(i, q), q;
    }
    function nt(i, o, f) {
      return Be(i, !1);
    }
    function it(i) {
      var o = i.prototype;
      return !!(o && o.isReactComponent);
    }
    function le(i, o, f) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Be(i, it(i));
      if (typeof i == "string")
        return re(i);
      switch (i) {
        case h:
          return re("Suspense");
        case v:
          return re("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case c:
            return nt(i.render);
          case m:
            return le(i.type, o, f);
          case y: {
            var g = i, w = g._payload, N = g._init;
            try {
              return le(N(w), o, f);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Ie = {}, $e = D.ReactDebugCurrentFrame;
    function oe(i) {
      if (i) {
        var o = i._owner, f = le(i.type, i._source, o ? o.type : null);
        $e.setExtraStackFrame(f);
      } else
        $e.setExtraStackFrame(null);
    }
    function at(i, o, f, g, w) {
      {
        var N = Function.call.bind(Q);
        for (var j in i)
          if (N(i, j)) {
            var b = void 0;
            try {
              if (typeof i[j] != "function") {
                var P = Error((g || "React class") + ": " + f + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              b = i[j](o, j, g, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              b = _;
            }
            b && !(b instanceof Error) && (oe(w), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", f, j, typeof b), oe(null)), b instanceof Error && !(b.message in Ie) && (Ie[b.message] = !0, oe(w), T("Failed %s type: %s", f, b.message), oe(null));
          }
      }
    }
    var rt = Array.isArray;
    function ce(i) {
      return rt(i);
    }
    function Yt(i) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, f = o && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return f;
      }
    }
    function Gt(i) {
      try {
        return st(i), !1;
      } catch {
        return !0;
      }
    }
    function st(i) {
      return "" + i;
    }
    function lt(i) {
      if (Gt(i))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yt(i)), st(i);
    }
    var de = D.ReactCurrentOwner, Vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ot, ct, Fe;
    Fe = {};
    function Ht(i) {
      if (Q.call(i, "ref")) {
        var o = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Kt(i) {
      if (Q.call(i, "key")) {
        var o = Object.getOwnPropertyDescriptor(i, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function qt(i, o) {
      if (typeof i.ref == "string" && de.current && o && de.current.stateNode !== o) {
        var f = F(de.current.type);
        Fe[f] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(de.current.type), i.ref), Fe[f] = !0);
      }
    }
    function Jt(i, o) {
      {
        var f = function() {
          ot || (ot = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        f.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function Xt(i, o) {
      {
        var f = function() {
          ct || (ct = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        f.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var Zt = function(i, o, f, g, w, N, j) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: o,
        ref: f,
        props: j,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Qt(i, o, f, g, w) {
      {
        var N, j = {}, b = null, P = null;
        f !== void 0 && (lt(f), b = "" + f), Kt(o) && (lt(o.key), b = "" + o.key), Ht(o) && (P = o.ref, qt(o, w));
        for (N in o)
          Q.call(o, N) && !Vt.hasOwnProperty(N) && (j[N] = o[N]);
        if (i && i.defaultProps) {
          var _ = i.defaultProps;
          for (N in _)
            j[N] === void 0 && (j[N] = _[N]);
        }
        if (b || P) {
          var R = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          b && Jt(j, R), P && Xt(j, R);
        }
        return Zt(i, b, P, w, g, de.current, j);
      }
    }
    var Me = D.ReactCurrentOwner, dt = D.ReactDebugCurrentFrame;
    function p(i) {
      if (i) {
        var o = i._owner, f = le(i.type, i._source, o ? o.type : null);
        dt.setExtraStackFrame(f);
      } else
        dt.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function ze(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function ut() {
      {
        if (Me.current) {
          var i = F(Me.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function pt(i) {
      return "";
    }
    var ft = {};
    function en(i) {
      {
        var o = ut();
        if (!o) {
          var f = typeof i == "string" ? i : i.displayName || i.name;
          f && (o = `

Check the top-level render call using <` + f + ">.");
        }
        return o;
      }
    }
    function ht(i, o) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var f = en(o);
        if (ft[f])
          return;
        ft[f] = !0;
        var g = "";
        i && i._owner && i._owner !== Me.current && (g = " It was passed a child from " + F(i._owner.type) + "."), p(i), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, g), p(null);
      }
    }
    function mt(i, o) {
      {
        if (typeof i != "object")
          return;
        if (ce(i))
          for (var f = 0; f < i.length; f++) {
            var g = i[f];
            ze(g) && ht(g, o);
          }
        else if (ze(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var w = U(i);
          if (typeof w == "function" && w !== i.entries)
            for (var N = w.call(i), j; !(j = N.next()).done; )
              ze(j.value) && ht(j.value, o);
        }
      }
    }
    function tn(i) {
      {
        var o = i.type;
        if (o == null || typeof o == "string")
          return;
        var f;
        if (typeof o == "function")
          f = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === m))
          f = o.propTypes;
        else
          return;
        if (f) {
          var g = F(o);
          at(f, i.props, "prop", g, i);
        } else if (o.PropTypes !== void 0 && !We) {
          We = !0;
          var w = F(o);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nn(i) {
      {
        for (var o = Object.keys(i.props), f = 0; f < o.length; f++) {
          var g = o[f];
          if (g !== "children" && g !== "key") {
            p(i), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), p(null);
            break;
          }
        }
        i.ref !== null && (p(i), T("Invalid attribute `ref` supplied to `React.Fragment`."), p(null));
      }
    }
    var gt = {};
    function vt(i, o, f, g, w, N) {
      {
        var j = Ze(i);
        if (!j) {
          var b = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = pt();
          P ? b += P : b += ut();
          var _;
          i === null ? _ = "null" : ce(i) ? _ = "array" : i !== void 0 && i.$$typeof === t ? (_ = "<" + (F(i.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof i, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, b);
        }
        var R = Qt(i, o, f, w, N);
        if (R == null)
          return R;
        if (j) {
          var I = o.children;
          if (I !== void 0)
            if (g)
              if (ce(I)) {
                for (var ee = 0; ee < I.length; ee++)
                  mt(I[ee], i);
                Object.freeze && Object.freeze(I);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mt(I, i);
        }
        if (Q.call(o, "key")) {
          var q = F(i), A = Object.keys(o).filter(function(cn) {
            return cn !== "key";
          }), Ue = A.length > 0 ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!gt[q + Ue]) {
            var on = A.length > 0 ? "{" + A.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ue, q, on, q), gt[q + Ue] = !0;
          }
        }
        return i === r ? nn(R) : tn(R), R;
      }
    }
    function an(i, o, f) {
      return vt(i, o, f, !0);
    }
    function rn(i, o, f) {
      return vt(i, o, f, !1);
    }
    var sn = rn, ln = an;
    fe.Fragment = r, fe.jsx = sn, fe.jsxs = ln;
  }()), fe;
}
process.env.NODE_ENV === "production" ? Ve.exports = Nn() : Ve.exports = Tn();
var a = Ve.exports;
function _n(e) {
  return $.translationFunction(e);
}
function O() {
  const [e, t] = ie($.getCurrentLanguage());
  return G(() => $.onLanguageChange(t), []), {
    // The ref won't change with the fn proxy, so it's safe to use it in dependency arrays
    translate: _n,
    language: e
  };
}
class Rn extends ge {
  constructor(n) {
    super(n);
    k(this, "translationSubscription");
    this.translate = this.translate.bind(this), this.onLanguageChange = this.onLanguageChange.bind(this);
  }
  componentDidMount() {
    $.onLanguageChange(this.onLanguageChange);
  }
  componentWillUnmount() {
    this.translationSubscription();
  }
  onLanguageChange() {
    this.forceUpdate();
  }
  translate(n) {
    return $.translationFunction(n);
  }
}
function Ft(e) {
  const {
    as: t,
    text: n,
    icon: r,
    iconRight: s,
    children: u,
    fullwidth: l,
    expanded: d,
    static: c,
    focused: h,
    active: v,
    inverted: m,
    rounded: y,
    outlined: L,
    loading: S,
    selected: H,
    iconSize: U,
    defaultActive: D,
    // Elements
    textarea: T,
    input: K,
    label: ae,
    help: B,
    hovered: X,
    readonly: ve,
    errorMessage: Xe,
    error: Te,
    errors: Ze,
    // Callbacks
    onEnter: Qe,
    onOpened: _e,
    // Positions
    left: F,
    right: Y,
    centered: Z,
    // Sizes:
    small: Re,
    medium: Oe,
    large: Se,
    // Colors:
    color: Pe,
    primary: ke,
    secondary: Le,
    warning: De,
    danger: Ae,
    success: pe,
    info: et,
    link: xe,
    white: be,
    black: re,
    dark: je,
    light: se,
    // Sizes:
    fluid: tt,
    widescreen: Be,
    maxWidescreen: nt,
    fullhd: it,
    desktop: le,
    tablet: Q,
    halfHeight: Ie,
    fullHeight: $e,
    fullHeightWithNavbar: oe,
    mobile: at,
    items: rt,
    ...ce
  } = e;
  return ce;
}
function C({ rootClassname: e, ...t }) {
  const { translate: n } = O();
  return ne(
    t.as || "div",
    {
      ...Ft(t),
      title: n(t.title),
      // TODO: What if props.className is undefined?
      className: `${e} ${t.className}`
    },
    typeof t.children == "string" ? n(t.children) : t.children
  );
}
function ji(e) {
  return /* @__PURE__ */ a.jsx(
    C,
    {
      rootClassname: "block",
      ...e
    }
  );
}
function yi(e) {
  return /* @__PURE__ */ a.jsx(
    C,
    {
      rootClassname: "block box",
      ...e
    }
  );
}
function Mt(e) {
  let { className: t = "", style: n = {} } = e;
  const r = [
    e.primary && "is-primary",
    e.secondary && "is-secondary",
    e.warning && "is-warning",
    e.danger && "is-danger",
    e.success && "is-success",
    e.info && "is-info",
    e.link && "is-link",
    e.white && "is-white",
    e.black && "is-black",
    e.dark && "is-dark",
    e.light && "is-light"
  ].filter(Boolean);
  if (r.length)
    t += " " + r.join(" ");
  else if (e.color) {
    const s = e.color.length;
    // If it's a hex color
    e.color.startsWith("#") && s === 4 || s === 7 || s === 9 || e.color.startsWith("rgb") || e.color.startsWith("hsl") || e.color.startsWith("var(--") ? n = {
      ...n,
      backgroundColor: e.color
    } : t += ` is-${e.color}`;
  }
  return t = t.trim(), {
    className: t,
    style: n
  };
}
function W(e) {
  return Mt(e);
}
function On(e, t, n = [], r = !1, s = !1) {
  G(() => {
    if (r)
      return () => {
      };
    const u = (l) => {
      var d, c, h;
      l.key === e && (s || ((d = l.preventDefault) == null || d.call(l), (c = l.stopPropagation) == null || c.call(l), (h = l.stopImmediatePropagation) == null || h.call(l)), t());
    };
    return window.addEventListener("keydown", u), () => {
      window.removeEventListener("keydown", u);
    };
  }, [e, t, r, ...n]);
}
function Je(e, t = "is") {
  const { left: n, right: r, centered: s } = e;
  return [
    n && `${t}-left`,
    r && `${t}-right`,
    s && `${t}-centered`
  ].filter(Boolean).join(" ") || "";
}
function z(e, t = "is") {
  const { small: n, medium: r, large: s } = e;
  return [
    n && `${t}-small`,
    r && `${t}-medium`,
    s && `${t}-large`
  ].filter(Boolean).join(" ") || "";
}
const x = /* @__PURE__ */ a.jsx(a.Fragment, {});
function Sn(e) {
  const { translate: t } = O(), { className: n, style: r } = W(e), s = z(e), u = [
    n,
    s,
    e.outlined && "is-outlined",
    e.inverted && "is-inverted",
    e.rounded && "is-rounded",
    e.disabled && "is-disabled",
    e.loading && "is-loading",
    e.focused && "is-focused",
    e.active && "is-active",
    e.static && "is-static",
    e.selected && "is-selected",
    e.fullwidth && "is-fullwidth"
  ].filter(Boolean).join(" "), l = fn((v) => {
    !e.onClick || e.disabled || e.loading || e.onClick(v);
  }, [e.onClick, e.disabled, e.loading]), d = e.icon ? /* @__PURE__ */ a.jsx("span", { className: "icon", children: e.icon }) : x, c = e.iconRight ? /* @__PURE__ */ a.jsx("span", { className: "icon", children: e.iconRight }) : x, h = e.as || "button";
  return /* @__PURE__ */ a.jsxs(
    C,
    {
      ...e,
      as: h,
      type: h === "button" ? "button" : void 0,
      rootClassname: "button",
      disabled: e.disabled || e.loading,
      onClick: l,
      className: u,
      style: r,
      children: [
        d,
        typeof e.children == "string" || e.text ? /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("span", { children: t(e.text || e.children) }) }) : e.children,
        c
      ]
    }
  );
}
function Ci(e) {
  if (e.singleLine) {
    const n = [
      "is-grouped",
      e.className,
      e.disabled && "are-disabled",
      e.fullwidth && "is-fullwidth",
      e.hasAddons && "has-addons"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ a.jsx(
      C,
      {
        ...e,
        rootClassname: "field",
        className: n,
        children: Ot.map(e.children, (r) => St(r) ? /* @__PURE__ */ a.jsx("div", { className: "control", children: r }) : r)
      }
    );
  }
  const t = [
    e.className,
    e.disabled && "are-disabled",
    e.small && "are-small",
    e.medium && "are-medium",
    e.large && "are-large",
    e.left && "is-left",
    e.centered && "is-centered",
    e.right && "is-right",
    e.fullwidth && "is-fullwidth",
    e.hasAddons && "has-addons"
  ].filter(Boolean).join(" ") || "";
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "buttons",
      className: t,
      children: e.children
    }
  );
}
function wi(e) {
  return /* @__PURE__ */ a.jsx(
    C,
    {
      rootClassname: "content",
      ...e
    }
  );
}
function Ne(e) {
  const t = [
    "delete",
    e.className,
    e.fullwidth && "is-fullwidth",
    e.disabled && "is-disabled",
    e.small && "is-small",
    e.medium && "is-medium",
    e.large && "is-large"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    "button",
    {
      ...e,
      className: t,
      onClick: !e.disabled && e.onClick
    }
  );
}
function Ei(e) {
  const t = [
    "icon",
    e.color && `has-text-${e.color}`,
    e.small && "is-small",
    e.medium && "is-medium",
    e.large && "is-large"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      as: "span",
      rootClassname: t
    }
  );
}
function Wt(e) {
  const { translate: t } = O(), n = [
    "image",
    e.className,
    e.rounded && "is-rounded",
    e.left && "mr-auto",
    e.centered && "mx-auto",
    e.right && "ml-auto",
    e.ratio && `is-${e.ratio}`,
    e.size && `is-${e.size}x${e.size}`
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    "figure",
    {
      ...e,
      title: t(e.title),
      className: n,
      children: /* @__PURE__ */ a.jsx(
        "img",
        {
          width: e.width,
          height: e.height,
          ...e.imgProps || {},
          src: e.src,
          alt: e.alt
        }
      )
    }
  );
}
function Pn(e) {
  const { className: t, style: n } = W(e), { translate: r } = O();
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ...e,
      title: r(e.title),
      className: t,
      style: n,
      children: [
        e.showDelete ? /* @__PURE__ */ a.jsx(
          Ne,
          {
            onClick: e.onDelete
          }
        ) : /* @__PURE__ */ a.jsx(a.Fragment, {}),
        e.icon ? /* @__PURE__ */ a.jsx(a.Fragment, {}) : /* @__PURE__ */ a.jsx("span", { className: "icon mr-1", children: e.icon }),
        e.message ? /* @__PURE__ */ a.jsx("span", { children: r(e.message) }) : typeof e.children == "string" ? /* @__PURE__ */ a.jsx("span", { children: r(e.children) }) : e.children
      ]
    }
  );
}
function Ni(e) {
  const t = [
    "table",
    e.striped ? "is-striped" : "",
    e.narrow ? "is-narrow" : "",
    e.bordered ? "is-bordered" : "",
    e.hoverable ? "is-hoverable" : "",
    e.fullwidth ? "is-fullwidth" : ""
  ].filter(Boolean).join(" "), n = /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: t,
      as: "table"
    }
  );
  return e.scrollable ? /* @__PURE__ */ a.jsx("div", { className: "table-container", children: n }) : n;
}
function Ti(e) {
  const { className: t, style: n } = W(e), { translate: r } = O(), s = [
    e.small && "is-small",
    e.medium && "is-medium",
    e.large && "is-large",
    e.normal && "is-normal"
  ].filter(Boolean).join(" "), u = [
    t,
    s,
    e.hoverable && "is-hoverable",
    e.rounded && "is-rounded",
    e.isDelete && "is-delete"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    C,
    {
      ...e,
      as: e.isDelete ? "a" : "span",
      onClick: !e.disabled && e.onDelete,
      rootClassname: "tag",
      className: u,
      style: n,
      children: [
        e.message ? r(e.message) : typeof e.children == "string" ? r(e.children) : e.children,
        e.withDeleteButton ? /* @__PURE__ */ a.jsx(
          Ne,
          {
            onClick: !e.disabled && e.onDelete,
            className: s
          }
        ) : x
      ]
    }
  );
}
function _i(e) {
  if (e.singleLine) {
    const n = [
      "is-grouped",
      e.className,
      e.disabled && "are-disabled",
      e.fullwidth && "is-fullwidth",
      e.hasAddons && "has-addons"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ a.jsx(
      C,
      {
        ...e,
        rootClassname: "field",
        className: n,
        children: Ot.map(e.children, (r) => St(r) ? /* @__PURE__ */ a.jsx("div", { className: "control", children: r }) : r)
      }
    );
  }
  const t = [
    e.className,
    e.disabled && "are-disabled",
    e.small && "are-small",
    e.medium && "are-medium",
    e.large && "are-large",
    e.fullwidth && "is-fullwidth",
    e.hasAddons && "has-addons"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "tags",
      className: t,
      children: e.children
    }
  );
}
const Ct = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
  7: "h6"
};
function kn(e) {
  var c, h;
  const { translate: t } = O(), n = e.titleSize || 3, r = e.subtitleSize || 5, s = Ct[n], u = Ct[r], l = `title is-${n} ${(c = e.titleProps) == null ? void 0 : c.className} ${e.spaced ? "is-spaced" : ""}`.trim(), d = `subtitle is-${r} ${(h = e.subtitleProps) == null ? void 0 : h.className}`.trim();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    e.title ? ne(
      s,
      {
        ...e.titleProps,
        className: l
      },
      t(e.title)
    ) : x,
    e.subtitle ? ne(
      u,
      {
        ...e.subtitleProps,
        className: d
      },
      t(e.subtitle)
    ) : x
  ] });
}
function Ri(e) {
  const t = Je(e), n = z(e), r = [
    "breadcrumb",
    t,
    n,
    e.hasArrowSeparator && "has-arrow-separator",
    e.hasBulletSeparator && "has-bullet-separator",
    e.hasDotSeparator && "has-dot-separator",
    e.hasSucceedsSeparator && "has-succeeds-separator"
  ].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: r,
      "aria-label": "breadcrumbs",
      as: "nav",
      children: e.children
    }
  );
}
function Oi(e) {
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: e.active ? "is-active" : "",
      as: "li",
      children: /* @__PURE__ */ a.jsx(
        "a",
        {
          ...e.anchorProps || {},
          href: e.href,
          "aria-current": e.active ? "page" : void 0,
          children: e.children
        }
      )
    }
  );
}
function Si(e) {
  const { translate: t } = O();
  return /* @__PURE__ */ a.jsxs(
    C,
    {
      ...e,
      rootClassname: "card",
      as: "div",
      children: [
        e.header ? /* @__PURE__ */ a.jsxs("header", { className: "card-header", children: [
          /* @__PURE__ */ a.jsx("p", { className: "card-header-title", children: t(e.header) }),
          e.hideCollapse ? x : /* @__PURE__ */ a.jsx("button", { className: "card-header-icon", "aria-label": "more options", children: /* @__PURE__ */ a.jsx("span", { className: "icon", children: e.collapseIcon || Ln }) })
        ] }) : x,
        e.image ? /* @__PURE__ */ a.jsx("div", { className: "card-image", children: /* @__PURE__ */ a.jsx(Wt, { ...e.image }) }) : x,
        e.children ? /* @__PURE__ */ a.jsx("div", { className: "card-content", children: typeof e.children == "string" ? t(e.children) : e.children }) : x,
        e.buttons ? /* @__PURE__ */ a.jsx("div", { className: "card-footer", children: e.buttons.map((n, r) => /* @__PURE__ */ ne(
          "a",
          {
            ...n,
            key: n.id || "card-button-" + r,
            className: `card-footer-item ${n.className || ""}`.trim(),
            onClick: n.onClick
          },
          typeof n.text == "string" ? t(n.text) : n.text
        )) }) : x
      ]
    }
  );
}
const Ln = /* @__PURE__ */ a.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    children: /* @__PURE__ */ a.jsx(
      "path",
      {
        d: `M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5
    12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7
    86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`
      }
    )
  }
);
function Pi(e) {
  const { translate: t } = O(), [n, r] = ie(!1), s = hn(null);
  G(() => {
    if (!n)
      return () => {
      };
    const h = (v) => {
      const m = s.current;
      if (!m)
        return;
      const y = v.target;
      m.contains(y) ? y.tagName === "A" && r(!1) : r(!1);
    };
    return document.addEventListener("click", h), () => {
      document.removeEventListener("click", h);
    };
  }, [n]), G(() => {
    e.disabled && n && r(!1);
  }, [n, e.disabled]), G(() => {
    e.forceActive && !n && r(!0), e.forceClosed && n && r(!1);
  }, [n, e.forceActive, e.forceClosed]), G(() => {
    n && e.onOpened && e.onOpened(), !n && e.onClosed && e.onClosed();
  }, [n]);
  const u = [
    "dropdown",
    e.className,
    !e.forceClosed && (n || e.forceActive) && "is-active",
    e.fullwidth && "is-fullwidth",
    e.up && "is-up",
    e.right && "is-right",
    e.hoverable && "is-hoverable"
  ].filter(Boolean).join(" "), l = "dropdown-trigger " + (e.triggerClassname || ""), d = "dropdown-menu " + (e.menuClassname || ""), c = "dropdown-content " + (e.contentClassname || "");
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ...e,
      id: e.id,
      ref: s,
      title: t(e.title),
      className: u,
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: l,
            onClick: () => {
              e.disabled || e.forceActive || e.forceClosed || r(!n);
            },
            children: typeof e.trigger == "function" ? e.trigger({
              isActive: n,
              translate: t
            }) : e.trigger
          }
        ),
        /* @__PURE__ */ a.jsx("div", { className: d, role: "menu", children: /* @__PURE__ */ a.jsx("div", { className: c, children: e.children }) })
      ]
    }
  );
}
function ki(e) {
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "dropdown-divider",
      as: "hr",
      children: /* @__PURE__ */ a.jsx(a.Fragment, {})
    }
  );
}
function Li(e) {
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "dropdown-item",
      as: "div",
      children: e.children
    }
  );
}
function Di(e) {
  return /* @__PURE__ */ a.jsxs(
    C,
    {
      ...e,
      rootClassname: "media",
      as: e.as || "article",
      children: [
        e.image ? /* @__PURE__ */ a.jsx("figure", { className: "media-left", children: /* @__PURE__ */ a.jsx(Wt, { ...e.image }) }) : null,
        e.title ? /* @__PURE__ */ a.jsx("div", { className: "media-content", children: /* @__PURE__ */ a.jsx(kn, { ...e.titles }) }) : null,
        e.children
      ]
    }
  );
}
const Dn = {
  tripped: !1
};
class wt extends ge {
  constructor(t) {
    super(t), this.state = { ...Dn };
  }
  componentDidCatch(t, n) {
    const { id: r } = this.props;
    return console.error(
      `ErrorBoundary [${r}] caught an error:`,
      t,
      n
    ), this.setState({
      tripped: !0
    }), !0;
  }
  render() {
    return this.state.tripped ? x : this.props.children;
  }
}
function An(e) {
  var r;
  const { translate: t } = O();
  if (On(
    "escape",
    () => {
      e.show && e.onClose();
    },
    [],
    !!e.disableEscapeKeyToClose
  ), !e.show || e.disabled)
    return /* @__PURE__ */ a.jsx(a.Fragment, {});
  let n = e.className || "";
  return e.fullwidth && (n += " is-fullwidth"), e.className && (n += " " + e.className), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    e.trigger,
    mn(
      /* @__PURE__ */ a.jsx(wt, { id: "modal-" + e.id, children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          id: e.id,
          className: `modal is-active ${n}`,
          style: e.style,
          onClick: e.onClick,
          children: [
            /* @__PURE__ */ a.jsx("div", { className: "modal-background", onClick: e.onClose }),
            /* @__PURE__ */ a.jsxs("div", { className: "modal-card", children: [
              /* @__PURE__ */ a.jsxs("header", { className: "modal-card-head", children: [
                /* @__PURE__ */ a.jsx("p", { className: "modal-card-title", children: t(e.title) }),
                /* @__PURE__ */ a.jsx(Ne, { onClick: e.onClose })
              ] }),
              /* @__PURE__ */ a.jsx("section", { className: "modal-card-body", children: /* @__PURE__ */ a.jsx(wt, { id: `modal-${e.id}-content`, children: typeof e.children == "string" ? /* @__PURE__ */ a.jsx("p", { children: e.children }) : e.children }) }),
              /* @__PURE__ */ a.jsx("footer", { className: "modal-card-foot buttons is-right", children: (r = e.actions) == null ? void 0 : r.map((s, u) => /* @__PURE__ */ a.jsx(
                Sn,
                {
                  ...s
                },
                u + "-" + s.id
              )) })
            ] })
          ]
        }
      ) }),
      $.CustomModalParentElement,
      e.id
    )
  ] });
}
function Bn(e) {
  const { className: t, style: n } = W(e), r = z(e), { translate: s } = O(), u = [
    t,
    r,
    e.className || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    C,
    {
      ...e,
      rootClassname: "message",
      className: u,
      style: {
        ...n,
        ...e.style || {}
      },
      as: "article",
      children: [
        e.header || e.showDelete ? /* @__PURE__ */ a.jsxs("div", { className: "message-header", children: [
          /* @__PURE__ */ a.jsx("p", { children: e.header ? s(e.header) : "" }),
          e.showDelete ? /* @__PURE__ */ a.jsx(Ne, { onClick: e.onDelete, className: r }) : x
        ] }) : x,
        /* @__PURE__ */ a.jsx("div", { className: "message-body", children: typeof e.children == "string" ? s(e.children) : e.children })
      ]
    }
  );
}
function Ai(e) {
  const { className: t, style: n } = W(e), [r, s] = ie(!1), { fixedTop: u, fixedBottom: l, fixedPaddingTarget: d } = e, c = [
    e.transparent && "is-transparent",
    u && "is-fixed-top",
    l && "is-fixed-bottom",
    e.spaced && "is-spaced",
    e.hasShadow && "has-shadow",
    t,
    e.className
  ].filter(Boolean).join(" ");
  return G(() => {
    var v, m;
    const h = d || "body";
    return u ? ((v = document.querySelector(h)) == null || v.classList.add("has-navbar-fixed-top"), () => {
      var y;
      (y = document.querySelector(h)) == null || y.classList.remove("has-navbar-fixed-top");
    }) : l ? ((m = document.querySelector(h)) == null || m.classList.add("has-navbar-fixed-bottom"), () => {
      var y;
      (y = document.querySelector(h)) == null || y.classList.remove("has-navbar-fixed-bottom");
    }) : () => {
    };
  }, [u, l, d]), /* @__PURE__ */ a.jsxs(
    C,
    {
      ...e,
      rootClassname: "navbar",
      className: c,
      as: "div",
      role: "navigation",
      "aria-label": "main navigation",
      style: {
        ...n,
        ...e.style || {}
      },
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "navbar-brand", children: [
          e.brand ? e.brand : x,
          /* @__PURE__ */ a.jsxs(
            "a",
            {
              role: "button",
              className: "navbar-burger" + (r ? " is-active" : ""),
              "aria-label": "menu",
              "aria-expanded": String(!!r),
              onClick: () => s(!r),
              children: [
                /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true" }),
                /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true" }),
                /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true" }),
                /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "navbar-menu" + (r ? " is-active" : ""), children: [
          /* @__PURE__ */ a.jsx("div", { className: "navbar-start", children: e.startItems || x }),
          /* @__PURE__ */ a.jsx("div", { className: "navbar-end", children: e.endItems || x })
        ] })
      ]
    }
  );
}
function Bi(e) {
  const t = [
    e.selected && "is-selected",
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "navbar-item",
      className: t,
      as: e.as || "a",
      children: e.children
    }
  );
}
function Ii(e) {
  const [t, n] = ie(!1), { translate: r } = O(), s = [
    e.hoverable && "is-hoverable",
    e.up && "has-dropdown-up",
    t && "is-active",
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    C,
    {
      ...e,
      rootClassname: "navbar-item has-dropdown",
      className: s,
      onClick: (u) => {
        var d, c, h;
        const l = !t;
        n(l), (d = e.onClick) == null || d.call(e, u), l ? (c = e.onOpen) == null || c.call(e) : (h = e.onClose) == null || h.call(e);
      },
      as: "div",
      children: [
        /* @__PURE__ */ a.jsx(
          "a",
          {
            className: `navbar-link ${e.arrowless ? "is-arrowless" : ""}`,
            children: typeof e.text == "string" ? r(e.text) : e.text
          }
        ),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `navbar-dropdown ${e.right ? "is-right" : ""}`,
            children: [
              ...e.items || [],
              ...e.children || []
            ]
          }
        )
      ]
    }
  );
}
function $i(e) {
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "navbar-divider",
      as: "hr",
      children: /* @__PURE__ */ a.jsx(a.Fragment, {})
    }
  );
}
var In = typeof global == "object" && global && global.Object === Object && global, $n = typeof self == "object" && self && self.Object === Object && self, Fn = In || $n || Function("return this")(), Ce = Fn.Symbol, zt = Object.prototype, Mn = zt.hasOwnProperty, Wn = zt.toString, he = Ce ? Ce.toStringTag : void 0;
function zn(e) {
  var t = Mn.call(e, he), n = e[he];
  try {
    e[he] = void 0;
    var r = !0;
  } catch {
  }
  var s = Wn.call(e);
  return r && (t ? e[he] = n : delete e[he]), s;
}
var Un = Object.prototype, Yn = Un.toString;
function Gn(e) {
  return Yn.call(e);
}
var Vn = "[object Null]", Hn = "[object Undefined]", Et = Ce ? Ce.toStringTag : void 0;
function Kn(e) {
  return e == null ? e === void 0 ? Hn : Vn : Et && Et in Object(e) ? zn(e) : Gn(e);
}
function qn(e) {
  return e != null && typeof e == "object";
}
var Jn = "[object Symbol]";
function Xn(e) {
  return typeof e == "symbol" || qn(e) && Kn(e) == Jn;
}
var Zn = /\s/;
function Qn(e) {
  for (var t = e.length; t-- && Zn.test(e.charAt(t)); )
    ;
  return t;
}
var pn = /^\s+/;
function ei(e) {
  return e && e.slice(0, Qn(e) + 1).replace(pn, "");
}
function Nt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Tt = NaN, ti = /^[-+]0x[0-9a-f]+$/i, ni = /^0b[01]+$/i, ii = /^0o[0-7]+$/i, ai = parseInt;
function Ye(e) {
  if (typeof e == "number")
    return e;
  if (Xn(e))
    return Tt;
  if (Nt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Nt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ei(e);
  var n = ni.test(e);
  return n || ii.test(e) ? ai(e.slice(2), n ? 2 : 8) : ti.test(e) ? Tt : +e;
}
function ri(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Ge(e, t, n) {
  return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = Ye(n), n = n === n ? n : 0), t !== void 0 && (t = Ye(t), t = t === t ? t : 0), ri(Ye(e), t, n);
}
function Fi(e) {
  var m, y, L, S, H, U, D, T, K, ae;
  const { translate: t } = O(), n = z(e), r = Je(e), s = e.id || "pagination", u = [
    n,
    r,
    e.rounded && "is-rounded",
    e.disabled && "is-disabled",
    e.className
  ].filter(Boolean).join(" ") || "", l = 0;
  let d = 0, c = 0;
  if (e.page)
    typeof ((m = e.page) == null ? void 0 : m.current) == "string" ? c = parseInt(e.page.current || "0") : c = ((y = e.page) == null ? void 0 : y.current) || 0, typeof ((L = e.page) == null ? void 0 : L.total) == "string" ? d = parseInt(e.page.total || "0") : d = ((S = e.page) == null ? void 0 : S.total) || 0;
  else if (e.count) {
    const B = typeof ((H = e.count) == null ? void 0 : H.countPerPage) == "string" ? parseInt(e.count.countPerPage || "1") : ((U = e.count) == null ? void 0 : U.countPerPage) || 1, X = typeof ((D = e.count) == null ? void 0 : D.total) == "string" ? parseInt(e.count.total || "0") : ((T = e.count) == null ? void 0 : T.total) || 0, ve = typeof ((K = e.count) == null ? void 0 : K.skip) == "string" ? parseInt(e.count.skip || "0") : ((ae = e.count) == null ? void 0 : ae.skip) || 0;
    c = Math.floor(ve / B) + 1, d = Math.floor(X / B) + 1;
  }
  if (!e.showEvenIfOnlyOnePage && d === l)
    return x;
  function h(B) {
    B = Ge(B - 1, l, d), e.onPageChange(B);
  }
  function v(B, X) {
    return typeof B == "function" ? B(X) : t(B);
  }
  return /* @__PURE__ */ a.jsxs(
    C,
    {
      ...e,
      id: s,
      rootClassname: "pagination",
      className: u,
      as: "nav",
      role: "navigation",
      "aria-label": "pagination",
      children: [
        e.hidePrevNext ? x : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            "a",
            {
              id: s + "-prev",
              className: "pagination-previous",
              disabled: e.disabled || c === l,
              onClick: !e.disabled && c !== l && (() => {
                h(c - 1);
              }),
              children: v(
                e.nextText || "Previous page",
                c - 1
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "a",
            {
              id: s + "-next",
              className: "pagination-next",
              disabled: e.disabled || c === d,
              onClick: !e.disabled && c !== d && (() => {
                h(c + 1);
              }),
              children: v(
                e.nextText || "Next page",
                c + 1
              )
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("ul", { className: "pagination-list", children: [
          e.hideFirstLast ? x : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "pagination-link",
              "aria-label": "Goto page 1",
              title: v(
                e.firstPageTitle || "Goto page 1",
                l
              ),
              disabled: e.disabled || c === l,
              onClick: !e.disabled && c !== l && (() => {
                h(l);
              }),
              children: l
            }
          ) }),
          e.hideEllipsis ? x : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx("span", { className: "pagination-ellipsis", children: "…" }) }),
          c !== l ? /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "pagination-link",
              "aria-label": `Goto page ${c - 1}`,
              title: v(
                e.firstPageTitle || `Goto page ${c - 1}`,
                c - 1
              ),
              disabled: e.disabled,
              onClick: !e.disabled && (() => {
                h(c - 1);
              }),
              children: Ge(
                c - 1,
                d,
                l
              )
            }
          ) }) : x,
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "pagination-link is-current",
              "aria-label": `Page ${c}`,
              title: v(
                e.currentPageTitle || `Goto page ${c}`,
                c
              ),
              "aria-current": "page",
              disabled: e.disabled,
              children: c
            }
          ) }),
          c !== d ? /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "pagination-link",
              "aria-label": `Goto page ${c + 1}`,
              title: v(
                e.firstPageTitle || `Goto page ${c + 1}`,
                c + 1
              ),
              disabled: e.disabled,
              onClick: !e.disabled && (() => {
                h(c + 1);
              }),
              children: Ge(
                c + 1,
                d,
                l
              )
            }
          ) }) : x,
          e.hideEllipsis ? x : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx("span", { className: "pagination-ellipsis", children: "…" }) }),
          e.hideFirstLast ? x : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "pagination-link",
              "aria-label": `Goto page ${d}`,
              title: v(
                e.lastPageTitle || `Goto page ${d}`,
                d
              ),
              disabled: e.disabled || c === d,
              onClick: !e.disabled && c !== d && (() => {
                h(d);
              }),
              children: d
            }
          ) })
        ] })
      ]
    }
  );
}
function si({ onClick: e, icon: t, ...n }) {
  const { translate: r } = O(), s = t ? /* @__PURE__ */ a.jsx("span", { className: "icon is-small", children: t }) : x;
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...n,
      rootClassname: "",
      as: "li",
      children: /* @__PURE__ */ a.jsxs("a", { onClick: e, children: [
        s,
        n.children || /* @__PURE__ */ a.jsx("span", { children: r(n.text) })
      ] })
    }
  );
}
function li(e, t) {
  if (t == null)
    return null;
  if (typeof t == "number")
    return t;
  const n = e.findIndex((r) => r.value === t);
  return n !== -1 ? n : e.findIndex((r) => r.text === t) || 0;
}
function Mi(e) {
  var l;
  const [t, n] = ie(
    li(e.items || [], e.defaultActive || 0)
  ), r = z(e), u = [
    Je(e),
    r,
    e.boxed && "is-boxed",
    e.toggle && "is-toggle",
    !e.toggle && e.rounded && "is-rounded",
    e.toggle && e.rounded && "is-toggle-rounded",
    e.fullwidth && "is-fullwidth",
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "tabs",
      className: u,
      as: "div",
      children: /* @__PURE__ */ a.jsx("ul", { children: e.children || ((l = e.items) == null ? void 0 : l.map((d, c) => /* @__PURE__ */ ne(
        si,
        {
          ...d,
          key: d + "-" + c,
          active: t === c,
          onClick: (h) => {
            var v, m;
            (v = d == null ? void 0 : d.onClick) == null || v.call(d, h), n(c), (m = e.onTabChange) == null || m.call(e, {
              index: c,
              value: d.value,
              item: d,
              event: h
            });
          }
        }
      ))) })
    }
  );
}
function _t(e) {
  const { translate: t } = O(), { className: n, style: r } = W(e), s = [
    "help",
    e.className,
    n,
    e.centered && "has-text-centered",
    e.right && "has-text-right"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    "p",
    {
      className: s,
      style: r,
      title: e.title,
      children: t(e.text)
    },
    e.text
  );
}
function Ut({ children: e, ...t }) {
  var u;
  const { translate: n } = O(), r = z(t), s = [
    t.className,
    r,
    t.fullwidth && "is-fullwidth is-expanded",
    t.expanded && "is-expanded",
    t.icon && "has-icons-left",
    t.iconRight && "has-icons-right",
    t.loading && "is-loading"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    t.label ? /* @__PURE__ */ a.jsx("label", { className: "label", children: n(t.label) }) : x,
    /* @__PURE__ */ a.jsxs(
      C,
      {
        ...t,
        rootClassname: "control",
        className: s,
        children: [
          t.icon ? /* @__PURE__ */ a.jsx(
            "span",
            {
              className: `icon is-${t.iconSize || "small"} is-left`,
              children: t.icon
            }
          ) : x,
          e,
          t.iconRight ? /* @__PURE__ */ a.jsx(
            "span",
            {
              className: `icon is-${t.iconSize || "small"} is-right`,
              children: t.iconRight
            }
          ) : x
        ]
      }
    ),
    t.help ? /* @__PURE__ */ a.jsx(a.Fragment, { children: Array.isArray(t.help) ? t.help.map((l) => typeof l == "string" ? /* @__PURE__ */ a.jsx("p", { className: "help", children: n(l) }, l) : l.text ? /* @__PURE__ */ a.jsx(_t, { ...l }, l.text) : l) : (u = t.help) != null && u.text ? /* @__PURE__ */ a.jsx(_t, { ...t.help }) : typeof t.help == "string" ? /* @__PURE__ */ a.jsx("p", { className: "help", children: n(t.help) }) : /* @__PURE__ */ a.jsx("p", { className: "help", children: t.help }) }) : x,
    t.error ? /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("p", { className: "help is-danger", children: t.error instanceof Array ? t.error.map((l, d) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("span", { children: n(l) }),
      d !== t.error.length - 1 && /* @__PURE__ */ a.jsx("br", {})
    ] })) : n(t.error) }) }) : x
  ] });
}
function oi(e) {
  const { translate: t } = O(), n = z(e), { className: r, style: s } = W(e), u = [
    e.textarea ? "textarea" : "input",
    n,
    e.className,
    r,
    e.fullwidth && "is-fullwidth",
    e.disabled && "is-disabled",
    e.active && "is-active",
    e.hovered && "is-hovered",
    e.focused && "is-focused",
    e.loading && "is-loading",
    e.readonly && "is-readonly",
    e.static && "is-static"
  ].filter(Boolean).join(" "), l = e.disabled || e.readonly || e.static || e.loading;
  return /* @__PURE__ */ a.jsx(
    Ut,
    {
      icon: e.icon,
      iconRight: e.iconRight,
      label: e.label,
      help: e.help,
      error: e.showErrorWhileEmpty || e.value ? e.errorMessage : void 0,
      fullwidth: e.fullwidth,
      loading: e.loading,
      small: e.small,
      medium: e.medium,
      large: e.large,
      iconSize: e.small ? "small" : e.medium ? void 0 : e.large ? "medium" : "small",
      children: ne(
        // Tag name
        e.textarea ? "textarea" : "input",
        // Props
        {
          ...Ft(e),
          id: e.id,
          className: u,
          name: t(e.name),
          placeholder: t(e.placeholder),
          onClick: !l && e.onClick || void 0,
          onChange: !l && ((d) => {
            var c, h;
            e.type === "number" ? (c = e.onChange) == null || c.call(e, {
              value: parseFloat(d.currentTarget.value)
            }, d) : (h = e.onChange) == null || h.call(e, {
              value: d.currentTarget.value
            }, d);
          }) || void 0,
          onKeyDown: !l && ((d) => {
            var c, h, v;
            d.key === "Escape" ? (d.preventDefault(), d.currentTarget.blur(), (c = e.onEscape) == null || c.call(e, d)) : d.key === "Enter" && ((h = e.onEnter) == null || h.call(e, d)), (v = e.onKeyDown) == null || v.call(e, d);
          }) || void 0,
          style: s
        }
      )
    }
  );
}
function Wi(e) {
  var v;
  const { translate: t } = O(), { className: n, style: r } = W(e), s = z(e), u = [
    "select",
    e.className,
    n,
    s,
    e.disabled && "is-disabled",
    e.multiple && "is-multiple",
    e.fullwidth && "is-fullwidth",
    e.rounded && "is-rounded",
    e.active && "is-active",
    e.hovered && "is-hovered",
    e.focused && "is-focused",
    e.loading && "is-loading"
  ].filter(Boolean).join(" "), l = e.disabled, d = {}, c = {}, h = [];
  return (v = e.options) == null || v.forEach((m, y) => {
    const L = m.text || m.value;
    if (d[m.value] && console.warn(`Duplicate 'value' attribute found in options: ${m.value}`), d[m.value] = m, m.optGroup) {
      c[m.optGroup] || (c[m.optGroup] = []), c[m.optGroup].push(m);
      return;
    }
    const S = /* @__PURE__ */ a.jsx(
      "option",
      {
        id: m.id,
        value: m.value,
        children: t(L)
      },
      m.key !== void 0 ? m.key : m.value + "-" + y
    );
    h.push(S);
  }), /* @__PURE__ */ a.jsx(
    Ut,
    {
      label: e.label,
      fullwidth: e.fullwidth,
      icon: e.icon,
      iconRight: e.iconRight,
      loading: e.loading,
      iconSize: e.small ? "small" : e.medium ? "medium" : e.large ? "large" : void 0,
      children: /* @__PURE__ */ a.jsx(
        "div",
        {
          className: u,
          style: r,
          children: /* @__PURE__ */ a.jsxs(
            "select",
            {
              id: e.id,
              disabled: e.disabled,
              multiple: e.multiple,
              onChange: !l && ((m) => e.onChange && e.onChange(
                d[m.target.value],
                m
              )),
              value: e.value,
              defaultValue: e.defaultValue,
              size: e.size !== void 0 ? parseInt(e.size) : void 0,
              children: [
                Object.keys(c).map((m) => /* @__PURE__ */ a.jsx(
                  "optgroup",
                  {
                    label: m,
                    children: c[m].map((y, L) => {
                      const S = y.text || y.value;
                      return /* @__PURE__ */ a.jsx(
                        "option",
                        {
                          id: y.id,
                          value: y.value,
                          children: t(S)
                        },
                        y.key !== void 0 ? y.key : y.value + "-" + L
                      );
                    })
                  },
                  m
                )),
                h
              ]
            }
          )
        }
      )
    }
  );
}
function zi(e) {
  return /* @__PURE__ */ a.jsx(
    oi,
    {
      ...e,
      textarea: !0
    }
  );
}
function Ui(e) {
  const t = [
    e.fluid && "is-fluid",
    e.widescreen && "is-widescreen",
    e.maxWidescreen && "is-max-idescreen",
    e.fullhd && "is-fullhd",
    e.desktop && "is-max-desktop",
    e.tablet && "is-max-tablet",
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "container",
      className: t,
      children: e.children
    }
  );
}
function Yi(e) {
  const t = [
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "footer",
      className: t,
      as: e.as || "footer",
      children: e.children
    }
  );
}
function Gi(e) {
  const { translate: t } = O(), { className: n, style: r } = W(e), s = [
    e.className,
    n,
    e.small && "is-small",
    e.medium && "is-medium",
    e.large && "is-large",
    e.halfHeight && "is-halfheight",
    e.fullHeight && "is-fullheight",
    e.fullHeightWithNavbar && "is-fullheight-with-navbar"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    C,
    {
      ...e,
      rootClassname: "hero",
      className: s,
      style: r,
      as: e.as || "section",
      children: [
        e.header ? /* @__PURE__ */ a.jsx("div", { className: "hero-head", children: e.header }) : x,
        /* @__PURE__ */ a.jsx("div", { className: "hero-body", children: typeof e.children == "string" ? t(e.children) : e.children }),
        e.footer ? /* @__PURE__ */ a.jsx("div", { className: "hero-foot", children: e.footer }) : x
      ]
    }
  );
}
function ci(e) {
  const t = [
    e.className,
    e.centered && "has-text-centered"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "CHANGE_ME",
      className: t,
      as: "div",
      children: e.children
    }
  );
}
function Vi(e) {
  var n;
  const t = [
    e.className,
    e.mobile && "is-mobile",
    e.left === !0 && "level-left",
    e.right === !0 && "level-right"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    C,
    {
      ...e,
      rootClassname: "CHANGE_ME",
      className: t,
      as: e.as || "div",
      children: [
        e.left !== void 0 && e.left !== !0 ? /* @__PURE__ */ a.jsx("div", { className: "level-left", children: e.left }) : x,
        e.children || x,
        ((n = e.items) == null ? void 0 : n.map((r, s) => /* @__PURE__ */ a.jsx(ci, { children: r }, s))) || x,
        e.right !== void 0 && e.right !== !0 ? /* @__PURE__ */ a.jsx("div", { className: "level-right", children: e.right }) : x
      ]
    }
  );
}
function Hi(e) {
  const t = z(e), n = [
    e.className,
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    C,
    {
      ...e,
      rootClassname: "section",
      className: n,
      as: e.as || "section",
      children: e.children
    }
  );
}
const we = "primary", He = 1e4, di = 500, J = class J extends ge {
  constructor(t) {
    super(t), this.state = {
      toasts: []
    }, this.onNewToast = this.onNewToast.bind(this), this.onExpiredToast = this.onExpiredToast.bind(this);
  }
  componentDidMount() {
    J.ToastEvents.on("new", this.onNewToast), J.ToastEvents.on("expired", this.onExpiredToast);
  }
  componentWillUnmount() {
    J.ToastEvents.off("new", this.onNewToast), J.ToastEvents.off("expired", this.onExpiredToast);
  }
  onNewToast(t) {
    this.setState({
      toasts: [
        ...this.state.toasts,
        t
      ]
    });
  }
  onExpiredToast(t) {
    this.setState({
      toasts: this.state.toasts.filter((n) => n !== t)
    });
  }
  render() {
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("div", { className: "toasts", children: this.state.toasts.map((t) => /* @__PURE__ */ a.jsx(ui, { toast: t }, t.id)) }),
      this.props.children || x
    ] });
  }
};
k(J, "ToastEvents", new qe());
let V = J;
class ui extends Rn {
  constructor(t) {
    super(t), this.state = {
      animating: !1,
      expiring: !1
    }, this.onExpiring = this.onExpiring.bind(this);
  }
  componentDidMount() {
    super.componentDidMount(), V.ToastEvents.on("expiring", this.onExpiring), this.props.toast._emitMounted(), window.requestAnimationFrame(() => {
      this.setState({ animating: !0 });
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), V.ToastEvents.off("expiring", this.onExpiring);
  }
  onExpiring(t) {
    t === this.props.toast && this.setState({ expiring: !0 });
  }
  getProgressbar() {
    const { toast: t } = this.props, { animating: n } = this.state;
    if (!(t != null && t.options))
      return x;
    const {
      durationMs: r = He,
      color: s = we,
      hideProgressBar: u = !1
    } = t.options;
    return u || r <= 0 ? x : /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "multi-progress is-small",
        children: /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `progress-item is-${s}`,
            style: {
              transition: `width ${r + 500}ms linear`,
              width: n ? "0%" : "100%"
            }
          }
        )
      },
      "toast-progressbar"
    );
  }
  getButtons() {
    var t, n;
    return (n = (t = this.props.toast) == null ? void 0 : t.options) == null ? void 0 : n.buttons;
  }
  render() {
    const { toast: t } = this.props, { expiring: n } = this.state;
    if (!(t != null && t.options))
      return x;
    const {
      title: r,
      message: s,
      color: u = we,
      hideCloseButton: l
    } = t.options, { className: d, style: c } = Mt({ color: u }), h = [
      "toast",
      d,
      n && "is-expiring"
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ a.jsxs(
      Bn,
      {
        id: t.id,
        color: u,
        className: h,
        header: r,
        showDelete: !l,
        onDelete: () => t.remove(),
        style: c,
        children: [
          /* @__PURE__ */ a.jsx("p", { children: this.translate(s) }),
          this.getProgressbar(),
          this.getButtons()
        ]
      },
      t.id
    ) : /* @__PURE__ */ a.jsxs(
      Pn,
      {
        id: t.id,
        color: u,
        className: h,
        showDelete: !l,
        onDelete: () => t.remove(),
        style: c,
        children: [
          /* @__PURE__ */ a.jsx("p", { children: this.translate(s) }),
          this.getProgressbar(),
          this.getButtons()
        ]
      },
      t.id
    );
  }
}
class fi {
  constructor(t) {
    k(this, "id");
    k(this, "startTime");
    k(this, "expiringTimeout");
    k(this, "expireTimeout");
    k(this, "options");
    k(this, "callbacks", []);
    this.startTime = Date.now(), typeof t == "string" ? (this.id = String(Date.now()), this.options = {
      id: this.id,
      message: t,
      color: we,
      durationMs: He
    }) : (this.id = String(t.id) || String(Date.now()), this.options = {
      color: we,
      durationMs: He,
      ...t,
      id: this.id
    }), this.options.durationMs > 0 && (this.expiringTimeout = setTimeout(() => {
      this.onExpiring();
    }, this.options.durationMs - di), this.expireTimeout = setTimeout(() => {
      this.onExpired();
    }, this.options.durationMs)), V.ToastEvents.emit("new", this);
  }
  // Abstract method:
  onMounted(t) {
    return this.callbacks.push(t), () => {
      this.callbacks = this.callbacks.filter((n) => n !== t);
    };
  }
  _emitMounted() {
    this.callbacks.forEach((t) => t()), this.callbacks = [];
  }
  onExpiring() {
    V.ToastEvents.emit("expiring", this);
  }
  onExpired() {
    V.ToastEvents.emit("expired", this);
  }
  remove() {
    clearTimeout(this.expiringTimeout), clearTimeout(this.expireTimeout), this.onExpired();
  }
}
function Ki(e) {
  return new fi(e);
}
const M = class M extends ge {
  static cancelAll() {
    M.ConfirmEvents.emit("cancel");
  }
  static confirm(t) {
    M.ConfirmEvents.emit("new", t);
  }
  constructor(t) {
    super(t), this.state = {
      confirm: null
    }, this.handleNewConfirmEvent = this.handleNewConfirmEvent.bind(this), this.handleCancelEvent = this.handleCancelEvent.bind(this), this.onClose = this.onClose.bind(this);
  }
  componentDidMount() {
    M.ConfirmEvents.on("new", this.handleNewConfirmEvent), M.ConfirmEvents.on("cancel", this.handleCancelEvent);
  }
  componentWillUnmount() {
    M.ConfirmEvents.off("new", this.handleNewConfirmEvent), M.ConfirmEvents.off("cancel", this.handleCancelEvent);
  }
  handleNewConfirmEvent(t) {
    this.setState({ confirm: t });
  }
  handleCancelEvent() {
    this.setState({ confirm: null });
  }
  getButtons() {
    const { confirm: t } = this.state;
    if (!t)
      return [];
    const n = t.customButtons || [];
    return !this.props.alwaysHideCancelButton && !t.hideCancelButton && n.push({
      light: !0,
      id: this.props.cancelButtonId || "confirm-cancel-button",
      text: this.props.defaultCancelButtonText || "Cancel",
      icon: this.props.cancelButtonIcon,
      onClick: this.onClose
    }), t.isDelete ? n.push({
      color: "danger",
      id: this.props.deleteButtonId || "confirm-delete-button",
      text: t.confirmText || this.props.defaultDeleteButtonText || "Delete",
      icon: this.props.deleteButtonIcon,
      onClick: () => this.onConfirm()
    }) : n.push({
      color: t.isDelete ? "danger" : "primary",
      id: this.props.confirmButtonId || "confirm-confirm-button",
      text: t.confirmText || this.props.defaultConfirmButtonText || "Confirm",
      icon: this.props.confirmButtonIcon,
      onClick: () => this.onConfirm()
    }), n;
  }
  onClose() {
    this.setState({ confirm: null });
  }
  onConfirm() {
    var t;
    (t = this.state.confirm) == null || t.successCallback(), this.setState({ confirm: null });
  }
  render() {
    var t, n;
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      this.props.children || x,
      /* @__PURE__ */ a.jsx(
        An,
        {
          id: this.props.id || "confirm-modal",
          show: !!this.state.confirm,
          title: ((t = this.state.confirm) == null ? void 0 : t.title) || this.props.defaultTitle,
          onClose: this.onClose,
          actions: this.getButtons(),
          children: (n = this.state.confirm) == null ? void 0 : n.text
        }
      )
    ] });
  }
};
k(M, "ConfirmEvents", new qe());
let me = M;
async function qi(e, t, n) {
  return new Promise((r, s) => {
    if (typeof e == "string") {
      me.confirm({
        text: e,
        successCallback: async function() {
          await (t == null ? void 0 : t()), r(null);
        },
        cancelCallback: async function() {
          await (n == null ? void 0 : n()), s(
            new Error("CANCELLED")
          );
        }
      });
      return;
    }
    me.confirm({
      ...e,
      successCallback: async function() {
        var l;
        await ((l = e.successCallback) == null ? void 0 : l.call(e)), await (t == null ? void 0 : t()), r(null);
      },
      cancelCallback: async function() {
        var l;
        await ((l = e.cancelCallback) == null ? void 0 : l.call(e)), await (n == null ? void 0 : n()), s(
          new Error("CANCELLED")
        );
      }
    });
  });
}
function hi(e) {
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: e.children });
}
function Ji(e) {
  return /* @__PURE__ */ a.jsx(V, { children: /* @__PURE__ */ a.jsx(hi, { children: /* @__PURE__ */ a.jsx(me, { children: e.children }) }) });
}
const mi = { cursor: "copy" };
function Xi(e) {
  const { translate: t } = O(), {
    id: n,
    text: r,
    disabled: s,
    onCopied: u,
    style: l,
    noCursor: d,
    className: c,
    fullwidth: h,
    title: v,
    useDoubleClick: m,
    useRightClick: y,
    children: L,
    onClick: S,
    ...H
  } = e, U = t(r);
  function D() {
    s || (navigator.clipboard.writeText(U), u == null || u());
  }
  const T = {
    ...l || {},
    ...d ? {} : mi
  };
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      ...H,
      id: n,
      style: T,
      className: c + (h ? " is-fullwidth" : ""),
      title: v ? t(v) : U,
      onContextMenu: y ? D : void 0,
      onDoubleClick: m ? D : void 0,
      onClick: !m && !y ? (K) => {
        D(), S == null || S(K);
      } : S,
      children: L
    }
  );
}
function Zi({ children: e, time: t = 500 }) {
  const [n, r] = ie(!1);
  return G(() => {
    const s = setTimeout(() => {
      r(!0);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [t]), n ? e : x;
}
export {
  ji as Block,
  yi as Box,
  Ri as Breadcrumb,
  Oi as BreadcrumbItem,
  bi as BulmaForm,
  $ as BulmaFormSettings,
  Sn as Button,
  Ci as Buttons,
  Si as Card,
  me as ConfirmRoot,
  Ui as Container,
  wi as Content,
  Ut as Control,
  Xi as Copiable,
  Ne as Delete,
  Pi as Dropdown,
  ki as DropdownDivider,
  Li as DropdownItem,
  wt as ErrorBoundary,
  Yi as Footer,
  _t as Help,
  Gi as Hero,
  Ei as Icon,
  Wt as Image,
  oi as Input,
  Vi as Level,
  ci as LevelItem,
  Di as Media,
  Bn as Message,
  An as Modal,
  Ai as Navbar,
  $i as NavbarDivider,
  Ii as NavbarDropdown,
  Bi as NavbarItem,
  Pn as Notification,
  Fi as Pagination,
  hi as PromptRoot,
  Ji as Roots,
  Hi as Section,
  Wi as Select,
  Zi as ShowAfterNSeconds,
  si as Tab,
  Ni as Table,
  Mi as Tabs,
  Ti as Tag,
  _i as Tags,
  zi as Textarea,
  kn as Titles,
  fi as Toast,
  V as ToastsRoot,
  qi as confirm,
  Ki as newToast
};