import "./assets/Button.css";
import { jsx as m } from "react/jsx-runtime";
import h from "react";
var N = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function b(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function P(e) {
  if (e.__esModule)
    return e;
  var u = e.default;
  if (typeof u == "function") {
    var n = function o() {
      return this instanceof o ? Reflect.construct(u, arguments, this.constructor) : u.apply(this, arguments);
    };
    n.prototype = u.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(o) {
    var i = Object.getOwnPropertyDescriptor(e, o);
    Object.defineProperty(n, o, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[o];
      }
    });
  }), n;
}
var c = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var u = {}.hasOwnProperty;
    function n() {
      for (var t = "", r = 0; r < arguments.length; r++) {
        var s = arguments[r];
        s && (t = i(t, o(s)));
      }
      return t;
    }
    function o(t) {
      if (typeof t == "string" || typeof t == "number")
        return t;
      if (typeof t != "object")
        return "";
      if (Array.isArray(t))
        return n.apply(null, t);
      if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
        return t.toString();
      var r = "";
      for (var s in t)
        u.call(t, s) && t[s] && (r = i(r, s));
      return r;
    }
    function i(t, r) {
      return r ? t ? t + " " + r : t + r : t;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(c);
var g = c.exports;
const f = /* @__PURE__ */ b(g), v = "_button_1yunh_1", w = "_outline_1yunh_113", a = {
  button: v,
  "type-primary": "_type-primary_1yunh_14",
  "type-secondary": "_type-secondary_1yunh_19",
  "type-success": "_type-success_1yunh_24",
  "type-danger": "_type-danger_1yunh_29",
  "size-white": "_size-white_1yunh_34",
  "size-s": "_size-s_1yunh_40",
  "size-m": "_size-m_1yunh_46",
  "size-l": "_size-l_1yunh_52",
  outline: w
}, S = h.forwardRef(function({
  className: u,
  type: n,
  label: o,
  variant: i = "primary",
  format: t = "standard",
  size: r = "s",
  disabled: s = !1,
  onClick: p,
  element: l = "button",
  ...y
}, _) {
  const d = f(
    a.button,
    a[`type-${i}`],
    s ? a.standard : a[t],
    a[`size-${r}`],
    {
      [a.disabled]: s,
      [a.hasLabel]: !!o
    }
  );
  return /* @__PURE__ */ m(
    l,
    {
      type: n,
      onClick: p,
      className: f(d, u),
      disabled: s,
      ref: _,
      ...y,
      children: o
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
