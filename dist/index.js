/* Copyright © 2025 Navarrotech */
var Vr = Object.defineProperty;
var Yr = (e, t, n) => t in e ? Vr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var F = (e, t, n) => Yr(e, typeof t != "symbol" ? t + "" : t, n);
import On, { Component as Se, useState as ge, useEffect as X, createElement as he, useCallback as Kr, Children as Sn, isValidElement as Pn, useRef as qr } from "react";
import { createPortal as Jr } from "react-dom";
class sc extends Se {
  constructor(t) {
    super(t);
  }
  componentDidMount() {
    this.setState({
      value: this.props.defaultValue
    });
  }
}
function Xr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ut = { exports: {} }, fe = typeof Reflect == "object" ? Reflect : null, Kt = fe && typeof fe.apply == "function" ? fe.apply : function(t, n, r) {
  return Function.prototype.apply.call(t, n, r);
}, De;
fe && typeof fe.ownKeys == "function" ? De = fe.ownKeys : Object.getOwnPropertySymbols ? De = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : De = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Zr(e) {
  console && console.warn && console.warn(e);
}
var $n = Number.isNaN || function(t) {
  return t !== t;
};
function T() {
  T.init.call(this);
}
ut.exports = T;
ut.exports.once = ti;
T.EventEmitter = T;
T.prototype._events = void 0;
T.prototype._eventsCount = 0;
T.prototype._maxListeners = void 0;
var qt = 10;
function Me(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(T, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return qt;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || $n(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    qt = e;
  }
});
T.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
T.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || $n(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function An(e) {
  return e._maxListeners === void 0 ? T.defaultMaxListeners : e._maxListeners;
}
T.prototype.getMaxListeners = function() {
  return An(this);
};
T.prototype.emit = function(t) {
  for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
  var s = t === "error", l = this._events;
  if (l !== void 0)
    s = s && l.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var o;
    if (n.length > 0 && (o = n[0]), o instanceof Error)
      throw o;
    var c = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw c.context = o, c;
  }
  var u = l[t];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    Kt(u, this, n);
  else
    for (var h = u.length, v = Fn(u, h), r = 0; r < h; ++r)
      Kt(v[r], this, n);
  return !0;
};
function Rn(e, t, n, r) {
  var s, l, o;
  if (Me(n), l = e._events, l === void 0 ? (l = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (l.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    n.listener ? n.listener : n
  ), l = e._events), o = l[t]), o === void 0)
    o = l[t] = n, ++e._eventsCount;
  else if (typeof o == "function" ? o = l[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), s = An(e), s > 0 && o.length > s && !o.warned) {
    o.warned = !0;
    var c = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = o.length, Zr(c);
  }
  return e;
}
T.prototype.addListener = function(t, n) {
  return Rn(this, t, n, !1);
};
T.prototype.on = T.prototype.addListener;
T.prototype.prependListener = function(t, n) {
  return Rn(this, t, n, !0);
};
function Qr() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Ln(e, t, n) {
  var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, s = Qr.bind(r);
  return s.listener = n, r.wrapFn = s, s;
}
T.prototype.once = function(t, n) {
  return Me(n), this.on(t, Ln(this, t, n)), this;
};
T.prototype.prependOnceListener = function(t, n) {
  return Me(n), this.prependListener(t, Ln(this, t, n)), this;
};
T.prototype.removeListener = function(t, n) {
  var r, s, l, o, c;
  if (Me(n), s = this._events, s === void 0)
    return this;
  if (r = s[t], r === void 0)
    return this;
  if (r === n || r.listener === n)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, r.listener || n));
  else if (typeof r != "function") {
    for (l = -1, o = r.length - 1; o >= 0; o--)
      if (r[o] === n || r[o].listener === n) {
        c = r[o].listener, l = o;
        break;
      }
    if (l < 0)
      return this;
    l === 0 ? r.shift() : pr(r, l), r.length === 1 && (s[t] = r[0]), s.removeListener !== void 0 && this.emit("removeListener", t, c || n);
  }
  return this;
};
T.prototype.off = T.prototype.removeListener;
T.prototype.removeAllListeners = function(t) {
  var n, r, s;
  if (r = this._events, r === void 0)
    return this;
  if (r.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[t]), this;
  if (arguments.length === 0) {
    var l = Object.keys(r), o;
    for (s = 0; s < l.length; ++s)
      o = l[s], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = r[t], typeof n == "function")
    this.removeListener(t, n);
  else if (n !== void 0)
    for (s = n.length - 1; s >= 0; s--)
      this.removeListener(t, n[s]);
  return this;
};
function In(e, t, n) {
  var r = e._events;
  if (r === void 0)
    return [];
  var s = r[t];
  return s === void 0 ? [] : typeof s == "function" ? n ? [s.listener || s] : [s] : n ? ei(s) : Fn(s, s.length);
}
T.prototype.listeners = function(t) {
  return In(this, t, !0);
};
T.prototype.rawListeners = function(t) {
  return In(this, t, !1);
};
T.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Dn.call(e, t);
};
T.prototype.listenerCount = Dn;
function Dn(e) {
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
T.prototype.eventNames = function() {
  return this._eventsCount > 0 ? De(this._events) : [];
};
function Fn(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r)
    n[r] = e[r];
  return n;
}
function pr(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function ei(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function ti(e, t) {
  return new Promise(function(n, r) {
    function s(o) {
      e.removeListener(t, l), r(o);
    }
    function l() {
      typeof e.removeListener == "function" && e.removeListener("error", s), n([].slice.call(arguments));
    }
    kn(e, t, l, { once: !0 }), t !== "error" && ni(e, s, { once: !0 });
  });
}
function ni(e, t, n) {
  typeof e.on == "function" && kn(e, "error", t, n);
}
function kn(e, t, n, r) {
  if (typeof e.on == "function")
    r.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function s(l) {
      r.once && e.removeEventListener(t, s), n(l);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var ri = ut.exports;
const dt = /* @__PURE__ */ Xr(ri), ii = (e) => e;
class z {
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
F(z, "translationFunction", ii), F(z, "language", ""), F(z, "events", new dt()), // ////////////////////////// //
//    Targets and defaults    //
// ////////////////////////// //
F(z, "CustomErrorBoundary", null), F(z, "CustomModalParentElement", document.getElementById("body"));
var it = { exports: {} }, we = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function ai() {
  if (Jt) return we;
  Jt = 1;
  var e = On, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(c, u, h) {
    var v, m = {}, x = null, R = null;
    h !== void 0 && (x = "" + h), u.key !== void 0 && (x = "" + u.key), u.ref !== void 0 && (R = u.ref);
    for (v in u) r.call(u, v) && !l.hasOwnProperty(v) && (m[v] = u[v]);
    if (c && c.defaultProps) for (v in u = c.defaultProps, u) m[v] === void 0 && (m[v] = u[v]);
    return { $$typeof: t, type: c, key: x, ref: R, props: m, _owner: s.current };
  }
  return we.Fragment = n, we.jsx = o, we.jsxs = o, we;
}
var Ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function si() {
  return Xt || (Xt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = On, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), L = Symbol.iterator, H = "@@iterator";
    function I(i) {
      if (i === null || typeof i != "object")
        return null;
      var d = L && i[L] || i[H];
      return typeof d == "function" ? d : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(i) {
      {
        for (var d = arguments.length, f = new Array(d > 1 ? d - 1 : 0), g = 1; g < d; g++)
          f[g - 1] = arguments[g];
        ce("error", i, f);
      }
    }
    function ce(i, d, f) {
      {
        var g = O.ReactDebugCurrentFrame, C = g.getStackAddendum();
        C !== "" && (d += "%s", f = f.concat([C]));
        var _ = f.map(function(j) {
          return String(j);
        });
        _.unshift("Warning: " + d), Function.prototype.apply.call(console[i], console, _);
      }
    }
    var $e = !1, B = !1, be = !1, He = !1, gr = !1, Tt;
    Tt = Symbol.for("react.module.reference");
    function vr(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === r || i === l || gr || i === s || i === h || i === v || He || i === R || $e || B || be || typeof i == "object" && i !== null && (i.$$typeof === x || i.$$typeof === m || i.$$typeof === o || i.$$typeof === c || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Tt || i.getModuleId !== void 0));
    }
    function br(i, d, f) {
      var g = i.displayName;
      if (g)
        return g;
      var C = d.displayName || d.name || "";
      return C !== "" ? f + "(" + C + ")" : f;
    }
    function _t(i) {
      return i.displayName || "Context";
    }
    function U(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case l:
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
          case c:
            var d = i;
            return _t(d) + ".Consumer";
          case o:
            var f = i;
            return _t(f._context) + ".Provider";
          case u:
            return br(i, i.render, "ForwardRef");
          case m:
            var g = i.displayName || null;
            return g !== null ? g : U(i.type) || "Memo";
          case x: {
            var C = i, _ = C._payload, j = C._init;
            try {
              return U(j(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var p = Object.assign, ye = 0, Et, Nt, Ot, St, Pt, $t, At;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function yr() {
      {
        if (ye === 0) {
          Et = console.log, Nt = console.info, Ot = console.warn, St = console.error, Pt = console.group, $t = console.groupCollapsed, At = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Rt,
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
        ye++;
      }
    }
    function xr() {
      {
        if (ye--, ye === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: p({}, i, {
              value: Et
            }),
            info: p({}, i, {
              value: Nt
            }),
            warn: p({}, i, {
              value: Ot
            }),
            error: p({}, i, {
              value: St
            }),
            group: p({}, i, {
              value: Pt
            }),
            groupCollapsed: p({}, i, {
              value: $t
            }),
            groupEnd: p({}, i, {
              value: At
            })
          });
        }
        ye < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ve = O.ReactCurrentDispatcher, Ye;
    function Ae(i, d, f) {
      {
        if (Ye === void 0)
          try {
            throw Error();
          } catch (C) {
            var g = C.stack.trim().match(/\n( *(at )?)/);
            Ye = g && g[1] || "";
          }
        return `
` + Ye + i;
      }
    }
    var Ke = !1, Re;
    {
      var jr = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new jr();
    }
    function Lt(i, d) {
      if (!i || Ke)
        return "";
      {
        var f = Re.get(i);
        if (f !== void 0)
          return f;
      }
      var g;
      Ke = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = Ve.current, Ve.current = null, yr();
      try {
        if (d) {
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
            } catch (k) {
              g = k;
            }
            Reflect.construct(i, [], j);
          } else {
            try {
              j.call();
            } catch (k) {
              g = k;
            }
            i.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            g = k;
          }
          i();
        }
      } catch (k) {
        if (k && g && typeof k.stack == "string") {
          for (var y = k.stack.split(`
`), D = g.stack.split(`
`), P = y.length - 1, $ = D.length - 1; P >= 1 && $ >= 0 && y[P] !== D[$]; )
            $--;
          for (; P >= 1 && $ >= 0; P--, $--)
            if (y[P] !== D[$]) {
              if (P !== 1 || $ !== 1)
                do
                  if (P--, $--, $ < 0 || y[P] !== D[$]) {
                    var M = `
` + y[P].replace(" at new ", " at ");
                    return i.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", i.displayName)), typeof i == "function" && Re.set(i, M), M;
                  }
                while (P >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        Ke = !1, Ve.current = _, xr(), Error.prepareStackTrace = C;
      }
      var de = i ? i.displayName || i.name : "", ee = de ? Ae(de) : "";
      return typeof i == "function" && Re.set(i, ee), ee;
    }
    function wr(i, d, f) {
      return Lt(i, !1);
    }
    function Cr(i) {
      var d = i.prototype;
      return !!(d && d.isReactComponent);
    }
    function Le(i, d, f) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Lt(i, Cr(i));
      if (typeof i == "string")
        return Ae(i);
      switch (i) {
        case h:
          return Ae("Suspense");
        case v:
          return Ae("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return wr(i.render);
          case m:
            return Le(i.type, d, f);
          case x: {
            var g = i, C = g._payload, _ = g._init;
            try {
              return Le(_(C), d, f);
            } catch {
            }
          }
        }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty, It = {}, Dt = O.ReactDebugCurrentFrame;
    function Ie(i) {
      if (i) {
        var d = i._owner, f = Le(i.type, i._source, d ? d.type : null);
        Dt.setExtraStackFrame(f);
      } else
        Dt.setExtraStackFrame(null);
    }
    function Tr(i, d, f, g, C) {
      {
        var _ = Function.call.bind(xe);
        for (var j in i)
          if (_(i, j)) {
            var y = void 0;
            try {
              if (typeof i[j] != "function") {
                var D = Error((g || "React class") + ": " + f + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              y = i[j](d, j, g, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              y = P;
            }
            y && !(y instanceof Error) && (Ie(C), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", f, j, typeof y), Ie(null)), y instanceof Error && !(y.message in It) && (It[y.message] = !0, Ie(C), S("Failed %s type: %s", f, y.message), Ie(null));
          }
      }
    }
    var _r = Array.isArray;
    function qe(i) {
      return _r(i);
    }
    function Er(i) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, f = d && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return f;
      }
    }
    function Nr(i) {
      try {
        return Ft(i), !1;
      } catch {
        return !0;
      }
    }
    function Ft(i) {
      return "" + i;
    }
    function kt(i) {
      if (Nr(i))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(i)), Ft(i);
    }
    var je = O.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Bt, Mt, Je;
    Je = {};
    function Sr(i) {
      if (xe.call(i, "ref")) {
        var d = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function Pr(i) {
      if (xe.call(i, "key")) {
        var d = Object.getOwnPropertyDescriptor(i, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function $r(i, d) {
      if (typeof i.ref == "string" && je.current && d && je.current.stateNode !== d) {
        var f = U(je.current.type);
        Je[f] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(je.current.type), i.ref), Je[f] = !0);
      }
    }
    function Ar(i, d) {
      {
        var f = function() {
          Bt || (Bt = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        f.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function Rr(i, d) {
      {
        var f = function() {
          Mt || (Mt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        f.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var Lr = function(i, d, f, g, C, _, j) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: i,
        key: d,
        ref: f,
        props: j,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function Ir(i, d, f, g, C) {
      {
        var _, j = {}, y = null, D = null;
        f !== void 0 && (kt(f), y = "" + f), Pr(d) && (kt(d.key), y = "" + d.key), Sr(d) && (D = d.ref, $r(d, C));
        for (_ in d)
          xe.call(d, _) && !Or.hasOwnProperty(_) && (j[_] = d[_]);
        if (i && i.defaultProps) {
          var P = i.defaultProps;
          for (_ in P)
            j[_] === void 0 && (j[_] = P[_]);
        }
        if (y || D) {
          var $ = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          y && Ar(j, $), D && Rr(j, $);
        }
        return Lr(i, y, D, C, g, je.current, j);
      }
    }
    var Xe = O.ReactCurrentOwner, zt = O.ReactDebugCurrentFrame;
    function ue(i) {
      if (i) {
        var d = i._owner, f = Le(i.type, i._source, d ? d.type : null);
        zt.setExtraStackFrame(f);
      } else
        zt.setExtraStackFrame(null);
    }
    var Ze;
    Ze = !1;
    function Qe(i) {
      return typeof i == "object" && i !== null && i.$$typeof === t;
    }
    function Ut() {
      {
        if (Xe.current) {
          var i = U(Xe.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function Dr(i) {
      return "";
    }
    var Wt = {};
    function Fr(i) {
      {
        var d = Ut();
        if (!d) {
          var f = typeof i == "string" ? i : i.displayName || i.name;
          f && (d = `

Check the top-level render call using <` + f + ">.");
        }
        return d;
      }
    }
    function Gt(i, d) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var f = Fr(d);
        if (Wt[f])
          return;
        Wt[f] = !0;
        var g = "";
        i && i._owner && i._owner !== Xe.current && (g = " It was passed a child from " + U(i._owner.type) + "."), ue(i), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, g), ue(null);
      }
    }
    function Ht(i, d) {
      {
        if (typeof i != "object")
          return;
        if (qe(i))
          for (var f = 0; f < i.length; f++) {
            var g = i[f];
            Qe(g) && Gt(g, d);
          }
        else if (Qe(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var C = I(i);
          if (typeof C == "function" && C !== i.entries)
            for (var _ = C.call(i), j; !(j = _.next()).done; )
              Qe(j.value) && Gt(j.value, d);
        }
      }
    }
    function kr(i) {
      {
        var d = i.type;
        if (d == null || typeof d == "string")
          return;
        var f;
        if (typeof d == "function")
          f = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === m))
          f = d.propTypes;
        else
          return;
        if (f) {
          var g = U(d);
          Tr(f, i.props, "prop", g, i);
        } else if (d.PropTypes !== void 0 && !Ze) {
          Ze = !0;
          var C = U(d);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Br(i) {
      {
        for (var d = Object.keys(i.props), f = 0; f < d.length; f++) {
          var g = d[f];
          if (g !== "children" && g !== "key") {
            ue(i), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), ue(null);
            break;
          }
        }
        i.ref !== null && (ue(i), S("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    var Vt = {};
    function Yt(i, d, f, g, C, _) {
      {
        var j = vr(i);
        if (!j) {
          var y = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = Dr();
          D ? y += D : y += Ut();
          var P;
          i === null ? P = "null" : qe(i) ? P = "array" : i !== void 0 && i.$$typeof === t ? (P = "<" + (U(i.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : P = typeof i, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, y);
        }
        var $ = Ir(i, d, f, C, _);
        if ($ == null)
          return $;
        if (j) {
          var M = d.children;
          if (M !== void 0)
            if (g)
              if (qe(M)) {
                for (var de = 0; de < M.length; de++)
                  Ht(M[de], i);
                Object.freeze && Object.freeze(M);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ht(M, i);
        }
        if (xe.call(d, "key")) {
          var ee = U(i), k = Object.keys(d).filter(function(Hr) {
            return Hr !== "key";
          }), pe = k.length > 0 ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vt[ee + pe]) {
            var Gr = k.length > 0 ? "{" + k.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, pe, ee, Gr, ee), Vt[ee + pe] = !0;
          }
        }
        return i === r ? Br($) : kr($), $;
      }
    }
    function Mr(i, d, f) {
      return Yt(i, d, f, !0);
    }
    function zr(i, d, f) {
      return Yt(i, d, f, !1);
    }
    var Ur = zr, Wr = Mr;
    Ce.Fragment = r, Ce.jsx = Ur, Ce.jsxs = Wr;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? it.exports = ai() : it.exports = si();
var a = it.exports;
function oi(e) {
  return z.translationFunction(e);
}
function A() {
  const [e, t] = ge(z.getCurrentLanguage());
  return X(() => z.onLanguageChange(t), []), {
    // The ref won't change with the fn proxy, so it's safe to use it in dependency arrays
    translate: oi,
    language: e
  };
}
class li extends Se {
  constructor(n) {
    super(n);
    F(this, "translationSubscription");
    this.translate = this.translate.bind(this), this.onLanguageChange = this.onLanguageChange.bind(this);
  }
  componentDidMount() {
    z.onLanguageChange(this.onLanguageChange);
  }
  componentWillUnmount() {
    this.translationSubscription();
  }
  onLanguageChange() {
    this.forceUpdate();
  }
  translate(n) {
    return z.translationFunction(n);
  }
}
var Bn = typeof global == "object" && global && global.Object === Object && global, ci = typeof self == "object" && self && self.Object === Object && self, G = Bn || ci || Function("return this")(), W = G.Symbol, Mn = Object.prototype, ui = Mn.hasOwnProperty, di = Mn.toString, Te = W ? W.toStringTag : void 0;
function fi(e) {
  var t = ui.call(e, Te), n = e[Te];
  try {
    e[Te] = void 0;
    var r = !0;
  } catch {
  }
  var s = di.call(e);
  return r && (t ? e[Te] = n : delete e[Te]), s;
}
var hi = Object.prototype, mi = hi.toString;
function gi(e) {
  return mi.call(e);
}
var vi = "[object Null]", bi = "[object Undefined]", Zt = W ? W.toStringTag : void 0;
function ie(e) {
  return e == null ? e === void 0 ? bi : vi : Zt && Zt in Object(e) ? fi(e) : gi(e);
}
function ae(e) {
  return e != null && typeof e == "object";
}
var yi = "[object Symbol]";
function ze(e) {
  return typeof e == "symbol" || ae(e) && ie(e) == yi;
}
function zn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var se = Array.isArray, xi = 1 / 0, Qt = W ? W.prototype : void 0, pt = Qt ? Qt.toString : void 0;
function Un(e) {
  if (typeof e == "string")
    return e;
  if (se(e))
    return zn(e, Un) + "";
  if (ze(e))
    return pt ? pt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -xi ? "-0" : t;
}
var ji = /\s/;
function wi(e) {
  for (var t = e.length; t-- && ji.test(e.charAt(t)); )
    ;
  return t;
}
var Ci = /^\s+/;
function Ti(e) {
  return e && e.slice(0, wi(e) + 1).replace(Ci, "");
}
function ne(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var en = NaN, _i = /^[-+]0x[0-9a-f]+$/i, Ei = /^0b[01]+$/i, Ni = /^0o[0-7]+$/i, Oi = parseInt;
function et(e) {
  if (typeof e == "number")
    return e;
  if (ze(e))
    return en;
  if (ne(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ne(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ti(e);
  var n = Ei.test(e);
  return n || Ni.test(e) ? Oi(e.slice(2), n ? 2 : 8) : _i.test(e) ? en : +e;
}
function Si(e) {
  return e;
}
var Pi = "[object AsyncFunction]", $i = "[object Function]", Ai = "[object GeneratorFunction]", Ri = "[object Proxy]";
function Wn(e) {
  if (!ne(e))
    return !1;
  var t = ie(e);
  return t == $i || t == Ai || t == Pi || t == Ri;
}
var tt = G["__core-js_shared__"], tn = function() {
  var e = /[^.]+$/.exec(tt && tt.keys && tt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Li(e) {
  return !!tn && tn in e;
}
var Ii = Function.prototype, Di = Ii.toString;
function oe(e) {
  if (e != null) {
    try {
      return Di.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fi = /[\\^$.*+?()[\]{}|]/g, ki = /^\[object .+?Constructor\]$/, Bi = Function.prototype, Mi = Object.prototype, zi = Bi.toString, Ui = Mi.hasOwnProperty, Wi = RegExp(
  "^" + zi.call(Ui).replace(Fi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gi(e) {
  if (!ne(e) || Li(e))
    return !1;
  var t = Wn(e) ? Wi : ki;
  return t.test(oe(e));
}
function Hi(e, t) {
  return e == null ? void 0 : e[t];
}
function le(e, t) {
  var n = Hi(e, t);
  return Gi(n) ? n : void 0;
}
var at = le(G, "WeakMap"), nn = Object.create, Vi = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!ne(t))
      return {};
    if (nn)
      return nn(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function Yi(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function Ki(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var qi = 800, Ji = 16, Xi = Date.now;
function Zi(e) {
  var t = 0, n = 0;
  return function() {
    var r = Xi(), s = Ji - (r - n);
    if (n = r, s > 0) {
      if (++t >= qi)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Qi(e) {
  return function() {
    return e;
  };
}
var ke = function() {
  try {
    var e = le(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), pi = ke ? function(e, t) {
  return ke(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Qi(t),
    writable: !0
  });
} : Si, ea = Zi(pi);
function ta(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var na = 9007199254740991, ra = /^(?:0|[1-9]\d*)$/;
function ia(e, t) {
  var n = typeof e;
  return t = t ?? na, !!t && (n == "number" || n != "symbol" && ra.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Gn(e, t, n) {
  t == "__proto__" && ke ? ke(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Hn(e, t) {
  return e === t || e !== e && t !== t;
}
var aa = Object.prototype, sa = aa.hasOwnProperty;
function Vn(e, t, n) {
  var r = e[t];
  (!(sa.call(e, t) && Hn(r, n)) || n === void 0 && !(t in e)) && Gn(e, t, n);
}
function Pe(e, t, n, r) {
  var s = !n;
  n || (n = {});
  for (var l = -1, o = t.length; ++l < o; ) {
    var c = t[l], u = void 0;
    u === void 0 && (u = e[c]), s ? Gn(n, c, u) : Vn(n, c, u);
  }
  return n;
}
var rn = Math.max;
function oa(e, t, n) {
  return t = rn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, s = -1, l = rn(r.length - t, 0), o = Array(l); ++s < l; )
      o[s] = r[t + s];
    s = -1;
    for (var c = Array(t + 1); ++s < t; )
      c[s] = r[s];
    return c[t] = n(o), Yi(e, this, c);
  };
}
var la = 9007199254740991;
function Yn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= la;
}
function Kn(e) {
  return e != null && Yn(e.length) && !Wn(e);
}
var ca = Object.prototype;
function ft(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ca;
  return e === n;
}
function ua(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var da = "[object Arguments]";
function an(e) {
  return ae(e) && ie(e) == da;
}
var qn = Object.prototype, fa = qn.hasOwnProperty, ha = qn.propertyIsEnumerable, Jn = an(/* @__PURE__ */ function() {
  return arguments;
}()) ? an : function(e) {
  return ae(e) && fa.call(e, "callee") && !ha.call(e, "callee");
};
function ma() {
  return !1;
}
var Xn = typeof exports == "object" && exports && !exports.nodeType && exports, sn = Xn && typeof module == "object" && module && !module.nodeType && module, ga = sn && sn.exports === Xn, on = ga ? G.Buffer : void 0, va = on ? on.isBuffer : void 0, Zn = va || ma, ba = "[object Arguments]", ya = "[object Array]", xa = "[object Boolean]", ja = "[object Date]", wa = "[object Error]", Ca = "[object Function]", Ta = "[object Map]", _a = "[object Number]", Ea = "[object Object]", Na = "[object RegExp]", Oa = "[object Set]", Sa = "[object String]", Pa = "[object WeakMap]", $a = "[object ArrayBuffer]", Aa = "[object DataView]", Ra = "[object Float32Array]", La = "[object Float64Array]", Ia = "[object Int8Array]", Da = "[object Int16Array]", Fa = "[object Int32Array]", ka = "[object Uint8Array]", Ba = "[object Uint8ClampedArray]", Ma = "[object Uint16Array]", za = "[object Uint32Array]", N = {};
N[Ra] = N[La] = N[Ia] = N[Da] = N[Fa] = N[ka] = N[Ba] = N[Ma] = N[za] = !0;
N[ba] = N[ya] = N[$a] = N[xa] = N[Aa] = N[ja] = N[wa] = N[Ca] = N[Ta] = N[_a] = N[Ea] = N[Na] = N[Oa] = N[Sa] = N[Pa] = !1;
function Ua(e) {
  return ae(e) && Yn(e.length) && !!N[ie(e)];
}
function ht(e) {
  return function(t) {
    return e(t);
  };
}
var Qn = typeof exports == "object" && exports && !exports.nodeType && exports, _e = Qn && typeof module == "object" && module && !module.nodeType && module, Wa = _e && _e.exports === Qn, nt = Wa && Bn.process, me = function() {
  try {
    var e = _e && _e.require && _e.require("util").types;
    return e || nt && nt.binding && nt.binding("util");
  } catch {
  }
}(), ln = me && me.isTypedArray, Ga = ln ? ht(ln) : Ua, Ha = Object.prototype, Va = Ha.hasOwnProperty;
function pn(e, t) {
  var n = se(e), r = !n && Jn(e), s = !n && !r && Zn(e), l = !n && !r && !s && Ga(e), o = n || r || s || l, c = o ? ua(e.length, String) : [], u = c.length;
  for (var h in e)
    (t || Va.call(e, h)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    ia(h, u))) && c.push(h);
  return c;
}
function er(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ya = er(Object.keys, Object), Ka = Object.prototype, qa = Ka.hasOwnProperty;
function Ja(e) {
  if (!ft(e))
    return Ya(e);
  var t = [];
  for (var n in Object(e))
    qa.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function mt(e) {
  return Kn(e) ? pn(e) : Ja(e);
}
function Xa(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Za = Object.prototype, Qa = Za.hasOwnProperty;
function pa(e) {
  if (!ne(e))
    return Xa(e);
  var t = ft(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Qa.call(e, r)) || n.push(r);
  return n;
}
function gt(e) {
  return Kn(e) ? pn(e, !0) : pa(e);
}
var es = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ts = /^\w*$/;
function ns(e, t) {
  if (se(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ze(e) ? !0 : ts.test(e) || !es.test(e) || t != null && e in Object(t);
}
var Ee = le(Object, "create");
function rs() {
  this.__data__ = Ee ? Ee(null) : {}, this.size = 0;
}
function is(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var as = "__lodash_hash_undefined__", ss = Object.prototype, os = ss.hasOwnProperty;
function ls(e) {
  var t = this.__data__;
  if (Ee) {
    var n = t[e];
    return n === as ? void 0 : n;
  }
  return os.call(t, e) ? t[e] : void 0;
}
var cs = Object.prototype, us = cs.hasOwnProperty;
function ds(e) {
  var t = this.__data__;
  return Ee ? t[e] !== void 0 : us.call(t, e);
}
var fs = "__lodash_hash_undefined__";
function hs(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ee && t === void 0 ? fs : t, this;
}
function re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
re.prototype.clear = rs;
re.prototype.delete = is;
re.prototype.get = ls;
re.prototype.has = ds;
re.prototype.set = hs;
function ms() {
  this.__data__ = [], this.size = 0;
}
function Ue(e, t) {
  for (var n = e.length; n--; )
    if (Hn(e[n][0], t))
      return n;
  return -1;
}
var gs = Array.prototype, vs = gs.splice;
function bs(e) {
  var t = this.__data__, n = Ue(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : vs.call(t, n, 1), --this.size, !0;
}
function ys(e) {
  var t = this.__data__, n = Ue(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function xs(e) {
  return Ue(this.__data__, e) > -1;
}
function js(e, t) {
  var n = this.__data__, r = Ue(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function K(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
K.prototype.clear = ms;
K.prototype.delete = bs;
K.prototype.get = ys;
K.prototype.has = xs;
K.prototype.set = js;
var Ne = le(G, "Map");
function ws() {
  this.size = 0, this.__data__ = {
    hash: new re(),
    map: new (Ne || K)(),
    string: new re()
  };
}
function Cs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function We(e, t) {
  var n = e.__data__;
  return Cs(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ts(e) {
  var t = We(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _s(e) {
  return We(this, e).get(e);
}
function Es(e) {
  return We(this, e).has(e);
}
function Ns(e, t) {
  var n = We(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Q(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Q.prototype.clear = ws;
Q.prototype.delete = Ts;
Q.prototype.get = _s;
Q.prototype.has = Es;
Q.prototype.set = Ns;
var Os = "Expected a function";
function vt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Os);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], l = n.cache;
    if (l.has(s))
      return l.get(s);
    var o = e.apply(this, r);
    return n.cache = l.set(s, o) || l, o;
  };
  return n.cache = new (vt.Cache || Q)(), n;
}
vt.Cache = Q;
var Ss = 500;
function Ps(e) {
  var t = vt(e, function(r) {
    return n.size === Ss && n.clear(), r;
  }), n = t.cache;
  return t;
}
var $s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, As = /\\(\\)?/g, Rs = Ps(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace($s, function(n, r, s, l) {
    t.push(s ? l.replace(As, "$1") : r || n);
  }), t;
});
function Ls(e) {
  return e == null ? "" : Un(e);
}
function bt(e, t) {
  return se(e) ? e : ns(e, t) ? [e] : Rs(Ls(e));
}
var Is = 1 / 0;
function tr(e) {
  if (typeof e == "string" || ze(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Is ? "-0" : t;
}
function Ds(e, t) {
  t = bt(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[tr(t[n++])];
  return n && n == r ? e : void 0;
}
function yt(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
var cn = W ? W.isConcatSpreadable : void 0;
function Fs(e) {
  return se(e) || Jn(e) || !!(cn && e && e[cn]);
}
function ks(e, t, n, r, s) {
  var l = -1, o = e.length;
  for (n || (n = Fs), s || (s = []); ++l < o; ) {
    var c = e[l];
    n(c) ? yt(s, c) : s[s.length] = c;
  }
  return s;
}
function Bs(e) {
  var t = e == null ? 0 : e.length;
  return t ? ks(e) : [];
}
function Ms(e) {
  return ea(oa(e, void 0, Bs), e + "");
}
var xt = er(Object.getPrototypeOf, Object), zs = "[object Object]", Us = Function.prototype, Ws = Object.prototype, nr = Us.toString, Gs = Ws.hasOwnProperty, Hs = nr.call(Object);
function Vs(e) {
  if (!ae(e) || ie(e) != zs)
    return !1;
  var t = xt(e);
  if (t === null)
    return !0;
  var n = Gs.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && nr.call(n) == Hs;
}
function Ys(e, t, n) {
  var r = -1, s = e.length;
  t < 0 && (t = -t > s ? 0 : s + t), n = n > s ? s : n, n < 0 && (n += s), s = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var l = Array(s); ++r < s; )
    l[r] = e[r + t];
  return l;
}
function Ks(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
}
function rt(e, t, n) {
  return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = et(n), n = n === n ? n : 0), t !== void 0 && (t = et(t), t = t === t ? t : 0), Ks(et(e), t, n);
}
function qs() {
  this.__data__ = new K(), this.size = 0;
}
function Js(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Xs(e) {
  return this.__data__.get(e);
}
function Zs(e) {
  return this.__data__.has(e);
}
var Qs = 200;
function ps(e, t) {
  var n = this.__data__;
  if (n instanceof K) {
    var r = n.__data__;
    if (!Ne || r.length < Qs - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Q(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ve(e) {
  var t = this.__data__ = new K(e);
  this.size = t.size;
}
ve.prototype.clear = qs;
ve.prototype.delete = Js;
ve.prototype.get = Xs;
ve.prototype.has = Zs;
ve.prototype.set = ps;
function eo(e, t) {
  return e && Pe(t, mt(t), e);
}
function to(e, t) {
  return e && Pe(t, gt(t), e);
}
var rr = typeof exports == "object" && exports && !exports.nodeType && exports, un = rr && typeof module == "object" && module && !module.nodeType && module, no = un && un.exports === rr, dn = no ? G.Buffer : void 0, fn = dn ? dn.allocUnsafe : void 0;
function ro(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = fn ? fn(n) : new e.constructor(n);
  return e.copy(r), r;
}
function io(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, l = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (l[s++] = o);
  }
  return l;
}
function ir() {
  return [];
}
var ao = Object.prototype, so = ao.propertyIsEnumerable, hn = Object.getOwnPropertySymbols, jt = hn ? function(e) {
  return e == null ? [] : (e = Object(e), io(hn(e), function(t) {
    return so.call(e, t);
  }));
} : ir;
function oo(e, t) {
  return Pe(e, jt(e), t);
}
var lo = Object.getOwnPropertySymbols, ar = lo ? function(e) {
  for (var t = []; e; )
    yt(t, jt(e)), e = xt(e);
  return t;
} : ir;
function co(e, t) {
  return Pe(e, ar(e), t);
}
function sr(e, t, n) {
  var r = t(e);
  return se(e) ? r : yt(r, n(e));
}
function uo(e) {
  return sr(e, mt, jt);
}
function or(e) {
  return sr(e, gt, ar);
}
var st = le(G, "DataView"), ot = le(G, "Promise"), lt = le(G, "Set"), mn = "[object Map]", fo = "[object Object]", gn = "[object Promise]", vn = "[object Set]", bn = "[object WeakMap]", yn = "[object DataView]", ho = oe(st), mo = oe(Ne), go = oe(ot), vo = oe(lt), bo = oe(at), Y = ie;
(st && Y(new st(new ArrayBuffer(1))) != yn || Ne && Y(new Ne()) != mn || ot && Y(ot.resolve()) != gn || lt && Y(new lt()) != vn || at && Y(new at()) != bn) && (Y = function(e) {
  var t = ie(e), n = t == fo ? e.constructor : void 0, r = n ? oe(n) : "";
  if (r)
    switch (r) {
      case ho:
        return yn;
      case mo:
        return mn;
      case go:
        return gn;
      case vo:
        return vn;
      case bo:
        return bn;
    }
  return t;
});
var yo = Object.prototype, xo = yo.hasOwnProperty;
function jo(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && xo.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var xn = G.Uint8Array;
function wt(e) {
  var t = new e.constructor(e.byteLength);
  return new xn(t).set(new xn(e)), t;
}
function wo(e, t) {
  var n = t ? wt(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Co = /\w*$/;
function To(e) {
  var t = new e.constructor(e.source, Co.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var jn = W ? W.prototype : void 0, wn = jn ? jn.valueOf : void 0;
function _o(e) {
  return wn ? Object(wn.call(e)) : {};
}
function Eo(e, t) {
  var n = t ? wt(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var No = "[object Boolean]", Oo = "[object Date]", So = "[object Map]", Po = "[object Number]", $o = "[object RegExp]", Ao = "[object Set]", Ro = "[object String]", Lo = "[object Symbol]", Io = "[object ArrayBuffer]", Do = "[object DataView]", Fo = "[object Float32Array]", ko = "[object Float64Array]", Bo = "[object Int8Array]", Mo = "[object Int16Array]", zo = "[object Int32Array]", Uo = "[object Uint8Array]", Wo = "[object Uint8ClampedArray]", Go = "[object Uint16Array]", Ho = "[object Uint32Array]";
function Vo(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Io:
      return wt(e);
    case No:
    case Oo:
      return new r(+e);
    case Do:
      return wo(e, n);
    case Fo:
    case ko:
    case Bo:
    case Mo:
    case zo:
    case Uo:
    case Wo:
    case Go:
    case Ho:
      return Eo(e, n);
    case So:
      return new r();
    case Po:
    case Ro:
      return new r(e);
    case $o:
      return To(e);
    case Ao:
      return new r();
    case Lo:
      return _o(e);
  }
}
function Yo(e) {
  return typeof e.constructor == "function" && !ft(e) ? Vi(xt(e)) : {};
}
var Ko = "[object Map]";
function qo(e) {
  return ae(e) && Y(e) == Ko;
}
var Cn = me && me.isMap, Jo = Cn ? ht(Cn) : qo, Xo = "[object Set]";
function Zo(e) {
  return ae(e) && Y(e) == Xo;
}
var Tn = me && me.isSet, Qo = Tn ? ht(Tn) : Zo, po = 1, el = 2, tl = 4, lr = "[object Arguments]", nl = "[object Array]", rl = "[object Boolean]", il = "[object Date]", al = "[object Error]", cr = "[object Function]", sl = "[object GeneratorFunction]", ol = "[object Map]", ll = "[object Number]", ur = "[object Object]", cl = "[object RegExp]", ul = "[object Set]", dl = "[object String]", fl = "[object Symbol]", hl = "[object WeakMap]", ml = "[object ArrayBuffer]", gl = "[object DataView]", vl = "[object Float32Array]", bl = "[object Float64Array]", yl = "[object Int8Array]", xl = "[object Int16Array]", jl = "[object Int32Array]", wl = "[object Uint8Array]", Cl = "[object Uint8ClampedArray]", Tl = "[object Uint16Array]", _l = "[object Uint32Array]", E = {};
E[lr] = E[nl] = E[ml] = E[gl] = E[rl] = E[il] = E[vl] = E[bl] = E[yl] = E[xl] = E[jl] = E[ol] = E[ll] = E[ur] = E[cl] = E[ul] = E[dl] = E[fl] = E[wl] = E[Cl] = E[Tl] = E[_l] = !0;
E[al] = E[cr] = E[hl] = !1;
function Fe(e, t, n, r, s, l) {
  var o, c = t & po, u = t & el, h = t & tl;
  if (n && (o = s ? n(e, r, s, l) : n(e)), o !== void 0)
    return o;
  if (!ne(e))
    return e;
  var v = se(e);
  if (v) {
    if (o = jo(e), !c)
      return Ki(e, o);
  } else {
    var m = Y(e), x = m == cr || m == sl;
    if (Zn(e))
      return ro(e, c);
    if (m == ur || m == lr || x && !s) {
      if (o = u || x ? {} : Yo(e), !c)
        return u ? co(e, to(o, e)) : oo(e, eo(o, e));
    } else {
      if (!E[m])
        return s ? e : {};
      o = Vo(e, m, c);
    }
  }
  l || (l = new ve());
  var R = l.get(e);
  if (R)
    return R;
  l.set(e, o), Qo(e) ? e.forEach(function(I) {
    o.add(Fe(I, t, n, I, e, l));
  }) : Jo(e) && e.forEach(function(I, O) {
    o.set(O, Fe(I, t, n, O, e, l));
  });
  var L = h ? u ? or : uo : u ? gt : mt, H = v ? void 0 : L(e);
  return ta(H || e, function(I, O) {
    H && (O = I, I = e[O]), Vn(o, O, Fe(I, t, n, O, e, l));
  }), o;
}
function El(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Nl(e, t) {
  return t.length < 2 ? e : Ds(e, Ys(t, 0, -1));
}
function Ol(e, t) {
  return t = bt(t, e), e = Nl(e, t), e == null || delete e[tr(El(t))];
}
function Sl(e) {
  return Vs(e) ? void 0 : e;
}
var Pl = 1, $l = 2, Al = 4, Rl = Ms(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = zn(t, function(l) {
    return l = bt(l, e), r || (r = l.length > 1), l;
  }), Pe(e, or(e), n), r && (n = Fe(n, Pl | $l | Al, Sl));
  for (var s = t.length; s--; )
    Ol(n, t[s]);
  return n;
});
const b = /* @__PURE__ */ a.jsx(a.Fragment, {}), Ll = [
  // Common:
  "as",
  "text",
  "icon",
  "iconRight",
  "children",
  "fullwidth",
  "static",
  "focused",
  "active",
  "inverted",
  "rounded",
  "outlined",
  "loading",
  "selected",
  "iconSize",
  // Positions
  "left",
  "right",
  "centered",
  // Sizes:
  "small",
  "medium",
  "large",
  // Colors:
  "color",
  "primary",
  "secondary",
  "warning",
  "danger",
  "success",
  "info",
  "link",
  "white",
  "black",
  "dark",
  "light"
];
function dr(e, t = []) {
  return Rl(
    e,
    [
      ...Ll,
      ...t
    ]
  );
}
function w({ rootClassname: e, omit: t = [], ...n }) {
  const { translate: r } = A();
  return he(
    n.as || "div",
    {
      ...dr(n, t),
      title: r(n.title),
      // TODO: What if props.className is undefined?
      className: `${e} ${n.className}`
    },
    typeof n.children == "string" ? r(n.children) : n.children
  );
}
function oc(e) {
  return /* @__PURE__ */ a.jsx(
    w,
    {
      rootClassname: "block",
      ...e
    }
  );
}
function lc(e) {
  return /* @__PURE__ */ a.jsx(
    w,
    {
      rootClassname: "block box",
      ...e
    }
  );
}
function fr(e) {
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
function q(e) {
  return fr(e);
}
function Il(e, t, n = [], r = !1, s = !1) {
  X(() => {
    if (r)
      return () => {
      };
    const l = (o) => {
      var c, u, h;
      o.key === e && (s || ((c = o.preventDefault) == null || c.call(o), (u = o.stopPropagation) == null || u.call(o), (h = o.stopImmediatePropagation) == null || h.call(o)), t());
    };
    return window.addEventListener("keydown", l), () => {
      window.removeEventListener("keydown", l);
    };
  }, [e, t, r, ...n]);
}
function Ct(e, t = "is") {
  const { left: n, right: r, centered: s } = e;
  return [
    n && `${t}-left`,
    r && `${t}-right`,
    s && `${t}-centered`
  ].filter(Boolean).join(" ") || "";
}
function J(e, t = "is") {
  const { small: n, medium: r, large: s } = e;
  return [
    n && `${t}-small`,
    r && `${t}-medium`,
    s && `${t}-large`
  ].filter(Boolean).join(" ") || "";
}
function Dl(e) {
  const { translate: t } = A(), { className: n, style: r } = q(e), s = J(e), l = [
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
  ].filter(Boolean).join(" "), o = Kr((v) => {
    !e.onClick || e.disabled || e.loading || e.onClick(v);
  }, [e.onClick, e.disabled, e.loading]), c = e.icon ? /* @__PURE__ */ a.jsx("span", { className: "icon", children: e.icon }) : b, u = e.iconRight ? /* @__PURE__ */ a.jsx("span", { className: "icon", children: e.iconRight }) : b, h = e.as || "button";
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      ...e,
      as: h,
      type: h === "button" ? "button" : void 0,
      rootClassname: "button",
      disabled: e.disabled || e.loading,
      onClick: o,
      className: l,
      style: r,
      children: [
        c,
        typeof e.children == "string" || e.text ? /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("span", { children: t(e.text || e.children) }) }) : e.children,
        u
      ]
    }
  );
}
function cc(e) {
  if (e.singleLine) {
    const n = [
      "is-grouped",
      e.className,
      e.disabled && "are-disabled",
      e.fullwidth && "is-fullwidth",
      e.hasAddons && "has-addons"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ a.jsx(
      w,
      {
        ...e,
        rootClassname: "field",
        className: n,
        children: Sn.map(e.children, (r) => Pn(r) ? /* @__PURE__ */ a.jsx("div", { className: "control", children: r }) : r)
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
    w,
    {
      ...e,
      rootClassname: "buttons",
      className: t,
      children: e.children
    }
  );
}
function uc(e) {
  return /* @__PURE__ */ a.jsx(
    w,
    {
      rootClassname: "content",
      ...e
    }
  );
}
function Ge(e) {
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
function dc(e) {
  const t = [
    "icon",
    e.color && `has-text-${e.color}`,
    e.small && "is-small",
    e.medium && "is-medium",
    e.large && "is-large"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      as: "span",
      rootClassname: t
    }
  );
}
function hr(e) {
  const { translate: t } = A(), n = [
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
function Fl(e) {
  const { className: t, style: n } = q(e), { translate: r } = A();
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ...e,
      title: r(e.title),
      className: t,
      style: n,
      children: [
        e.showDelete ? /* @__PURE__ */ a.jsx(
          Ge,
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
function fc(e) {
  const t = [
    "table",
    e.striped ? "is-striped" : "",
    e.narrow ? "is-narrow" : "",
    e.bordered ? "is-bordered" : "",
    e.hoverable ? "is-hoverable" : "",
    e.fullwidth ? "is-fullwidth" : ""
  ].filter(Boolean).join(" "), n = /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      rootClassname: t,
      as: "table"
    }
  );
  return e.scrollable ? /* @__PURE__ */ a.jsx("div", { className: "table-container", children: n }) : n;
}
function hc(e) {
  const { className: t, style: n } = q(e), { translate: r } = A(), s = [
    e.small && "is-small",
    e.medium && "is-medium",
    e.large && "is-large",
    e.normal && "is-normal"
  ].filter(Boolean).join(" "), l = [
    t,
    s,
    e.hoverable && "is-hoverable",
    e.rounded && "is-rounded",
    e.isDelete && "is-delete"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      ...e,
      as: e.isDelete ? "a" : "span",
      onClick: !e.disabled && e.onDelete,
      rootClassname: "tag",
      className: l,
      style: n,
      children: [
        e.message ? r(e.message) : typeof e.children == "string" ? r(e.children) : e.children,
        e.withDeleteButton ? /* @__PURE__ */ a.jsx(
          Ge,
          {
            onClick: !e.disabled && e.onDelete,
            className: s
          }
        ) : b
      ]
    }
  );
}
function mc(e) {
  if (e.singleLine) {
    const n = [
      "is-grouped",
      e.className,
      e.disabled && "are-disabled",
      e.fullwidth && "is-fullwidth",
      e.hasAddons && "has-addons"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ a.jsx(
      w,
      {
        ...e,
        rootClassname: "field",
        className: n,
        children: Sn.map(e.children, (r) => Pn(r) ? /* @__PURE__ */ a.jsx("div", { className: "control", children: r }) : r)
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
    w,
    {
      ...e,
      rootClassname: "tags",
      className: t,
      children: e.children
    }
  );
}
const _n = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
  7: "h6"
};
function kl(e) {
  var u, h;
  const { translate: t } = A(), n = e.titleSize || 3, r = e.subtitleSize || 5, s = _n[n], l = _n[r], o = `title is-${n} ${(u = e.titleProps) == null ? void 0 : u.className} ${e.spaced ? "is-spaced" : ""}`.trim(), c = `subtitle is-${r} ${(h = e.subtitleProps) == null ? void 0 : h.className}`.trim();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    e.title ? he(
      s,
      {
        ...e.titleProps,
        className: o
      },
      t(e.title)
    ) : b,
    e.subtitle ? he(
      l,
      {
        ...e.subtitleProps,
        className: c
      },
      t(e.subtitle)
    ) : b
  ] });
}
function gc(e) {
  const t = Ct(e), n = J(e), r = [
    "breadcrumb",
    t,
    n,
    e.hasArrowSeparator && "has-arrow-separator",
    e.hasBulletSeparator && "has-bullet-separator",
    e.hasDotSeparator && "has-dot-separator",
    e.hasSucceedsSeparator && "has-succeeds-separator"
  ].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      rootClassname: r,
      "aria-label": "breadcrumbs",
      as: "nav",
      children: e.children
    }
  );
}
function vc(e) {
  return /* @__PURE__ */ a.jsx(
    w,
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
function bc(e) {
  const { translate: t } = A();
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      ...e,
      rootClassname: "card",
      as: "div",
      children: [
        e.header ? /* @__PURE__ */ a.jsxs("header", { className: "card-header", children: [
          /* @__PURE__ */ a.jsx("p", { className: "card-header-title", children: t(e.header) }),
          e.hideCollapse ? b : /* @__PURE__ */ a.jsx("button", { className: "card-header-icon", "aria-label": "more options", children: /* @__PURE__ */ a.jsx("span", { className: "icon", children: e.collapseIcon || Bl }) })
        ] }) : b,
        e.image ? /* @__PURE__ */ a.jsx("div", { className: "card-image", children: /* @__PURE__ */ a.jsx(hr, { ...e.image }) }) : b,
        e.children ? /* @__PURE__ */ a.jsx("div", { className: "card-content", children: typeof e.children == "string" ? t(e.children) : e.children }) : b,
        e.buttons ? /* @__PURE__ */ a.jsx("div", { className: "card-footer", children: e.buttons.map((n, r) => /* @__PURE__ */ he(
          "a",
          {
            ...n,
            key: n.id || "card-button-" + r,
            className: `card-footer-item ${n.className || ""}`.trim(),
            onClick: n.onClick
          },
          typeof n.text == "string" ? t(n.text) : n.text
        )) }) : b
      ]
    }
  );
}
const Bl = /* @__PURE__ */ a.jsx(
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
function yc(e) {
  const { translate: t } = A(), [n, r] = ge(!1), s = qr(null);
  X(() => {
    if (!n)
      return () => {
      };
    const h = (v) => {
      const m = s.current;
      if (!m)
        return;
      const x = v.target;
      m.contains(x) ? x.tagName === "A" && r(!1) : r(!1);
    };
    return document.addEventListener("click", h), () => {
      document.removeEventListener("click", h);
    };
  }, [n]), X(() => {
    e.disabled && n && r(!1);
  }, [n, e.disabled]), X(() => {
    e.forceActive && !n && r(!0), e.forceClosed && n && r(!1);
  }, [n, e.forceActive, e.forceClosed]), X(() => {
    n && e.onOpened && e.onOpened(), !n && e.onClosed && e.onClosed();
  }, [n]);
  const l = [
    "dropdown",
    e.className,
    !e.forceClosed && (n || e.forceActive) && "is-active",
    e.fullwidth && "is-fullwidth",
    e.up && "is-up",
    e.right && "is-right",
    e.hoverable && "is-hoverable"
  ].filter(Boolean).join(" "), o = "dropdown-trigger " + (e.triggerClassname || ""), c = "dropdown-menu " + (e.menuClassname || ""), u = "dropdown-content " + (e.contentClassname || "");
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      ...e,
      id: e.id,
      ref: s,
      title: t(e.title),
      className: l,
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: o,
            onClick: () => {
              e.disabled || e.forceActive || e.forceClosed || r(!n);
            },
            children: typeof e.trigger == "function" ? e.trigger({
              isActive: n,
              translate: t
            }) : e.trigger
          }
        ),
        /* @__PURE__ */ a.jsx("div", { className: c, role: "menu", children: /* @__PURE__ */ a.jsx("div", { className: u, children: e.children }) })
      ]
    }
  );
}
function xc(e) {
  return /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      rootClassname: "dropdown-divider",
      as: "hr",
      children: /* @__PURE__ */ a.jsx(a.Fragment, {})
    }
  );
}
function jc(e) {
  return /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      rootClassname: "dropdown-item",
      as: "div",
      children: e.children
    }
  );
}
function wc(e) {
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      ...e,
      rootClassname: "media",
      as: e.as || "article",
      children: [
        e.image ? /* @__PURE__ */ a.jsx("figure", { className: "media-left", children: /* @__PURE__ */ a.jsx(hr, { ...e.image }) }) : null,
        e.title ? /* @__PURE__ */ a.jsx("div", { className: "media-content", children: /* @__PURE__ */ a.jsx(kl, { ...e.titles }) }) : null,
        e.children
      ]
    }
  );
}
const Ml = {
  tripped: !1
};
class En extends Se {
  constructor(t) {
    super(t), this.state = { ...Ml };
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
    return this.state.tripped ? b : this.props.children;
  }
}
function zl(e) {
  var r;
  const { translate: t } = A();
  if (Il(
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
    Jr(
      /* @__PURE__ */ a.jsx(En, { id: "modal-" + e.id, children: /* @__PURE__ */ a.jsxs(
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
                /* @__PURE__ */ a.jsx(Ge, { onClick: e.onClose })
              ] }),
              /* @__PURE__ */ a.jsx("section", { className: "modal-card-body", children: /* @__PURE__ */ a.jsx(En, { id: `modal-${e.id}-content`, children: typeof e.children == "string" ? /* @__PURE__ */ a.jsx("p", { children: e.children }) : e.children }) }),
              /* @__PURE__ */ a.jsx("footer", { className: "modal-card-foot buttons is-right", children: (r = e.actions) == null ? void 0 : r.map((s, l) => /* @__PURE__ */ a.jsx(
                Dl,
                {
                  ...s
                },
                l + "-" + s.id
              )) })
            ] })
          ]
        }
      ) }),
      z.CustomModalParentElement,
      e.id
    )
  ] });
}
function Ul(e) {
  const { className: t, style: n } = q(e), r = J(e), { translate: s } = A(), l = [
    t,
    r,
    e.className || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      ...e,
      rootClassname: "message",
      className: l,
      style: {
        ...n,
        ...e.style || {}
      },
      as: "article",
      children: [
        e.header || e.showDelete ? /* @__PURE__ */ a.jsxs("div", { className: "message-header", children: [
          /* @__PURE__ */ a.jsx("p", { children: e.header ? s(e.header) : "" }),
          e.showDelete ? /* @__PURE__ */ a.jsx(Ge, { onClick: e.onDelete, className: r }) : b
        ] }) : b,
        /* @__PURE__ */ a.jsx("div", { className: "message-body", children: typeof e.children == "string" ? s(e.children) : e.children })
      ]
    }
  );
}
function Cc(e) {
  const { className: t, style: n } = q(e), [r, s] = ge(!1), { fixedTop: l, fixedBottom: o, fixedPaddingTarget: c } = e, u = [
    e.transparent && "is-transparent",
    l && "is-fixed-top",
    o && "is-fixed-bottom",
    e.spaced && "is-spaced",
    e.hasShadow && "has-shadow",
    t,
    e.className
  ].filter(Boolean).join(" ");
  return X(() => {
    var v, m;
    const h = c || "body";
    return l ? ((v = document.querySelector(h)) == null || v.classList.add("has-navbar-fixed-top"), () => {
      var x;
      (x = document.querySelector(h)) == null || x.classList.remove("has-navbar-fixed-top");
    }) : o ? ((m = document.querySelector(h)) == null || m.classList.add("has-navbar-fixed-bottom"), () => {
      var x;
      (x = document.querySelector(h)) == null || x.classList.remove("has-navbar-fixed-bottom");
    }) : () => {
    };
  }, [l, o, c]), /* @__PURE__ */ a.jsxs(
    w,
    {
      ...e,
      rootClassname: "navbar",
      className: u,
      as: "div",
      role: "navigation",
      "aria-label": "main navigation",
      style: {
        ...n,
        ...e.style || {}
      },
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "navbar-brand", children: [
          e.brand ? e.brand : b,
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
          /* @__PURE__ */ a.jsx("div", { className: "navbar-start", children: e.startItems || b }),
          /* @__PURE__ */ a.jsx("div", { className: "navbar-end", children: e.endItems || b })
        ] })
      ]
    }
  );
}
function Tc(e) {
  const t = [
    e.selected && "is-selected",
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      rootClassname: "navbar-item",
      className: t,
      as: e.as || "a",
      children: e.children
    }
  );
}
function _c(e) {
  const [t, n] = ge(!1), { translate: r } = A(), s = [
    e.hoverable && "is-hoverable",
    e.up && "has-dropdown-up",
    t && "is-active",
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      ...e,
      rootClassname: "navbar-item has-dropdown",
      className: s,
      onClick: (l) => {
        var c, u, h;
        const o = !t;
        n(o), (c = e.onClick) == null || c.call(e, l), o ? (u = e.onOpen) == null || u.call(e) : (h = e.onClose) == null || h.call(e);
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
function Ec(e) {
  return /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      rootClassname: "navbar-divider",
      as: "hr",
      children: /* @__PURE__ */ a.jsx(a.Fragment, {})
    }
  );
}
function Nc(e) {
  var m, x, R, L, H, I, O, S, ce, $e;
  const { translate: t } = A(), n = J(e), r = Ct(e), s = e.id || "pagination", l = [
    n,
    r,
    e.rounded && "is-rounded",
    e.disabled && "is-disabled",
    e.className
  ].filter(Boolean).join(" ") || "", o = 0;
  let c = 0, u = 0;
  if (e.page)
    typeof ((m = e.page) == null ? void 0 : m.current) == "string" ? u = parseInt(e.page.current || "0") : u = ((x = e.page) == null ? void 0 : x.current) || 0, typeof ((R = e.page) == null ? void 0 : R.total) == "string" ? c = parseInt(e.page.total || "0") : c = ((L = e.page) == null ? void 0 : L.total) || 0;
  else if (e.count) {
    const B = typeof ((H = e.count) == null ? void 0 : H.countPerPage) == "string" ? parseInt(e.count.countPerPage || "1") : ((I = e.count) == null ? void 0 : I.countPerPage) || 1, be = typeof ((O = e.count) == null ? void 0 : O.total) == "string" ? parseInt(e.count.total || "0") : ((S = e.count) == null ? void 0 : S.total) || 0, He = typeof ((ce = e.count) == null ? void 0 : ce.skip) == "string" ? parseInt(e.count.skip || "0") : (($e = e.count) == null ? void 0 : $e.skip) || 0;
    u = Math.floor(He / B) + 1, c = Math.floor(be / B) + 1;
  }
  if (!e.showEvenIfOnlyOnePage && c === o)
    return b;
  function h(B) {
    B = rt(B - 1, o, c), e.onPageChange(B);
  }
  function v(B, be) {
    return typeof B == "function" ? B(be) : t(B);
  }
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      ...e,
      id: s,
      rootClassname: "pagination",
      className: l,
      as: "nav",
      role: "navigation",
      "aria-label": "pagination",
      children: [
        e.hidePrevNext ? b : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            "a",
            {
              id: s + "-prev",
              className: "pagination-previous",
              disabled: e.disabled || u === o,
              onClick: !e.disabled && u !== o && (() => {
                h(u - 1);
              }),
              children: v(
                e.nextText || "Previous page",
                u - 1
              )
            }
          ),
          /* @__PURE__ */ a.jsx(
            "a",
            {
              id: s + "-next",
              className: "pagination-next",
              disabled: e.disabled || u === c,
              onClick: !e.disabled && u !== c && (() => {
                h(u + 1);
              }),
              children: v(
                e.nextText || "Next page",
                u + 1
              )
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("ul", { className: "pagination-list", children: [
          e.hideFirstLast ? b : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "pagination-link",
              "aria-label": "Goto page 1",
              title: v(
                e.firstPageTitle || "Goto page 1",
                o
              ),
              disabled: e.disabled || u === o,
              onClick: !e.disabled && u !== o && (() => {
                h(o);
              }),
              children: o
            }
          ) }),
          e.hideEllipsis ? b : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx("span", { className: "pagination-ellipsis", children: "…" }) }),
          u !== o ? /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "pagination-link",
              "aria-label": `Goto page ${u - 1}`,
              title: v(
                e.firstPageTitle || `Goto page ${u - 1}`,
                u - 1
              ),
              disabled: e.disabled,
              onClick: !e.disabled && (() => {
                h(u - 1);
              }),
              children: rt(
                u - 1,
                c,
                o
              )
            }
          ) }) : b,
          /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "pagination-link is-current",
              "aria-label": `Page ${u}`,
              title: v(
                e.currentPageTitle || `Goto page ${u}`,
                u
              ),
              "aria-current": "page",
              disabled: e.disabled,
              children: u
            }
          ) }),
          u !== c ? /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "pagination-link",
              "aria-label": `Goto page ${u + 1}`,
              title: v(
                e.firstPageTitle || `Goto page ${u + 1}`,
                u + 1
              ),
              disabled: e.disabled,
              onClick: !e.disabled && (() => {
                h(u + 1);
              }),
              children: rt(
                u + 1,
                c,
                o
              )
            }
          ) }) : b,
          e.hideEllipsis ? b : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx("span", { className: "pagination-ellipsis", children: "…" }) }),
          e.hideFirstLast ? b : /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "pagination-link",
              "aria-label": `Goto page ${c}`,
              title: v(
                e.lastPageTitle || `Goto page ${c}`,
                c
              ),
              disabled: e.disabled || u === c,
              onClick: !e.disabled && u !== c && (() => {
                h(c);
              }),
              children: c
            }
          ) })
        ] })
      ]
    }
  );
}
function Wl({ onClick: e, icon: t, ...n }) {
  const { translate: r } = A(), s = t ? /* @__PURE__ */ a.jsx("span", { className: "icon is-small", children: t }) : b;
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      ...n,
      rootClassname: "",
      as: "li",
      children: [
        "? ",
        /* @__PURE__ */ a.jsxs(
          "a",
          {
            onClick: e,
            children: [
              s,
              n.children || /* @__PURE__ */ a.jsx("span", { children: r(n.text) })
            ]
          }
        ),
        /* @__PURE__ */ a.jsx("a", { onClick: e })
      ]
    }
  );
}
function Gl(e, t) {
  if (t == null)
    return null;
  if (typeof t == "number")
    return t;
  const n = e.findIndex((r) => r.value === t);
  return n !== -1 ? n : e.findIndex((r) => r.text === t) || 0;
}
function Oc(e) {
  var o;
  const [t, n] = ge(
    Gl(e.items || [], e.defaultActive || 0)
  ), r = J(e), l = [
    Ct(e),
    r,
    e.boxed && "is-boxed",
    e.toggle && "is-toggle",
    !e.toggle && e.rounded && "is-rounded",
    e.toggle && e.rounded && "is-toggle-rounded",
    e.fullwidth && "is-fullwidth",
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      rootClassname: "tabs",
      className: l,
      as: "div",
      children: /* @__PURE__ */ a.jsx("ul", { children: e.children || ((o = e.items) == null ? void 0 : o.map((c, u) => /* @__PURE__ */ he(
        Wl,
        {
          ...c,
          key: c + "-" + u,
          active: t === u,
          onClick: (h) => {
            var v, m;
            (v = c == null ? void 0 : c.onClick) == null || v.call(c, h), n(u), (m = e.onTabChange) == null || m.call(e, {
              index: u,
              value: c.value,
              item: c,
              event: h
            });
          }
        }
      ))) })
    }
  );
}
function Nn(e) {
  const { translate: t } = A(), { className: n, style: r } = q(e), s = [
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
const Hl = [
  "label",
  "help",
  "icon",
  "iconRight",
  "expanded"
];
function mr({ children: e, ...t }) {
  var l;
  const { translate: n } = A(), r = J(t), s = [
    t.className,
    r,
    t.fullwidth && "is-fullwidth is-expanded",
    t.expanded && "is-expanded",
    t.icon && "has-icons-left",
    t.iconRight && "has-icons-right",
    t.loading && "is-loading"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    t.label ? /* @__PURE__ */ a.jsx("label", { className: "label", children: n(t.label) }) : b,
    /* @__PURE__ */ a.jsxs(
      w,
      {
        ...t,
        rootClassname: "control",
        className: s,
        omit: Hl,
        children: [
          t.icon ? /* @__PURE__ */ a.jsx(
            "span",
            {
              className: `icon is-${t.iconSize || "small"} is-left`,
              children: t.icon
            }
          ) : b,
          e,
          t.iconRight ? /* @__PURE__ */ a.jsx(
            "span",
            {
              className: `icon is-${t.iconSize || "small"} is-right`,
              children: t.iconRight
            }
          ) : b
        ]
      }
    ),
    t.help ? /* @__PURE__ */ a.jsx(a.Fragment, { children: Array.isArray(t.help) ? t.help.map((o) => typeof o == "string" ? /* @__PURE__ */ a.jsx("p", { className: "help", children: n(o) }, o) : o.text ? /* @__PURE__ */ a.jsx(Nn, { ...o }, o.text) : o) : (l = t.help) != null && l.text ? /* @__PURE__ */ a.jsx(Nn, { ...t.help }) : typeof t.help == "string" ? /* @__PURE__ */ a.jsx("p", { className: "help", children: n(t.help) }) : /* @__PURE__ */ a.jsx("p", { className: "help", children: t.help }) }) : b,
    t.error ? /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("p", { className: "help is-danger", children: t.error }) }) : b
  ] });
}
const Vl = [
  "textarea",
  "icon",
  "iconRight",
  "label",
  "help",
  "active",
  "hovered",
  "focused",
  "loading",
  "readonly",
  "static"
];
function Yl(e) {
  const { translate: t } = A(), n = J(e), { className: r, style: s } = q(e), l = [
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
  ].filter(Boolean).join(" "), o = e.disabled || e.readonly || e.static || e.loading;
  return /* @__PURE__ */ a.jsx(
    mr,
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
      children: he(
        // Tag name
        e.textarea ? "textarea" : "input",
        // Props
        {
          ...dr(e, Vl),
          id: e.id,
          className: l,
          name: t(e.name),
          placeholder: t(e.placeholder),
          onClick: !o && e.onClick,
          onChange: !o && ((c) => {
            var u, h;
            e.type === "number" ? (u = e.onChange) == null || u.call(e, {
              value: parseFloat(c.currentTarget.value)
            }, c) : (h = e.onChange) == null || h.call(e, {
              value: c.currentTarget.value
            }, c);
          }),
          onKeyDown: !o && ((c) => {
            var u, h, v;
            c.key === "Escape" ? (c.preventDefault(), c.currentTarget.blur(), (u = e.onEscape) == null || u.call(e, c)) : c.key === "Enter" && ((h = e.onEnter) == null || h.call(e, c)), (v = e.onKeyDown) == null || v.call(e, c);
          }),
          style: s
        }
      )
    }
  );
}
function Sc(e) {
  var v;
  const { translate: t } = A(), { className: n, style: r } = q(e), s = J(e), l = [
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
  ].filter(Boolean).join(" "), o = e.disabled, c = {}, u = {}, h = [];
  return (v = e.options) == null || v.forEach((m, x) => {
    const R = m.text || m.value;
    if (c[m.value] && console.warn(`Duplicate 'value' attribute found in options: ${m.value}`), c[m.value] = m, m.optGroup) {
      u[m.optGroup] || (u[m.optGroup] = []), u[m.optGroup].push(m);
      return;
    }
    const L = /* @__PURE__ */ a.jsx(
      "option",
      {
        id: m.id,
        value: m.value,
        children: t(R)
      },
      m.key !== void 0 ? m.key : m.value + "-" + x
    );
    h.push(L);
  }), /* @__PURE__ */ a.jsx(
    mr,
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
          className: l,
          style: r,
          children: /* @__PURE__ */ a.jsxs(
            "select",
            {
              id: e.id,
              disabled: e.disabled,
              multiple: e.multiple,
              onChange: !o && ((m) => e.onChange && e.onChange(
                c[m.target.value],
                m
              )),
              value: e.value,
              defaultValue: e.defaultValue,
              size: e.size !== void 0 ? parseInt(e.size) : void 0,
              children: [
                Object.keys(u).map((m) => /* @__PURE__ */ a.jsx(
                  "optgroup",
                  {
                    label: m,
                    children: u[m].map((x, R) => {
                      const L = x.text || x.value;
                      return /* @__PURE__ */ a.jsx(
                        "option",
                        {
                          id: x.id,
                          value: x.value,
                          children: t(L)
                        },
                        x.key !== void 0 ? x.key : x.value + "-" + R
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
function Pc(e) {
  return /* @__PURE__ */ a.jsx(
    Yl,
    {
      ...e,
      textarea: !0
    }
  );
}
const Kl = [
  "fluid",
  "widescreen",
  "maxWidescreen",
  "fullhd",
  "desktop",
  "tablet"
];
function $c(e) {
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
    w,
    {
      ...e,
      omit: Kl,
      rootClassname: "container",
      className: t,
      children: e.children
    }
  );
}
function Ac(e) {
  const t = [
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      rootClassname: "footer",
      className: t,
      as: e.as || "footer",
      children: e.children
    }
  );
}
const ql = [
  "small",
  "medium",
  "large",
  "halfHeight",
  "fullHeight",
  "fullHeightWithNavbar"
];
function Rc(e) {
  const { translate: t } = A(), { className: n, style: r } = q(e), s = [
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
    w,
    {
      ...e,
      rootClassname: "hero",
      className: s,
      style: r,
      omit: ql,
      as: e.as || "section",
      children: [
        e.header ? /* @__PURE__ */ a.jsx("div", { className: "hero-head", children: e.header }) : b,
        /* @__PURE__ */ a.jsx("div", { className: "hero-body", children: typeof e.children == "string" ? t(e.children) : e.children }),
        e.footer ? /* @__PURE__ */ a.jsx("div", { className: "hero-foot", children: e.footer }) : b
      ]
    }
  );
}
const Jl = [
  "centered"
];
function Xl(e) {
  const t = [
    e.className,
    e.centered && "has-text-centered"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      rootClassname: "CHANGE_ME",
      className: t,
      omit: Jl,
      as: "div",
      children: e.children
    }
  );
}
const Zl = [
  "mobile",
  "items"
];
function Lc(e) {
  var n;
  const t = [
    e.className,
    e.mobile && "is-mobile",
    e.left === !0 && "level-left",
    e.right === !0 && "level-right"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    w,
    {
      ...e,
      rootClassname: "CHANGE_ME",
      className: t,
      omit: Zl,
      as: e.as || "div",
      children: [
        e.left !== void 0 && e.left !== !0 ? /* @__PURE__ */ a.jsx("div", { className: "level-left", children: e.left }) : b,
        e.children || b,
        ((n = e.items) == null ? void 0 : n.map((r, s) => /* @__PURE__ */ a.jsx(Xl, { children: r }, s))) || b,
        e.right !== void 0 && e.right !== !0 ? /* @__PURE__ */ a.jsx("div", { className: "level-right", children: e.right }) : b
      ]
    }
  );
}
function Ic(e) {
  const t = J(e), n = [
    e.className,
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    w,
    {
      ...e,
      rootClassname: "section",
      className: n,
      as: e.as || "section",
      children: e.children
    }
  );
}
const Be = "primary", ct = 1e4, Ql = 500, te = class te extends Se {
  constructor(t) {
    super(t), this.state = {
      toasts: []
    }, this.onNewToast = this.onNewToast.bind(this), this.onExpiredToast = this.onExpiredToast.bind(this);
  }
  componentDidMount() {
    te.ToastEvents.on("new", this.onNewToast), te.ToastEvents.on("expired", this.onExpiredToast);
  }
  componentWillUnmount() {
    te.ToastEvents.off("new", this.onNewToast), te.ToastEvents.off("expired", this.onExpiredToast);
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
      /* @__PURE__ */ a.jsx("div", { className: "toasts", children: this.state.toasts.map((t) => /* @__PURE__ */ a.jsx(pl, { toast: t }, t.id)) }),
      this.props.children || b
    ] });
  }
};
F(te, "ToastEvents", new dt());
let Z = te;
class pl extends li {
  constructor(t) {
    super(t), this.state = {
      animating: !1,
      expiring: !1
    }, this.onExpiring = this.onExpiring.bind(this);
  }
  componentDidMount() {
    super.componentDidMount(), Z.ToastEvents.on("expiring", this.onExpiring), this.props.toast._emitMounted(), window.requestAnimationFrame(() => {
      this.setState({ animating: !0 });
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), Z.ToastEvents.off("expiring", this.onExpiring);
  }
  onExpiring(t) {
    t === this.props.toast && this.setState({ expiring: !0 });
  }
  getProgressbar() {
    const { toast: t } = this.props, { animating: n } = this.state;
    if (!(t != null && t.options))
      return b;
    const {
      durationMs: r = ct,
      color: s = Be,
      hideProgressBar: l = !1
    } = t.options;
    return l || r <= 0 ? b : /* @__PURE__ */ a.jsx(
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
      return b;
    const {
      title: r,
      message: s,
      color: l = Be,
      hideCloseButton: o
    } = t.options, { className: c, style: u } = fr({ color: l }), h = [
      "toast",
      c,
      n && "is-expiring"
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ a.jsxs(
      Ul,
      {
        id: t.id,
        color: l,
        className: h,
        header: r,
        showDelete: !o,
        onDelete: () => t.remove(),
        style: u,
        children: [
          /* @__PURE__ */ a.jsx("p", { children: this.translate(s) }),
          this.getProgressbar(),
          this.getButtons()
        ]
      },
      t.id
    ) : /* @__PURE__ */ a.jsxs(
      Fl,
      {
        id: t.id,
        color: l,
        className: h,
        showDelete: !o,
        onDelete: () => t.remove(),
        style: u,
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
class ec {
  constructor(t) {
    F(this, "id");
    F(this, "startTime");
    F(this, "expiringTimeout");
    F(this, "expireTimeout");
    F(this, "options");
    F(this, "callbacks", []);
    this.startTime = Date.now(), typeof t == "string" ? (this.id = String(Date.now()), this.options = {
      id: this.id,
      message: t,
      color: Be,
      durationMs: ct
    }) : (this.id = String(t.id) || String(Date.now()), this.options = {
      color: Be,
      durationMs: ct,
      ...t,
      id: this.id
    }), this.options.durationMs > 0 && (this.expiringTimeout = setTimeout(() => {
      this.onExpiring();
    }, this.options.durationMs - Ql), this.expireTimeout = setTimeout(() => {
      this.onExpired();
    }, this.options.durationMs)), Z.ToastEvents.emit("new", this);
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
    Z.ToastEvents.emit("expiring", this);
  }
  onExpired() {
    Z.ToastEvents.emit("expired", this);
  }
  remove() {
    clearTimeout(this.expiringTimeout), clearTimeout(this.expireTimeout), this.onExpired();
  }
}
function Dc(e) {
  return new ec(e);
}
const V = class V extends Se {
  static cancelAll() {
    V.ConfirmEvents.emit("cancel");
  }
  static confirm(t) {
    V.ConfirmEvents.emit("new", t);
  }
  constructor(t) {
    super(t), this.state = {
      confirm: null
    }, this.handleNewConfirmEvent = this.handleNewConfirmEvent.bind(this), this.handleCancelEvent = this.handleCancelEvent.bind(this), this.onClose = this.onClose.bind(this);
  }
  componentDidMount() {
    V.ConfirmEvents.on("new", this.handleNewConfirmEvent), V.ConfirmEvents.on("cancel", this.handleCancelEvent);
  }
  componentWillUnmount() {
    V.ConfirmEvents.off("new", this.handleNewConfirmEvent), V.ConfirmEvents.off("cancel", this.handleCancelEvent);
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
      onClick: this.onConfirm
    }) : n.push({
      color: t.isDelete ? "danger" : "primary",
      id: this.props.confirmButtonId || "confirm-confirm-button",
      text: t.confirmText || this.props.defaultConfirmButtonText || "Confirm",
      icon: this.props.confirmButtonIcon,
      onClick: this.onConfirm
    }), n;
  }
  onClose() {
    this.setState({ confirm: null });
  }
  onConfirm() {
    var t;
    this.setState({ confirm: null }), (t = this.state.confirm) == null || t.successCallback();
  }
  render() {
    var t, n;
    return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      this.props.children || b,
      /* @__PURE__ */ a.jsx(
        zl,
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
F(V, "ConfirmEvents", new dt());
let Oe = V;
async function Fc(e, t, n) {
  return new Promise((r, s) => {
    if (typeof e == "string") {
      Oe.confirm({
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
    Oe.confirm({
      ...e,
      successCallback: async function() {
        var o;
        await ((o = e.successCallback) == null ? void 0 : o.call(e)), await (t == null ? void 0 : t()), r(null);
      },
      cancelCallback: async function() {
        var o;
        await ((o = e.cancelCallback) == null ? void 0 : o.call(e)), await (n == null ? void 0 : n()), s(
          new Error("CANCELLED")
        );
      }
    });
  });
}
function tc(e) {
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: e.children });
}
function kc(e) {
  return /* @__PURE__ */ a.jsx(Z, { children: /* @__PURE__ */ a.jsx(tc, { children: /* @__PURE__ */ a.jsx(Oe, { children: e.children }) }) });
}
const nc = { cursor: "copy" };
function Bc(e) {
  const { translate: t } = A(), {
    id: n,
    text: r,
    disabled: s,
    onCopied: l,
    style: o,
    noCursor: c,
    className: u,
    fullwidth: h,
    title: v,
    useDoubleClick: m,
    useRightClick: x,
    children: R,
    onClick: L,
    ...H
  } = e, I = t(r);
  function O() {
    s || (navigator.clipboard.writeText(I), l == null || l());
  }
  const S = {
    ...o || {},
    ...c ? {} : nc
  };
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      ...H,
      id: n,
      style: S,
      className: u + (h ? " is-fullwidth" : ""),
      title: v ? t(v) : I,
      onContextMenu: x ? O : void 0,
      onDoubleClick: m ? O : void 0,
      onClick: !m && !x ? (ce) => {
        O(), L == null || L(ce);
      } : L,
      children: R
    }
  );
}
function Mc({ children: e, time: t = 500 }) {
  const [n, r] = ge(!1);
  return X(() => {
    const s = setTimeout(() => {
      r(!0);
    }, t);
    return () => {
      clearTimeout(s);
    };
  }, [t]), n ? e : b;
}
export {
  oc as Block,
  lc as Box,
  gc as Breadcrumb,
  vc as BreadcrumbItem,
  sc as BulmaForm,
  z as BulmaFormSettings,
  Dl as Button,
  cc as Buttons,
  bc as Card,
  Oe as ConfirmRoot,
  $c as Container,
  uc as Content,
  mr as Control,
  Bc as Copiable,
  Ge as Delete,
  yc as Dropdown,
  xc as DropdownDivider,
  jc as DropdownItem,
  En as ErrorBoundary,
  Ac as Footer,
  Nn as Help,
  Rc as Hero,
  dc as Icon,
  hr as Image,
  Yl as Input,
  Lc as Level,
  Xl as LevelItem,
  wc as Media,
  Ul as Message,
  zl as Modal,
  Cc as Navbar,
  Ec as NavbarDivider,
  _c as NavbarDropdown,
  Tc as NavbarItem,
  Fl as Notification,
  Nc as Pagination,
  tc as PromptRoot,
  kc as Roots,
  Ic as Section,
  Sc as Select,
  Mc as ShowAfterNSeconds,
  Wl as Tab,
  fc as Table,
  Oc as Tabs,
  hc as Tag,
  mc as Tags,
  Pc as Textarea,
  kl as Titles,
  ec as Toast,
  Z as ToastsRoot,
  Fc as confirm,
  Dc as newToast
};