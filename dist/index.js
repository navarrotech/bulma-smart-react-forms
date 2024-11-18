/* Copyright © 2024 Navarrotech */
var Ir = Object.defineProperty;
var Fr = (e, t, n) => t in e ? Ir(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var se = (e, t, n) => Fr(e, typeof t != "symbol" ? t + "" : t, n);
import yn, { Component as jn, useState as ce, useEffect as K, createElement as je, useCallback as kr, Children as xn, isValidElement as _n, useRef as Dr } from "react";
import { createPortal as Mr } from "react-dom";
class Fl extends jn {
  constructor(t) {
    super(t);
  }
  componentDidMount() {
    this.setState({
      value: this.props.defaultValue
    });
  }
}
function Br(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rt = { exports: {} }, oe = typeof Reflect == "object" ? Reflect : null, Bt = oe && typeof oe.apply == "function" ? oe.apply : function(t, n, r) {
  return Function.prototype.apply.call(t, n, r);
}, Ne;
oe && typeof oe.ownKeys == "function" ? Ne = oe.ownKeys : Object.getOwnPropertySymbols ? Ne = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : Ne = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Ur(e) {
  console && console.warn && console.warn(e);
}
var Tn = Number.isNaN || function(t) {
  return t !== t;
};
function x() {
  x.init.call(this);
}
rt.exports = x;
rt.exports.once = Yr;
x.EventEmitter = x;
x.prototype._events = void 0;
x.prototype._eventsCount = 0;
x.prototype._maxListeners = void 0;
var Ut = 10;
function Le(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(x, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ut;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Tn(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Ut = e;
  }
});
x.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
x.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || Tn(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function wn(e) {
  return e._maxListeners === void 0 ? x.defaultMaxListeners : e._maxListeners;
}
x.prototype.getMaxListeners = function() {
  return wn(this);
};
x.prototype.emit = function(t) {
  for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
  var i = t === "error", o = this._events;
  if (o !== void 0)
    i = i && o.error === void 0;
  else if (!i)
    return !1;
  if (i) {
    var l;
    if (n.length > 0 && (l = n[0]), l instanceof Error)
      throw l;
    var f = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
    throw f.context = l, f;
  }
  var u = o[t];
  if (u === void 0)
    return !1;
  if (typeof u == "function")
    Bt(u, this, n);
  else
    for (var h = u.length, v = Sn(u, h), r = 0; r < h; ++r)
      Bt(v[r], this, n);
  return !0;
};
function Cn(e, t, n, r) {
  var i, o, l;
  if (Le(n), o = e._events, o === void 0 ? (o = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (o.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    n.listener ? n.listener : n
  ), o = e._events), l = o[t]), l === void 0)
    l = o[t] = n, ++e._eventsCount;
  else if (typeof l == "function" ? l = o[t] = r ? [n, l] : [l, n] : r ? l.unshift(n) : l.push(n), i = wn(e), i > 0 && l.length > i && !l.warned) {
    l.warned = !0;
    var f = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    f.name = "MaxListenersExceededWarning", f.emitter = e, f.type = t, f.count = l.length, Ur(f);
  }
  return e;
}
x.prototype.addListener = function(t, n) {
  return Cn(this, t, n, !1);
};
x.prototype.on = x.prototype.addListener;
x.prototype.prependListener = function(t, n) {
  return Cn(this, t, n, !0);
};
function zr() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function En(e, t, n) {
  var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, i = zr.bind(r);
  return i.listener = n, r.wrapFn = i, i;
}
x.prototype.once = function(t, n) {
  return Le(n), this.on(t, En(this, t, n)), this;
};
x.prototype.prependOnceListener = function(t, n) {
  return Le(n), this.prependListener(t, En(this, t, n)), this;
};
x.prototype.removeListener = function(t, n) {
  var r, i, o, l, f;
  if (Le(n), i = this._events, i === void 0)
    return this;
  if (r = i[t], r === void 0)
    return this;
  if (r === n || r.listener === n)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || n));
  else if (typeof r != "function") {
    for (o = -1, l = r.length - 1; l >= 0; l--)
      if (r[l] === n || r[l].listener === n) {
        f = r[l].listener, o = l;
        break;
      }
    if (o < 0)
      return this;
    o === 0 ? r.shift() : Wr(r, o), r.length === 1 && (i[t] = r[0]), i.removeListener !== void 0 && this.emit("removeListener", t, f || n);
  }
  return this;
};
x.prototype.off = x.prototype.removeListener;
x.prototype.removeAllListeners = function(t) {
  var n, r, i;
  if (r = this._events, r === void 0)
    return this;
  if (r.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r[t]), this;
  if (arguments.length === 0) {
    var o = Object.keys(r), l;
    for (i = 0; i < o.length; ++i)
      l = o[i], l !== "removeListener" && this.removeAllListeners(l);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (n = r[t], typeof n == "function")
    this.removeListener(t, n);
  else if (n !== void 0)
    for (i = n.length - 1; i >= 0; i--)
      this.removeListener(t, n[i]);
  return this;
};
function On(e, t, n) {
  var r = e._events;
  if (r === void 0)
    return [];
  var i = r[t];
  return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? Gr(i) : Sn(i, i.length);
}
x.prototype.listeners = function(t) {
  return On(this, t, !0);
};
x.prototype.rawListeners = function(t) {
  return On(this, t, !1);
};
x.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Pn.call(e, t);
};
x.prototype.listenerCount = Pn;
function Pn(e) {
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
x.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Ne(this._events) : [];
};
function Sn(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r)
    n[r] = e[r];
  return n;
}
function Wr(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function Gr(e) {
  for (var t = new Array(e.length), n = 0; n < t.length; ++n)
    t[n] = e[n].listener || e[n];
  return t;
}
function Yr(e, t) {
  return new Promise(function(n, r) {
    function i(l) {
      e.removeListener(t, o), r(l);
    }
    function o() {
      typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments));
    }
    $n(e, t, o, { once: !0 }), t !== "error" && Vr(e, i, { once: !0 });
  });
}
function Vr(e, t, n) {
  typeof e.on == "function" && $n(e, "error", t, n);
}
function $n(e, t, n, r) {
  if (typeof e.on == "function")
    r.once ? e.once(t, n) : e.on(t, n);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function i(o) {
      r.once && e.removeEventListener(t, i), n(o);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Kr = rt.exports;
const Hr = /* @__PURE__ */ Br(Kr), qr = (e) => e;
class Y {
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
se(Y, "translationFunction", qr), se(Y, "language", ""), se(Y, "events", new Hr()), // ////////////////////////// //
//    Targets and defaults    //
// ////////////////////////// //
se(Y, "CustomErrorBoundary", null), se(Y, "CustomModalParentElement", document.getElementById("body"));
var Qe = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function Jr() {
  if (zt) return ve;
  zt = 1;
  var e = yn, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, u, h) {
    var v, y = {}, C = null, F = null;
    h !== void 0 && (C = "" + h), u.key !== void 0 && (C = "" + u.key), u.ref !== void 0 && (F = u.ref);
    for (v in u) r.call(u, v) && !o.hasOwnProperty(v) && (y[v] = u[v]);
    if (f && f.defaultProps) for (v in u = f.defaultProps, u) y[v] === void 0 && (y[v] = u[v]);
    return { $$typeof: t, type: f, key: C, ref: F, props: y, _owner: i.current };
  }
  return ve.Fragment = n, ve.jsx = l, ve.jsxs = l, ve;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function Xr() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = yn, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), f = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), k = Symbol.iterator, W = "@@iterator";
    function A(a) {
      if (a === null || typeof a != "object")
        return null;
      var c = k && a[k] || a[W];
      return typeof c == "function" ? c : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(a) {
      {
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
          d[g - 1] = arguments[g];
        re("error", a, d);
      }
    }
    function re(a, c, d) {
      {
        var g = P.ReactDebugCurrentFrame, j = g.getStackAddendum();
        j !== "" && (c += "%s", d = d.concat([j]));
        var _ = d.map(function(b) {
          return String(b);
        });
        _.unshift("Warning: " + c), Function.prototype.apply.call(console[a], console, _);
      }
    }
    var Ee = !1, D = !1, fe = !1, Me = !1, ar = !1, vt;
    vt = Symbol.for("react.module.reference");
    function ir(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === r || a === o || ar || a === i || a === h || a === v || Me || a === F || Ee || D || fe || typeof a == "object" && a !== null && (a.$$typeof === C || a.$$typeof === y || a.$$typeof === l || a.$$typeof === f || a.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === vt || a.getModuleId !== void 0));
    }
    function sr(a, c, d) {
      var g = a.displayName;
      if (g)
        return g;
      var j = c.displayName || c.name || "";
      return j !== "" ? d + "(" + j + ")" : d;
    }
    function mt(a) {
      return a.displayName || "Context";
    }
    function B(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case f:
            var c = a;
            return mt(c) + ".Consumer";
          case l:
            var d = a;
            return mt(d._context) + ".Provider";
          case u:
            return sr(a, a.render, "ForwardRef");
          case y:
            var g = a.displayName || null;
            return g !== null ? g : B(a.type) || "Memo";
          case C: {
            var j = a, _ = j._payload, b = j._init;
            try {
              return B(b(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, de = 0, bt, yt, jt, xt, _t, Tt, wt;
    function Ct() {
    }
    Ct.__reactDisabledLog = !0;
    function or() {
      {
        if (de === 0) {
          bt = console.log, yt = console.info, jt = console.warn, xt = console.error, _t = console.group, Tt = console.groupCollapsed, wt = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: Ct,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        de++;
      }
    }
    function lr() {
      {
        if (de--, de === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, a, {
              value: bt
            }),
            info: q({}, a, {
              value: yt
            }),
            warn: q({}, a, {
              value: jt
            }),
            error: q({}, a, {
              value: xt
            }),
            group: q({}, a, {
              value: _t
            }),
            groupCollapsed: q({}, a, {
              value: Tt
            }),
            groupEnd: q({}, a, {
              value: wt
            })
          });
        }
        de < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Be = P.ReactCurrentDispatcher, Ue;
    function Oe(a, c, d) {
      {
        if (Ue === void 0)
          try {
            throw Error();
          } catch (j) {
            var g = j.stack.trim().match(/\n( *(at )?)/);
            Ue = g && g[1] || "";
          }
        return `
` + Ue + a;
      }
    }
    var ze = !1, Pe;
    {
      var cr = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new cr();
    }
    function Et(a, c) {
      if (!a || ze)
        return "";
      {
        var d = Pe.get(a);
        if (d !== void 0)
          return d;
      }
      var g;
      ze = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = Be.current, Be.current = null, or();
      try {
        if (c) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (L) {
              g = L;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (L) {
              g = L;
            }
            a.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            g = L;
          }
          a();
        }
      } catch (L) {
        if (L && g && typeof L.stack == "string") {
          for (var m = L.stack.split(`
`), R = g.stack.split(`
`), $ = m.length - 1, N = R.length - 1; $ >= 1 && N >= 0 && m[$] !== R[N]; )
            N--;
          for (; $ >= 1 && N >= 0; $--, N--)
            if (m[$] !== R[N]) {
              if ($ !== 1 || N !== 1)
                do
                  if ($--, N--, N < 0 || m[$] !== R[N]) {
                    var M = `
` + m[$].replace(" at new ", " at ");
                    return a.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", a.displayName)), typeof a == "function" && Pe.set(a, M), M;
                  }
                while ($ >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        ze = !1, Be.current = _, lr(), Error.prepareStackTrace = j;
      }
      var ie = a ? a.displayName || a.name : "", J = ie ? Oe(ie) : "";
      return typeof a == "function" && Pe.set(a, J), J;
    }
    function ur(a, c, d) {
      return Et(a, !1);
    }
    function fr(a) {
      var c = a.prototype;
      return !!(c && c.isReactComponent);
    }
    function Se(a, c, d) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Et(a, fr(a));
      if (typeof a == "string")
        return Oe(a);
      switch (a) {
        case h:
          return Oe("Suspense");
        case v:
          return Oe("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case u:
            return ur(a.render);
          case y:
            return Se(a.type, c, d);
          case C: {
            var g = a, j = g._payload, _ = g._init;
            try {
              return Se(_(j), c, d);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Ot = {}, Pt = P.ReactDebugCurrentFrame;
    function $e(a) {
      if (a) {
        var c = a._owner, d = Se(a.type, a._source, c ? c.type : null);
        Pt.setExtraStackFrame(d);
      } else
        Pt.setExtraStackFrame(null);
    }
    function dr(a, c, d, g, j) {
      {
        var _ = Function.call.bind(he);
        for (var b in a)
          if (_(a, b)) {
            var m = void 0;
            try {
              if (typeof a[b] != "function") {
                var R = Error((g || "React class") + ": " + d + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              m = a[b](c, b, g, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              m = $;
            }
            m && !(m instanceof Error) && ($e(j), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", d, b, typeof m), $e(null)), m instanceof Error && !(m.message in Ot) && (Ot[m.message] = !0, $e(j), S("Failed %s type: %s", d, m.message), $e(null));
          }
      }
    }
    var hr = Array.isArray;
    function We(a) {
      return hr(a);
    }
    function gr(a) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, d = c && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return d;
      }
    }
    function vr(a) {
      try {
        return St(a), !1;
      } catch {
        return !0;
      }
    }
    function St(a) {
      return "" + a;
    }
    function $t(a) {
      if (vr(a))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(a)), St(a);
    }
    var ge = P.ReactCurrentOwner, mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Nt, At, Ge;
    Ge = {};
    function br(a) {
      if (he.call(a, "ref")) {
        var c = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function yr(a) {
      if (he.call(a, "key")) {
        var c = Object.getOwnPropertyDescriptor(a, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function jr(a, c) {
      if (typeof a.ref == "string" && ge.current && c && ge.current.stateNode !== c) {
        var d = B(ge.current.type);
        Ge[d] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(ge.current.type), a.ref), Ge[d] = !0);
      }
    }
    function xr(a, c) {
      {
        var d = function() {
          Nt || (Nt = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        d.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function _r(a, c) {
      {
        var d = function() {
          At || (At = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        d.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Tr = function(a, c, d, g, j, _, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: c,
        ref: d,
        props: b,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function wr(a, c, d, g, j) {
      {
        var _, b = {}, m = null, R = null;
        d !== void 0 && ($t(d), m = "" + d), yr(c) && ($t(c.key), m = "" + c.key), br(c) && (R = c.ref, jr(c, j));
        for (_ in c)
          he.call(c, _) && !mr.hasOwnProperty(_) && (b[_] = c[_]);
        if (a && a.defaultProps) {
          var $ = a.defaultProps;
          for (_ in $)
            b[_] === void 0 && (b[_] = $[_]);
        }
        if (m || R) {
          var N = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          m && xr(b, N), R && _r(b, N);
        }
        return Tr(a, m, R, j, g, ge.current, b);
      }
    }
    var Ye = P.ReactCurrentOwner, Rt = P.ReactDebugCurrentFrame;
    function ae(a) {
      if (a) {
        var c = a._owner, d = Se(a.type, a._source, c ? c.type : null);
        Rt.setExtraStackFrame(d);
      } else
        Rt.setExtraStackFrame(null);
    }
    var Ve;
    Ve = !1;
    function Ke(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Lt() {
      {
        if (Ye.current) {
          var a = B(Ye.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Cr(a) {
      return "";
    }
    var It = {};
    function Er(a) {
      {
        var c = Lt();
        if (!c) {
          var d = typeof a == "string" ? a : a.displayName || a.name;
          d && (c = `

Check the top-level render call using <` + d + ">.");
        }
        return c;
      }
    }
    function Ft(a, c) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var d = Er(c);
        if (It[d])
          return;
        It[d] = !0;
        var g = "";
        a && a._owner && a._owner !== Ye.current && (g = " It was passed a child from " + B(a._owner.type) + "."), ae(a), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, g), ae(null);
      }
    }
    function kt(a, c) {
      {
        if (typeof a != "object")
          return;
        if (We(a))
          for (var d = 0; d < a.length; d++) {
            var g = a[d];
            Ke(g) && Ft(g, c);
          }
        else if (Ke(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var j = A(a);
          if (typeof j == "function" && j !== a.entries)
            for (var _ = j.call(a), b; !(b = _.next()).done; )
              Ke(b.value) && Ft(b.value, c);
        }
      }
    }
    function Or(a) {
      {
        var c = a.type;
        if (c == null || typeof c == "string")
          return;
        var d;
        if (typeof c == "function")
          d = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === y))
          d = c.propTypes;
        else
          return;
        if (d) {
          var g = B(c);
          dr(d, a.props, "prop", g, a);
        } else if (c.PropTypes !== void 0 && !Ve) {
          Ve = !0;
          var j = B(c);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pr(a) {
      {
        for (var c = Object.keys(a.props), d = 0; d < c.length; d++) {
          var g = c[d];
          if (g !== "children" && g !== "key") {
            ae(a), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), ae(null);
            break;
          }
        }
        a.ref !== null && (ae(a), S("Invalid attribute `ref` supplied to `React.Fragment`."), ae(null));
      }
    }
    var Dt = {};
    function Mt(a, c, d, g, j, _) {
      {
        var b = ir(a);
        if (!b) {
          var m = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = Cr();
          R ? m += R : m += Lt();
          var $;
          a === null ? $ = "null" : We(a) ? $ = "array" : a !== void 0 && a.$$typeof === t ? ($ = "<" + (B(a.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof a, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, m);
        }
        var N = wr(a, c, d, j, _);
        if (N == null)
          return N;
        if (b) {
          var M = c.children;
          if (M !== void 0)
            if (g)
              if (We(M)) {
                for (var ie = 0; ie < M.length; ie++)
                  kt(M[ie], a);
                Object.freeze && Object.freeze(M);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              kt(M, a);
        }
        if (he.call(c, "key")) {
          var J = B(a), L = Object.keys(c).filter(function(Lr) {
            return Lr !== "key";
          }), He = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dt[J + He]) {
            var Rr = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, He, J, Rr, J), Dt[J + He] = !0;
          }
        }
        return a === r ? Pr(N) : Or(N), N;
      }
    }
    function Sr(a, c, d) {
      return Mt(a, c, d, !0);
    }
    function $r(a, c, d) {
      return Mt(a, c, d, !1);
    }
    var Nr = $r, Ar = Sr;
    me.Fragment = r, me.jsx = Nr, me.jsxs = Ar;
  }()), me;
}
process.env.NODE_ENV === "production" ? Qe.exports = Jr() : Qe.exports = Xr();
var s = Qe.exports;
function Zr(e) {
  return Y.translationFunction(e);
}
function I() {
  const [e, t] = ce(Y.getCurrentLanguage());
  return K(() => Y.onLanguageChange(t), []), {
    // The ref won't change with the fn proxy, so it's safe to use it in dependency arrays
    translate: Zr,
    language: e
  };
}
function Qr(e, t, n = [], r = !1) {
  K(() => {
    if (r)
      return () => {
      };
    const i = (o) => {
      var l, f, u;
      (l = o.preventDefault) == null || l.call(o), (f = o.stopPropagation) == null || f.call(o), (u = o.stopImmediatePropagation) == null || u.call(o), o.key === e && t();
    };
    return window.addEventListener("keydown", i), () => {
      window.removeEventListener("keydown", i);
    };
  }, [e, t, r, ...n]);
}
function at(e, t = "is") {
  const { left: n, right: r, centered: i } = e;
  return [
    n && `${t}-left`,
    r && `${t}-right`,
    i && `${t}-centered`
  ].filter(Boolean).join(" ") || "";
}
function Te(e, t = "is") {
  const { small: n, medium: r, large: i } = e;
  return [
    n && `${t}-small`,
    r && `${t}-medium`,
    i && `${t}-large`
  ].filter(Boolean).join(" ") || "";
}
var Nn = typeof global == "object" && global && global.Object === Object && global, pr = typeof self == "object" && self && self.Object === Object && self, z = Nn || pr || Function("return this")(), U = z.Symbol, An = Object.prototype, ea = An.hasOwnProperty, ta = An.toString, be = U ? U.toStringTag : void 0;
function na(e) {
  var t = ea.call(e, be), n = e[be];
  try {
    e[be] = void 0;
    var r = !0;
  } catch {
  }
  var i = ta.call(e);
  return r && (t ? e[be] = n : delete e[be]), i;
}
var ra = Object.prototype, aa = ra.toString;
function ia(e) {
  return aa.call(e);
}
var sa = "[object Null]", oa = "[object Undefined]", Gt = U ? U.toStringTag : void 0;
function Q(e) {
  return e == null ? e === void 0 ? oa : sa : Gt && Gt in Object(e) ? na(e) : ia(e);
}
function p(e) {
  return e != null && typeof e == "object";
}
var la = "[object Symbol]";
function Ie(e) {
  return typeof e == "symbol" || p(e) && Q(e) == la;
}
function Rn(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var ee = Array.isArray, ca = 1 / 0, Yt = U ? U.prototype : void 0, Vt = Yt ? Yt.toString : void 0;
function Ln(e) {
  if (typeof e == "string")
    return e;
  if (ee(e))
    return Rn(e, Ln) + "";
  if (Ie(e))
    return Vt ? Vt.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ca ? "-0" : t;
}
var ua = /\s/;
function fa(e) {
  for (var t = e.length; t-- && ua.test(e.charAt(t)); )
    ;
  return t;
}
var da = /^\s+/;
function ha(e) {
  return e && e.slice(0, fa(e) + 1).replace(da, "");
}
function X(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Kt = NaN, ga = /^[-+]0x[0-9a-f]+$/i, va = /^0b[01]+$/i, ma = /^0o[0-7]+$/i, ba = parseInt;
function qe(e) {
  if (typeof e == "number")
    return e;
  if (Ie(e))
    return Kt;
  if (X(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = X(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ha(e);
  var n = va.test(e);
  return n || ma.test(e) ? ba(e.slice(2), n ? 2 : 8) : ga.test(e) ? Kt : +e;
}
function ya(e) {
  return e;
}
var ja = "[object AsyncFunction]", xa = "[object Function]", _a = "[object GeneratorFunction]", Ta = "[object Proxy]";
function In(e) {
  if (!X(e))
    return !1;
  var t = Q(e);
  return t == xa || t == _a || t == ja || t == Ta;
}
var Je = z["__core-js_shared__"], Ht = function() {
  var e = /[^.]+$/.exec(Je && Je.keys && Je.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function wa(e) {
  return !!Ht && Ht in e;
}
var Ca = Function.prototype, Ea = Ca.toString;
function te(e) {
  if (e != null) {
    try {
      return Ea.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Oa = /[\\^$.*+?()[\]{}|]/g, Pa = /^\[object .+?Constructor\]$/, Sa = Function.prototype, $a = Object.prototype, Na = Sa.toString, Aa = $a.hasOwnProperty, Ra = RegExp(
  "^" + Na.call(Aa).replace(Oa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function La(e) {
  if (!X(e) || wa(e))
    return !1;
  var t = In(e) ? Ra : Pa;
  return t.test(te(e));
}
function Ia(e, t) {
  return e == null ? void 0 : e[t];
}
function ne(e, t) {
  var n = Ia(e, t);
  return La(n) ? n : void 0;
}
var pe = ne(z, "WeakMap"), qt = Object.create, Fa = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!X(t))
      return {};
    if (qt)
      return qt(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function ka(e, t, n) {
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
function Da(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Ma = 800, Ba = 16, Ua = Date.now;
function za(e) {
  var t = 0, n = 0;
  return function() {
    var r = Ua(), i = Ba - (r - n);
    if (n = r, i > 0) {
      if (++t >= Ma)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Wa(e) {
  return function() {
    return e;
  };
}
var Re = function() {
  try {
    var e = ne(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ga = Re ? function(e, t) {
  return Re(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Wa(t),
    writable: !0
  });
} : ya, Ya = za(Ga);
function Va(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Ka = 9007199254740991, Ha = /^(?:0|[1-9]\d*)$/;
function qa(e, t) {
  var n = typeof e;
  return t = t ?? Ka, !!t && (n == "number" || n != "symbol" && Ha.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Fn(e, t, n) {
  t == "__proto__" && Re ? Re(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function kn(e, t) {
  return e === t || e !== e && t !== t;
}
var Ja = Object.prototype, Xa = Ja.hasOwnProperty;
function Dn(e, t, n) {
  var r = e[t];
  (!(Xa.call(e, t) && kn(r, n)) || n === void 0 && !(t in e)) && Fn(e, t, n);
}
function we(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var o = -1, l = t.length; ++o < l; ) {
    var f = t[o], u = void 0;
    u === void 0 && (u = e[f]), i ? Fn(n, f, u) : Dn(n, f, u);
  }
  return n;
}
var Jt = Math.max;
function Za(e, t, n) {
  return t = Jt(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, o = Jt(r.length - t, 0), l = Array(o); ++i < o; )
      l[i] = r[t + i];
    i = -1;
    for (var f = Array(t + 1); ++i < t; )
      f[i] = r[i];
    return f[t] = n(l), ka(e, this, f);
  };
}
var Qa = 9007199254740991;
function Mn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qa;
}
function Bn(e) {
  return e != null && Mn(e.length) && !In(e);
}
var pa = Object.prototype;
function it(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || pa;
  return e === n;
}
function ei(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ti = "[object Arguments]";
function Xt(e) {
  return p(e) && Q(e) == ti;
}
var Un = Object.prototype, ni = Un.hasOwnProperty, ri = Un.propertyIsEnumerable, zn = Xt(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xt : function(e) {
  return p(e) && ni.call(e, "callee") && !ri.call(e, "callee");
};
function ai() {
  return !1;
}
var Wn = typeof exports == "object" && exports && !exports.nodeType && exports, Zt = Wn && typeof module == "object" && module && !module.nodeType && module, ii = Zt && Zt.exports === Wn, Qt = ii ? z.Buffer : void 0, si = Qt ? Qt.isBuffer : void 0, Gn = si || ai, oi = "[object Arguments]", li = "[object Array]", ci = "[object Boolean]", ui = "[object Date]", fi = "[object Error]", di = "[object Function]", hi = "[object Map]", gi = "[object Number]", vi = "[object Object]", mi = "[object RegExp]", bi = "[object Set]", yi = "[object String]", ji = "[object WeakMap]", xi = "[object ArrayBuffer]", _i = "[object DataView]", Ti = "[object Float32Array]", wi = "[object Float64Array]", Ci = "[object Int8Array]", Ei = "[object Int16Array]", Oi = "[object Int32Array]", Pi = "[object Uint8Array]", Si = "[object Uint8ClampedArray]", $i = "[object Uint16Array]", Ni = "[object Uint32Array]", E = {};
E[Ti] = E[wi] = E[Ci] = E[Ei] = E[Oi] = E[Pi] = E[Si] = E[$i] = E[Ni] = !0;
E[oi] = E[li] = E[xi] = E[ci] = E[_i] = E[ui] = E[fi] = E[di] = E[hi] = E[gi] = E[vi] = E[mi] = E[bi] = E[yi] = E[ji] = !1;
function Ai(e) {
  return p(e) && Mn(e.length) && !!E[Q(e)];
}
function st(e) {
  return function(t) {
    return e(t);
  };
}
var Yn = typeof exports == "object" && exports && !exports.nodeType && exports, ye = Yn && typeof module == "object" && module && !module.nodeType && module, Ri = ye && ye.exports === Yn, Xe = Ri && Nn.process, le = function() {
  try {
    var e = ye && ye.require && ye.require("util").types;
    return e || Xe && Xe.binding && Xe.binding("util");
  } catch {
  }
}(), pt = le && le.isTypedArray, Li = pt ? st(pt) : Ai, Ii = Object.prototype, Fi = Ii.hasOwnProperty;
function Vn(e, t) {
  var n = ee(e), r = !n && zn(e), i = !n && !r && Gn(e), o = !n && !r && !i && Li(e), l = n || r || i || o, f = l ? ei(e.length, String) : [], u = f.length;
  for (var h in e)
    (t || Fi.call(e, h)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    qa(h, u))) && f.push(h);
  return f;
}
function Kn(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ki = Kn(Object.keys, Object), Di = Object.prototype, Mi = Di.hasOwnProperty;
function Bi(e) {
  if (!it(e))
    return ki(e);
  var t = [];
  for (var n in Object(e))
    Mi.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ot(e) {
  return Bn(e) ? Vn(e) : Bi(e);
}
function Ui(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var zi = Object.prototype, Wi = zi.hasOwnProperty;
function Gi(e) {
  if (!X(e))
    return Ui(e);
  var t = it(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Wi.call(e, r)) || n.push(r);
  return n;
}
function lt(e) {
  return Bn(e) ? Vn(e, !0) : Gi(e);
}
var Yi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Vi = /^\w*$/;
function Ki(e, t) {
  if (ee(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ie(e) ? !0 : Vi.test(e) || !Yi.test(e) || t != null && e in Object(t);
}
var xe = ne(Object, "create");
function Hi() {
  this.__data__ = xe ? xe(null) : {}, this.size = 0;
}
function qi(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ji = "__lodash_hash_undefined__", Xi = Object.prototype, Zi = Xi.hasOwnProperty;
function Qi(e) {
  var t = this.__data__;
  if (xe) {
    var n = t[e];
    return n === Ji ? void 0 : n;
  }
  return Zi.call(t, e) ? t[e] : void 0;
}
var pi = Object.prototype, es = pi.hasOwnProperty;
function ts(e) {
  var t = this.__data__;
  return xe ? t[e] !== void 0 : es.call(t, e);
}
var ns = "__lodash_hash_undefined__";
function rs(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = xe && t === void 0 ? ns : t, this;
}
function Z(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Z.prototype.clear = Hi;
Z.prototype.delete = qi;
Z.prototype.get = Qi;
Z.prototype.has = ts;
Z.prototype.set = rs;
function as() {
  this.__data__ = [], this.size = 0;
}
function Fe(e, t) {
  for (var n = e.length; n--; )
    if (kn(e[n][0], t))
      return n;
  return -1;
}
var is = Array.prototype, ss = is.splice;
function os(e) {
  var t = this.__data__, n = Fe(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : ss.call(t, n, 1), --this.size, !0;
}
function ls(e) {
  var t = this.__data__, n = Fe(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function cs(e) {
  return Fe(this.__data__, e) > -1;
}
function us(e, t) {
  var n = this.__data__, r = Fe(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function V(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
V.prototype.clear = as;
V.prototype.delete = os;
V.prototype.get = ls;
V.prototype.has = cs;
V.prototype.set = us;
var _e = ne(z, "Map");
function fs() {
  this.size = 0, this.__data__ = {
    hash: new Z(),
    map: new (_e || V)(),
    string: new Z()
  };
}
function ds(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ke(e, t) {
  var n = e.__data__;
  return ds(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function hs(e) {
  var t = ke(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function gs(e) {
  return ke(this, e).get(e);
}
function vs(e) {
  return ke(this, e).has(e);
}
function ms(e, t) {
  var n = ke(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function H(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
H.prototype.clear = fs;
H.prototype.delete = hs;
H.prototype.get = gs;
H.prototype.has = vs;
H.prototype.set = ms;
var bs = "Expected a function";
function ct(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(bs);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var l = e.apply(this, r);
    return n.cache = o.set(i, l) || o, l;
  };
  return n.cache = new (ct.Cache || H)(), n;
}
ct.Cache = H;
var ys = 500;
function js(e) {
  var t = ct(e, function(r) {
    return n.size === ys && n.clear(), r;
  }), n = t.cache;
  return t;
}
var xs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _s = /\\(\\)?/g, Ts = js(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(xs, function(n, r, i, o) {
    t.push(i ? o.replace(_s, "$1") : r || n);
  }), t;
});
function ws(e) {
  return e == null ? "" : Ln(e);
}
function ut(e, t) {
  return ee(e) ? e : Ki(e, t) ? [e] : Ts(ws(e));
}
var Cs = 1 / 0;
function Hn(e) {
  if (typeof e == "string" || Ie(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Cs ? "-0" : t;
}
function Es(e, t) {
  t = ut(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Hn(t[n++])];
  return n && n == r ? e : void 0;
}
function ft(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var en = U ? U.isConcatSpreadable : void 0;
function Os(e) {
  return ee(e) || zn(e) || !!(en && e && e[en]);
}
function Ps(e, t, n, r, i) {
  var o = -1, l = e.length;
  for (n || (n = Os), i || (i = []); ++o < l; ) {
    var f = e[o];
    n(f) ? ft(i, f) : i[i.length] = f;
  }
  return i;
}
function Ss(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ps(e) : [];
}
function $s(e) {
  return Ya(Za(e, void 0, Ss), e + "");
}
var dt = Kn(Object.getPrototypeOf, Object), Ns = "[object Object]", As = Function.prototype, Rs = Object.prototype, qn = As.toString, Ls = Rs.hasOwnProperty, Is = qn.call(Object);
function Fs(e) {
  if (!p(e) || Q(e) != Ns)
    return !1;
  var t = dt(e);
  if (t === null)
    return !0;
  var n = Ls.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && qn.call(n) == Is;
}
function ks(e, t, n) {
  var r = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), n = n > i ? i : n, n < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = e[r + t];
  return o;
}
function Ds(e, t, n) {
  return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
}
function Ze(e, t, n) {
  return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = qe(n), n = n === n ? n : 0), t !== void 0 && (t = qe(t), t = t === t ? t : 0), Ds(qe(e), t, n);
}
function Ms() {
  this.__data__ = new V(), this.size = 0;
}
function Bs(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Us(e) {
  return this.__data__.get(e);
}
function zs(e) {
  return this.__data__.has(e);
}
var Ws = 200;
function Gs(e, t) {
  var n = this.__data__;
  if (n instanceof V) {
    var r = n.__data__;
    if (!_e || r.length < Ws - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new H(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ue(e) {
  var t = this.__data__ = new V(e);
  this.size = t.size;
}
ue.prototype.clear = Ms;
ue.prototype.delete = Bs;
ue.prototype.get = Us;
ue.prototype.has = zs;
ue.prototype.set = Gs;
function Ys(e, t) {
  return e && we(t, ot(t), e);
}
function Vs(e, t) {
  return e && we(t, lt(t), e);
}
var Jn = typeof exports == "object" && exports && !exports.nodeType && exports, tn = Jn && typeof module == "object" && module && !module.nodeType && module, Ks = tn && tn.exports === Jn, nn = Ks ? z.Buffer : void 0, rn = nn ? nn.allocUnsafe : void 0;
function Hs(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = rn ? rn(n) : new e.constructor(n);
  return e.copy(r), r;
}
function qs(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (o[i++] = l);
  }
  return o;
}
function Xn() {
  return [];
}
var Js = Object.prototype, Xs = Js.propertyIsEnumerable, an = Object.getOwnPropertySymbols, ht = an ? function(e) {
  return e == null ? [] : (e = Object(e), qs(an(e), function(t) {
    return Xs.call(e, t);
  }));
} : Xn;
function Zs(e, t) {
  return we(e, ht(e), t);
}
var Qs = Object.getOwnPropertySymbols, Zn = Qs ? function(e) {
  for (var t = []; e; )
    ft(t, ht(e)), e = dt(e);
  return t;
} : Xn;
function ps(e, t) {
  return we(e, Zn(e), t);
}
function Qn(e, t, n) {
  var r = t(e);
  return ee(e) ? r : ft(r, n(e));
}
function eo(e) {
  return Qn(e, ot, ht);
}
function pn(e) {
  return Qn(e, lt, Zn);
}
var et = ne(z, "DataView"), tt = ne(z, "Promise"), nt = ne(z, "Set"), sn = "[object Map]", to = "[object Object]", on = "[object Promise]", ln = "[object Set]", cn = "[object WeakMap]", un = "[object DataView]", no = te(et), ro = te(_e), ao = te(tt), io = te(nt), so = te(pe), G = Q;
(et && G(new et(new ArrayBuffer(1))) != un || _e && G(new _e()) != sn || tt && G(tt.resolve()) != on || nt && G(new nt()) != ln || pe && G(new pe()) != cn) && (G = function(e) {
  var t = Q(e), n = t == to ? e.constructor : void 0, r = n ? te(n) : "";
  if (r)
    switch (r) {
      case no:
        return un;
      case ro:
        return sn;
      case ao:
        return on;
      case io:
        return ln;
      case so:
        return cn;
    }
  return t;
});
var oo = Object.prototype, lo = oo.hasOwnProperty;
function co(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && lo.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var fn = z.Uint8Array;
function gt(e) {
  var t = new e.constructor(e.byteLength);
  return new fn(t).set(new fn(e)), t;
}
function uo(e, t) {
  var n = t ? gt(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var fo = /\w*$/;
function ho(e) {
  var t = new e.constructor(e.source, fo.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var dn = U ? U.prototype : void 0, hn = dn ? dn.valueOf : void 0;
function go(e) {
  return hn ? Object(hn.call(e)) : {};
}
function vo(e, t) {
  var n = t ? gt(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var mo = "[object Boolean]", bo = "[object Date]", yo = "[object Map]", jo = "[object Number]", xo = "[object RegExp]", _o = "[object Set]", To = "[object String]", wo = "[object Symbol]", Co = "[object ArrayBuffer]", Eo = "[object DataView]", Oo = "[object Float32Array]", Po = "[object Float64Array]", So = "[object Int8Array]", $o = "[object Int16Array]", No = "[object Int32Array]", Ao = "[object Uint8Array]", Ro = "[object Uint8ClampedArray]", Lo = "[object Uint16Array]", Io = "[object Uint32Array]";
function Fo(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Co:
      return gt(e);
    case mo:
    case bo:
      return new r(+e);
    case Eo:
      return uo(e, n);
    case Oo:
    case Po:
    case So:
    case $o:
    case No:
    case Ao:
    case Ro:
    case Lo:
    case Io:
      return vo(e, n);
    case yo:
      return new r();
    case jo:
    case To:
      return new r(e);
    case xo:
      return ho(e);
    case _o:
      return new r();
    case wo:
      return go(e);
  }
}
function ko(e) {
  return typeof e.constructor == "function" && !it(e) ? Fa(dt(e)) : {};
}
var Do = "[object Map]";
function Mo(e) {
  return p(e) && G(e) == Do;
}
var gn = le && le.isMap, Bo = gn ? st(gn) : Mo, Uo = "[object Set]";
function zo(e) {
  return p(e) && G(e) == Uo;
}
var vn = le && le.isSet, Wo = vn ? st(vn) : zo, Go = 1, Yo = 2, Vo = 4, er = "[object Arguments]", Ko = "[object Array]", Ho = "[object Boolean]", qo = "[object Date]", Jo = "[object Error]", tr = "[object Function]", Xo = "[object GeneratorFunction]", Zo = "[object Map]", Qo = "[object Number]", nr = "[object Object]", po = "[object RegExp]", el = "[object Set]", tl = "[object String]", nl = "[object Symbol]", rl = "[object WeakMap]", al = "[object ArrayBuffer]", il = "[object DataView]", sl = "[object Float32Array]", ol = "[object Float64Array]", ll = "[object Int8Array]", cl = "[object Int16Array]", ul = "[object Int32Array]", fl = "[object Uint8Array]", dl = "[object Uint8ClampedArray]", hl = "[object Uint16Array]", gl = "[object Uint32Array]", T = {};
T[er] = T[Ko] = T[al] = T[il] = T[Ho] = T[qo] = T[sl] = T[ol] = T[ll] = T[cl] = T[ul] = T[Zo] = T[Qo] = T[nr] = T[po] = T[el] = T[tl] = T[nl] = T[fl] = T[dl] = T[hl] = T[gl] = !0;
T[Jo] = T[tr] = T[rl] = !1;
function Ae(e, t, n, r, i, o) {
  var l, f = t & Go, u = t & Yo, h = t & Vo;
  if (n && (l = i ? n(e, r, i, o) : n(e)), l !== void 0)
    return l;
  if (!X(e))
    return e;
  var v = ee(e);
  if (v) {
    if (l = co(e), !f)
      return Da(e, l);
  } else {
    var y = G(e), C = y == tr || y == Xo;
    if (Gn(e))
      return Hs(e, f);
    if (y == nr || y == er || C && !i) {
      if (l = u || C ? {} : ko(e), !f)
        return u ? ps(e, Vs(l, e)) : Zs(e, Ys(l, e));
    } else {
      if (!T[y])
        return i ? e : {};
      l = Fo(e, y, f);
    }
  }
  o || (o = new ue());
  var F = o.get(e);
  if (F)
    return F;
  o.set(e, l), Wo(e) ? e.forEach(function(A) {
    l.add(Ae(A, t, n, A, e, o));
  }) : Bo(e) && e.forEach(function(A, P) {
    l.set(P, Ae(A, t, n, P, e, o));
  });
  var k = h ? u ? pn : eo : u ? lt : ot, W = v ? void 0 : k(e);
  return Va(W || e, function(A, P) {
    W && (P = A, A = e[P]), Dn(l, P, Ae(A, t, n, P, e, o));
  }), l;
}
function vl(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function ml(e, t) {
  return t.length < 2 ? e : Es(e, ks(t, 0, -1));
}
function bl(e, t) {
  return t = ut(t, e), e = ml(e, t), e == null || delete e[Hn(vl(t))];
}
function yl(e) {
  return Fs(e) ? void 0 : e;
}
var jl = 1, xl = 2, _l = 4, Tl = $s(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = Rn(t, function(o) {
    return o = ut(o, e), r || (r = o.length > 1), o;
  }), we(e, pn(e), n), r && (n = Ae(n, jl | xl | _l, yl));
  for (var i = t.length; i--; )
    bl(n, t[i]);
  return n;
});
const w = /* @__PURE__ */ s.jsx(s.Fragment, {}), wl = [
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
function Cl(e, t = []) {
  return Tl(
    e,
    [
      ...wl,
      ...t
    ]
  );
}
function O({ rootClassname: e, ...t }) {
  const { translate: n } = I();
  return je(
    t.as || "div",
    {
      ...Cl(t),
      title: n(t.title),
      className: `${e} ${t.className}`
    },
    typeof t.children == "string" ? n(t.children) : t.children
  );
}
function kl(e) {
  return /* @__PURE__ */ s.jsx(
    O,
    {
      rootClassname: "block",
      ...e
    }
  );
}
function Dl(e) {
  return /* @__PURE__ */ s.jsx(
    O,
    {
      rootClassname: "block box",
      ...e
    }
  );
}
function Ce(e) {
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
    const i = e.color.length;
    // If it's a hex color
    e.color.startsWith("#") && i === 4 || i === 7 || i === 9 || e.color.startsWith("rgb") || e.color.startsWith("hsl") || e.color.startsWith("var(--") ? n = {
      ...n,
      backgroundColor: e.color
    } : t += ` is-${e.color}`;
  }
  return t = t.trim(), {
    className: t,
    style: n
  };
}
function El(e) {
  const { translate: t } = I(), { className: n, style: r } = Ce(e), i = Te(e), o = [
    n,
    i,
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
  ].filter(Boolean).join(" "), l = kr((v) => {
    !e.onClick || e.disabled || e.loading || e.onClick(v);
  }, [e.onClick, e.disabled, e.loading]), f = e.icon ? /* @__PURE__ */ s.jsx("span", { className: "icon", children: e.icon }) : w, u = e.iconRight ? /* @__PURE__ */ s.jsx("span", { className: "icon", children: e.iconRight }) : w, h = e.as || "button";
  return /* @__PURE__ */ s.jsxs(
    O,
    {
      ...e,
      as: h,
      type: h === "button" ? "button" : void 0,
      rootClassname: "button",
      disabled: e.disabled || e.loading,
      onClick: l,
      className: o,
      style: r,
      children: [
        f,
        typeof e.children == "string" || e.text ? /* @__PURE__ */ s.jsx(s.Fragment, { children: /* @__PURE__ */ s.jsx("span", { children: t(e.text || e.children) }) }) : e.children,
        u
      ]
    }
  );
}
function Ml(e) {
  if (e.singleLine) {
    const n = [
      "is-grouped",
      e.className,
      e.disabled && "are-disabled",
      e.fullwidth && "is-fullwidth",
      e.hasAddons && "has-addons"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s.jsx(
      O,
      {
        ...e,
        rootClassname: "field",
        className: n,
        children: xn.map(e.children, (r) => _n(r) ? /* @__PURE__ */ s.jsx("div", { className: "control", children: r }) : r)
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
  return /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      rootClassname: "buttons",
      className: t,
      children: e.children
    }
  );
}
function Bl(e) {
  return /* @__PURE__ */ s.jsx(
    O,
    {
      rootClassname: "content",
      ...e
    }
  );
}
function De(e) {
  const t = [
    "delete",
    e.className,
    e.fullwidth && "is-fullwidth",
    e.disabled && "is-disabled",
    e.small && "is-small",
    e.medium && "is-medium",
    e.large && "is-large"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    "button",
    {
      ...e,
      className: t,
      onClick: !e.disabled && e.onClick
    }
  );
}
function Ul(e) {
  const t = [
    "icon",
    e.color && `has-text-${e.color}`,
    e.small && "is-small",
    e.medium && "is-medium",
    e.large && "is-large"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      as: "span",
      rootClassname: t
    }
  );
}
function rr(e) {
  const { translate: t } = I(), n = [
    "image",
    e.className,
    e.rounded && "is-rounded",
    e.left && "mr-auto",
    e.centered && "mx-auto",
    e.right && "ml-auto",
    e.ratio && `is-${e.ratio}`,
    e.size && `is-${e.size}x${e.size}`
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    "figure",
    {
      ...e,
      title: t(e.title),
      className: n,
      children: /* @__PURE__ */ s.jsx(
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
function zl(e) {
  const { className: t, style: n } = Ce(e), { translate: r } = I();
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ...e,
      title: r(e.title),
      className: t,
      style: n,
      children: [
        e.showDelete ? /* @__PURE__ */ s.jsx(
          De,
          {
            onClick: e.onDelete
          }
        ) : /* @__PURE__ */ s.jsx(s.Fragment, {}),
        e.icon ? /* @__PURE__ */ s.jsx(s.Fragment, {}) : /* @__PURE__ */ s.jsx("span", { className: "icon mr-1", children: e.icon }),
        e.message ? /* @__PURE__ */ s.jsx("span", { children: r(e.message) }) : typeof e.children == "string" ? /* @__PURE__ */ s.jsx("span", { children: r(e.children) }) : e.children
      ]
    }
  );
}
function Wl(e) {
  const t = [
    "table",
    e.striped ? "is-striped" : "",
    e.narrow ? "is-narrow" : "",
    e.bordered ? "is-bordered" : "",
    e.hoverable ? "is-hoverable" : "",
    e.fullwidth ? "is-fullwidth" : ""
  ].filter(Boolean).join(" "), n = /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      rootClassname: t,
      as: "table"
    }
  );
  return e.scrollable ? /* @__PURE__ */ s.jsx("div", { className: "table-container", children: n }) : n;
}
function Gl(e) {
  const { className: t, style: n } = Ce(e), { translate: r } = I(), i = [
    e.small && "is-small",
    e.medium && "is-medium",
    e.large && "is-large",
    e.normal && "is-normal"
  ].filter(Boolean).join(" "), o = [
    t,
    i,
    e.hoverable && "is-hoverable",
    e.rounded && "is-rounded",
    e.isDelete && "is-delete"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs(
    O,
    {
      ...e,
      as: e.isDelete ? "a" : "span",
      onClick: !e.disabled && e.onDelete,
      rootClassname: "tag",
      className: o,
      style: n,
      children: [
        e.message ? r(e.message) : typeof e.children == "string" ? r(e.children) : e.children,
        e.withDeleteButton ? /* @__PURE__ */ s.jsx(
          De,
          {
            onClick: !e.disabled && e.onDelete,
            className: i
          }
        ) : w
      ]
    }
  );
}
function Yl(e) {
  if (e.singleLine) {
    const n = [
      "is-grouped",
      e.className,
      e.disabled && "are-disabled",
      e.fullwidth && "is-fullwidth",
      e.hasAddons && "has-addons"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ s.jsx(
      O,
      {
        ...e,
        rootClassname: "field",
        className: n,
        children: xn.map(e.children, (r) => _n(r) ? /* @__PURE__ */ s.jsx("div", { className: "control", children: r }) : r)
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
  return /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      rootClassname: "tags",
      className: t,
      children: e.children
    }
  );
}
const mn = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
  7: "h6"
};
function Ol(e) {
  var u, h;
  const { translate: t } = I(), n = e.titleSize || 3, r = e.subtitleSize || 5, i = mn[n], o = mn[r], l = `title is-${n} ${(u = e.titleProps) == null ? void 0 : u.className} ${e.spaced ? "is-spaced" : ""}`.trim(), f = `subtitle is-${r} ${(h = e.subtitleProps) == null ? void 0 : h.className}`.trim();
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.title ? je(
      i,
      {
        ...e.titleProps,
        className: l
      },
      t(e.title)
    ) : w,
    e.subtitle ? je(
      o,
      {
        ...e.subtitleProps,
        className: f
      },
      t(e.subtitle)
    ) : w
  ] });
}
function Vl(e) {
  const t = at(e), n = Te(e), r = [
    "breadcrumb",
    t,
    n,
    e.hasArrowSeparator && "has-arrow-separator",
    e.hasBulletSeparator && "has-bullet-separator",
    e.hasDotSeparator && "has-dot-separator",
    e.hasSucceedsSeparator && "has-succeeds-separator"
  ].filter(Boolean).join(" ").trim();
  return /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      rootClassname: r,
      "aria-label": "breadcrumbs",
      as: "nav",
      children: e.children
    }
  );
}
function Kl(e) {
  return /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      rootClassname: e.active ? "is-active" : "",
      as: "li",
      children: /* @__PURE__ */ s.jsx(
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
function Hl(e) {
  const { translate: t } = I();
  return /* @__PURE__ */ s.jsxs(
    O,
    {
      ...e,
      rootClassname: "card",
      as: "div",
      children: [
        e.header ? /* @__PURE__ */ s.jsxs("header", { className: "card-header", children: [
          /* @__PURE__ */ s.jsx("p", { className: "card-header-title", children: t(e.header) }),
          e.hideCollapse ? w : /* @__PURE__ */ s.jsx("button", { className: "card-header-icon", "aria-label": "more options", children: /* @__PURE__ */ s.jsx("span", { className: "icon", children: e.collapseIcon || Pl }) })
        ] }) : w,
        e.image ? /* @__PURE__ */ s.jsx("div", { className: "card-image", children: /* @__PURE__ */ s.jsx(rr, { ...e.image }) }) : w,
        e.children ? /* @__PURE__ */ s.jsx("div", { className: "card-content", children: typeof e.children == "string" ? t(e.children) : e.children }) : w,
        e.buttons ? /* @__PURE__ */ s.jsx("div", { className: "card-footer", children: e.buttons.map((n, r) => /* @__PURE__ */ je(
          "a",
          {
            ...n,
            key: n.id || "card-button-" + r,
            className: `card-footer-item ${n.className || ""}`.trim(),
            onClick: n.onClick
          },
          typeof n.text == "string" ? t(n.text) : n.text
        )) }) : w
      ]
    }
  );
}
const Pl = /* @__PURE__ */ s.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    children: /* @__PURE__ */ s.jsx(
      "path",
      {
        d: `M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5
    12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7
    86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`
      }
    )
  }
);
function ql(e) {
  const { translate: t } = I(), [n, r] = ce(!1), i = Dr(null);
  K(() => {
    if (!n)
      return () => {
      };
    const h = (v) => {
      const y = i.current;
      if (!y)
        return;
      const C = v.target;
      y.contains(C) ? C.tagName === "A" && r(!1) : r(!1);
    };
    return document.addEventListener("click", h), () => {
      document.removeEventListener("click", h);
    };
  }, [n]), K(() => {
    e.disabled && n && r(!1);
  }, [n, e.disabled]), K(() => {
    e.forceActive && !n && r(!0), e.forceClosed && n && r(!1);
  }, [n, e.forceActive, e.forceClosed]), K(() => {
    n && e.onOpened && e.onOpened(), !n && e.onClosed && e.onClosed();
  }, [n]);
  const o = [
    "dropdown",
    e.className,
    !e.forceClosed && (n || e.forceActive) && "is-active",
    e.fullwidth && "is-fullwidth",
    e.up && "is-up",
    e.right && "is-right",
    e.hoverable && "is-hoverable"
  ].filter(Boolean).join(" "), l = "dropdown-trigger " + (e.triggerClassname || ""), f = "dropdown-menu " + (e.menuClassname || ""), u = "dropdown-content " + (e.contentClassname || "");
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      ...e,
      id: e.id,
      ref: i,
      title: t(e.title),
      className: o,
      children: [
        /* @__PURE__ */ s.jsx(
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
        /* @__PURE__ */ s.jsx("div", { className: f, role: "menu", children: /* @__PURE__ */ s.jsx("div", { className: u, children: e.children }) })
      ]
    }
  );
}
function Jl(e) {
  return /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      rootClassname: "dropdown-divider",
      as: "hr",
      children: /* @__PURE__ */ s.jsx(s.Fragment, {})
    }
  );
}
function Xl(e) {
  return /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      rootClassname: "dropdown-item",
      as: "div",
      children: e.children
    }
  );
}
function Zl(e) {
  return /* @__PURE__ */ s.jsxs(
    O,
    {
      ...e,
      rootClassname: "media",
      as: e.as || "article",
      children: [
        e.image ? /* @__PURE__ */ s.jsx("figure", { className: "media-left", children: /* @__PURE__ */ s.jsx(rr, { ...e.image }) }) : null,
        e.title ? /* @__PURE__ */ s.jsx("div", { className: "media-content", children: /* @__PURE__ */ s.jsx(Ol, { ...e.titles }) }) : null,
        e.children
      ]
    }
  );
}
const Sl = {
  tripped: !1
};
class bn extends jn {
  constructor(t) {
    super(t), this.state = { ...Sl };
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
    return this.state.tripped ? w : this.props.children;
  }
}
function Ql(e) {
  var r;
  const { translate: t } = I();
  if (Qr("escape", () => {
    e.show && e.onClose();
  }, null, !!e.disableEscapeKeyToClose), !e.show || e.disabled)
    return /* @__PURE__ */ s.jsx(s.Fragment, {});
  let n = e.className || "";
  return e.fullwidth && (n += " is-fullwidth"), e.className && (n += " " + e.className), /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    e.trigger,
    Mr(
      /* @__PURE__ */ s.jsx(bn, { id: "modal-" + e.id, children: /* @__PURE__ */ s.jsxs(
        "div",
        {
          id: e.id,
          className: `modal is-active ${n}`,
          style: e.style,
          onClick: e.onClick,
          children: [
            /* @__PURE__ */ s.jsx("div", { className: "modal-background", onClick: e.onClose }),
            /* @__PURE__ */ s.jsxs("div", { className: "modal-card", children: [
              /* @__PURE__ */ s.jsxs("header", { className: "modal-card-head", children: [
                /* @__PURE__ */ s.jsx("p", { className: "modal-card-title", children: t(e.title) }),
                /* @__PURE__ */ s.jsx(De, { onClick: e.onClose })
              ] }),
              /* @__PURE__ */ s.jsx("section", { className: "modal-card-body", children: /* @__PURE__ */ s.jsx(bn, { id: `modal-${e.id}-content`, children: e.children }) }),
              /* @__PURE__ */ s.jsx("footer", { className: "modal-card-foot buttons is-right", children: (r = e.actions) == null ? void 0 : r.map((i, o) => /* @__PURE__ */ s.jsx(
                El,
                {
                  ...i
                },
                o + "-" + i.id
              )) })
            ] })
          ]
        }
      ) }),
      Y.CustomModalParentElement,
      e.id
    )
  ] });
}
function pl(e) {
  const { className: t, style: n } = Ce(e), r = Te(e), { translate: i } = I(), o = [
    t,
    r,
    e.className || ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs(
    O,
    {
      ...e,
      rootClassname: "message",
      className: o,
      style: {
        ...n,
        ...e.style || {}
      },
      as: "article",
      children: [
        e.header || e.showDelete ? /* @__PURE__ */ s.jsxs("div", { className: "message-header", children: [
          /* @__PURE__ */ s.jsx("p", { children: e.header ? i(e.header) : "" }),
          e.showDelete ? /* @__PURE__ */ s.jsx(De, { onClick: e.onDelete, className: r }) : w
        ] }) : w,
        /* @__PURE__ */ s.jsx("div", { className: "message-body", children: typeof e.children == "string" ? i(e.children) : e.children })
      ]
    }
  );
}
function ec(e) {
  const { className: t, style: n } = Ce(e), [r, i] = ce(!1), { fixedTop: o, fixedBottom: l, fixedPaddingTarget: f } = e, u = [
    e.transparent && "is-transparent",
    o && "is-fixed-top",
    l && "is-fixed-bottom",
    e.spaced && "is-spaced",
    e.hasShadow && "has-shadow",
    t,
    e.className
  ].filter(Boolean).join(" ");
  return K(() => {
    var v, y;
    const h = f || "body";
    return o ? ((v = document.querySelector(h)) == null || v.classList.add("has-navbar-fixed-top"), () => {
      var C;
      (C = document.querySelector(h)) == null || C.classList.remove("has-navbar-fixed-top");
    }) : l ? ((y = document.querySelector(h)) == null || y.classList.add("has-navbar-fixed-bottom"), () => {
      var C;
      (C = document.querySelector(h)) == null || C.classList.remove("has-navbar-fixed-bottom");
    }) : () => {
    };
  }, [o, l, f]), /* @__PURE__ */ s.jsxs(
    O,
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
        /* @__PURE__ */ s.jsxs("div", { className: "navbar-brand", children: [
          e.brand ? e.brand : w,
          /* @__PURE__ */ s.jsxs(
            "a",
            {
              role: "button",
              className: "navbar-burger" + (r ? " is-active" : ""),
              "aria-label": "menu",
              "aria-expanded": String(!!r),
              onClick: () => i(!r),
              children: [
                /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true" }),
                /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true" }),
                /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true" }),
                /* @__PURE__ */ s.jsx("span", { "aria-hidden": "true" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: "navbar-menu" + (r ? " is-active" : ""), children: [
          /* @__PURE__ */ s.jsx("div", { className: "navbar-start", children: e.startItems || w }),
          /* @__PURE__ */ s.jsx("div", { className: "navbar-end", children: e.endItems || w })
        ] })
      ]
    }
  );
}
function tc(e) {
  const t = [
    e.selected && "is-selected",
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      rootClassname: "navbar-item",
      className: t,
      as: e.as || "a",
      children: e.children
    }
  );
}
function nc(e) {
  const [t, n] = ce(!1), { translate: r } = I(), i = [
    e.hoverable && "is-hoverable",
    e.up && "has-dropdown-up",
    t && "is-active",
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsxs(
    O,
    {
      ...e,
      rootClassname: "navbar-item has-dropdown",
      className: i,
      onClick: (o) => {
        var f, u, h;
        const l = !t;
        n(l), (f = e.onClick) == null || f.call(e, o), l ? (u = e.onOpen) == null || u.call(e) : (h = e.onClose) == null || h.call(e);
      },
      as: "div",
      children: [
        /* @__PURE__ */ s.jsx(
          "a",
          {
            className: `navbar-link ${e.arrowless ? "is-arrowless" : ""}`,
            children: typeof e.text == "string" ? r(e.text) : e.text
          }
        ),
        /* @__PURE__ */ s.jsx(
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
function rc(e) {
  return /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      rootClassname: "navbar-divider",
      as: "hr",
      children: /* @__PURE__ */ s.jsx(s.Fragment, {})
    }
  );
}
function ac(e) {
  var y, C, F, k, W, A, P, S, re, Ee;
  const { translate: t } = I(), n = Te(e), r = at(e), i = e.id || "pagination", o = [
    n,
    r,
    e.rounded && "is-rounded",
    e.disabled && "is-disabled",
    e.className
  ].filter(Boolean).join(" ") || "", l = 0;
  let f = 0, u = 0;
  if (e.page)
    typeof ((y = e.page) == null ? void 0 : y.current) == "string" ? u = parseInt(e.page.current || "0") : u = ((C = e.page) == null ? void 0 : C.current) || 0, typeof ((F = e.page) == null ? void 0 : F.total) == "string" ? f = parseInt(e.page.total || "0") : f = ((k = e.page) == null ? void 0 : k.total) || 0;
  else if (e.count) {
    const D = typeof ((W = e.count) == null ? void 0 : W.countPerPage) == "string" ? parseInt(e.count.countPerPage || "1") : ((A = e.count) == null ? void 0 : A.countPerPage) || 1, fe = typeof ((P = e.count) == null ? void 0 : P.total) == "string" ? parseInt(e.count.total || "0") : ((S = e.count) == null ? void 0 : S.total) || 0, Me = typeof ((re = e.count) == null ? void 0 : re.skip) == "string" ? parseInt(e.count.skip || "0") : ((Ee = e.count) == null ? void 0 : Ee.skip) || 0;
    u = Math.floor(Me / D) + 1, f = Math.floor(fe / D) + 1;
  }
  if (!e.showEvenIfOnlyOnePage && f === l)
    return w;
  function h(D) {
    D = Ze(D - 1, l, f), e.onPageChange(D);
  }
  function v(D, fe) {
    return typeof D == "function" ? D(fe) : t(D);
  }
  return /* @__PURE__ */ s.jsxs(
    O,
    {
      ...e,
      id: i,
      rootClassname: "pagination",
      className: o,
      as: "nav",
      role: "navigation",
      "aria-label": "pagination",
      children: [
        e.hidePrevNext ? w : /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx(
            "a",
            {
              id: i + "-prev",
              className: "pagination-previous",
              disabled: e.disabled || u === l,
              onClick: !e.disabled && u !== l && (() => {
                h(u - 1);
              }),
              children: v(
                e.nextText || "Previous page",
                u - 1
              )
            }
          ),
          /* @__PURE__ */ s.jsx(
            "a",
            {
              id: i + "-next",
              className: "pagination-next",
              disabled: e.disabled || u === f,
              onClick: !e.disabled && u !== f && (() => {
                h(u + 1);
              }),
              children: v(
                e.nextText || "Next page",
                u + 1
              )
            }
          )
        ] }),
        /* @__PURE__ */ s.jsxs("ul", { className: "pagination-list", children: [
          e.hideFirstLast ? w : /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(
            "a",
            {
              className: "pagination-link",
              "aria-label": "Goto page 1",
              title: v(
                e.firstPageTitle || "Goto page 1",
                l
              ),
              disabled: e.disabled || u === l,
              onClick: !e.disabled && u !== l && (() => {
                h(l);
              }),
              children: l
            }
          ) }),
          e.hideEllipsis ? w : /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx("span", { className: "pagination-ellipsis", children: "…" }) }),
          u !== l ? /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(
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
              children: Ze(
                u - 1,
                f,
                l
              )
            }
          ) }) : w,
          /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(
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
          u !== f ? /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(
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
              children: Ze(
                u + 1,
                f,
                l
              )
            }
          ) }) : w,
          e.hideEllipsis ? w : /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx("span", { className: "pagination-ellipsis", children: "…" }) }),
          e.hideFirstLast ? w : /* @__PURE__ */ s.jsx("li", { children: /* @__PURE__ */ s.jsx(
            "a",
            {
              className: "pagination-link",
              "aria-label": `Goto page ${f}`,
              title: v(
                e.lastPageTitle || `Goto page ${f}`,
                f
              ),
              disabled: e.disabled || u === f,
              onClick: !e.disabled && u !== f && (() => {
                h(f);
              }),
              children: f
            }
          ) })
        ] })
      ]
    }
  );
}
function $l({ onClick: e, icon: t, ...n }) {
  const { translate: r } = I(), i = t ? /* @__PURE__ */ s.jsx("span", { className: "icon is-small", children: t }) : w;
  return /* @__PURE__ */ s.jsxs(
    O,
    {
      ...n,
      rootClassname: "",
      as: "li",
      children: [
        "? ",
        /* @__PURE__ */ s.jsxs(
          "a",
          {
            onClick: e,
            children: [
              i,
              n.children || /* @__PURE__ */ s.jsx("span", { children: r(n.text) })
            ]
          }
        ),
        /* @__PURE__ */ s.jsx("a", { onClick: e })
      ]
    }
  );
}
function Nl(e, t) {
  if (t == null)
    return null;
  if (typeof t == "number")
    return t;
  const n = e.findIndex((r) => r.value === t);
  return n !== -1 ? n : e.findIndex((r) => r.text === t) || 0;
}
function ic(e) {
  var l;
  const [t, n] = ce(
    Nl(e.items || [], e.defaultActive || 0)
  ), r = Te(e), o = [
    at(e),
    r,
    e.boxed && "is-boxed",
    e.toggle && "is-toggle",
    !e.toggle && e.rounded && "is-rounded",
    e.toggle && e.rounded && "is-toggle-rounded",
    e.fullwidth && "is-fullwidth",
    e.className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ s.jsx(
    O,
    {
      ...e,
      rootClassname: "tabs",
      className: o,
      as: "div",
      children: /* @__PURE__ */ s.jsx("ul", { children: e.children || ((l = e.items) == null ? void 0 : l.map((f, u) => /* @__PURE__ */ je(
        $l,
        {
          ...f,
          key: f + "-" + u,
          active: t === u,
          onClick: (h) => {
            var v, y;
            (v = f == null ? void 0 : f.onClick) == null || v.call(f, h), n(u), (y = e.onTabChange) == null || y.call(e, {
              index: u,
              value: f.value,
              item: f,
              event: h
            });
          }
        }
      ))) })
    }
  );
}
const Al = { cursor: "copy" };
function sc(e) {
  const { translate: t } = I(), {
    id: n,
    text: r,
    disabled: i,
    onCopied: o,
    style: l,
    noCursor: f,
    className: u,
    fullwidth: h,
    title: v,
    useDoubleClick: y,
    useRightClick: C,
    children: F,
    onClick: k,
    ...W
  } = e, A = t(r);
  function P() {
    i || (navigator.clipboard.writeText(A), o == null || o());
  }
  const S = {
    ...l || {},
    ...f ? {} : Al
  };
  return /* @__PURE__ */ s.jsx(
    "div",
    {
      ...W,
      id: n,
      style: S,
      className: u + (h ? " is-fullwidth" : ""),
      title: v ? t(v) : A,
      onContextMenu: C ? P : void 0,
      onDoubleClick: y ? P : void 0,
      onClick: !y && !C ? (re) => {
        P(), k == null || k(re);
      } : k,
      children: F
    }
  );
}
function oc({ children: e, time: t = 500 }) {
  const [n, r] = ce(!1);
  return K(() => {
    const i = setTimeout(() => {
      r(!0);
    }, t);
    return () => {
      clearTimeout(i);
    };
  }, [t]), n ? e : w;
}
export {
  kl as Block,
  Dl as Box,
  Vl as Breadcrumb,
  Kl as BreadcrumbItem,
  Fl as BulmaForm,
  Y as BulmaFormSettings,
  El as Button,
  Ml as Buttons,
  Hl as Card,
  Bl as Content,
  sc as Copiable,
  De as Delete,
  ql as Dropdown,
  Jl as DropdownDivider,
  Xl as DropdownItem,
  Ul as Icon,
  rr as Image,
  Zl as Media,
  pl as Message,
  Ql as Modal,
  ec as Navbar,
  rc as NavbarDivider,
  nc as NavbarDropdown,
  tc as NavbarItem,
  zl as Notification,
  ac as Pagination,
  oc as ShowAfterNSeconds,
  $l as Tab,
  Wl as Table,
  ic as Tabs,
  Gl as Tag,
  Yl as Tags,
  Ol as Titles
};