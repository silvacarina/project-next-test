import "./assets/Button.css";
import { jsx as m } from "react/jsx-runtime";
import w from "react";
var N = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function b(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function P(e) {
  if (e.__esModule)
    return e;
  var i = e.default;
  if (typeof i == "function") {
    var o = function r() {
      return this instanceof r ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    o.prototype = i.prototype;
  } else
    o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var u = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(o, r, u.get ? u : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), o;
}
var c = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var i = {}.hasOwnProperty;
    function o() {
      for (var t = "", n = 0; n < arguments.length; n++) {
        var s = arguments[n];
        s && (t = u(t, r(s)));
      }
      return t;
    }
    function r(t) {
      if (typeof t == "string" || typeof t == "number")
        return t;
      if (typeof t != "object")
        return "";
      if (Array.isArray(t))
        return o.apply(null, t);
      if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
        return t.toString();
      var n = "";
      for (var s in t)
        i.call(t, s) && t[s] && (n = u(n, s));
      return n;
    }
    function u(t, n) {
      return n ? t ? t + " " + n : t + n : t;
    }
    e.exports ? (o.default = o, e.exports = o) : window.classNames = o;
  })();
})(c);
var h = c.exports;
const f = /* @__PURE__ */ b(h), g = "_button_1tw1o_1", v = "_outline_1tw1o_113", a = {
  button: g,
  "type-primary": "_type-primary_1tw1o_14",
  "type-secondary": "_type-secondary_1tw1o_19",
  "type-success": "_type-success_1tw1o_24",
  "type-danger": "_type-danger_1tw1o_29",
  "size-white": "_size-white_1tw1o_34",
  "size-s": "_size-s_1tw1o_40",
  "size-m": "_size-m_1tw1o_46",
  "size-l": "_size-l_1tw1o_52",
  outline: v
}, S = w.forwardRef(function({
  className: i,
  type: o,
  label: r,
  variant: u = "primary",
  format: t = "standard",
  size: n = "s",
  disabled: s = !1,
  onClick: p,
  element: l = "button",
  ..._
}, y) {
  const d = f(
    a.button,
    a[`type-${u}`],
    s ? a.standard : a[t],
    a[`size-${n}`],
    {
      [a.disabled]: s,
      [a.hasLabel]: !!r
    }
  );
  return /* @__PURE__ */ m(
    l,
    {
      type: o,
      onClick: p,
      className: f(d, i),
      disabled: s,
      ref: y,
      ..._,
      children: r
    }
  );
});
export {
  S as B,
  N as a,
  P as b,
  f as c,
  b as g
};
