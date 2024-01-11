var ex = Object.defineProperty;
var tx = (t, r, a) => r in t ? ex(t, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[r] = a;
var Pt = (t, r, a) => (tx(t, typeof r != "symbol" ? r + "" : r, a), a);
import { jsx as pg } from "react/jsx-runtime";
import { g as bS, b as nx, a as rm, B as hg } from "../../Button-evJIStwZ.js";
import SS from "react";
var im = { exports: {} }, dl = {}, $f = { exports: {} }, zt = {};
/**
 * @license React
 * scheduler-unstable_mock.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mg;
function rx() {
  return mg || (mg = 1, process.env.NODE_ENV !== "production" && function() {
    var t = !1, r = !1;
    function a(ae, je) {
      var Ce = ae.length;
      ae.push(je), s(ae, je, Ce);
    }
    function c(ae) {
      return ae.length === 0 ? null : ae[0];
    }
    function u(ae) {
      if (ae.length === 0)
        return null;
      var je = ae[0], Ce = ae.pop();
      return Ce !== je && (ae[0] = Ce, d(ae, Ce, 0)), je;
    }
    function s(ae, je, Ce) {
      for (var xe = Ce; xe > 0; ) {
        var $ = xe - 1 >>> 1, N = ae[$];
        if (m(N, je) > 0)
          ae[$] = je, ae[xe] = N, xe = $;
        else
          return;
      }
    }
    function d(ae, je, Ce) {
      for (var xe = Ce, $ = ae.length, N = $ >>> 1; xe < N; ) {
        var k = (xe + 1) * 2 - 1, Oe = ae[k], Se = k + 1, We = ae[Se];
        if (m(Oe, je) < 0)
          Se < $ && m(We, Oe) < 0 ? (ae[xe] = We, ae[Se] = je, xe = Se) : (ae[xe] = Oe, ae[k] = je, xe = k);
        else if (Se < $ && m(We, je) < 0)
          ae[xe] = We, ae[Se] = je, xe = Se;
        else
          return;
      }
    }
    function m(ae, je) {
      var Ce = ae.sortIndex - je.sortIndex;
      return Ce !== 0 ? Ce : ae.id - je.id;
    }
    var y = 1, E = 2, b = 3, x = 4, R = 5;
    function j(ae, je) {
    }
    var U = 1073741823, q = -1, A = 250, ye = 5e3, ee = 1e4, le = U, Z = [], K = [], se = 1, Te = null, ve = b, Ve = !1, ce = !1, Xe = !1, ie = 0, ge = null, Ae = null, et = -1, Pe = null, Qe = -1, me = !1, C = !1, D = !1, V = !1, G = !1;
    function oe(ae) {
      G = ae;
    }
    function be(ae) {
      for (var je = c(K); je !== null; ) {
        if (je.callback === null)
          u(K);
        else if (je.startTime <= ae)
          u(K), je.sortIndex = je.expirationTime, a(Z, je);
        else
          return;
        je = c(K);
      }
    }
    function re(ae) {
      if (Xe = !1, be(ae), !ce)
        if (c(Z) !== null)
          ce = !0, pt(Q);
        else {
          var je = c(K);
          je !== null && Zt(re, je.startTime - ae);
        }
    }
    function Q(ae, je) {
      ce = !1, Xe && (Xe = !1, In()), Ve = !0;
      var Ce = ve;
      try {
        var xe;
        if (!r)
          return De(ae, je);
      } finally {
        Te = null, ve = Ce, Ve = !1;
      }
    }
    function De(ae, je) {
      var Ce = je;
      for (be(Ce), Te = c(Z); Te !== null && !t && !(Te.expirationTime > Ce && (!ae || z())); ) {
        var xe = Te.callback;
        if (typeof xe == "function") {
          Te.callback = null, ve = Te.priorityLevel;
          var $ = Te.expirationTime <= Ce, N = xe($);
          Ce = B(), typeof N == "function" ? Te.callback = N : Te === c(Z) && u(Z), be(Ce);
        } else
          u(Z);
        Te = c(Z);
      }
      if (Te !== null)
        return !0;
      var k = c(K);
      return k !== null && Zt(re, k.startTime - Ce), !1;
    }
    function Ge(ae, je) {
      switch (ae) {
        case y:
        case E:
        case b:
        case x:
        case R:
          break;
        default:
          ae = b;
      }
      var Ce = ve;
      ve = ae;
      try {
        return je();
      } finally {
        ve = Ce;
      }
    }
    function tt(ae) {
      var je;
      switch (ve) {
        case y:
        case E:
        case b:
          je = b;
          break;
        default:
          je = ve;
          break;
      }
      var Ce = ve;
      ve = je;
      try {
        return ae();
      } finally {
        ve = Ce;
      }
    }
    function ot(ae) {
      var je = ve;
      return function() {
        var Ce = ve;
        ve = je;
        try {
          return ae.apply(this, arguments);
        } finally {
          ve = Ce;
        }
      };
    }
    function nt(ae, je, Ce) {
      var xe = B(), $;
      if (typeof Ce == "object" && Ce !== null) {
        var N = Ce.delay;
        typeof N == "number" && N > 0 ? $ = xe + N : $ = xe;
      } else
        $ = xe;
      var k;
      switch (ae) {
        case y:
          k = q;
          break;
        case E:
          k = A;
          break;
        case R:
          k = le;
          break;
        case x:
          k = ee;
          break;
        case b:
        default:
          k = ye;
          break;
      }
      var Oe = $ + k, Se = {
        id: se++,
        callback: je,
        priorityLevel: ae,
        startTime: $,
        expirationTime: Oe,
        sortIndex: -1
      };
      return $ > xe ? (Se.sortIndex = $, a(K, Se), c(Z) === null && Se === c(K) && (Xe ? In() : Xe = !0, Zt(re, $ - xe))) : (Se.sortIndex = Oe, a(Z, Se), !ce && !Ve && (ce = !0, pt(Q))), Se;
    }
    function Ze() {
    }
    function mt() {
      !ce && !Ve && (ce = !0, pt(Q));
    }
    function J() {
      return c(Z);
    }
    function gt(ae) {
      ae.callback = null;
    }
    function ct() {
      return ve;
    }
    function pt(ae) {
      ge = ae;
    }
    function Zt(ae, je) {
      Ae = ae, et = ie + je;
    }
    function In() {
      Ae = null, et = -1;
    }
    function z() {
      return Qe === 0 && Pe === null || Qe !== -1 && Pe !== null && Pe.length >= Qe || V && D ? (me = !0, !0) : !1;
    }
    function B() {
      return ie;
    }
    function fe() {
    }
    function Ne() {
      if (C)
        throw new Error("Cannot reset while already flushing work.");
      ie = 0, ge = null, Ae = null, et = -1, Pe = null, Qe = -1, me = !1, C = !1, D = !1;
    }
    function P(ae) {
      if (C)
        throw new Error("Already flushing work.");
      if (ge !== null) {
        var je = ge;
        Qe = ae, C = !0;
        try {
          var Ce = !0;
          do
            Ce = je(!0, ie);
          while (Ce && !me);
          Ce || (ge = null);
        } finally {
          Qe = -1, me = !1, C = !1;
        }
      }
    }
    function ut() {
      if (C)
        throw new Error("Already flushing work.");
      if (ge !== null) {
        var ae = ge;
        V = !0, D = !1, C = !0;
        try {
          var je = !0;
          do
            je = ae(!0, ie);
          while (je && !me);
          je || (ge = null);
        } finally {
          V = !1, me = !1, C = !1;
        }
      }
    }
    function xt() {
      if (C)
        throw new Error("Already flushing work.");
      if (ge !== null) {
        C = !0;
        try {
          var ae = ge(!1, ie);
          ae || (ge = null);
        } finally {
          C = !1;
        }
      }
    }
    function Ot() {
      if (C)
        throw new Error("Already flushing work.");
      if (ge !== null) {
        var ae = ge;
        C = !0;
        try {
          var je = !0;
          do
            je = ae(!0, ie);
          while (je);
          return je || (ge = null), !0;
        } finally {
          C = !1;
        }
      } else
        return !1;
    }
    function un() {
      if (Pe === null)
        return [];
      var ae = Pe;
      return Pe = null, ae;
    }
    function rt() {
      if (Pe !== null)
        throw new Error("Log is not empty. Assert on the log of yielded values before flushing additional work.");
      if (Ot(), Pe !== null)
        throw new Error("While flushing work, something yielded a value. Use an assertion helper to assert on the log of yielded values, e.g. expect(Scheduler).toFlushAndYield([...])");
    }
    function Fe(ae) {
      console.log.name === "disabledLog" || G || (Pe === null ? Pe = [ae] : Pe.push(ae));
    }
    function he(ae) {
      console.log.name === "disabledLog" || G || (ie += ae, Ae !== null && et <= ie && (Ae(ie), et = -1, Ae = null));
    }
    function _e() {
      D = !0;
    }
    var Me = null;
    zt.reset = Ne, zt.unstable_IdlePriority = R, zt.unstable_ImmediatePriority = y, zt.unstable_LowPriority = x, zt.unstable_NormalPriority = b, zt.unstable_Profiling = Me, zt.unstable_UserBlockingPriority = E, zt.unstable_advanceTime = he, zt.unstable_cancelCallback = gt, zt.unstable_clearYields = un, zt.unstable_continueExecution = mt, zt.unstable_flushAll = rt, zt.unstable_flushAllWithoutAsserting = Ot, zt.unstable_flushExpired = xt, zt.unstable_flushNumberOfYields = P, zt.unstable_flushUntilNextPaint = ut, zt.unstable_forceFrameRate = fe, zt.unstable_getCurrentPriorityLevel = ct, zt.unstable_getFirstCallbackNode = J, zt.unstable_next = tt, zt.unstable_now = B, zt.unstable_pauseExecution = Ze, zt.unstable_requestPaint = _e, zt.unstable_runWithPriority = Ge, zt.unstable_scheduleCallback = nt, zt.unstable_setDisableYieldValue = oe, zt.unstable_shouldYield = z, zt.unstable_wrapCallback = ot, zt.unstable_yieldValue = Fe;
  }()), zt;
}
var Lt = {};
/**
 * @license React
 * scheduler-unstable_mock.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vg;
function ix() {
  if (vg)
    return Lt;
  vg = 1;
  function t(ie, ge) {
    var Ae = ie.length;
    ie.push(ge);
    e:
      for (; 0 < Ae; ) {
        var et = Ae - 1 >>> 1, Pe = ie[et];
        if (0 < c(Pe, ge))
          ie[et] = ge, ie[Ae] = Pe, Ae = et;
        else
          break e;
      }
  }
  function r(ie) {
    return ie.length === 0 ? null : ie[0];
  }
  function a(ie) {
    if (ie.length === 0)
      return null;
    var ge = ie[0], Ae = ie.pop();
    if (Ae !== ge) {
      ie[0] = Ae;
      e:
        for (var et = 0, Pe = ie.length, Qe = Pe >>> 1; et < Qe; ) {
          var me = 2 * (et + 1) - 1, C = ie[me], D = me + 1, V = ie[D];
          if (0 > c(C, Ae))
            D < Pe && 0 > c(V, C) ? (ie[et] = V, ie[D] = Ae, et = D) : (ie[et] = C, ie[me] = Ae, et = me);
          else if (D < Pe && 0 > c(V, Ae))
            ie[et] = V, ie[D] = Ae, et = D;
          else
            break e;
        }
    }
    return ge;
  }
  function c(ie, ge) {
    var Ae = ie.sortIndex - ge.sortIndex;
    return Ae !== 0 ? Ae : ie.id - ge.id;
  }
  var u = [], s = [], d = 1, m = null, y = 3, E = !1, b = !1, x = !1, R = 0, j = null, U = null, q = -1, A = null, ye = -1, ee = !1, le = !1, Z = !1, K = !1, se = !1;
  function Te(ie) {
    for (var ge = r(s); ge !== null; ) {
      if (ge.callback === null)
        a(s);
      else if (ge.startTime <= ie)
        a(s), ge.sortIndex = ge.expirationTime, t(u, ge);
      else
        break;
      ge = r(s);
    }
  }
  function ve(ie) {
    if (x = !1, Te(ie), !b)
      if (r(u) !== null)
        b = !0, j = Ve;
      else {
        var ge = r(s);
        ge !== null && (ie = ge.startTime - ie, U = ve, q = R + ie);
      }
  }
  function Ve(ie, ge) {
    b = !1, x && (x = !1, U = null, q = -1), E = !0;
    var Ae = y;
    try {
      for (Te(ge), m = r(u); m !== null && (!(m.expirationTime > ge) || ie && !ce()); ) {
        var et = m.callback;
        if (typeof et == "function") {
          m.callback = null, y = m.priorityLevel;
          var Pe = et(m.expirationTime <= ge);
          ge = R, typeof Pe == "function" ? m.callback = Pe : m === r(u) && a(u), Te(ge);
        } else
          a(u);
        m = r(u);
      }
      if (m !== null)
        var Qe = !0;
      else {
        var me = r(s);
        if (me !== null) {
          var C = me.startTime - ge;
          U = ve, q = R + C;
        }
        Qe = !1;
      }
      return Qe;
    } finally {
      m = null, y = Ae, E = !1;
    }
  }
  function ce() {
    return ye === 0 && A === null || ye !== -1 && A !== null && A.length >= ye || K && Z ? ee = !0 : !1;
  }
  function Xe() {
    if (le)
      throw Error("Already flushing work.");
    if (j !== null) {
      var ie = j;
      le = !0;
      try {
        var ge = !0;
        do
          ge = ie(!0, R);
        while (ge);
        return ge || (j = null), !0;
      } finally {
        le = !1;
      }
    } else
      return !1;
  }
  return Lt.reset = function() {
    if (le)
      throw Error("Cannot reset while already flushing work.");
    R = 0, U = j = null, q = -1, A = null, ye = -1, Z = le = ee = !1;
  }, Lt.unstable_IdlePriority = 5, Lt.unstable_ImmediatePriority = 1, Lt.unstable_LowPriority = 4, Lt.unstable_NormalPriority = 3, Lt.unstable_Profiling = null, Lt.unstable_UserBlockingPriority = 2, Lt.unstable_advanceTime = function(ie) {
    console.log.name === "disabledLog" || se || (R += ie, U !== null && q <= R && (U(R), q = -1, U = null));
  }, Lt.unstable_cancelCallback = function(ie) {
    ie.callback = null;
  }, Lt.unstable_clearYields = function() {
    if (A === null)
      return [];
    var ie = A;
    return A = null, ie;
  }, Lt.unstable_continueExecution = function() {
    b || E || (b = !0, j = Ve);
  }, Lt.unstable_flushAll = function() {
    if (A !== null)
      throw Error("Log is not empty. Assert on the log of yielded values before flushing additional work.");
    if (Xe(), A !== null)
      throw Error("While flushing work, something yielded a value. Use an assertion helper to assert on the log of yielded values, e.g. expect(Scheduler).toFlushAndYield([...])");
  }, Lt.unstable_flushAllWithoutAsserting = Xe, Lt.unstable_flushExpired = function() {
    if (le)
      throw Error("Already flushing work.");
    if (j !== null) {
      le = !0;
      try {
        j(!1, R) || (j = null);
      } finally {
        le = !1;
      }
    }
  }, Lt.unstable_flushNumberOfYields = function(ie) {
    if (le)
      throw Error("Already flushing work.");
    if (j !== null) {
      var ge = j;
      ye = ie, le = !0;
      try {
        ie = !0;
        do
          ie = ge(!0, R);
        while (ie && !ee);
        ie || (j = null);
      } finally {
        ye = -1, le = ee = !1;
      }
    }
  }, Lt.unstable_flushUntilNextPaint = function() {
    if (le)
      throw Error("Already flushing work.");
    if (j !== null) {
      var ie = j;
      K = !0, Z = !1, le = !0;
      try {
        var ge = !0;
        do
          ge = ie(!0, R);
        while (ge && !ee);
        ge || (j = null);
      } finally {
        le = ee = K = !1;
      }
    }
  }, Lt.unstable_forceFrameRate = function() {
  }, Lt.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, Lt.unstable_getFirstCallbackNode = function() {
    return r(u);
  }, Lt.unstable_next = function(ie) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var ge = 3;
        break;
      default:
        ge = y;
    }
    var Ae = y;
    y = ge;
    try {
      return ie();
    } finally {
      y = Ae;
    }
  }, Lt.unstable_now = function() {
    return R;
  }, Lt.unstable_pauseExecution = function() {
  }, Lt.unstable_requestPaint = function() {
    Z = !0;
  }, Lt.unstable_runWithPriority = function(ie, ge) {
    switch (ie) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        ie = 3;
    }
    var Ae = y;
    y = ie;
    try {
      return ge();
    } finally {
      y = Ae;
    }
  }, Lt.unstable_scheduleCallback = function(ie, ge, Ae) {
    var et = R;
    switch (typeof Ae == "object" && Ae !== null ? (Ae = Ae.delay, Ae = typeof Ae == "number" && 0 < Ae ? et + Ae : et) : Ae = et, ie) {
      case 1:
        var Pe = -1;
        break;
      case 2:
        Pe = 250;
        break;
      case 5:
        Pe = 1073741823;
        break;
      case 4:
        Pe = 1e4;
        break;
      default:
        Pe = 5e3;
    }
    return Pe = Ae + Pe, ie = { id: d++, callback: ge, priorityLevel: ie, startTime: Ae, expirationTime: Pe, sortIndex: -1 }, Ae > et ? (ie.sortIndex = Ae, t(s, ie), r(u) === null && ie === r(s) && (x ? (U = null, q = -1) : x = !0, U = ve, q = R + (Ae - et))) : (ie.sortIndex = Pe, t(u, ie), b || E || (b = !0, j = Ve)), ie;
  }, Lt.unstable_setDisableYieldValue = function(ie) {
    se = ie;
  }, Lt.unstable_shouldYield = ce, Lt.unstable_wrapCallback = function(ie) {
    var ge = y;
    return function() {
      var Ae = y;
      y = ge;
      try {
        return ie.apply(this, arguments);
      } finally {
        y = Ae;
      }
    };
  }, Lt.unstable_yieldValue = function(ie) {
    console.log.name === "disabledLog" || se || (A === null ? A = [ie] : A.push(ie));
  }, Lt;
}
var yg;
function ES() {
  return yg || (yg = 1, process.env.NODE_ENV === "production" ? $f.exports = ix() : $f.exports = rx()), $f.exports;
}
var Af = { exports: {} }, Rh = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gg;
function ax() {
  return gg || (gg = 1, function(t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = !1, a = !1, c = 5;
      function u(he, _e) {
        var Me = he.length;
        he.push(_e), m(he, _e, Me);
      }
      function s(he) {
        return he.length === 0 ? null : he[0];
      }
      function d(he) {
        if (he.length === 0)
          return null;
        var _e = he[0], Me = he.pop();
        return Me !== _e && (he[0] = Me, y(he, Me, 0)), _e;
      }
      function m(he, _e, Me) {
        for (var ae = Me; ae > 0; ) {
          var je = ae - 1 >>> 1, Ce = he[je];
          if (E(Ce, _e) > 0)
            he[je] = _e, he[ae] = Ce, ae = je;
          else
            return;
        }
      }
      function y(he, _e, Me) {
        for (var ae = Me, je = he.length, Ce = je >>> 1; ae < Ce; ) {
          var xe = (ae + 1) * 2 - 1, $ = he[xe], N = xe + 1, k = he[N];
          if (E($, _e) < 0)
            N < je && E(k, $) < 0 ? (he[ae] = k, he[N] = _e, ae = N) : (he[ae] = $, he[xe] = _e, ae = xe);
          else if (N < je && E(k, _e) < 0)
            he[ae] = k, he[N] = _e, ae = N;
          else
            return;
        }
      }
      function E(he, _e) {
        var Me = he.sortIndex - _e.sortIndex;
        return Me !== 0 ? Me : he.id - _e.id;
      }
      var b = 1, x = 2, R = 3, j = 4, U = 5;
      function q(he, _e) {
      }
      var A = typeof performance == "object" && typeof performance.now == "function";
      if (A) {
        var ye = performance;
        t.unstable_now = function() {
          return ye.now();
        };
      } else {
        var ee = Date, le = ee.now();
        t.unstable_now = function() {
          return ee.now() - le;
        };
      }
      var Z = 1073741823, K = -1, se = 250, Te = 5e3, ve = 1e4, Ve = Z, ce = [], Xe = [], ie = 1, ge = null, Ae = R, et = !1, Pe = !1, Qe = !1, me = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function V(he) {
        for (var _e = s(Xe); _e !== null; ) {
          if (_e.callback === null)
            d(Xe);
          else if (_e.startTime <= he)
            d(Xe), _e.sortIndex = _e.expirationTime, u(ce, _e);
          else
            return;
          _e = s(Xe);
        }
      }
      function G(he) {
        if (Qe = !1, V(he), !Pe)
          if (s(ce) !== null)
            Pe = !0, xt(oe);
          else {
            var _e = s(Xe);
            _e !== null && Ot(G, _e.startTime - he);
          }
      }
      function oe(he, _e) {
        Pe = !1, Qe && (Qe = !1, un()), et = !0;
        var Me = Ae;
        try {
          var ae;
          if (!a)
            return be(he, _e);
        } finally {
          ge = null, Ae = Me, et = !1;
        }
      }
      function be(he, _e) {
        var Me = _e;
        for (V(Me), ge = s(ce); ge !== null && !r && !(ge.expirationTime > Me && (!he || In())); ) {
          var ae = ge.callback;
          if (typeof ae == "function") {
            ge.callback = null, Ae = ge.priorityLevel;
            var je = ge.expirationTime <= Me, Ce = ae(je);
            Me = t.unstable_now(), typeof Ce == "function" ? ge.callback = Ce : ge === s(ce) && d(ce), V(Me);
          } else
            d(ce);
          ge = s(ce);
        }
        if (ge !== null)
          return !0;
        var xe = s(Xe);
        return xe !== null && Ot(G, xe.startTime - Me), !1;
      }
      function re(he, _e) {
        switch (he) {
          case b:
          case x:
          case R:
          case j:
          case U:
            break;
          default:
            he = R;
        }
        var Me = Ae;
        Ae = he;
        try {
          return _e();
        } finally {
          Ae = Me;
        }
      }
      function Q(he) {
        var _e;
        switch (Ae) {
          case b:
          case x:
          case R:
            _e = R;
            break;
          default:
            _e = Ae;
            break;
        }
        var Me = Ae;
        Ae = _e;
        try {
          return he();
        } finally {
          Ae = Me;
        }
      }
      function De(he) {
        var _e = Ae;
        return function() {
          var Me = Ae;
          Ae = _e;
          try {
            return he.apply(this, arguments);
          } finally {
            Ae = Me;
          }
        };
      }
      function Ge(he, _e, Me) {
        var ae = t.unstable_now(), je;
        if (typeof Me == "object" && Me !== null) {
          var Ce = Me.delay;
          typeof Ce == "number" && Ce > 0 ? je = ae + Ce : je = ae;
        } else
          je = ae;
        var xe;
        switch (he) {
          case b:
            xe = K;
            break;
          case x:
            xe = se;
            break;
          case U:
            xe = Ve;
            break;
          case j:
            xe = ve;
            break;
          case R:
          default:
            xe = Te;
            break;
        }
        var $ = je + xe, N = {
          id: ie++,
          callback: _e,
          priorityLevel: he,
          startTime: je,
          expirationTime: $,
          sortIndex: -1
        };
        return je > ae ? (N.sortIndex = je, u(Xe, N), s(ce) === null && N === s(Xe) && (Qe ? un() : Qe = !0, Ot(G, je - ae))) : (N.sortIndex = $, u(ce, N), !Pe && !et && (Pe = !0, xt(oe))), N;
      }
      function tt() {
      }
      function ot() {
        !Pe && !et && (Pe = !0, xt(oe));
      }
      function nt() {
        return s(ce);
      }
      function Ze(he) {
        he.callback = null;
      }
      function mt() {
        return Ae;
      }
      var J = !1, gt = null, ct = -1, pt = c, Zt = -1;
      function In() {
        var he = t.unstable_now() - Zt;
        return !(he < pt);
      }
      function z() {
      }
      function B(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? pt = Math.floor(1e3 / he) : pt = c;
      }
      var fe = function() {
        if (gt !== null) {
          var he = t.unstable_now();
          Zt = he;
          var _e = !0, Me = !0;
          try {
            Me = gt(_e, he);
          } finally {
            Me ? Ne() : (J = !1, gt = null);
          }
        } else
          J = !1;
      }, Ne;
      if (typeof D == "function")
        Ne = function() {
          D(fe);
        };
      else if (typeof MessageChannel < "u") {
        var P = new MessageChannel(), ut = P.port2;
        P.port1.onmessage = fe, Ne = function() {
          ut.postMessage(null);
        };
      } else
        Ne = function() {
          me(fe, 0);
        };
      function xt(he) {
        gt = he, J || (J = !0, Ne());
      }
      function Ot(he, _e) {
        ct = me(function() {
          he(t.unstable_now());
        }, _e);
      }
      function un() {
        C(ct), ct = -1;
      }
      var rt = z, Fe = null;
      t.unstable_IdlePriority = U, t.unstable_ImmediatePriority = b, t.unstable_LowPriority = j, t.unstable_NormalPriority = R, t.unstable_Profiling = Fe, t.unstable_UserBlockingPriority = x, t.unstable_cancelCallback = Ze, t.unstable_continueExecution = ot, t.unstable_forceFrameRate = B, t.unstable_getCurrentPriorityLevel = mt, t.unstable_getFirstCallbackNode = nt, t.unstable_next = Q, t.unstable_pauseExecution = tt, t.unstable_requestPaint = rt, t.unstable_runWithPriority = re, t.unstable_scheduleCallback = Ge, t.unstable_shouldYield = In, t.unstable_wrapCallback = De, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Rh)), Rh;
}
var Oh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bg;
function ox() {
  return bg || (bg = 1, function(t) {
    function r(me, C) {
      var D = me.length;
      me.push(C);
      e:
        for (; 0 < D; ) {
          var V = D - 1 >>> 1, G = me[V];
          if (0 < u(G, C))
            me[V] = C, me[D] = G, D = V;
          else
            break e;
        }
    }
    function a(me) {
      return me.length === 0 ? null : me[0];
    }
    function c(me) {
      if (me.length === 0)
        return null;
      var C = me[0], D = me.pop();
      if (D !== C) {
        me[0] = D;
        e:
          for (var V = 0, G = me.length, oe = G >>> 1; V < oe; ) {
            var be = 2 * (V + 1) - 1, re = me[be], Q = be + 1, De = me[Q];
            if (0 > u(re, D))
              Q < G && 0 > u(De, re) ? (me[V] = De, me[Q] = D, V = Q) : (me[V] = re, me[be] = D, V = be);
            else if (Q < G && 0 > u(De, D))
              me[V] = De, me[Q] = D, V = Q;
            else
              break e;
          }
      }
      return C;
    }
    function u(me, C) {
      var D = me.sortIndex - C.sortIndex;
      return D !== 0 ? D : me.id - C.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      t.unstable_now = function() {
        return s.now();
      };
    } else {
      var d = Date, m = d.now();
      t.unstable_now = function() {
        return d.now() - m;
      };
    }
    var y = [], E = [], b = 1, x = null, R = 3, j = !1, U = !1, q = !1, A = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, ee = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function le(me) {
      for (var C = a(E); C !== null; ) {
        if (C.callback === null)
          c(E);
        else if (C.startTime <= me)
          c(E), C.sortIndex = C.expirationTime, r(y, C);
        else
          break;
        C = a(E);
      }
    }
    function Z(me) {
      if (q = !1, le(me), !U)
        if (a(y) !== null)
          U = !0, Pe(K);
        else {
          var C = a(E);
          C !== null && Qe(Z, C.startTime - me);
        }
    }
    function K(me, C) {
      U = !1, q && (q = !1, ye(ve), ve = -1), j = !0;
      var D = R;
      try {
        for (le(C), x = a(y); x !== null && (!(x.expirationTime > C) || me && !Xe()); ) {
          var V = x.callback;
          if (typeof V == "function") {
            x.callback = null, R = x.priorityLevel;
            var G = V(x.expirationTime <= C);
            C = t.unstable_now(), typeof G == "function" ? x.callback = G : x === a(y) && c(y), le(C);
          } else
            c(y);
          x = a(y);
        }
        if (x !== null)
          var oe = !0;
        else {
          var be = a(E);
          be !== null && Qe(Z, be.startTime - C), oe = !1;
        }
        return oe;
      } finally {
        x = null, R = D, j = !1;
      }
    }
    var se = !1, Te = null, ve = -1, Ve = 5, ce = -1;
    function Xe() {
      return !(t.unstable_now() - ce < Ve);
    }
    function ie() {
      if (Te !== null) {
        var me = t.unstable_now();
        ce = me;
        var C = !0;
        try {
          C = Te(!0, me);
        } finally {
          C ? ge() : (se = !1, Te = null);
        }
      } else
        se = !1;
    }
    var ge;
    if (typeof ee == "function")
      ge = function() {
        ee(ie);
      };
    else if (typeof MessageChannel < "u") {
      var Ae = new MessageChannel(), et = Ae.port2;
      Ae.port1.onmessage = ie, ge = function() {
        et.postMessage(null);
      };
    } else
      ge = function() {
        A(ie, 0);
      };
    function Pe(me) {
      Te = me, se || (se = !0, ge());
    }
    function Qe(me, C) {
      ve = A(function() {
        me(t.unstable_now());
      }, C);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(me) {
      me.callback = null;
    }, t.unstable_continueExecution = function() {
      U || j || (U = !0, Pe(K));
    }, t.unstable_forceFrameRate = function(me) {
      0 > me || 125 < me ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ve = 0 < me ? Math.floor(1e3 / me) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, t.unstable_getFirstCallbackNode = function() {
      return a(y);
    }, t.unstable_next = function(me) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var C = 3;
          break;
        default:
          C = R;
      }
      var D = R;
      R = C;
      try {
        return me();
      } finally {
        R = D;
      }
    }, t.unstable_pauseExecution = function() {
    }, t.unstable_requestPaint = function() {
    }, t.unstable_runWithPriority = function(me, C) {
      switch (me) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          me = 3;
      }
      var D = R;
      R = me;
      try {
        return C();
      } finally {
        R = D;
      }
    }, t.unstable_scheduleCallback = function(me, C, D) {
      var V = t.unstable_now();
      switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? V + D : V) : D = V, me) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return G = D + G, me = { id: b++, callback: C, priorityLevel: me, startTime: D, expirationTime: G, sortIndex: -1 }, D > V ? (me.sortIndex = D, r(E, me), a(y) === null && me === a(E) && (q ? (ye(ve), ve = -1) : q = !0, Qe(Z, D - V))) : (me.sortIndex = G, r(y, me), U || j || (U = !0, Pe(K))), me;
    }, t.unstable_shouldYield = Xe, t.unstable_wrapCallback = function(me) {
      var C = R;
      return function() {
        var D = R;
        R = C;
        try {
          return me.apply(this, arguments);
        } finally {
          R = D;
        }
      };
    };
  }(Oh)), Oh;
}
var Sg;
function TS() {
  return Sg || (Sg = 1, process.env.NODE_ENV === "production" ? Af.exports = ox() : Af.exports = ax()), Af.exports;
}
/**
 * @license React
 * react-test-renderer.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eg;
function ux() {
  return Eg || (Eg = 1, process.env.NODE_ENV !== "production" && function() {
    var t = SS, r = ES(), a = TS(), c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(e) {
      {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++)
          l[f - 1] = arguments[f];
        d("warn", e, l);
      }
    }
    function s(e) {
      {
        for (var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), f = 1; f < n; f++)
          l[f - 1] = arguments[f];
        d("error", e, l);
      }
    }
    function d(e, n, l) {
      {
        var f = c.ReactDebugCurrentFrame, h = f.getStackAddendum();
        h !== "" && (n += "%s", l = l.concat([h]));
        var g = l.map(function(T) {
          return String(T);
        });
        g.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, g);
      }
    }
    function m(e, n) {
      for (var l = 0; l < n.length; l++) {
        var f = n[l];
        f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(e, f.key, f);
      }
    }
    function y(e, n, l) {
      return n && m(e.prototype, n), l && m(e, l), e;
    }
    function E(e, n) {
      if (e == null)
        return {};
      var l = {}, f = Object.keys(e), h, g;
      for (g = 0; g < f.length; g++)
        h = f[g], !(n.indexOf(h) >= 0) && (l[h] = e[h]);
      return l;
    }
    var b = Object.assign;
    function x(e) {
      return e._reactInternals;
    }
    function R(e, n) {
      e._reactInternals = n;
    }
    var j = !1, U = !0, q = !0, A = !1, ye = !1, ee = !1, le = !1, Z = !1, K = 0, se = 1, Te = 2, ve = 3, Ve = 4, ce = 5, Xe = 6, ie = 7, ge = 8, Ae = 9, et = 10, Pe = 11, Qe = 12, me = 13, C = 14, D = 15, V = 16, G = 17, oe = 18, be = 19, re = 21, Q = 22, De = 23, Ge = 24, tt = 25, ot = Symbol.for("react.element"), nt = Symbol.for("react.portal"), Ze = Symbol.for("react.fragment"), mt = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), gt = Symbol.for("react.provider"), ct = Symbol.for("react.context"), pt = Symbol.for("react.forward_ref"), Zt = Symbol.for("react.suspense"), In = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), fe = Symbol.for("react.scope"), Ne = Symbol.for("react.debug_trace_mode"), P = Symbol.for("react.offscreen"), ut = Symbol.for("react.legacy_hidden"), xt = Symbol.for("react.cache"), Ot = Symbol.for("react.tracing_marker"), un = Symbol.iterator, rt = "@@iterator";
    function Fe(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = un && e[un] || e[rt];
      return typeof n == "function" ? n : null;
    }
    function he(e, n, l) {
      var f = e.displayName;
      if (f)
        return f;
      var h = n.displayName || n.name || "";
      return h !== "" ? l + "(" + h + ")" : l;
    }
    function _e(e) {
      return e.displayName || "Context";
    }
    function Me(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ze:
          return "Fragment";
        case nt:
          return "Portal";
        case J:
          return "Profiler";
        case mt:
          return "StrictMode";
        case Zt:
          return "Suspense";
        case In:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ct:
            var n = e;
            return _e(n) + ".Consumer";
          case gt:
            var l = e;
            return _e(l._context) + ".Provider";
          case pt:
            return he(e, e.render, "ForwardRef");
          case z:
            var f = e.displayName || null;
            return f !== null ? f : Me(e.type) || "Memo";
          case B: {
            var h = e, g = h._payload, T = h._init;
            try {
              return Me(T(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ae(e, n, l) {
      var f = n.displayName || n.name || "";
      return e.displayName || (f !== "" ? l + "(" + f + ")" : l);
    }
    function je(e) {
      return e.displayName || "Context";
    }
    function Ce(e) {
      var n = e.tag, l = e.type;
      switch (n) {
        case Ge:
          return "Cache";
        case Ae:
          var f = l;
          return je(f) + ".Consumer";
        case et:
          var h = l;
          return je(h._context) + ".Provider";
        case oe:
          return "DehydratedFragment";
        case Pe:
          return ae(l, l.render, "ForwardRef");
        case ie:
          return "Fragment";
        case ce:
          return l;
        case Ve:
          return "Portal";
        case ve:
          return "Root";
        case Xe:
          return "Text";
        case V:
          return Me(l);
        case ge:
          return l === mt ? "StrictMode" : "Mode";
        case Q:
          return "Offscreen";
        case Qe:
          return "Profiler";
        case re:
          return "Scope";
        case me:
          return "Suspense";
        case be:
          return "SuspenseList";
        case tt:
          return "TracingMarker";
        case se:
        case K:
        case G:
        case Te:
        case C:
        case D:
          if (typeof l == "function")
            return l.displayName || l.name || null;
          if (typeof l == "string")
            return l;
          break;
      }
      return null;
    }
    var xe = (
      /*                      */
      0
    ), $ = (
      /*                */
      1
    ), N = (
      /*                    */
      2
    ), k = (
      /*                       */
      4
    ), Oe = (
      /*                */
      16
    ), Se = (
      /*                 */
      32
    ), We = (
      /*                     */
      64
    ), Ie = (
      /*                   */
      128
    ), St = (
      /*            */
      256
    ), Et = (
      /*                          */
      512
    ), Nt = (
      /*                     */
      1024
    ), en = (
      /*                      */
      2048
    ), jn = (
      /*                    */
      4096
    ), Kn = (
      /*                   */
      8192
    ), Cr = (
      /*             */
      16384
    ), mi = en | k | We | Et | Nt | Cr, On = (
      /*               */
      32767
    ), Nn = (
      /*                   */
      32768
    ), Sn = (
      /*                */
      65536
    ), Ui = (
      /* */
      131072
    ), Ar = (
      /*                       */
      1048576
    ), co = (
      /*                    */
      2097152
    ), vi = (
      /*                 */
      4194304
    ), Ml = (
      /*                */
      8388608
    ), ma = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      k | Nt | 0
    ), yi = N | k | Oe | Se | Et | jn | Kn, va = k | We | Et | Kn, gi = en | Oe, Mn = vi | Ml | co, sd = c.ReactCurrentOwner;
    function Bi(e) {
      var n = e, l = e;
      if (e.alternate)
        for (; n.return; )
          n = n.return;
      else {
        var f = n;
        do
          n = f, (n.flags & (N | jn)) !== xe && (l = n.return), f = n.return;
        while (f);
      }
      return n.tag === ve ? l : null;
    }
    function cd(e) {
      return Bi(e) === e;
    }
    function Rr(e) {
      {
        var n = sd.current;
        if (n !== null && n.tag === se) {
          var l = n, f = l.stateNode;
          f._warnedAboutRefsInRender || s("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ce(l) || "A component"), f._warnedAboutRefsInRender = !0;
        }
      }
      var h = x(e);
      return h ? Bi(h) === h : !1;
    }
    function fo(e) {
      if (Bi(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function po(e) {
      var n = e.alternate;
      if (!n) {
        var l = Bi(e);
        if (l === null)
          throw new Error("Unable to find node on an unmounted component.");
        return l !== e ? null : e;
      }
      for (var f = e, h = n; ; ) {
        var g = f.return;
        if (g === null)
          break;
        var T = g.alternate;
        if (T === null) {
          var _ = g.return;
          if (_ !== null) {
            f = h = _;
            continue;
          }
          break;
        }
        if (g.child === T.child) {
          for (var O = g.child; O; ) {
            if (O === f)
              return fo(g), e;
            if (O === h)
              return fo(g), n;
            O = O.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (f.return !== h.return)
          f = g, h = T;
        else {
          for (var L = !1, I = g.child; I; ) {
            if (I === f) {
              L = !0, f = g, h = T;
              break;
            }
            if (I === h) {
              L = !0, h = g, f = T;
              break;
            }
            I = I.sibling;
          }
          if (!L) {
            for (I = T.child; I; ) {
              if (I === f) {
                L = !0, f = T, h = g;
                break;
              }
              if (I === h) {
                L = !0, h = T, f = g;
                break;
              }
              I = I.sibling;
            }
            if (!L)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (f.alternate !== h)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (f.tag !== ve)
        throw new Error("Unable to find node on an unmounted component.");
      return f.stateNode.current === f ? e : n;
    }
    function ya(e) {
      var n = po(e);
      return n !== null ? tu(n) : null;
    }
    function tu(e) {
      if (e.tag === ce || e.tag === Xe)
        return e;
      for (var n = e.child; n !== null; ) {
        var l = tu(n);
        if (l !== null)
          return l;
        n = n.sibling;
      }
      return null;
    }
    var $l = Array.isArray;
    function $n(e) {
      return $l(e);
    }
    var nu = a.unstable_scheduleCallback, ga = a.unstable_cancelCallback, vr = a.unstable_shouldYield, Ii = a.unstable_requestPaint, En = a.unstable_now, ho = a.unstable_ImmediatePriority, qi = a.unstable_UserBlockingPriority, or = a.unstable_NormalPriority, ru = a.unstable_IdlePriority, ba = 0, Xr, bi, mo, Al, vo, Dl, Pl;
    function iu() {
    }
    iu.__reactDisabledLog = !0;
    function au() {
      {
        if (ba === 0) {
          Xr = console.log, bi = console.info, mo = console.warn, Al = console.error, vo = console.group, Dl = console.groupCollapsed, Pl = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: iu,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ba++;
      }
    }
    function oc() {
      {
        if (ba--, ba === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, e, {
              value: Xr
            }),
            info: b({}, e, {
              value: bi
            }),
            warn: b({}, e, {
              value: mo
            }),
            error: b({}, e, {
              value: Al
            }),
            group: b({}, e, {
              value: vo
            }),
            groupCollapsed: b({}, e, {
              value: Dl
            }),
            groupEnd: b({}, e, {
              value: Pl
            })
          });
        }
        ba < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Sa = null, Gn = null, Dr = !1, yo = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ou(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (n.isDisabled)
        return !0;
      if (!n.supportsFiber)
        return s("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Sa = n.inject(e), Gn = n;
      } catch (l) {
        s("React instrumentation encountered an error: %s.", l);
      }
      return !!n.checkDCE;
    }
    function uc(e, n) {
      if (Gn && typeof Gn.onScheduleFiberRoot == "function")
        try {
          Gn.onScheduleFiberRoot(Sa, e, n);
        } catch (l) {
          Dr || (Dr = !0, s("React instrumentation encountered an error: %s", l));
        }
    }
    function lc(e, n) {
      if (Gn && typeof Gn.onCommitFiberRoot == "function")
        try {
          var l = (e.current.flags & Ie) === Ie;
          if (U) {
            var f;
            switch (n) {
              case ni:
                f = ho;
                break;
              case Wi:
                f = qi;
                break;
              case Ra:
                f = or;
                break;
              case Oa:
                f = ru;
                break;
              default:
                f = or;
                break;
            }
            Gn.onCommitFiberRoot(Sa, e, f, l);
          }
        } catch (h) {
          Dr || (Dr = !0, s("React instrumentation encountered an error: %s", h));
        }
    }
    function Ea(e) {
      if (Gn && typeof Gn.onPostCommitFiberRoot == "function")
        try {
          Gn.onPostCommitFiberRoot(Sa, e);
        } catch (n) {
          Dr || (Dr = !0, s("React instrumentation encountered an error: %s", n));
        }
    }
    function fd(e) {
      if (Gn && typeof Gn.onCommitFiberUnmount == "function")
        try {
          Gn.onCommitFiberUnmount(Sa, e);
        } catch (n) {
          Dr || (Dr = !0, s("React instrumentation encountered an error: %s", n));
        }
    }
    function uu(e) {
    }
    function Zr() {
      return null;
    }
    function lu() {
    }
    function su(e, n, l) {
    }
    function Ta(e, n, l) {
    }
    var At = (
      /*                         */
      0
    ), Yt = (
      /*                 */
      1
    ), Ft = (
      /*                    */
      2
    ), Or = (
      /*               */
      8
    ), tn = Math.clz32 ? Math.clz32 : kl, cu = Math.log, jl = Math.LN2;
    function kl(e) {
      var n = e >>> 0;
      return n === 0 ? 32 : 31 - (cu(n) / jl | 0) | 0;
    }
    var fu = 31, we = (
      /*                        */
      0
    ), nn = (
      /*                          */
      0
    ), Ke = (
      /*                        */
      1
    ), rn = (
      /*    */
      2
    ), Wt = (
      /*             */
      4
    ), ei = (
      /*            */
      8
    ), ur = (
      /*                     */
      16
    ), du = (
      /*                */
      32
    ), hn = (
      /*                       */
      4194240
    ), Vi = (
      /*                        */
      64
    ), go = (
      /*                        */
      128
    ), yr = (
      /*                        */
      256
    ), Wn = (
      /*                        */
      512
    ), Hi = (
      /*                        */
      1024
    ), bo = (
      /*                        */
      2048
    ), So = (
      /*                        */
      4096
    ), pu = (
      /*                        */
      8192
    ), hu = (
      /*                        */
      16384
    ), mu = (
      /*                       */
      32768
    ), vu = (
      /*                       */
      65536
    ), yu = (
      /*                       */
      131072
    ), gu = (
      /*                       */
      262144
    ), bu = (
      /*                       */
      524288
    ), Su = (
      /*                       */
      1048576
    ), Yi = (
      /*                       */
      2097152
    ), Eu = (
      /*                            */
      130023424
    ), ti = (
      /*                             */
      4194304
    ), wa = (
      /*                             */
      8388608
    ), Tu = (
      /*                             */
      16777216
    ), Eo = (
      /*                             */
      33554432
    ), wu = (
      /*                             */
      67108864
    ), zl = ti, xu = (
      /*          */
      134217728
    ), Ll = (
      /*                          */
      268435455
    ), xa = (
      /*               */
      268435456
    ), Qi = (
      /*                        */
      536870912
    ), gr = (
      /*                   */
      1073741824
    ), Qt = -1, _u = Vi, To = ti;
    function Cu(e) {
      switch (Ki(e)) {
        case Ke:
          return Ke;
        case rn:
          return rn;
        case Wt:
          return Wt;
        case ei:
          return ei;
        case ur:
          return ur;
        case du:
          return du;
        case Vi:
        case go:
        case yr:
        case Wn:
        case Hi:
        case bo:
        case So:
        case pu:
        case hu:
        case mu:
        case vu:
        case yu:
        case gu:
        case bu:
        case Su:
        case Yi:
          return e & hn;
        case ti:
        case wa:
        case Tu:
        case Eo:
        case wu:
          return e & Eu;
        case xu:
          return xu;
        case xa:
          return xa;
        case Qi:
          return Qi;
        case gr:
          return gr;
        default:
          return s("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ru(e, n) {
      var l = e.pendingLanes;
      if (l === we)
        return we;
      var f = we, h = e.suspendedLanes, g = e.pingedLanes, T = l & Ll;
      if (T !== we) {
        var _ = T & ~h;
        if (_ !== we)
          f = Cu(_);
        else {
          var O = T & g;
          O !== we && (f = Cu(O));
        }
      } else {
        var L = l & ~h;
        L !== we ? f = Cu(L) : g !== we && (f = Cu(g));
      }
      if (f === we)
        return we;
      if (n !== we && n !== f && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (n & h) === we) {
        var I = Ki(f), ne = Ki(n);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          I >= ne || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          I === ur && (ne & hn) !== we
        )
          return n;
      }
      (f & Wt) !== we && (f |= l & ur);
      var Ee = e.entangledLanes;
      if (Ee !== we)
        for (var $e = e.entanglements, Re = f & Ee; Re > 0; ) {
          var Ue = mn(Re), at = 1 << Ue;
          f |= $e[Ue], Re &= ~at;
        }
      return f;
    }
    function sc(e, n) {
      for (var l = e.eventTimes, f = Qt; n > 0; ) {
        var h = mn(n), g = 1 << h, T = l[h];
        T > f && (f = T), n &= ~g;
      }
      return f;
    }
    function cc(e, n) {
      switch (e) {
        case Ke:
        case rn:
        case Wt:
          return n + 250;
        case ei:
        case ur:
        case du:
        case Vi:
        case go:
        case yr:
        case Wn:
        case Hi:
        case bo:
        case So:
        case pu:
        case hu:
        case mu:
        case vu:
        case yu:
        case gu:
        case bu:
        case Su:
        case Yi:
          return n + 5e3;
        case ti:
        case wa:
        case Tu:
        case Eo:
        case wu:
          return Qt;
        case xu:
        case xa:
        case Qi:
        case gr:
          return Qt;
        default:
          return s("Should have found matching lanes. This is a bug in React."), Qt;
      }
    }
    function fc(e, n) {
      for (var l = e.pendingLanes, f = e.suspendedLanes, h = e.pingedLanes, g = e.expirationTimes, T = l; T > 0; ) {
        var _ = mn(T), O = 1 << _, L = g[_];
        L === Qt ? ((O & f) === we || (O & h) !== we) && (g[_] = cc(O, n)) : L <= n && (e.expiredLanes |= O), T &= ~O;
      }
    }
    function _a(e) {
      var n = e.pendingLanes & ~gr;
      return n !== we ? n : n & gr ? gr : we;
    }
    function dd(e) {
      return (e & Ke) !== we;
    }
    function Fl(e) {
      return (e & Ll) !== we;
    }
    function dc(e) {
      return (e & Eu) === e;
    }
    function Ul(e) {
      var n = Ke | Wt | ur;
      return (e & n) === we;
    }
    function Bl(e) {
      return (e & hn) === e;
    }
    function Ca(e, n) {
      var l = rn | Wt | ei | ur;
      return (n & l) !== we;
    }
    function pd(e, n) {
      return (n & e.expiredLanes) !== we;
    }
    function Il(e) {
      return (e & hn) !== we;
    }
    function ql() {
      var e = _u;
      return _u <<= 1, (_u & hn) === we && (_u = Vi), e;
    }
    function pc() {
      var e = To;
      return To <<= 1, (To & Eu) === we && (To = ti), e;
    }
    function Ki(e) {
      return e & -e;
    }
    function xn(e) {
      return Ki(e);
    }
    function mn(e) {
      return 31 - tn(e);
    }
    function hc(e) {
      return mn(e);
    }
    function Jn(e, n) {
      return (e & n) !== we;
    }
    function Gi(e, n) {
      return (e & n) === n;
    }
    function bt(e, n) {
      return e | n;
    }
    function wo(e, n) {
      return e & ~n;
    }
    function Ou(e, n) {
      return e & n;
    }
    function hd(e) {
      return e;
    }
    function xo(e) {
      for (var n = [], l = 0; l < fu; l++)
        n.push(e);
      return n;
    }
    function _o(e, n, l) {
      e.pendingLanes |= n, n !== Qi && (e.suspendedLanes = we, e.pingedLanes = we);
      var f = e.eventTimes, h = hc(n);
      f[h] = l;
    }
    function Vl(e, n) {
      e.suspendedLanes |= n, e.pingedLanes &= ~n;
      for (var l = e.expirationTimes, f = n; f > 0; ) {
        var h = mn(f), g = 1 << h;
        l[h] = Qt, f &= ~g;
      }
    }
    function Nu(e, n, l) {
      e.pingedLanes |= e.suspendedLanes & n;
    }
    function mc(e, n) {
      var l = e.pendingLanes & ~n;
      e.pendingLanes = n, e.suspendedLanes = we, e.pingedLanes = we, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n;
      for (var f = e.entanglements, h = e.eventTimes, g = e.expirationTimes, T = l; T > 0; ) {
        var _ = mn(T), O = 1 << _;
        f[_] = we, h[_] = Qt, g[_] = Qt, T &= ~O;
      }
    }
    function Mu(e, n) {
      for (var l = e.entangledLanes |= n, f = e.entanglements, h = l; h; ) {
        var g = mn(h), T = 1 << g;
        // Is this one of the newly entangled lanes?
        T & n | // Is this lane transitively entangled with the newly entangled lanes?
        f[g] & n && (f[g] |= n), h &= ~T;
      }
    }
    function $u(e, n) {
      var l = Ki(n), f;
      switch (l) {
        case Wt:
          f = rn;
          break;
        case ur:
          f = ei;
          break;
        case Vi:
        case go:
        case yr:
        case Wn:
        case Hi:
        case bo:
        case So:
        case pu:
        case hu:
        case mu:
        case vu:
        case yu:
        case gu:
        case bu:
        case Su:
        case Yi:
        case ti:
        case wa:
        case Tu:
        case Eo:
        case wu:
          f = du;
          break;
        case Qi:
          f = xa;
          break;
        default:
          f = nn;
          break;
      }
      return (f & (e.suspendedLanes | n)) !== nn ? nn : f;
    }
    function vc(e, n) {
      return null;
    }
    var ni = Ke, Wi = Wt, Ra = ur, Oa = Qi, Pr = nn;
    function Ji() {
      return Pr;
    }
    function lr(e) {
      Pr = e;
    }
    function Hl(e, n) {
      return e !== 0 && e < n ? e : n;
    }
    function yc(e, n) {
      return e === 0 || e > n ? e : n;
    }
    function Yl(e, n) {
      return e !== 0 && e < n;
    }
    function Na(e) {
      var n = Ki(e);
      return Yl(ni, n) ? Yl(Wi, n) ? Fl(n) ? Ra : Oa : Wi : ni;
    }
    function ln() {
      throw new Error("The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.");
    }
    var gc = ln, Ql = ln, md = ln, ht = ln, Au = ln, Kl = ln, bc = ln, Gl = {}, Co = {}, Wl = /* @__PURE__ */ new WeakMap();
    Object.freeze(Gl), Object.freeze(Co);
    function Ro(e) {
      switch (e.tag) {
        case "INSTANCE":
          var n = e.rootContainerInstance.createNodeMock, l = n({
            type: e.type,
            props: e.props
          });
          return typeof l == "object" && l !== null && Wl.set(l, e), l;
        default:
          return e;
      }
    }
    function Jl(e, n) {
      $n(e.children) || s("An invalid container has been provided. This may indicate that another renderer is being used in addition to the test renderer. (For example, ReactDOM.createPortal inside of a ReactTestRenderer tree.) This is not supported.");
      var l = e.children.indexOf(n);
      l !== -1 && e.children.splice(l, 1), e.children.push(n);
    }
    function Xl(e, n, l) {
      var f = e.children.indexOf(n);
      f !== -1 && e.children.splice(f, 1);
      var h = e.children.indexOf(l);
      e.children.splice(h, 0, n);
    }
    function Du(e, n) {
      var l = e.children.indexOf(n);
      e.children.splice(l, 1);
    }
    function Zl(e) {
      e.children.splice(0);
    }
    function qn(e) {
      return Gl;
    }
    function Xi(e, n, l) {
      return Gl;
    }
    function Sc(e) {
      return null;
    }
    function vd(e) {
    }
    function jr(e, n, l, f, h) {
      return {
        type: e,
        props: n,
        isHidden: !1,
        children: [],
        internalInstanceHandle: h,
        rootContainerInstance: l,
        tag: "INSTANCE"
      };
    }
    function Ec(e, n) {
      var l = e.children.indexOf(n);
      l !== -1 && e.children.splice(l, 1), e.children.push(n);
    }
    function kr(e, n, l, f, h, g) {
      return Co;
    }
    function yd(e, n) {
      return !1;
    }
    function gd(e, n, l, f) {
      return {
        text: e,
        isHidden: !1,
        tag: "TEXT"
      };
    }
    function Pu() {
      return Ra;
    }
    var ju = setTimeout, br = clearTimeout, Mt = -1;
    function _n(e, n, l, f, h, g) {
      e.type = l, e.props = h;
    }
    function vn(e, n, l) {
      e.text = l;
    }
    function kn(e) {
    }
    var sr = Jl, Ma = Xl, Tn = Du;
    function Oo(e) {
      e.isHidden = !0;
    }
    function Zi(e) {
      e.isHidden = !0;
    }
    function ku(e, n) {
      e.isHidden = !1;
    }
    function es(e, n) {
      e.isHidden = !1;
    }
    function zu(e) {
    }
    var zn = c.ReactCurrentDispatcher, No;
    function Sr(e, n, l) {
      {
        if (No === void 0)
          try {
            throw Error();
          } catch (h) {
            var f = h.stack.trim().match(/\n( *(at )?)/);
            No = f && f[1] || "";
          }
        return `
` + No + e;
      }
    }
    var Nr = !1, ea;
    {
      var ts = typeof WeakMap == "function" ? WeakMap : Map;
      ea = new ts();
    }
    function zr(e, n) {
      if (!e || Nr)
        return "";
      {
        var l = ea.get(e);
        if (l !== void 0)
          return l;
      }
      var f;
      Nr = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = zn.current, zn.current = null, au();
      try {
        if (n) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (Re) {
              f = Re;
            }
            Reflect.construct(e, [], T);
          } else {
            try {
              T.call();
            } catch (Re) {
              f = Re;
            }
            e.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            f = Re;
          }
          e();
        }
      } catch (Re) {
        if (Re && f && typeof Re.stack == "string") {
          for (var _ = Re.stack.split(`
`), O = f.stack.split(`
`), L = _.length - 1, I = O.length - 1; L >= 1 && I >= 0 && _[L] !== O[I]; )
            I--;
          for (; L >= 1 && I >= 0; L--, I--)
            if (_[L] !== O[I]) {
              if (L !== 1 || I !== 1)
                do
                  if (L--, I--, I < 0 || _[L] !== O[I]) {
                    var ne = `
` + _[L].replace(" at new ", " at ");
                    return e.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", e.displayName)), typeof e == "function" && ea.set(e, ne), ne;
                  }
                while (L >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        Nr = !1, zn.current = g, oc(), Error.prepareStackTrace = h;
      }
      var Ee = e ? e.displayName || e.name : "", $e = Ee ? Sr(Ee) : "";
      return typeof e == "function" && ea.set(e, $e), $e;
    }
    function Lu(e, n, l) {
      return zr(e, !0);
    }
    function Lr(e, n, l) {
      return zr(e, !1);
    }
    function Fu(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ta(e, n, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return zr(e, Fu(e));
      if (typeof e == "string")
        return Sr(e);
      switch (e) {
        case Zt:
          return Sr("Suspense");
        case In:
          return Sr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case pt:
            return Lr(e.render);
          case z:
            return ta(e.type, n, l);
          case B: {
            var f = e, h = f._payload, g = f._init;
            try {
              return ta(g(h), n, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Uu = Object.prototype.hasOwnProperty, Mo = {}, $o = c.ReactDebugCurrentFrame;
    function Xn(e) {
      if (e) {
        var n = e._owner, l = ta(e.type, e._source, n ? n.type : null);
        $o.setExtraStackFrame(l);
      } else
        $o.setExtraStackFrame(null);
    }
    function Ln(e, n, l, f, h) {
      {
        var g = Function.call.bind(Uu);
        for (var T in e)
          if (g(e, T)) {
            var _ = void 0;
            try {
              if (typeof e[T] != "function") {
                var O = Error((f || "React class") + ": " + l + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              _ = e[T](n, T, f, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (L) {
              _ = L;
            }
            _ && !(_ instanceof Error) && (Xn(h), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", l, T, typeof _), Xn(null)), _ instanceof Error && !(_.message in Mo) && (Mo[_.message] = !0, Xn(h), s("Failed %s type: %s", l, _.message), Xn(null));
          }
      }
    }
    var Fr = [], Vn;
    Vn = [];
    var Ur = -1;
    function Br(e) {
      return {
        current: e
      };
    }
    function Cn(e, n) {
      if (Ur < 0) {
        s("Unexpected pop.");
        return;
      }
      n !== Vn[Ur] && s("Unexpected Fiber popped."), e.current = Fr[Ur], Fr[Ur] = null, Vn[Ur] = null, Ur--;
    }
    function Fn(e, n, l) {
      Ur++, Fr[Ur] = e.current, Vn[Ur] = l, e.current = n;
    }
    var Ir;
    Ir = {};
    var Zn = {};
    Object.freeze(Zn);
    var ri = Br(Zn), Er = Br(!1), ii = Zn;
    function na(e, n, l) {
      return l && qr(n) ? ii : ri.current;
    }
    function ns(e, n, l) {
      {
        var f = e.stateNode;
        f.__reactInternalMemoizedUnmaskedChildContext = n, f.__reactInternalMemoizedMaskedChildContext = l;
      }
    }
    function Si(e, n) {
      {
        var l = e.type, f = l.contextTypes;
        if (!f)
          return Zn;
        var h = e.stateNode;
        if (h && h.__reactInternalMemoizedUnmaskedChildContext === n)
          return h.__reactInternalMemoizedMaskedChildContext;
        var g = {};
        for (var T in f)
          g[T] = n[T];
        {
          var _ = Ce(e) || "Unknown";
          Ln(f, g, "context", _);
        }
        return h && ns(e, n, g), g;
      }
    }
    function ra() {
      return Er.current;
    }
    function qr(e) {
      {
        var n = e.childContextTypes;
        return n != null;
      }
    }
    function Bu(e) {
      Cn(Er, e), Cn(ri, e);
    }
    function Iu(e) {
      Cn(Er, e), Cn(ri, e);
    }
    function rs(e, n, l) {
      {
        if (ri.current !== Zn)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Fn(ri, n, e), Fn(Er, l, e);
      }
    }
    function Ei(e, n, l) {
      {
        var f = e.stateNode, h = n.childContextTypes;
        if (typeof f.getChildContext != "function") {
          {
            var g = Ce(e) || "Unknown";
            Ir[g] || (Ir[g] = !0, s("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", g, g));
          }
          return l;
        }
        var T = f.getChildContext();
        for (var _ in T)
          if (!(_ in h))
            throw new Error((Ce(e) || "Unknown") + '.getChildContext(): key "' + _ + '" is not defined in childContextTypes.');
        {
          var O = Ce(e) || "Unknown";
          Ln(h, T, "child context", O);
        }
        return b({}, l, T);
      }
    }
    function qu(e) {
      {
        var n = e.stateNode, l = n && n.__reactInternalMemoizedMergedChildContext || Zn;
        return ii = ri.current, Fn(ri, l, e), Fn(Er, Er.current, e), !0;
      }
    }
    function ia(e, n, l) {
      {
        var f = e.stateNode;
        if (!f)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (l) {
          var h = Ei(e, n, ii);
          f.__reactInternalMemoizedMergedChildContext = h, Cn(Er, e), Cn(ri, e), Fn(ri, h, e), Fn(Er, l, e);
        } else
          Cn(Er, e), Fn(Er, l, e);
      }
    }
    function Tc(e) {
      {
        if (!cd(e) || e.tag !== se)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var n = e;
        do {
          switch (n.tag) {
            case ve:
              return n.stateNode.context;
            case se: {
              var l = n.type;
              if (qr(l))
                return n.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          n = n.return;
        } while (n !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var yn = 0, is = 1;
    function wc(e, n) {
      return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    var cr = typeof Object.is == "function" ? Object.is : wc, ai = null, Vu = !1, Hu = !1;
    function xc(e) {
      ai === null ? ai = [e] : ai.push(e);
    }
    function Vr(e) {
      Vu = !0, xc(e);
    }
    function Yu() {
      Vu && $a();
    }
    function $a() {
      if (!Hu && ai !== null) {
        Hu = !0;
        var e = 0, n = Ji();
        try {
          var l = !0, f = ai;
          for (lr(ni); e < f.length; e++) {
            var h = f[e];
            do
              h = h(l);
            while (h !== null);
          }
          ai = null, Vu = !1;
        } catch (g) {
          throw ai !== null && (ai = ai.slice(e + 1)), nu(ho, $a), g;
        } finally {
          lr(n), Hu = !1;
        }
      }
      return null;
    }
    function Ti(e) {
      var n = e.current.memoizedState;
      return n.isDehydrated;
    }
    var aa = [], Hr = 0, Ao = null, wi = [], xi = 0, _c = null;
    function as(e) {
      for (; e === Ao; )
        Ao = aa[--Hr], aa[Hr] = null, aa[--Hr], aa[Hr] = null;
      for (; e === _c; )
        _c = wi[--xi], wi[xi] = null, wi[--xi], wi[xi] = null, wi[--xi], wi[xi] = null;
    }
    var os = !1, Aa = null;
    function bd(e, n, l) {
      return !1;
    }
    function Sd(e, n, l) {
      throw new Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qu(e) {
      throw new Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Do(e) {
      throw new Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Po(e) {
      return !1;
    }
    function us() {
      Aa !== null && (Ny(Aa), Aa = null);
    }
    function Ku() {
      return os;
    }
    function ls(e) {
      Aa === null ? Aa = [e] : Aa.push(e);
    }
    var ss = c.ReactCurrentBatchConfig, Ed = null;
    function Gu() {
      return ss.transition;
    }
    function Da(e, n) {
      if (cr(e, n))
        return !0;
      if (typeof e != "object" || e === null || typeof n != "object" || n === null)
        return !1;
      var l = Object.keys(e), f = Object.keys(n);
      if (l.length !== f.length)
        return !1;
      for (var h = 0; h < l.length; h++) {
        var g = l[h];
        if (!Uu.call(n, g) || !cr(e[g], n[g]))
          return !1;
      }
      return !0;
    }
    function Td(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ce:
          return Sr(e.type);
        case V:
          return Sr("Lazy");
        case me:
          return Sr("Suspense");
        case be:
          return Sr("SuspenseList");
        case K:
        case Te:
        case D:
          return Lr(e.type);
        case Pe:
          return Lr(e.type.render);
        case se:
          return Lu(e.type);
        default:
          return "";
      }
    }
    function Wu(e) {
      try {
        var n = "", l = e;
        do
          n += Td(l), l = l.return;
        while (l);
        return n;
      } catch (f) {
        return `
Error generating stack: ` + f.message + `
` + f.stack;
      }
    }
    var Ju = c.ReactDebugCurrentFrame, Un = null, jo = !1;
    function Xu() {
      {
        if (Un === null)
          return null;
        var e = Un._debugOwner;
        if (e !== null && typeof e < "u")
          return Ce(e);
      }
      return null;
    }
    function i() {
      return Un === null ? "" : Wu(Un);
    }
    function o() {
      Ju.getCurrentStack = null, Un = null, jo = !1;
    }
    function p(e) {
      Ju.getCurrentStack = e === null ? null : i, Un = e, jo = !1;
    }
    function v() {
      return Un;
    }
    function S(e) {
      jo = e;
    }
    var w = {
      recordUnsafeLifecycleWarnings: function(e, n) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, n) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var M = function(e) {
        for (var n = null, l = e; l !== null; )
          l.mode & Or && (n = l), l = l.return;
        return n;
      }, F = function(e) {
        var n = [];
        return e.forEach(function(l) {
          n.push(l);
        }), n.sort().join(", ");
      }, ue = [], ke = [], He = [], _t = [], lt = [], Kt = [], $t = /* @__PURE__ */ new Set();
      w.recordUnsafeLifecycleWarnings = function(e, n) {
        $t.has(e.type) || (typeof n.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        n.componentWillMount.__suppressDeprecationWarning !== !0 && ue.push(e), e.mode & Or && typeof n.UNSAFE_componentWillMount == "function" && ke.push(e), typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && He.push(e), e.mode & Or && typeof n.UNSAFE_componentWillReceiveProps == "function" && _t.push(e), typeof n.componentWillUpdate == "function" && n.componentWillUpdate.__suppressDeprecationWarning !== !0 && lt.push(e), e.mode & Or && typeof n.UNSAFE_componentWillUpdate == "function" && Kt.push(e));
      }, w.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        ue.length > 0 && (ue.forEach(function(Ee) {
          e.add(Ce(Ee) || "Component"), $t.add(Ee.type);
        }), ue = []);
        var n = /* @__PURE__ */ new Set();
        ke.length > 0 && (ke.forEach(function(Ee) {
          n.add(Ce(Ee) || "Component"), $t.add(Ee.type);
        }), ke = []);
        var l = /* @__PURE__ */ new Set();
        He.length > 0 && (He.forEach(function(Ee) {
          l.add(Ce(Ee) || "Component"), $t.add(Ee.type);
        }), He = []);
        var f = /* @__PURE__ */ new Set();
        _t.length > 0 && (_t.forEach(function(Ee) {
          f.add(Ce(Ee) || "Component"), $t.add(Ee.type);
        }), _t = []);
        var h = /* @__PURE__ */ new Set();
        lt.length > 0 && (lt.forEach(function(Ee) {
          h.add(Ce(Ee) || "Component"), $t.add(Ee.type);
        }), lt = []);
        var g = /* @__PURE__ */ new Set();
        if (Kt.length > 0 && (Kt.forEach(function(Ee) {
          g.add(Ce(Ee) || "Component"), $t.add(Ee.type);
        }), Kt = []), n.size > 0) {
          var T = F(n);
          s(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, T);
        }
        if (f.size > 0) {
          var _ = F(f);
          s(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, _);
        }
        if (g.size > 0) {
          var O = F(g);
          s(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, O);
        }
        if (e.size > 0) {
          var L = F(e);
          u(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
        if (l.size > 0) {
          var I = F(l);
          u(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, I);
        }
        if (h.size > 0) {
          var ne = F(h);
          u(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, ne);
        }
      };
      var fn = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Set();
      w.recordLegacyContextWarning = function(e, n) {
        var l = M(e);
        if (l === null) {
          s("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!_i.has(e.type)) {
          var f = fn.get(l);
          (e.type.contextTypes != null || e.type.childContextTypes != null || n !== null && typeof n.getChildContext == "function") && (f === void 0 && (f = [], fn.set(l, f)), f.push(e));
        }
      }, w.flushLegacyContextWarning = function() {
        fn.forEach(function(e, n) {
          if (e.length !== 0) {
            var l = e[0], f = /* @__PURE__ */ new Set();
            e.forEach(function(g) {
              f.add(Ce(g) || "Component"), _i.add(g.type);
            });
            var h = F(f);
            try {
              p(l), s(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, h);
            } finally {
              o();
            }
          }
        });
      }, w.discardPendingWarnings = function() {
        ue = [], ke = [], He = [], _t = [], lt = [], Kt = [], fn = /* @__PURE__ */ new Map();
      };
    }
    function X(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, l = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function H(e) {
      try {
        return te(e), !1;
      } catch {
        return !0;
      }
    }
    function te(e) {
      return "" + e;
    }
    function qe(e, n) {
      if (H(e))
        return s("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", n, X(e)), te(e);
    }
    function Je(e, n) {
      if (e && e.defaultProps) {
        var l = b({}, n), f = e.defaultProps;
        for (var h in f)
          l[h] === void 0 && (l[h] = f[h]);
        return l;
      }
      return n;
    }
    var vt = Br(null), st;
    st = {};
    var kt = null, an = null, Ct = null, Mr = !1;
    function cs() {
      kt = null, an = null, Ct = null, Mr = !1;
    }
    function Km() {
      Mr = !0;
    }
    function Gm() {
      Mr = !1;
    }
    function Wm(e, n, l) {
      Fn(vt, n._currentValue2, e), n._currentValue2 = l, n._currentRenderer2 !== void 0 && n._currentRenderer2 !== null && n._currentRenderer2 !== st && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer2 = st;
    }
    function wd(e, n) {
      var l = vt.current;
      Cn(vt, n), e._currentValue2 = l;
    }
    function xd(e, n, l) {
      for (var f = e; f !== null; ) {
        var h = f.alternate;
        if (Gi(f.childLanes, n) ? h !== null && !Gi(h.childLanes, n) && (h.childLanes = bt(h.childLanes, n)) : (f.childLanes = bt(f.childLanes, n), h !== null && (h.childLanes = bt(h.childLanes, n))), f === l)
          break;
        f = f.return;
      }
      f !== l && s("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function V1(e, n, l) {
      H1(e, n, l);
    }
    function H1(e, n, l) {
      var f = e.child;
      for (f !== null && (f.return = e); f !== null; ) {
        var h = void 0, g = f.dependencies;
        if (g !== null) {
          h = f.child;
          for (var T = g.firstContext; T !== null; ) {
            if (T.context === n) {
              if (f.tag === se) {
                var _ = xn(l), O = Pa(Qt, _);
                O.tag = Rc;
                var L = f.updateQueue;
                if (L !== null) {
                  var I = L.shared, ne = I.pending;
                  ne === null ? O.next = O : (O.next = ne.next, ne.next = O), I.pending = O;
                }
              }
              f.lanes = bt(f.lanes, l);
              var Ee = f.alternate;
              Ee !== null && (Ee.lanes = bt(Ee.lanes, l)), xd(f.return, l, e), g.lanes = bt(g.lanes, l);
              break;
            }
            T = T.next;
          }
        } else if (f.tag === et)
          h = f.type === e.type ? null : f.child;
        else if (f.tag === oe) {
          var $e = f.return;
          if ($e === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          $e.lanes = bt($e.lanes, l);
          var Re = $e.alternate;
          Re !== null && (Re.lanes = bt(Re.lanes, l)), xd($e, l, e), h = f.sibling;
        } else
          h = f.child;
        if (h !== null)
          h.return = f;
        else
          for (h = f; h !== null; ) {
            if (h === e) {
              h = null;
              break;
            }
            var Ue = h.sibling;
            if (Ue !== null) {
              Ue.return = h.return, h = Ue;
              break;
            }
            h = h.return;
          }
        f = h;
      }
    }
    function Zu(e, n) {
      kt = e, an = null, Ct = null;
      var l = e.dependencies;
      if (l !== null) {
        var f = l.firstContext;
        f !== null && (Jn(l.lanes, n) && Ts(), l.firstContext = null);
      }
    }
    function Rn(e) {
      Mr && s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var n = e._currentValue2;
      if (Ct !== e) {
        var l = {
          context: e,
          memoizedValue: n,
          next: null
        };
        if (an === null) {
          if (kt === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          an = l, kt.dependencies = {
            lanes: we,
            firstContext: l
          };
        } else
          an = an.next = l;
      }
      return n;
    }
    var ko = null;
    function _d(e) {
      ko === null ? ko = [e] : ko.push(e);
    }
    function Y1() {
      if (ko !== null) {
        for (var e = 0; e < ko.length; e++) {
          var n = ko[e], l = n.interleaved;
          if (l !== null) {
            n.interleaved = null;
            var f = l.next, h = n.pending;
            if (h !== null) {
              var g = h.next;
              h.next = f, l.next = g;
            }
            n.pending = l;
          }
        }
        ko = null;
      }
    }
    function Jm(e, n, l, f) {
      var h = n.interleaved;
      return h === null ? (l.next = l, _d(n)) : (l.next = h.next, h.next = l), n.interleaved = l, Cc(e, f);
    }
    function Q1(e, n, l, f) {
      var h = n.interleaved;
      h === null ? (l.next = l, _d(n)) : (l.next = h.next, h.next = l), n.interleaved = l;
    }
    function K1(e, n, l, f) {
      var h = n.interleaved;
      return h === null ? (l.next = l, _d(n)) : (l.next = h.next, h.next = l), n.interleaved = l, Cc(e, f);
    }
    function oi(e, n) {
      return Cc(e, n);
    }
    var G1 = Cc;
    function Cc(e, n) {
      e.lanes = bt(e.lanes, n);
      var l = e.alternate;
      l !== null && (l.lanes = bt(l.lanes, n)), l === null && (e.flags & (N | jn)) !== xe && Fy(e);
      for (var f = e, h = e.return; h !== null; )
        h.childLanes = bt(h.childLanes, n), l = h.alternate, l !== null ? l.childLanes = bt(l.childLanes, n) : (h.flags & (N | jn)) !== xe && Fy(e), f = h, h = h.return;
      if (f.tag === ve) {
        var g = f.stateNode;
        return g;
      } else
        return null;
    }
    var Xm = 0, Zm = 1, Rc = 2, Cd = 3, Oc = !1, Rd, Nc;
    Rd = !1, Nc = null;
    function Od(e) {
      var n = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: we
        },
        effects: null
      };
      e.updateQueue = n;
    }
    function ev(e, n) {
      var l = n.updateQueue, f = e.updateQueue;
      if (l === f) {
        var h = {
          baseState: f.baseState,
          firstBaseUpdate: f.firstBaseUpdate,
          lastBaseUpdate: f.lastBaseUpdate,
          shared: f.shared,
          effects: f.effects
        };
        n.updateQueue = h;
      }
    }
    function Pa(e, n) {
      var l = {
        eventTime: e,
        lane: n,
        tag: Xm,
        payload: null,
        callback: null,
        next: null
      };
      return l;
    }
    function zo(e, n, l) {
      var f = e.updateQueue;
      if (f === null)
        return null;
      var h = f.shared;
      if (Nc === h && !Rd && (s("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Rd = !0), Ww()) {
        var g = h.pending;
        return g === null ? n.next = n : (n.next = g.next, g.next = n), h.pending = n, G1(e, l);
      } else
        return K1(e, h, n, l);
    }
    function Mc(e, n, l) {
      var f = n.updateQueue;
      if (f !== null) {
        var h = f.shared;
        if (Il(l)) {
          var g = h.lanes;
          g = Ou(g, e.pendingLanes);
          var T = bt(g, l);
          h.lanes = T, Mu(e, T);
        }
      }
    }
    function Nd(e, n) {
      var l = e.updateQueue, f = e.alternate;
      if (f !== null) {
        var h = f.updateQueue;
        if (l === h) {
          var g = null, T = null, _ = l.firstBaseUpdate;
          if (_ !== null) {
            var O = _;
            do {
              var L = {
                eventTime: O.eventTime,
                lane: O.lane,
                tag: O.tag,
                payload: O.payload,
                callback: O.callback,
                next: null
              };
              T === null ? g = T = L : (T.next = L, T = L), O = O.next;
            } while (O !== null);
            T === null ? g = T = n : (T.next = n, T = n);
          } else
            g = T = n;
          l = {
            baseState: h.baseState,
            firstBaseUpdate: g,
            lastBaseUpdate: T,
            shared: h.shared,
            effects: h.effects
          }, e.updateQueue = l;
          return;
        }
      }
      var I = l.lastBaseUpdate;
      I === null ? l.firstBaseUpdate = n : I.next = n, l.lastBaseUpdate = n;
    }
    function W1(e, n, l, f, h, g) {
      switch (l.tag) {
        case Zm: {
          var T = l.payload;
          if (typeof T == "function") {
            Km();
            var _ = T.call(g, f, h);
            return Gm(), _;
          }
          return T;
        }
        case Cd:
          e.flags = e.flags & ~Sn | Ie;
        case Xm: {
          var O = l.payload, L;
          return typeof O == "function" ? (Km(), L = O.call(g, f, h), Gm()) : L = O, L == null ? f : b({}, f, L);
        }
        case Rc:
          return Oc = !0, f;
      }
      return f;
    }
    function $c(e, n, l, f) {
      var h = e.updateQueue;
      Oc = !1, Nc = h.shared;
      var g = h.firstBaseUpdate, T = h.lastBaseUpdate, _ = h.shared.pending;
      if (_ !== null) {
        h.shared.pending = null;
        var O = _, L = O.next;
        O.next = null, T === null ? g = L : T.next = L, T = O;
        var I = e.alternate;
        if (I !== null) {
          var ne = I.updateQueue, Ee = ne.lastBaseUpdate;
          Ee !== T && (Ee === null ? ne.firstBaseUpdate = L : Ee.next = L, ne.lastBaseUpdate = O);
        }
      }
      if (g !== null) {
        var $e = h.baseState, Re = we, Ue = null, at = null, Tt = null, dt = g;
        do {
          var pn = dt.lane, sn = dt.eventTime;
          if (Gi(f, pn)) {
            if (Tt !== null) {
              var pe = {
                eventTime: sn,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: nn,
                tag: dt.tag,
                payload: dt.payload,
                callback: dt.callback,
                next: null
              };
              Tt = Tt.next = pe;
            }
            $e = W1(e, h, dt, $e, n, l);
            var Y = dt.callback;
            if (Y !== null && // If the update was already committed, we should not queue its
            // callback again.
            dt.lane !== nn) {
              e.flags |= We;
              var ze = h.effects;
              ze === null ? h.effects = [dt] : ze.push(dt);
            }
          } else {
            var W = {
              eventTime: sn,
              lane: pn,
              tag: dt.tag,
              payload: dt.payload,
              callback: dt.callback,
              next: null
            };
            Tt === null ? (at = Tt = W, Ue = $e) : Tt = Tt.next = W, Re = bt(Re, pn);
          }
          if (dt = dt.next, dt === null) {
            if (_ = h.shared.pending, _ === null)
              break;
            var it = _, Le = it.next;
            it.next = null, dt = Le, h.lastBaseUpdate = it, h.shared.pending = null;
          }
        } while (!0);
        Tt === null && (Ue = $e), h.baseState = Ue, h.firstBaseUpdate = at, h.lastBaseUpdate = Tt;
        var wt = h.shared.interleaved;
        if (wt !== null) {
          var Rt = wt;
          do
            Re = bt(Re, Rt.lane), Rt = Rt.next;
          while (Rt !== wt);
        } else
          g === null && (h.shared.lanes = we);
        js(Re), e.lanes = Re, e.memoizedState = $e;
      }
      Nc = null;
    }
    function J1(e, n) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(n);
    }
    function tv() {
      Oc = !1;
    }
    function Ac() {
      return Oc;
    }
    function nv(e, n, l) {
      var f = n.effects;
      if (n.effects = null, f !== null)
        for (var h = 0; h < f.length; h++) {
          var g = f[h], T = g.callback;
          T !== null && (g.callback = null, J1(T, l));
        }
    }
    var Md = {}, rv = new t.Component().refs, $d, Ad, Dd, Pd, jd, iv, Dc, kd, zd, Ld;
    {
      $d = /* @__PURE__ */ new Set(), Ad = /* @__PURE__ */ new Set(), Dd = /* @__PURE__ */ new Set(), Pd = /* @__PURE__ */ new Set(), kd = /* @__PURE__ */ new Set(), jd = /* @__PURE__ */ new Set(), zd = /* @__PURE__ */ new Set(), Ld = /* @__PURE__ */ new Set();
      var av = /* @__PURE__ */ new Set();
      Dc = function(e, n) {
        if (!(e === null || typeof e == "function")) {
          var l = n + "_" + e;
          av.has(l) || (av.add(l), s("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", n, e));
        }
      }, iv = function(e, n) {
        if (n === void 0) {
          var l = Me(e) || "Component";
          jd.has(l) || (jd.add(l), s("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", l));
        }
      }, Object.defineProperty(Md, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Md);
    }
    function Fd(e, n, l, f) {
      var h = e.memoizedState, g = l(f, h);
      iv(n, g);
      var T = g == null ? h : b({}, h, g);
      if (e.memoizedState = T, e.lanes === we) {
        var _ = e.updateQueue;
        _.baseState = T;
      }
    }
    var Ud = {
      isMounted: Rr,
      enqueueSetState: function(e, n, l) {
        var f = x(e), h = fi(), g = sl(f), T = Pa(h, g);
        T.payload = n, l != null && (Dc(l, "setState"), T.callback = l);
        var _ = zo(f, T, g);
        _ !== null && (tr(_, f, g, h), Mc(_, f, g));
      },
      enqueueReplaceState: function(e, n, l) {
        var f = x(e), h = fi(), g = sl(f), T = Pa(h, g);
        T.tag = Zm, T.payload = n, l != null && (Dc(l, "replaceState"), T.callback = l);
        var _ = zo(f, T, g);
        _ !== null && (tr(_, f, g, h), Mc(_, f, g));
      },
      enqueueForceUpdate: function(e, n) {
        var l = x(e), f = fi(), h = sl(l), g = Pa(f, h);
        g.tag = Rc, n != null && (Dc(n, "forceUpdate"), g.callback = n);
        var T = zo(l, g, h);
        T !== null && (tr(T, l, h, f), Mc(T, l, h));
      }
    };
    function ov(e, n, l, f, h, g, T) {
      var _ = e.stateNode;
      if (typeof _.shouldComponentUpdate == "function") {
        var O = _.shouldComponentUpdate(f, g, T);
        return O === void 0 && s("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Me(n) || "Component"), O;
      }
      return n.prototype && n.prototype.isPureReactComponent ? !Da(l, f) || !Da(h, g) : !0;
    }
    function X1(e, n, l) {
      var f = e.stateNode;
      {
        var h = Me(n) || "Component", g = f.render;
        g || (n.prototype && typeof n.prototype.render == "function" ? s("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", h) : s("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", h)), f.getInitialState && !f.getInitialState.isReactClassApproved && !f.state && s("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", h), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && s("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", h), f.propTypes && s("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", h), f.contextType && s("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", h), f.contextTypes && s("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", h), n.contextType && n.contextTypes && !zd.has(n) && (zd.add(n), s("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", h)), typeof f.componentShouldUpdate == "function" && s("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", h), n.prototype && n.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && s("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Me(n) || "A pure component"), typeof f.componentDidUnmount == "function" && s("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", h), typeof f.componentDidReceiveProps == "function" && s("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", h), typeof f.componentWillRecieveProps == "function" && s("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", h), typeof f.UNSAFE_componentWillRecieveProps == "function" && s("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", h);
        var T = f.props !== l;
        f.props !== void 0 && T && s("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", h, h), f.defaultProps && s("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", h, h), typeof f.getSnapshotBeforeUpdate == "function" && typeof f.componentDidUpdate != "function" && !Dd.has(n) && (Dd.add(n), s("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Me(n))), typeof f.getDerivedStateFromProps == "function" && s("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", h), typeof f.getDerivedStateFromError == "function" && s("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", h), typeof n.getSnapshotBeforeUpdate == "function" && s("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", h);
        var _ = f.state;
        _ && (typeof _ != "object" || $n(_)) && s("%s.state: must be set to an object or null", h), typeof f.getChildContext == "function" && typeof n.childContextTypes != "object" && s("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", h);
      }
    }
    function uv(e, n) {
      n.updater = Ud, e.stateNode = n, R(n, e), n._reactInternalInstance = Md;
    }
    function lv(e, n, l) {
      var f = !1, h = Zn, g = Zn, T = n.contextType;
      if ("contextType" in n) {
        var _ = (
          // Allow null for conditional declaration
          T === null || T !== void 0 && T.$$typeof === ct && T._context === void 0
        );
        if (!_ && !Ld.has(n)) {
          Ld.add(n);
          var O = "";
          T === void 0 ? O = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof T != "object" ? O = " However, it is set to a " + typeof T + "." : T.$$typeof === gt ? O = " Did you accidentally pass the Context.Provider instead?" : T._context !== void 0 ? O = " Did you accidentally pass the Context.Consumer instead?" : O = " However, it is set to an object with keys {" + Object.keys(T).join(", ") + "}.", s("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Me(n) || "Component", O);
        }
      }
      if (typeof T == "object" && T !== null)
        g = Rn(T);
      else {
        h = na(e, n, !0);
        var L = n.contextTypes;
        f = L != null, g = f ? Si(e, h) : Zn;
      }
      var I = new n(l, g), ne = e.memoizedState = I.state !== null && I.state !== void 0 ? I.state : null;
      uv(e, I);
      {
        if (typeof n.getDerivedStateFromProps == "function" && ne === null) {
          var Ee = Me(n) || "Component";
          Ad.has(Ee) || (Ad.add(Ee), s("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Ee, I.state === null ? "null" : "undefined", Ee));
        }
        if (typeof n.getDerivedStateFromProps == "function" || typeof I.getSnapshotBeforeUpdate == "function") {
          var $e = null, Re = null, Ue = null;
          if (typeof I.componentWillMount == "function" && I.componentWillMount.__suppressDeprecationWarning !== !0 ? $e = "componentWillMount" : typeof I.UNSAFE_componentWillMount == "function" && ($e = "UNSAFE_componentWillMount"), typeof I.componentWillReceiveProps == "function" && I.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Re = "componentWillReceiveProps" : typeof I.UNSAFE_componentWillReceiveProps == "function" && (Re = "UNSAFE_componentWillReceiveProps"), typeof I.componentWillUpdate == "function" && I.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Ue = "componentWillUpdate" : typeof I.UNSAFE_componentWillUpdate == "function" && (Ue = "UNSAFE_componentWillUpdate"), $e !== null || Re !== null || Ue !== null) {
            var at = Me(n) || "Component", Tt = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Pd.has(at) || (Pd.add(at), s(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, at, Tt, $e !== null ? `
  ` + $e : "", Re !== null ? `
  ` + Re : "", Ue !== null ? `
  ` + Ue : ""));
          }
        }
      }
      return f && ns(e, h, g), I;
    }
    function Z1(e, n) {
      var l = n.state;
      typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && (s("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ce(e) || "Component"), Ud.enqueueReplaceState(n, n.state, null));
    }
    function sv(e, n, l, f) {
      var h = n.state;
      if (typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(l, f), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(l, f), n.state !== h) {
        {
          var g = Ce(e) || "Component";
          $d.has(g) || ($d.add(g), s("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", g));
        }
        Ud.enqueueReplaceState(n, n.state, null);
      }
    }
    function Bd(e, n, l, f) {
      X1(e, n, l);
      var h = e.stateNode;
      h.props = l, h.state = e.memoizedState, h.refs = rv, Od(e);
      var g = n.contextType;
      if (typeof g == "object" && g !== null)
        h.context = Rn(g);
      else {
        var T = na(e, n, !0);
        h.context = Si(e, T);
      }
      {
        if (h.state === l) {
          var _ = Me(n) || "Component";
          kd.has(_) || (kd.add(_), s("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", _));
        }
        e.mode & Or && w.recordLegacyContextWarning(e, h), w.recordUnsafeLifecycleWarnings(e, h);
      }
      h.state = e.memoizedState;
      var O = n.getDerivedStateFromProps;
      if (typeof O == "function" && (Fd(e, n, O, l), h.state = e.memoizedState), typeof n.getDerivedStateFromProps != "function" && typeof h.getSnapshotBeforeUpdate != "function" && (typeof h.UNSAFE_componentWillMount == "function" || typeof h.componentWillMount == "function") && (Z1(e, h), $c(e, l, h, f), h.state = e.memoizedState), typeof h.componentDidMount == "function") {
        var L = k;
        e.flags |= L;
      }
    }
    function eT(e, n, l, f) {
      var h = e.stateNode, g = e.memoizedProps;
      h.props = g;
      var T = h.context, _ = n.contextType, O = Zn;
      if (typeof _ == "object" && _ !== null)
        O = Rn(_);
      else {
        var L = na(e, n, !0);
        O = Si(e, L);
      }
      var I = n.getDerivedStateFromProps, ne = typeof I == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      !ne && (typeof h.UNSAFE_componentWillReceiveProps == "function" || typeof h.componentWillReceiveProps == "function") && (g !== l || T !== O) && sv(e, h, l, O), tv();
      var Ee = e.memoizedState, $e = h.state = Ee;
      if ($c(e, l, h, f), $e = e.memoizedState, g === l && Ee === $e && !ra() && !Ac()) {
        if (typeof h.componentDidMount == "function") {
          var Re = k;
          e.flags |= Re;
        }
        return !1;
      }
      typeof I == "function" && (Fd(e, n, I, l), $e = e.memoizedState);
      var Ue = Ac() || ov(e, n, g, l, Ee, $e, O);
      if (Ue) {
        if (!ne && (typeof h.UNSAFE_componentWillMount == "function" || typeof h.componentWillMount == "function") && (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function") {
          var at = k;
          e.flags |= at;
        }
      } else {
        if (typeof h.componentDidMount == "function") {
          var Tt = k;
          e.flags |= Tt;
        }
        e.memoizedProps = l, e.memoizedState = $e;
      }
      return h.props = l, h.state = $e, h.context = O, Ue;
    }
    function tT(e, n, l, f, h) {
      var g = n.stateNode;
      ev(e, n);
      var T = n.memoizedProps, _ = n.type === n.elementType ? T : Je(n.type, T);
      g.props = _;
      var O = n.pendingProps, L = g.context, I = l.contextType, ne = Zn;
      if (typeof I == "object" && I !== null)
        ne = Rn(I);
      else {
        var Ee = na(n, l, !0);
        ne = Si(n, Ee);
      }
      var $e = l.getDerivedStateFromProps, Re = typeof $e == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      !Re && (typeof g.UNSAFE_componentWillReceiveProps == "function" || typeof g.componentWillReceiveProps == "function") && (T !== O || L !== ne) && sv(n, g, f, ne), tv();
      var Ue = n.memoizedState, at = g.state = Ue;
      if ($c(n, f, g, h), at = n.memoizedState, T === O && Ue === at && !ra() && !Ac() && !le)
        return typeof g.componentDidUpdate == "function" && (T !== e.memoizedProps || Ue !== e.memoizedState) && (n.flags |= k), typeof g.getSnapshotBeforeUpdate == "function" && (T !== e.memoizedProps || Ue !== e.memoizedState) && (n.flags |= Nt), !1;
      typeof $e == "function" && (Fd(n, l, $e, f), at = n.memoizedState);
      var Tt = Ac() || ov(n, l, _, f, Ue, at, ne) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      le;
      return Tt ? (!Re && (typeof g.UNSAFE_componentWillUpdate == "function" || typeof g.componentWillUpdate == "function") && (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(f, at, ne), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(f, at, ne)), typeof g.componentDidUpdate == "function" && (n.flags |= k), typeof g.getSnapshotBeforeUpdate == "function" && (n.flags |= Nt)) : (typeof g.componentDidUpdate == "function" && (T !== e.memoizedProps || Ue !== e.memoizedState) && (n.flags |= k), typeof g.getSnapshotBeforeUpdate == "function" && (T !== e.memoizedProps || Ue !== e.memoizedState) && (n.flags |= Nt), n.memoizedProps = f, n.memoizedState = at), g.props = f, g.state = at, g.context = ne, Tt;
    }
    var Id, qd, Vd, Hd, Yd, cv = function(e, n) {
    };
    Id = !1, qd = !1, Vd = {}, Hd = {}, Yd = {}, cv = function(e, n) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var l = Ce(n) || "Component";
        Hd[l] || (Hd[l] = !0, s('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function fs(e, n, l) {
      var f = l.ref;
      if (f !== null && typeof f != "function" && typeof f != "object") {
        if ((e.mode & Or || A) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(l._owner && l._self && l._owner.stateNode !== l._self)) {
          var h = Ce(e) || "Component";
          Vd[h] || (s('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', f), Vd[h] = !0);
        }
        if (l._owner) {
          var g = l._owner, T;
          if (g) {
            var _ = g;
            if (_.tag !== se)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            T = _.stateNode;
          }
          if (!T)
            throw new Error("Missing owner for string ref " + f + ". This error is likely caused by a bug in React. Please file an issue.");
          var O = T;
          qe(f, "ref");
          var L = "" + f;
          if (n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === L)
            return n.ref;
          var I = function(ne) {
            var Ee = O.refs;
            Ee === rv && (Ee = O.refs = {}), ne === null ? delete Ee[L] : Ee[L] = ne;
          };
          return I._stringRef = L, I;
        } else {
          if (typeof f != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!l._owner)
            throw new Error("Element ref was specified as a string (" + f + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return f;
    }
    function Pc(e, n) {
      var l = Object.prototype.toString.call(n);
      throw new Error("Objects are not valid as a React child (found: " + (l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead.");
    }
    function jc(e) {
      {
        var n = Ce(e) || "Component";
        if (Yd[n])
          return;
        Yd[n] = !0, s("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function fv(e) {
      var n = e._payload, l = e._init;
      return l(n);
    }
    function dv(e) {
      function n(W, pe) {
        if (e) {
          var Y = W.deletions;
          Y === null ? (W.deletions = [pe], W.flags |= Oe) : Y.push(pe);
        }
      }
      function l(W, pe) {
        if (!e)
          return null;
        for (var Y = pe; Y !== null; )
          n(W, Y), Y = Y.sibling;
        return null;
      }
      function f(W, pe) {
        for (var Y = /* @__PURE__ */ new Map(), ze = pe; ze !== null; )
          ze.key !== null ? Y.set(ze.key, ze) : Y.set(ze.index, ze), ze = ze.sibling;
        return Y;
      }
      function h(W, pe) {
        var Y = Ho(W, pe);
        return Y.index = 0, Y.sibling = null, Y;
      }
      function g(W, pe, Y) {
        if (W.index = Y, !e)
          return W.flags |= Ar, pe;
        var ze = W.alternate;
        if (ze !== null) {
          var it = ze.index;
          return it < pe ? (W.flags |= N, pe) : it;
        } else
          return W.flags |= N, pe;
      }
      function T(W) {
        return e && W.alternate === null && (W.flags |= N), W;
      }
      function _(W, pe, Y, ze) {
        if (pe === null || pe.tag !== Xe) {
          var it = gh(Y, W.mode, ze);
          return it.return = W, it;
        } else {
          var Le = h(pe, Y);
          return Le.return = W, Le;
        }
      }
      function O(W, pe, Y, ze) {
        var it = Y.type;
        if (it === Ze)
          return I(W, pe, Y.props.children, ze, Y.key);
        if (pe !== null && (pe.elementType === it || // Keep this check inline so it only runs on the false path:
        qy(pe, Y) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof it == "object" && it !== null && it.$$typeof === B && fv(it) === pe.type)) {
          var Le = h(pe, Y.props);
          return Le.ref = fs(W, pe, Y), Le.return = W, Le._debugSource = Y._source, Le._debugOwner = Y._owner, Le;
        }
        var wt = yh(Y, W.mode, ze);
        return wt.ref = fs(W, pe, Y), wt.return = W, wt;
      }
      function L(W, pe, Y, ze) {
        if (pe === null || pe.tag !== Ve || pe.stateNode.containerInfo !== Y.containerInfo || pe.stateNode.implementation !== Y.implementation) {
          var it = bh(Y, W.mode, ze);
          return it.return = W, it;
        } else {
          var Le = h(pe, Y.children || []);
          return Le.return = W, Le;
        }
      }
      function I(W, pe, Y, ze, it) {
        if (pe === null || pe.tag !== ie) {
          var Le = qa(Y, W.mode, ze, it);
          return Le.return = W, Le;
        } else {
          var wt = h(pe, Y);
          return wt.return = W, wt;
        }
      }
      function ne(W, pe, Y) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var ze = gh("" + pe, W.mode, Y);
          return ze.return = W, ze;
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case ot: {
              var it = yh(pe, W.mode, Y);
              return it.ref = fs(W, null, pe), it.return = W, it;
            }
            case nt: {
              var Le = bh(pe, W.mode, Y);
              return Le.return = W, Le;
            }
            case B: {
              var wt = pe._payload, Rt = pe._init;
              return ne(W, Rt(wt), Y);
            }
          }
          if ($n(pe) || Fe(pe)) {
            var cn = qa(pe, W.mode, Y, null);
            return cn.return = W, cn;
          }
          Pc(W, pe);
        }
        return typeof pe == "function" && jc(W), null;
      }
      function Ee(W, pe, Y, ze) {
        var it = pe !== null ? pe.key : null;
        if (typeof Y == "string" && Y !== "" || typeof Y == "number")
          return it !== null ? null : _(W, pe, "" + Y, ze);
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case ot:
              return Y.key === it ? O(W, pe, Y, ze) : null;
            case nt:
              return Y.key === it ? L(W, pe, Y, ze) : null;
            case B: {
              var Le = Y._payload, wt = Y._init;
              return Ee(W, pe, wt(Le), ze);
            }
          }
          if ($n(Y) || Fe(Y))
            return it !== null ? null : I(W, pe, Y, ze, null);
          Pc(W, Y);
        }
        return typeof Y == "function" && jc(W), null;
      }
      function $e(W, pe, Y, ze, it) {
        if (typeof ze == "string" && ze !== "" || typeof ze == "number") {
          var Le = W.get(Y) || null;
          return _(pe, Le, "" + ze, it);
        }
        if (typeof ze == "object" && ze !== null) {
          switch (ze.$$typeof) {
            case ot: {
              var wt = W.get(ze.key === null ? Y : ze.key) || null;
              return O(pe, wt, ze, it);
            }
            case nt: {
              var Rt = W.get(ze.key === null ? Y : ze.key) || null;
              return L(pe, Rt, ze, it);
            }
            case B:
              var cn = ze._payload, Ut = ze._init;
              return $e(W, pe, Y, Ut(cn), it);
          }
          if ($n(ze) || Fe(ze)) {
            var gn = W.get(Y) || null;
            return I(pe, gn, ze, it, null);
          }
          Pc(pe, ze);
        }
        return typeof ze == "function" && jc(pe), null;
      }
      function Re(W, pe, Y) {
        {
          if (typeof W != "object" || W === null)
            return pe;
          switch (W.$$typeof) {
            case ot:
            case nt:
              cv(W, Y);
              var ze = W.key;
              if (typeof ze != "string")
                break;
              if (pe === null) {
                pe = /* @__PURE__ */ new Set(), pe.add(ze);
                break;
              }
              if (!pe.has(ze)) {
                pe.add(ze);
                break;
              }
              s("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ze);
              break;
            case B:
              var it = W._payload, Le = W._init;
              Re(Le(it), pe, Y);
              break;
          }
        }
        return pe;
      }
      function Ue(W, pe, Y, ze) {
        for (var it = null, Le = 0; Le < Y.length; Le++) {
          var wt = Y[Le];
          it = Re(wt, it, W);
        }
        for (var Rt = null, cn = null, Ut = pe, gn = 0, Gt = 0, bn = null; Ut !== null && Gt < Y.length; Gt++) {
          Ut.index > Gt ? (bn = Ut, Ut = null) : bn = Ut.sibling;
          var nr = Ee(W, Ut, Y[Gt], ze);
          if (nr === null) {
            Ut === null && (Ut = bn);
            break;
          }
          e && Ut && nr.alternate === null && n(W, Ut), gn = g(nr, gn, Gt), cn === null ? Rt = nr : cn.sibling = nr, cn = nr, Ut = bn;
        }
        if (Gt === Y.length)
          return l(W, Ut), Rt;
        if (Ut === null) {
          for (; Gt < Y.length; Gt++) {
            var Bn = ne(W, Y[Gt], ze);
            Bn !== null && (gn = g(Bn, gn, Gt), cn === null ? Rt = Bn : cn.sibling = Bn, cn = Bn);
          }
          return Rt;
        }
        for (var $r = f(W, Ut); Gt < Y.length; Gt++) {
          var on = $e($r, W, Gt, Y[Gt], ze);
          on !== null && (e && on.alternate !== null && $r.delete(on.key === null ? Gt : on.key), gn = g(on, gn, Gt), cn === null ? Rt = on : cn.sibling = on, cn = on);
        }
        return e && $r.forEach(function(ji) {
          return n(W, ji);
        }), Rt;
      }
      function at(W, pe, Y, ze) {
        var it = Fe(Y);
        if (typeof it != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Y[Symbol.toStringTag] === "Generator" && (qd || s("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), qd = !0), Y.entries === it && (Id || s("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Id = !0);
          var Le = it.call(Y);
          if (Le)
            for (var wt = null, Rt = Le.next(); !Rt.done; Rt = Le.next()) {
              var cn = Rt.value;
              wt = Re(cn, wt, W);
            }
        }
        var Ut = it.call(Y);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var gn = null, Gt = null, bn = pe, nr = 0, Bn = 0, $r = null, on = Ut.next(); bn !== null && !on.done; Bn++, on = Ut.next()) {
          bn.index > Bn ? ($r = bn, bn = null) : $r = bn.sibling;
          var ji = Ee(W, bn, on.value, ze);
          if (ji === null) {
            bn === null && (bn = $r);
            break;
          }
          e && bn && ji.alternate === null && n(W, bn), nr = g(ji, nr, Bn), Gt === null ? gn = ji : Gt.sibling = ji, Gt = ji, bn = $r;
        }
        if (on.done)
          return l(W, bn), gn;
        if (bn === null) {
          for (; !on.done; Bn++, on = Ut.next()) {
            var Va = ne(W, on.value, ze);
            Va !== null && (nr = g(Va, nr, Bn), Gt === null ? gn = Va : Gt.sibling = Va, Gt = Va);
          }
          return gn;
        }
        for (var Ls = f(W, bn); !on.done; Bn++, on = Ut.next()) {
          var ki = $e(Ls, W, Bn, on.value, ze);
          ki !== null && (e && ki.alternate !== null && Ls.delete(ki.key === null ? Bn : ki.key), nr = g(ki, nr, Bn), Gt === null ? gn = ki : Gt.sibling = ki, Gt = ki);
        }
        return e && Ls.forEach(function(Z0) {
          return n(W, Z0);
        }), gn;
      }
      function Tt(W, pe, Y, ze) {
        if (pe !== null && pe.tag === Xe) {
          l(W, pe.sibling);
          var it = h(pe, Y);
          return it.return = W, it;
        }
        l(W, pe);
        var Le = gh(Y, W.mode, ze);
        return Le.return = W, Le;
      }
      function dt(W, pe, Y, ze) {
        for (var it = Y.key, Le = pe; Le !== null; ) {
          if (Le.key === it) {
            var wt = Y.type;
            if (wt === Ze) {
              if (Le.tag === ie) {
                l(W, Le.sibling);
                var Rt = h(Le, Y.props.children);
                return Rt.return = W, Rt._debugSource = Y._source, Rt._debugOwner = Y._owner, Rt;
              }
            } else if (Le.elementType === wt || // Keep this check inline so it only runs on the false path:
            qy(Le, Y) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof wt == "object" && wt !== null && wt.$$typeof === B && fv(wt) === Le.type) {
              l(W, Le.sibling);
              var cn = h(Le, Y.props);
              return cn.ref = fs(W, Le, Y), cn.return = W, cn._debugSource = Y._source, cn._debugOwner = Y._owner, cn;
            }
            l(W, Le);
            break;
          } else
            n(W, Le);
          Le = Le.sibling;
        }
        if (Y.type === Ze) {
          var Ut = qa(Y.props.children, W.mode, ze, Y.key);
          return Ut.return = W, Ut;
        } else {
          var gn = yh(Y, W.mode, ze);
          return gn.ref = fs(W, pe, Y), gn.return = W, gn;
        }
      }
      function pn(W, pe, Y, ze) {
        for (var it = Y.key, Le = pe; Le !== null; ) {
          if (Le.key === it)
            if (Le.tag === Ve && Le.stateNode.containerInfo === Y.containerInfo && Le.stateNode.implementation === Y.implementation) {
              l(W, Le.sibling);
              var wt = h(Le, Y.children || []);
              return wt.return = W, wt;
            } else {
              l(W, Le);
              break;
            }
          else
            n(W, Le);
          Le = Le.sibling;
        }
        var Rt = bh(Y, W.mode, ze);
        return Rt.return = W, Rt;
      }
      function sn(W, pe, Y, ze) {
        var it = typeof Y == "object" && Y !== null && Y.type === Ze && Y.key === null;
        if (it && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case ot:
              return T(dt(W, pe, Y, ze));
            case nt:
              return T(pn(W, pe, Y, ze));
            case B:
              var Le = Y._payload, wt = Y._init;
              return sn(W, pe, wt(Le), ze);
          }
          if ($n(Y))
            return Ue(W, pe, Y, ze);
          if (Fe(Y))
            return at(W, pe, Y, ze);
          Pc(W, Y);
        }
        return typeof Y == "string" && Y !== "" || typeof Y == "number" ? T(Tt(W, pe, "" + Y, ze)) : (typeof Y == "function" && jc(W), l(W, pe));
      }
      return sn;
    }
    var el = dv(!0), nT = dv(!1);
    function rT(e, n) {
      if (e !== null && n.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (n.child !== null) {
        var l = n.child, f = Ho(l, l.pendingProps);
        for (n.child = f, f.return = n; l.sibling !== null; )
          l = l.sibling, f = f.sibling = Ho(l, l.pendingProps), f.return = n;
        f.sibling = null;
      }
    }
    function iT(e, n) {
      for (var l = e.child; l !== null; )
        $0(l, n), l = l.sibling;
    }
    var ds = {}, ja = Br(ds), ps = Br(ds), kc = Br(ds);
    function zc(e) {
      if (e === ds)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function pv() {
      var e = zc(kc.current);
      return e;
    }
    function Qd(e, n) {
      Fn(kc, n, e), Fn(ps, e, e), Fn(ja, ds, e);
      var l = qn();
      Cn(ja, e), Fn(ja, l, e);
    }
    function tl(e) {
      Cn(ja, e), Cn(ps, e), Cn(kc, e);
    }
    function Kd() {
      var e = zc(ja.current);
      return e;
    }
    function hv(e) {
      zc(kc.current);
      var n = zc(ja.current), l = Xi(n, e.type);
      n !== l && (Fn(ps, e, e), Fn(ja, l, e));
    }
    function Gd(e) {
      ps.current === e && (Cn(ja, e), Cn(ps, e));
    }
    var aT = 0, mv = 1, vv = 1, hs = 2, ui = Br(aT);
    function Wd(e, n) {
      return (e & n) !== 0;
    }
    function nl(e) {
      return e & mv;
    }
    function Jd(e, n) {
      return e & mv | n;
    }
    function oT(e, n) {
      return e | n;
    }
    function ka(e, n) {
      Fn(ui, n, e);
    }
    function rl(e) {
      Cn(ui, e);
    }
    function uT(e, n) {
      var l = e.memoizedState;
      return l !== null ? l.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Lc(e) {
      for (var n = e; n !== null; ) {
        if (n.tag === me) {
          var l = n.memoizedState;
          if (l !== null) {
            var f = l.dehydrated;
            if (f === null || gc() || Ql())
              return n;
          }
        } else if (n.tag === be && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        n.memoizedProps.revealOrder !== void 0) {
          var h = (n.flags & Ie) !== xe;
          if (h)
            return n;
        } else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === e)
          return null;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return null;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return null;
    }
    var il = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Ci = (
      /*  */
      2
    ), Ri = (
      /*    */
      4
    ), Oi = (
      /*   */
      8
    ), Xd = [];
    function Zd() {
      for (var e = 0; e < Xd.length; e++) {
        var n = Xd[e];
        n._workInProgressVersionSecondary = null;
      }
      Xd.length = 0;
    }
    var Ye = c.ReactCurrentDispatcher, ms = c.ReactCurrentBatchConfig, ep, Fc;
    ep = /* @__PURE__ */ new Set();
    var Lo = we, Jt = null, An = null, Dn = null, Uc = !1, vs = !1, lT = 0, sT = 25, de = null, Yr = null, za = -1, tp = !1;
    function jt() {
      {
        var e = de;
        Yr === null ? Yr = [e] : Yr.push(e);
      }
    }
    function Be() {
      {
        var e = de;
        Yr !== null && (za++, Yr[za] !== e && cT(e));
      }
    }
    function al(e) {
      e != null && !$n(e) && s("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", de, typeof e);
    }
    function cT(e) {
      {
        var n = Ce(Jt);
        if (!ep.has(n) && (ep.add(n), Yr !== null)) {
          for (var l = "", f = 30, h = 0; h <= za; h++) {
            for (var g = Yr[h], T = h === za ? e : g, _ = h + 1 + ". " + g; _.length < f; )
              _ += " ";
            _ += T + `
`, l += _;
          }
          s(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, n, l);
        }
      }
    }
    function er() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function np(e, n) {
      if (tp)
        return !1;
      if (n === null)
        return s("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", de), !1;
      e.length !== n.length && s(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, de, "[" + n.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var l = 0; l < n.length && l < e.length; l++)
        if (!cr(e[l], n[l]))
          return !1;
      return !0;
    }
    function rp(e, n, l, f, h, g) {
      Lo = g, Jt = n, Yr = e !== null ? e._debugHookTypes : null, za = -1, tp = e !== null && e.type !== n.type, n.memoizedState = null, n.updateQueue = null, n.lanes = we, e !== null && e.memoizedState !== null ? Ye.current = kv : Yr !== null ? Ye.current = jv : Ye.current = Pv;
      var T = l(f, h);
      if (vs) {
        var _ = 0;
        do {
          if (vs = !1, _ >= sT)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          _ += 1, tp = !1, An = null, Dn = null, n.updateQueue = null, za = -1, Ye.current = zv, T = l(f, h);
        } while (vs);
      }
      Ye.current = ef, n._debugHookTypes = Yr;
      var O = An !== null && An.next !== null;
      if (Lo = we, Jt = null, An = null, Dn = null, de = null, Yr = null, za = -1, e !== null && (e.flags & Mn) !== (n.flags & Mn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Yt) !== At && s("Internal React error: Expected static flag was missing. Please notify the React team."), Uc = !1, O)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return T;
    }
    function yv(e, n, l) {
      n.updateQueue = e.updateQueue, n.flags &= ~(en | k), e.lanes = wo(e.lanes, l);
    }
    function fT() {
      if (Ye.current = ef, Uc) {
        for (var e = Jt.memoizedState; e !== null; ) {
          var n = e.queue;
          n !== null && (n.pending = null), e = e.next;
        }
        Uc = !1;
      }
      Lo = we, Jt = null, An = null, Dn = null, Yr = null, za = -1, de = null, Mv = !1, vs = !1;
    }
    function Ni() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Dn === null ? Jt.memoizedState = Dn = e : Dn = Dn.next = e, Dn;
    }
    function Qr() {
      var e;
      if (An === null) {
        var n = Jt.alternate;
        n !== null ? e = n.memoizedState : e = null;
      } else
        e = An.next;
      var l;
      if (Dn === null ? l = Jt.memoizedState : l = Dn.next, l !== null)
        Dn = l, l = Dn.next, An = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        An = e;
        var f = {
          memoizedState: An.memoizedState,
          baseState: An.baseState,
          baseQueue: An.baseQueue,
          queue: An.queue,
          next: null
        };
        Dn === null ? Jt.memoizedState = Dn = f : Dn = Dn.next = f;
      }
      return Dn;
    }
    function gv() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function ip(e, n) {
      return typeof n == "function" ? n(e) : n;
    }
    function ap(e, n, l) {
      var f = Ni(), h;
      l !== void 0 ? h = l(n) : h = n, f.memoizedState = f.baseState = h;
      var g = {
        pending: null,
        interleaved: null,
        lanes: we,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: h
      };
      f.queue = g;
      var T = g.dispatch = mT.bind(null, Jt, g);
      return [f.memoizedState, T];
    }
    function op(e, n, l) {
      var f = Qr(), h = f.queue;
      if (h === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      h.lastRenderedReducer = e;
      var g = An, T = g.baseQueue, _ = h.pending;
      if (_ !== null) {
        if (T !== null) {
          var O = T.next, L = _.next;
          T.next = L, _.next = O;
        }
        g.baseQueue !== T && s("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), g.baseQueue = T = _, h.pending = null;
      }
      if (T !== null) {
        var I = T.next, ne = g.baseState, Ee = null, $e = null, Re = null, Ue = I;
        do {
          var at = Ue.lane;
          if (Gi(Lo, at)) {
            if (Re !== null) {
              var dt = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: nn,
                action: Ue.action,
                hasEagerState: Ue.hasEagerState,
                eagerState: Ue.eagerState,
                next: null
              };
              Re = Re.next = dt;
            }
            if (Ue.hasEagerState)
              ne = Ue.eagerState;
            else {
              var pn = Ue.action;
              ne = e(ne, pn);
            }
          } else {
            var Tt = {
              lane: at,
              action: Ue.action,
              hasEagerState: Ue.hasEagerState,
              eagerState: Ue.eagerState,
              next: null
            };
            Re === null ? ($e = Re = Tt, Ee = ne) : Re = Re.next = Tt, Jt.lanes = bt(Jt.lanes, at), js(at);
          }
          Ue = Ue.next;
        } while (Ue !== null && Ue !== I);
        Re === null ? Ee = ne : Re.next = $e, cr(ne, f.memoizedState) || Ts(), f.memoizedState = ne, f.baseState = Ee, f.baseQueue = Re, h.lastRenderedState = ne;
      }
      var sn = h.interleaved;
      if (sn !== null) {
        var W = sn;
        do {
          var pe = W.lane;
          Jt.lanes = bt(Jt.lanes, pe), js(pe), W = W.next;
        } while (W !== sn);
      } else
        T === null && (h.lanes = we);
      var Y = h.dispatch;
      return [f.memoizedState, Y];
    }
    function up(e, n, l) {
      var f = Qr(), h = f.queue;
      if (h === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      h.lastRenderedReducer = e;
      var g = h.dispatch, T = h.pending, _ = f.memoizedState;
      if (T !== null) {
        h.pending = null;
        var O = T.next, L = O;
        do {
          var I = L.action;
          _ = e(_, I), L = L.next;
        } while (L !== O);
        cr(_, f.memoizedState) || Ts(), f.memoizedState = _, f.baseQueue === null && (f.baseState = _), h.lastRenderedState = _;
      }
      return [_, g];
    }
    function BA(e, n, l) {
    }
    function IA(e, n, l) {
    }
    function lp(e, n, l) {
      var f = Jt, h = Ni(), g;
      {
        if (g = n(), !Fc) {
          var T = n();
          cr(g, T) || (s("The result of getSnapshot should be cached to avoid an infinite loop"), Fc = !0);
        }
        var _ = Tf();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ca(_, Lo) || bv(f, n, g);
      }
      h.memoizedState = g;
      var O = {
        value: g,
        getSnapshot: n
      };
      return h.queue = O, Yc(Ev.bind(null, f, O, e), [e]), f.flags |= en, ys(fr | Oi, Sv.bind(null, f, O, g, n), void 0, null), g;
    }
    function Bc(e, n, l) {
      var f = Jt, h = Qr(), g = n();
      if (!Fc) {
        var T = n();
        cr(g, T) || (s("The result of getSnapshot should be cached to avoid an infinite loop"), Fc = !0);
      }
      var _ = h.memoizedState, O = !cr(_, g);
      O && (h.memoizedState = g, Ts());
      var L = h.queue;
      if (gs(Ev.bind(null, f, L, e), [e]), L.getSnapshot !== n || O || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Dn !== null && Dn.memoizedState.tag & fr) {
        f.flags |= en, ys(fr | Oi, Sv.bind(null, f, L, g, n), void 0, null);
        var I = Tf();
        if (I === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ca(I, Lo) || bv(f, n, g);
      }
      return g;
    }
    function bv(e, n, l) {
      e.flags |= Cr;
      var f = {
        getSnapshot: n,
        value: l
      }, h = Jt.updateQueue;
      if (h === null)
        h = gv(), Jt.updateQueue = h, h.stores = [f];
      else {
        var g = h.stores;
        g === null ? h.stores = [f] : g.push(f);
      }
    }
    function Sv(e, n, l, f) {
      n.value = l, n.getSnapshot = f, Tv(n) && wv(e);
    }
    function Ev(e, n, l) {
      var f = function() {
        Tv(n) && wv(e);
      };
      return l(f);
    }
    function Tv(e) {
      var n = e.getSnapshot, l = e.value;
      try {
        var f = n();
        return !cr(l, f);
      } catch {
        return !0;
      }
    }
    function wv(e) {
      var n = oi(e, Ke);
      n !== null && tr(n, e, Ke, Qt);
    }
    function Ic(e) {
      var n = Ni();
      typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e;
      var l = {
        pending: null,
        interleaved: null,
        lanes: we,
        dispatch: null,
        lastRenderedReducer: ip,
        lastRenderedState: e
      };
      n.queue = l;
      var f = l.dispatch = vT.bind(null, Jt, l);
      return [n.memoizedState, f];
    }
    function sp(e) {
      return op(ip);
    }
    function cp(e) {
      return up(ip);
    }
    function ys(e, n, l, f) {
      var h = {
        tag: e,
        create: n,
        destroy: l,
        deps: f,
        // Circular
        next: null
      }, g = Jt.updateQueue;
      if (g === null)
        g = gv(), Jt.updateQueue = g, g.lastEffect = h.next = h;
      else {
        var T = g.lastEffect;
        if (T === null)
          g.lastEffect = h.next = h;
        else {
          var _ = T.next;
          T.next = h, h.next = _, g.lastEffect = h;
        }
      }
      return h;
    }
    function fp(e) {
      var n = Ni();
      {
        var l = {
          current: e
        };
        return n.memoizedState = l, l;
      }
    }
    function qc(e) {
      var n = Qr();
      return n.memoizedState;
    }
    function Vc(e, n, l, f) {
      var h = Ni(), g = f === void 0 ? null : f;
      Jt.flags |= e, h.memoizedState = ys(fr | n, l, void 0, g);
    }
    function Hc(e, n, l, f) {
      var h = Qr(), g = f === void 0 ? null : f, T = void 0;
      if (An !== null) {
        var _ = An.memoizedState;
        if (T = _.destroy, g !== null) {
          var O = _.deps;
          if (np(g, O)) {
            h.memoizedState = ys(n, l, T, g);
            return;
          }
        }
      }
      Jt.flags |= e, h.memoizedState = ys(fr | n, l, T, g);
    }
    function Yc(e, n) {
      return Vc(en | Ml, Oi, e, n);
    }
    function gs(e, n) {
      return Hc(en, Oi, e, n);
    }
    function dp(e, n) {
      return Vc(k, Ci, e, n);
    }
    function Qc(e, n) {
      return Hc(k, Ci, e, n);
    }
    function pp(e, n) {
      var l = k;
      return Vc(l, Ri, e, n);
    }
    function Kc(e, n) {
      return Hc(k, Ri, e, n);
    }
    function xv(e, n) {
      if (typeof n == "function") {
        var l = n, f = e();
        return l(f), function() {
          l(null);
        };
      } else if (n != null) {
        var h = n;
        h.hasOwnProperty("current") || s("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(h).join(", ") + "}");
        var g = e();
        return h.current = g, function() {
          h.current = null;
        };
      }
    }
    function hp(e, n, l) {
      typeof n != "function" && s("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var f = l != null ? l.concat([e]) : null, h = k;
      return Vc(h, Ri, xv.bind(null, n, e), f);
    }
    function Gc(e, n, l) {
      typeof n != "function" && s("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", n !== null ? typeof n : "null");
      var f = l != null ? l.concat([e]) : null;
      return Hc(k, Ri, xv.bind(null, n, e), f);
    }
    function dT(e, n) {
    }
    var Wc = dT;
    function mp(e, n) {
      var l = Ni(), f = n === void 0 ? null : n;
      return l.memoizedState = [e, f], e;
    }
    function Jc(e, n) {
      var l = Qr(), f = n === void 0 ? null : n, h = l.memoizedState;
      if (h !== null && f !== null) {
        var g = h[1];
        if (np(f, g))
          return h[0];
      }
      return l.memoizedState = [e, f], e;
    }
    function vp(e, n) {
      var l = Ni(), f = n === void 0 ? null : n, h = e();
      return l.memoizedState = [h, f], h;
    }
    function Xc(e, n) {
      var l = Qr(), f = n === void 0 ? null : n, h = l.memoizedState;
      if (h !== null && f !== null) {
        var g = h[1];
        if (np(f, g))
          return h[0];
      }
      var T = e();
      return l.memoizedState = [T, f], T;
    }
    function yp(e) {
      var n = Ni();
      return n.memoizedState = e, e;
    }
    function _v(e) {
      var n = Qr(), l = An, f = l.memoizedState;
      return Rv(n, f, e);
    }
    function Cv(e) {
      var n = Qr();
      if (An === null)
        return n.memoizedState = e, e;
      var l = An.memoizedState;
      return Rv(n, l, e);
    }
    function Rv(e, n, l) {
      var f = !Ul(Lo);
      if (f) {
        if (!cr(l, n)) {
          var h = ql();
          Jt.lanes = bt(Jt.lanes, h), js(h), e.baseState = !0;
        }
        return n;
      } else
        return e.baseState && (e.baseState = !1, Ts()), e.memoizedState = l, l;
    }
    function pT(e, n, l) {
      var f = Ji();
      lr(Hl(f, Wi)), e(!0);
      var h = ms.transition;
      ms.transition = {};
      var g = ms.transition;
      ms.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), n();
      } finally {
        if (lr(f), ms.transition = h, h === null && g._updatedFibers) {
          var T = g._updatedFibers.size;
          T > 10 && u("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), g._updatedFibers.clear();
        }
      }
    }
    function gp() {
      var e = Ic(!1), n = e[0], l = e[1], f = pT.bind(null, l), h = Ni();
      return h.memoizedState = f, [n, f];
    }
    function Ov() {
      var e = sp(), n = e[0], l = Qr(), f = l.memoizedState;
      return [n, f];
    }
    function Nv() {
      var e = cp(), n = e[0], l = Qr(), f = l.memoizedState;
      return [n, f];
    }
    var Mv = !1;
    function hT() {
      return Mv;
    }
    function bp() {
      var e = Ni(), n = Tf(), l = n.identifierPrefix, f;
      {
        var h = lT++;
        f = ":" + l + "r" + h.toString(32) + ":";
      }
      return e.memoizedState = f, f;
    }
    function Zc() {
      var e = Qr(), n = e.memoizedState;
      return n;
    }
    function mT(e, n, l) {
      typeof arguments[3] == "function" && s("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var f = sl(e), h = {
        lane: f,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($v(e))
        Av(n, h);
      else {
        var g = Jm(e, n, h, f);
        if (g !== null) {
          var T = fi();
          tr(g, e, f, T), Dv(g, n, f);
        }
      }
    }
    function vT(e, n, l) {
      typeof arguments[3] == "function" && s("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var f = sl(e), h = {
        lane: f,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($v(e))
        Av(n, h);
      else {
        var g = e.alternate;
        if (e.lanes === we && (g === null || g.lanes === we)) {
          var T = n.lastRenderedReducer;
          if (T !== null) {
            var _;
            _ = Ye.current, Ye.current = li;
            try {
              var O = n.lastRenderedState, L = T(O, l);
              if (h.hasEagerState = !0, h.eagerState = L, cr(L, O)) {
                Q1(e, n, h, f);
                return;
              }
            } catch {
            } finally {
              Ye.current = _;
            }
          }
        }
        var I = Jm(e, n, h, f);
        if (I !== null) {
          var ne = fi();
          tr(I, e, f, ne), Dv(I, n, f);
        }
      }
    }
    function $v(e) {
      var n = e.alternate;
      return e === Jt || n !== null && n === Jt;
    }
    function Av(e, n) {
      vs = Uc = !0;
      var l = e.pending;
      l === null ? n.next = n : (n.next = l.next, l.next = n), e.pending = n;
    }
    function Dv(e, n, l) {
      if (Il(l)) {
        var f = n.lanes;
        f = Ou(f, e.pendingLanes);
        var h = bt(f, l);
        n.lanes = h, Mu(e, h);
      }
    }
    var ef = {
      readContext: Rn,
      useCallback: er,
      useContext: er,
      useEffect: er,
      useImperativeHandle: er,
      useInsertionEffect: er,
      useLayoutEffect: er,
      useMemo: er,
      useReducer: er,
      useRef: er,
      useState: er,
      useDebugValue: er,
      useDeferredValue: er,
      useTransition: er,
      useMutableSource: er,
      useSyncExternalStore: er,
      useId: er,
      unstable_isNewReconciler: ee
    }, Pv = null, jv = null, kv = null, zv = null, Mi = null, li = null, tf = null;
    {
      var Sp = function() {
        s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, ft = function() {
        s("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Pv = {
        readContext: function(e) {
          return Rn(e);
        },
        useCallback: function(e, n) {
          return de = "useCallback", jt(), al(n), mp(e, n);
        },
        useContext: function(e) {
          return de = "useContext", jt(), Rn(e);
        },
        useEffect: function(e, n) {
          return de = "useEffect", jt(), al(n), Yc(e, n);
        },
        useImperativeHandle: function(e, n, l) {
          return de = "useImperativeHandle", jt(), al(l), hp(e, n, l);
        },
        useInsertionEffect: function(e, n) {
          return de = "useInsertionEffect", jt(), al(n), dp(e, n);
        },
        useLayoutEffect: function(e, n) {
          return de = "useLayoutEffect", jt(), al(n), pp(e, n);
        },
        useMemo: function(e, n) {
          de = "useMemo", jt(), al(n);
          var l = Ye.current;
          Ye.current = Mi;
          try {
            return vp(e, n);
          } finally {
            Ye.current = l;
          }
        },
        useReducer: function(e, n, l) {
          de = "useReducer", jt();
          var f = Ye.current;
          Ye.current = Mi;
          try {
            return ap(e, n, l);
          } finally {
            Ye.current = f;
          }
        },
        useRef: function(e) {
          return de = "useRef", jt(), fp(e);
        },
        useState: function(e) {
          de = "useState", jt();
          var n = Ye.current;
          Ye.current = Mi;
          try {
            return Ic(e);
          } finally {
            Ye.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return de = "useDebugValue", jt(), void 0;
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", jt(), yp(e);
        },
        useTransition: function() {
          return de = "useTransition", jt(), gp();
        },
        useMutableSource: function(e, n, l) {
          return de = "useMutableSource", jt(), void 0;
        },
        useSyncExternalStore: function(e, n, l) {
          return de = "useSyncExternalStore", jt(), lp(e, n);
        },
        useId: function() {
          return de = "useId", jt(), bp();
        },
        unstable_isNewReconciler: ee
      }, jv = {
        readContext: function(e) {
          return Rn(e);
        },
        useCallback: function(e, n) {
          return de = "useCallback", Be(), mp(e, n);
        },
        useContext: function(e) {
          return de = "useContext", Be(), Rn(e);
        },
        useEffect: function(e, n) {
          return de = "useEffect", Be(), Yc(e, n);
        },
        useImperativeHandle: function(e, n, l) {
          return de = "useImperativeHandle", Be(), hp(e, n, l);
        },
        useInsertionEffect: function(e, n) {
          return de = "useInsertionEffect", Be(), dp(e, n);
        },
        useLayoutEffect: function(e, n) {
          return de = "useLayoutEffect", Be(), pp(e, n);
        },
        useMemo: function(e, n) {
          de = "useMemo", Be();
          var l = Ye.current;
          Ye.current = Mi;
          try {
            return vp(e, n);
          } finally {
            Ye.current = l;
          }
        },
        useReducer: function(e, n, l) {
          de = "useReducer", Be();
          var f = Ye.current;
          Ye.current = Mi;
          try {
            return ap(e, n, l);
          } finally {
            Ye.current = f;
          }
        },
        useRef: function(e) {
          return de = "useRef", Be(), fp(e);
        },
        useState: function(e) {
          de = "useState", Be();
          var n = Ye.current;
          Ye.current = Mi;
          try {
            return Ic(e);
          } finally {
            Ye.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return de = "useDebugValue", Be(), void 0;
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", Be(), yp(e);
        },
        useTransition: function() {
          return de = "useTransition", Be(), gp();
        },
        useMutableSource: function(e, n, l) {
          return de = "useMutableSource", Be(), void 0;
        },
        useSyncExternalStore: function(e, n, l) {
          return de = "useSyncExternalStore", Be(), lp(e, n);
        },
        useId: function() {
          return de = "useId", Be(), bp();
        },
        unstable_isNewReconciler: ee
      }, kv = {
        readContext: function(e) {
          return Rn(e);
        },
        useCallback: function(e, n) {
          return de = "useCallback", Be(), Jc(e, n);
        },
        useContext: function(e) {
          return de = "useContext", Be(), Rn(e);
        },
        useEffect: function(e, n) {
          return de = "useEffect", Be(), gs(e, n);
        },
        useImperativeHandle: function(e, n, l) {
          return de = "useImperativeHandle", Be(), Gc(e, n, l);
        },
        useInsertionEffect: function(e, n) {
          return de = "useInsertionEffect", Be(), Qc(e, n);
        },
        useLayoutEffect: function(e, n) {
          return de = "useLayoutEffect", Be(), Kc(e, n);
        },
        useMemo: function(e, n) {
          de = "useMemo", Be();
          var l = Ye.current;
          Ye.current = li;
          try {
            return Xc(e, n);
          } finally {
            Ye.current = l;
          }
        },
        useReducer: function(e, n, l) {
          de = "useReducer", Be();
          var f = Ye.current;
          Ye.current = li;
          try {
            return op(e, n, l);
          } finally {
            Ye.current = f;
          }
        },
        useRef: function(e) {
          return de = "useRef", Be(), qc();
        },
        useState: function(e) {
          de = "useState", Be();
          var n = Ye.current;
          Ye.current = li;
          try {
            return sp(e);
          } finally {
            Ye.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return de = "useDebugValue", Be(), Wc();
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", Be(), _v(e);
        },
        useTransition: function() {
          return de = "useTransition", Be(), Ov();
        },
        useMutableSource: function(e, n, l) {
          return de = "useMutableSource", Be(), void 0;
        },
        useSyncExternalStore: function(e, n, l) {
          return de = "useSyncExternalStore", Be(), Bc(e, n);
        },
        useId: function() {
          return de = "useId", Be(), Zc();
        },
        unstable_isNewReconciler: ee
      }, zv = {
        readContext: function(e) {
          return Rn(e);
        },
        useCallback: function(e, n) {
          return de = "useCallback", Be(), Jc(e, n);
        },
        useContext: function(e) {
          return de = "useContext", Be(), Rn(e);
        },
        useEffect: function(e, n) {
          return de = "useEffect", Be(), gs(e, n);
        },
        useImperativeHandle: function(e, n, l) {
          return de = "useImperativeHandle", Be(), Gc(e, n, l);
        },
        useInsertionEffect: function(e, n) {
          return de = "useInsertionEffect", Be(), Qc(e, n);
        },
        useLayoutEffect: function(e, n) {
          return de = "useLayoutEffect", Be(), Kc(e, n);
        },
        useMemo: function(e, n) {
          de = "useMemo", Be();
          var l = Ye.current;
          Ye.current = tf;
          try {
            return Xc(e, n);
          } finally {
            Ye.current = l;
          }
        },
        useReducer: function(e, n, l) {
          de = "useReducer", Be();
          var f = Ye.current;
          Ye.current = tf;
          try {
            return up(e, n, l);
          } finally {
            Ye.current = f;
          }
        },
        useRef: function(e) {
          return de = "useRef", Be(), qc();
        },
        useState: function(e) {
          de = "useState", Be();
          var n = Ye.current;
          Ye.current = tf;
          try {
            return cp(e);
          } finally {
            Ye.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return de = "useDebugValue", Be(), Wc();
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", Be(), Cv(e);
        },
        useTransition: function() {
          return de = "useTransition", Be(), Nv();
        },
        useMutableSource: function(e, n, l) {
          return de = "useMutableSource", Be(), void 0;
        },
        useSyncExternalStore: function(e, n, l) {
          return de = "useSyncExternalStore", Be(), Bc(e, n);
        },
        useId: function() {
          return de = "useId", Be(), Zc();
        },
        unstable_isNewReconciler: ee
      }, Mi = {
        readContext: function(e) {
          return Sp(), Rn(e);
        },
        useCallback: function(e, n) {
          return de = "useCallback", ft(), jt(), mp(e, n);
        },
        useContext: function(e) {
          return de = "useContext", ft(), jt(), Rn(e);
        },
        useEffect: function(e, n) {
          return de = "useEffect", ft(), jt(), Yc(e, n);
        },
        useImperativeHandle: function(e, n, l) {
          return de = "useImperativeHandle", ft(), jt(), hp(e, n, l);
        },
        useInsertionEffect: function(e, n) {
          return de = "useInsertionEffect", ft(), jt(), dp(e, n);
        },
        useLayoutEffect: function(e, n) {
          return de = "useLayoutEffect", ft(), jt(), pp(e, n);
        },
        useMemo: function(e, n) {
          de = "useMemo", ft(), jt();
          var l = Ye.current;
          Ye.current = Mi;
          try {
            return vp(e, n);
          } finally {
            Ye.current = l;
          }
        },
        useReducer: function(e, n, l) {
          de = "useReducer", ft(), jt();
          var f = Ye.current;
          Ye.current = Mi;
          try {
            return ap(e, n, l);
          } finally {
            Ye.current = f;
          }
        },
        useRef: function(e) {
          return de = "useRef", ft(), jt(), fp(e);
        },
        useState: function(e) {
          de = "useState", ft(), jt();
          var n = Ye.current;
          Ye.current = Mi;
          try {
            return Ic(e);
          } finally {
            Ye.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return de = "useDebugValue", ft(), jt(), void 0;
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", ft(), jt(), yp(e);
        },
        useTransition: function() {
          return de = "useTransition", ft(), jt(), gp();
        },
        useMutableSource: function(e, n, l) {
          return de = "useMutableSource", ft(), jt(), void 0;
        },
        useSyncExternalStore: function(e, n, l) {
          return de = "useSyncExternalStore", ft(), jt(), lp(e, n);
        },
        useId: function() {
          return de = "useId", ft(), jt(), bp();
        },
        unstable_isNewReconciler: ee
      }, li = {
        readContext: function(e) {
          return Sp(), Rn(e);
        },
        useCallback: function(e, n) {
          return de = "useCallback", ft(), Be(), Jc(e, n);
        },
        useContext: function(e) {
          return de = "useContext", ft(), Be(), Rn(e);
        },
        useEffect: function(e, n) {
          return de = "useEffect", ft(), Be(), gs(e, n);
        },
        useImperativeHandle: function(e, n, l) {
          return de = "useImperativeHandle", ft(), Be(), Gc(e, n, l);
        },
        useInsertionEffect: function(e, n) {
          return de = "useInsertionEffect", ft(), Be(), Qc(e, n);
        },
        useLayoutEffect: function(e, n) {
          return de = "useLayoutEffect", ft(), Be(), Kc(e, n);
        },
        useMemo: function(e, n) {
          de = "useMemo", ft(), Be();
          var l = Ye.current;
          Ye.current = li;
          try {
            return Xc(e, n);
          } finally {
            Ye.current = l;
          }
        },
        useReducer: function(e, n, l) {
          de = "useReducer", ft(), Be();
          var f = Ye.current;
          Ye.current = li;
          try {
            return op(e, n, l);
          } finally {
            Ye.current = f;
          }
        },
        useRef: function(e) {
          return de = "useRef", ft(), Be(), qc();
        },
        useState: function(e) {
          de = "useState", ft(), Be();
          var n = Ye.current;
          Ye.current = li;
          try {
            return sp(e);
          } finally {
            Ye.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return de = "useDebugValue", ft(), Be(), Wc();
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", ft(), Be(), _v(e);
        },
        useTransition: function() {
          return de = "useTransition", ft(), Be(), Ov();
        },
        useMutableSource: function(e, n, l) {
          return de = "useMutableSource", ft(), Be(), void 0;
        },
        useSyncExternalStore: function(e, n, l) {
          return de = "useSyncExternalStore", ft(), Be(), Bc(e, n);
        },
        useId: function() {
          return de = "useId", ft(), Be(), Zc();
        },
        unstable_isNewReconciler: ee
      }, tf = {
        readContext: function(e) {
          return Sp(), Rn(e);
        },
        useCallback: function(e, n) {
          return de = "useCallback", ft(), Be(), Jc(e, n);
        },
        useContext: function(e) {
          return de = "useContext", ft(), Be(), Rn(e);
        },
        useEffect: function(e, n) {
          return de = "useEffect", ft(), Be(), gs(e, n);
        },
        useImperativeHandle: function(e, n, l) {
          return de = "useImperativeHandle", ft(), Be(), Gc(e, n, l);
        },
        useInsertionEffect: function(e, n) {
          return de = "useInsertionEffect", ft(), Be(), Qc(e, n);
        },
        useLayoutEffect: function(e, n) {
          return de = "useLayoutEffect", ft(), Be(), Kc(e, n);
        },
        useMemo: function(e, n) {
          de = "useMemo", ft(), Be();
          var l = Ye.current;
          Ye.current = li;
          try {
            return Xc(e, n);
          } finally {
            Ye.current = l;
          }
        },
        useReducer: function(e, n, l) {
          de = "useReducer", ft(), Be();
          var f = Ye.current;
          Ye.current = li;
          try {
            return up(e, n, l);
          } finally {
            Ye.current = f;
          }
        },
        useRef: function(e) {
          return de = "useRef", ft(), Be(), qc();
        },
        useState: function(e) {
          de = "useState", ft(), Be();
          var n = Ye.current;
          Ye.current = li;
          try {
            return cp(e);
          } finally {
            Ye.current = n;
          }
        },
        useDebugValue: function(e, n) {
          return de = "useDebugValue", ft(), Be(), Wc();
        },
        useDeferredValue: function(e) {
          return de = "useDeferredValue", ft(), Be(), Cv(e);
        },
        useTransition: function() {
          return de = "useTransition", ft(), Be(), Nv();
        },
        useMutableSource: function(e, n, l) {
          return de = "useMutableSource", ft(), Be(), void 0;
        },
        useSyncExternalStore: function(e, n, l) {
          return de = "useSyncExternalStore", ft(), Be(), Bc(e, n);
        },
        useId: function() {
          return de = "useId", ft(), Be(), Zc();
        },
        unstable_isNewReconciler: ee
      };
    }
    var La = a.unstable_now, Lv = 0, nf = -1, bs = -1, rf = -1, Ep = !1, af = !1;
    function Fv() {
      return Ep;
    }
    function yT() {
      af = !0;
    }
    function gT() {
      Ep = !1, af = !1;
    }
    function bT() {
      Ep = af, af = !1;
    }
    function Uv() {
      return Lv;
    }
    function Bv() {
      Lv = La();
    }
    function Iv(e) {
      bs = La(), e.actualStartTime < 0 && (e.actualStartTime = La());
    }
    function qv(e) {
      bs = -1;
    }
    function of(e, n) {
      if (bs >= 0) {
        var l = La() - bs;
        e.actualDuration += l, n && (e.selfBaseDuration = l), bs = -1;
      }
    }
    function Fa(e) {
      if (nf >= 0) {
        var n = La() - nf;
        nf = -1;
        for (var l = e.return; l !== null; ) {
          switch (l.tag) {
            case ve:
              var f = l.stateNode;
              f.effectDuration += n;
              return;
            case Qe:
              var h = l.stateNode;
              h.effectDuration += n;
              return;
          }
          l = l.return;
        }
      }
    }
    function Tp(e) {
      if (rf >= 0) {
        var n = La() - rf;
        rf = -1;
        for (var l = e.return; l !== null; ) {
          switch (l.tag) {
            case ve:
              var f = l.stateNode;
              f !== null && (f.passiveEffectDuration += n);
              return;
            case Qe:
              var h = l.stateNode;
              h !== null && (h.passiveEffectDuration += n);
              return;
          }
          l = l.return;
        }
      }
    }
    function Ua() {
      nf = La();
    }
    function wp() {
      rf = La();
    }
    function xp(e) {
      for (var n = e.child; n; )
        e.actualDuration += n.actualDuration, n = n.sibling;
    }
    function uf(e, n) {
      return {
        value: e,
        source: n,
        stack: Wu(n),
        digest: null
      };
    }
    function _p(e, n, l) {
      return {
        value: e,
        source: null,
        stack: l ?? null,
        digest: n ?? null
      };
    }
    function ST(e, n) {
      return !0;
    }
    function Cp(e, n) {
      try {
        var l = ST(e, n);
        if (l === !1)
          return;
        var f = n.value, h = n.source, g = n.stack, T = g !== null ? g : "";
        if (f != null && f._suppressLogging) {
          if (e.tag === se)
            return;
          console.error(f);
        }
        var _ = h ? Ce(h) : null, O = _ ? "The above error occurred in the <" + _ + "> component:" : "The above error occurred in one of your React components:", L;
        if (e.tag === ve)
          L = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var I = Ce(e) || "Anonymous";
          L = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + I + ".");
        }
        var ne = O + `
` + T + `

` + ("" + L);
        console.error(ne);
      } catch (Ee) {
        setTimeout(function() {
          throw Ee;
        });
      }
    }
    var ET = typeof WeakMap == "function" ? WeakMap : Map;
    function Vv(e, n, l) {
      var f = Pa(Qt, l);
      f.tag = Cd, f.payload = {
        element: null
      };
      var h = n.value;
      return f.callback = function() {
        d0(h), Cp(e, n);
      }, f;
    }
    function Rp(e, n, l) {
      var f = Pa(Qt, l);
      f.tag = Cd;
      var h = e.type.getDerivedStateFromError;
      if (typeof h == "function") {
        var g = n.value;
        f.payload = function() {
          return h(g);
        }, f.callback = function() {
          Vy(e), Cp(e, n);
        };
      }
      var T = e.stateNode;
      return T !== null && typeof T.componentDidCatch == "function" && (f.callback = function() {
        Vy(e), Cp(e, n), typeof h != "function" && c0(this);
        var O = n.value, L = n.stack;
        this.componentDidCatch(O, {
          componentStack: L !== null ? L : ""
        }), typeof h != "function" && (Jn(e.lanes, Ke) || s("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ce(e) || "Unknown"));
      }), f;
    }
    function Hv(e, n, l) {
      var f = e.pingCache, h;
      if (f === null ? (f = e.pingCache = new ET(), h = /* @__PURE__ */ new Set(), f.set(n, h)) : (h = f.get(n), h === void 0 && (h = /* @__PURE__ */ new Set(), f.set(n, h))), !h.has(l)) {
        h.add(l);
        var g = p0.bind(null, e, n, l);
        n.then(g, g);
      }
    }
    function TT(e, n, l, f) {
      var h = e.updateQueue;
      if (h === null) {
        var g = /* @__PURE__ */ new Set();
        g.add(l), e.updateQueue = g;
      } else
        h.add(l);
    }
    function wT(e, n) {
      var l = e.tag;
      if ((e.mode & Yt) === At && (l === K || l === Pe || l === D)) {
        var f = e.alternate;
        f ? (e.updateQueue = f.updateQueue, e.memoizedState = f.memoizedState, e.lanes = f.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function xT(e) {
      var n = e;
      do {
        if (n.tag === me && uT(n))
          return n;
        n = n.return;
      } while (n !== null);
      return null;
    }
    function _T(e, n, l, f, h) {
      if ((e.mode & Yt) === At) {
        if (e === n)
          e.flags |= Sn;
        else {
          if (e.flags |= Ie, l.flags |= Ui, l.flags &= ~(mi | Nn), l.tag === se) {
            var g = l.alternate;
            if (g === null)
              l.tag = G;
            else {
              var T = Pa(Qt, Ke);
              T.tag = Rc, zo(l, T, Ke);
            }
          }
          l.lanes = bt(l.lanes, Ke);
        }
        return e;
      }
      return e.flags |= Sn, e.lanes = h, e;
    }
    function CT(e, n, l, f, h) {
      if (l.flags |= Nn, f !== null && typeof f == "object" && typeof f.then == "function") {
        var g = f;
        wT(l);
        var T = xT(n);
        if (T !== null) {
          T.flags &= ~St, _T(T, n, l, e, h), T.mode & Yt && Hv(e, g, h), TT(T, e, g);
          return;
        } else {
          if (!dd(h)) {
            Hv(e, g, h), oh();
            return;
          }
          var _ = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          f = _;
        }
      }
      f = uf(f, l), n0(f);
      var O = n;
      do {
        switch (O.tag) {
          case ve: {
            var L = f;
            O.flags |= Sn;
            var I = xn(h);
            O.lanes = bt(O.lanes, I);
            var ne = Vv(O, L, I);
            Nd(O, ne);
            return;
          }
          case se:
            var Ee = f, $e = O.type, Re = O.stateNode;
            if ((O.flags & Ie) === xe && (typeof $e.getDerivedStateFromError == "function" || Re !== null && typeof Re.componentDidCatch == "function" && !ky(Re))) {
              O.flags |= Sn;
              var Ue = xn(h);
              O.lanes = bt(O.lanes, Ue);
              var at = Rp(O, Ee, Ue);
              Nd(O, at);
              return;
            }
            break;
        }
        O = O.return;
      } while (O !== null);
    }
    function RT() {
      return null;
    }
    var Ss = c.ReactCurrentOwner, si = !1, Op, Es, Np, Mp, $p, Fo, Ap, lf;
    Op = {}, Es = {}, Np = {}, Mp = {}, $p = {}, Fo = !1, Ap = {}, lf = {};
    function Tr(e, n, l, f) {
      e === null ? n.child = nT(n, null, l, f) : n.child = el(n, e.child, l, f);
    }
    function OT(e, n, l, f) {
      n.child = el(n, e.child, null, f), n.child = el(n, null, l, f);
    }
    function Yv(e, n, l, f, h) {
      if (n.type !== n.elementType) {
        var g = l.propTypes;
        g && Ln(
          g,
          f,
          // Resolved props
          "prop",
          Me(l)
        );
      }
      var T = l.render, _ = n.ref, O;
      return Zu(n, h), Ss.current = n, S(!0), O = rp(e, n, T, f, _, h), S(!1), e !== null && !si ? (yv(e, n, h), oa(e, n, h)) : (n.flags |= $, Tr(e, n, O, h), n.child);
    }
    function Qv(e, n, l, f, h) {
      if (e === null) {
        var g = l.type;
        if (N0(g) && l.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        l.defaultProps === void 0) {
          var T = g;
          return T = fl(g), n.tag = D, n.type = T, jp(n, g), Kv(e, n, T, f, h);
        }
        {
          var _ = g.propTypes;
          _ && Ln(
            _,
            f,
            // Resolved props
            "prop",
            Me(g)
          );
        }
        var O = vh(l.type, null, f, n, n.mode, h);
        return O.ref = n.ref, O.return = n, n.child = O, O;
      }
      {
        var L = l.type, I = L.propTypes;
        I && Ln(
          I,
          f,
          // Resolved props
          "prop",
          Me(L)
        );
      }
      var ne = e.child, Ee = Bp(e, h);
      if (!Ee) {
        var $e = ne.memoizedProps, Re = l.compare;
        if (Re = Re !== null ? Re : Da, Re($e, f) && e.ref === n.ref)
          return oa(e, n, h);
      }
      n.flags |= $;
      var Ue = Ho(ne, f);
      return Ue.ref = n.ref, Ue.return = n, n.child = Ue, Ue;
    }
    function Kv(e, n, l, f, h) {
      if (n.type !== n.elementType) {
        var g = n.elementType;
        if (g.$$typeof === B) {
          var T = g, _ = T._payload, O = T._init;
          try {
            g = O(_);
          } catch {
            g = null;
          }
          var L = g && g.propTypes;
          L && Ln(
            L,
            f,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Me(g)
          );
        }
      }
      if (e !== null) {
        var I = e.memoizedProps;
        if (Da(I, f) && e.ref === n.ref && // Prevent bailout if the implementation changed due to hot reload.
        n.type === e.type)
          if (si = !1, n.pendingProps = f = I, Bp(e, h))
            (e.flags & Ui) !== xe && (si = !0);
          else
            return n.lanes = e.lanes, oa(e, n, h);
      }
      return Dp(e, n, l, f, h);
    }
    function Gv(e, n, l) {
      var f = n.pendingProps, h = f.children, g = e !== null ? e.memoizedState : null;
      if (f.mode === "hidden" || Z)
        if ((n.mode & Yt) === At) {
          var T = {
            baseLanes: we,
            cachePool: null,
            transitions: null
          };
          n.memoizedState = T, wf(n, l);
        } else if (Jn(l, gr)) {
          var ne = {
            baseLanes: we,
            cachePool: null,
            transitions: null
          };
          n.memoizedState = ne;
          var Ee = g !== null ? g.baseLanes : l;
          wf(n, Ee);
        } else {
          var _ = null, O;
          if (g !== null) {
            var L = g.baseLanes;
            O = bt(L, l);
          } else
            O = l;
          n.lanes = n.childLanes = gr;
          var I = {
            baseLanes: O,
            cachePool: _,
            transitions: null
          };
          return n.memoizedState = I, n.updateQueue = null, wf(n, O), null;
        }
      else {
        var $e;
        g !== null ? ($e = bt(g.baseLanes, l), n.memoizedState = null) : $e = l, wf(n, $e);
      }
      return Tr(e, n, h, l), n.child;
    }
    function NT(e, n, l) {
      var f = n.pendingProps;
      return Tr(e, n, f, l), n.child;
    }
    function MT(e, n, l) {
      var f = n.pendingProps.children;
      return Tr(e, n, f, l), n.child;
    }
    function $T(e, n, l) {
      {
        n.flags |= k;
        {
          var f = n.stateNode;
          f.effectDuration = 0, f.passiveEffectDuration = 0;
        }
      }
      var h = n.pendingProps, g = h.children;
      return Tr(e, n, g, l), n.child;
    }
    function Wv(e, n) {
      var l = n.ref;
      (e === null && l !== null || e !== null && e.ref !== l) && (n.flags |= Et);
    }
    function Dp(e, n, l, f, h) {
      if (n.type !== n.elementType) {
        var g = l.propTypes;
        g && Ln(
          g,
          f,
          // Resolved props
          "prop",
          Me(l)
        );
      }
      var T;
      {
        var _ = na(n, l, !0);
        T = Si(n, _);
      }
      var O;
      return Zu(n, h), Ss.current = n, S(!0), O = rp(e, n, l, f, T, h), S(!1), e !== null && !si ? (yv(e, n, h), oa(e, n, h)) : (n.flags |= $, Tr(e, n, O, h), n.child);
    }
    function Jv(e, n, l, f, h) {
      {
        switch (B0(n)) {
          case !1: {
            var g = n.stateNode, T = n.type, _ = new T(n.memoizedProps, g.context), O = _.state;
            g.updater.enqueueSetState(g, O, null);
            break;
          }
          case !0: {
            n.flags |= Ie, n.flags |= Sn;
            var L = new Error("Simulated error coming from DevTools"), I = xn(h);
            n.lanes = bt(n.lanes, I);
            var ne = Rp(n, uf(L, n), I);
            Nd(n, ne);
            break;
          }
        }
        if (n.type !== n.elementType) {
          var Ee = l.propTypes;
          Ee && Ln(
            Ee,
            f,
            // Resolved props
            "prop",
            Me(l)
          );
        }
      }
      var $e;
      qr(l) ? ($e = !0, qu(n)) : $e = !1, Zu(n, h);
      var Re = n.stateNode, Ue;
      Re === null ? (cf(e, n), lv(n, l, f), Bd(n, l, f, h), Ue = !0) : e === null ? Ue = eT(n, l, f, h) : Ue = tT(e, n, l, f, h);
      var at = Pp(e, n, l, Ue, $e, h);
      {
        var Tt = n.stateNode;
        Ue && Tt.props !== f && (Fo || s("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ce(n) || "a component"), Fo = !0);
      }
      return at;
    }
    function Pp(e, n, l, f, h, g) {
      Wv(e, n);
      var T = (n.flags & Ie) !== xe;
      if (!f && !T)
        return h && ia(n, l, !1), oa(e, n, g);
      var _ = n.stateNode;
      Ss.current = n;
      var O;
      return T && typeof l.getDerivedStateFromError != "function" ? (O = null, qv()) : (S(!0), O = _.render(), S(!1)), n.flags |= $, e !== null && T ? OT(e, n, O, g) : Tr(e, n, O, g), n.memoizedState = _.state, h && ia(n, l, !0), n.child;
    }
    function Xv(e) {
      var n = e.stateNode;
      n.pendingContext ? rs(e, n.pendingContext, n.pendingContext !== n.context) : n.context && rs(e, n.context, !1), Qd(e, n.containerInfo);
    }
    function AT(e, n, l) {
      if (Xv(n), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var f = n.pendingProps, h = n.memoizedState, g = h.element;
      ev(e, n), $c(n, f, null, l);
      var T = n.memoizedState;
      n.stateNode;
      var _ = T.element;
      {
        if (_ === g)
          return oa(e, n, l);
        Tr(e, n, _, l);
      }
      return n.child;
    }
    function DT(e, n, l) {
      hv(n), n.type;
      var f = n.pendingProps, h = e !== null ? e.memoizedProps : null, g = f.children;
      return h !== null && yd() && (n.flags |= Se), Wv(e, n), Tr(e, n, g, l), n.child;
    }
    function PT(e, n) {
      return null;
    }
    function jT(e, n, l, f) {
      cf(e, n);
      var h = n.pendingProps, g = l, T = g._payload, _ = g._init, O = _(T);
      n.type = O;
      var L = n.tag = M0(O), I = Je(O, h), ne;
      switch (L) {
        case K:
          return jp(n, O), n.type = O = fl(O), ne = Dp(null, n, O, I, f), ne;
        case se:
          return n.type = O = ch(O), ne = Jv(null, n, O, I, f), ne;
        case Pe:
          return n.type = O = fh(O), ne = Yv(null, n, O, I, f), ne;
        case C: {
          if (n.type !== n.elementType) {
            var Ee = O.propTypes;
            Ee && Ln(
              Ee,
              I,
              // Resolved for outer only
              "prop",
              Me(O)
            );
          }
          return ne = Qv(
            null,
            n,
            O,
            Je(O.type, I),
            // The inner type can have defaults too
            f
          ), ne;
        }
      }
      var $e = "";
      throw O !== null && typeof O == "object" && O.$$typeof === B && ($e = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + O + ". " + ("Lazy element type must resolve to a class or function." + $e));
    }
    function kT(e, n, l, f, h) {
      cf(e, n), n.tag = se;
      var g;
      return qr(l) ? (g = !0, qu(n)) : g = !1, Zu(n, h), lv(n, l, f), Bd(n, l, f, h), Pp(null, n, l, !0, g, h);
    }
    function zT(e, n, l, f) {
      cf(e, n);
      var h = n.pendingProps, g;
      {
        var T = na(n, l, !1);
        g = Si(n, T);
      }
      Zu(n, f);
      var _;
      {
        if (l.prototype && typeof l.prototype.render == "function") {
          var O = Me(l) || "Unknown";
          Op[O] || (s("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", O, O), Op[O] = !0);
        }
        n.mode & Or && w.recordLegacyContextWarning(n, null), S(!0), Ss.current = n, _ = rp(null, n, l, h, g, f), S(!1);
      }
      if (n.flags |= $, typeof _ == "object" && _ !== null && typeof _.render == "function" && _.$$typeof === void 0) {
        var L = Me(l) || "Unknown";
        Es[L] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), Es[L] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof _ == "object" && _ !== null && typeof _.render == "function" && _.$$typeof === void 0
      ) {
        {
          var I = Me(l) || "Unknown";
          Es[I] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", I, I, I), Es[I] = !0);
        }
        n.tag = se, n.memoizedState = null, n.updateQueue = null;
        var ne = !1;
        return qr(l) ? (ne = !0, qu(n)) : ne = !1, n.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null, Od(n), uv(n, _), Bd(n, l, h, f), Pp(null, n, l, !0, ne, f);
      } else
        return n.tag = K, Tr(null, n, _, f), jp(n, l), n.child;
    }
    function jp(e, n) {
      {
        if (n && n.childContextTypes && s("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), e.ref !== null) {
          var l = "", f = Xu();
          f && (l += `

Check the render method of \`` + f + "`.");
          var h = f || "", g = e._debugSource;
          g && (h = g.fileName + ":" + g.lineNumber), $p[h] || ($p[h] = !0, s("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", l));
        }
        if (typeof n.getDerivedStateFromProps == "function") {
          var T = Me(n) || "Unknown";
          Mp[T] || (s("%s: Function components do not support getDerivedStateFromProps.", T), Mp[T] = !0);
        }
        if (typeof n.contextType == "object" && n.contextType !== null) {
          var _ = Me(n) || "Unknown";
          Np[_] || (s("%s: Function components do not support contextType.", _), Np[_] = !0);
        }
      }
    }
    var kp = {
      dehydrated: null,
      treeContext: null,
      retryLane: nn
    };
    function zp(e) {
      return {
        baseLanes: e,
        cachePool: RT(),
        transitions: null
      };
    }
    function LT(e, n) {
      var l = null;
      return {
        baseLanes: bt(e.baseLanes, n),
        cachePool: l,
        transitions: e.transitions
      };
    }
    function FT(e, n, l, f) {
      if (n !== null) {
        var h = n.memoizedState;
        if (h === null)
          return !1;
      }
      return Wd(e, hs);
    }
    function UT(e, n) {
      return wo(e.childLanes, n);
    }
    function Zv(e, n, l) {
      var f = n.pendingProps;
      I0(n) && (n.flags |= Ie);
      var h = ui.current, g = !1, T = (n.flags & Ie) !== xe;
      if (T || FT(h, e) ? (g = !0, n.flags &= ~Ie) : (e === null || e.memoizedState !== null) && (h = oT(h, vv)), h = nl(h), ka(n, h), e === null) {
        var _ = n.memoizedState;
        if (_ !== null) {
          var O = _.dehydrated;
          if (O !== null)
            return HT(n);
        }
        var L = f.children, I = f.fallback;
        if (g) {
          var ne = BT(n, L, I, l), Ee = n.child;
          return Ee.memoizedState = zp(l), n.memoizedState = kp, ne;
        } else
          return Lp(n, L);
      } else {
        var $e = e.memoizedState;
        if ($e !== null) {
          var Re = $e.dehydrated;
          if (Re !== null)
            return YT(e, n, T, f, Re, $e, l);
        }
        if (g) {
          var Ue = f.fallback, at = f.children, Tt = qT(e, n, at, Ue, l), dt = n.child, pn = e.child.memoizedState;
          return dt.memoizedState = pn === null ? zp(l) : LT(pn, l), dt.childLanes = UT(e, l), n.memoizedState = kp, Tt;
        } else {
          var sn = f.children, W = IT(e, n, sn, l);
          return n.memoizedState = null, W;
        }
      }
    }
    function Lp(e, n, l) {
      var f = e.mode, h = {
        mode: "visible",
        children: n
      }, g = Fp(h, f);
      return g.return = e, e.child = g, g;
    }
    function BT(e, n, l, f) {
      var h = e.mode, g = e.child, T = {
        mode: "hidden",
        children: n
      }, _, O;
      return (h & Yt) === At && g !== null ? (_ = g, _.childLanes = we, _.pendingProps = T, e.mode & Ft && (_.actualDuration = 0, _.actualStartTime = -1, _.selfBaseDuration = 0, _.treeBaseDuration = 0), O = qa(l, h, f, null)) : (_ = Fp(T, h), O = qa(l, h, f, null)), _.return = e, O.return = e, _.sibling = O, e.child = _, O;
    }
    function Fp(e, n, l) {
      return Yy(e, n, we, null);
    }
    function ey(e, n) {
      return Ho(e, n);
    }
    function IT(e, n, l, f) {
      var h = e.child, g = h.sibling, T = ey(h, {
        mode: "visible",
        children: l
      });
      if ((n.mode & Yt) === At && (T.lanes = f), T.return = n, T.sibling = null, g !== null) {
        var _ = n.deletions;
        _ === null ? (n.deletions = [g], n.flags |= Oe) : _.push(g);
      }
      return n.child = T, T;
    }
    function qT(e, n, l, f, h) {
      var g = n.mode, T = e.child, _ = T.sibling, O = {
        mode: "hidden",
        children: l
      }, L;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (g & Yt) === At && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        n.child !== T
      ) {
        var I = n.child;
        L = I, L.childLanes = we, L.pendingProps = O, n.mode & Ft && (L.actualDuration = 0, L.actualStartTime = -1, L.selfBaseDuration = T.selfBaseDuration, L.treeBaseDuration = T.treeBaseDuration), n.deletions = null;
      } else
        L = ey(T, O), L.subtreeFlags = T.subtreeFlags & Mn;
      var ne;
      return _ !== null ? ne = Ho(_, f) : (ne = qa(f, g, h, null), ne.flags |= N), ne.return = n, L.return = n, L.sibling = ne, n.child = L, ne;
    }
    function sf(e, n, l, f) {
      f !== null && ls(f), el(n, e.child, null, l);
      var h = n.pendingProps, g = h.children, T = Lp(n, g);
      return T.flags |= N, n.memoizedState = null, T;
    }
    function VT(e, n, l, f, h) {
      var g = n.mode, T = {
        mode: "visible",
        children: l
      }, _ = Fp(T, g), O = qa(f, g, h, null);
      return O.flags |= N, _.return = n, O.return = n, _.sibling = O, n.child = _, (n.mode & Yt) !== At && el(n, e.child, null, h), O;
    }
    function HT(e, n, l) {
      return (e.mode & Yt) === At ? (s("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ke) : Ql() ? e.lanes = ei : e.lanes = gr, null;
    }
    function YT(e, n, l, f, h, g, T) {
      if (l)
        if (n.flags & St) {
          n.flags &= ~St;
          var sn = _p(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return sf(e, n, T, sn);
        } else {
          if (n.memoizedState !== null)
            return n.child = e.child, n.flags |= Ie, null;
          var W = f.children, pe = f.fallback, Y = VT(e, n, W, pe, T), ze = n.child;
          return ze.memoizedState = zp(T), n.memoizedState = kp, Y;
        }
      else {
        if ((n.mode & Yt) === At)
          return sf(
            e,
            n,
            T,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ql()) {
          var _, O, L;
          {
            var I = md();
            _ = I.digest, O = I.message, L = I.stack;
          }
          var ne;
          O ? ne = new Error(O) : ne = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var Ee = _p(ne, _, L);
          return sf(e, n, T, Ee);
        }
        var $e = Jn(T, e.childLanes);
        if (si || $e) {
          var Re = Tf();
          if (Re !== null) {
            var Ue = $u(Re, T);
            if (Ue !== nn && Ue !== g.retryLane) {
              g.retryLane = Ue;
              var at = Qt;
              oi(e, Ue), tr(Re, e, Ue, at);
            }
          }
          oh();
          var Tt = _p(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return sf(e, n, T, Tt);
        } else {
          if (gc())
            return n.flags |= Ie, n.child = e.child, h0.bind(null, e), ht(), null;
          bd(n, h, g.treeContext);
          var dt = f.children, pn = Lp(n, dt);
          return pn.flags |= jn, pn;
        }
      }
    }
    function ty(e, n, l) {
      e.lanes = bt(e.lanes, n);
      var f = e.alternate;
      f !== null && (f.lanes = bt(f.lanes, n)), xd(e.return, n, l);
    }
    function QT(e, n, l) {
      for (var f = n; f !== null; ) {
        if (f.tag === me) {
          var h = f.memoizedState;
          h !== null && ty(f, l, e);
        } else if (f.tag === be)
          ty(f, l, e);
        else if (f.child !== null) {
          f.child.return = f, f = f.child;
          continue;
        }
        if (f === e)
          return;
        for (; f.sibling === null; ) {
          if (f.return === null || f.return === e)
            return;
          f = f.return;
        }
        f.sibling.return = f.return, f = f.sibling;
      }
    }
    function KT(e) {
      for (var n = e, l = null; n !== null; ) {
        var f = n.alternate;
        f !== null && Lc(f) === null && (l = n), n = n.sibling;
      }
      return l;
    }
    function GT(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Ap[e])
        if (Ap[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              s('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              s('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              s('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          s('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function WT(e, n) {
      e !== void 0 && !lf[e] && (e !== "collapsed" && e !== "hidden" ? (lf[e] = !0, s('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : n !== "forwards" && n !== "backwards" && (lf[e] = !0, s('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function ny(e, n) {
      {
        var l = $n(e), f = !l && typeof Fe(e) == "function";
        if (l || f) {
          var h = l ? "array" : "iterable";
          return s("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", h, n, h), !1;
        }
      }
      return !0;
    }
    function JT(e, n) {
      if ((n === "forwards" || n === "backwards") && e !== void 0 && e !== null && e !== !1)
        if ($n(e)) {
          for (var l = 0; l < e.length; l++)
            if (!ny(e[l], l))
              return;
        } else {
          var f = Fe(e);
          if (typeof f == "function") {
            var h = f.call(e);
            if (h)
              for (var g = h.next(), T = 0; !g.done; g = h.next()) {
                if (!ny(g.value, T))
                  return;
                T++;
              }
          } else
            s('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', n);
        }
    }
    function Up(e, n, l, f, h) {
      var g = e.memoizedState;
      g === null ? e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: f,
        tail: l,
        tailMode: h
      } : (g.isBackwards = n, g.rendering = null, g.renderingStartTime = 0, g.last = f, g.tail = l, g.tailMode = h);
    }
    function ry(e, n, l) {
      var f = n.pendingProps, h = f.revealOrder, g = f.tail, T = f.children;
      GT(h), WT(g, h), JT(T, h), Tr(e, n, T, l);
      var _ = ui.current, O = Wd(_, hs);
      if (O)
        _ = Jd(_, hs), n.flags |= Ie;
      else {
        var L = e !== null && (e.flags & Ie) !== xe;
        L && QT(n, n.child, l), _ = nl(_);
      }
      if (ka(n, _), (n.mode & Yt) === At)
        n.memoizedState = null;
      else
        switch (h) {
          case "forwards": {
            var I = KT(n.child), ne;
            I === null ? (ne = n.child, n.child = null) : (ne = I.sibling, I.sibling = null), Up(
              n,
              !1,
              // isBackwards
              ne,
              I,
              g
            );
            break;
          }
          case "backwards": {
            var Ee = null, $e = n.child;
            for (n.child = null; $e !== null; ) {
              var Re = $e.alternate;
              if (Re !== null && Lc(Re) === null) {
                n.child = $e;
                break;
              }
              var Ue = $e.sibling;
              $e.sibling = Ee, Ee = $e, $e = Ue;
            }
            Up(
              n,
              !0,
              // isBackwards
              Ee,
              null,
              // last
              g
            );
            break;
          }
          case "together": {
            Up(
              n,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            n.memoizedState = null;
        }
      return n.child;
    }
    function XT(e, n, l) {
      Qd(n, n.stateNode.containerInfo);
      var f = n.pendingProps;
      return e === null ? n.child = el(n, null, f, l) : Tr(e, n, f, l), n.child;
    }
    var iy = !1;
    function ZT(e, n, l) {
      var f = n.type, h = f._context, g = n.pendingProps, T = n.memoizedProps, _ = g.value;
      {
        "value" in g || iy || (iy = !0, s("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var O = n.type.propTypes;
        O && Ln(O, g, "prop", "Context.Provider");
      }
      if (Wm(n, h, _), T !== null) {
        var L = T.value;
        if (cr(L, _)) {
          if (T.children === g.children && !ra())
            return oa(e, n, l);
        } else
          V1(n, h, l);
      }
      var I = g.children;
      return Tr(e, n, I, l), n.child;
    }
    var ay = !1;
    function ew(e, n, l) {
      var f = n.type;
      f._context === void 0 ? f !== f.Consumer && (ay || (ay = !0, s("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : f = f._context;
      var h = n.pendingProps, g = h.children;
      typeof g != "function" && s("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Zu(n, l);
      var T = Rn(f), _;
      return Ss.current = n, S(!0), _ = g(T), S(!1), n.flags |= $, Tr(e, n, _, l), n.child;
    }
    function Ts() {
      si = !0;
    }
    function cf(e, n) {
      (n.mode & Yt) === At && e !== null && (e.alternate = null, n.alternate = null, n.flags |= N);
    }
    function oa(e, n, l) {
      return e !== null && (n.dependencies = e.dependencies), qv(), js(n.lanes), Jn(l, n.childLanes) ? (rT(e, n), n.child) : null;
    }
    function tw(e, n, l) {
      {
        var f = n.return;
        if (f === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, n.alternate = null, l.index = n.index, l.sibling = n.sibling, l.return = n.return, l.ref = n.ref, n === f.child)
          f.child = l;
        else {
          var h = f.child;
          if (h === null)
            throw new Error("Expected parent to have a child.");
          for (; h.sibling !== n; )
            if (h = h.sibling, h === null)
              throw new Error("Expected to find the previous sibling.");
          h.sibling = l;
        }
        var g = f.deletions;
        return g === null ? (f.deletions = [e], f.flags |= Oe) : g.push(e), l.flags |= N, l;
      }
    }
    function Bp(e, n) {
      var l = e.lanes;
      return !!Jn(l, n);
    }
    function nw(e, n, l) {
      switch (n.tag) {
        case ve:
          Xv(n), n.stateNode;
          break;
        case ce:
          hv(n);
          break;
        case se: {
          var f = n.type;
          qr(f) && qu(n);
          break;
        }
        case Ve:
          Qd(n, n.stateNode.containerInfo);
          break;
        case et: {
          var h = n.memoizedProps.value, g = n.type._context;
          Wm(n, g, h);
          break;
        }
        case Qe:
          {
            var T = Jn(l, n.childLanes);
            T && (n.flags |= k);
            {
              var _ = n.stateNode;
              _.effectDuration = 0, _.passiveEffectDuration = 0;
            }
          }
          break;
        case me: {
          var O = n.memoizedState;
          if (O !== null) {
            if (O.dehydrated !== null)
              return ka(n, nl(ui.current)), n.flags |= Ie, null;
            var L = n.child, I = L.childLanes;
            if (Jn(l, I))
              return Zv(e, n, l);
            ka(n, nl(ui.current));
            var ne = oa(e, n, l);
            return ne !== null ? ne.sibling : null;
          } else
            ka(n, nl(ui.current));
          break;
        }
        case be: {
          var Ee = (e.flags & Ie) !== xe, $e = Jn(l, n.childLanes);
          if (Ee) {
            if ($e)
              return ry(e, n, l);
            n.flags |= Ie;
          }
          var Re = n.memoizedState;
          if (Re !== null && (Re.rendering = null, Re.tail = null, Re.lastEffect = null), ka(n, ui.current), $e)
            break;
          return null;
        }
        case Q:
        case De:
          return n.lanes = we, Gv(e, n, l);
      }
      return oa(e, n, l);
    }
    function rw(e, n, l) {
      if (n._debugNeedsRemount && e !== null)
        return tw(e, n, vh(n.type, n.key, n.pendingProps, n._debugOwner || null, n.mode, n.lanes));
      if (e !== null) {
        var f = e.memoizedProps, h = n.pendingProps;
        if (f !== h || ra() || // Force a re-render if the implementation changed due to hot reload:
        n.type !== e.type)
          si = !0;
        else {
          var g = Bp(e, l);
          if (!g && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (n.flags & Ie) === xe)
            return si = !1, nw(e, n, l);
          (e.flags & Ui) !== xe ? si = !0 : si = !1;
        }
      } else
        si = !1;
      switch (n.lanes = we, n.tag) {
        case Te:
          return zT(e, n, n.type, l);
        case V: {
          var T = n.elementType;
          return jT(e, n, T, l);
        }
        case K: {
          var _ = n.type, O = n.pendingProps, L = n.elementType === _ ? O : Je(_, O);
          return Dp(e, n, _, L, l);
        }
        case se: {
          var I = n.type, ne = n.pendingProps, Ee = n.elementType === I ? ne : Je(I, ne);
          return Jv(e, n, I, Ee, l);
        }
        case ve:
          return AT(e, n, l);
        case ce:
          return DT(e, n, l);
        case Xe:
          return PT();
        case me:
          return Zv(e, n, l);
        case Ve:
          return XT(e, n, l);
        case Pe: {
          var $e = n.type, Re = n.pendingProps, Ue = n.elementType === $e ? Re : Je($e, Re);
          return Yv(e, n, $e, Ue, l);
        }
        case ie:
          return NT(e, n, l);
        case ge:
          return MT(e, n, l);
        case Qe:
          return $T(e, n, l);
        case et:
          return ZT(e, n, l);
        case Ae:
          return ew(e, n, l);
        case C: {
          var at = n.type, Tt = n.pendingProps, dt = Je(at, Tt);
          if (n.type !== n.elementType) {
            var pn = at.propTypes;
            pn && Ln(
              pn,
              dt,
              // Resolved for outer only
              "prop",
              Me(at)
            );
          }
          return dt = Je(at.type, dt), Qv(e, n, at, dt, l);
        }
        case D:
          return Kv(e, n, n.type, n.pendingProps, l);
        case G: {
          var sn = n.type, W = n.pendingProps, pe = n.elementType === sn ? W : Je(sn, W);
          return kT(e, n, sn, pe, l);
        }
        case be:
          return ry(e, n, l);
        case re:
          break;
        case Q:
          return Gv(e, n, l);
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ws(e) {
      e.flags |= k;
    }
    function oy(e) {
      e.flags |= Et;
    }
    var uy, Ip, ly, sy;
    uy = function(e, n, l, f) {
      for (var h = n.child; h !== null; ) {
        if (h.tag === ce || h.tag === Xe)
          Ec(e, h.stateNode);
        else if (h.tag !== Ve) {
          if (h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
        }
        if (h === n)
          return;
        for (; h.sibling === null; ) {
          if (h.return === null || h.return === n)
            return;
          h = h.return;
        }
        h.sibling.return = h.return, h = h.sibling;
      }
    }, Ip = function(e, n) {
    }, ly = function(e, n, l, f, h) {
      var g = e.memoizedProps;
      if (g !== f) {
        n.stateNode, Kd();
        var T = kr();
        n.updateQueue = T, T && ws(n);
      }
    }, sy = function(e, n, l, f) {
      l !== f && ws(n);
    };
    function xs(e, n) {
      switch (e.tailMode) {
        case "hidden": {
          for (var l = e.tail, f = null; l !== null; )
            l.alternate !== null && (f = l), l = l.sibling;
          f === null ? e.tail = null : f.sibling = null;
          break;
        }
        case "collapsed": {
          for (var h = e.tail, g = null; h !== null; )
            h.alternate !== null && (g = h), h = h.sibling;
          g === null ? !n && e.tail !== null ? e.tail.sibling = null : e.tail = null : g.sibling = null;
          break;
        }
      }
    }
    function Hn(e) {
      var n = e.alternate !== null && e.alternate.child === e.child, l = we, f = xe;
      if (n) {
        if ((e.mode & Ft) !== At) {
          for (var O = e.selfBaseDuration, L = e.child; L !== null; )
            l = bt(l, bt(L.lanes, L.childLanes)), f |= L.subtreeFlags & Mn, f |= L.flags & Mn, O += L.treeBaseDuration, L = L.sibling;
          e.treeBaseDuration = O;
        } else
          for (var I = e.child; I !== null; )
            l = bt(l, bt(I.lanes, I.childLanes)), f |= I.subtreeFlags & Mn, f |= I.flags & Mn, I.return = e, I = I.sibling;
        e.subtreeFlags |= f;
      } else {
        if ((e.mode & Ft) !== At) {
          for (var h = e.actualDuration, g = e.selfBaseDuration, T = e.child; T !== null; )
            l = bt(l, bt(T.lanes, T.childLanes)), f |= T.subtreeFlags, f |= T.flags, h += T.actualDuration, g += T.treeBaseDuration, T = T.sibling;
          e.actualDuration = h, e.treeBaseDuration = g;
        } else
          for (var _ = e.child; _ !== null; )
            l = bt(l, bt(_.lanes, _.childLanes)), f |= _.subtreeFlags, f |= _.flags, _.return = e, _ = _.sibling;
        e.subtreeFlags |= f;
      }
      return e.childLanes = l, n;
    }
    function iw(e, n, l) {
      var f = Po();
      if (l !== null && l.dehydrated !== null)
        if (e === null) {
          if (!f)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Do(), Hn(n), (n.mode & Ft) !== At) {
            var h = l !== null;
            if (h) {
              var g = n.child;
              g !== null && (n.treeBaseDuration -= g.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if ((n.flags & Ie) === xe && (n.memoizedState = null), n.flags |= k, Hn(n), (n.mode & Ft) !== At) {
            var T = l !== null;
            if (T) {
              var _ = n.child;
              _ !== null && (n.treeBaseDuration -= _.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return us(), !0;
    }
    function cy(e, n, l) {
      var f = n.pendingProps;
      switch (as(n), n.tag) {
        case Te:
        case V:
        case D:
        case K:
        case Pe:
        case ie:
        case ge:
        case Qe:
        case Ae:
        case C:
          return Hn(n), null;
        case se: {
          var h = n.type;
          return qr(h) && Bu(n), Hn(n), null;
        }
        case ve: {
          var g = n.stateNode;
          if (tl(n), Iu(n), Zd(), g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null), e === null || e.child === null) {
            var T = Po();
            if (T)
              ws(n);
            else if (e !== null) {
              var _ = e.memoizedState;
              // Check if this is a client root
              (!_.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (n.flags & St) !== xe) && (n.flags |= Nt, us());
            }
          }
          return Ip(e, n), Hn(n), null;
        }
        case ce: {
          Gd(n);
          var O = pv(), L = n.type;
          if (e !== null && n.stateNode != null)
            ly(e, n, L, f, O), e.ref !== n.ref && oy(n);
          else {
            if (!f) {
              if (n.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hn(n), null;
            }
            var I = Kd(), ne = Po();
            if (ne)
              Sd() && ws(n);
            else {
              var Ee = jr(L, f, O, I, n);
              uy(Ee, n, !1, !1), n.stateNode = Ee;
            }
            n.ref !== null && oy(n);
          }
          return Hn(n), null;
        }
        case Xe: {
          var $e = f;
          if (e && n.stateNode != null) {
            var Re = e.memoizedProps;
            sy(e, n, Re, $e);
          } else {
            if (typeof $e != "string" && n.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            pv(), Kd();
            var Ue = Po();
            Ue ? Qu() && ws(n) : n.stateNode = gd($e);
          }
          return Hn(n), null;
        }
        case me: {
          rl(n);
          var at = n.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = iw(e, n, at);
            if (!Tt)
              return n.flags & Sn ? n : null;
          }
          if ((n.flags & Ie) !== xe)
            return n.lanes = l, (n.mode & Ft) !== At && xp(n), n;
          var dt = at !== null, pn = e !== null && e.memoizedState !== null;
          if (dt !== pn && dt) {
            var sn = n.child;
            if (sn.flags |= Kn, (n.mode & Yt) !== At) {
              var W = e === null && (n.memoizedProps.unstable_avoidThisFallback !== !0 || !ye);
              W || Wd(ui.current, vv) ? t0() : oh();
            }
          }
          var pe = n.updateQueue;
          if (pe !== null && (n.flags |= k), Hn(n), (n.mode & Ft) !== At && dt) {
            var Y = n.child;
            Y !== null && (n.treeBaseDuration -= Y.treeBaseDuration);
          }
          return null;
        }
        case Ve:
          return tl(n), Ip(e, n), e === null && (n.stateNode.containerInfo, void 0), Hn(n), null;
        case et:
          var ze = n.type._context;
          return wd(ze, n), Hn(n), null;
        case G: {
          var it = n.type;
          return qr(it) && Bu(n), Hn(n), null;
        }
        case be: {
          rl(n);
          var Le = n.memoizedState;
          if (Le === null)
            return Hn(n), null;
          var wt = (n.flags & Ie) !== xe, Rt = Le.rendering;
          if (Rt === null)
            if (wt)
              xs(Le, !1);
            else {
              var cn = r0() && (e === null || (e.flags & Ie) === xe);
              if (!cn)
                for (var Ut = n.child; Ut !== null; ) {
                  var gn = Lc(Ut);
                  if (gn !== null) {
                    wt = !0, n.flags |= Ie, xs(Le, !1);
                    var Gt = gn.updateQueue;
                    return Gt !== null && (n.updateQueue = Gt, n.flags |= k), n.subtreeFlags = xe, iT(n, l), ka(n, Jd(ui.current, hs)), n.child;
                  }
                  Ut = Ut.sibling;
                }
              Le.tail !== null && En() > Cy() && (n.flags |= Ie, wt = !0, xs(Le, !1), n.lanes = zl);
            }
          else {
            if (!wt) {
              var bn = Lc(Rt);
              if (bn !== null) {
                n.flags |= Ie, wt = !0;
                var nr = bn.updateQueue;
                if (nr !== null && (n.updateQueue = nr, n.flags |= k), xs(Le, !0), Le.tail === null && Le.tailMode === "hidden" && !Rt.alternate && !Ku())
                  return Hn(n), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                En() * 2 - Le.renderingStartTime > Cy() && l !== gr && (n.flags |= Ie, wt = !0, xs(Le, !1), n.lanes = zl);
            }
            if (Le.isBackwards)
              Rt.sibling = n.child, n.child = Rt;
            else {
              var Bn = Le.last;
              Bn !== null ? Bn.sibling = Rt : n.child = Rt, Le.last = Rt;
            }
          }
          if (Le.tail !== null) {
            var $r = Le.tail;
            Le.rendering = $r, Le.tail = $r.sibling, Le.renderingStartTime = En(), $r.sibling = null;
            var on = ui.current;
            return wt ? on = Jd(on, hs) : on = nl(on), ka(n, on), $r;
          }
          return Hn(n), null;
        }
        case re:
          break;
        case Q:
        case De: {
          ah(n);
          var ji = n.memoizedState, Va = ji !== null;
          if (e !== null) {
            var Ls = e.memoizedState, ki = Ls !== null;
            ki !== Va && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Z && (n.flags |= Kn);
          }
          return !Va || (n.mode & Yt) === At ? Hn(n) : Jn(Di, gr) && (Hn(n), n.subtreeFlags & (N | k) && (n.flags |= Kn)), null;
        }
        case Ge:
          return null;
        case tt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + n.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function aw(e, n, l) {
      switch (as(n), n.tag) {
        case se: {
          var f = n.type;
          qr(f) && Bu(n);
          var h = n.flags;
          return h & Sn ? (n.flags = h & ~Sn | Ie, (n.mode & Ft) !== At && xp(n), n) : null;
        }
        case ve: {
          n.stateNode, tl(n), Iu(n), Zd();
          var g = n.flags;
          return (g & Sn) !== xe && (g & Ie) === xe ? (n.flags = g & ~Sn | Ie, n) : null;
        }
        case ce:
          return Gd(n), null;
        case me: {
          rl(n);
          var T = n.memoizedState;
          if (T !== null && T.dehydrated !== null && n.alternate === null)
            throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
          var _ = n.flags;
          return _ & Sn ? (n.flags = _ & ~Sn | Ie, (n.mode & Ft) !== At && xp(n), n) : null;
        }
        case be:
          return rl(n), null;
        case Ve:
          return tl(n), null;
        case et:
          var O = n.type._context;
          return wd(O, n), null;
        case Q:
        case De:
          return ah(n), null;
        case Ge:
          return null;
        default:
          return null;
      }
    }
    function ow(e, n, l) {
      switch (as(n), n.tag) {
        case se: {
          var f = n.type.childContextTypes;
          f != null && Bu(n);
          break;
        }
        case ve: {
          n.stateNode, tl(n), Iu(n), Zd();
          break;
        }
        case ce: {
          Gd(n);
          break;
        }
        case Ve:
          tl(n);
          break;
        case me:
          rl(n);
          break;
        case be:
          rl(n);
          break;
        case et:
          var h = n.type._context;
          wd(h, n);
          break;
        case Q:
        case De:
          ah(n);
          break;
      }
    }
    function fy(e, n, l, f, h, g, T, _, O) {
      var L = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(l, L);
      } catch (I) {
        this.onError(I);
      }
    }
    var dy = fy;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var qp = document.createElement("react");
      dy = function(n, l, f, h, g, T, _, O, L) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var I = document.createEvent("Event"), ne = !1, Ee = !0, $e = window.event, Re = Object.getOwnPropertyDescriptor(window, "event");
        function Ue() {
          qp.removeEventListener(pe, Tt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = $e);
        }
        var at = Array.prototype.slice.call(arguments, 3);
        function Tt() {
          ne = !0, Ue(), l.apply(f, at), Ee = !1;
        }
        var dt, pn = !1, sn = !1;
        function W(Y) {
          if (dt = Y.error, pn = !0, dt === null && Y.colno === 0 && Y.lineno === 0 && (sn = !0), Y.defaultPrevented && dt != null && typeof dt == "object")
            try {
              dt._suppressLogging = !0;
            } catch {
            }
        }
        var pe = "react-" + (n || "invokeguardedcallback");
        if (window.addEventListener("error", W), qp.addEventListener(pe, Tt, !1), I.initEvent(pe, !1, !1), qp.dispatchEvent(I), Re && Object.defineProperty(window, "event", Re), ne && Ee && (pn ? sn && (dt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : dt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(dt)), window.removeEventListener("error", W), !ne)
          return Ue(), fy.apply(this, arguments);
      };
    }
    var uw = dy, ff = !1, df = null, lw = {
      onError: function(e) {
        ff = !0, df = e;
      }
    };
    function sw(e, n, l, f, h, g, T, _, O) {
      ff = !1, df = null, uw.apply(lw, arguments);
    }
    function cw() {
      if (ff) {
        var e = df;
        return ff = !1, df = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var py = null;
    py = /* @__PURE__ */ new Set();
    var fw = typeof WeakSet == "function" ? WeakSet : Set, yt = null;
    function dw(e) {
      sw(null, function() {
        throw e;
      }), cw();
    }
    var pw = function(e, n) {
      if (n.props = e.memoizedProps, n.state = e.memoizedState, e.mode & Ft)
        try {
          Ua(), n.componentWillUnmount();
        } finally {
          Fa(e);
        }
      else
        n.componentWillUnmount();
    };
    function hw(e, n, l) {
      try {
        pw(e, l);
      } catch (f) {
        Qn(e, n, f);
      }
    }
    function pf(e, n) {
      var l = e.ref;
      if (l !== null)
        if (typeof l == "function") {
          var f;
          try {
            if (U && q && e.mode & Ft)
              try {
                Ua(), f = l(null);
              } finally {
                Fa(e);
              }
            else
              f = l(null);
          } catch (h) {
            Qn(e, n, h);
          }
          typeof f == "function" && s("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ce(e));
        } else
          l.current = null;
    }
    function hf(e, n, l) {
      try {
        l();
      } catch (f) {
        Qn(e, n, f);
      }
    }
    var hy = !1;
    function mw(e, n) {
      Sc(e.containerInfo), yt = n, vw();
      var l = hy;
      return hy = !1, l;
    }
    function vw() {
      for (; yt !== null; ) {
        var e = yt, n = e.child;
        (e.subtreeFlags & ma) !== xe && n !== null ? (n.return = e, yt = n) : yw();
      }
    }
    function yw() {
      for (; yt !== null; ) {
        var e = yt;
        p(e);
        try {
          gw(e);
        } catch (l) {
          Qn(e, e.return, l);
        }
        o();
        var n = e.sibling;
        if (n !== null) {
          n.return = e.return, yt = n;
          return;
        }
        yt = e.return;
      }
    }
    function gw(e) {
      var n = e.alternate, l = e.flags;
      if ((l & Nt) !== xe) {
        switch (p(e), e.tag) {
          case K:
          case Pe:
          case D:
            break;
          case se: {
            if (n !== null) {
              var f = n.memoizedProps, h = n.memoizedState, g = e.stateNode;
              e.type === e.elementType && !Fo && (g.props !== e.memoizedProps && s("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ce(e) || "instance"), g.state !== e.memoizedState && s("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ce(e) || "instance"));
              var T = g.getSnapshotBeforeUpdate(e.elementType === e.type ? f : Je(e.type, f), h);
              {
                var _ = py;
                T === void 0 && !_.has(e.type) && (_.add(e.type), s("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ce(e)));
              }
              g.__reactInternalSnapshotBeforeUpdate = T;
            }
            break;
          }
          case ve: {
            {
              var O = e.stateNode;
              Zl(O.containerInfo);
            }
            break;
          }
          case ce:
          case Xe:
          case Ve:
          case G:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        o();
      }
    }
    function Uo(e, n, l) {
      var f = n.updateQueue, h = f !== null ? f.lastEffect : null;
      if (h !== null) {
        var g = h.next, T = g;
        do {
          if ((T.tag & e) === e) {
            var _ = T.destroy;
            T.destroy = void 0, _ !== void 0 && ((e & Ci) !== il && ks(!0), hf(n, l, _), (e & Ci) !== il && ks(!1));
          }
          T = T.next;
        } while (T !== g);
      }
    }
    function _s(e, n) {
      var l = n.updateQueue, f = l !== null ? l.lastEffect : null;
      if (f !== null) {
        var h = f.next, g = h;
        do {
          if ((g.tag & e) === e) {
            var T = g.create;
            (e & Ci) !== il && ks(!0), g.destroy = T(), (e & Ci) !== il && ks(!1);
            {
              var _ = g.destroy;
              if (_ !== void 0 && typeof _ != "function") {
                var O = void 0;
                (g.tag & Ri) !== xe ? O = "useLayoutEffect" : (g.tag & Ci) !== xe ? O = "useInsertionEffect" : O = "useEffect";
                var L = void 0;
                _ === null ? L = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof _.then == "function" ? L = `

It looks like you wrote ` + O + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + O + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : L = " You returned: " + _, s("%s must not return anything besides a function, which is used for clean-up.%s", O, L);
              }
            }
          }
          g = g.next;
        } while (g !== h);
      }
    }
    function bw(e, n) {
      if ((n.flags & k) !== xe)
        switch (n.tag) {
          case Qe: {
            var l = n.stateNode.passiveEffectDuration, f = n.memoizedProps, h = f.id, g = f.onPostCommit, T = Uv(), _ = n.alternate === null ? "mount" : "update";
            Fv() && (_ = "nested-update"), typeof g == "function" && g(h, _, l, T);
            var O = n.return;
            e:
              for (; O !== null; ) {
                switch (O.tag) {
                  case ve:
                    var L = O.stateNode;
                    L.passiveEffectDuration += l;
                    break e;
                  case Qe:
                    var I = O.stateNode;
                    I.passiveEffectDuration += l;
                    break e;
                }
                O = O.return;
              }
            break;
          }
        }
    }
    function Sw(e, n, l, f) {
      if ((l.flags & va) !== xe)
        switch (l.tag) {
          case K:
          case Pe:
          case D: {
            if (l.mode & Ft)
              try {
                Ua(), _s(Ri | fr, l);
              } finally {
                Fa(l);
              }
            else
              _s(Ri | fr, l);
            break;
          }
          case se: {
            var h = l.stateNode;
            if (l.flags & k)
              if (n === null)
                if (l.type === l.elementType && !Fo && (h.props !== l.memoizedProps && s("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ce(l) || "instance"), h.state !== l.memoizedState && s("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ce(l) || "instance")), l.mode & Ft)
                  try {
                    Ua(), h.componentDidMount();
                  } finally {
                    Fa(l);
                  }
                else
                  h.componentDidMount();
              else {
                var g = l.elementType === l.type ? n.memoizedProps : Je(l.type, n.memoizedProps), T = n.memoizedState;
                if (l.type === l.elementType && !Fo && (h.props !== l.memoizedProps && s("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ce(l) || "instance"), h.state !== l.memoizedState && s("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ce(l) || "instance")), l.mode & Ft)
                  try {
                    Ua(), h.componentDidUpdate(g, T, h.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Fa(l);
                  }
                else
                  h.componentDidUpdate(g, T, h.__reactInternalSnapshotBeforeUpdate);
              }
            var _ = l.updateQueue;
            _ !== null && (l.type === l.elementType && !Fo && (h.props !== l.memoizedProps && s("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ce(l) || "instance"), h.state !== l.memoizedState && s("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ce(l) || "instance")), nv(l, _, h));
            break;
          }
          case ve: {
            var O = l.updateQueue;
            if (O !== null) {
              var L = null;
              if (l.child !== null)
                switch (l.child.tag) {
                  case ce:
                    L = Ro(l.child.stateNode);
                    break;
                  case se:
                    L = l.child.stateNode;
                    break;
                }
              nv(l, O, L);
            }
            break;
          }
          case ce: {
            l.stateNode, n === null && l.flags & k && (l.type, l.memoizedProps);
            break;
          }
          case Xe:
            break;
          case Ve:
            break;
          case Qe: {
            {
              var I = l.memoizedProps, ne = I.onCommit, Ee = I.onRender, $e = l.stateNode.effectDuration, Re = Uv(), Ue = n === null ? "mount" : "update";
              Fv() && (Ue = "nested-update"), typeof Ee == "function" && Ee(l.memoizedProps.id, Ue, l.actualDuration, l.treeBaseDuration, l.actualStartTime, Re);
              {
                typeof ne == "function" && ne(l.memoizedProps.id, Ue, $e, Re), l0(l);
                var at = l.return;
                e:
                  for (; at !== null; ) {
                    switch (at.tag) {
                      case ve:
                        var Tt = at.stateNode;
                        Tt.effectDuration += $e;
                        break e;
                      case Qe:
                        var dt = at.stateNode;
                        dt.effectDuration += $e;
                        break e;
                    }
                    at = at.return;
                  }
              }
            }
            break;
          }
          case me:
            break;
          case be:
          case G:
          case re:
          case Q:
          case De:
          case tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      l.flags & Et && Tw(l);
    }
    function Ew(e, n) {
      for (var l = null, f = e; ; ) {
        if (f.tag === ce) {
          if (l === null) {
            l = f;
            try {
              var h = f.stateNode;
              n ? Oo(h) : ku(f.stateNode, f.memoizedProps);
            } catch (T) {
              Qn(e, e.return, T);
            }
          }
        } else if (f.tag === Xe) {
          if (l === null)
            try {
              var g = f.stateNode;
              n ? Zi(g) : es(g, f.memoizedProps);
            } catch (T) {
              Qn(e, e.return, T);
            }
        } else if (!((f.tag === Q || f.tag === De) && f.memoizedState !== null && f !== e)) {
          if (f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
        }
        if (f === e)
          return;
        for (; f.sibling === null; ) {
          if (f.return === null || f.return === e)
            return;
          l === f && (l = null), f = f.return;
        }
        l === f && (l = null), f.sibling.return = f.return, f = f.sibling;
      }
    }
    function Tw(e) {
      var n = e.ref;
      if (n !== null) {
        var l = e.stateNode, f;
        switch (e.tag) {
          case ce:
            f = Ro(l);
            break;
          default:
            f = l;
        }
        if (typeof n == "function") {
          var h;
          if (e.mode & Ft)
            try {
              Ua(), h = n(f);
            } finally {
              Fa(e);
            }
          else
            h = n(f);
          typeof h == "function" && s("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ce(e));
        } else
          n.hasOwnProperty("current") || s("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ce(e)), n.current = f;
      }
    }
    function ww(e) {
      var n = e.alternate;
      n !== null && (n.return = null), e.return = null;
    }
    function my(e) {
      var n = e.alternate;
      n !== null && (e.alternate = null, my(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === ce && e.stateNode, e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function xw(e) {
      for (var n = e.return; n !== null; ) {
        if (vy(n))
          return n;
        n = n.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vy(e) {
      return e.tag === ce || e.tag === ve || e.tag === Ve;
    }
    function yy(e) {
      var n = e;
      e:
        for (; ; ) {
          for (; n.sibling === null; ) {
            if (n.return === null || vy(n.return))
              return null;
            n = n.return;
          }
          for (n.sibling.return = n.return, n = n.sibling; n.tag !== ce && n.tag !== Xe && n.tag !== oe; ) {
            if (n.flags & N || n.child === null || n.tag === Ve)
              continue e;
            n.child.return = n, n = n.child;
          }
          if (!(n.flags & N))
            return n.stateNode;
        }
    }
    function _w(e) {
      var n = xw(e);
      switch (n.tag) {
        case ce: {
          var l = n.stateNode;
          n.flags & Se && (n.flags &= ~Se);
          var f = yy(e);
          Hp(e, f, l);
          break;
        }
        case ve:
        case Ve: {
          var h = n.stateNode.containerInfo, g = yy(e);
          Vp(e, g, h);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Vp(e, n, l) {
      var f = e.tag, h = f === ce || f === Xe;
      if (h) {
        var g = e.stateNode;
        n ? Ma(l, g, n) : sr(l, g);
      } else if (f !== Ve) {
        var T = e.child;
        if (T !== null) {
          Vp(T, n, l);
          for (var _ = T.sibling; _ !== null; )
            Vp(_, n, l), _ = _.sibling;
        }
      }
    }
    function Hp(e, n, l) {
      var f = e.tag, h = f === ce || f === Xe;
      if (h) {
        var g = e.stateNode;
        n ? Xl(l, g, n) : Jl(l, g);
      } else if (f !== Ve) {
        var T = e.child;
        if (T !== null) {
          Hp(T, n, l);
          for (var _ = T.sibling; _ !== null; )
            Hp(_, n, l), _ = _.sibling;
        }
      }
    }
    var Yn = null, ci = !1;
    function Cw(e, n, l) {
      {
        var f = n;
        e:
          for (; f !== null; ) {
            switch (f.tag) {
              case ce: {
                Yn = f.stateNode, ci = !1;
                break e;
              }
              case ve: {
                Yn = f.stateNode.containerInfo, ci = !0;
                break e;
              }
              case Ve: {
                Yn = f.stateNode.containerInfo, ci = !0;
                break e;
              }
            }
            f = f.return;
          }
        if (Yn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        gy(e, n, l), Yn = null, ci = !1;
      }
      ww(l);
    }
    function Bo(e, n, l) {
      for (var f = l.child; f !== null; )
        gy(e, n, f), f = f.sibling;
    }
    function gy(e, n, l) {
      switch (fd(l), l.tag) {
        case ce:
          pf(l, n);
        case Xe: {
          {
            var f = Yn, h = ci;
            Yn = null, Bo(e, n, l), Yn = f, ci = h, Yn !== null && (ci ? Tn(Yn, l.stateNode) : Du(Yn, l.stateNode));
          }
          return;
        }
        case oe: {
          Yn !== null && (ci ? Kl(Yn, l.stateNode) : Au(Yn, l.stateNode));
          return;
        }
        case Ve: {
          {
            var g = Yn, T = ci;
            Yn = l.stateNode.containerInfo, ci = !0, Bo(e, n, l), Yn = g, ci = T;
          }
          return;
        }
        case K:
        case Pe:
        case C:
        case D: {
          {
            var _ = l.updateQueue;
            if (_ !== null) {
              var O = _.lastEffect;
              if (O !== null) {
                var L = O.next, I = L;
                do {
                  var ne = I, Ee = ne.destroy, $e = ne.tag;
                  Ee !== void 0 && (($e & Ci) !== il ? hf(l, n, Ee) : ($e & Ri) !== il && (l.mode & Ft ? (Ua(), hf(l, n, Ee), Fa(l)) : hf(l, n, Ee))), I = I.next;
                } while (I !== L);
              }
            }
          }
          Bo(e, n, l);
          return;
        }
        case se: {
          {
            pf(l, n);
            var Re = l.stateNode;
            typeof Re.componentWillUnmount == "function" && hw(l, n, Re);
          }
          Bo(e, n, l);
          return;
        }
        case re: {
          Bo(e, n, l);
          return;
        }
        case Q: {
          Bo(e, n, l);
          break;
        }
        default: {
          Bo(e, n, l);
          return;
        }
      }
    }
    function Rw(e) {
      e.memoizedState;
    }
    function by(e) {
      var n = e.updateQueue;
      if (n !== null) {
        e.updateQueue = null;
        var l = e.stateNode;
        l === null && (l = e.stateNode = new fw()), n.forEach(function(f) {
          var h = m0.bind(null, e, f);
          l.has(f) || (l.add(f), f.then(h, h));
        });
      }
    }
    function Ow(e, n, l) {
      p(n), Sy(n, e), p(n);
    }
    function $i(e, n, l) {
      var f = n.deletions;
      if (f !== null)
        for (var h = 0; h < f.length; h++) {
          var g = f[h];
          try {
            Cw(e, n, g);
          } catch (O) {
            Qn(g, n, O);
          }
        }
      var T = v();
      if (n.subtreeFlags & yi)
        for (var _ = n.child; _ !== null; )
          p(_), Sy(_, e), _ = _.sibling;
      p(T);
    }
    function Sy(e, n, l) {
      var f = e.alternate, h = e.flags;
      switch (e.tag) {
        case K:
        case Pe:
        case C:
        case D: {
          if ($i(n, e), Ai(e), h & k) {
            try {
              Uo(Ci | fr, e, e.return), _s(Ci | fr, e);
            } catch (Y) {
              Qn(e, e.return, Y);
            }
            if (e.mode & Ft) {
              try {
                Ua(), Uo(Ri | fr, e, e.return);
              } catch (Y) {
                Qn(e, e.return, Y);
              }
              Fa(e);
            } else
              try {
                Uo(Ri | fr, e, e.return);
              } catch (Y) {
                Qn(e, e.return, Y);
              }
          }
          return;
        }
        case se: {
          $i(n, e), Ai(e), h & Et && f !== null && pf(f, f.return);
          return;
        }
        case ce: {
          $i(n, e), Ai(e), h & Et && f !== null && pf(f, f.return);
          {
            if (e.flags & Se) {
              var g = e.stateNode;
              try {
              } catch (Y) {
                Qn(e, e.return, Y);
              }
            }
            if (h & k) {
              var T = e.stateNode;
              if (T != null) {
                var _ = e.memoizedProps, O = f !== null ? f.memoizedProps : _, L = e.type, I = e.updateQueue;
                if (e.updateQueue = null, I !== null)
                  try {
                    _n(T, I, L, O, _, e);
                  } catch (Y) {
                    Qn(e, e.return, Y);
                  }
              }
            }
          }
          return;
        }
        case Xe: {
          if ($i(n, e), Ai(e), h & k) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var ne = e.stateNode, Ee = e.memoizedProps, $e = f !== null ? f.memoizedProps : Ee;
            try {
              vn(ne, $e, Ee);
            } catch (Y) {
              Qn(e, e.return, Y);
            }
          }
          return;
        }
        case ve: {
          $i(n, e), Ai(e);
          return;
        }
        case Ve: {
          $i(n, e), Ai(e);
          return;
        }
        case me: {
          $i(n, e), Ai(e);
          var Re = e.child;
          if (Re.flags & Kn) {
            var Ue = Re.stateNode, at = Re.memoizedState, Tt = at !== null;
            if (Ue.isHidden = Tt, Tt) {
              var dt = Re.alternate !== null && Re.alternate.memoizedState !== null;
              dt || e0();
            }
          }
          if (h & k) {
            try {
              Rw(e);
            } catch (Y) {
              Qn(e, e.return, Y);
            }
            by(e);
          }
          return;
        }
        case Q: {
          if (f !== null && f.memoizedState, $i(n, e), Ai(e), h & Kn) {
            var pn = e.stateNode, sn = e.memoizedState, W = sn !== null, pe = e;
            pn.isHidden = W, Ew(pe, W);
          }
          return;
        }
        case be: {
          $i(n, e), Ai(e), h & k && by(e);
          return;
        }
        case re:
          return;
        default: {
          $i(n, e), Ai(e);
          return;
        }
      }
    }
    function Ai(e) {
      var n = e.flags;
      if (n & N) {
        try {
          _w(e);
        } catch (l) {
          Qn(e, e.return, l);
        }
        e.flags &= ~N;
      }
      n & jn && (e.flags &= ~jn);
    }
    function Nw(e, n, l) {
      yt = e, Mw(e, n, l);
    }
    function Mw(e, n, l) {
      for (e.mode & Yt; yt !== null; ) {
        var f = yt, h = f.child;
        (f.subtreeFlags & va) !== xe && h !== null ? (h.return = f, yt = h) : $w(e, n, l);
      }
    }
    function $w(e, n, l) {
      for (; yt !== null; ) {
        var f = yt;
        if ((f.flags & va) !== xe) {
          var h = f.alternate;
          p(f);
          try {
            Sw(n, h, f, l);
          } catch (T) {
            Qn(f, f.return, T);
          }
          o();
        }
        if (f === e) {
          yt = null;
          return;
        }
        var g = f.sibling;
        if (g !== null) {
          g.return = f.return, yt = g;
          return;
        }
        yt = f.return;
      }
    }
    function Aw(e, n, l, f) {
      yt = n, Dw(n, e, l, f);
    }
    function Dw(e, n, l, f) {
      for (; yt !== null; ) {
        var h = yt, g = h.child;
        (h.subtreeFlags & gi) !== xe && g !== null ? (g.return = h, yt = g) : Pw(e, n, l, f);
      }
    }
    function Pw(e, n, l, f) {
      for (; yt !== null; ) {
        var h = yt;
        if ((h.flags & en) !== xe) {
          p(h);
          try {
            jw(n, h, l, f);
          } catch (T) {
            Qn(h, h.return, T);
          }
          o();
        }
        if (h === e) {
          yt = null;
          return;
        }
        var g = h.sibling;
        if (g !== null) {
          g.return = h.return, yt = g;
          return;
        }
        yt = h.return;
      }
    }
    function jw(e, n, l, f) {
      switch (n.tag) {
        case K:
        case Pe:
        case D: {
          if (n.mode & Ft) {
            wp();
            try {
              _s(Oi | fr, n);
            } finally {
              Tp(n);
            }
          } else
            _s(Oi | fr, n);
          break;
        }
      }
    }
    function kw(e) {
      yt = e, zw();
    }
    function zw() {
      for (; yt !== null; ) {
        var e = yt, n = e.child;
        if ((yt.flags & Oe) !== xe) {
          var l = e.deletions;
          if (l !== null) {
            for (var f = 0; f < l.length; f++) {
              var h = l[f];
              yt = h, Uw(h, e);
            }
            {
              var g = e.alternate;
              if (g !== null) {
                var T = g.child;
                if (T !== null) {
                  g.child = null;
                  do {
                    var _ = T.sibling;
                    T.sibling = null, T = _;
                  } while (T !== null);
                }
              }
            }
            yt = e;
          }
        }
        (e.subtreeFlags & gi) !== xe && n !== null ? (n.return = e, yt = n) : Lw();
      }
    }
    function Lw() {
      for (; yt !== null; ) {
        var e = yt;
        (e.flags & en) !== xe && (p(e), Fw(e), o());
        var n = e.sibling;
        if (n !== null) {
          n.return = e.return, yt = n;
          return;
        }
        yt = e.return;
      }
    }
    function Fw(e) {
      switch (e.tag) {
        case K:
        case Pe:
        case D: {
          e.mode & Ft ? (wp(), Uo(Oi | fr, e, e.return), Tp(e)) : Uo(Oi | fr, e, e.return);
          break;
        }
      }
    }
    function Uw(e, n) {
      for (; yt !== null; ) {
        var l = yt;
        p(l), Iw(l, n), o();
        var f = l.child;
        f !== null ? (f.return = l, yt = f) : Bw(e);
      }
    }
    function Bw(e) {
      for (; yt !== null; ) {
        var n = yt, l = n.sibling, f = n.return;
        if (my(n), n === e) {
          yt = null;
          return;
        }
        if (l !== null) {
          l.return = f, yt = l;
          return;
        }
        yt = f;
      }
    }
    function Iw(e, n) {
      switch (e.tag) {
        case K:
        case Pe:
        case D: {
          e.mode & Ft ? (wp(), Uo(Oi, e, n), Tp(e)) : Uo(Oi, e, n);
          break;
        }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Cs = Symbol.for;
      Cs("selector.component"), Cs("selector.has_pseudo_class"), Cs("selector.role"), Cs("selector.test_id"), Cs("selector.text");
    }
    var qw = c.ReactCurrentActQueue;
    function Vw(e) {
      {
        var n = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), l = typeof jest < "u";
        return l && n !== !1;
      }
    }
    function Ey() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && qw.current !== null && s("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Hw = Math.ceil, Yp = c.ReactCurrentDispatcher, Qp = c.ReactCurrentOwner, wr = c.ReactCurrentBatchConfig, ua = c.ReactCurrentActQueue, dr = (
      /*             */
      0
    ), Ty = (
      /*               */
      1
    ), xr = (
      /*                */
      2
    ), la = (
      /*                */
      4
    ), sa = 0, Rs = 1, Io = 2, mf = 3, Os = 4, wy = 5, Kp = 6, Dt = dr, pr = null, dn = null, hr = we, Di = we, Gp = Br(we), Pn = sa, Ns = null, vf = we, Ms = we, yf = we, $s = null, _r = null, Wp = 0, xy = 500, _y = 1 / 0, Yw = 500, ca = null;
    function Jp() {
      _y = En() + Yw;
    }
    function Cy() {
      return _y;
    }
    var gf = !1, Xp = null, ol = null, ul = !1, Ba = null, As = we, Zp = [], eh = null, Qw = 50, Ds = 0, th = null, nh = !1, bf = !1, Kw = 50, ll = 0, Sf = null, Ps = Qt, Ef = we, Ry = !1;
    function Tf() {
      return pr;
    }
    function fi() {
      return (Dt & (xr | la)) !== dr ? En() : (Ps !== Qt || (Ps = En()), Ps);
    }
    function sl(e) {
      var n = e.mode;
      if ((n & Yt) === At)
        return Ke;
      if ((Dt & xr) !== dr && hr !== we)
        return xn(hr);
      var l = Gu() !== Ed;
      if (l) {
        if (wr.transition !== null) {
          var f = wr.transition;
          f._updatedFibers || (f._updatedFibers = /* @__PURE__ */ new Set()), f._updatedFibers.add(e);
        }
        return Ef === nn && (Ef = ql()), Ef;
      }
      var h = Ji();
      if (h !== nn)
        return h;
      var g = Pu();
      return g;
    }
    function Gw(e) {
      var n = e.mode;
      return (n & Yt) === At ? Ke : pc();
    }
    function tr(e, n, l, f) {
      y0(), Ry && s("useInsertionEffect must not schedule updates."), nh && (bf = !0), _o(e, l, f), (Dt & xr) !== we && e === pr ? b0(n) : (S0(n), e === pr && ((Dt & xr) === dr && (Ms = bt(Ms, l)), Pn === Os && Ia(e, hr)), Kr(e, f), l === Ke && Dt === dr && (n.mode & Yt) === At && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ua.isBatchingLegacy && (Jp(), Yu()));
    }
    function Ww(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Dt & xr) !== dr
      );
    }
    function Kr(e, n) {
      var l = e.callbackNode;
      fc(e, n);
      var f = Ru(e, e === pr ? hr : we);
      if (f === we) {
        l !== null && By(l), e.callbackNode = null, e.callbackPriority = nn;
        return;
      }
      var h = Ki(f), g = e.callbackPriority;
      if (g === h && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ua.current !== null && l !== sh)) {
        l == null && g !== Ke && s("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      l != null && By(l);
      var T;
      if (h === Ke)
        e.tag === yn ? (ua.isBatchingLegacy !== null && (ua.didScheduleLegacyUpdate = !0), Vr(My.bind(null, e))) : xc(My.bind(null, e)), Cf(ho, $a), T = null;
      else {
        var _;
        switch (Na(f)) {
          case ni:
            _ = ho;
            break;
          case Wi:
            _ = qi;
            break;
          case Ra:
            _ = or;
            break;
          case Oa:
            _ = ru;
            break;
          default:
            _ = or;
            break;
        }
        T = Cf(_, Oy.bind(null, e));
      }
      e.callbackPriority = h, e.callbackNode = T;
    }
    function Oy(e, n) {
      if (gT(), Ps = Qt, Ef = we, (Dt & (xr | la)) !== dr)
        throw new Error("Should not already be working.");
      var l = e.callbackNode, f = fa();
      if (f && e.callbackNode !== l)
        return null;
      var h = Ru(e, e === pr ? hr : we);
      if (h === we)
        return null;
      var g = !Ca(e, h) && !pd(e, h) && !n, T = g ? a0(e, h) : xf(e, h);
      if (T !== sa) {
        if (T === Io) {
          var _ = _a(e);
          _ !== we && (h = _, T = rh(e, _));
        }
        if (T === Rs) {
          var O = Ns;
          throw qo(e, we), Ia(e, h), Kr(e, En()), O;
        }
        if (T === Kp)
          Ia(e, h);
        else {
          var L = !Ca(e, h), I = e.current.alternate;
          if (L && !Xw(I)) {
            if (T = xf(e, h), T === Io) {
              var ne = _a(e);
              ne !== we && (h = ne, T = rh(e, ne));
            }
            if (T === Rs) {
              var Ee = Ns;
              throw qo(e, we), Ia(e, h), Kr(e, En()), Ee;
            }
          }
          e.finishedWork = I, e.finishedLanes = h, Jw(e, T, h);
        }
      }
      return Kr(e, En()), e.callbackNode === l ? Oy.bind(null, e) : null;
    }
    function rh(e, n) {
      var l = $s;
      if (Ti(e)) {
        var f = qo(e, n);
        f.flags |= St, bc(e.containerInfo);
      }
      var h = xf(e, n);
      if (h !== Io) {
        var g = _r;
        _r = l, g !== null && Ny(g);
      }
      return h;
    }
    function Ny(e) {
      _r === null ? _r = e : _r.push.apply(_r, e);
    }
    function Jw(e, n, l) {
      switch (n) {
        case sa:
        case Rs:
          throw new Error("Root did not complete. This is a bug in React.");
        case Io: {
          Vo(e, _r, ca);
          break;
        }
        case mf: {
          if (Ia(e, l), dc(l) && // do not delay if we're inside an act() scope
          !Iy()) {
            var f = Wp + xy - En();
            if (f > 10) {
              var h = Ru(e, we);
              if (h !== we)
                break;
              var g = e.suspendedLanes;
              if (!Gi(g, l)) {
                fi(), Nu(e, g);
                break;
              }
              e.timeoutHandle = ju(Vo.bind(null, e, _r, ca), f);
              break;
            }
          }
          Vo(e, _r, ca);
          break;
        }
        case Os: {
          if (Ia(e, l), Bl(l))
            break;
          if (!Iy()) {
            var T = sc(e, l), _ = T, O = En() - _, L = v0(O) - O;
            if (L > 10) {
              e.timeoutHandle = ju(Vo.bind(null, e, _r, ca), L);
              break;
            }
          }
          Vo(e, _r, ca);
          break;
        }
        case wy: {
          Vo(e, _r, ca);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Xw(e) {
      for (var n = e; ; ) {
        if (n.flags & Cr) {
          var l = n.updateQueue;
          if (l !== null) {
            var f = l.stores;
            if (f !== null)
              for (var h = 0; h < f.length; h++) {
                var g = f[h], T = g.getSnapshot, _ = g.value;
                try {
                  if (!cr(T(), _))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var O = n.child;
        if (n.subtreeFlags & Cr && O !== null) {
          O.return = n, n = O;
          continue;
        }
        if (n === e)
          return !0;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return !0;
    }
    function Ia(e, n) {
      n = wo(n, yf), n = wo(n, Ms), Vl(e, n);
    }
    function My(e) {
      if (bT(), (Dt & (xr | la)) !== dr)
        throw new Error("Should not already be working.");
      fa();
      var n = Ru(e, we);
      if (!Jn(n, Ke))
        return Kr(e, En()), null;
      var l = xf(e, n);
      if (e.tag !== yn && l === Io) {
        var f = _a(e);
        f !== we && (n = f, l = rh(e, f));
      }
      if (l === Rs) {
        var h = Ns;
        throw qo(e, we), Ia(e, n), Kr(e, En()), h;
      }
      if (l === Kp)
        throw new Error("Root did not complete. This is a bug in React.");
      var g = e.current.alternate;
      return e.finishedWork = g, e.finishedLanes = n, Vo(e, _r, ca), Kr(e, En()), null;
    }
    function Zw(e, n) {
      var l = Dt;
      Dt |= Ty;
      try {
        return e(n);
      } finally {
        Dt = l, Dt === dr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ua.isBatchingLegacy && (Jp(), Yu());
      }
    }
    function ih(e) {
      Ba !== null && Ba.tag === yn && (Dt & (xr | la)) === dr && fa();
      var n = Dt;
      Dt |= Ty;
      var l = wr.transition, f = Ji();
      try {
        return wr.transition = null, lr(ni), e ? e() : void 0;
      } finally {
        lr(f), wr.transition = l, Dt = n, (Dt & (xr | la)) === dr && $a();
      }
    }
    function wf(e, n) {
      Fn(Gp, Di, e), Di = bt(Di, n);
    }
    function ah(e) {
      Di = Gp.current, Cn(Gp, e);
    }
    function qo(e, n) {
      e.finishedWork = null, e.finishedLanes = we;
      var l = e.timeoutHandle;
      if (l !== Mt && (e.timeoutHandle = Mt, br(l)), dn !== null)
        for (var f = dn.return; f !== null; ) {
          var h = f.alternate;
          ow(h, f), f = f.return;
        }
      pr = e;
      var g = Ho(e.current, null);
      return dn = g, hr = Di = n, Pn = sa, Ns = null, vf = we, Ms = we, yf = we, $s = null, _r = null, Y1(), w.discardPendingWarnings(), g;
    }
    function $y(e, n) {
      do {
        var l = dn;
        try {
          if (cs(), fT(), o(), Qp.current = null, l === null || l.return === null) {
            Pn = Rs, Ns = n, dn = null;
            return;
          }
          U && l.mode & Ft && of(l, !0);
          var f;
          CT(e, l.return, l, n, hr), jy(l);
        } catch (h) {
          n = h, dn === l && l !== null ? (l = l.return, dn = l) : l = dn;
          continue;
        }
        return;
      } while (!0);
    }
    function Ay() {
      var e = Yp.current;
      return Yp.current = ef, e === null ? ef : e;
    }
    function Dy(e) {
      Yp.current = e;
    }
    function e0() {
      Wp = En();
    }
    function js(e) {
      vf = bt(e, vf);
    }
    function t0() {
      Pn === sa && (Pn = mf);
    }
    function oh() {
      (Pn === sa || Pn === mf || Pn === Io) && (Pn = Os), pr !== null && (Fl(vf) || Fl(Ms)) && Ia(pr, hr);
    }
    function n0(e) {
      Pn !== Os && (Pn = Io), $s === null ? $s = [e] : $s.push(e);
    }
    function r0() {
      return Pn === sa;
    }
    function xf(e, n) {
      var l = Dt;
      Dt |= xr;
      var f = Ay();
      (pr !== e || hr !== n) && (ca = vc(), qo(e, n));
      do
        try {
          i0();
          break;
        } catch (h) {
          $y(e, h);
        }
      while (!0);
      if (cs(), Dt = l, Dy(f), dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return pr = null, hr = we, Pn;
    }
    function i0() {
      for (; dn !== null; )
        Py(dn);
    }
    function a0(e, n) {
      var l = Dt;
      Dt |= xr;
      var f = Ay();
      (pr !== e || hr !== n) && (ca = vc(), Jp(), qo(e, n));
      do
        try {
          o0();
          break;
        } catch (h) {
          $y(e, h);
        }
      while (!0);
      return cs(), Dy(f), Dt = l, dn !== null ? sa : (pr = null, hr = we, Pn);
    }
    function o0() {
      for (; dn !== null && !vr(); )
        Py(dn);
    }
    function Py(e) {
      var n = e.alternate;
      p(e);
      var l;
      (e.mode & Ft) !== At ? (Iv(e), l = uh(n, e, Di), of(e, !0)) : l = uh(n, e, Di), o(), e.memoizedProps = e.pendingProps, l === null ? jy(e) : dn = l, Qp.current = null;
    }
    function jy(e) {
      var n = e;
      do {
        var l = n.alternate, f = n.return;
        if ((n.flags & Nn) === xe) {
          p(n);
          var h = void 0;
          if ((n.mode & Ft) === At ? h = cy(l, n, Di) : (Iv(n), h = cy(l, n, Di), of(n, !1)), o(), h !== null) {
            dn = h;
            return;
          }
        } else {
          var g = aw(l, n);
          if (g !== null) {
            g.flags &= On, dn = g;
            return;
          }
          if ((n.mode & Ft) !== At) {
            of(n, !1);
            for (var T = n.actualDuration, _ = n.child; _ !== null; )
              T += _.actualDuration, _ = _.sibling;
            n.actualDuration = T;
          }
          if (f !== null)
            f.flags |= Nn, f.subtreeFlags = xe, f.deletions = null;
          else {
            Pn = Kp, dn = null;
            return;
          }
        }
        var O = n.sibling;
        if (O !== null) {
          dn = O;
          return;
        }
        n = f, dn = n;
      } while (n !== null);
      Pn === sa && (Pn = wy);
    }
    function Vo(e, n, l) {
      var f = Ji(), h = wr.transition;
      try {
        wr.transition = null, lr(ni), u0(e, n, l, f);
      } finally {
        wr.transition = h, lr(f);
      }
      return null;
    }
    function u0(e, n, l, f) {
      do
        fa();
      while (Ba !== null);
      if (g0(), (Dt & (xr | la)) !== dr)
        throw new Error("Should not already be working.");
      var h = e.finishedWork, g = e.finishedLanes;
      if (h === null)
        return null;
      if (g === we && s("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = we, h === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = nn;
      var T = bt(h.lanes, h.childLanes);
      mc(e, T), e === pr && (pr = null, dn = null, hr = we), ((h.subtreeFlags & gi) !== xe || (h.flags & gi) !== xe) && (ul || (ul = !0, eh = l, Cf(or, function() {
        return fa(), null;
      })));
      var _ = (h.subtreeFlags & (ma | yi | va | gi)) !== xe, O = (h.flags & (ma | yi | va | gi)) !== xe;
      if (_ || O) {
        var L = wr.transition;
        wr.transition = null;
        var I = Ji();
        lr(ni);
        var ne = Dt;
        Dt |= la, Qp.current = null, mw(e, h), Bv(), Ow(e, h), e.containerInfo, e.current = h, Nw(h, e, g), Ii(), Dt = ne, lr(I), wr.transition = L;
      } else
        e.current = h, Bv();
      if (ul ? (ul = !1, Ba = e, As = g) : (ll = 0, Sf = null), T = e.pendingLanes, T === we && (ol = null), lc(h.stateNode, f), Kr(e, En()), n !== null)
        for (var Ee = e.onRecoverableError, $e = 0; $e < n.length; $e++) {
          var Re = n[$e], Ue = Re.stack, at = Re.digest;
          Ee(Re.value, {
            componentStack: Ue,
            digest: at
          });
        }
      if (gf) {
        gf = !1;
        var Tt = Xp;
        throw Xp = null, Tt;
      }
      return Jn(As, Ke) && e.tag !== yn && fa(), T = e.pendingLanes, Jn(T, Ke) ? (yT(), e === th ? Ds++ : (Ds = 0, th = e)) : Ds = 0, $a(), null;
    }
    function fa() {
      if (Ba !== null) {
        var e = Na(As), n = yc(Ra, e), l = wr.transition, f = Ji();
        try {
          return wr.transition = null, lr(n), s0();
        } finally {
          lr(f), wr.transition = l;
        }
      }
      return !1;
    }
    function l0(e) {
      Zp.push(e), ul || (ul = !0, Cf(or, function() {
        return fa(), null;
      }));
    }
    function s0() {
      if (Ba === null)
        return !1;
      var e = eh;
      eh = null;
      var n = Ba, l = As;
      if (Ba = null, As = we, (Dt & (xr | la)) !== dr)
        throw new Error("Cannot flush passive effects while already rendering.");
      nh = !0, bf = !1;
      var f = Dt;
      Dt |= la, kw(n.current), Aw(n, n.current, l, e);
      {
        var h = Zp;
        Zp = [];
        for (var g = 0; g < h.length; g++) {
          var T = h[g];
          bw(n, T);
        }
      }
      Dt = f, $a(), bf ? n === Sf ? ll++ : (ll = 0, Sf = n) : ll = 0, nh = !1, bf = !1, Ea(n);
      {
        var _ = n.current.stateNode;
        _.effectDuration = 0, _.passiveEffectDuration = 0;
      }
      return !0;
    }
    function ky(e) {
      return ol !== null && ol.has(e);
    }
    function c0(e) {
      ol === null ? ol = /* @__PURE__ */ new Set([e]) : ol.add(e);
    }
    function f0(e) {
      gf || (gf = !0, Xp = e);
    }
    var d0 = f0;
    function zy(e, n, l) {
      var f = uf(l, n), h = Vv(e, f, Ke), g = zo(e, h, Ke), T = fi();
      g !== null && (_o(g, Ke, T), Kr(g, T));
    }
    function Qn(e, n, l) {
      if (dw(l), ks(!1), e.tag === ve) {
        zy(e, e, l);
        return;
      }
      var f = null;
      for (f = e.return; f !== null; ) {
        if (f.tag === ve) {
          zy(f, e, l);
          return;
        } else if (f.tag === se) {
          var h = f.type, g = f.stateNode;
          if (typeof h.getDerivedStateFromError == "function" || typeof g.componentDidCatch == "function" && !ky(g)) {
            var T = uf(l, e), _ = Rp(f, T, Ke), O = zo(f, _, Ke), L = fi();
            O !== null && (_o(O, Ke, L), Kr(O, L));
            return;
          }
        }
        f = f.return;
      }
      s(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, l);
    }
    function p0(e, n, l) {
      var f = e.pingCache;
      f !== null && f.delete(n);
      var h = fi();
      Nu(e, l), E0(e), pr === e && Gi(hr, l) && (Pn === Os || Pn === mf && dc(hr) && En() - Wp < xy ? qo(e, we) : yf = bt(yf, l)), Kr(e, h);
    }
    function Ly(e, n) {
      n === nn && (n = Gw(e));
      var l = fi(), f = oi(e, n);
      f !== null && (_o(f, n, l), Kr(f, l));
    }
    function h0(e) {
      var n = e.memoizedState, l = nn;
      n !== null && (l = n.retryLane), Ly(e, l);
    }
    function m0(e, n) {
      var l = nn, f;
      switch (e.tag) {
        case me:
          f = e.stateNode;
          var h = e.memoizedState;
          h !== null && (l = h.retryLane);
          break;
        case be:
          f = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      f !== null && f.delete(n), Ly(e, l);
    }
    function v0(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Hw(e / 1960) * 1960;
    }
    function y0() {
      if (Ds > Qw)
        throw Ds = 0, th = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      ll > Kw && (ll = 0, Sf = null, s("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function g0() {
      w.flushLegacyContextWarning(), w.flushPendingUnsafeLifecycleWarnings();
    }
    var _f = null;
    function Fy(e) {
      {
        if ((Dt & xr) !== dr || !(e.mode & Yt))
          return;
        var n = e.tag;
        if (n !== Te && n !== ve && n !== se && n !== K && n !== Pe && n !== C && n !== D)
          return;
        var l = Ce(e) || "ReactComponent";
        if (_f !== null) {
          if (_f.has(l))
            return;
          _f.add(l);
        } else
          _f = /* @__PURE__ */ new Set([l]);
        var f = Un;
        try {
          p(e), s("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          f ? p(e) : o();
        }
      }
    }
    var uh;
    uh = rw;
    var Uy = !1, lh;
    lh = /* @__PURE__ */ new Set();
    function b0(e) {
      if (jo && !hT())
        switch (e.tag) {
          case K:
          case Pe:
          case D: {
            var n = dn && Ce(dn) || "Unknown", l = n;
            if (!lh.has(l)) {
              lh.add(l);
              var f = Ce(e) || "Unknown";
              s("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", f, n, n);
            }
            break;
          }
          case se: {
            Uy || (s("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Uy = !0);
            break;
          }
        }
    }
    var sh = {};
    function Cf(e, n) {
      {
        var l = ua.current;
        return l !== null ? (l.push(n), sh) : nu(e, n);
      }
    }
    function By(e) {
      if (e !== sh)
        return ga(e);
    }
    function Iy() {
      return ua.current !== null;
    }
    function S0(e) {
      {
        if (e.mode & Yt) {
          if (!Ey())
            return;
        } else if (!Vw() || Dt !== dr || e.tag !== K && e.tag !== Pe && e.tag !== D)
          return;
        if (ua.current === null) {
          var n = Un;
          try {
            p(e), s(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ce(e));
          } finally {
            n ? p(e) : o();
          }
        }
      }
    }
    function E0(e) {
      e.tag !== yn && Ey() && ua.current === null && s(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function ks(e) {
      Ry = e;
    }
    var Gr = null, cl = null, T0 = function(e) {
      Gr = e;
    };
    function fl(e) {
      {
        if (Gr === null)
          return e;
        var n = Gr(e);
        return n === void 0 ? e : n.current;
      }
    }
    function ch(e) {
      return fl(e);
    }
    function fh(e) {
      {
        if (Gr === null)
          return e;
        var n = Gr(e);
        if (n === void 0) {
          if (e != null && typeof e.render == "function") {
            var l = fl(e.render);
            if (e.render !== l) {
              var f = {
                $$typeof: pt,
                render: l
              };
              return e.displayName !== void 0 && (f.displayName = e.displayName), f;
            }
          }
          return e;
        }
        return n.current;
      }
    }
    function qy(e, n) {
      {
        if (Gr === null)
          return !1;
        var l = e.elementType, f = n.type, h = !1, g = typeof f == "object" && f !== null ? f.$$typeof : null;
        switch (e.tag) {
          case se: {
            typeof f == "function" && (h = !0);
            break;
          }
          case K: {
            (typeof f == "function" || g === B) && (h = !0);
            break;
          }
          case Pe: {
            (g === pt || g === B) && (h = !0);
            break;
          }
          case C:
          case D: {
            (g === z || g === B) && (h = !0);
            break;
          }
          default:
            return !1;
        }
        if (h) {
          var T = Gr(l);
          if (T !== void 0 && T === Gr(f))
            return !0;
        }
        return !1;
      }
    }
    function Vy(e) {
      {
        if (Gr === null || typeof WeakSet != "function")
          return;
        cl === null && (cl = /* @__PURE__ */ new WeakSet()), cl.add(e);
      }
    }
    var w0 = function(e, n) {
      {
        if (Gr === null)
          return;
        var l = n.staleFamilies, f = n.updatedFamilies;
        fa(), ih(function() {
          dh(e.current, f, l);
        });
      }
    }, x0 = function(e, n) {
      {
        if (e.context !== Zn)
          return;
        fa(), ih(function() {
          Rf(n, e, null, null);
        });
      }
    };
    function dh(e, n, l) {
      {
        var f = e.alternate, h = e.child, g = e.sibling, T = e.tag, _ = e.type, O = null;
        switch (T) {
          case K:
          case D:
          case se:
            O = _;
            break;
          case Pe:
            O = _.render;
            break;
        }
        if (Gr === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var L = !1, I = !1;
        if (O !== null) {
          var ne = Gr(O);
          ne !== void 0 && (l.has(ne) ? I = !0 : n.has(ne) && (T === se ? I = !0 : L = !0));
        }
        if (cl !== null && (cl.has(e) || f !== null && cl.has(f)) && (I = !0), I && (e._debugNeedsRemount = !0), I || L) {
          var Ee = oi(e, Ke);
          Ee !== null && tr(Ee, e, Ke, Qt);
        }
        h !== null && !I && dh(h, n, l), g !== null && dh(g, n, l);
      }
    }
    var _0 = function(e, n) {
      {
        var l = /* @__PURE__ */ new Set(), f = new Set(n.map(function(h) {
          return h.current;
        }));
        return ph(e.current, f, l), l;
      }
    };
    function ph(e, n, l) {
      {
        var f = e.child, h = e.sibling, g = e.tag, T = e.type, _ = null;
        switch (g) {
          case K:
          case D:
          case se:
            _ = T;
            break;
          case Pe:
            _ = T.render;
            break;
        }
        var O = !1;
        _ !== null && n.has(_) && (O = !0), O ? C0(e, l) : f !== null && ph(f, n, l), h !== null && ph(h, n, l);
      }
    }
    function C0(e, n) {
      {
        var l = R0(e, n);
        if (l)
          return;
        for (var f = e; ; ) {
          switch (f.tag) {
            case ce:
              n.add(f.stateNode);
              return;
            case Ve:
              n.add(f.stateNode.containerInfo);
              return;
            case ve:
              n.add(f.stateNode.containerInfo);
              return;
          }
          if (f.return === null)
            throw new Error("Expected to reach root first.");
          f = f.return;
        }
      }
    }
    function R0(e, n) {
      for (var l = e, f = !1; ; ) {
        if (l.tag === ce)
          f = !0, n.add(l.stateNode);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === e)
          return f;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e)
            return f;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      return !1;
    }
    var hh;
    {
      hh = !1;
      try {
        var Hy = Object.preventExtensions({});
      } catch {
        hh = !0;
      }
    }
    function O0(e, n, l, f) {
      this.tag = e, this.key = l, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = n, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = f, this.flags = xe, this.subtreeFlags = xe, this.deletions = null, this.lanes = we, this.childLanes = we, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !hh && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Pi = function(e, n, l, f) {
      return new O0(e, n, l, f);
    };
    function mh(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function N0(e) {
      return typeof e == "function" && !mh(e) && e.defaultProps === void 0;
    }
    function M0(e) {
      if (typeof e == "function")
        return mh(e) ? se : K;
      if (e != null) {
        var n = e.$$typeof;
        if (n === pt)
          return Pe;
        if (n === z)
          return C;
      }
      return Te;
    }
    function Ho(e, n) {
      var l = e.alternate;
      l === null ? (l = Pi(e.tag, n, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l._debugSource = e._debugSource, l._debugOwner = e._debugOwner, l._debugHookTypes = e._debugHookTypes, l.alternate = e, e.alternate = l) : (l.pendingProps = n, l.type = e.type, l.flags = xe, l.subtreeFlags = xe, l.deletions = null, l.actualDuration = 0, l.actualStartTime = -1), l.flags = e.flags & Mn, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue;
      var f = e.dependencies;
      switch (l.dependencies = f === null ? null : {
        lanes: f.lanes,
        firstContext: f.firstContext
      }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.selfBaseDuration = e.selfBaseDuration, l.treeBaseDuration = e.treeBaseDuration, l._debugNeedsRemount = e._debugNeedsRemount, l.tag) {
        case Te:
        case K:
        case D:
          l.type = fl(e.type);
          break;
        case se:
          l.type = ch(e.type);
          break;
        case Pe:
          l.type = fh(e.type);
          break;
      }
      return l;
    }
    function $0(e, n) {
      e.flags &= Mn | N;
      var l = e.alternate;
      if (l === null)
        e.childLanes = we, e.lanes = n, e.child = null, e.subtreeFlags = xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = xe, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type;
        var f = l.dependencies;
        e.dependencies = f === null ? null : {
          lanes: f.lanes,
          firstContext: f.firstContext
        }, e.selfBaseDuration = l.selfBaseDuration, e.treeBaseDuration = l.treeBaseDuration;
      }
      return e;
    }
    function A0(e, n, l) {
      var f;
      return e === is ? (f = Yt, n === !0 && (f |= Or)) : f = At, yo && (f |= Ft), Pi(ve, null, null, f);
    }
    function vh(e, n, l, f, h, g) {
      var T = Te, _ = e;
      if (typeof e == "function")
        mh(e) ? (T = se, _ = ch(_)) : _ = fl(_);
      else if (typeof e == "string")
        T = ce;
      else
        e:
          switch (e) {
            case Ze:
              return qa(l.children, h, g, n);
            case mt:
              T = ge, h |= Or;
              break;
            case J:
              return D0(l, h, g, n);
            case Zt:
              return P0(l, h, g, n);
            case In:
              return j0(l, h, g, n);
            case P:
              return Yy(l, h, g, n);
            case ut:
            case fe:
            case xt:
            case Ot:
            case Ne:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case gt:
                    T = et;
                    break e;
                  case ct:
                    T = Ae;
                    break e;
                  case pt:
                    T = Pe, _ = fh(_);
                    break e;
                  case z:
                    T = C;
                    break e;
                  case B:
                    T = V, _ = null;
                    break e;
                }
              var O = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var L = f ? Ce(f) : null;
                L && (O += `

Check the render method of \`` + L + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + O));
            }
          }
      var I = Pi(T, l, n, h);
      return I.elementType = e, I.type = _, I.lanes = g, I._debugOwner = f, I;
    }
    function yh(e, n, l) {
      var f = null;
      f = e._owner;
      var h = e.type, g = e.key, T = e.props, _ = vh(h, g, T, f, n, l);
      return _._debugSource = e._source, _._debugOwner = e._owner, _;
    }
    function qa(e, n, l, f) {
      var h = Pi(ie, e, f, n);
      return h.lanes = l, h;
    }
    function D0(e, n, l, f) {
      typeof e.id != "string" && s('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var h = Pi(Qe, e, f, n | Ft);
      return h.elementType = J, h.lanes = l, h.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, h;
    }
    function P0(e, n, l, f) {
      var h = Pi(me, e, f, n);
      return h.elementType = Zt, h.lanes = l, h;
    }
    function j0(e, n, l, f) {
      var h = Pi(be, e, f, n);
      return h.elementType = In, h.lanes = l, h;
    }
    function Yy(e, n, l, f) {
      var h = Pi(Q, e, f, n);
      h.elementType = P, h.lanes = l;
      var g = {
        isHidden: !1
      };
      return h.stateNode = g, h;
    }
    function gh(e, n, l) {
      var f = Pi(Xe, e, null, n);
      return f.lanes = l, f;
    }
    function bh(e, n, l) {
      var f = e.children !== null ? e.children : [], h = Pi(Ve, f, e.key, n);
      return h.lanes = l, h.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, h;
    }
    function k0(e, n, l, f, h) {
      switch (this.tag = n, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Mt, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = nn, this.eventTimes = xo(we), this.expirationTimes = xo(Qt), this.pendingLanes = we, this.suspendedLanes = we, this.pingedLanes = we, this.expiredLanes = we, this.mutableReadLanes = we, this.finishedLanes = we, this.entangledLanes = we, this.entanglements = xo(we), this.identifierPrefix = f, this.onRecoverableError = h, this.effectDuration = 0, this.passiveEffectDuration = 0, n) {
        case is:
          this._debugRootType = l ? "hydrateRoot()" : "createRoot()";
          break;
        case yn:
          this._debugRootType = l ? "hydrate()" : "render()";
          break;
      }
    }
    function z0(e, n, l, f, h, g, T, _, O, L) {
      var I = new k0(e, n, l, _, O), ne = A0(n, g);
      I.current = ne, ne.stateNode = I;
      {
        var Ee = {
          element: f,
          isDehydrated: l,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        ne.memoizedState = Ee;
      }
      return Od(ne), I;
    }
    var Qy = "18.2.0", Sh;
    Sh = !1;
    function L0(e) {
      if (!e)
        return Zn;
      var n = x(e), l = Tc(n);
      if (n.tag === se) {
        var f = n.type;
        if (qr(f))
          return Ei(n, f, l);
      }
      return l;
    }
    function F0(e, n, l, f, h, g, T, _) {
      var O = !1, L = null;
      return z0(e, n, O, L, l, f, h, g, T);
    }
    function Rf(e, n, l, f) {
      uc(n, e);
      var h = n.current, g = fi(), T = sl(h), _ = L0(l);
      n.context === null ? n.context = _ : n.pendingContext = _, jo && Un !== null && !Sh && (Sh = !0, s(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ce(Un) || "Unknown"));
      var O = Pa(g, T);
      O.payload = {
        element: e
      }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && s("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", f), O.callback = f);
      var L = zo(h, O, T);
      return L !== null && (tr(L, h, T, g), Mc(L, h, T)), T;
    }
    function U0(e) {
      var n = e.current;
      if (!n.child)
        return null;
      switch (n.child.tag) {
        case ce:
          return Ro(n.child.stateNode);
        default:
          return n.child.stateNode;
      }
    }
    var Ky = function(e) {
      return null;
    };
    function B0(e) {
      return Ky(e);
    }
    var Gy = function(e) {
      return !1;
    };
    function I0(e) {
      return Gy(e);
    }
    var Wy = null, Jy = null, Xy = null, Zy = null, eg = null, tg = null, ng = null, rg = null, ig = null;
    {
      var ag = function(e, n, l) {
        var f = n[l], h = $n(e) ? e.slice() : b({}, e);
        return l + 1 === n.length ? ($n(h) ? h.splice(f, 1) : delete h[f], h) : (h[f] = ag(e[f], n, l + 1), h);
      }, og = function(e, n) {
        return ag(e, n, 0);
      }, ug = function(e, n, l, f) {
        var h = n[f], g = $n(e) ? e.slice() : b({}, e);
        if (f + 1 === n.length) {
          var T = l[f];
          g[T] = g[h], $n(g) ? g.splice(h, 1) : delete g[h];
        } else
          g[h] = ug(
            // $FlowFixMe number or string is fine here
            e[h],
            n,
            l,
            f + 1
          );
        return g;
      }, lg = function(e, n, l) {
        if (n.length !== l.length) {
          u("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var f = 0; f < l.length - 1; f++)
            if (n[f] !== l[f]) {
              u("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return ug(e, n, l, 0);
      }, sg = function(e, n, l, f) {
        if (l >= n.length)
          return f;
        var h = n[l], g = $n(e) ? e.slice() : b({}, e);
        return g[h] = sg(e[h], n, l + 1, f), g;
      }, cg = function(e, n, l) {
        return sg(e, n, 0, l);
      }, Eh = function(e, n) {
        for (var l = e.memoizedState; l !== null && n > 0; )
          l = l.next, n--;
        return l;
      };
      Wy = function(e, n, l, f) {
        var h = Eh(e, n);
        if (h !== null) {
          var g = cg(h.memoizedState, l, f);
          h.memoizedState = g, h.baseState = g, e.memoizedProps = b({}, e.memoizedProps);
          var T = oi(e, Ke);
          T !== null && tr(T, e, Ke, Qt);
        }
      }, Jy = function(e, n, l) {
        var f = Eh(e, n);
        if (f !== null) {
          var h = og(f.memoizedState, l);
          f.memoizedState = h, f.baseState = h, e.memoizedProps = b({}, e.memoizedProps);
          var g = oi(e, Ke);
          g !== null && tr(g, e, Ke, Qt);
        }
      }, Xy = function(e, n, l, f) {
        var h = Eh(e, n);
        if (h !== null) {
          var g = lg(h.memoizedState, l, f);
          h.memoizedState = g, h.baseState = g, e.memoizedProps = b({}, e.memoizedProps);
          var T = oi(e, Ke);
          T !== null && tr(T, e, Ke, Qt);
        }
      }, Zy = function(e, n, l) {
        e.pendingProps = cg(e.memoizedProps, n, l), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var f = oi(e, Ke);
        f !== null && tr(f, e, Ke, Qt);
      }, eg = function(e, n) {
        e.pendingProps = og(e.memoizedProps, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var l = oi(e, Ke);
        l !== null && tr(l, e, Ke, Qt);
      }, tg = function(e, n, l) {
        e.pendingProps = lg(e.memoizedProps, n, l), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var f = oi(e, Ke);
        f !== null && tr(f, e, Ke, Qt);
      }, ng = function(e) {
        var n = oi(e, Ke);
        n !== null && tr(n, e, Ke, Qt);
      }, rg = function(e) {
        Ky = e;
      }, ig = function(e) {
        Gy = e;
      };
    }
    function q0(e) {
      var n = ya(e);
      return n === null ? null : n.stateNode;
    }
    function V0(e) {
      return null;
    }
    function H0() {
      return Un;
    }
    function Y0(e) {
      var n = e.findFiberByHostInstance, l = c.ReactCurrentDispatcher;
      return ou({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Wy,
        overrideHookStateDeletePath: Jy,
        overrideHookStateRenamePath: Xy,
        overrideProps: Zy,
        overridePropsDeletePath: eg,
        overridePropsRenamePath: tg,
        setErrorHandler: rg,
        setSuspenseHandler: ig,
        scheduleUpdate: ng,
        currentDispatcherRef: l,
        findHostInstanceByFiber: q0,
        findFiberByHostInstance: n || V0,
        // React Refresh
        findHostInstancesForRefresh: _0,
        scheduleRefresh: w0,
        scheduleRoot: x0,
        setRefreshHandler: T0,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: H0,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: Qy
      });
    }
    var Q0 = t.unstable_act, K0 = {
      createNodeMock: function() {
        return null;
      }
    };
    function Of(e) {
      if (e.isHidden)
        return null;
      switch (e.tag) {
        case "TEXT":
          return e.text;
        case "INSTANCE": {
          var n = e.props;
          n.children;
          var l = E(n, ["children"]), f = null;
          if (e.children && e.children.length)
            for (var h = 0; h < e.children.length; h++) {
              var g = Of(e.children[h]);
              g !== null && (f === null ? f = [g] : f.push(g));
            }
          var T = {
            type: e.type,
            props: l,
            children: f
          };
          return Object.defineProperty(T, "$$typeof", {
            value: Symbol.for("react.test.json")
          }), T;
        }
        default:
          throw new Error("Unexpected node type in toJSON: " + e.tag);
      }
    }
    function zs(e) {
      if (!e)
        return null;
      var n = fg(e);
      return n.length === 0 ? null : n.length === 1 ? Nf(n[0]) : dg(n.map(Nf));
    }
    function fg(e) {
      for (var n = [], l = e; l != null; )
        n.push(l), l = l.sibling;
      return n;
    }
    function dg(e) {
      for (var n = [], l = [{
        i: 0,
        array: e
      }]; l.length; )
        for (var f = l.pop(); f.i < f.array.length; ) {
          var h = f.array[f.i];
          if (f.i += 1, $n(h)) {
            l.push(f), l.push({
              i: 0,
              array: h
            });
            break;
          }
          n.push(h);
        }
      return n;
    }
    function Nf(e) {
      if (e == null)
        return null;
      switch (e.tag) {
        case ve:
          return zs(e.child);
        case Ve:
          return zs(e.child);
        case se:
          return {
            nodeType: "component",
            type: e.type,
            props: b({}, e.memoizedProps),
            instance: e.stateNode,
            rendered: zs(e.child)
          };
        case K:
        case D:
          return {
            nodeType: "component",
            type: e.type,
            props: b({}, e.memoizedProps),
            instance: null,
            rendered: zs(e.child)
          };
        case ce:
          return {
            nodeType: "host",
            type: e.type,
            props: b({}, e.memoizedProps),
            instance: null,
            // TODO: use createNodeMock here somehow?
            rendered: dg(fg(e.child).map(Nf))
          };
        case Xe:
          return e.stateNode.text;
        case ie:
        case et:
        case Ae:
        case ge:
        case Qe:
        case Pe:
        case C:
        case G:
        case re:
          return zs(e.child);
        default:
          throw new Error("toTree() does not yet know how to handle nodes with tag=" + e.tag);
      }
    }
    var Th = /* @__PURE__ */ new Set([
      K,
      se,
      ce,
      Pe,
      C,
      D,
      // Normally skipped, but used when there's more than one root child.
      ve
    ]);
    function wh(e) {
      var n = [], l = e, f = l;
      if (f.child === null)
        return n;
      f.child.return = f, f = f.child;
      e:
        for (; ; ) {
          var h = !1;
          if (Th.has(f.tag) ? n.push(Ch(f)) : f.tag === Xe ? (qe(f.memoizedProps, "memoizedProps"), n.push("" + f.memoizedProps)) : h = !0, h && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          for (; f.sibling === null; ) {
            if (f.return === l)
              break e;
            f = f.return;
          }
          f.sibling.return = f.return, f = f.sibling;
        }
      return n;
    }
    var G0 = /* @__PURE__ */ function() {
      var e = n.prototype;
      e._currentFiber = function() {
        var f = po(this._fiber);
        if (f === null)
          throw new Error("Can't read from currently-mounting component. This error is likely caused by a bug in React. Please file an issue.");
        return f;
      };
      function n(l) {
        if (!Th.has(l.tag))
          throw new Error("Unexpected object passed to ReactTestInstance constructor (tag: " + l.tag + "). This is probably a bug in React.");
        this._fiber = l;
      }
      return e.find = function(f) {
        return xh(this.findAll(f, {
          deep: !1
        }), "matching custom predicate: " + f.toString());
      }, e.findByType = function(f) {
        return xh(this.findAllByType(f, {
          deep: !1
        }), 'with node type: "' + (Me(f) || "Unknown") + '"');
      }, e.findByProps = function(f) {
        return xh(this.findAllByProps(f, {
          deep: !1
        }), "with props: " + JSON.stringify(f));
      }, e.findAll = function(f) {
        var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return Mf(this, f, h);
      }, e.findAllByType = function(f) {
        var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return Mf(this, function(g) {
          return g.type === f;
        }, h);
      }, e.findAllByProps = function(f) {
        var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        return Mf(this, function(g) {
          return g.props && W0(g.props, f);
        }, h);
      }, y(n, [{
        key: "instance",
        get: function() {
          return this._fiber.tag === ce ? Ro(this._fiber.stateNode) : this._fiber.stateNode;
        }
      }, {
        key: "type",
        get: function() {
          return this._fiber.type;
        }
      }, {
        key: "props",
        get: function() {
          return this._currentFiber().memoizedProps;
        }
      }, {
        key: "parent",
        get: function() {
          for (var l = this._fiber.return; l !== null; ) {
            if (Th.has(l.tag))
              return l.tag === ve && wh(l).length < 2 ? null : Ch(l);
            l = l.return;
          }
          return null;
        }
      }, {
        key: "children",
        get: function() {
          return wh(this._currentFiber());
        }
      }]), n;
    }();
    function Mf(e, n, l) {
      var f = l ? l.deep : !0, h = [];
      return n(e) && (h.push(e), !f) || e.children.forEach(function(g) {
        typeof g != "string" && h.push.apply(h, Mf(g, n, l));
      }), h;
    }
    function xh(e, n) {
      if (e.length === 1)
        return e[0];
      var l = e.length === 0 ? "No instances found " : "Expected 1 but found " + e.length + " instances ";
      throw new Error(l + n);
    }
    function W0(e, n) {
      for (var l in n)
        if (e[l] !== n[l])
          return !1;
      return !0;
    }
    function J0(e) {
      s(e);
    }
    function X0(e, n) {
      var l = K0.createNodeMock, f = !1, h = !1, g = null;
      typeof n == "object" && n !== null && (typeof n.createNodeMock == "function" && (l = n.createNodeMock), n.unstable_isConcurrent === !0 && (f = !0), n.unstable_strictMode === !0 && (h = !0));
      var T = {
        children: [],
        createNodeMock: l,
        tag: "CONTAINER"
      }, _ = F0(T, f ? is : yn, null, h, g, "", J0);
      if (_ == null)
        throw new Error("something went wrong");
      Rf(e, _, null, null);
      var O = {
        _Scheduler: r,
        root: void 0,
        // makes flow happy
        // we define a 'getter' for 'root' below using 'Object.defineProperty'
        toJSON: function() {
          if (_ == null || _.current == null || T == null || T.children.length === 0)
            return null;
          if (T.children.length === 1)
            return Of(T.children[0]);
          if (T.children.length === 2 && T.children[0].isHidden === !0 && T.children[1].isHidden === !1)
            return Of(T.children[1]);
          var L = null;
          if (T.children && T.children.length)
            for (var I = 0; I < T.children.length; I++) {
              var ne = Of(T.children[I]);
              ne !== null && (L === null ? L = [ne] : L.push(ne));
            }
          return L;
        },
        toTree: function() {
          return _ == null || _.current == null ? null : Nf(_.current);
        },
        update: function(L) {
          _ == null || _.current == null || Rf(L, _, null, null);
        },
        unmount: function() {
          _ == null || _.current == null || (Rf(null, _, null, null), T = null, _ = null);
        },
        getInstance: function() {
          return _ == null || _.current == null ? null : U0(_);
        },
        unstable_flushSync: ih
      };
      return Object.defineProperty(O, "root", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          if (_ === null)
            throw new Error("Can't access .root on unmounted test renderer");
          var L = wh(_.current);
          if (L.length === 0)
            throw new Error("Can't access .root on unmounted test renderer");
          return L.length === 1 ? L[0] : Ch(_.current);
        }
      }), O;
    }
    var _h = /* @__PURE__ */ new WeakMap();
    function Ch(e) {
      var n = _h.get(e);
      return n === void 0 && e.alternate !== null && (n = _h.get(e.alternate)), n === void 0 && (n = new G0(e), _h.set(e, n)), n;
    }
    Y0({
      findFiberByHostInstance: function() {
        throw new Error("TestRenderer does not support findFiberByHostInstance()");
      },
      bundleType: 1,
      version: Qy,
      rendererPackageName: "react-test-renderer"
    }), dl._Scheduler = r, dl.act = Q0, dl.create = X0, dl.unstable_batchedUpdates = Zw;
  }()), dl;
}
var pl = {};
/**
 * @license React
 * react-test-renderer.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tg;
function lx() {
  if (Tg)
    return pl;
  Tg = 1;
  var t = SS, r = ES(), a = TS();
  function c(i, o) {
    for (var p = 0; p < o.length; p++) {
      var v = o[p];
      v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(i, v.key, v);
    }
  }
  function u(i, o, p) {
    return o && c(i.prototype, o), p && c(i, p), i;
  }
  var s = Object.assign, d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, m = Symbol.for("react.element"), y = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), j = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), ye = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), Z = Symbol.iterator;
  function K(i) {
    return i === null || typeof i != "object" ? null : (i = Z && i[Z] || i["@@iterator"], typeof i == "function" ? i : null);
  }
  function se(i) {
    if (i == null)
      return null;
    if (typeof i == "function")
      return i.displayName || i.name || null;
    if (typeof i == "string")
      return i;
    switch (i) {
      case E:
        return "Fragment";
      case y:
        return "Portal";
      case x:
        return "Profiler";
      case b:
        return "StrictMode";
      case q:
        return "Suspense";
      case A:
        return "SuspenseList";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case j:
          return (i.displayName || "Context") + ".Consumer";
        case R:
          return (i._context.displayName || "Context") + ".Provider";
        case U:
          var o = i.render;
          return i = i.displayName, i || (i = o.displayName || o.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
        case ye:
          return o = i.displayName || null, o !== null ? o : se(i.type) || "Memo";
        case ee:
          o = i._payload, i = i._init;
          try {
            return se(i(o));
          } catch {
          }
      }
    return null;
  }
  function Te(i) {
    var o = i.type;
    switch (i.tag) {
      case 24:
        return "Cache";
      case 9:
        return (o.displayName || "Context") + ".Consumer";
      case 10:
        return (o._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return i = o.render, i = i.displayName || i.name || "", o.displayName || (i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return o;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return se(o);
      case 8:
        return o === b ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof o == "function")
          return o.displayName || o.name || null;
        if (typeof o == "string")
          return o;
    }
    return null;
  }
  function ve(i) {
    var o = i, p = i;
    if (i.alternate)
      for (; o.return; )
        o = o.return;
    else {
      i = o;
      do
        o = i, o.flags & 4098 && (p = o.return), i = o.return;
      while (i);
    }
    return o.tag === 3 ? p : null;
  }
  function Ve(i) {
    if (ve(i) !== i)
      throw Error("Unable to find node on an unmounted component.");
  }
  function ce(i) {
    var o = i.alternate;
    if (!o) {
      if (o = ve(i), o === null)
        throw Error("Unable to find node on an unmounted component.");
      return o !== i ? null : i;
    }
    for (var p = i, v = o; ; ) {
      var S = p.return;
      if (S === null)
        break;
      var w = S.alternate;
      if (w === null) {
        if (v = S.return, v !== null) {
          p = v;
          continue;
        }
        break;
      }
      if (S.child === w.child) {
        for (w = S.child; w; ) {
          if (w === p)
            return Ve(S), i;
          if (w === v)
            return Ve(S), o;
          w = w.sibling;
        }
        throw Error("Unable to find node on an unmounted component.");
      }
      if (p.return !== v.return)
        p = S, v = w;
      else {
        for (var M = !1, F = S.child; F; ) {
          if (F === p) {
            M = !0, p = S, v = w;
            break;
          }
          if (F === v) {
            M = !0, v = S, p = w;
            break;
          }
          F = F.sibling;
        }
        if (!M) {
          for (F = w.child; F; ) {
            if (F === p) {
              M = !0, p = w, v = S;
              break;
            }
            if (F === v) {
              M = !0, v = w, p = S;
              break;
            }
            F = F.sibling;
          }
          if (!M)
            throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (p.alternate !== v)
        throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (p.tag !== 3)
      throw Error("Unable to find node on an unmounted component.");
    return p.stateNode.current === p ? i : o;
  }
  function Xe(i) {
    if (i.tag === 5 || i.tag === 6)
      return i;
    for (i = i.child; i !== null; ) {
      var o = Xe(i);
      if (o !== null)
        return o;
      i = i.sibling;
    }
    return null;
  }
  var ie = Array.isArray, ge = a.unstable_scheduleCallback, Ae = a.unstable_cancelCallback, et = a.unstable_shouldYield, Pe = a.unstable_requestPaint, Qe = a.unstable_now, me = a.unstable_ImmediatePriority, C = a.unstable_UserBlockingPriority, D = a.unstable_NormalPriority, V = a.unstable_IdlePriority, G = null, oe = null;
  function be(i) {
    if (oe && typeof oe.onCommitFiberRoot == "function")
      try {
        oe.onCommitFiberRoot(G, i, void 0, (i.current.flags & 128) === 128);
      } catch {
      }
  }
  var re = Math.clz32 ? Math.clz32 : Ge, Q = Math.log, De = Math.LN2;
  function Ge(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Q(i) / De | 0) | 0;
  }
  var tt = 64, ot = 4194304;
  function nt(i) {
    switch (i & -i) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return i & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return i & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return i;
    }
  }
  function Ze(i, o) {
    var p = i.pendingLanes;
    if (p === 0)
      return 0;
    var v = 0, S = i.suspendedLanes, w = i.pingedLanes, M = p & 268435455;
    if (M !== 0) {
      var F = M & ~S;
      F !== 0 ? v = nt(F) : (w &= M, w !== 0 && (v = nt(w)));
    } else
      M = p & ~S, M !== 0 ? v = nt(M) : w !== 0 && (v = nt(w));
    if (v === 0)
      return 0;
    if (o !== 0 && o !== v && !(o & S) && (S = v & -v, w = o & -o, S >= w || S === 16 && (w & 4194240) !== 0))
      return o;
    if (v & 4 && (v |= p & 16), o = i.entangledLanes, o !== 0)
      for (i = i.entanglements, o &= v; 0 < o; )
        p = 31 - re(o), S = 1 << p, v |= i[p], o &= ~S;
    return v;
  }
  function mt(i, o) {
    switch (i) {
      case 1:
      case 2:
      case 4:
        return o + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return o + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function J(i) {
    return i = i.pendingLanes & -1073741825, i !== 0 ? i : i & 1073741824 ? 1073741824 : 0;
  }
  function gt() {
    var i = tt;
    return tt <<= 1, !(tt & 4194240) && (tt = 64), i;
  }
  function ct(i) {
    for (var o = [], p = 0; 31 > p; p++)
      o.push(i);
    return o;
  }
  function pt(i, o, p) {
    i.pendingLanes |= o, o !== 536870912 && (i.suspendedLanes = 0, i.pingedLanes = 0), i = i.eventTimes, o = 31 - re(o), i[o] = p;
  }
  function Zt(i, o) {
    var p = i.pendingLanes & ~o;
    i.pendingLanes = o, i.suspendedLanes = 0, i.pingedLanes = 0, i.expiredLanes &= o, i.mutableReadLanes &= o, i.entangledLanes &= o, o = i.entanglements;
    var v = i.eventTimes;
    for (i = i.expirationTimes; 0 < p; ) {
      var S = 31 - re(p), w = 1 << S;
      o[S] = 0, v[S] = -1, i[S] = -1, p &= ~w;
    }
  }
  function In(i, o) {
    var p = i.entangledLanes |= o;
    for (i = i.entanglements; p; ) {
      var v = 31 - re(p), S = 1 << v;
      S & o | i[v] & o && (i[v] |= o), p &= ~S;
    }
  }
  var z = 0;
  function B(i) {
    return i &= -i, 1 < i ? 4 < i ? i & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  function fe() {
    throw Error("The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.");
  }
  var Ne = {}, P = {}, ut = /* @__PURE__ */ new WeakMap();
  function xt(i) {
    switch (i.tag) {
      case "INSTANCE":
        var o = i.rootContainerInstance.createNodeMock;
        return o = o({ type: i.type, props: i.props }), typeof o == "object" && o !== null && ut.set(o, i), o;
      default:
        return i;
    }
  }
  function Ot(i, o) {
    var p = i.children.indexOf(o);
    p !== -1 && i.children.splice(p, 1), i.children.push(o);
  }
  function un(i, o, p) {
    var v = i.children.indexOf(o);
    v !== -1 && i.children.splice(v, 1), p = i.children.indexOf(p), i.children.splice(p, 0, o);
  }
  var rt = setTimeout, Fe = clearTimeout, he;
  function _e(i) {
    if (he === void 0)
      try {
        throw Error();
      } catch (p) {
        var o = p.stack.trim().match(/\n( *(at )?)/);
        he = o && o[1] || "";
      }
    return `
` + he + i;
  }
  var Me = !1;
  function ae(i, o) {
    if (!i || Me)
      return "";
    Me = !0;
    var p = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (o)
        if (o = function() {
          throw Error();
        }, Object.defineProperty(o.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(o, []);
          } catch (ke) {
            var v = ke;
          }
          Reflect.construct(i, [], o);
        } else {
          try {
            o.call();
          } catch (ke) {
            v = ke;
          }
          i.call(o.prototype);
        }
      else {
        try {
          throw Error();
        } catch (ke) {
          v = ke;
        }
        i();
      }
    } catch (ke) {
      if (ke && v && typeof ke.stack == "string") {
        for (var S = ke.stack.split(`
`), w = v.stack.split(`
`), M = S.length - 1, F = w.length - 1; 1 <= M && 0 <= F && S[M] !== w[F]; )
          F--;
        for (; 1 <= M && 0 <= F; M--, F--)
          if (S[M] !== w[F]) {
            if (M !== 1 || F !== 1)
              do
                if (M--, F--, 0 > F || S[M] !== w[F]) {
                  var ue = `
` + S[M].replace(" at new ", " at ");
                  return i.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", i.displayName)), ue;
                }
              while (1 <= M && 0 <= F);
            break;
          }
      }
    } finally {
      Me = !1, Error.prepareStackTrace = p;
    }
    return (i = i ? i.displayName || i.name : "") ? _e(i) : "";
  }
  var je = Object.prototype.hasOwnProperty, Ce = [], xe = -1;
  function $(i) {
    return { current: i };
  }
  function N(i) {
    0 > xe || (i.current = Ce[xe], Ce[xe] = null, xe--);
  }
  function k(i, o) {
    xe++, Ce[xe] = i.current, i.current = o;
  }
  var Oe = {}, Se = $(Oe), We = $(!1), Ie = Oe;
  function St(i, o) {
    var p = i.type.contextTypes;
    if (!p)
      return Oe;
    var v = i.stateNode;
    if (v && v.__reactInternalMemoizedUnmaskedChildContext === o)
      return v.__reactInternalMemoizedMaskedChildContext;
    var S = {}, w;
    for (w in p)
      S[w] = o[w];
    return v && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = o, i.__reactInternalMemoizedMaskedChildContext = S), S;
  }
  function Et(i) {
    return i = i.childContextTypes, i != null;
  }
  function Nt() {
    N(We), N(Se);
  }
  function en(i, o, p) {
    if (Se.current !== Oe)
      throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
    k(Se, o), k(We, p);
  }
  function jn(i, o, p) {
    var v = i.stateNode;
    if (o = o.childContextTypes, typeof v.getChildContext != "function")
      return p;
    v = v.getChildContext();
    for (var S in v)
      if (!(S in o))
        throw Error((Te(i) || "Unknown") + '.getChildContext(): key "' + S + '" is not defined in childContextTypes.');
    return s({}, p, v);
  }
  function Kn(i) {
    return i = (i = i.stateNode) && i.__reactInternalMemoizedMergedChildContext || Oe, Ie = Se.current, k(Se, i), k(We, We.current), !0;
  }
  function Cr(i, o, p) {
    var v = i.stateNode;
    if (!v)
      throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
    p ? (i = jn(i, o, Ie), v.__reactInternalMemoizedMergedChildContext = i, N(We), N(Se), k(Se, i)) : N(We), k(We, p);
  }
  function mi(i, o) {
    return i === o && (i !== 0 || 1 / i === 1 / o) || i !== i && o !== o;
  }
  var On = typeof Object.is == "function" ? Object.is : mi, Nn = null, Sn = !1, Ui = !1;
  function Ar() {
    if (!Ui && Nn !== null) {
      Ui = !0;
      var i = 0, o = z;
      try {
        var p = Nn;
        for (z = 1; i < p.length; i++) {
          var v = p[i];
          do
            v = v(!0);
          while (v !== null);
        }
        Nn = null, Sn = !1;
      } catch (S) {
        throw Nn !== null && (Nn = Nn.slice(i + 1)), ge(me, Ar), S;
      } finally {
        z = o, Ui = !1;
      }
    }
    return null;
  }
  var co = [], vi = 0, Ml = null, ma = [], yi = 0, va = null;
  function gi(i) {
    for (; i === Ml; )
      Ml = co[--vi], co[vi] = null, --vi, co[vi] = null;
    for (; i === va; )
      va = ma[--yi], ma[yi] = null, --yi, ma[yi] = null, --yi, ma[yi] = null;
  }
  var Mn = null, sd = d.ReactCurrentBatchConfig;
  function Bi(i, o) {
    if (On(i, o))
      return !0;
    if (typeof i != "object" || i === null || typeof o != "object" || o === null)
      return !1;
    var p = Object.keys(i), v = Object.keys(o);
    if (p.length !== v.length)
      return !1;
    for (v = 0; v < p.length; v++) {
      var S = p[v];
      if (!je.call(o, S) || !On(i[S], o[S]))
        return !1;
    }
    return !0;
  }
  function cd(i) {
    switch (i.tag) {
      case 5:
        return _e(i.type);
      case 16:
        return _e("Lazy");
      case 13:
        return _e("Suspense");
      case 19:
        return _e("SuspenseList");
      case 0:
      case 2:
      case 15:
        return i = ae(i.type, !1), i;
      case 11:
        return i = ae(i.type.render, !1), i;
      case 1:
        return i = ae(i.type, !0), i;
      default:
        return "";
    }
  }
  function Rr(i, o) {
    if (i && i.defaultProps) {
      o = s({}, o), i = i.defaultProps;
      for (var p in i)
        o[p] === void 0 && (o[p] = i[p]);
      return o;
    }
    return o;
  }
  var fo = $(null), po = null, ya = null, tu = null;
  function $l() {
    tu = ya = po = null;
  }
  function $n(i) {
    var o = fo.current;
    N(fo), i._currentValue2 = o;
  }
  function nu(i, o, p) {
    for (; i !== null; ) {
      var v = i.alternate;
      if ((i.childLanes & o) !== o ? (i.childLanes |= o, v !== null && (v.childLanes |= o)) : v !== null && (v.childLanes & o) !== o && (v.childLanes |= o), i === p)
        break;
      i = i.return;
    }
  }
  function ga(i, o) {
    po = i, tu = ya = null, i = i.dependencies, i !== null && i.firstContext !== null && (i.lanes & o && (xn = !0), i.firstContext = null);
  }
  function vr(i) {
    var o = i._currentValue2;
    if (tu !== i)
      if (i = { context: i, memoizedValue: o, next: null }, ya === null) {
        if (po === null)
          throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        ya = i, po.dependencies = { lanes: 0, firstContext: i };
      } else
        ya = ya.next = i;
    return o;
  }
  var Ii = null;
  function En(i) {
    Ii === null ? Ii = [i] : Ii.push(i);
  }
  function ho(i, o, p, v) {
    var S = o.interleaved;
    return S === null ? (p.next = p, En(o)) : (p.next = S.next, S.next = p), o.interleaved = p, qi(i, v);
  }
  function qi(i, o) {
    i.lanes |= o;
    var p = i.alternate;
    for (p !== null && (p.lanes |= o), p = i, i = i.return; i !== null; )
      i.childLanes |= o, p = i.alternate, p !== null && (p.childLanes |= o), p = i, i = i.return;
    return p.tag === 3 ? p.stateNode : null;
  }
  var or = !1;
  function ru(i) {
    i.updateQueue = { baseState: i.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ba(i, o) {
    i = i.updateQueue, o.updateQueue === i && (o.updateQueue = { baseState: i.baseState, firstBaseUpdate: i.firstBaseUpdate, lastBaseUpdate: i.lastBaseUpdate, shared: i.shared, effects: i.effects });
  }
  function Xr(i, o) {
    return { eventTime: i, lane: o, tag: 0, payload: null, callback: null, next: null };
  }
  function bi(i, o, p) {
    var v = i.updateQueue;
    if (v === null)
      return null;
    if (v = v.shared, Mt & 2) {
      var S = v.pending;
      return S === null ? o.next = o : (o.next = S.next, S.next = o), v.pending = o, qi(i, p);
    }
    return S = v.interleaved, S === null ? (o.next = o, En(v)) : (o.next = S.next, S.next = o), v.interleaved = o, qi(i, p);
  }
  function mo(i, o, p) {
    if (o = o.updateQueue, o !== null && (o = o.shared, (p & 4194240) !== 0)) {
      var v = o.lanes;
      v &= i.pendingLanes, p |= v, o.lanes = p, In(i, p);
    }
  }
  function Al(i, o) {
    var p = i.updateQueue, v = i.alternate;
    if (v !== null && (v = v.updateQueue, p === v)) {
      var S = null, w = null;
      if (p = p.firstBaseUpdate, p !== null) {
        do {
          var M = { eventTime: p.eventTime, lane: p.lane, tag: p.tag, payload: p.payload, callback: p.callback, next: null };
          w === null ? S = w = M : w = w.next = M, p = p.next;
        } while (p !== null);
        w === null ? S = w = o : w = w.next = o;
      } else
        S = w = o;
      p = { baseState: v.baseState, firstBaseUpdate: S, lastBaseUpdate: w, shared: v.shared, effects: v.effects }, i.updateQueue = p;
      return;
    }
    i = p.lastBaseUpdate, i === null ? p.firstBaseUpdate = o : i.next = o, p.lastBaseUpdate = o;
  }
  function vo(i, o, p, v) {
    var S = i.updateQueue;
    or = !1;
    var w = S.firstBaseUpdate, M = S.lastBaseUpdate, F = S.shared.pending;
    if (F !== null) {
      S.shared.pending = null;
      var ue = F, ke = ue.next;
      ue.next = null, M === null ? w = ke : M.next = ke, M = ue;
      var He = i.alternate;
      He !== null && (He = He.updateQueue, F = He.lastBaseUpdate, F !== M && (F === null ? He.firstBaseUpdate = ke : F.next = ke, He.lastBaseUpdate = ue));
    }
    if (w !== null) {
      var _t = S.baseState;
      M = 0, He = ke = ue = null, F = w;
      do {
        var lt = F.lane, Kt = F.eventTime;
        if ((v & lt) === lt) {
          He !== null && (He = He.next = {
            eventTime: Kt,
            lane: 0,
            tag: F.tag,
            payload: F.payload,
            callback: F.callback,
            next: null
          });
          e: {
            var $t = i, fn = F;
            switch (lt = o, Kt = p, fn.tag) {
              case 1:
                if ($t = fn.payload, typeof $t == "function") {
                  _t = $t.call(Kt, _t, lt);
                  break e;
                }
                _t = $t;
                break e;
              case 3:
                $t.flags = $t.flags & -65537 | 128;
              case 0:
                if ($t = fn.payload, lt = typeof $t == "function" ? $t.call(Kt, _t, lt) : $t, lt == null)
                  break e;
                _t = s({}, _t, lt);
                break e;
              case 2:
                or = !0;
            }
          }
          F.callback !== null && F.lane !== 0 && (i.flags |= 64, lt = S.effects, lt === null ? S.effects = [F] : lt.push(F));
        } else
          Kt = { eventTime: Kt, lane: lt, tag: F.tag, payload: F.payload, callback: F.callback, next: null }, He === null ? (ke = He = Kt, ue = _t) : He = He.next = Kt, M |= lt;
        if (F = F.next, F === null) {
          if (F = S.shared.pending, F === null)
            break;
          lt = F, F = lt.next, lt.next = null, S.lastBaseUpdate = lt, S.shared.pending = null;
        }
      } while (!0);
      if (He === null && (ue = _t), S.baseState = ue, S.firstBaseUpdate = ke, S.lastBaseUpdate = He, o = S.shared.interleaved, o !== null) {
        S = o;
        do
          M |= S.lane, S = S.next;
        while (S !== o);
      } else
        w === null && (S.shared.lanes = 0);
      Zi |= M, i.lanes = M, i.memoizedState = _t;
    }
  }
  function Dl(i, o, p) {
    if (i = o.effects, o.effects = null, i !== null)
      for (o = 0; o < i.length; o++) {
        var v = i[o], S = v.callback;
        if (S !== null) {
          if (v.callback = null, typeof S != "function")
            throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + S);
          S.call(p);
        }
      }
  }
  var Pl = new t.Component().refs;
  function iu(i, o, p, v) {
    o = i.memoizedState, p = p(v, o), p = p == null ? o : s({}, o, p), i.memoizedState = p, i.lanes === 0 && (i.updateQueue.baseState = p);
  }
  var au = { isMounted: function(i) {
    return (i = i._reactInternals) ? ve(i) === i : !1;
  }, enqueueSetState: function(i, o, p) {
    i = i._reactInternals;
    var v = Xn(), S = Ln(i), w = Xr(v, S);
    w.payload = o, p != null && (w.callback = p), o = bi(i, w, S), o !== null && (Fr(o, i, S, v), mo(o, i, S));
  }, enqueueReplaceState: function(i, o, p) {
    i = i._reactInternals;
    var v = Xn(), S = Ln(i), w = Xr(v, S);
    w.tag = 1, w.payload = o, p != null && (w.callback = p), o = bi(i, w, S), o !== null && (Fr(o, i, S, v), mo(o, i, S));
  }, enqueueForceUpdate: function(i, o) {
    i = i._reactInternals;
    var p = Xn(), v = Ln(i), S = Xr(p, v);
    S.tag = 2, o != null && (S.callback = o), o = bi(i, S, v), o !== null && (Fr(o, i, v, p), mo(o, i, v));
  } };
  function oc(i, o, p, v, S, w, M) {
    return i = i.stateNode, typeof i.shouldComponentUpdate == "function" ? i.shouldComponentUpdate(v, w, M) : o.prototype && o.prototype.isPureReactComponent ? !Bi(p, v) || !Bi(S, w) : !0;
  }
  function Sa(i, o, p) {
    var v = !1, S = Oe, w = o.contextType;
    return typeof w == "object" && w !== null ? w = vr(w) : (S = Et(o) ? Ie : Se.current, v = o.contextTypes, w = (v = v != null) ? St(i, S) : Oe), o = new o(p, w), i.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = au, i.stateNode = o, o._reactInternals = i, v && (i = i.stateNode, i.__reactInternalMemoizedUnmaskedChildContext = S, i.__reactInternalMemoizedMaskedChildContext = w), o;
  }
  function Gn(i, o, p, v) {
    i = o.state, typeof o.componentWillReceiveProps == "function" && o.componentWillReceiveProps(p, v), typeof o.UNSAFE_componentWillReceiveProps == "function" && o.UNSAFE_componentWillReceiveProps(p, v), o.state !== i && au.enqueueReplaceState(o, o.state, null);
  }
  function Dr(i, o, p, v) {
    var S = i.stateNode;
    S.props = p, S.state = i.memoizedState, S.refs = Pl, ru(i);
    var w = o.contextType;
    typeof w == "object" && w !== null ? S.context = vr(w) : (w = Et(o) ? Ie : Se.current, S.context = St(i, w)), S.state = i.memoizedState, w = o.getDerivedStateFromProps, typeof w == "function" && (iu(i, o, w, p), S.state = i.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function" || typeof S.UNSAFE_componentWillMount != "function" && typeof S.componentWillMount != "function" || (o = S.state, typeof S.componentWillMount == "function" && S.componentWillMount(), typeof S.UNSAFE_componentWillMount == "function" && S.UNSAFE_componentWillMount(), o !== S.state && au.enqueueReplaceState(S, S.state, null), vo(i, p, S, v), S.state = i.memoizedState), typeof S.componentDidMount == "function" && (i.flags |= 4);
  }
  function yo(i, o, p) {
    if (i = p.ref, i !== null && typeof i != "function" && typeof i != "object") {
      if (p._owner) {
        if (p = p._owner, p) {
          if (p.tag !== 1)
            throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
          var v = p.stateNode;
        }
        if (!v)
          throw Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
        var S = v, w = "" + i;
        return o !== null && o.ref !== null && typeof o.ref == "function" && o.ref._stringRef === w ? o.ref : (o = function(M) {
          var F = S.refs;
          F === Pl && (F = S.refs = {}), M === null ? delete F[w] : F[w] = M;
        }, o._stringRef = w, o);
      }
      if (typeof i != "string")
        throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
      if (!p._owner)
        throw Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
    }
    return i;
  }
  function ou(i, o) {
    throw i = Object.prototype.toString.call(o), Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
  }
  function uc(i) {
    var o = i._init;
    return o(i._payload);
  }
  function lc(i) {
    function o(X, H) {
      if (i) {
        var te = X.deletions;
        te === null ? (X.deletions = [H], X.flags |= 16) : te.push(H);
      }
    }
    function p(X, H) {
      if (!i)
        return null;
      for (; H !== null; )
        o(X, H), H = H.sibling;
      return null;
    }
    function v(X, H) {
      for (X = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? X.set(H.key, H) : X.set(H.index, H), H = H.sibling;
      return X;
    }
    function S(X, H) {
      return X = Ti(X, H), X.index = 0, X.sibling = null, X;
    }
    function w(X, H, te) {
      return X.index = te, i ? (te = X.alternate, te !== null ? (te = te.index, te < H ? (X.flags |= 2, H) : te) : (X.flags |= 2, H)) : (X.flags |= 1048576, H);
    }
    function M(X) {
      return i && X.alternate === null && (X.flags |= 2), X;
    }
    function F(X, H, te, qe) {
      return H === null || H.tag !== 6 ? (H = wi(te, X.mode, qe), H.return = X, H) : (H = S(H, te), H.return = X, H);
    }
    function ue(X, H, te, qe) {
      var Je = te.type;
      return Je === E ? He(X, H, te.props.children, qe, te.key) : H !== null && (H.elementType === Je || typeof Je == "object" && Je !== null && Je.$$typeof === ee && uc(Je) === H.type) ? (qe = S(H, te.props), qe.ref = yo(X, H, te), qe.return = X, qe) : (qe = aa(te.type, te.key, te.props, null, X.mode, qe), qe.ref = yo(X, H, te), qe.return = X, qe);
    }
    function ke(X, H, te, qe) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== te.containerInfo || H.stateNode.implementation !== te.implementation ? (H = xi(te, X.mode, qe), H.return = X, H) : (H = S(H, te.children || []), H.return = X, H);
    }
    function He(X, H, te, qe, Je) {
      return H === null || H.tag !== 7 ? (H = Hr(te, X.mode, qe, Je), H.return = X, H) : (H = S(H, te), H.return = X, H);
    }
    function _t(X, H, te) {
      if (typeof H == "string" && H !== "" || typeof H == "number")
        return H = wi("" + H, X.mode, te), H.return = X, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case m:
            return te = aa(H.type, H.key, H.props, null, X.mode, te), te.ref = yo(X, null, H), te.return = X, te;
          case y:
            return H = xi(H, X.mode, te), H.return = X, H;
          case ee:
            var qe = H._init;
            return _t(X, qe(H._payload), te);
        }
        if (ie(H) || K(H))
          return H = Hr(H, X.mode, te, null), H.return = X, H;
        ou(X, H);
      }
      return null;
    }
    function lt(X, H, te, qe) {
      var Je = H !== null ? H.key : null;
      if (typeof te == "string" && te !== "" || typeof te == "number")
        return Je !== null ? null : F(X, H, "" + te, qe);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case m:
            return te.key === Je ? ue(X, H, te, qe) : null;
          case y:
            return te.key === Je ? ke(X, H, te, qe) : null;
          case ee:
            return Je = te._init, lt(
              X,
              H,
              Je(te._payload),
              qe
            );
        }
        if (ie(te) || K(te))
          return Je !== null ? null : He(X, H, te, qe, null);
        ou(X, te);
      }
      return null;
    }
    function Kt(X, H, te, qe, Je) {
      if (typeof qe == "string" && qe !== "" || typeof qe == "number")
        return X = X.get(te) || null, F(H, X, "" + qe, Je);
      if (typeof qe == "object" && qe !== null) {
        switch (qe.$$typeof) {
          case m:
            return X = X.get(qe.key === null ? te : qe.key) || null, ue(H, X, qe, Je);
          case y:
            return X = X.get(qe.key === null ? te : qe.key) || null, ke(H, X, qe, Je);
          case ee:
            var vt = qe._init;
            return Kt(X, H, te, vt(qe._payload), Je);
        }
        if (ie(qe) || K(qe))
          return X = X.get(te) || null, He(H, X, qe, Je, null);
        ou(H, qe);
      }
      return null;
    }
    function $t(X, H, te, qe) {
      for (var Je = null, vt = null, st = H, kt = H = 0, an = null; st !== null && kt < te.length; kt++) {
        st.index > kt ? (an = st, st = null) : an = st.sibling;
        var Ct = lt(X, st, te[kt], qe);
        if (Ct === null) {
          st === null && (st = an);
          break;
        }
        i && st && Ct.alternate === null && o(X, st), H = w(Ct, H, kt), vt === null ? Je = Ct : vt.sibling = Ct, vt = Ct, st = an;
      }
      if (kt === te.length)
        return p(X, st), Je;
      if (st === null) {
        for (; kt < te.length; kt++)
          st = _t(X, te[kt], qe), st !== null && (H = w(st, H, kt), vt === null ? Je = st : vt.sibling = st, vt = st);
        return Je;
      }
      for (st = v(X, st); kt < te.length; kt++)
        an = Kt(st, X, kt, te[kt], qe), an !== null && (i && an.alternate !== null && st.delete(an.key === null ? kt : an.key), H = w(an, H, kt), vt === null ? Je = an : vt.sibling = an, vt = an);
      return i && st.forEach(function(Mr) {
        return o(X, Mr);
      }), Je;
    }
    function fn(X, H, te, qe) {
      var Je = K(te);
      if (typeof Je != "function")
        throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
      if (te = Je.call(te), te == null)
        throw Error("An iterable object provided no iterator.");
      for (var vt = Je = null, st = H, kt = H = 0, an = null, Ct = te.next(); st !== null && !Ct.done; kt++, Ct = te.next()) {
        st.index > kt ? (an = st, st = null) : an = st.sibling;
        var Mr = lt(X, st, Ct.value, qe);
        if (Mr === null) {
          st === null && (st = an);
          break;
        }
        i && st && Mr.alternate === null && o(X, st), H = w(Mr, H, kt), vt === null ? Je = Mr : vt.sibling = Mr, vt = Mr, st = an;
      }
      if (Ct.done)
        return p(X, st), Je;
      if (st === null) {
        for (; !Ct.done; kt++, Ct = te.next())
          Ct = _t(X, Ct.value, qe), Ct !== null && (H = w(Ct, H, kt), vt === null ? Je = Ct : vt.sibling = Ct, vt = Ct);
        return Je;
      }
      for (st = v(X, st); !Ct.done; kt++, Ct = te.next())
        Ct = Kt(st, X, kt, Ct.value, qe), Ct !== null && (i && Ct.alternate !== null && st.delete(Ct.key === null ? kt : Ct.key), H = w(Ct, H, kt), vt === null ? Je = Ct : vt.sibling = Ct, vt = Ct);
      return i && st.forEach(function(cs) {
        return o(X, cs);
      }), Je;
    }
    function _i(X, H, te, qe) {
      if (typeof te == "object" && te !== null && te.type === E && te.key === null && (te = te.props.children), typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case m:
            e: {
              for (var Je = te.key, vt = H; vt !== null; ) {
                if (vt.key === Je) {
                  if (Je = te.type, Je === E) {
                    if (vt.tag === 7) {
                      p(X, vt.sibling), H = S(vt, te.props.children), H.return = X, X = H;
                      break e;
                    }
                  } else if (vt.elementType === Je || typeof Je == "object" && Je !== null && Je.$$typeof === ee && uc(Je) === vt.type) {
                    p(X, vt.sibling), H = S(vt, te.props), H.ref = yo(X, vt, te), H.return = X, X = H;
                    break e;
                  }
                  p(X, vt);
                  break;
                } else
                  o(X, vt);
                vt = vt.sibling;
              }
              te.type === E ? (H = Hr(te.props.children, X.mode, qe, te.key), H.return = X, X = H) : (qe = aa(te.type, te.key, te.props, null, X.mode, qe), qe.ref = yo(X, H, te), qe.return = X, X = qe);
            }
            return M(X);
          case y:
            e: {
              for (vt = te.key; H !== null; ) {
                if (H.key === vt)
                  if (H.tag === 4 && H.stateNode.containerInfo === te.containerInfo && H.stateNode.implementation === te.implementation) {
                    p(X, H.sibling), H = S(H, te.children || []), H.return = X, X = H;
                    break e;
                  } else {
                    p(X, H);
                    break;
                  }
                else
                  o(X, H);
                H = H.sibling;
              }
              H = xi(te, X.mode, qe), H.return = X, X = H;
            }
            return M(X);
          case ee:
            return vt = te._init, _i(X, H, vt(te._payload), qe);
        }
        if (ie(te))
          return $t(X, H, te, qe);
        if (K(te))
          return fn(X, H, te, qe);
        ou(X, te);
      }
      return typeof te == "string" && te !== "" || typeof te == "number" ? (te = "" + te, H !== null && H.tag === 6 ? (p(X, H.sibling), H = S(H, te), H.return = X, X = H) : (p(X, H), H = wi(te, X.mode, qe), H.return = X, X = H), M(X)) : p(X, H);
    }
    return _i;
  }
  var Ea = lc(!0), fd = lc(!1), uu = {}, Zr = $(uu), lu = $(uu), su = $(uu);
  function Ta(i) {
    if (i === uu)
      throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
    return i;
  }
  function At(i, o) {
    k(su, o), k(lu, i), k(Zr, uu), N(Zr), k(Zr, Ne);
  }
  function Yt() {
    N(Zr), N(lu), N(su);
  }
  function Ft(i) {
    Ta(su.current), Ta(Zr.current) !== Ne && (k(lu, i), k(Zr, Ne));
  }
  function Or(i) {
    lu.current === i && (N(Zr), N(lu));
  }
  var tn = $(0);
  function cu(i) {
    for (var o = i; o !== null; ) {
      if (o.tag === 13) {
        var p = o.memoizedState;
        if (p !== null && (p.dehydrated === null || fe() || fe()))
          return o;
      } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
        if (o.flags & 128)
          return o;
      } else if (o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === i)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === i)
          return null;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
    return null;
  }
  var jl = [];
  function kl() {
    for (var i = 0; i < jl.length; i++)
      jl[i]._workInProgressVersionSecondary = null;
    jl.length = 0;
  }
  var fu = d.ReactCurrentDispatcher, we = d.ReactCurrentBatchConfig, nn = 0, Ke = null, rn = null, Wt = null, ei = !1, ur = !1, du = 0;
  function hn() {
    throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Vi(i, o) {
    if (o === null)
      return !1;
    for (var p = 0; p < o.length && p < i.length; p++)
      if (!On(i[p], o[p]))
        return !1;
    return !0;
  }
  function go(i, o, p, v, S, w) {
    if (nn = w, Ke = o, o.memoizedState = null, o.updateQueue = null, o.lanes = 0, fu.current = i === null || i.memoizedState === null ? dd : Fl, i = p(v, S), ur) {
      w = 0;
      do {
        if (ur = !1, 25 <= w)
          throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        w += 1, Wt = rn = null, o.updateQueue = null, fu.current = dc, i = p(v, S);
      } while (ur);
    }
    if (fu.current = _a, o = rn !== null && rn.next !== null, nn = 0, Wt = rn = Ke = null, ei = !1, o)
      throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
    return i;
  }
  function yr() {
    var i = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Wt === null ? Ke.memoizedState = Wt = i : Wt = Wt.next = i, Wt;
  }
  function Wn() {
    if (rn === null) {
      var i = Ke.alternate;
      i = i !== null ? i.memoizedState : null;
    } else
      i = rn.next;
    var o = Wt === null ? Ke.memoizedState : Wt.next;
    if (o !== null)
      Wt = o, rn = i;
    else {
      if (i === null)
        throw Error("Rendered more hooks than during the previous render.");
      rn = i, i = { memoizedState: rn.memoizedState, baseState: rn.baseState, baseQueue: rn.baseQueue, queue: rn.queue, next: null }, Wt === null ? Ke.memoizedState = Wt = i : Wt = Wt.next = i;
    }
    return Wt;
  }
  function Hi(i, o) {
    return typeof o == "function" ? o(i) : o;
  }
  function bo(i) {
    var o = Wn(), p = o.queue;
    if (p === null)
      throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    p.lastRenderedReducer = i;
    var v = rn, S = v.baseQueue, w = p.pending;
    if (w !== null) {
      if (S !== null) {
        var M = S.next;
        S.next = w.next, w.next = M;
      }
      v.baseQueue = S = w, p.pending = null;
    }
    if (S !== null) {
      w = S.next, v = v.baseState;
      var F = M = null, ue = null, ke = w;
      do {
        var He = ke.lane;
        if ((nn & He) === He)
          ue !== null && (ue = ue.next = { lane: 0, action: ke.action, hasEagerState: ke.hasEagerState, eagerState: ke.eagerState, next: null }), v = ke.hasEagerState ? ke.eagerState : i(v, ke.action);
        else {
          var _t = { lane: He, action: ke.action, hasEagerState: ke.hasEagerState, eagerState: ke.eagerState, next: null };
          ue === null ? (F = ue = _t, M = v) : ue = ue.next = _t, Ke.lanes |= He, Zi |= He;
        }
        ke = ke.next;
      } while (ke !== null && ke !== w);
      ue === null ? M = v : ue.next = F, On(v, o.memoizedState) || (xn = !0), o.memoizedState = v, o.baseState = M, o.baseQueue = ue, p.lastRenderedState = v;
    }
    if (i = p.interleaved, i !== null) {
      S = i;
      do
        w = S.lane, Ke.lanes |= w, Zi |= w, S = S.next;
      while (S !== i);
    } else
      S === null && (p.lanes = 0);
    return [o.memoizedState, p.dispatch];
  }
  function So(i) {
    var o = Wn(), p = o.queue;
    if (p === null)
      throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
    p.lastRenderedReducer = i;
    var v = p.dispatch, S = p.pending, w = o.memoizedState;
    if (S !== null) {
      p.pending = null;
      var M = S = S.next;
      do
        w = i(w, M.action), M = M.next;
      while (M !== S);
      On(w, o.memoizedState) || (xn = !0), o.memoizedState = w, o.baseQueue === null && (o.baseState = w), p.lastRenderedState = w;
    }
    return [w, v];
  }
  function pu() {
  }
  function hu(i, o) {
    var p = Ke, v = Wn(), S = o(), w = !On(v.memoizedState, S);
    if (w && (v.memoizedState = S, xn = !0), v = v.queue, Eo(yu.bind(null, p, v, i), [i]), v.getSnapshot !== o || w || Wt !== null && Wt.memoizedState.tag & 1) {
      if (p.flags |= 2048, Yi(9, vu.bind(null, p, v, S, o), void 0, null), _n === null)
        throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      nn & 30 || mu(p, o, S);
    }
    return S;
  }
  function mu(i, o, p) {
    i.flags |= 16384, i = { getSnapshot: o, value: p }, o = Ke.updateQueue, o === null ? (o = { lastEffect: null, stores: null }, Ke.updateQueue = o, o.stores = [i]) : (p = o.stores, p === null ? o.stores = [i] : p.push(i));
  }
  function vu(i, o, p, v) {
    o.value = p, o.getSnapshot = v, gu(o) && bu(i);
  }
  function yu(i, o, p) {
    return p(function() {
      gu(o) && bu(i);
    });
  }
  function gu(i) {
    var o = i.getSnapshot;
    i = i.value;
    try {
      var p = o();
      return !On(i, p);
    } catch {
      return !0;
    }
  }
  function bu(i) {
    var o = qi(i, 1);
    o !== null && Fr(o, i, 1, -1);
  }
  function Su(i) {
    var o = yr();
    return typeof i == "function" && (i = i()), o.memoizedState = o.baseState = i, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hi, lastRenderedState: i }, o.queue = i, i = i.dispatch = Ru.bind(null, Ke, i), [o.memoizedState, i];
  }
  function Yi(i, o, p, v) {
    return i = { tag: i, create: o, destroy: p, deps: v, next: null }, o = Ke.updateQueue, o === null ? (o = { lastEffect: null, stores: null }, Ke.updateQueue = o, o.lastEffect = i.next = i) : (p = o.lastEffect, p === null ? o.lastEffect = i.next = i : (v = p.next, p.next = i, i.next = v, o.lastEffect = i)), i;
  }
  function Eu() {
    return Wn().memoizedState;
  }
  function ti(i, o, p, v) {
    var S = yr();
    Ke.flags |= i, S.memoizedState = Yi(1 | o, p, void 0, v === void 0 ? null : v);
  }
  function wa(i, o, p, v) {
    var S = Wn();
    v = v === void 0 ? null : v;
    var w = void 0;
    if (rn !== null) {
      var M = rn.memoizedState;
      if (w = M.destroy, v !== null && Vi(v, M.deps)) {
        S.memoizedState = Yi(o, p, w, v);
        return;
      }
    }
    Ke.flags |= i, S.memoizedState = Yi(1 | o, p, w, v);
  }
  function Tu(i, o) {
    return ti(8390656, 8, i, o);
  }
  function Eo(i, o) {
    return wa(2048, 8, i, o);
  }
  function wu(i, o) {
    return wa(4, 2, i, o);
  }
  function zl(i, o) {
    return wa(4, 4, i, o);
  }
  function xu(i, o) {
    if (typeof o == "function")
      return i = i(), o(i), function() {
        o(null);
      };
    if (o != null)
      return i = i(), o.current = i, function() {
        o.current = null;
      };
  }
  function Ll(i, o, p) {
    return p = p != null ? p.concat([i]) : null, wa(4, 4, xu.bind(null, o, i), p);
  }
  function xa() {
  }
  function Qi(i, o) {
    var p = Wn();
    o = o === void 0 ? null : o;
    var v = p.memoizedState;
    return v !== null && o !== null && Vi(o, v[1]) ? v[0] : (p.memoizedState = [i, o], i);
  }
  function gr(i, o) {
    var p = Wn();
    o = o === void 0 ? null : o;
    var v = p.memoizedState;
    return v !== null && o !== null && Vi(o, v[1]) ? v[0] : (i = i(), p.memoizedState = [i, o], i);
  }
  function Qt(i, o, p) {
    return nn & 21 ? (On(p, o) || (p = gt(), Ke.lanes |= p, Zi |= p, i.baseState = !0), o) : (i.baseState && (i.baseState = !1, xn = !0), i.memoizedState = p);
  }
  function _u(i, o) {
    var p = z;
    z = p !== 0 && 4 > p ? p : 4, i(!0);
    var v = we.transition;
    we.transition = {};
    try {
      i(!1), o();
    } finally {
      z = p, we.transition = v;
    }
  }
  function To() {
    return Wn().memoizedState;
  }
  function Cu(i, o, p) {
    var v = Ln(i);
    if (p = { lane: v, action: p, hasEagerState: !1, eagerState: null, next: null }, sc(i))
      cc(o, p);
    else if (p = ho(i, o, p, v), p !== null) {
      var S = Xn();
      Fr(p, i, v, S), fc(p, o, v);
    }
  }
  function Ru(i, o, p) {
    var v = Ln(i), S = { lane: v, action: p, hasEagerState: !1, eagerState: null, next: null };
    if (sc(i))
      cc(o, S);
    else {
      var w = i.alternate;
      if (i.lanes === 0 && (w === null || w.lanes === 0) && (w = o.lastRenderedReducer, w !== null))
        try {
          var M = o.lastRenderedState, F = w(M, p);
          if (S.hasEagerState = !0, S.eagerState = F, On(F, M)) {
            var ue = o.interleaved;
            ue === null ? (S.next = S, En(o)) : (S.next = ue.next, ue.next = S), o.interleaved = S;
            return;
          }
        } catch {
        } finally {
        }
      p = ho(i, o, S, v), p !== null && (S = Xn(), Fr(p, i, v, S), fc(p, o, v));
    }
  }
  function sc(i) {
    var o = i.alternate;
    return i === Ke || o !== null && o === Ke;
  }
  function cc(i, o) {
    ur = ei = !0;
    var p = i.pending;
    p === null ? o.next = o : (o.next = p.next, p.next = o), i.pending = o;
  }
  function fc(i, o, p) {
    if (p & 4194240) {
      var v = o.lanes;
      v &= i.pendingLanes, p |= v, o.lanes = p, In(i, p);
    }
  }
  var _a = { readContext: vr, useCallback: hn, useContext: hn, useEffect: hn, useImperativeHandle: hn, useInsertionEffect: hn, useLayoutEffect: hn, useMemo: hn, useReducer: hn, useRef: hn, useState: hn, useDebugValue: hn, useDeferredValue: hn, useTransition: hn, useMutableSource: hn, useSyncExternalStore: hn, useId: hn, unstable_isNewReconciler: !1 }, dd = { readContext: vr, useCallback: function(i, o) {
    return yr().memoizedState = [i, o === void 0 ? null : o], i;
  }, useContext: vr, useEffect: Tu, useImperativeHandle: function(i, o, p) {
    return p = p != null ? p.concat([i]) : null, ti(
      4,
      4,
      xu.bind(null, o, i),
      p
    );
  }, useLayoutEffect: function(i, o) {
    return ti(4, 4, i, o);
  }, useInsertionEffect: function(i, o) {
    return ti(4, 2, i, o);
  }, useMemo: function(i, o) {
    var p = yr();
    return o = o === void 0 ? null : o, i = i(), p.memoizedState = [i, o], i;
  }, useReducer: function(i, o, p) {
    var v = yr();
    return o = p !== void 0 ? p(o) : o, v.memoizedState = v.baseState = o, i = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: i, lastRenderedState: o }, v.queue = i, i = i.dispatch = Cu.bind(null, Ke, i), [v.memoizedState, i];
  }, useRef: function(i) {
    var o = yr();
    return i = { current: i }, o.memoizedState = i;
  }, useState: Su, useDebugValue: xa, useDeferredValue: function(i) {
    return yr().memoizedState = i;
  }, useTransition: function() {
    var i = Su(!1), o = i[0];
    return i = _u.bind(null, i[1]), yr().memoizedState = i, [o, i];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(i, o) {
    var p = Ke, v = yr(), S = o();
    if (_n === null)
      throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
    nn & 30 || mu(p, o, S), v.memoizedState = S;
    var w = { value: S, getSnapshot: o };
    return v.queue = w, Tu(yu.bind(null, p, w, i), [i]), p.flags |= 2048, Yi(9, vu.bind(null, p, w, S, o), void 0, null), S;
  }, useId: function() {
    var i = yr(), o = _n.identifierPrefix, p = du++;
    return o = ":" + o + "r" + p.toString(32) + ":", i.memoizedState = o;
  }, unstable_isNewReconciler: !1 }, Fl = { readContext: vr, useCallback: Qi, useContext: vr, useEffect: Eo, useImperativeHandle: Ll, useInsertionEffect: wu, useLayoutEffect: zl, useMemo: gr, useReducer: bo, useRef: Eu, useState: function() {
    return bo(Hi);
  }, useDebugValue: xa, useDeferredValue: function(i) {
    var o = Wn();
    return Qt(
      o,
      rn.memoizedState,
      i
    );
  }, useTransition: function() {
    var i = bo(Hi)[0], o = Wn().memoizedState;
    return [i, o];
  }, useMutableSource: pu, useSyncExternalStore: hu, useId: To, unstable_isNewReconciler: !1 }, dc = { readContext: vr, useCallback: Qi, useContext: vr, useEffect: Eo, useImperativeHandle: Ll, useInsertionEffect: wu, useLayoutEffect: zl, useMemo: gr, useReducer: So, useRef: Eu, useState: function() {
    return So(Hi);
  }, useDebugValue: xa, useDeferredValue: function(i) {
    var o = Wn();
    return rn === null ? o.memoizedState = i : Qt(o, rn.memoizedState, i);
  }, useTransition: function() {
    var i = So(Hi)[0], o = Wn().memoizedState;
    return [i, o];
  }, useMutableSource: pu, useSyncExternalStore: hu, useId: To, unstable_isNewReconciler: !1 };
  function Ul(i, o) {
    try {
      var p = "", v = o;
      do
        p += cd(v), v = v.return;
      while (v);
      var S = p;
    } catch (w) {
      S = `
Error generating stack: ` + w.message + `
` + w.stack;
    }
    return { value: i, source: o, stack: S, digest: null };
  }
  function Bl(i, o, p) {
    return { value: i, source: null, stack: p ?? null, digest: o ?? null };
  }
  function Ca(i, o) {
    try {
      console.error(o.value);
    } catch (p) {
      setTimeout(function() {
        throw p;
      });
    }
  }
  var pd = typeof WeakMap == "function" ? WeakMap : Map;
  function Il(i, o, p) {
    p = Xr(-1, p), p.tag = 3, p.payload = { element: null };
    var v = o.value;
    return p.callback = function() {
      ea || (ea = !0, ts = v), Ca(i, o);
    }, p;
  }
  function ql(i, o, p) {
    p = Xr(-1, p), p.tag = 3;
    var v = i.type.getDerivedStateFromError;
    if (typeof v == "function") {
      var S = o.value;
      p.payload = function() {
        return v(S);
      }, p.callback = function() {
        Ca(i, o);
      };
    }
    var w = i.stateNode;
    return w !== null && typeof w.componentDidCatch == "function" && (p.callback = function() {
      Ca(i, o), typeof v != "function" && (zr === null ? zr = /* @__PURE__ */ new Set([this]) : zr.add(this));
      var M = o.stack;
      this.componentDidCatch(o.value, { componentStack: M !== null ? M : "" });
    }), p;
  }
  function pc(i, o, p) {
    var v = i.pingCache;
    if (v === null) {
      v = i.pingCache = new pd();
      var S = /* @__PURE__ */ new Set();
      v.set(o, S);
    } else
      S = v.get(o), S === void 0 && (S = /* @__PURE__ */ new Set(), v.set(o, S));
    S.has(p) || (S.add(p), i = is.bind(null, i, o, p), o.then(i, i));
  }
  var Ki = d.ReactCurrentOwner, xn = !1;
  function mn(i, o, p, v) {
    o.child = i === null ? fd(o, null, p, v) : Ea(o, i.child, p, v);
  }
  function hc(i, o, p, v, S) {
    p = p.render;
    var w = o.ref;
    return ga(o, S), v = go(i, o, p, v, w, S), i !== null && !xn ? (o.updateQueue = i.updateQueue, o.flags &= -2053, i.lanes &= ~S, Pr(i, o, S)) : (o.flags |= 1, mn(i, o, v, S), o.child);
  }
  function Jn(i, o, p, v, S) {
    if (i === null) {
      var w = p.type;
      return typeof w == "function" && !Yu(w) && w.defaultProps === void 0 && p.compare === null && p.defaultProps === void 0 ? (o.tag = 15, o.type = w, Gi(i, o, w, v, S)) : (i = aa(p.type, null, v, o, o.mode, S), i.ref = o.ref, i.return = o, o.child = i);
    }
    if (w = i.child, !(i.lanes & S)) {
      var M = w.memoizedProps;
      if (p = p.compare, p = p !== null ? p : Bi, p(M, v) && i.ref === o.ref)
        return Pr(i, o, S);
    }
    return o.flags |= 1, i = Ti(w, v), i.ref = o.ref, i.return = o, o.child = i;
  }
  function Gi(i, o, p, v, S) {
    if (i !== null) {
      var w = i.memoizedProps;
      if (Bi(w, v) && i.ref === o.ref)
        if (xn = !1, o.pendingProps = v = w, (i.lanes & S) !== 0)
          i.flags & 131072 && (xn = !0);
        else
          return o.lanes = i.lanes, Pr(i, o, S);
    }
    return Ou(i, o, p, v, S);
  }
  function bt(i, o, p) {
    var v = o.pendingProps, S = v.children, w = i !== null ? i.memoizedState : null;
    if (v.mode === "hidden")
      if (!(o.mode & 1))
        o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, k(Ma, sr), sr |= p;
      else {
        if (!(p & 1073741824))
          return i = w !== null ? w.baseLanes | p : p, o.lanes = o.childLanes = 1073741824, o.memoizedState = { baseLanes: i, cachePool: null, transitions: null }, o.updateQueue = null, k(Ma, sr), sr |= i, null;
        o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, v = w !== null ? w.baseLanes : p, k(Ma, sr), sr |= v;
      }
    else
      w !== null ? (v = w.baseLanes | p, o.memoizedState = null) : v = p, k(Ma, sr), sr |= v;
    return mn(i, o, S, p), o.child;
  }
  function wo(i, o) {
    var p = o.ref;
    (i === null && p !== null || i !== null && i.ref !== p) && (o.flags |= 512);
  }
  function Ou(i, o, p, v, S) {
    var w = Et(p) ? Ie : Se.current;
    return w = St(o, w), ga(o, S), p = go(i, o, p, v, w, S), i !== null && !xn ? (o.updateQueue = i.updateQueue, o.flags &= -2053, i.lanes &= ~S, Pr(i, o, S)) : (o.flags |= 1, mn(i, o, p, S), o.child);
  }
  function hd(i, o, p, v, S) {
    if (Et(p)) {
      var w = !0;
      Kn(o);
    } else
      w = !1;
    if (ga(o, S), o.stateNode === null)
      Oa(i, o), Sa(o, p, v), Dr(o, p, v, S), v = !0;
    else if (i === null) {
      var M = o.stateNode, F = o.memoizedProps;
      M.props = F;
      var ue = M.context, ke = p.contextType;
      typeof ke == "object" && ke !== null ? ke = vr(ke) : (ke = Et(p) ? Ie : Se.current, ke = St(o, ke));
      var He = p.getDerivedStateFromProps, _t = typeof He == "function" || typeof M.getSnapshotBeforeUpdate == "function";
      _t || typeof M.UNSAFE_componentWillReceiveProps != "function" && typeof M.componentWillReceiveProps != "function" || (F !== v || ue !== ke) && Gn(o, M, v, ke), or = !1;
      var lt = o.memoizedState;
      M.state = lt, vo(o, v, M, S), ue = o.memoizedState, F !== v || lt !== ue || We.current || or ? (typeof He == "function" && (iu(o, p, He, v), ue = o.memoizedState), (F = or || oc(o, p, F, v, lt, ue, ke)) ? (_t || typeof M.UNSAFE_componentWillMount != "function" && typeof M.componentWillMount != "function" || (typeof M.componentWillMount == "function" && M.componentWillMount(), typeof M.UNSAFE_componentWillMount == "function" && M.UNSAFE_componentWillMount()), typeof M.componentDidMount == "function" && (o.flags |= 4)) : (typeof M.componentDidMount == "function" && (o.flags |= 4), o.memoizedProps = v, o.memoizedState = ue), M.props = v, M.state = ue, M.context = ke, v = F) : (typeof M.componentDidMount == "function" && (o.flags |= 4), v = !1);
    } else {
      M = o.stateNode, ba(i, o), F = o.memoizedProps, ke = o.type === o.elementType ? F : Rr(o.type, F), M.props = ke, _t = o.pendingProps, lt = M.context, ue = p.contextType, typeof ue == "object" && ue !== null ? ue = vr(ue) : (ue = Et(p) ? Ie : Se.current, ue = St(o, ue));
      var Kt = p.getDerivedStateFromProps;
      (He = typeof Kt == "function" || typeof M.getSnapshotBeforeUpdate == "function") || typeof M.UNSAFE_componentWillReceiveProps != "function" && typeof M.componentWillReceiveProps != "function" || (F !== _t || lt !== ue) && Gn(o, M, v, ue), or = !1, lt = o.memoizedState, M.state = lt, vo(o, v, M, S);
      var $t = o.memoizedState;
      F !== _t || lt !== $t || We.current || or ? (typeof Kt == "function" && (iu(o, p, Kt, v), $t = o.memoizedState), (ke = or || oc(o, p, ke, v, lt, $t, ue) || !1) ? (He || typeof M.UNSAFE_componentWillUpdate != "function" && typeof M.componentWillUpdate != "function" || (typeof M.componentWillUpdate == "function" && M.componentWillUpdate(v, $t, ue), typeof M.UNSAFE_componentWillUpdate == "function" && M.UNSAFE_componentWillUpdate(v, $t, ue)), typeof M.componentDidUpdate == "function" && (o.flags |= 4), typeof M.getSnapshotBeforeUpdate == "function" && (o.flags |= 1024)) : (typeof M.componentDidUpdate != "function" || F === i.memoizedProps && lt === i.memoizedState || (o.flags |= 4), typeof M.getSnapshotBeforeUpdate != "function" || F === i.memoizedProps && lt === i.memoizedState || (o.flags |= 1024), o.memoizedProps = v, o.memoizedState = $t), M.props = v, M.state = $t, M.context = ue, v = ke) : (typeof M.componentDidUpdate != "function" || F === i.memoizedProps && lt === i.memoizedState || (o.flags |= 4), typeof M.getSnapshotBeforeUpdate != "function" || F === i.memoizedProps && lt === i.memoizedState || (o.flags |= 1024), v = !1);
    }
    return xo(i, o, p, v, w, S);
  }
  function xo(i, o, p, v, S, w) {
    wo(i, o);
    var M = (o.flags & 128) !== 0;
    if (!v && !M)
      return S && Cr(o, p, !1), Pr(i, o, w);
    v = o.stateNode, Ki.current = o;
    var F = M && typeof p.getDerivedStateFromError != "function" ? null : v.render();
    return o.flags |= 1, i !== null && M ? (o.child = Ea(o, i.child, null, w), o.child = Ea(o, null, F, w)) : mn(i, o, F, w), o.memoizedState = v.state, S && Cr(o, p, !0), o.child;
  }
  function _o(i) {
    var o = i.stateNode;
    o.pendingContext ? en(i, o.pendingContext, o.pendingContext !== o.context) : o.context && en(i, o.context, !1), At(i, o.containerInfo);
  }
  var Vl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Nu(i) {
    return { baseLanes: i, cachePool: null, transitions: null };
  }
  function mc(i, o, p) {
    var v = o.pendingProps, S = tn.current, w = !1, M = (o.flags & 128) !== 0, F;
    if ((F = M) || (F = i !== null && i.memoizedState === null ? !1 : (S & 2) !== 0), F ? (w = !0, o.flags &= -129) : (i === null || i.memoizedState !== null) && (S |= 1), k(tn, S & 1), i === null)
      return i = o.memoizedState, i !== null && i.dehydrated !== null ? (o.mode & 1 ? fe() ? o.lanes = 8 : o.lanes = 1073741824 : o.lanes = 1, null) : (M = v.children, i = v.fallback, w ? (v = o.mode, w = o.child, M = { mode: "hidden", children: M }, !(v & 1) && w !== null ? (w.childLanes = 0, w.pendingProps = M) : w = Ao(M, v, 0, null), i = Hr(i, v, p, null), w.return = o, i.return = o, w.sibling = i, o.child = w, o.child.memoizedState = Nu(p), o.memoizedState = Vl, i) : Mu(o, M));
    if (S = i.memoizedState, S !== null && (F = S.dehydrated, F !== null))
      return vc(i, o, M, v, F, S, p);
    if (w) {
      w = v.fallback, M = o.mode, S = i.child, F = S.sibling;
      var ue = { mode: "hidden", children: v.children };
      return !(M & 1) && o.child !== S ? (v = o.child, v.childLanes = 0, v.pendingProps = ue, o.deletions = null) : (v = Ti(S, ue), v.subtreeFlags = S.subtreeFlags & 14680064), F !== null ? w = Ti(F, w) : (w = Hr(w, M, p, null), w.flags |= 2), w.return = o, v.return = o, v.sibling = w, o.child = v, v = w, w = o.child, M = i.child.memoizedState, M = M === null ? Nu(p) : { baseLanes: M.baseLanes | p, cachePool: null, transitions: M.transitions }, w.memoizedState = M, w.childLanes = i.childLanes & ~p, o.memoizedState = Vl, v;
    }
    return w = i.child, i = w.sibling, v = Ti(w, { mode: "visible", children: v.children }), !(o.mode & 1) && (v.lanes = p), v.return = o, v.sibling = null, i !== null && (p = o.deletions, p === null ? (o.deletions = [i], o.flags |= 16) : p.push(i)), o.child = v, o.memoizedState = null, v;
  }
  function Mu(i, o) {
    return o = Ao({ mode: "visible", children: o }, i.mode, 0, null), o.return = i, i.child = o;
  }
  function $u(i, o, p, v) {
    return v !== null && (Mn === null ? Mn = [v] : Mn.push(v)), Ea(o, i.child, null, p), i = Mu(o, o.pendingProps.children), i.flags |= 2, o.memoizedState = null, i;
  }
  function vc(i, o, p, v, S, w, M) {
    if (p)
      return o.flags & 256 ? (o.flags &= -257, w = Bl(Error("There was an error while hydrating this Suspense boundary. Switched to client rendering.")), $u(i, o, M, w)) : o.memoizedState !== null ? (o.child = i.child, o.flags |= 128, null) : (w = v.fallback, p = o.mode, v = Ao({ mode: "visible", children: v.children }, p, 0, null), w = Hr(w, p, M, null), w.flags |= 2, v.return = o, w.return = o, v.sibling = w, o.child = v, o.mode & 1 && Ea(o, i.child, null, M), o.child.memoizedState = Nu(M), o.memoizedState = Vl, w);
    if (!(o.mode & 1))
      return $u(i, o, M, null);
    if (fe())
      return w = fe().digest, w = Bl(Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), w, void 0), $u(i, o, M, w);
    if (p = (M & i.childLanes) !== 0, xn || p) {
      if (v = _n, v !== null) {
        switch (M & -M) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (v.suspendedLanes | M) ? 0 : p, p !== 0 && p !== w.retryLane && (w.retryLane = p, qi(i, p), Fr(v, i, p, -1));
      }
      return Si(), w = Bl(Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.")), $u(i, o, M, w);
    }
    return fe() ? (o.flags |= 128, o.child = i.child, cr.bind(null, i), fe(), null) : (i = Mu(o, v.children), i.flags |= 4096, i);
  }
  function ni(i, o, p) {
    i.lanes |= o;
    var v = i.alternate;
    v !== null && (v.lanes |= o), nu(i.return, o, p);
  }
  function Wi(i, o, p, v, S) {
    var w = i.memoizedState;
    w === null ? i.memoizedState = { isBackwards: o, rendering: null, renderingStartTime: 0, last: v, tail: p, tailMode: S } : (w.isBackwards = o, w.rendering = null, w.renderingStartTime = 0, w.last = v, w.tail = p, w.tailMode = S);
  }
  function Ra(i, o, p) {
    var v = o.pendingProps, S = v.revealOrder, w = v.tail;
    if (mn(i, o, v.children, p), v = tn.current, v & 2)
      v = v & 1 | 2, o.flags |= 128;
    else {
      if (i !== null && i.flags & 128)
        e:
          for (i = o.child; i !== null; ) {
            if (i.tag === 13)
              i.memoizedState !== null && ni(i, p, o);
            else if (i.tag === 19)
              ni(i, p, o);
            else if (i.child !== null) {
              i.child.return = i, i = i.child;
              continue;
            }
            if (i === o)
              break e;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === o)
                break e;
              i = i.return;
            }
            i.sibling.return = i.return, i = i.sibling;
          }
      v &= 1;
    }
    if (k(tn, v), !(o.mode & 1))
      o.memoizedState = null;
    else
      switch (S) {
        case "forwards":
          for (p = o.child, S = null; p !== null; )
            i = p.alternate, i !== null && cu(i) === null && (S = p), p = p.sibling;
          p = S, p === null ? (S = o.child, o.child = null) : (S = p.sibling, p.sibling = null), Wi(o, !1, S, p, w);
          break;
        case "backwards":
          for (p = null, S = o.child, o.child = null; S !== null; ) {
            if (i = S.alternate, i !== null && cu(i) === null) {
              o.child = S;
              break;
            }
            i = S.sibling, S.sibling = p, p = S, S = i;
          }
          Wi(o, !0, p, null, w);
          break;
        case "together":
          Wi(o, !1, null, null, void 0);
          break;
        default:
          o.memoizedState = null;
      }
    return o.child;
  }
  function Oa(i, o) {
    !(o.mode & 1) && i !== null && (i.alternate = null, o.alternate = null, o.flags |= 2);
  }
  function Pr(i, o, p) {
    if (i !== null && (o.dependencies = i.dependencies), Zi |= o.lanes, !(p & o.childLanes))
      return null;
    if (i !== null && o.child !== i.child)
      throw Error("Resuming work not yet implemented.");
    if (o.child !== null) {
      for (i = o.child, p = Ti(i, i.pendingProps), o.child = p, p.return = o; i.sibling !== null; )
        i = i.sibling, p = p.sibling = Ti(i, i.pendingProps), p.return = o;
      p.sibling = null;
    }
    return o.child;
  }
  function Ji(i, o, p) {
    switch (o.tag) {
      case 3:
        _o(o);
        break;
      case 5:
        Ft(o);
        break;
      case 1:
        Et(o.type) && Kn(o);
        break;
      case 4:
        At(o, o.stateNode.containerInfo);
        break;
      case 10:
        var v = o.type._context, S = o.memoizedProps.value;
        k(fo, v._currentValue2), v._currentValue2 = S;
        break;
      case 13:
        if (v = o.memoizedState, v !== null)
          return v.dehydrated !== null ? (k(tn, tn.current & 1), o.flags |= 128, null) : p & o.child.childLanes ? mc(i, o, p) : (k(tn, tn.current & 1), i = Pr(i, o, p), i !== null ? i.sibling : null);
        k(tn, tn.current & 1);
        break;
      case 19:
        if (v = (p & o.childLanes) !== 0, i.flags & 128) {
          if (v)
            return Ra(i, o, p);
          o.flags |= 128;
        }
        if (S = o.memoizedState, S !== null && (S.rendering = null, S.tail = null, S.lastEffect = null), k(tn, tn.current), v)
          break;
        return null;
      case 22:
      case 23:
        return o.lanes = 0, bt(i, o, p);
    }
    return Pr(i, o, p);
  }
  var lr, Hl, yc, Yl;
  lr = function(i, o) {
    for (var p = o.child; p !== null; ) {
      if (p.tag === 5 || p.tag === 6) {
        var v = i, S = p.stateNode, w = v.children.indexOf(S);
        w !== -1 && v.children.splice(w, 1), v.children.push(S);
      } else if (p.tag !== 4 && p.child !== null) {
        p.child.return = p, p = p.child;
        continue;
      }
      if (p === o)
        break;
      for (; p.sibling === null; ) {
        if (p.return === null || p.return === o)
          return;
        p = p.return;
      }
      p.sibling.return = p.return, p = p.sibling;
    }
  }, Hl = function() {
  }, yc = function(i, o, p, v) {
    i.memoizedProps !== v && (Ta(Zr.current), o.updateQueue = P) && (o.flags |= 4);
  }, Yl = function(i, o, p, v) {
    p !== v && (o.flags |= 4);
  };
  function Na(i, o) {
    switch (i.tailMode) {
      case "hidden":
        o = i.tail;
        for (var p = null; o !== null; )
          o.alternate !== null && (p = o), o = o.sibling;
        p === null ? i.tail = null : p.sibling = null;
        break;
      case "collapsed":
        p = i.tail;
        for (var v = null; p !== null; )
          p.alternate !== null && (v = p), p = p.sibling;
        v === null ? o || i.tail === null ? i.tail = null : i.tail.sibling = null : v.sibling = null;
    }
  }
  function ln(i) {
    var o = i.alternate !== null && i.alternate.child === i.child, p = 0, v = 0;
    if (o)
      for (var S = i.child; S !== null; )
        p |= S.lanes | S.childLanes, v |= S.subtreeFlags & 14680064, v |= S.flags & 14680064, S.return = i, S = S.sibling;
    else
      for (S = i.child; S !== null; )
        p |= S.lanes | S.childLanes, v |= S.subtreeFlags, v |= S.flags, S.return = i, S = S.sibling;
    return i.subtreeFlags |= v, i.childLanes = p, o;
  }
  function gc(i, o, p) {
    var v = o.pendingProps;
    switch (gi(o), o.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ln(o), null;
      case 1:
        return Et(o.type) && Nt(), ln(o), null;
      case 3:
        return p = o.stateNode, Yt(), N(We), N(Se), kl(), p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), i !== null && i.child !== null || i === null || i.memoizedState.isDehydrated && !(o.flags & 256) || (o.flags |= 1024, Mn !== null && (Cn(Mn), Mn = null)), Hl(i, o), ln(o), null;
      case 5:
        Or(o), p = Ta(su.current);
        var S = o.type;
        if (i !== null && o.stateNode != null)
          yc(i, o, S, v, p), i.ref !== o.ref && (o.flags |= 512);
        else {
          if (!v) {
            if (o.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            return ln(o), null;
          }
          Ta(Zr.current), i = { type: S, props: v, isHidden: !1, children: [], internalInstanceHandle: o, rootContainerInstance: p, tag: "INSTANCE" }, lr(i, o, !1, !1), o.stateNode = i, o.ref !== null && (o.flags |= 512);
        }
        return ln(o), null;
      case 6:
        if (i && o.stateNode != null)
          Yl(i, o, i.memoizedProps, v);
        else {
          if (typeof v != "string" && o.stateNode === null)
            throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
          Ta(su.current), Ta(Zr.current), o.stateNode = { text: v, isHidden: !1, tag: "TEXT" };
        }
        return ln(o), null;
      case 13:
        if (N(tn), v = o.memoizedState, i === null || i.memoizedState !== null && i.memoizedState.dehydrated !== null) {
          if (v !== null && v.dehydrated !== null) {
            if (i === null)
              throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
            !(o.flags & 128) && (o.memoizedState = null), o.flags |= 4, ln(o), S = !1;
          } else
            Mn !== null && (Cn(Mn), Mn = null), S = !0;
          if (!S)
            return o.flags & 65536 ? o : null;
        }
        return o.flags & 128 ? (o.lanes = p, o) : (p = v !== null, p !== (i !== null && i.memoizedState !== null) && p && (o.child.flags |= 8192, o.mode & 1 && (i === null || tn.current & 1 ? Tn === 0 && (Tn = 3) : Si())), o.updateQueue !== null && (o.flags |= 4), ln(o), null);
      case 4:
        return Yt(), Hl(i, o), ln(o), null;
      case 10:
        return $n(o.type._context), ln(o), null;
      case 17:
        return Et(o.type) && Nt(), ln(o), null;
      case 19:
        if (N(tn), S = o.memoizedState, S === null)
          return ln(o), null;
        v = (o.flags & 128) !== 0;
        var w = S.rendering;
        if (w === null)
          if (v)
            Na(S, !1);
          else {
            if (Tn !== 0 || i !== null && i.flags & 128)
              for (i = o.child; i !== null; ) {
                if (w = cu(i), w !== null) {
                  for (o.flags |= 128, Na(S, !1), i = w.updateQueue, i !== null && (o.updateQueue = i, o.flags |= 4), o.subtreeFlags = 0, i = p, p = o.child; p !== null; )
                    v = p, S = i, v.flags &= 14680066, w = v.alternate, w === null ? (v.childLanes = 0, v.lanes = S, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = w.childLanes, v.lanes = w.lanes, v.child = w.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = w.memoizedProps, v.memoizedState = w.memoizedState, v.updateQueue = w.updateQueue, v.type = w.type, S = w.dependencies, v.dependencies = S === null ? null : { lanes: S.lanes, firstContext: S.firstContext }), p = p.sibling;
                  return k(tn, tn.current & 1 | 2), o.child;
                }
                i = i.sibling;
              }
            S.tail !== null && Qe() > Sr && (o.flags |= 128, v = !0, Na(S, !1), o.lanes = 4194304);
          }
        else {
          if (!v)
            if (i = cu(w), i !== null) {
              if (o.flags |= 128, v = !0, i = i.updateQueue, i !== null && (o.updateQueue = i, o.flags |= 4), Na(S, !0), S.tail === null && S.tailMode === "hidden" && !w.alternate)
                return ln(o), null;
            } else
              2 * Qe() - S.renderingStartTime > Sr && p !== 1073741824 && (o.flags |= 128, v = !0, Na(S, !1), o.lanes = 4194304);
          S.isBackwards ? (w.sibling = o.child, o.child = w) : (i = S.last, i !== null ? i.sibling = w : o.child = w, S.last = w);
        }
        return S.tail !== null ? (o = S.tail, S.rendering = o, S.tail = o.sibling, S.renderingStartTime = Qe(), o.sibling = null, i = tn.current, k(tn, v ? i & 1 | 2 : i & 1), o) : (ln(o), null);
      case 22:
      case 23:
        return Er(), p = o.memoizedState !== null, i !== null && i.memoizedState !== null !== p && (o.flags |= 8192), p && o.mode & 1 ? sr & 1073741824 && (ln(o), o.subtreeFlags & 6 && (o.flags |= 8192)) : ln(o), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error("Unknown unit of work tag (" + o.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  }
  function Ql(i, o) {
    switch (gi(o), o.tag) {
      case 1:
        return Et(o.type) && Nt(), i = o.flags, i & 65536 ? (o.flags = i & -65537 | 128, o) : null;
      case 3:
        return Yt(), N(We), N(Se), kl(), i = o.flags, i & 65536 && !(i & 128) ? (o.flags = i & -65537 | 128, o) : null;
      case 5:
        return Or(o), null;
      case 13:
        if (N(tn), i = o.memoizedState, i !== null && i.dehydrated !== null && o.alternate === null)
          throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
        return i = o.flags, i & 65536 ? (o.flags = i & -65537 | 128, o) : null;
      case 19:
        return N(tn), null;
      case 4:
        return Yt(), null;
      case 10:
        return $n(o.type._context), null;
      case 22:
      case 23:
        return Er(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var md = typeof WeakSet == "function" ? WeakSet : Set, ht = null;
  function Au(i, o) {
    var p = i.ref;
    if (p !== null)
      if (typeof p == "function")
        try {
          p(null);
        } catch (v) {
          yn(i, o, v);
        }
      else
        p.current = null;
  }
  function Kl(i, o, p) {
    try {
      p();
    } catch (v) {
      yn(i, o, v);
    }
  }
  var bc = !1;
  function Gl(i, o) {
    for (ht = o; ht !== null; )
      if (i = ht, o = i.child, (i.subtreeFlags & 1028) !== 0 && o !== null)
        o.return = i, ht = o;
      else
        for (; ht !== null; ) {
          i = ht;
          try {
            var p = i.alternate;
            if (i.flags & 1024)
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (p !== null) {
                    var v = p.memoizedProps, S = p.memoizedState, w = i.stateNode, M = w.getSnapshotBeforeUpdate(i.elementType === i.type ? v : Rr(i.type, v), S);
                    w.__reactInternalSnapshotBeforeUpdate = M;
                  }
                  break;
                case 3:
                  i.stateNode.containerInfo.children.splice(0);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
              }
          } catch (F) {
            yn(i, i.return, F);
          }
          if (o = i.sibling, o !== null) {
            o.return = i.return, ht = o;
            break;
          }
          ht = i.return;
        }
    return p = bc, bc = !1, p;
  }
  function Co(i, o, p) {
    var v = o.updateQueue;
    if (v = v !== null ? v.lastEffect : null, v !== null) {
      var S = v = v.next;
      do {
        if ((S.tag & i) === i) {
          var w = S.destroy;
          S.destroy = void 0, w !== void 0 && Kl(o, p, w);
        }
        S = S.next;
      } while (S !== v);
    }
  }
  function Wl(i, o) {
    if (o = o.updateQueue, o = o !== null ? o.lastEffect : null, o !== null) {
      var p = o = o.next;
      do {
        if ((p.tag & i) === i) {
          var v = p.create;
          p.destroy = v();
        }
        p = p.next;
      } while (p !== o);
    }
  }
  function Ro(i) {
    var o = i.alternate;
    o !== null && (i.alternate = null, Ro(o)), i.child = null, i.deletions = null, i.sibling = null, i.stateNode = null, i.return = null, i.dependencies = null, i.memoizedProps = null, i.memoizedState = null, i.pendingProps = null, i.stateNode = null, i.updateQueue = null;
  }
  function Jl(i) {
    return i.tag === 5 || i.tag === 3 || i.tag === 4;
  }
  function Xl(i) {
    e:
      for (; ; ) {
        for (; i.sibling === null; ) {
          if (i.return === null || Jl(i.return))
            return null;
          i = i.return;
        }
        for (i.sibling.return = i.return, i = i.sibling; i.tag !== 5 && i.tag !== 6 && i.tag !== 18; ) {
          if (i.flags & 2 || i.child === null || i.tag === 4)
            continue e;
          i.child.return = i, i = i.child;
        }
        if (!(i.flags & 2))
          return i.stateNode;
      }
  }
  function Du(i, o, p) {
    var v = i.tag;
    if (v === 5 || v === 6)
      i = i.stateNode, o ? un(p, i, o) : Ot(p, i);
    else if (v !== 4 && (i = i.child, i !== null))
      for (Du(i, o, p), i = i.sibling; i !== null; )
        Du(i, o, p), i = i.sibling;
  }
  function Zl(i, o, p) {
    var v = i.tag;
    if (v === 5 || v === 6)
      i = i.stateNode, o ? un(p, i, o) : Ot(p, i);
    else if (v !== 4 && (i = i.child, i !== null))
      for (Zl(i, o, p), i = i.sibling; i !== null; )
        Zl(i, o, p), i = i.sibling;
  }
  var qn = null;
  function Xi(i, o, p) {
    for (p = p.child; p !== null; )
      Sc(i, o, p), p = p.sibling;
  }
  function Sc(i, o, p) {
    if (oe && typeof oe.onCommitFiberUnmount == "function")
      try {
        oe.onCommitFiberUnmount(G, p);
      } catch {
      }
    switch (p.tag) {
      case 5:
        Au(p, o);
      case 6:
        var v = qn;
        qn = null, Xi(i, o, p), qn = v, qn !== null && (i = qn, p = i.children.indexOf(p.stateNode), i.children.splice(p, 1));
        break;
      case 18:
        qn !== null && fe(qn, p.stateNode);
        break;
      case 4:
        v = qn, qn = p.stateNode.containerInfo, Xi(i, o, p), qn = v;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (v = p.updateQueue, v !== null && (v = v.lastEffect, v !== null)) {
          var S = v = v.next;
          do {
            var w = S, M = w.destroy;
            w = w.tag, M !== void 0 && (w & 2 || w & 4) && Kl(p, o, M), S = S.next;
          } while (S !== v);
        }
        Xi(i, o, p);
        break;
      case 1:
        if (Au(p, o), v = p.stateNode, typeof v.componentWillUnmount == "function")
          try {
            v.props = p.memoizedProps, v.state = p.memoizedState, v.componentWillUnmount();
          } catch (F) {
            yn(p, o, F);
          }
        Xi(i, o, p);
        break;
      case 21:
        Xi(i, o, p);
        break;
      case 22:
        Xi(i, o, p);
        break;
      default:
        Xi(i, o, p);
    }
  }
  function vd(i) {
    var o = i.updateQueue;
    if (o !== null) {
      i.updateQueue = null;
      var p = i.stateNode;
      p === null && (p = i.stateNode = new md()), o.forEach(function(v) {
        var S = ai.bind(null, i, v);
        p.has(v) || (p.add(v), v.then(S, S));
      });
    }
  }
  function jr(i, o) {
    var p = o.deletions;
    if (p !== null)
      for (var v = 0; v < p.length; v++) {
        var S = p[v];
        try {
          var w = i, M = o, F = M;
          e:
            for (; F !== null; ) {
              switch (F.tag) {
                case 5:
                  qn = F.stateNode;
                  break e;
                case 3:
                  qn = F.stateNode.containerInfo;
                  break e;
                case 4:
                  qn = F.stateNode.containerInfo;
                  break e;
              }
              F = F.return;
            }
          if (qn === null)
            throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
          Sc(w, M, S), qn = null;
          var ue = S.alternate;
          ue !== null && (ue.return = null), S.return = null;
        } catch (ke) {
          yn(S, o, ke);
        }
      }
    if (o.subtreeFlags & 12854)
      for (o = o.child; o !== null; )
        Ec(o, i), o = o.sibling;
  }
  function Ec(i, o) {
    var p = i.alternate, v = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (jr(o, i), kr(i), v & 4) {
          try {
            Co(3, i, i.return), Wl(3, i);
          } catch (w) {
            yn(i, i.return, w);
          }
          try {
            Co(5, i, i.return);
          } catch (w) {
            yn(i, i.return, w);
          }
        }
        break;
      case 1:
        jr(o, i), kr(i), v & 512 && p !== null && Au(p, p.return);
        break;
      case 5:
        if (jr(o, i), kr(i), v & 512 && p !== null && Au(p, p.return), v & 4) {
          var S = i.stateNode;
          if (S != null && (v = i.memoizedProps, o = i.type, p = i.updateQueue, i.updateQueue = null, p !== null))
            try {
              S.type = o, S.props = v;
            } catch (w) {
              yn(i, i.return, w);
            }
        }
        break;
      case 6:
        if (jr(
          o,
          i
        ), kr(i), v & 4) {
          if (i.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          S = i.stateNode, v = i.memoizedProps;
          try {
            S.text = v;
          } catch (w) {
            yn(i, i.return, w);
          }
        }
        break;
      case 3:
        jr(o, i), kr(i);
        break;
      case 4:
        jr(o, i), kr(i);
        break;
      case 13:
        jr(o, i), kr(i), S = i.child, S.flags & 8192 && (o = S.memoizedState !== null, S.stateNode.isHidden = o, !o || S.alternate !== null && S.alternate.memoizedState !== null || (No = Qe())), v & 4 && vd(i);
        break;
      case 22:
        if (jr(o, i), kr(i), v & 8192)
          e:
            for (v = i.memoizedState !== null, i.stateNode.isHidden = v, o = null, p = i; ; ) {
              if (p.tag === 5) {
                if (o === null) {
                  o = p;
                  try {
                    S = p.stateNode, v ? S.isHidden = !0 : p.stateNode.isHidden = !1;
                  } catch (w) {
                    yn(i, i.return, w);
                  }
                }
              } else if (p.tag === 6) {
                if (o === null)
                  try {
                    p.stateNode.isHidden = !!v;
                  } catch (w) {
                    yn(i, i.return, w);
                  }
              } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === i) && p.child !== null) {
                p.child.return = p, p = p.child;
                continue;
              }
              if (p === i)
                break e;
              for (; p.sibling === null; ) {
                if (p.return === null || p.return === i)
                  break e;
                o === p && (o = null), p = p.return;
              }
              o === p && (o = null), p.sibling.return = p.return, p = p.sibling;
            }
        break;
      case 19:
        jr(o, i), kr(i), v & 4 && vd(i);
        break;
      case 21:
        break;
      default:
        jr(o, i), kr(i);
    }
  }
  function kr(i) {
    var o = i.flags;
    if (o & 2) {
      try {
        e: {
          for (var p = i.return; p !== null; ) {
            if (Jl(p)) {
              var v = p;
              break e;
            }
            p = p.return;
          }
          throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        }
        switch (v.tag) {
          case 5:
            var S = v.stateNode;
            v.flags & 32 && (v.flags &= -33);
            var w = Xl(i);
            Zl(i, w, S);
            break;
          case 3:
          case 4:
            var M = v.stateNode.containerInfo, F = Xl(i);
            Du(i, F, M);
            break;
          default:
            throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
        }
      } catch (ue) {
        yn(i, i.return, ue);
      }
      i.flags &= -3;
    }
    o & 4096 && (i.flags &= -4097);
  }
  function yd(i) {
    for (ht = i; ht !== null; ) {
      var o = ht, p = o.child;
      if (o.subtreeFlags & 8772 && p !== null)
        p.return = o, ht = p;
      else
        for (o = i; ht !== null; ) {
          if (p = ht, p.flags & 8772) {
            var v = p.alternate;
            try {
              if (p.flags & 8772)
                switch (p.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wl(5, p);
                    break;
                  case 1:
                    var S = p.stateNode;
                    if (p.flags & 4)
                      if (v === null)
                        S.componentDidMount();
                      else {
                        var w = p.elementType === p.type ? v.memoizedProps : Rr(p.type, v.memoizedProps);
                        S.componentDidUpdate(w, v.memoizedState, S.__reactInternalSnapshotBeforeUpdate);
                      }
                    var M = p.updateQueue;
                    M !== null && Dl(p, M, S);
                    break;
                  case 3:
                    var F = p.updateQueue;
                    if (F !== null) {
                      if (v = null, p.child !== null)
                        switch (p.child.tag) {
                          case 5:
                            v = xt(p.child.stateNode);
                            break;
                          case 1:
                            v = p.child.stateNode;
                        }
                      Dl(p, F, v);
                    }
                    break;
                  case 5:
                    break;
                  case 6:
                    break;
                  case 4:
                    break;
                  case 12:
                    break;
                  case 13:
                    break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  default:
                    throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
                }
              if (p.flags & 512) {
                v = void 0;
                var ue = p.ref;
                if (ue !== null) {
                  var ke = p.stateNode;
                  switch (p.tag) {
                    case 5:
                      v = xt(ke);
                      break;
                    default:
                      v = ke;
                  }
                  typeof ue == "function" ? ue(v) : ue.current = v;
                }
              }
            } catch (He) {
              yn(p, p.return, He);
            }
          }
          if (p === o) {
            ht = null;
            break;
          }
          if (v = p.sibling, v !== null) {
            v.return = p.return, ht = v;
            break;
          }
          ht = p.return;
        }
    }
  }
  var gd = Math.ceil, Pu = d.ReactCurrentDispatcher, ju = d.ReactCurrentOwner, br = d.ReactCurrentBatchConfig, Mt = 0, _n = null, vn = null, kn = 0, sr = 0, Ma = $(0), Tn = 0, Oo = null, Zi = 0, ku = 0, es = 0, zu = null, zn = null, No = 0, Sr = 1 / 0, Nr = null, ea = !1, ts = null, zr = null, Lu = !1, Lr = null, Fu = 0, ta = 0, Uu = null, Mo = -1, $o = 0;
  function Xn() {
    return Mt & 6 ? Qe() : Mo !== -1 ? Mo : Mo = Qe();
  }
  function Ln(i) {
    return i.mode & 1 ? Mt & 2 && kn !== 0 ? kn & -kn : sd.transition !== null ? ($o === 0 && ($o = gt()), $o) : (i = z, i !== 0 ? i : 16) : 1;
  }
  function Fr(i, o, p, v) {
    if (50 < ta)
      throw ta = 0, Uu = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
    pt(i, p, v), (!(Mt & 2) || i !== _n) && (i === _n && (!(Mt & 2) && (ku |= p), Tn === 4 && Ir(i, kn)), Vn(i, v), p === 1 && Mt === 0 && !(o.mode & 1) && (Sr = Qe() + 500, Sn && Ar()));
  }
  function Vn(i, o) {
    for (var p = i.callbackNode, v = i.suspendedLanes, S = i.pingedLanes, w = i.expirationTimes, M = i.pendingLanes; 0 < M; ) {
      var F = 31 - re(M), ue = 1 << F, ke = w[F];
      ke === -1 ? (!(ue & v) || ue & S) && (w[F] = mt(ue, o)) : ke <= o && (i.expiredLanes |= ue), M &= ~ue;
    }
    if (v = Ze(i, i === _n ? kn : 0), v === 0)
      p !== null && Ae(p), i.callbackNode = null, i.callbackPriority = 0;
    else if (o = v & -v, i.callbackPriority !== o) {
      if (p != null && Ae(p), o === 1)
        i.tag === 0 ? (p = Zn.bind(null, i), Sn = !0, Nn === null ? Nn = [p] : Nn.push(p)) : (p = Zn.bind(null, i), Nn === null ? Nn = [p] : Nn.push(p)), ge(me, Ar), p = null;
      else {
        switch (B(v)) {
          case 1:
            p = me;
            break;
          case 4:
            p = C;
            break;
          case 16:
            p = D;
            break;
          case 536870912:
            p = V;
            break;
          default:
            p = D;
        }
        p = Hu(p, Ur.bind(null, i));
      }
      i.callbackPriority = o, i.callbackNode = p;
    }
  }
  function Ur(i, o) {
    if (Mo = -1, $o = 0, Mt & 6)
      throw Error("Should not already be working.");
    var p = i.callbackNode;
    if (ia() && i.callbackNode !== p)
      return null;
    var v = Ze(i, i === _n ? kn : 0);
    if (v === 0)
      return null;
    if (v & 30 || v & i.expiredLanes || o)
      o = ra(i, v);
    else {
      o = v;
      var S = Mt;
      Mt |= 2;
      var w = ns();
      (_n !== i || kn !== o) && (Nr = null, Sr = Qe() + 500, ii(i, o));
      do
        try {
          Bu();
          break;
        } catch (F) {
          na(i, F);
        }
      while (!0);
      $l(), Pu.current = w, Mt = S, vn !== null ? o = 0 : (_n = null, kn = 0, o = Tn);
    }
    if (o !== 0) {
      if (o === 2 && (S = J(i), S !== 0 && (v = S, o = Br(i, S))), o === 1)
        throw p = Oo, ii(i, 0), Ir(i, v), Vn(
          i,
          Qe()
        ), p;
      if (o === 6)
        Ir(i, v);
      else {
        if (S = i.current.alternate, !(v & 30) && !Fn(S) && (o = ra(i, v), o === 2 && (w = J(i), w !== 0 && (v = w, o = Br(i, w))), o === 1))
          throw p = Oo, ii(i, 0), Ir(i, v), Vn(i, Qe()), p;
        switch (i.finishedWork = S, i.finishedLanes = v, o) {
          case 0:
          case 1:
            throw Error("Root did not complete. This is a bug in React.");
          case 2:
            Ei(i, zn, Nr);
            break;
          case 3:
            if (Ir(i, v), (v & 130023424) === v && (o = No + 500 - Qe(), 10 < o)) {
              if (Ze(i, 0) !== 0)
                break;
              if (S = i.suspendedLanes, (S & v) !== v) {
                Xn(), i.pingedLanes |= i.suspendedLanes & S;
                break;
              }
              i.timeoutHandle = rt(Ei.bind(
                null,
                i,
                zn,
                Nr
              ), o);
              break;
            }
            Ei(i, zn, Nr);
            break;
          case 4:
            if (Ir(i, v), (v & 4194240) === v)
              break;
            for (o = i.eventTimes, S = -1; 0 < v; ) {
              var M = 31 - re(v);
              w = 1 << M, M = o[M], M > S && (S = M), v &= ~w;
            }
            if (v = S, v = Qe() - v, v = (120 > v ? 120 : 480 > v ? 480 : 1080 > v ? 1080 : 1920 > v ? 1920 : 3e3 > v ? 3e3 : 4320 > v ? 4320 : 1960 * gd(v / 1960)) - v, 10 < v) {
              i.timeoutHandle = rt(Ei.bind(null, i, zn, Nr), v);
              break;
            }
            Ei(i, zn, Nr);
            break;
          case 5:
            Ei(i, zn, Nr);
            break;
          default:
            throw Error("Unknown root exit status.");
        }
      }
    }
    return Vn(i, Qe()), i.callbackNode === p ? Ur.bind(null, i) : null;
  }
  function Br(i, o) {
    var p = zu;
    return i.current.memoizedState.isDehydrated && (ii(i, o).flags |= 256), i = ra(i, o), i !== 2 && (o = zn, zn = p, o !== null && Cn(o)), i;
  }
  function Cn(i) {
    zn === null ? zn = i : zn.push.apply(zn, i);
  }
  function Fn(i) {
    for (var o = i; ; ) {
      if (o.flags & 16384) {
        var p = o.updateQueue;
        if (p !== null && (p = p.stores, p !== null))
          for (var v = 0; v < p.length; v++) {
            var S = p[v], w = S.getSnapshot;
            S = S.value;
            try {
              if (!On(w(), S))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (p = o.child, o.subtreeFlags & 16384 && p !== null)
        p.return = o, o = p;
      else {
        if (o === i)
          break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === i)
            return !0;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }
    return !0;
  }
  function Ir(i, o) {
    for (o &= ~es, o &= ~ku, i.suspendedLanes |= o, i.pingedLanes &= ~o, i = i.expirationTimes; 0 < o; ) {
      var p = 31 - re(o), v = 1 << p;
      i[p] = -1, o &= ~v;
    }
  }
  function Zn(i) {
    if (Mt & 6)
      throw Error("Should not already be working.");
    ia();
    var o = Ze(i, 0);
    if (!(o & 1))
      return Vn(i, Qe()), null;
    var p = ra(i, o);
    if (i.tag !== 0 && p === 2) {
      var v = J(i);
      v !== 0 && (o = v, p = Br(i, v));
    }
    if (p === 1)
      throw p = Oo, ii(i, 0), Ir(i, o), Vn(i, Qe()), p;
    if (p === 6)
      throw Error("Root did not complete. This is a bug in React.");
    return i.finishedWork = i.current.alternate, i.finishedLanes = o, Ei(i, zn, Nr), Vn(i, Qe()), null;
  }
  function ri(i) {
    Lr !== null && Lr.tag === 0 && !(Mt & 6) && ia();
    var o = Mt;
    Mt |= 1;
    var p = br.transition, v = z;
    try {
      if (br.transition = null, z = 1, i)
        return i();
    } finally {
      z = v, br.transition = p, Mt = o, !(Mt & 6) && Ar();
    }
  }
  function Er() {
    sr = Ma.current, N(Ma);
  }
  function ii(i, o) {
    i.finishedWork = null, i.finishedLanes = 0;
    var p = i.timeoutHandle;
    if (p !== -1 && (i.timeoutHandle = -1, Fe(p)), vn !== null)
      for (p = vn.return; p !== null; ) {
        var v = p;
        switch (gi(v), v.tag) {
          case 1:
            v = v.type.childContextTypes, v != null && Nt();
            break;
          case 3:
            Yt(), N(We), N(Se), kl();
            break;
          case 5:
            Or(v);
            break;
          case 4:
            Yt();
            break;
          case 13:
            N(tn);
            break;
          case 19:
            N(tn);
            break;
          case 10:
            $n(v.type._context);
            break;
          case 22:
          case 23:
            Er();
        }
        p = p.return;
      }
    if (_n = i, vn = i = Ti(i.current, null), kn = sr = o, Tn = 0, Oo = null, es = ku = Zi = 0, zn = zu = null, Ii !== null) {
      for (o = 0; o < Ii.length; o++)
        if (p = Ii[o], v = p.interleaved, v !== null) {
          p.interleaved = null;
          var S = v.next, w = p.pending;
          if (w !== null) {
            var M = w.next;
            w.next = S, v.next = M;
          }
          p.pending = v;
        }
      Ii = null;
    }
    return i;
  }
  function na(i, o) {
    do {
      var p = vn;
      try {
        if ($l(), fu.current = _a, ei) {
          for (var v = Ke.memoizedState; v !== null; ) {
            var S = v.queue;
            S !== null && (S.pending = null), v = v.next;
          }
          ei = !1;
        }
        if (nn = 0, Wt = rn = Ke = null, ur = !1, ju.current = null, p === null || p.return === null) {
          Tn = 1, Oo = o, vn = null;
          break;
        }
        e: {
          var w = i, M = p.return, F = p, ue = o;
          if (o = kn, F.flags |= 32768, ue !== null && typeof ue == "object" && typeof ue.then == "function") {
            var ke = ue, He = F, _t = He.tag;
            if (!(He.mode & 1) && (_t === 0 || _t === 11 || _t === 15)) {
              var lt = He.alternate;
              lt ? (He.updateQueue = lt.updateQueue, He.memoizedState = lt.memoizedState, He.lanes = lt.lanes) : (He.updateQueue = null, He.memoizedState = null);
            }
            t: {
              He = M;
              do {
                var Kt;
                if (Kt = He.tag === 13) {
                  var $t = He.memoizedState;
                  Kt = $t !== null ? $t.dehydrated !== null : !0;
                }
                if (Kt) {
                  var fn = He;
                  break t;
                }
                He = He.return;
              } while (He !== null);
              fn = null;
            }
            if (fn !== null) {
              if (fn.flags &= -257, ue = fn, He = o, ue.mode & 1)
                ue.flags |= 65536, ue.lanes = He;
              else if (ue === M)
                ue.flags |= 65536;
              else {
                if (ue.flags |= 128, F.flags |= 131072, F.flags &= -52805, F.tag === 1)
                  if (F.alternate === null)
                    F.tag = 17;
                  else {
                    var _i = Xr(-1, 1);
                    _i.tag = 2, bi(F, _i, 1);
                  }
                F.lanes |= 1;
              }
              fn.mode & 1 && pc(w, ke, o), o = fn, w = ke;
              var X = o.updateQueue;
              if (X === null) {
                var H = /* @__PURE__ */ new Set();
                H.add(w), o.updateQueue = H;
              } else
                X.add(w);
              break e;
            } else {
              if (!(o & 1)) {
                pc(w, ke, o), Si();
                break e;
              }
              ue = Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
            }
          }
          w = ue = Ul(ue, F), Tn !== 4 && (Tn = 2), zu === null ? zu = [w] : zu.push(w), w = M;
          do {
            switch (w.tag) {
              case 3:
                ke = ue, w.flags |= 65536, o &= -o, w.lanes |= o;
                var te = Il(w, ke, o);
                Al(w, te);
                break e;
              case 1:
                ke = ue;
                var qe = w.type, Je = w.stateNode;
                if (!(w.flags & 128) && (typeof qe.getDerivedStateFromError == "function" || Je !== null && typeof Je.componentDidCatch == "function" && (zr === null || !zr.has(Je)))) {
                  w.flags |= 65536, o &= -o, w.lanes |= o;
                  var vt = ql(w, ke, o);
                  Al(w, vt);
                  break e;
                }
            }
            w = w.return;
          } while (w !== null);
        }
        rs(p);
      } catch (st) {
        o = st, vn === p && p !== null && (vn = p = p.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ns() {
    var i = Pu.current;
    return Pu.current = _a, i === null ? _a : i;
  }
  function Si() {
    (Tn === 0 || Tn === 3 || Tn === 2) && (Tn = 4), _n === null || !(Zi & 268435455) && !(ku & 268435455) || Ir(_n, kn);
  }
  function ra(i, o) {
    var p = Mt;
    Mt |= 2;
    var v = ns();
    (_n !== i || kn !== o) && (Nr = null, ii(i, o));
    do
      try {
        qr();
        break;
      } catch (S) {
        na(i, S);
      }
    while (!0);
    if ($l(), Mt = p, Pu.current = v, vn !== null)
      throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
    return _n = null, kn = 0, Tn;
  }
  function qr() {
    for (; vn !== null; )
      Iu(vn);
  }
  function Bu() {
    for (; vn !== null && !et(); )
      Iu(vn);
  }
  function Iu(i) {
    var o = Vu(i.alternate, i, sr);
    i.memoizedProps = i.pendingProps, o === null ? rs(i) : vn = o, ju.current = null;
  }
  function rs(i) {
    var o = i;
    do {
      var p = o.alternate;
      if (i = o.return, o.flags & 32768) {
        if (p = Ql(p, o), p !== null) {
          p.flags &= 32767, vn = p;
          return;
        }
        if (i !== null)
          i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null;
        else {
          Tn = 6, vn = null;
          return;
        }
      } else if (p = gc(p, o, sr), p !== null) {
        vn = p;
        return;
      }
      if (o = o.sibling, o !== null) {
        vn = o;
        return;
      }
      vn = o = i;
    } while (o !== null);
    Tn === 0 && (Tn = 5);
  }
  function Ei(i, o, p) {
    var v = z, S = br.transition;
    try {
      br.transition = null, z = 1, qu(i, o, p, v);
    } finally {
      br.transition = S, z = v;
    }
    return null;
  }
  function qu(i, o, p, v) {
    do
      ia();
    while (Lr !== null);
    if (Mt & 6)
      throw Error("Should not already be working.");
    p = i.finishedWork;
    var S = i.finishedLanes;
    if (p === null)
      return null;
    if (i.finishedWork = null, i.finishedLanes = 0, p === i.current)
      throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
    i.callbackNode = null, i.callbackPriority = 0;
    var w = p.lanes | p.childLanes;
    if (Zt(i, w), i === _n && (vn = _n = null, kn = 0), !(p.subtreeFlags & 2064) && !(p.flags & 2064) || Lu || (Lu = !0, Hu(D, function() {
      return ia(), null;
    })), w = (p.flags & 15990) !== 0, p.subtreeFlags & 15990 || w) {
      w = br.transition, br.transition = null;
      var M = z;
      z = 1;
      var F = Mt;
      Mt |= 4, ju.current = null, Gl(i, p), Ec(p, i), i.current = p, yd(p), Pe(), Mt = F, z = M, br.transition = w;
    } else
      i.current = p;
    if (Lu && (Lu = !1, Lr = i, Fu = S), w = i.pendingLanes, w === 0 && (zr = null), be(p.stateNode), Vn(i, Qe()), o !== null)
      for (v = i.onRecoverableError, p = 0; p < o.length; p++)
        S = o[p], v(S.value, { componentStack: S.stack, digest: S.digest });
    if (ea)
      throw ea = !1, i = ts, ts = null, i;
    return Fu & 1 && i.tag !== 0 && ia(), w = i.pendingLanes, w & 1 ? i === Uu ? ta++ : (ta = 0, Uu = i) : ta = 0, Ar(), null;
  }
  function ia() {
    if (Lr !== null) {
      var i = B(Fu), o = br.transition, p = z;
      try {
        if (br.transition = null, z = 16 > i ? 16 : i, Lr === null)
          var v = !1;
        else {
          if (i = Lr, Lr = null, Fu = 0, Mt & 6)
            throw Error("Cannot flush passive effects while already rendering.");
          var S = Mt;
          for (Mt |= 4, ht = i.current; ht !== null; ) {
            var w = ht, M = w.child;
            if (ht.flags & 16) {
              var F = w.deletions;
              if (F !== null) {
                for (var ue = 0; ue < F.length; ue++) {
                  var ke = F[ue];
                  for (ht = ke; ht !== null; ) {
                    var He = ht;
                    switch (He.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Co(8, He, w);
                    }
                    var _t = He.child;
                    if (_t !== null)
                      _t.return = He, ht = _t;
                    else
                      for (; ht !== null; ) {
                        He = ht;
                        var lt = He.sibling, Kt = He.return;
                        if (Ro(He), He === ke) {
                          ht = null;
                          break;
                        }
                        if (lt !== null) {
                          lt.return = Kt, ht = lt;
                          break;
                        }
                        ht = Kt;
                      }
                  }
                }
                var $t = w.alternate;
                if ($t !== null) {
                  var fn = $t.child;
                  if (fn !== null) {
                    $t.child = null;
                    do {
                      var _i = fn.sibling;
                      fn.sibling = null, fn = _i;
                    } while (fn !== null);
                  }
                }
                ht = w;
              }
            }
            if (w.subtreeFlags & 2064 && M !== null)
              M.return = w, ht = M;
            else
              e:
                for (; ht !== null; ) {
                  if (w = ht, w.flags & 2048)
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Co(9, w, w.return);
                    }
                  var X = w.sibling;
                  if (X !== null) {
                    X.return = w.return, ht = X;
                    break e;
                  }
                  ht = w.return;
                }
          }
          var H = i.current;
          for (ht = H; ht !== null; ) {
            M = ht;
            var te = M.child;
            if (M.subtreeFlags & 2064 && te !== null)
              te.return = M, ht = te;
            else
              e:
                for (M = H; ht !== null; ) {
                  if (F = ht, F.flags & 2048)
                    try {
                      switch (F.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Wl(9, F);
                      }
                    } catch (Je) {
                      yn(F, F.return, Je);
                    }
                  if (F === M) {
                    ht = null;
                    break e;
                  }
                  var qe = F.sibling;
                  if (qe !== null) {
                    qe.return = F.return, ht = qe;
                    break e;
                  }
                  ht = F.return;
                }
          }
          if (Mt = S, Ar(), oe && typeof oe.onPostCommitFiberRoot == "function")
            try {
              oe.onPostCommitFiberRoot(G, i);
            } catch {
            }
          v = !0;
        }
        return v;
      } finally {
        z = p, br.transition = o;
      }
    }
    return !1;
  }
  function Tc(i, o, p) {
    o = Ul(p, o), o = Il(i, o, 1), i = bi(i, o, 1), o = Xn(), i !== null && (pt(i, 1, o), Vn(i, o));
  }
  function yn(i, o, p) {
    if (i.tag === 3)
      Tc(i, i, p);
    else
      for (o = i.return; o !== null; ) {
        if (o.tag === 3) {
          Tc(o, i, p);
          break;
        } else if (o.tag === 1) {
          var v = o.stateNode;
          if (typeof o.type.getDerivedStateFromError == "function" || typeof v.componentDidCatch == "function" && (zr === null || !zr.has(v))) {
            i = Ul(p, i), i = ql(o, i, 1), o = bi(o, i, 1), i = Xn(), o !== null && (pt(o, 1, i), Vn(o, i));
            break;
          }
        }
        o = o.return;
      }
  }
  function is(i, o, p) {
    var v = i.pingCache;
    v !== null && v.delete(o), o = Xn(), i.pingedLanes |= i.suspendedLanes & p, _n === i && (kn & p) === p && (Tn === 4 || Tn === 3 && (kn & 130023424) === kn && 500 > Qe() - No ? ii(i, 0) : es |= p), Vn(i, o);
  }
  function wc(i, o) {
    o === 0 && (i.mode & 1 ? (o = ot, ot <<= 1, !(ot & 130023424) && (ot = 4194304)) : o = 1);
    var p = Xn();
    i = qi(i, o), i !== null && (pt(i, o, p), Vn(i, p));
  }
  function cr(i) {
    var o = i.memoizedState, p = 0;
    o !== null && (p = o.retryLane), wc(i, p);
  }
  function ai(i, o) {
    var p = 0;
    switch (i.tag) {
      case 13:
        var v = i.stateNode, S = i.memoizedState;
        S !== null && (p = S.retryLane);
        break;
      case 19:
        v = i.stateNode;
        break;
      default:
        throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    }
    v !== null && v.delete(o), wc(i, p);
  }
  var Vu;
  Vu = function(i, o, p) {
    if (i !== null)
      if (i.memoizedProps !== o.pendingProps || We.current)
        xn = !0;
      else {
        if (!(i.lanes & p) && !(o.flags & 128))
          return xn = !1, Ji(i, o, p);
        xn = !!(i.flags & 131072);
      }
    else
      xn = !1;
    switch (o.lanes = 0, o.tag) {
      case 2:
        var v = o.type;
        Oa(i, o), i = o.pendingProps;
        var S = St(o, Se.current);
        if (ga(o, p), S = go(null, o, v, i, S, p), o.flags |= 1, typeof S == "object" && S !== null && typeof S.render == "function" && S.$$typeof === void 0) {
          if (o.tag = 1, o.memoizedState = null, o.updateQueue = null, Et(v)) {
            var w = !0;
            Kn(o);
          } else
            w = !1;
          o.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null, ru(o), S.updater = au, o.stateNode = S, S._reactInternals = o, Dr(o, v, i, p), o = xo(null, o, v, !0, w, p);
        } else
          o.tag = 0, mn(null, o, S, p), o = o.child;
        return o;
      case 16:
        v = o.elementType;
        e: {
          switch (Oa(i, o), i = o.pendingProps, S = v._init, v = S(v._payload), o.type = v, S = o.tag = $a(v), i = Rr(v, i), S) {
            case 0:
              o = Ou(null, o, v, i, p);
              break e;
            case 1:
              o = hd(null, o, v, i, p);
              break e;
            case 11:
              o = hc(null, o, v, i, p);
              break e;
            case 14:
              o = Jn(null, o, v, Rr(v.type, i), p);
              break e;
          }
          throw Error("Element type is invalid. Received a promise that resolves to: " + v + ". Lazy element type must resolve to a class or function.");
        }
        return o;
      case 0:
        return v = o.type, S = o.pendingProps, S = o.elementType === v ? S : Rr(v, S), Ou(i, o, v, S, p);
      case 1:
        return v = o.type, S = o.pendingProps, S = o.elementType === v ? S : Rr(v, S), hd(i, o, v, S, p);
      case 3:
        if (_o(o), i === null)
          throw Error("Should have a current fiber. This is a bug in React.");
        return S = o.pendingProps, v = o.memoizedState.element, ba(i, o), vo(o, S, null, p), S = o.memoizedState.element, S === v ? o = Pr(i, o, p) : (mn(i, o, S, p), o = o.child), o;
      case 5:
        return Ft(o), v = o.pendingProps.children, wo(i, o), mn(i, o, v, p), o.child;
      case 6:
        return null;
      case 13:
        return mc(i, o, p);
      case 4:
        return At(o, o.stateNode.containerInfo), v = o.pendingProps, i === null ? o.child = Ea(o, null, v, p) : mn(i, o, v, p), o.child;
      case 11:
        return v = o.type, S = o.pendingProps, S = o.elementType === v ? S : Rr(v, S), hc(i, o, v, S, p);
      case 7:
        return mn(i, o, o.pendingProps, p), o.child;
      case 8:
        return mn(i, o, o.pendingProps.children, p), o.child;
      case 12:
        return mn(i, o, o.pendingProps.children, p), o.child;
      case 10:
        e: {
          v = o.type._context, S = o.pendingProps, w = o.memoizedProps;
          var M = S.value;
          if (k(fo, v._currentValue2), v._currentValue2 = M, w !== null)
            if (On(w.value, M)) {
              if (w.children === S.children && !We.current) {
                o = Pr(i, o, p);
                break e;
              }
            } else
              for (w = o.child, w !== null && (w.return = o); w !== null; ) {
                var F = w.dependencies;
                if (F !== null) {
                  M = w.child;
                  for (var ue = F.firstContext; ue !== null; ) {
                    if (ue.context === v) {
                      if (w.tag === 1) {
                        ue = Xr(-1, p & -p), ue.tag = 2;
                        var ke = w.updateQueue;
                        if (ke !== null) {
                          ke = ke.shared;
                          var He = ke.pending;
                          He === null ? ue.next = ue : (ue.next = He.next, He.next = ue), ke.pending = ue;
                        }
                      }
                      w.lanes |= p, ue = w.alternate, ue !== null && (ue.lanes |= p), nu(w.return, p, o), F.lanes |= p;
                      break;
                    }
                    ue = ue.next;
                  }
                } else if (w.tag === 10)
                  M = w.type === o.type ? null : w.child;
                else if (w.tag === 18) {
                  if (M = w.return, M === null)
                    throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");
                  M.lanes |= p, F = M.alternate, F !== null && (F.lanes |= p), nu(M, p, o), M = w.sibling;
                } else
                  M = w.child;
                if (M !== null)
                  M.return = w;
                else
                  for (M = w; M !== null; ) {
                    if (M === o) {
                      M = null;
                      break;
                    }
                    if (w = M.sibling, w !== null) {
                      w.return = M.return, M = w;
                      break;
                    }
                    M = M.return;
                  }
                w = M;
              }
          mn(i, o, S.children, p), o = o.child;
        }
        return o;
      case 9:
        return S = o.type, v = o.pendingProps.children, ga(o, p), S = vr(S), v = v(S), o.flags |= 1, mn(i, o, v, p), o.child;
      case 14:
        return v = o.type, S = Rr(v, o.pendingProps), S = Rr(v.type, S), Jn(i, o, v, S, p);
      case 15:
        return Gi(i, o, o.type, o.pendingProps, p);
      case 17:
        return v = o.type, S = o.pendingProps, S = o.elementType === v ? S : Rr(v, S), Oa(i, o), o.tag = 1, Et(v) ? (i = !0, Kn(o)) : i = !1, ga(o, p), Sa(o, v, S), Dr(o, v, S, p), xo(null, o, v, !0, i, p);
      case 19:
        return Ra(i, o, p);
      case 22:
        return bt(i, o, p);
    }
    throw Error("Unknown unit of work tag (" + o.tag + "). This error is likely caused by a bug in React. Please file an issue.");
  };
  function Hu(i, o) {
    return ge(i, o);
  }
  function xc(i, o, p, v) {
    this.tag = i, this.key = p, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = o, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = v, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Vr(i, o, p, v) {
    return new xc(i, o, p, v);
  }
  function Yu(i) {
    return i = i.prototype, !(!i || !i.isReactComponent);
  }
  function $a(i) {
    if (typeof i == "function")
      return Yu(i) ? 1 : 0;
    if (i != null) {
      if (i = i.$$typeof, i === U)
        return 11;
      if (i === ye)
        return 14;
    }
    return 2;
  }
  function Ti(i, o) {
    var p = i.alternate;
    return p === null ? (p = Vr(i.tag, o, i.key, i.mode), p.elementType = i.elementType, p.type = i.type, p.stateNode = i.stateNode, p.alternate = i, i.alternate = p) : (p.pendingProps = o, p.type = i.type, p.flags = 0, p.subtreeFlags = 0, p.deletions = null), p.flags = i.flags & 14680064, p.childLanes = i.childLanes, p.lanes = i.lanes, p.child = i.child, p.memoizedProps = i.memoizedProps, p.memoizedState = i.memoizedState, p.updateQueue = i.updateQueue, o = i.dependencies, p.dependencies = o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }, p.sibling = i.sibling, p.index = i.index, p.ref = i.ref, p;
  }
  function aa(i, o, p, v, S, w) {
    var M = 2;
    if (v = i, typeof i == "function")
      Yu(i) && (M = 1);
    else if (typeof i == "string")
      M = 5;
    else
      e:
        switch (i) {
          case E:
            return Hr(p.children, S, w, o);
          case b:
            M = 8, S |= 8;
            break;
          case x:
            return i = Vr(12, p, o, S | 2), i.elementType = x, i.lanes = w, i;
          case q:
            return i = Vr(13, p, o, S), i.elementType = q, i.lanes = w, i;
          case A:
            return i = Vr(19, p, o, S), i.elementType = A, i.lanes = w, i;
          case le:
            return Ao(p, S, w, o);
          default:
            if (typeof i == "object" && i !== null)
              switch (i.$$typeof) {
                case R:
                  M = 10;
                  break e;
                case j:
                  M = 9;
                  break e;
                case U:
                  M = 11;
                  break e;
                case ye:
                  M = 14;
                  break e;
                case ee:
                  M = 16, v = null;
                  break e;
              }
            throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((i == null ? i : typeof i) + "."));
        }
    return o = Vr(M, p, o, S), o.elementType = i, o.type = v, o.lanes = w, o;
  }
  function Hr(i, o, p, v) {
    return i = Vr(7, i, v, o), i.lanes = p, i;
  }
  function Ao(i, o, p, v) {
    return i = Vr(22, i, v, o), i.elementType = le, i.lanes = p, i.stateNode = { isHidden: !1 }, i;
  }
  function wi(i, o, p) {
    return i = Vr(6, i, null, o), i.lanes = p, i;
  }
  function xi(i, o, p) {
    return o = Vr(4, i.children !== null ? i.children : [], i.key, o), o.lanes = p, o.stateNode = { containerInfo: i.containerInfo, pendingChildren: null, implementation: i.implementation }, o;
  }
  function _c(i, o, p, v, S) {
    this.tag = o, this.containerInfo = i, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ct(0), this.expirationTimes = ct(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ct(0), this.identifierPrefix = v, this.onRecoverableError = S;
  }
  function as(i, o, p, v, S, w, M) {
    return i = new _c(i, o, !1, w, M), o === 1 ? (o = 1, v === !0 && (o |= 8)) : o = 0, v = Vr(3, null, null, o), i.current = v, v.stateNode = i, v.memoizedState = { element: null, isDehydrated: !1, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ru(v), i;
  }
  function os(i, o, p, v) {
    var S = o.current, w = Xn(), M = Ln(S);
    e:
      if (p) {
        p = p._reactInternals;
        t: {
          if (ve(p) !== p || p.tag !== 1)
            throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
          var F = p;
          do {
            switch (F.tag) {
              case 3:
                F = F.stateNode.context;
                break t;
              case 1:
                if (Et(F.type)) {
                  F = F.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            F = F.return;
          } while (F !== null);
          throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
        }
        if (p.tag === 1) {
          var ue = p.type;
          if (Et(ue)) {
            p = jn(p, ue, F);
            break e;
          }
        }
        p = F;
      } else
        p = Oe;
    return o.context === null ? o.context = p : o.pendingContext = p, o = Xr(w, M), o.payload = { element: i }, v = v === void 0 ? null : v, v !== null && (o.callback = v), i = bi(S, o, M), i !== null && (Fr(i, S, M, w), mo(i, S, M)), M;
  }
  function Aa() {
    return null;
  }
  var bd = t.unstable_act, Sd = { createNodeMock: function() {
    return null;
  } };
  function Qu(i) {
    if (i.isHidden)
      return null;
    switch (i.tag) {
      case "TEXT":
        return i.text;
      case "INSTANCE":
        var o = i.props, p = ["children"];
        if (o == null)
          o = {};
        else {
          var v = {}, S = Object.keys(o), w;
          for (w = 0; w < S.length; w++) {
            var M = S[w];
            0 <= p.indexOf(M) || (v[M] = o[M]);
          }
          o = v;
        }
        if (p = null, i.children && i.children.length)
          for (v = 0; v < i.children.length; v++)
            S = Qu(i.children[v]), S !== null && (p === null ? p = [S] : p.push(S));
        return i = { type: i.type, props: o, children: p }, Object.defineProperty(i, "$$typeof", { value: Symbol.for("react.test.json") }), i;
      default:
        throw Error("Unexpected node type in toJSON: " + i.tag);
    }
  }
  function Do(i) {
    return i ? (i = Po(i), i.length === 0 ? null : i.length === 1 ? Ku(i[0]) : us(i.map(Ku))) : null;
  }
  function Po(i) {
    for (var o = []; i != null; )
      o.push(i), i = i.sibling;
    return o;
  }
  function us(i) {
    var o = [];
    for (i = [{ i: 0, array: i }]; i.length; )
      for (var p = i.pop(); p.i < p.array.length; ) {
        var v = p.array[p.i];
        if (p.i += 1, ie(v)) {
          i.push(p), i.push({ i: 0, array: v });
          break;
        }
        o.push(v);
      }
    return o;
  }
  function Ku(i) {
    if (i == null)
      return null;
    switch (i.tag) {
      case 3:
        return Do(i.child);
      case 4:
        return Do(i.child);
      case 1:
        return { nodeType: "component", type: i.type, props: s({}, i.memoizedProps), instance: i.stateNode, rendered: Do(i.child) };
      case 0:
      case 15:
        return { nodeType: "component", type: i.type, props: s({}, i.memoizedProps), instance: null, rendered: Do(i.child) };
      case 5:
        return { nodeType: "host", type: i.type, props: s({}, i.memoizedProps), instance: null, rendered: us(Po(i.child).map(Ku)) };
      case 6:
        return i.stateNode.text;
      case 7:
      case 10:
      case 9:
      case 8:
      case 12:
      case 11:
      case 14:
      case 17:
      case 21:
        return Do(i.child);
      default:
        throw Error("toTree() does not yet know how to handle nodes with tag=" + i.tag);
    }
  }
  var ls = /* @__PURE__ */ new Set([0, 1, 5, 11, 14, 15, 3]);
  function ss(i) {
    var o = [], p = i;
    if (p.child === null)
      return o;
    p.child.return = p, p = p.child;
    e:
      for (; ; ) {
        var v = !1;
        if (ls.has(p.tag) ? o.push(Ju(p)) : p.tag === 6 ? o.push("" + p.memoizedProps) : v = !0, v && p.child !== null)
          p.child.return = p, p = p.child;
        else {
          for (; p.sibling === null; ) {
            if (p.return === i)
              break e;
            p = p.return;
          }
          p.sibling.return = p.return, p = p.sibling;
        }
      }
    return o;
  }
  var Ed = function() {
    function i(p) {
      if (!ls.has(p.tag))
        throw Error("Unexpected object passed to ReactTestInstance constructor (tag: " + p.tag + "). This is probably a bug in React.");
      this._fiber = p;
    }
    var o = i.prototype;
    return o._currentFiber = function() {
      var p = ce(this._fiber);
      if (p === null)
        throw Error("Can't read from currently-mounting component. This error is likely caused by a bug in React. Please file an issue.");
      return p;
    }, o.find = function(p) {
      return Da(this.findAll(p, { deep: !1 }), "matching custom predicate: " + p.toString());
    }, o.findByType = function(p) {
      return Da(this.findAllByType(p, { deep: !1 }), 'with node type: "' + (se(p) || "Unknown") + '"');
    }, o.findByProps = function(p) {
      return Da(this.findAllByProps(p, { deep: !1 }), "with props: " + JSON.stringify(p));
    }, o.findAll = function(p) {
      return Gu(this, p, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : null);
    }, o.findAllByType = function(p) {
      return Gu(this, function(v) {
        return v.type === p;
      }, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : null);
    }, o.findAllByProps = function(p) {
      return Gu(this, function(v) {
        var S;
        if (S = v.props)
          e: {
            for (var w in p)
              if (v.props[w] !== p[w]) {
                S = !1;
                break e;
              }
            S = !0;
          }
        return S;
      }, 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : null);
    }, u(i, [{ key: "instance", get: function() {
      return this._fiber.tag === 5 ? xt(this._fiber.stateNode) : this._fiber.stateNode;
    } }, { key: "type", get: function() {
      return this._fiber.type;
    } }, { key: "props", get: function() {
      return this._currentFiber().memoizedProps;
    } }, { key: "parent", get: function() {
      for (var p = this._fiber.return; p !== null; ) {
        if (ls.has(p.tag)) {
          if (p.tag === 3 && 2 > ss(p).length)
            break;
          return Ju(p);
        }
        p = p.return;
      }
      return null;
    } }, { key: "children", get: function() {
      return ss(this._currentFiber());
    } }]), i;
  }();
  function Gu(i, o, p) {
    var v = p ? p.deep : !0, S = [];
    return o(i) && (S.push(i), !v) || i.children.forEach(function(w) {
      typeof w != "string" && S.push.apply(S, Gu(w, o, p));
    }), S;
  }
  function Da(i, o) {
    if (i.length === 1)
      return i[0];
    throw Error((i.length === 0 ? "No instances found " : "Expected 1 but found " + i.length + " instances ") + o);
  }
  function Td(i) {
    console.error(i);
  }
  var Wu = /* @__PURE__ */ new WeakMap();
  function Ju(i) {
    var o = Wu.get(i);
    return o === void 0 && i.alternate !== null && (o = Wu.get(i.alternate)), o === void 0 && (o = new Ed(i), Wu.set(i, o)), o;
  }
  var Un = { findFiberByHostInstance: function() {
    throw Error("TestRenderer does not support findFiberByHostInstance()");
  }, bundleType: 0, version: "18.2.0", rendererPackageName: "react-test-renderer" }, jo = {
    bundleType: Un.bundleType,
    version: Un.version,
    rendererPackageName: Un.rendererPackageName,
    rendererConfig: Un.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: d.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(i) {
      return i = ce(i), i = i !== null ? Xe(i) : null, i === null ? null : i.stateNode;
    },
    findFiberByHostInstance: Un.findFiberByHostInstance || Aa,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xu.isDisabled && Xu.supportsFiber)
      try {
        G = Xu.inject(jo), oe = Xu;
      } catch {
      }
  }
  return pl._Scheduler = r, pl.act = bd, pl.create = function(i, o) {
    var p = Sd.createNodeMock, v = !1, S = !1;
    typeof o == "object" && o !== null && (typeof o.createNodeMock == "function" && (p = o.createNodeMock), o.unstable_isConcurrent === !0 && (v = !0), o.unstable_strictMode === !0 && (S = !0));
    var w = { children: [], createNodeMock: p, tag: "CONTAINER" }, M = as(w, v ? 1 : 0, null, S, null, "", Td);
    if (M == null)
      throw Error("something went wrong");
    return os(i, M, null, null), i = { _Scheduler: r, root: void 0, toJSON: function() {
      if (M == null || M.current == null || w == null || w.children.length === 0)
        return null;
      if (w.children.length === 1)
        return Qu(w.children[0]);
      if (w.children.length === 2 && w.children[0].isHidden === !0 && w.children[1].isHidden === !1)
        return Qu(w.children[1]);
      var F = null;
      if (w.children && w.children.length)
        for (var ue = 0; ue < w.children.length; ue++) {
          var ke = Qu(w.children[ue]);
          ke !== null && (F === null ? F = [ke] : F.push(ke));
        }
      return F;
    }, toTree: function() {
      return M == null || M.current == null ? null : Ku(M.current);
    }, update: function(F) {
      M != null && M.current != null && os(F, M, null, null);
    }, unmount: function() {
      M != null && M.current != null && (os(null, M, null, null), M = w = null);
    }, getInstance: function() {
      if (M == null || M.current == null)
        return null;
      e: {
        var F = M.current;
        if (F.child)
          switch (F.child.tag) {
            case 5:
              F = xt(F.child.stateNode);
              break e;
            default:
              F = F.child.stateNode;
          }
        else
          F = null;
      }
      return F;
    }, unstable_flushSync: ri }, Object.defineProperty(i, "root", { configurable: !0, enumerable: !0, get: function() {
      if (M === null)
        throw Error("Can't access .root on unmounted test renderer");
      var F = ss(M.current);
      if (F.length === 0)
        throw Error("Can't access .root on unmounted test renderer");
      return F.length === 1 ? F[0] : Ju(M.current);
    } }), i;
  }, pl.unstable_batchedUpdates = function(i, o) {
    var p = Mt;
    Mt |= 1;
    try {
      return i(o);
    } finally {
      Mt = p, Mt === 0 && (Sr = Qe() + 500, Sn && Ar());
    }
  }, pl;
}
process.env.NODE_ENV === "production" ? im.exports = lx() : im.exports = ux();
var sx = im.exports;
const wg = /* @__PURE__ */ bS(sx);
function zi(t, r, a) {
  const c = typeof t;
  if (!a.includes(c))
    throw new TypeError(`${r} value must be ${a.join(" or ")}, received "${c}"`);
}
function wS(t) {
  return t != null && typeof t == "object" && !Array.isArray(t);
}
function cx(t) {
  return t === Object.prototype || t === Function.prototype || t === RegExp.prototype;
}
function am(t) {
  return Object.prototype.toString.apply(t).slice(8, -1);
}
function fx(t, r) {
  const a = typeof r == "function" ? r : (c) => r.add(c);
  Object.getOwnPropertyNames(t).forEach(a), Object.getOwnPropertySymbols(t).forEach(a);
}
function xS(t) {
  const r = /* @__PURE__ */ new Set();
  return cx(t) ? [] : (fx(t, r), Array.from(r));
}
const _S = { forceWritable: !1 };
function xg(t, r = _S) {
  return om(t, /* @__PURE__ */ new WeakMap(), r);
}
function om(t, r, a = _S) {
  let c, u;
  if (r.has(t))
    return r.get(t);
  if (Array.isArray(t)) {
    for (u = Array(c = t.length), r.set(t, u); c--; )
      u[c] = om(t[c], r, a);
    return u;
  }
  if (Object.prototype.toString.call(t) === "[object Object]") {
    u = Object.create(Object.getPrototypeOf(t)), r.set(t, u);
    const s = xS(t);
    for (const d of s) {
      const m = Object.getOwnPropertyDescriptor(t, d);
      if (!m)
        continue;
      const y = om(t[d], r, a);
      "get" in m ? Object.defineProperty(u, d, {
        ...m,
        get() {
          return y;
        }
      }) : Object.defineProperty(u, d, {
        ...m,
        writable: a.forceWritable ? !0 : m.writable,
        value: y
      });
    }
    return u;
  }
  return t;
}
function dx() {
}
function px(t, r, a = void 0) {
  const c = r.replace(/\[(\d+)\]/g, ".$1").split(".");
  let u = t;
  for (const s of c)
    if (u = Object(u)[s], u === void 0)
      return a;
  return u;
}
function _g() {
  let t = null, r = null;
  const a = new Promise((c, u) => {
    t = c, r = u;
  });
  return a.resolve = t, a.reject = r, a;
}
var ao = {}, wm = { exports: {} };
wm.exports;
(function(t) {
  const a = (s = 0) => (d) => `\x1B[${38 + s};5;${d}m`, c = (s = 0) => (d, m, y) => `\x1B[${38 + s};2;${d};${m};${y}m`;
  function u() {
    const s = /* @__PURE__ */ new Map(), d = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    d.color.gray = d.color.blackBright, d.bgColor.bgGray = d.bgColor.bgBlackBright, d.color.grey = d.color.blackBright, d.bgColor.bgGrey = d.bgColor.bgBlackBright;
    for (const [m, y] of Object.entries(d)) {
      for (const [E, b] of Object.entries(y))
        d[E] = {
          open: `\x1B[${b[0]}m`,
          close: `\x1B[${b[1]}m`
        }, y[E] = d[E], s.set(b[0], b[1]);
      Object.defineProperty(d, m, {
        value: y,
        enumerable: !1
      });
    }
    return Object.defineProperty(d, "codes", {
      value: s,
      enumerable: !1
    }), d.color.close = "\x1B[39m", d.bgColor.close = "\x1B[49m", d.color.ansi256 = a(), d.color.ansi16m = c(), d.bgColor.ansi256 = a(10), d.bgColor.ansi16m = c(10), Object.defineProperties(d, {
      rgbToAnsi256: {
        value: (m, y, E) => m === y && y === E ? m < 8 ? 16 : m > 248 ? 231 : Math.round((m - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(m / 255 * 5) + 6 * Math.round(y / 255 * 5) + Math.round(E / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (m) => {
          const y = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(m.toString(16));
          if (!y)
            return [0, 0, 0];
          let { colorString: E } = y.groups;
          E.length === 3 && (E = E.split("").map((x) => x + x).join(""));
          const b = Number.parseInt(E, 16);
          return [
            b >> 16 & 255,
            b >> 8 & 255,
            b & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (m) => d.rgbToAnsi256(...d.hexToRgb(m)),
        enumerable: !1
      }
    }), d;
  }
  Object.defineProperty(t, "exports", {
    enumerable: !0,
    get: u
  });
})(wm);
var hx = wm.exports, pa = {};
Object.defineProperty(pa, "__esModule", {
  value: !0
});
pa.printIteratorEntries = vx;
pa.printIteratorValues = yx;
pa.printListItems = gx;
pa.printObjectProperties = bx;
const mx = (t, r) => {
  const a = Object.keys(t), c = r !== null ? a.sort(r) : a;
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((u) => {
    Object.getOwnPropertyDescriptor(t, u).enumerable && c.push(u);
  }), c;
};
function vx(t, r, a, c, u, s, d = ": ") {
  let m = "", y = 0, E = t.next();
  if (!E.done) {
    m += r.spacingOuter;
    const b = a + r.indent;
    for (; !E.done; ) {
      if (m += b, y++ === r.maxWidth) {
        m += "…";
        break;
      }
      const x = s(
        E.value[0],
        r,
        b,
        c,
        u
      ), R = s(
        E.value[1],
        r,
        b,
        c,
        u
      );
      m += x + d + R, E = t.next(), E.done ? r.min || (m += ",") : m += `,${r.spacingInner}`;
    }
    m += r.spacingOuter + a;
  }
  return m;
}
function yx(t, r, a, c, u, s) {
  let d = "", m = 0, y = t.next();
  if (!y.done) {
    d += r.spacingOuter;
    const E = a + r.indent;
    for (; !y.done; ) {
      if (d += E, m++ === r.maxWidth) {
        d += "…";
        break;
      }
      d += s(y.value, r, E, c, u), y = t.next(), y.done ? r.min || (d += ",") : d += `,${r.spacingInner}`;
    }
    d += r.spacingOuter + a;
  }
  return d;
}
function gx(t, r, a, c, u, s) {
  let d = "";
  if (t.length) {
    d += r.spacingOuter;
    const m = a + r.indent;
    for (let y = 0; y < t.length; y++) {
      if (d += m, y === r.maxWidth) {
        d += "…";
        break;
      }
      y in t && (d += s(t[y], r, m, c, u)), y < t.length - 1 ? d += `,${r.spacingInner}` : r.min || (d += ",");
    }
    d += r.spacingOuter + a;
  }
  return d;
}
function bx(t, r, a, c, u, s) {
  let d = "";
  const m = mx(t, r.compareKeys);
  if (m.length) {
    d += r.spacingOuter;
    const y = a + r.indent;
    for (let E = 0; E < m.length; E++) {
      const b = m[E], x = s(b, r, y, c, u), R = s(t[b], r, y, c, u);
      d += `${y + x}: ${R}`, E < m.length - 1 ? d += `,${r.spacingInner}` : r.min || (d += ",");
    }
    d += r.spacingOuter + a;
  }
  return d;
}
var Qa = {};
Object.defineProperty(Qa, "__esModule", {
  value: !0
});
Qa.test = Qa.serialize = Qa.default = void 0;
var Cg = pa, Nh = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const Sx = typeof Nh == "function" && Nh.for ? Nh.for("jest.asymmetricMatcher") : 1267621, Df = " ", CS = (t, r, a, c, u, s) => {
  const d = t.toString();
  if (d === "ArrayContaining" || d === "ArrayNotContaining")
    return ++c > r.maxDepth ? `[${d}]` : `${d + Df}[${(0, Cg.printListItems)(
      t.sample,
      r,
      a,
      c,
      u,
      s
    )}]`;
  if (d === "ObjectContaining" || d === "ObjectNotContaining")
    return ++c > r.maxDepth ? `[${d}]` : `${d + Df}{${(0, Cg.printObjectProperties)(
      t.sample,
      r,
      a,
      c,
      u,
      s
    )}}`;
  if (d === "StringMatching" || d === "StringNotMatching" || d === "StringContaining" || d === "StringNotContaining")
    return d + Df + s(t.sample, r, a, c, u);
  if (typeof t.toAsymmetricMatcher != "function")
    throw new Error(
      `Asymmetric matcher ${t.constructor.name} does not implement toAsymmetricMatcher()`
    );
  return t.toAsymmetricMatcher();
};
Qa.serialize = CS;
const RS = (t) => t && t.$$typeof === Sx;
Qa.test = RS;
const Ex = {
  serialize: CS,
  test: RS
};
var Tx = Ex;
Qa.default = Tx;
var Ka = {};
Object.defineProperty(Ka, "__esModule", {
  value: !0
});
Ka.test = Ka.serialize = Ka.default = void 0;
var Rg = pa;
const wx = " ", OS = ["DOMStringMap", "NamedNodeMap"], xx = /^(HTML\w*Collection|NodeList)$/, _x = (t) => OS.indexOf(t) !== -1 || xx.test(t), NS = (t) => t && t.constructor && !!t.constructor.name && _x(t.constructor.name);
Ka.test = NS;
const Cx = (t) => t.constructor.name === "NamedNodeMap", MS = (t, r, a, c, u, s) => {
  const d = t.constructor.name;
  return ++c > r.maxDepth ? `[${d}]` : (r.min ? "" : d + wx) + (OS.indexOf(d) !== -1 ? `{${(0, Rg.printObjectProperties)(
    Cx(t) ? Array.from(t).reduce((m, y) => (m[y.name] = y.value, m), {}) : {
      ...t
    },
    r,
    a,
    c,
    u,
    s
  )}}` : `[${(0, Rg.printListItems)(
    Array.from(t),
    r,
    a,
    c,
    u,
    s
  )}]`);
};
Ka.serialize = MS;
const Rx = {
  serialize: MS,
  test: NS
};
var Ox = Rx;
Ka.default = Ox;
var Ga = {}, ir = {}, xm = {};
Object.defineProperty(xm, "__esModule", {
  value: !0
});
xm.default = Nx;
function Nx(t) {
  return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(ir, "__esModule", {
  value: !0
});
ir.printText = ir.printProps = ir.printElementAsLeaf = ir.printElement = ir.printComment = ir.printChildren = void 0;
var $S = Mx(xm);
function Mx(t) {
  return t && t.__esModule ? t : { default: t };
}
const $x = (t, r, a, c, u, s, d) => {
  const m = c + a.indent, y = a.colors;
  return t.map((E) => {
    const b = r[E];
    let x = d(b, a, m, u, s);
    return typeof b != "string" && (x.indexOf(`
`) !== -1 && (x = a.spacingOuter + m + x + a.spacingOuter + c), x = `{${x}}`), `${a.spacingInner + c + y.prop.open + E + y.prop.close}=${y.value.open}${x}${y.value.close}`;
  }).join("");
};
ir.printProps = $x;
const Ax = (t, r, a, c, u, s) => t.map(
  (d) => r.spacingOuter + a + (typeof d == "string" ? AS(d, r) : s(d, r, a, c, u))
).join("");
ir.printChildren = Ax;
const AS = (t, r) => {
  const a = r.colors.content;
  return a.open + (0, $S.default)(t) + a.close;
};
ir.printText = AS;
const Dx = (t, r) => {
  const a = r.colors.comment;
  return `${a.open}<!--${(0, $S.default)(t)}-->${a.close}`;
};
ir.printComment = Dx;
const Px = (t, r, a, c, u) => {
  const s = c.colors.tag;
  return `${s.open}<${t}${r && s.close + r + c.spacingOuter + u + s.open}${a ? `>${s.close}${a}${c.spacingOuter}${u}${s.open}</${t}` : `${r && !c.min ? "" : " "}/`}>${s.close}`;
};
ir.printElement = Px;
const jx = (t, r) => {
  const a = r.colors.tag;
  return `${a.open}<${t}${a.close} …${a.open} />${a.close}`;
};
ir.printElementAsLeaf = jx;
Object.defineProperty(Ga, "__esModule", {
  value: !0
});
Ga.test = Ga.serialize = Ga.default = void 0;
var hl = ir;
const kx = 1, DS = 3, PS = 8, jS = 11, zx = /^((HTML|SVG)\w*)?Element$/, Lx = (t) => {
  try {
    return typeof t.hasAttribute == "function" && t.hasAttribute("is");
  } catch {
    return !1;
  }
}, Fx = (t) => {
  const r = t.constructor.name, { nodeType: a, tagName: c } = t, u = typeof c == "string" && c.includes("-") || Lx(t);
  return a === kx && (zx.test(r) || u) || a === DS && r === "Text" || a === PS && r === "Comment" || a === jS && r === "DocumentFragment";
}, kS = (t) => {
  var r;
  return ((r = t == null ? void 0 : t.constructor) == null ? void 0 : r.name) && Fx(t);
};
Ga.test = kS;
function Ux(t) {
  return t.nodeType === DS;
}
function Bx(t) {
  return t.nodeType === PS;
}
function Mh(t) {
  return t.nodeType === jS;
}
const zS = (t, r, a, c, u, s) => {
  if (Ux(t))
    return (0, hl.printText)(t.data, r);
  if (Bx(t))
    return (0, hl.printComment)(t.data, r);
  const d = Mh(t) ? "DocumentFragment" : t.tagName.toLowerCase();
  return ++c > r.maxDepth ? (0, hl.printElementAsLeaf)(d, r) : (0, hl.printElement)(
    d,
    (0, hl.printProps)(
      Mh(t) ? [] : Array.from(t.attributes, (m) => m.name).sort(),
      Mh(t) ? {} : Array.from(t.attributes).reduce((m, y) => (m[y.name] = y.value, m), {}),
      r,
      a + r.indent,
      c,
      u,
      s
    ),
    (0, hl.printChildren)(
      Array.prototype.slice.call(t.childNodes || t.children),
      r,
      a + r.indent,
      c,
      u,
      s
    ),
    r,
    a
  );
};
Ga.serialize = zS;
const Ix = {
  serialize: zS,
  test: kS
};
var qx = Ix;
Ga.default = qx;
var Wa = {};
Object.defineProperty(Wa, "__esModule", {
  value: !0
});
Wa.test = Wa.serialize = Wa.default = void 0;
var Gs = pa;
const Vx = "@@__IMMUTABLE_ITERABLE__@@", Hx = "@@__IMMUTABLE_LIST__@@", Yx = "@@__IMMUTABLE_KEYED__@@", Qx = "@@__IMMUTABLE_MAP__@@", Og = "@@__IMMUTABLE_ORDERED__@@", Kx = "@@__IMMUTABLE_RECORD__@@", Gx = "@@__IMMUTABLE_SEQ__@@", Wx = "@@__IMMUTABLE_SET__@@", Jx = "@@__IMMUTABLE_STACK__@@", Tl = (t) => `Immutable.${t}`, Zf = (t) => `[${t}]`, Ws = " ", Ng = "…", Xx = (t, r, a, c, u, s, d) => ++c > r.maxDepth ? Zf(Tl(d)) : `${Tl(d) + Ws}{${(0, Gs.printIteratorEntries)(
  t.entries(),
  r,
  a,
  c,
  u,
  s
)}}`;
function Zx(t) {
  let r = 0;
  return {
    next() {
      if (r < t._keys.length) {
        const a = t._keys[r++];
        return {
          done: !1,
          value: [a, t.get(a)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const e_ = (t, r, a, c, u, s) => {
  const d = Tl(t._name || "Record");
  return ++c > r.maxDepth ? Zf(d) : `${d + Ws}{${(0, Gs.printIteratorEntries)(
    Zx(t),
    r,
    a,
    c,
    u,
    s
  )}}`;
}, t_ = (t, r, a, c, u, s) => {
  const d = Tl("Seq");
  return ++c > r.maxDepth ? Zf(d) : t[Yx] ? `${d + Ws}{${// from Immutable collection of entries or from ECMAScript object
  t._iter || t._object ? (0, Gs.printIteratorEntries)(
    t.entries(),
    r,
    a,
    c,
    u,
    s
  ) : Ng}}` : `${d + Ws}[${t._iter || // from Immutable collection of values
  t._array || // from ECMAScript array
  t._collection || // from ECMAScript collection in immutable v4
  t._iterable ? (0, Gs.printIteratorValues)(
    t.values(),
    r,
    a,
    c,
    u,
    s
  ) : Ng}]`;
}, $h = (t, r, a, c, u, s, d) => ++c > r.maxDepth ? Zf(Tl(d)) : `${Tl(d) + Ws}[${(0, Gs.printIteratorValues)(
  t.values(),
  r,
  a,
  c,
  u,
  s
)}]`, LS = (t, r, a, c, u, s) => t[Qx] ? Xx(
  t,
  r,
  a,
  c,
  u,
  s,
  t[Og] ? "OrderedMap" : "Map"
) : t[Hx] ? $h(
  t,
  r,
  a,
  c,
  u,
  s,
  "List"
) : t[Wx] ? $h(
  t,
  r,
  a,
  c,
  u,
  s,
  t[Og] ? "OrderedSet" : "Set"
) : t[Jx] ? $h(
  t,
  r,
  a,
  c,
  u,
  s,
  "Stack"
) : t[Gx] ? t_(t, r, a, c, u, s) : e_(t, r, a, c, u, s);
Wa.serialize = LS;
const FS = (t) => t && (t[Vx] === !0 || t[Kx] === !0);
Wa.test = FS;
const n_ = {
  serialize: LS,
  test: FS
};
var r_ = n_;
Wa.default = r_;
var Ja = {}, um = { exports: {} }, Bt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mg;
function i_() {
  return Mg || (Mg = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.server_context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), U = !1, q = !1, A = !1, ye = !1, ee = !1, le;
    le = Symbol.for("react.module.reference");
    function Z(J) {
      return !!(typeof J == "string" || typeof J == "function" || J === a || J === u || ee || J === c || J === E || J === b || ye || J === j || U || q || A || typeof J == "object" && J !== null && (J.$$typeof === R || J.$$typeof === x || J.$$typeof === s || J.$$typeof === d || J.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      J.$$typeof === le || J.getModuleId !== void 0));
    }
    function K(J) {
      if (typeof J == "object" && J !== null) {
        var gt = J.$$typeof;
        switch (gt) {
          case t:
            var ct = J.type;
            switch (ct) {
              case a:
              case u:
              case c:
              case E:
              case b:
                return ct;
              default:
                var pt = ct && ct.$$typeof;
                switch (pt) {
                  case m:
                  case d:
                  case y:
                  case R:
                  case x:
                  case s:
                    return pt;
                  default:
                    return gt;
                }
            }
          case r:
            return gt;
        }
      }
    }
    var se = d, Te = s, ve = t, Ve = y, ce = a, Xe = R, ie = x, ge = r, Ae = u, et = c, Pe = E, Qe = b, me = !1, C = !1;
    function D(J) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(J) {
      return C || (C = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(J) {
      return K(J) === d;
    }
    function oe(J) {
      return K(J) === s;
    }
    function be(J) {
      return typeof J == "object" && J !== null && J.$$typeof === t;
    }
    function re(J) {
      return K(J) === y;
    }
    function Q(J) {
      return K(J) === a;
    }
    function De(J) {
      return K(J) === R;
    }
    function Ge(J) {
      return K(J) === x;
    }
    function tt(J) {
      return K(J) === r;
    }
    function ot(J) {
      return K(J) === u;
    }
    function nt(J) {
      return K(J) === c;
    }
    function Ze(J) {
      return K(J) === E;
    }
    function mt(J) {
      return K(J) === b;
    }
    Bt.ContextConsumer = se, Bt.ContextProvider = Te, Bt.Element = ve, Bt.ForwardRef = Ve, Bt.Fragment = ce, Bt.Lazy = Xe, Bt.Memo = ie, Bt.Portal = ge, Bt.Profiler = Ae, Bt.StrictMode = et, Bt.Suspense = Pe, Bt.SuspenseList = Qe, Bt.isAsyncMode = D, Bt.isConcurrentMode = V, Bt.isContextConsumer = G, Bt.isContextProvider = oe, Bt.isElement = be, Bt.isForwardRef = re, Bt.isFragment = Q, Bt.isLazy = De, Bt.isMemo = Ge, Bt.isPortal = tt, Bt.isProfiler = ot, Bt.isStrictMode = nt, Bt.isSuspense = Ze, Bt.isSuspenseList = mt, Bt.isValidElementType = Z, Bt.typeOf = K;
  }()), Bt;
}
var It = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $g;
function a_() {
  if ($g)
    return It;
  $g = 1;
  var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.server_context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), U;
  U = Symbol.for("react.module.reference");
  function q(A) {
    if (typeof A == "object" && A !== null) {
      var ye = A.$$typeof;
      switch (ye) {
        case t:
          switch (A = A.type, A) {
            case a:
            case u:
            case c:
            case E:
            case b:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case m:
                case d:
                case y:
                case R:
                case x:
                case s:
                  return A;
                default:
                  return ye;
              }
          }
        case r:
          return ye;
      }
    }
  }
  return It.ContextConsumer = d, It.ContextProvider = s, It.Element = t, It.ForwardRef = y, It.Fragment = a, It.Lazy = R, It.Memo = x, It.Portal = r, It.Profiler = u, It.StrictMode = c, It.Suspense = E, It.SuspenseList = b, It.isAsyncMode = function() {
    return !1;
  }, It.isConcurrentMode = function() {
    return !1;
  }, It.isContextConsumer = function(A) {
    return q(A) === d;
  }, It.isContextProvider = function(A) {
    return q(A) === s;
  }, It.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === t;
  }, It.isForwardRef = function(A) {
    return q(A) === y;
  }, It.isFragment = function(A) {
    return q(A) === a;
  }, It.isLazy = function(A) {
    return q(A) === R;
  }, It.isMemo = function(A) {
    return q(A) === x;
  }, It.isPortal = function(A) {
    return q(A) === r;
  }, It.isProfiler = function(A) {
    return q(A) === u;
  }, It.isStrictMode = function(A) {
    return q(A) === c;
  }, It.isSuspense = function(A) {
    return q(A) === E;
  }, It.isSuspenseList = function(A) {
    return q(A) === b;
  }, It.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === a || A === u || A === c || A === E || A === b || A === j || typeof A == "object" && A !== null && (A.$$typeof === R || A.$$typeof === x || A.$$typeof === s || A.$$typeof === d || A.$$typeof === y || A.$$typeof === U || A.getModuleId !== void 0);
  }, It.typeOf = q, It;
}
process.env.NODE_ENV === "production" ? um.exports = a_() : um.exports = i_();
var o_ = um.exports;
Object.defineProperty(Ja, "__esModule", {
  value: !0
});
Ja.test = Ja.serialize = Ja.default = void 0;
var Qo = u_(o_), Pf = ir;
function US(t) {
  if (typeof WeakMap != "function")
    return null;
  var r = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
  return (US = function(c) {
    return c ? a : r;
  })(t);
}
function u_(t, r) {
  if (!r && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var a = US(r);
  if (a && a.has(t))
    return a.get(t);
  var c = {}, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in t)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(t, s)) {
      var d = u ? Object.getOwnPropertyDescriptor(t, s) : null;
      d && (d.get || d.set) ? Object.defineProperty(c, s, d) : c[s] = t[s];
    }
  return c.default = t, a && a.set(t, c), c;
}
const BS = (t, r = []) => (Array.isArray(t) ? t.forEach((a) => {
  BS(a, r);
}) : t != null && t !== !1 && r.push(t), r), Ag = (t) => {
  const r = t.type;
  if (typeof r == "string")
    return r;
  if (typeof r == "function")
    return r.displayName || r.name || "Unknown";
  if (Qo.isFragment(t))
    return "React.Fragment";
  if (Qo.isSuspense(t))
    return "React.Suspense";
  if (typeof r == "object" && r !== null) {
    if (Qo.isContextProvider(t))
      return "Context.Provider";
    if (Qo.isContextConsumer(t))
      return "Context.Consumer";
    if (Qo.isForwardRef(t)) {
      if (r.displayName)
        return r.displayName;
      const a = r.render.displayName || r.render.name || "";
      return a !== "" ? `ForwardRef(${a})` : "ForwardRef";
    }
    if (Qo.isMemo(t)) {
      const a = r.displayName || r.type.displayName || r.type.name || "";
      return a !== "" ? `Memo(${a})` : "Memo";
    }
  }
  return "UNDEFINED";
}, l_ = (t) => {
  const { props: r } = t;
  return Object.keys(r).filter((a) => a !== "children" && r[a] !== void 0).sort();
}, IS = (t, r, a, c, u, s) => ++c > r.maxDepth ? (0, Pf.printElementAsLeaf)(Ag(t), r) : (0, Pf.printElement)(
  Ag(t),
  (0, Pf.printProps)(
    l_(t),
    t.props,
    r,
    a + r.indent,
    c,
    u,
    s
  ),
  (0, Pf.printChildren)(
    BS(t.props.children),
    r,
    a + r.indent,
    c,
    u,
    s
  ),
  r,
  a
);
Ja.serialize = IS;
const qS = (t) => t != null && Qo.isElement(t);
Ja.test = qS;
const s_ = {
  serialize: IS,
  test: qS
};
var c_ = s_;
Ja.default = c_;
var Xa = {};
Object.defineProperty(Xa, "__esModule", {
  value: !0
});
Xa.test = Xa.serialize = Xa.default = void 0;
var jf = ir, Ah = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const f_ = typeof Ah == "function" && Ah.for ? Ah.for("react.test.json") : 245830487, d_ = (t) => {
  const { props: r } = t;
  return r ? Object.keys(r).filter((a) => r[a] !== void 0).sort() : [];
}, VS = (t, r, a, c, u, s) => ++c > r.maxDepth ? (0, jf.printElementAsLeaf)(t.type, r) : (0, jf.printElement)(
  t.type,
  t.props ? (0, jf.printProps)(
    d_(t),
    t.props,
    r,
    a + r.indent,
    c,
    u,
    s
  ) : "",
  t.children ? (0, jf.printChildren)(
    t.children,
    r,
    a + r.indent,
    c,
    u,
    s
  ) : "",
  r,
  a
);
Xa.serialize = VS;
const HS = (t) => t && t.$$typeof === f_;
Xa.test = HS;
const p_ = {
  serialize: VS,
  test: HS
};
var h_ = p_;
Xa.default = h_;
Object.defineProperty(ao, "__esModule", {
  value: !0
});
ao.default = ao.DEFAULT_OPTIONS = void 0;
var Li = ao.format = nE, _m = ao.plugins = void 0, m_ = Jo(hx), Fs = pa, v_ = Jo(
  Qa
), y_ = Jo(Ka), g_ = Jo(Ga), b_ = Jo(Wa), S_ = Jo(Ja), E_ = Jo(
  Xa
);
function Jo(t) {
  return t && t.__esModule ? t : { default: t };
}
const YS = Object.prototype.toString, T_ = Date.prototype.toISOString, w_ = Error.prototype.toString, Dg = RegExp.prototype.toString, Dh = (t) => typeof t.constructor == "function" && t.constructor.name || "Object", x_ = (t) => typeof window < "u" && t === window, __ = /^Symbol\((.*)\)(.*)$/, C_ = /\n/gi;
let QS = class extends Error {
  constructor(r, a) {
    super(r), this.stack = a, this.name = this.constructor.name;
  }
};
function R_(t) {
  return t === "[object Array]" || t === "[object ArrayBuffer]" || t === "[object DataView]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object Int8Array]" || t === "[object Int16Array]" || t === "[object Int32Array]" || t === "[object Uint8Array]" || t === "[object Uint8ClampedArray]" || t === "[object Uint16Array]" || t === "[object Uint32Array]";
}
function O_(t) {
  return Object.is(t, -0) ? "-0" : String(t);
}
function N_(t) {
  return `${t}n`;
}
function Pg(t, r) {
  return r ? `[Function ${t.name || "anonymous"}]` : "[Function]";
}
function jg(t) {
  return String(t).replace(__, "Symbol($1)");
}
function kg(t) {
  return `[${w_.call(t)}]`;
}
function KS(t, r, a, c) {
  if (t === !0 || t === !1)
    return `${t}`;
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  const u = typeof t;
  if (u === "number")
    return O_(t);
  if (u === "bigint")
    return N_(t);
  if (u === "string")
    return c ? `"${t.replace(/"|\\/g, "\\$&")}"` : `"${t}"`;
  if (u === "function")
    return Pg(t, r);
  if (u === "symbol")
    return jg(t);
  const s = YS.call(t);
  return s === "[object WeakMap]" ? "WeakMap {}" : s === "[object WeakSet]" ? "WeakSet {}" : s === "[object Function]" || s === "[object GeneratorFunction]" ? Pg(t, r) : s === "[object Symbol]" ? jg(t) : s === "[object Date]" ? isNaN(+t) ? "Date { NaN }" : T_.call(t) : s === "[object Error]" ? kg(t) : s === "[object RegExp]" ? a ? Dg.call(t).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Dg.call(t) : t instanceof Error ? kg(t) : null;
}
function GS(t, r, a, c, u, s) {
  if (u.indexOf(t) !== -1)
    return "[Circular]";
  u = u.slice(), u.push(t);
  const d = ++c > r.maxDepth, m = r.min;
  if (r.callToJSON && !d && t.toJSON && typeof t.toJSON == "function" && !s)
    return Ha(t.toJSON(), r, a, c, u, !0);
  const y = YS.call(t);
  return y === "[object Arguments]" ? d ? "[Arguments]" : `${m ? "" : "Arguments "}[${(0, Fs.printListItems)(
    t,
    r,
    a,
    c,
    u,
    Ha
  )}]` : R_(y) ? d ? `[${t.constructor.name}]` : `${m || !r.printBasicPrototype && t.constructor.name === "Array" ? "" : `${t.constructor.name} `}[${(0, Fs.printListItems)(
    t,
    r,
    a,
    c,
    u,
    Ha
  )}]` : y === "[object Map]" ? d ? "[Map]" : `Map {${(0, Fs.printIteratorEntries)(
    t.entries(),
    r,
    a,
    c,
    u,
    Ha,
    " => "
  )}}` : y === "[object Set]" ? d ? "[Set]" : `Set {${(0, Fs.printIteratorValues)(
    t.values(),
    r,
    a,
    c,
    u,
    Ha
  )}}` : d || x_(t) ? `[${Dh(t)}]` : `${m || !r.printBasicPrototype && Dh(t) === "Object" ? "" : `${Dh(t)} `}{${(0, Fs.printObjectProperties)(
    t,
    r,
    a,
    c,
    u,
    Ha
  )}}`;
}
function M_(t) {
  return t.serialize != null;
}
function WS(t, r, a, c, u, s) {
  let d;
  try {
    d = M_(t) ? t.serialize(r, a, c, u, s, Ha) : t.print(
      r,
      (m) => Ha(m, a, c, u, s),
      (m) => {
        const y = c + a.indent;
        return y + m.replace(C_, `
${y}`);
      },
      {
        edgeSpacing: a.spacingOuter,
        min: a.min,
        spacing: a.spacingInner
      },
      a.colors
    );
  } catch (m) {
    throw new QS(m.message, m.stack);
  }
  if (typeof d != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof d}".`
    );
  return d;
}
function JS(t, r) {
  for (let a = 0; a < t.length; a++)
    try {
      if (t[a].test(r))
        return t[a];
    } catch (c) {
      throw new QS(c.message, c.stack);
    }
  return null;
}
function Ha(t, r, a, c, u, s) {
  const d = JS(r.plugins, t);
  if (d !== null)
    return WS(d, t, r, a, c, u);
  const m = KS(
    t,
    r.printFunctionName,
    r.escapeRegex,
    r.escapeString
  );
  return m !== null ? m : GS(
    t,
    r,
    a,
    c,
    u,
    s
  );
}
const Cm = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, XS = Object.keys(Cm), $_ = (t) => t, Wr = $_({
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  maxWidth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: Cm
});
ao.DEFAULT_OPTIONS = Wr;
function A_(t) {
  if (Object.keys(t).forEach((r) => {
    if (!Object.prototype.hasOwnProperty.call(Wr, r))
      throw new Error(`pretty-format: Unknown option "${r}".`);
  }), t.min && t.indent !== void 0 && t.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (t.theme !== void 0) {
    if (t.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof t.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof t.theme}".`
      );
  }
}
const D_ = (t) => XS.reduce((r, a) => {
  const c = t.theme && t.theme[a] !== void 0 ? t.theme[a] : Cm[a], u = c && m_.default[c];
  if (u && typeof u.close == "string" && typeof u.open == "string")
    r[a] = u;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${a}" whose value "${c}" is undefined in ansi-styles.`
    );
  return r;
}, /* @__PURE__ */ Object.create(null)), P_ = () => XS.reduce((t, r) => (t[r] = {
  close: "",
  open: ""
}, t), /* @__PURE__ */ Object.create(null)), ZS = (t) => (t == null ? void 0 : t.printFunctionName) ?? Wr.printFunctionName, eE = (t) => (t == null ? void 0 : t.escapeRegex) ?? Wr.escapeRegex, tE = (t) => (t == null ? void 0 : t.escapeString) ?? Wr.escapeString, zg = (t) => ({
  callToJSON: (t == null ? void 0 : t.callToJSON) ?? Wr.callToJSON,
  colors: t != null && t.highlight ? D_(t) : P_(),
  compareKeys: typeof (t == null ? void 0 : t.compareKeys) == "function" || (t == null ? void 0 : t.compareKeys) === null ? t.compareKeys : Wr.compareKeys,
  escapeRegex: eE(t),
  escapeString: tE(t),
  indent: t != null && t.min ? "" : j_((t == null ? void 0 : t.indent) ?? Wr.indent),
  maxDepth: (t == null ? void 0 : t.maxDepth) ?? Wr.maxDepth,
  maxWidth: (t == null ? void 0 : t.maxWidth) ?? Wr.maxWidth,
  min: (t == null ? void 0 : t.min) ?? Wr.min,
  plugins: (t == null ? void 0 : t.plugins) ?? Wr.plugins,
  printBasicPrototype: (t == null ? void 0 : t.printBasicPrototype) ?? !0,
  printFunctionName: ZS(t),
  spacingInner: t != null && t.min ? " " : `
`,
  spacingOuter: t != null && t.min ? "" : `
`
});
function j_(t) {
  return new Array(t + 1).join(" ");
}
function nE(t, r) {
  if (r && (A_(r), r.plugins)) {
    const c = JS(r.plugins, t);
    if (c !== null)
      return WS(c, t, zg(r), "", 0, []);
  }
  const a = KS(
    t,
    ZS(r),
    eE(r),
    tE(r)
  );
  return a !== null ? a : GS(t, zg(r), "", 0, []);
}
const k_ = {
  AsymmetricMatcher: v_.default,
  DOMCollection: y_.default,
  DOMElement: g_.default,
  Immutable: b_.default,
  ReactElement: S_.default,
  ReactTestComponent: E_.default
};
_m = ao.plugins = k_;
var z_ = nE;
ao.default = z_;
var lm = { exports: {} };
const L_ = {}, F_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: L_
}, Symbol.toStringTag, { value: "Module" })), U_ = /* @__PURE__ */ nx(F_);
(function(t, r) {
  (function(a, c) {
    c(r);
  })(rm, function(a) {
    function c($) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? c = function(N) {
        return typeof N;
      } : c = function(N) {
        return N && typeof Symbol == "function" && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N;
      }, c($);
    }
    function u($, N) {
      return s($) || d($, N) || m($, N) || E();
    }
    function s($) {
      if (Array.isArray($))
        return $;
    }
    function d($, N) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object($)))) {
        var k = [], Oe = !0, Se = !1, We = void 0;
        try {
          for (var Ie = $[Symbol.iterator](), St; !(Oe = (St = Ie.next()).done) && (k.push(St.value), !(N && k.length === N)); Oe = !0)
            ;
        } catch (Et) {
          Se = !0, We = Et;
        } finally {
          try {
            !Oe && Ie.return != null && Ie.return();
          } finally {
            if (Se)
              throw We;
          }
        }
        return k;
      }
    }
    function m($, N) {
      if ($) {
        if (typeof $ == "string")
          return y($, N);
        var k = Object.prototype.toString.call($).slice(8, -1);
        if (k === "Object" && $.constructor && (k = $.constructor.name), k === "Map" || k === "Set")
          return Array.from($);
        if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))
          return y($, N);
      }
    }
    function y($, N) {
      (N == null || N > $.length) && (N = $.length);
      for (var k = 0, Oe = new Array(N); k < N; k++)
        Oe[k] = $[k];
      return Oe;
    }
    function E() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var b = {
      bold: ["1", "22"],
      dim: ["2", "22"],
      italic: ["3", "23"],
      underline: ["4", "24"],
      // 5 & 6 are blinking
      inverse: ["7", "27"],
      hidden: ["8", "28"],
      strike: ["9", "29"],
      // 10-20 are fonts
      // 21-29 are resets for 1-9
      black: ["30", "39"],
      red: ["31", "39"],
      green: ["32", "39"],
      yellow: ["33", "39"],
      blue: ["34", "39"],
      magenta: ["35", "39"],
      cyan: ["36", "39"],
      white: ["37", "39"],
      brightblack: ["30;1", "39"],
      brightred: ["31;1", "39"],
      brightgreen: ["32;1", "39"],
      brightyellow: ["33;1", "39"],
      brightblue: ["34;1", "39"],
      brightmagenta: ["35;1", "39"],
      brightcyan: ["36;1", "39"],
      brightwhite: ["37;1", "39"],
      grey: ["90", "39"]
    }, x = {
      special: "cyan",
      number: "yellow",
      bigint: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      symbol: "green",
      date: "magenta",
      regexp: "red"
    }, R = "…";
    function j($, N) {
      var k = b[x[N]] || b[N];
      return k ? "\x1B[".concat(k[0], "m").concat(String($), "\x1B[").concat(k[1], "m") : String($);
    }
    function U() {
      var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, N = $.showHidden, k = N === void 0 ? !1 : N, Oe = $.depth, Se = Oe === void 0 ? 2 : Oe, We = $.colors, Ie = We === void 0 ? !1 : We, St = $.customInspect, Et = St === void 0 ? !0 : St, Nt = $.showProxy, en = Nt === void 0 ? !1 : Nt, jn = $.maxArrayLength, Kn = jn === void 0 ? 1 / 0 : jn, Cr = $.breakLength, mi = Cr === void 0 ? 1 / 0 : Cr, On = $.seen, Nn = On === void 0 ? [] : On, Sn = $.truncate, Ui = Sn === void 0 ? 1 / 0 : Sn, Ar = $.stylize, co = Ar === void 0 ? String : Ar, vi = {
        showHidden: !!k,
        depth: Number(Se),
        colors: !!Ie,
        customInspect: !!Et,
        showProxy: !!en,
        maxArrayLength: Number(Kn),
        breakLength: Number(mi),
        truncate: Number(Ui),
        seen: Nn,
        stylize: co
      };
      return vi.colors && (vi.stylize = j), vi;
    }
    function q($, N) {
      var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : R;
      $ = String($);
      var Oe = k.length, Se = $.length;
      return Oe > N && Se > Oe ? k : Se > N && Se > Oe ? "".concat($.slice(0, N - Oe)).concat(k) : $;
    }
    function A($, N, k) {
      var Oe = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ", ";
      k = k || N.inspect;
      var Se = $.length;
      if (Se === 0)
        return "";
      for (var We = N.truncate, Ie = "", St = "", Et = "", Nt = 0; Nt < Se; Nt += 1) {
        var en = Nt + 1 === $.length, jn = Nt + 2 === $.length;
        Et = "".concat(R, "(").concat($.length - Nt, ")");
        var Kn = $[Nt];
        N.truncate = We - Ie.length - (en ? 0 : Oe.length);
        var Cr = St || k(Kn, N) + (en ? "" : Oe), mi = Ie.length + Cr.length, On = mi + Et.length;
        if (en && mi > We && Ie.length + Et.length <= We || !en && !jn && On > We || (St = en ? "" : k($[Nt + 1], N) + (jn ? "" : Oe), !en && jn && On > We && mi + St.length > We))
          break;
        if (Ie += Cr, !en && !jn && mi + St.length >= We) {
          Et = "".concat(R, "(").concat($.length - Nt - 1, ")");
          break;
        }
        Et = "";
      }
      return "".concat(Ie).concat(Et);
    }
    function ye($) {
      return $.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? $ : JSON.stringify($).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
    }
    function ee($, N) {
      var k = u($, 2), Oe = k[0], Se = k[1];
      return N.truncate -= 2, typeof Oe == "string" ? Oe = ye(Oe) : typeof Oe != "number" && (Oe = "[".concat(N.inspect(Oe, N), "]")), N.truncate -= Oe.length, Se = N.inspect(Se, N), "".concat(Oe, ": ").concat(Se);
    }
    function le($, N) {
      var k = Object.keys($).slice($.length);
      if (!$.length && !k.length)
        return "[]";
      N.truncate -= 4;
      var Oe = A($, N);
      N.truncate -= Oe.length;
      var Se = "";
      return k.length && (Se = A(k.map(function(We) {
        return [We, $[We]];
      }), N, ee)), "[ ".concat(Oe).concat(Se ? ", ".concat(Se) : "", " ]");
    }
    var Z = Function.prototype.toString, K = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/, se = 512;
    function Te($) {
      if (typeof $ != "function")
        return null;
      var N = "";
      if (typeof Function.prototype.name > "u" && typeof $.name > "u") {
        var k = Z.call($);
        if (k.indexOf("(") > se)
          return N;
        var Oe = k.match(K);
        Oe && (N = Oe[1]);
      } else
        N = $.name;
      return N;
    }
    var ve = Te, Ve = function(N) {
      return typeof Buffer == "function" && N instanceof Buffer ? "Buffer" : N[Symbol.toStringTag] ? N[Symbol.toStringTag] : ve(N.constructor);
    };
    function ce($, N) {
      var k = Ve($);
      N.truncate -= k.length + 4;
      var Oe = Object.keys($).slice($.length);
      if (!$.length && !Oe.length)
        return "".concat(k, "[]");
      for (var Se = "", We = 0; We < $.length; We++) {
        var Ie = "".concat(N.stylize(q($[We], N.truncate), "number")).concat(We === $.length - 1 ? "" : ", ");
        if (N.truncate -= Ie.length, $[We] !== $.length && N.truncate <= 3) {
          Se += "".concat(R, "(").concat($.length - $[We] + 1, ")");
          break;
        }
        Se += Ie;
      }
      var St = "";
      return Oe.length && (St = A(Oe.map(function(Et) {
        return [Et, $[Et]];
      }), N, ee)), "".concat(k, "[ ").concat(Se).concat(St ? ", ".concat(St) : "", " ]");
    }
    function Xe($, N) {
      var k = $.toJSON();
      if (k === null)
        return "Invalid Date";
      var Oe = k.split("T"), Se = Oe[0];
      return N.stylize("".concat(Se, "T").concat(q(Oe[1], N.truncate - Se.length - 1)), "date");
    }
    function ie($, N) {
      var k = ve($);
      return k ? N.stylize("[Function ".concat(q(k, N.truncate - 11), "]"), "special") : N.stylize("[Function]", "special");
    }
    function ge($, N) {
      var k = u($, 2), Oe = k[0], Se = k[1];
      return N.truncate -= 4, Oe = N.inspect(Oe, N), N.truncate -= Oe.length, Se = N.inspect(Se, N), "".concat(Oe, " => ").concat(Se);
    }
    function Ae($) {
      var N = [];
      return $.forEach(function(k, Oe) {
        N.push([Oe, k]);
      }), N;
    }
    function et($, N) {
      var k = $.size - 1;
      return k <= 0 ? "Map{}" : (N.truncate -= 7, "Map{ ".concat(A(Ae($), N, ge), " }"));
    }
    var Pe = Number.isNaN || function($) {
      return $ !== $;
    };
    function Qe($, N) {
      return Pe($) ? N.stylize("NaN", "number") : $ === 1 / 0 ? N.stylize("Infinity", "number") : $ === -1 / 0 ? N.stylize("-Infinity", "number") : $ === 0 ? N.stylize(1 / $ === 1 / 0 ? "+0" : "-0", "number") : N.stylize(q($, N.truncate), "number");
    }
    function me($, N) {
      var k = q($.toString(), N.truncate - 1);
      return k !== R && (k += "n"), N.stylize(k, "bigint");
    }
    function C($, N) {
      var k = $.toString().split("/")[2], Oe = N.truncate - (2 + k.length), Se = $.source;
      return N.stylize("/".concat(q(Se, Oe), "/").concat(k), "regexp");
    }
    function D($) {
      var N = [];
      return $.forEach(function(k) {
        N.push(k);
      }), N;
    }
    function V($, N) {
      return $.size === 0 ? "Set{}" : (N.truncate -= 7, "Set{ ".concat(A(D($), N), " }"));
    }
    var G = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), oe = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "'": "\\'",
      "\\": "\\\\"
    }, be = 16, re = 4;
    function Q($) {
      return oe[$] || "\\u".concat("0000".concat($.charCodeAt(0).toString(be)).slice(-re));
    }
    function De($, N) {
      return G.test($) && ($ = $.replace(G, Q)), N.stylize("'".concat(q($, N.truncate - 2), "'"), "string");
    }
    function Ge($) {
      return "description" in Symbol.prototype ? $.description ? "Symbol(".concat($.description, ")") : "Symbol()" : $.toString();
    }
    var tt = function() {
      return "Promise{…}";
    };
    try {
      var ot = process.binding("util"), nt = ot.getPromiseDetails, Ze = ot.kPending, mt = ot.kRejected;
      Array.isArray(nt(Promise.resolve())) && (tt = function(N, k) {
        var Oe = nt(N), Se = u(Oe, 2), We = Se[0], Ie = Se[1];
        return We === Ze ? "Promise{<pending>}" : "Promise".concat(We === mt ? "!" : "", "{").concat(k.inspect(Ie, k), "}");
      });
    } catch {
    }
    var J = tt;
    function gt($, N) {
      var k = Object.getOwnPropertyNames($), Oe = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols($) : [];
      if (k.length === 0 && Oe.length === 0)
        return "{}";
      if (N.truncate -= 4, N.seen = N.seen || [], N.seen.indexOf($) >= 0)
        return "[Circular]";
      N.seen.push($);
      var Se = A(k.map(function(St) {
        return [St, $[St]];
      }), N, ee), We = A(Oe.map(function(St) {
        return [St, $[St]];
      }), N, ee);
      N.seen.pop();
      var Ie = "";
      return Se && We && (Ie = ", "), "{ ".concat(Se).concat(Ie).concat(We, " }");
    }
    var ct = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
    function pt($, N) {
      var k = "";
      return ct && ct in $ && (k = $[ct]), k = k || ve($.constructor), (!k || k === "_class") && (k = "<Anonymous Class>"), N.truncate -= k.length, "".concat(k).concat(gt($, N));
    }
    function Zt($, N) {
      return $.length === 0 ? "Arguments[]" : (N.truncate -= 13, "Arguments[ ".concat(A($, N), " ]"));
    }
    var In = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
    function z($, N) {
      var k = Object.getOwnPropertyNames($).filter(function(Ie) {
        return In.indexOf(Ie) === -1;
      }), Oe = $.name;
      N.truncate -= Oe.length;
      var Se = "";
      typeof $.message == "string" ? Se = q($.message, N.truncate) : k.unshift("message"), Se = Se ? ": ".concat(Se) : "", N.truncate -= Se.length + 5;
      var We = A(k.map(function(Ie) {
        return [Ie, $[Ie]];
      }), N, ee);
      return "".concat(Oe).concat(Se).concat(We ? " { ".concat(We, " }") : "");
    }
    function B($, N) {
      var k = u($, 2), Oe = k[0], Se = k[1];
      return N.truncate -= 3, Se ? "".concat(N.stylize(Oe, "yellow"), "=").concat(N.stylize('"'.concat(Se, '"'), "string")) : "".concat(N.stylize(Oe, "yellow"));
    }
    function fe($, N) {
      return A($, N, Ne, `
`);
    }
    function Ne($, N) {
      var k = $.getAttributeNames(), Oe = $.tagName.toLowerCase(), Se = N.stylize("<".concat(Oe), "special"), We = N.stylize(">", "special"), Ie = N.stylize("</".concat(Oe, ">"), "special");
      N.truncate -= Oe.length * 2 + 5;
      var St = "";
      k.length > 0 && (St += " ", St += A(k.map(function(en) {
        return [en, $.getAttribute(en)];
      }), N, B, " ")), N.truncate -= St.length;
      var Et = N.truncate, Nt = fe($.children, N);
      return Nt && Nt.length > Et && (Nt = "".concat(R, "(").concat($.children.length, ")")), "".concat(Se).concat(St).concat(We).concat(Nt).concat(Ie);
    }
    var P = typeof Symbol == "function" && typeof Symbol.for == "function", ut = P ? Symbol.for("chai/inspect") : "@@chai/inspect", xt = !1;
    try {
      var Ot = U_;
      xt = Ot.inspect ? Ot.inspect.custom : !1;
    } catch {
      xt = !1;
    }
    function un() {
      this.key = "chai/loupe__" + Math.random() + Date.now();
    }
    un.prototype = {
      // eslint-disable-next-line object-shorthand
      get: function(N) {
        return N[this.key];
      },
      // eslint-disable-next-line object-shorthand
      has: function(N) {
        return this.key in N;
      },
      // eslint-disable-next-line object-shorthand
      set: function(N, k) {
        Object.isExtensible(N) && Object.defineProperty(N, this.key, {
          // eslint-disable-next-line object-shorthand
          value: k,
          configurable: !0
        });
      }
    };
    var rt = new (typeof WeakMap == "function" ? WeakMap : un)(), Fe = {}, he = {
      undefined: function(N, k) {
        return k.stylize("undefined", "undefined");
      },
      null: function(N, k) {
        return k.stylize(null, "null");
      },
      boolean: function(N, k) {
        return k.stylize(N, "boolean");
      },
      Boolean: function(N, k) {
        return k.stylize(N, "boolean");
      },
      number: Qe,
      Number: Qe,
      bigint: me,
      BigInt: me,
      string: De,
      String: De,
      function: ie,
      Function: ie,
      symbol: Ge,
      // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
      Symbol: Ge,
      Array: le,
      Date: Xe,
      Map: et,
      Set: V,
      RegExp: C,
      Promise: J,
      // WeakSet, WeakMap are totally opaque to us
      WeakSet: function(N, k) {
        return k.stylize("WeakSet{…}", "special");
      },
      WeakMap: function(N, k) {
        return k.stylize("WeakMap{…}", "special");
      },
      Arguments: Zt,
      Int8Array: ce,
      Uint8Array: ce,
      Uint8ClampedArray: ce,
      Int16Array: ce,
      Uint16Array: ce,
      Int32Array: ce,
      Uint32Array: ce,
      Float32Array: ce,
      Float64Array: ce,
      Generator: function() {
        return "";
      },
      DataView: function() {
        return "";
      },
      ArrayBuffer: function() {
        return "";
      },
      Error: z,
      HTMLCollection: fe,
      NodeList: fe
    }, _e = function(N, k, Oe) {
      return ut in N && typeof N[ut] == "function" ? N[ut](k) : xt && xt in N && typeof N[xt] == "function" ? N[xt](k.depth, k) : "inspect" in N && typeof N.inspect == "function" ? N.inspect(k.depth, k) : "constructor" in N && rt.has(N.constructor) ? rt.get(N.constructor)(N, k) : Fe[Oe] ? Fe[Oe](N, k) : "";
    }, Me = Object.prototype.toString;
    function ae($, N) {
      N = U(N), N.inspect = ae;
      var k = N, Oe = k.customInspect, Se = $ === null ? "null" : c($);
      if (Se === "object" && (Se = Me.call($).slice(8, -1)), he[Se])
        return he[Se]($, N);
      if (Oe && $) {
        var We = _e($, N, Se);
        if (We)
          return typeof We == "string" ? We : ae(We, N);
      }
      var Ie = $ ? Object.getPrototypeOf($) : !1;
      return Ie === Object.prototype || Ie === null ? gt($, N) : $ && typeof HTMLElement == "function" && $ instanceof HTMLElement ? Ne($, N) : "constructor" in $ ? $.constructor !== Object ? pt($, N) : gt($, N) : $ === Object($) ? gt($, N) : N.stylize(String($), Se);
    }
    function je($, N) {
      return rt.has($) ? !1 : (rt.set($, N), !0);
    }
    function Ce($, N) {
      return $ in Fe ? !1 : (Fe[$] = N, !0);
    }
    var xe = ut;
    a.custom = xe, a.default = ae, a.inspect = ae, a.registerConstructor = je, a.registerStringTag = Ce, Object.defineProperty(a, "__esModule", { value: !0 });
  });
})(lm, lm.exports);
var rE = lm.exports;
const {
  AsymmetricMatcher: B_,
  DOMCollection: I_,
  DOMElement: q_,
  Immutable: V_,
  ReactElement: H_,
  ReactTestComponent: Y_
} = _m, Lg = [
  Y_,
  H_,
  q_,
  I_,
  V_,
  B_
];
function da(t, r = 10, { maxLength: a, ...c } = {}) {
  const u = a ?? 1e4;
  let s;
  try {
    s = Li(t, {
      maxDepth: r,
      escapeString: !1,
      // min: true,
      plugins: Lg,
      ...c
    });
  } catch {
    s = Li(t, {
      callToJSON: !1,
      maxDepth: r,
      escapeString: !1,
      // min: true,
      plugins: Lg,
      ...c
    });
  }
  return s.length >= u && r > 1 ? da(t, Math.floor(r / 2)) : s;
}
const Q_ = /%[sdjifoOcj%]/g;
function iE(...t) {
  if (typeof t[0] != "string") {
    const s = [];
    for (let d = 0; d < t.length; d++)
      s.push(vl(t[d], { depth: 0, colors: !1, compact: 3 }));
    return s.join(" ");
  }
  const r = t.length;
  let a = 1;
  const c = t[0];
  let u = String(c).replace(Q_, (s) => {
    if (s === "%%")
      return "%";
    if (a >= r)
      return s;
    switch (s) {
      case "%s": {
        const d = t[a++];
        return typeof d == "bigint" ? `${d.toString()}n` : typeof d == "number" && d === 0 && 1 / d < 0 ? "-0" : typeof d == "object" && d !== null ? vl(d, { depth: 0, colors: !1, compact: 3 }) : String(d);
      }
      case "%d": {
        const d = t[a++];
        return typeof d == "bigint" ? `${d.toString()}n` : Number(d).toString();
      }
      case "%i": {
        const d = t[a++];
        return typeof d == "bigint" ? `${d.toString()}n` : Number.parseInt(String(d)).toString();
      }
      case "%f":
        return Number.parseFloat(String(t[a++])).toString();
      case "%o":
        return vl(t[a++], { showHidden: !0, showProxy: !0 });
      case "%O":
        return vl(t[a++]);
      case "%c":
        return a++, "";
      case "%j":
        try {
          return JSON.stringify(t[a++]);
        } catch (d) {
          const m = d.message;
          if (
            // chromium
            m.includes("circular structure") || m.includes("cyclic structures") || m.includes("cyclic object")
          )
            return "[Circular]";
          throw d;
        }
      default:
        return s;
    }
  });
  for (let s = t[a]; a < r; s = t[++a])
    s === null || typeof s != "object" ? u += ` ${s}` : u += ` ${vl(s)}`;
  return u;
}
function vl(t, r = {}) {
  return r.truncate === 0 && (r.truncate = Number.POSITIVE_INFINITY), rE.inspect(t, r);
}
function K_(t, r = {}) {
  const a = r.truncate ?? 40, c = vl(t, r), u = Object.prototype.toString.call(t);
  if (a && c.length >= a)
    if (u === "[object Function]") {
      const s = t;
      return !s.name || s.name === "" ? "[Function]" : `[Function: ${s.name}]`;
    } else {
      if (u === "[object Array]")
        return `[ Array(${t.length}) ]`;
      if (u === "[object Object]") {
        const s = Object.keys(t);
        return `{ Object (${s.length > 2 ? `${s.splice(0, 2).join(", ")}, ...` : s.join(", ")}) }`;
      } else
        return c;
    }
  return c;
}
const Fg = Symbol("vitest:SAFE_TIMERS"), G_ = Symbol("vitest:SAFE_COLORS"), W_ = {
  bold: ["\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"],
  dim: ["\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"],
  italic: ["\x1B[3m", "\x1B[23m"],
  underline: ["\x1B[4m", "\x1B[24m"],
  inverse: ["\x1B[7m", "\x1B[27m"],
  hidden: ["\x1B[8m", "\x1B[28m"],
  strikethrough: ["\x1B[9m", "\x1B[29m"],
  black: ["\x1B[30m", "\x1B[39m"],
  red: ["\x1B[31m", "\x1B[39m"],
  green: ["\x1B[32m", "\x1B[39m"],
  yellow: ["\x1B[33m", "\x1B[39m"],
  blue: ["\x1B[34m", "\x1B[39m"],
  magenta: ["\x1B[35m", "\x1B[39m"],
  cyan: ["\x1B[36m", "\x1B[39m"],
  white: ["\x1B[37m", "\x1B[39m"],
  gray: ["\x1B[90m", "\x1B[39m"],
  bgBlack: ["\x1B[40m", "\x1B[49m"],
  bgRed: ["\x1B[41m", "\x1B[49m"],
  bgGreen: ["\x1B[42m", "\x1B[49m"],
  bgYellow: ["\x1B[43m", "\x1B[49m"],
  bgBlue: ["\x1B[44m", "\x1B[49m"],
  bgMagenta: ["\x1B[45m", "\x1B[49m"],
  bgCyan: ["\x1B[46m", "\x1B[49m"],
  bgWhite: ["\x1B[47m", "\x1B[49m"]
}, J_ = Object.entries(W_);
function Rm(t) {
  return String(t);
}
Rm.open = "";
Rm.close = "";
const X_ = /* @__PURE__ */ J_.reduce((t, [r]) => (t[r] = Rm, t), { isColorSupported: !1 });
function Om() {
  return globalThis[G_] || X_;
}
function ed() {
  const {
    setTimeout: t,
    setInterval: r,
    clearInterval: a,
    clearTimeout: c,
    setImmediate: u,
    clearImmediate: s
  } = globalThis[Fg] || globalThis, {
    nextTick: d
  } = globalThis[Fg] || globalThis.process || { nextTick: (m) => m() };
  return {
    nextTick: d,
    setTimeout: t,
    setInterval: r,
    clearInterval: a,
    clearTimeout: c,
    setImmediate: u,
    clearImmediate: s
  };
}
function Z_(t) {
  const { message: r = "error", stackTraceLimit: a = 1 } = t || {}, c = Error.stackTraceLimit, u = Error.prepareStackTrace;
  Error.stackTraceLimit = a, Error.prepareStackTrace = (m) => m.stack;
  const d = new Error(r).stack || "";
  return Error.prepareStackTrace = u, Error.stackTraceLimit = c, d;
}
var aE = {};
Object.defineProperty(aE, "__esModule", {
  value: !0
});
var Ug = aE.default = rC;
const Hs = "diff-sequences", rr = 0, Js = (t, r, a, c, u) => {
  let s = 0;
  for (; t < r && a < c && u(t, a); )
    t += 1, a += 1, s += 1;
  return s;
}, Xs = (t, r, a, c, u) => {
  let s = 0;
  for (; t <= r && a <= c && u(r, c); )
    r -= 1, c -= 1, s += 1;
  return s;
}, Ph = (t, r, a, c, u, s, d) => {
  let m = 0, y = -t, E = s[m], b = E;
  s[m] += Js(
    E + 1,
    r,
    c + E - y + 1,
    a,
    u
  );
  const x = t < d ? t : d;
  for (m += 1, y += 2; m <= x; m += 1, y += 2) {
    if (m !== t && b < s[m])
      E = s[m];
    else if (E = b + 1, r <= E)
      return m - 1;
    b = s[m], s[m] = E + Js(E + 1, r, c + E - y + 1, a, u);
  }
  return d;
}, Bg = (t, r, a, c, u, s, d) => {
  let m = 0, y = t, E = s[m], b = E;
  s[m] -= Xs(
    r,
    E - 1,
    a,
    c + E - y - 1,
    u
  );
  const x = t < d ? t : d;
  for (m += 1, y -= 2; m <= x; m += 1, y -= 2) {
    if (m !== t && s[m] < b)
      E = s[m];
    else if (E = b - 1, E < r)
      return m - 1;
    b = s[m], s[m] = E - Xs(
      r,
      E - 1,
      a,
      c + E - y - 1,
      u
    );
  }
  return d;
}, eC = (t, r, a, c, u, s, d, m, y, E, b) => {
  const x = c - r, R = a - r, U = u - c - R, q = -U - (t - 1), A = -U + (t - 1);
  let ye = rr;
  const ee = t < m ? t : m;
  for (let le = 0, Z = -t; le <= ee; le += 1, Z += 2) {
    const K = le === 0 || le !== t && ye < d[le], se = K ? d[le] : ye, Te = K ? se : se + 1, ve = x + Te - Z, Ve = Js(
      Te + 1,
      a,
      ve + 1,
      u,
      s
    ), ce = Te + Ve;
    if (ye = d[le], d[le] = ce, q <= Z && Z <= A) {
      const Xe = (t - 1 - (Z + U)) / 2;
      if (Xe <= E && y[Xe] - 1 <= ce) {
        const ie = x + se - (K ? Z + 1 : Z - 1), ge = Xs(
          r,
          se,
          c,
          ie,
          s
        ), Ae = se - ge, et = ie - ge, Pe = Ae + 1, Qe = et + 1;
        b.nChangePreceding = t - 1, t - 1 === Pe + Qe - r - c ? (b.aEndPreceding = r, b.bEndPreceding = c) : (b.aEndPreceding = Pe, b.bEndPreceding = Qe), b.nCommonPreceding = ge, ge !== 0 && (b.aCommonPreceding = Pe, b.bCommonPreceding = Qe), b.nCommonFollowing = Ve, Ve !== 0 && (b.aCommonFollowing = Te + 1, b.bCommonFollowing = ve + 1);
        const me = ce + 1, C = ve + Ve + 1;
        return b.nChangeFollowing = t - 1, t - 1 === a + u - me - C ? (b.aStartFollowing = a, b.bStartFollowing = u) : (b.aStartFollowing = me, b.bStartFollowing = C), !0;
      }
    }
  }
  return !1;
}, tC = (t, r, a, c, u, s, d, m, y, E, b) => {
  const x = u - a, R = a - r, U = u - c - R, q = U - t, A = U + t;
  let ye = rr;
  const ee = t < E ? t : E;
  for (let le = 0, Z = t; le <= ee; le += 1, Z -= 2) {
    const K = le === 0 || le !== t && y[le] < ye, se = K ? y[le] : ye, Te = K ? se : se - 1, ve = x + Te - Z, Ve = Xs(
      r,
      Te - 1,
      c,
      ve - 1,
      s
    ), ce = Te - Ve;
    if (ye = y[le], y[le] = ce, q <= Z && Z <= A) {
      const Xe = (t + (Z - U)) / 2;
      if (Xe <= m && ce - 1 <= d[Xe]) {
        const ie = ve - Ve;
        if (b.nChangePreceding = t, t === ce + ie - r - c ? (b.aEndPreceding = r, b.bEndPreceding = c) : (b.aEndPreceding = ce, b.bEndPreceding = ie), b.nCommonPreceding = Ve, Ve !== 0 && (b.aCommonPreceding = ce, b.bCommonPreceding = ie), b.nChangeFollowing = t - 1, t === 1)
          b.nCommonFollowing = 0, b.aStartFollowing = a, b.bStartFollowing = u;
        else {
          const ge = x + se - (K ? Z - 1 : Z + 1), Ae = Js(
            se,
            a,
            ge,
            u,
            s
          );
          b.nCommonFollowing = Ae, Ae !== 0 && (b.aCommonFollowing = se, b.bCommonFollowing = ge);
          const et = se + Ae, Pe = ge + Ae;
          t - 1 === a + u - et - Pe ? (b.aStartFollowing = a, b.bStartFollowing = u) : (b.aStartFollowing = et, b.bStartFollowing = Pe);
        }
        return !0;
      }
    }
  }
  return !1;
}, nC = (t, r, a, c, u, s, d, m, y) => {
  const E = c - r, b = u - a, x = a - r, R = u - c, j = R - x;
  let U = x, q = x;
  if (d[0] = r - 1, m[0] = a, j % 2 === 0) {
    const A = (t || j) / 2, ye = (x + R) / 2;
    for (let ee = 1; ee <= ye; ee += 1)
      if (U = Ph(ee, a, u, E, s, d, U), ee < A)
        q = Bg(ee, r, c, b, s, m, q);
      else if (
        // If a reverse path overlaps a forward path in the same diagonal,
        // return a division of the index intervals at the middle change.
        tC(
          ee,
          r,
          a,
          c,
          u,
          s,
          d,
          U,
          m,
          q,
          y
        )
      )
        return;
  } else {
    const A = ((t || j) + 1) / 2, ye = (x + R + 1) / 2;
    let ee = 1;
    for (U = Ph(ee, a, u, E, s, d, U), ee += 1; ee <= ye; ee += 1)
      if (q = Bg(
        ee - 1,
        r,
        c,
        b,
        s,
        m,
        q
      ), ee < A)
        U = Ph(ee, a, u, E, s, d, U);
      else if (
        // If a forward path overlaps a reverse path in the same diagonal,
        // return a division of the index intervals at the middle change.
        eC(
          ee,
          r,
          a,
          c,
          u,
          s,
          d,
          U,
          m,
          q,
          y
        )
      )
        return;
  }
  throw new Error(
    `${Hs}: no overlap aStart=${r} aEnd=${a} bStart=${c} bEnd=${u}`
  );
}, sm = (t, r, a, c, u, s, d, m, y, E) => {
  if (u - c < a - r) {
    if (s = !s, s && d.length === 1) {
      const { foundSubsequence: ce, isCommon: Xe } = d[0];
      d[1] = {
        foundSubsequence: (ie, ge, Ae) => {
          ce(ie, Ae, ge);
        },
        isCommon: (ie, ge) => Xe(ge, ie)
      };
    }
    const ve = r, Ve = a;
    r = c, a = u, c = ve, u = Ve;
  }
  const { foundSubsequence: b, isCommon: x } = d[s ? 1 : 0];
  nC(
    t,
    r,
    a,
    c,
    u,
    x,
    m,
    y,
    E
  );
  const {
    nChangePreceding: R,
    aEndPreceding: j,
    bEndPreceding: U,
    nCommonPreceding: q,
    aCommonPreceding: A,
    bCommonPreceding: ye,
    nCommonFollowing: ee,
    aCommonFollowing: le,
    bCommonFollowing: Z,
    nChangeFollowing: K,
    aStartFollowing: se,
    bStartFollowing: Te
  } = E;
  r < j && c < U && sm(
    R,
    r,
    j,
    c,
    U,
    s,
    d,
    m,
    y,
    E
  ), q !== 0 && b(q, A, ye), ee !== 0 && b(ee, le, Z), se < a && Te < u && sm(
    K,
    se,
    a,
    Te,
    u,
    s,
    d,
    m,
    y,
    E
  );
}, Ig = (t, r) => {
  if (typeof r != "number")
    throw new TypeError(`${Hs}: ${t} typeof ${typeof r} is not a number`);
  if (!Number.isSafeInteger(r))
    throw new RangeError(`${Hs}: ${t} value ${r} is not a safe integer`);
  if (r < 0)
    throw new RangeError(`${Hs}: ${t} value ${r} is a negative integer`);
}, qg = (t, r) => {
  const a = typeof r;
  if (a !== "function")
    throw new TypeError(`${Hs}: ${t} typeof ${a} is not a function`);
};
function rC(t, r, a, c) {
  Ig("aLength", t), Ig("bLength", r), qg("isCommon", a), qg("foundSubsequence", c);
  const u = Js(0, t, 0, r, a);
  if (u !== 0 && c(u, 0, 0), t !== u || r !== u) {
    const s = u, d = u, m = Xs(
      s,
      t - 1,
      d,
      r - 1,
      a
    ), y = t - m, E = r - m, b = u + m;
    t !== b && r !== b && sm(
      0,
      s,
      y,
      d,
      E,
      !1,
      [
        {
          foundSubsequence: c,
          isCommon: a
        }
      ],
      [rr],
      [rr],
      {
        aCommonFollowing: rr,
        aCommonPreceding: rr,
        aEndPreceding: rr,
        aStartFollowing: rr,
        bCommonFollowing: rr,
        bCommonPreceding: rr,
        bEndPreceding: rr,
        bStartFollowing: rr,
        nChangeFollowing: rr,
        nChangePreceding: rr,
        nCommonFollowing: rr,
        nCommonPreceding: rr
      }
    ), m !== 0 && c(m, y, E);
  }
}
function Vg(t) {
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  if (Array.isArray(t))
    return "array";
  if (typeof t == "boolean")
    return "boolean";
  if (typeof t == "function")
    return "function";
  if (typeof t == "number")
    return "number";
  if (typeof t == "string")
    return "string";
  if (typeof t == "bigint")
    return "bigint";
  if (typeof t == "object") {
    if (t != null) {
      if (t.constructor === RegExp)
        return "regexp";
      if (t.constructor === Map)
        return "map";
      if (t.constructor === Set)
        return "set";
      if (t.constructor === Date)
        return "date";
    }
    return "object";
  } else if (typeof t == "symbol")
    return "symbol";
  throw new Error(`value of unknown type: ${t}`);
}
const wl = -1, xl = 1, qf = 0;
class Us {
  constructor(r, a) {
    Pt(this, 0);
    Pt(this, 1);
    this[0] = r, this[1] = a;
  }
}
const oE = "Compared values have no visual difference.", iC = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
function aC(t, r) {
  return t.replace(/\s+$/, (a) => r(a));
}
function Nm(t, r, a, c, u, s) {
  return t.length !== 0 ? a(
    `${c} ${aC(t, u)}`
  ) : c !== " " ? a(c) : r && s.length !== 0 ? a(`${c} ${s}`) : "";
}
function uE(t, r, {
  aColor: a,
  aIndicator: c,
  changeLineTrailingSpaceColor: u,
  emptyFirstOrLastLinePlaceholder: s
}) {
  return Nm(
    t,
    r,
    a,
    c,
    u,
    s
  );
}
function lE(t, r, {
  bColor: a,
  bIndicator: c,
  changeLineTrailingSpaceColor: u,
  emptyFirstOrLastLinePlaceholder: s
}) {
  return Nm(
    t,
    r,
    a,
    c,
    u,
    s
  );
}
function sE(t, r, {
  commonColor: a,
  commonIndicator: c,
  commonLineTrailingSpaceColor: u,
  emptyFirstOrLastLinePlaceholder: s
}) {
  return Nm(
    t,
    r,
    a,
    c,
    u,
    s
  );
}
function Hg(t, r, a, c, { patchColor: u }) {
  return u(
    `@@ -${t + 1},${r - t} +${a + 1},${c - a} @@`
  );
}
function oC(t, r) {
  const a = t.length, c = r.contextLines, u = c + c;
  let s = a, d = !1, m = 0, y = 0;
  for (; y !== a; ) {
    const Z = y;
    for (; y !== a && t[y][0] === qf; )
      y += 1;
    if (Z !== y)
      if (Z === 0)
        y > c && (s -= y - c, d = !0);
      else if (y === a) {
        const K = y - Z;
        K > c && (s -= K - c, d = !0);
      } else {
        const K = y - Z;
        K > u && (s -= K - u, m += 1);
      }
    for (; y !== a && t[y][0] !== qf; )
      y += 1;
  }
  const E = m !== 0 || d;
  m !== 0 ? s += m + 1 : d && (s += 1);
  const b = s - 1, x = [];
  let R = 0;
  E && x.push("");
  let j = 0, U = 0, q = 0, A = 0;
  const ye = (Z) => {
    const K = x.length;
    x.push(sE(Z, K === 0 || K === b, r)), q += 1, A += 1;
  }, ee = (Z) => {
    const K = x.length;
    x.push(uE(Z, K === 0 || K === b, r)), q += 1;
  }, le = (Z) => {
    const K = x.length;
    x.push(lE(Z, K === 0 || K === b, r)), A += 1;
  };
  for (y = 0; y !== a; ) {
    let Z = y;
    for (; y !== a && t[y][0] === qf; )
      y += 1;
    if (Z !== y)
      if (Z === 0) {
        y > c && (Z = y - c, j = Z, U = Z, q = j, A = U);
        for (let K = Z; K !== y; K += 1)
          ye(t[K][1]);
      } else if (y === a) {
        const K = y - Z > c ? Z + c : y;
        for (let se = Z; se !== K; se += 1)
          ye(t[se][1]);
      } else {
        const K = y - Z;
        if (K > u) {
          const se = Z + c;
          for (let ve = Z; ve !== se; ve += 1)
            ye(t[ve][1]);
          x[R] = Hg(
            j,
            q,
            U,
            A,
            r
          ), R = x.length, x.push("");
          const Te = K - u;
          j = q + Te, U = A + Te, q = j, A = U;
          for (let ve = y - c; ve !== y; ve += 1)
            ye(t[ve][1]);
        } else
          for (let se = Z; se !== y; se += 1)
            ye(t[se][1]);
      }
    for (; y !== a && t[y][0] === wl; )
      ee(t[y][1]), y += 1;
    for (; y !== a && t[y][0] === xl; )
      le(t[y][1]), y += 1;
  }
  return E && (x[R] = Hg(j, q, U, A, r)), x.join(`
`);
}
function uC(t, r) {
  return t.map((a, c, u) => {
    const s = a[1], d = c === 0 || c === u.length - 1;
    switch (a[0]) {
      case wl:
        return uE(s, d, r);
      case xl:
        return lE(s, d, r);
      default:
        return sE(s, d, r);
    }
  }).join(`
`);
}
const Yg = (t) => t, cE = 5;
function lC() {
  const t = Om();
  return {
    aAnnotation: "Expected",
    aColor: t.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: t.red,
    bIndicator: "+",
    changeColor: t.inverse,
    changeLineTrailingSpaceColor: Yg,
    commonColor: t.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: Yg,
    compareKeys: void 0,
    contextLines: cE,
    emptyFirstOrLastLinePlaceholder: "",
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: t.yellow
  };
}
function sC(t) {
  return t && typeof t == "function" ? t : void 0;
}
function cC(t) {
  return typeof t == "number" && Number.isSafeInteger(t) && t >= 0 ? t : cE;
}
function rc(t = {}) {
  return {
    ...lC(),
    ...t,
    compareKeys: sC(t.compareKeys),
    contextLines: cC(t.contextLines)
  };
}
function gl(t) {
  return t.length === 1 && t[0].length === 0;
}
function fC(t) {
  let r = 0, a = 0;
  return t.forEach((c) => {
    switch (c[0]) {
      case wl:
        r += 1;
        break;
      case xl:
        a += 1;
        break;
    }
  }), { a: r, b: a };
}
function dC({
  aAnnotation: t,
  aColor: r,
  aIndicator: a,
  bAnnotation: c,
  bColor: u,
  bIndicator: s,
  includeChangeCounts: d,
  omitAnnotationLines: m
}, y) {
  if (m)
    return "";
  let E = "", b = "";
  if (d) {
    const j = String(y.a), U = String(y.b), q = c.length - t.length, A = " ".repeat(Math.max(0, q)), ye = " ".repeat(Math.max(0, -q)), ee = U.length - j.length, le = " ".repeat(Math.max(0, ee)), Z = " ".repeat(Math.max(0, -ee));
    E = `${A}  ${a} ${le}${j}`, b = `${ye}  ${s} ${Z}${U}`;
  }
  const x = `${a} ${t}${E}`, R = `${s} ${c}${b}`;
  return `${r(x)}
${u(R)}

`;
}
function fE(t, r) {
  return dC(r, fC(t)) + (r.expand ? uC(t, r) : oC(t, r));
}
function Mm(t, r, a) {
  return fE(
    dE(
      gl(t) ? [] : t,
      gl(r) ? [] : r
    ),
    rc(a)
  );
}
function pC(t, r, a, c, u) {
  if (gl(t) && gl(a) && (t = [], a = []), gl(r) && gl(c) && (r = [], c = []), t.length !== a.length || r.length !== c.length)
    return Mm(t, r, u);
  const s = dE(a, c);
  let d = 0, m = 0;
  return s.forEach((y) => {
    switch (y[0]) {
      case wl:
        y[1] = t[d], d += 1;
        break;
      case xl:
        y[1] = r[m], m += 1;
        break;
      default:
        y[1] = r[m], d += 1, m += 1;
    }
  }), fE(s, rc(u));
}
function dE(t, r) {
  const a = t.length, c = r.length, u = (b, x) => t[b] === r[x], s = [];
  let d = 0, m = 0;
  const y = (b, x, R) => {
    for (; d !== x; d += 1)
      s.push(new Us(wl, t[d]));
    for (; m !== R; m += 1)
      s.push(new Us(xl, r[m]));
    for (; b !== 0; b -= 1, d += 1, m += 1)
      s.push(new Us(qf, r[m]));
  };
  for ((Ug.default || Ug)(a, c, u, y); d !== a; d += 1)
    s.push(new Us(wl, t[d]));
  for (; m !== c; m += 1)
    s.push(new Us(xl, r[m]));
  return s;
}
function cm(t, r) {
  const { commonColor: a } = rc(r);
  return a(t);
}
const {
  AsymmetricMatcher: hC,
  DOMCollection: mC,
  DOMElement: vC,
  Immutable: yC,
  ReactElement: gC,
  ReactTestComponent: bC
} = _m, pE = [
  bC,
  gC,
  vC,
  mC,
  yC,
  hC
], fm = {
  plugins: pE
}, hE = {
  callToJSON: !1,
  maxDepth: 10,
  plugins: pE
};
function Zs(t, r, a) {
  if (Object.is(t, r))
    return "";
  const c = Vg(t);
  let u = c, s = !1;
  if (c === "object" && typeof t.asymmetricMatch == "function") {
    if (t.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof t.getExpectedType != "function")
      return null;
    u = t.getExpectedType(), s = u === "string";
  }
  if (u !== Vg(r)) {
    const { aAnnotation: d, aColor: m, aIndicator: y, bAnnotation: E, bColor: b, bIndicator: x } = rc(a), R = dm(hE, a), j = Li(t, R), U = Li(r, R), q = `${m(`${y} ${d}:`)} 
${j}`, A = `${b(`${x} ${E}:`)} 
${U}`;
    return `${q}

${A}`;
  }
  if (s)
    return null;
  switch (c) {
    case "string":
      return Mm(t.split(`
`), r.split(`
`), a);
    case "boolean":
    case "number":
      return SC(t, r, a);
    case "map":
      return jh(Qg(t), Qg(r), a);
    case "set":
      return jh(Kg(t), Kg(r), a);
    default:
      return jh(t, r, a);
  }
}
function SC(t, r, a) {
  const c = Li(t, fm), u = Li(r, fm);
  return c === u ? "" : Mm(c.split(`
`), u.split(`
`), a);
}
function Qg(t) {
  return new Map(Array.from(t.entries()).sort());
}
function Kg(t) {
  return new Set(Array.from(t.values()).sort());
}
function jh(t, r, a) {
  let c, u = !1;
  try {
    const d = dm(fm, a);
    c = Gg(t, r, d, a);
  } catch {
    u = !0;
  }
  const s = cm(oE, a);
  if (c === void 0 || c === s) {
    const d = dm(hE, a);
    c = Gg(t, r, d, a), c !== s && !u && (c = `${cm(
      iC,
      a
    )}

${c}`);
  }
  return c;
}
function dm(t, r) {
  const { compareKeys: a } = rc(r);
  return {
    ...t,
    compareKeys: a
  };
}
function Gg(t, r, a, c) {
  const u = { ...a, indent: 0 }, s = Li(t, u), d = Li(r, u);
  if (s === d)
    return cm(oE, c);
  {
    const m = Li(t, a), y = Li(r, a);
    return pC(
      m.split(`
`),
      y.split(`
`),
      s.split(`
`),
      d.split(`
`),
      c
    );
  }
}
const EC = "@@__IMMUTABLE_RECORD__@@", TC = "@@__IMMUTABLE_ITERABLE__@@";
function wC(t) {
  return t && (t[TC] || t[EC]);
}
const xC = Object.getPrototypeOf({});
function Wg(t) {
  return t instanceof Error ? `<unserializable>: ${t.message}` : typeof t == "string" ? `<unserializable>: ${t}` : "<unserializable>";
}
function Ys(t, r = /* @__PURE__ */ new WeakMap()) {
  if (!t || typeof t == "string")
    return t;
  if (typeof t == "function")
    return `Function<${t.name || "anonymous"}>`;
  if (typeof t == "symbol")
    return t.toString();
  if (typeof t != "object")
    return t;
  if (wC(t))
    return Ys(t.toJSON(), r);
  if (t instanceof Promise || t.constructor && t.constructor.prototype === "AsyncFunction")
    return "Promise";
  if (typeof Element < "u" && t instanceof Element)
    return t.tagName;
  if (typeof t.asymmetricMatch == "function")
    return `${t.toString()} ${iE(t.sample)}`;
  if (r.has(t))
    return r.get(t);
  if (Array.isArray(t)) {
    const a = new Array(t.length);
    return r.set(t, a), t.forEach((c, u) => {
      try {
        a[u] = Ys(c, r);
      } catch (s) {
        a[u] = Wg(s);
      }
    }), a;
  } else {
    const a = /* @__PURE__ */ Object.create(null);
    r.set(t, a);
    let c = t;
    for (; c && c !== xC; )
      Object.getOwnPropertyNames(c).forEach((u) => {
        if (!(u in a))
          try {
            a[u] = Ys(t[u], r);
          } catch (s) {
            delete a[u], a[u] = Wg(s);
          }
      }), c = Object.getPrototypeOf(c);
    return a;
  }
}
function Jg(t) {
  return t.replace(/__vite_ssr_import_\d+__\./g, "");
}
function _C(t, r) {
  if (!t || typeof t != "object")
    return { message: t };
  if (t.stack && (t.stackStr = String(t.stack)), t.name && (t.nameStr = String(t.name)), t.showDiff || t.showDiff === void 0 && t.expected !== void 0 && t.actual !== void 0) {
    const a = xg(t.actual, { forceWritable: !0 }), c = xg(t.expected, { forceWritable: !0 }), { replacedActual: u, replacedExpected: s } = mE(a, c);
    t.diff = Zs(s, u, { ...r, ...t.diffOptions });
  }
  typeof t.expected != "string" && (t.expected = da(t.expected, 10)), typeof t.actual != "string" && (t.actual = da(t.actual, 10));
  try {
    typeof t.message == "string" && (t.message = Jg(t.message)), typeof t.cause == "object" && typeof t.cause.message == "string" && (t.cause.message = Jg(t.cause.message));
  } catch {
  }
  try {
    return Ys(t);
  } catch (a) {
    return Ys(new Error(`Failed to fully serialize error: ${a == null ? void 0 : a.message}
Inner error message: ${t == null ? void 0 : t.message}`));
  }
}
function Xg(t) {
  return am(t) === "Object" && typeof t.asymmetricMatch == "function";
}
function Zg(t, r) {
  const a = am(t), c = am(r);
  return a === c && a === "Object";
}
function mE(t, r, a = /* @__PURE__ */ new WeakSet(), c = /* @__PURE__ */ new WeakSet()) {
  return Zg(t, r) ? a.has(t) || c.has(r) ? { replacedActual: t, replacedExpected: r } : (a.add(t), c.add(r), xS(r).forEach((u) => {
    const s = r[u], d = t[u];
    if (Xg(s))
      s.asymmetricMatch(d) && (t[u] = s);
    else if (Xg(d))
      d.asymmetricMatch(s) && (r[u] = d);
    else if (Zg(d, s)) {
      const m = mE(
        d,
        s,
        a,
        c
      );
      t[u] = m.replacedActual, r[u] = m.replacedExpected;
    }
  }), {
    replacedActual: t,
    replacedExpected: r
  }) : { replacedActual: t, replacedExpected: r };
}
function vE(t, r) {
  function a(u) {
    const s = function(...d) {
      return r.apply(u, d);
    };
    Object.assign(s, r), s.withContext = () => s.bind(u), s.setContext = (d, m) => {
      u[d] = m;
    }, s.mergeContext = (d) => {
      Object.assign(u, d);
    };
    for (const d of t)
      Object.defineProperty(s, d, {
        get() {
          return a({ ...u, [d]: !0 });
        }
      });
    return s;
  }
  const c = a({});
  return c.fn = r, c;
}
function yE(t) {
  const r = [t.name];
  let a = t;
  for (; a != null && a.suite || a != null && a.file; )
    a = a.suite || a.file, a != null && a.name && r.unshift(a.name);
  return r;
}
function CC(t = "") {
  return !t || !t.includes("\\") ? t : t.replace(/\\/g, "/");
}
const RC = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function OC() {
  return typeof process < "u" ? process.cwd().replace(/\\/g, "/") : "/";
}
const NC = function(...t) {
  t = t.map((c) => CC(c));
  let r = "", a = !1;
  for (let c = t.length - 1; c >= -1 && !a; c--) {
    const u = c >= 0 ? t[c] : OC();
    !u || u.length === 0 || (r = `${u}/${r}`, a = eb(u));
  }
  return r = MC(r, !a), a && !eb(r) ? `/${r}` : r.length > 0 ? r : ".";
};
function MC(t, r) {
  let a = "", c = 0, u = -1, s = 0, d = null;
  for (let m = 0; m <= t.length; ++m) {
    if (m < t.length)
      d = t[m];
    else {
      if (d === "/")
        break;
      d = "/";
    }
    if (d === "/") {
      if (!(u === m - 1 || s === 1))
        if (s === 2) {
          if (a.length < 2 || c !== 2 || a[a.length - 1] !== "." || a[a.length - 2] !== ".") {
            if (a.length > 2) {
              const y = a.lastIndexOf("/");
              y === -1 ? (a = "", c = 0) : (a = a.slice(0, y), c = a.length - 1 - a.lastIndexOf("/")), u = m, s = 0;
              continue;
            } else if (a.length > 0) {
              a = "", c = 0, u = m, s = 0;
              continue;
            }
          }
          r && (a += a.length > 0 ? "/.." : "..", c = 2);
        } else
          a.length > 0 ? a += `/${t.slice(u + 1, m)}` : a = t.slice(u + 1, m), c = m - u - 1;
      u = m, s = 0;
    } else
      d === "." && s !== -1 ? ++s : s = -1;
  }
  return a;
}
const eb = function(t) {
  return RC.test(t);
}, $C = /* @__PURE__ */ new WeakMap(), gE = /* @__PURE__ */ new WeakMap(), bE = /* @__PURE__ */ new WeakMap();
function AC(t, r) {
  $C.set(t, r);
}
function DC(t, r) {
  gE.set(t, r);
}
function PC(t) {
  return gE.get(t);
}
function jC(t, r) {
  bE.set(t, r);
}
function kC(t) {
  return bE.get(t);
}
class zC extends Error {
  constructor(a, c) {
    super(a);
    Pt(this, "code", "VITEST_PENDING");
    Pt(this, "taskId");
    this.message = a, this.taskId = c.id;
  }
}
const Qs = {
  tasks: [],
  currentSuite: null
};
function LC(t) {
  var r;
  (r = Qs.currentSuite) == null || r.tasks.push(t);
}
async function FC(t, r) {
  const a = Qs.currentSuite;
  Qs.currentSuite = t, await r(), Qs.currentSuite = a;
}
function UC(t, r, a = !1) {
  if (r <= 0 || r === Number.POSITIVE_INFINITY)
    return t;
  const { setTimeout: c, clearTimeout: u } = ed();
  return (...s) => Promise.race([t(...s), new Promise((d, m) => {
    var y;
    const E = c(() => {
      u(E), m(new Error(IC(a, r)));
    }, r);
    (y = E.unref) == null || y.call(E);
  })]);
}
function BC(t, r) {
  var a;
  const c = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  return c.task = t, c.skip = () => {
    throw t.pending = !0, new zC("test is skipped; abort execution", t);
  }, c.onTestFailed = (u) => {
    t.onFailed || (t.onFailed = []), t.onFailed.push(u);
  }, ((a = r.extendTaskContext) == null ? void 0 : a.call(r, c)) || c;
}
function IC(t, r) {
  return `${t ? "Hook" : "Test"} timed out in ${r}ms.
If this is a long-running ${t ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${t ? "hookTimeout" : "testTimeout"}".`;
}
function qC(t, r = {}) {
  const a = Object.entries(t).map(([c, u], s) => ({
    prop: c,
    value: u,
    index: s,
    isFn: typeof u == "function"
  }));
  return Array.isArray(r.fixtures) ? r.fixtures = r.fixtures.concat(a) : r.fixtures = a, a.forEach((c) => {
    if (c.isFn) {
      const u = EE(c.value);
      u.length && (c.deps = r.fixtures.filter(({ prop: s }) => s !== c.prop && u.includes(s)));
    }
  }), r;
}
const kh = /* @__PURE__ */ new Map(), zh = /* @__PURE__ */ new Map();
function VC(t, r) {
  return (a) => {
    const c = a || r;
    if (!c)
      return t({});
    const u = PC(c);
    if (!(u != null && u.length))
      return t(c);
    const s = EE(t);
    if (!s.length)
      return t(c);
    kh.get(c) || kh.set(c, /* @__PURE__ */ new Map());
    const d = kh.get(c);
    zh.has(c) || zh.set(c, []);
    const m = zh.get(c), y = u.filter(({ prop: x }) => s.includes(x)), E = SE(y);
    if (!E.length)
      return t(c);
    async function b() {
      for (const x of E) {
        if (d.has(x))
          continue;
        const R = x.isFn ? await HC(x.value, c, m) : x.value;
        c[x.prop] = R, d.set(x, R), m.unshift(() => {
          d.delete(x);
        });
      }
    }
    return b().then(() => t(c));
  };
}
async function HC(t, r, a) {
  const c = _g();
  let u = !1;
  const s = t(r, async (d) => {
    u = !0, c.resolve(d);
    const m = _g();
    a.push(async () => {
      m.resolve(), await s;
    }), await m;
  }).catch((d) => {
    if (!u) {
      c.reject(d);
      return;
    }
    throw d;
  });
  return c;
}
function SE(t, r = /* @__PURE__ */ new Set(), a = []) {
  return t.forEach((c) => {
    if (!a.includes(c)) {
      if (!c.isFn || !c.deps) {
        a.push(c);
        return;
      }
      if (r.has(c))
        throw new Error(`Circular fixture dependency detected: ${c.prop} <- ${[...r].reverse().map((u) => u.prop).join(" <- ")}`);
      r.add(c), SE(c.deps, r, a), a.push(c), r.clear();
    }
  }), a;
}
function EE(t) {
  const r = t.toString().match(/[^(]*\(([^)]*)/);
  if (!r)
    return [];
  const a = tb(r[1]);
  if (!a.length)
    return [];
  const c = a[0];
  if (!(c.startsWith("{") && c.endsWith("}")))
    throw new Error(`The first argument inside a fixture must use object destructuring pattern, e.g. ({ test } => {}). Instead, received "${c}".`);
  const u = c.slice(1, -1).replace(/\s/g, ""), s = tb(u).map((m) => m.replace(/\:.*|\=.*/g, "")), d = s.at(-1);
  if (d && d.startsWith("..."))
    throw new Error(`Rest parameters are not supported in fixtures, received "${d}".`);
  return s;
}
function tb(t) {
  const r = [], a = [];
  let c = 0;
  for (let s = 0; s < t.length; s++)
    if (t[s] === "{" || t[s] === "[")
      a.push(t[s] === "{" ? "}" : "]");
    else if (t[s] === a[a.length - 1])
      a.pop();
    else if (!a.length && t[s] === ",") {
      const d = t.substring(c, s).trim();
      d && r.push(d), c = s + 1;
    }
  const u = t.substring(c).trim();
  return u && r.push(u), r;
}
let YC;
function QC() {
  return YC;
}
const Vs = ZC(), KC = Am(
  function(t, r, a) {
    $m().test.fn.call(this, _l(t), r, a);
  }
), GC = Vs, nb = KC;
let kf, WC;
function $m() {
  return Qs.currentSuite || WC;
}
function JC() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function XC(t, r = () => {
}, a, c, u, s, d, m) {
  const y = [], E = [];
  let b;
  q();
  const x = function(ee = "", le = {}) {
    const Z = {
      id: "",
      name: ee,
      suite: void 0,
      each: le.each,
      fails: le.fails,
      context: void 0,
      type: "custom",
      retry: le.retry ?? kf.config.retry,
      repeats: le.repeats,
      mode: le.only ? "only" : le.skip ? "skip" : le.todo ? "todo" : "run",
      meta: le.meta ?? /* @__PURE__ */ Object.create(null)
    }, K = le.handler;
    (le.concurrent || !le.sequential && kf.config.sequence.concurrent) && (Z.concurrent = !0), s && (Z.shuffle = !0);
    const se = BC(Z, kf);
    return Object.defineProperty(Z, "context", {
      value: se,
      enumerable: !1
    }), DC(se, le.fixtures), K && AC(Z, UC(
      VC(K, se),
      (le == null ? void 0 : le.timeout) ?? kf.config.testTimeout
    )), y.push(Z), Z;
  }, R = Am(function(ee, le = dx, Z = {}) {
    typeof Z == "number" && (Z = { timeout: Z }), typeof m == "object" && (Z = Object.assign({}, m, Z)), Z.concurrent = this.concurrent || !this.sequential && (Z == null ? void 0 : Z.concurrent), Z.sequential = this.sequential || !this.concurrent && (Z == null ? void 0 : Z.sequential);
    const K = x(
      _l(ee),
      { ...this, ...Z, handler: le }
    );
    K.type = "test";
  }), j = {
    type: "collector",
    name: t,
    mode: a,
    options: m,
    test: R,
    tasks: y,
    collect: ye,
    task: x,
    clear: A,
    on: U
  };
  function U(ee, ...le) {
    kC(b)[ee].push(...le);
  }
  function q() {
    typeof m == "number" && (m = { timeout: m }), b = {
      id: "",
      type: "suite",
      name: t,
      mode: a,
      each: d,
      shuffle: s,
      tasks: [],
      meta: /* @__PURE__ */ Object.create(null),
      projectName: ""
    }, jC(b, JC());
  }
  function A() {
    y.length = 0, E.length = 0, q();
  }
  async function ye(ee) {
    E.length = 0, r && await FC(j, () => r(R));
    const le = [];
    for (const Z of [...E, ...y])
      le.push(Z.type === "collector" ? await Z.collect(ee) : Z);
    return b.file = ee, b.tasks = le, le.forEach((Z) => {
      Z.suite = b, ee && (Z.file = ee);
    }), b;
  }
  return LC(j), j;
}
function ZC() {
  function t(r, a, c = {}) {
    const u = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run", s = $m();
    return typeof c == "number" && (c = { timeout: c }), s != null && s.options && (c = { ...s.options, ...c }), c.concurrent = this.concurrent || !this.sequential && (c == null ? void 0 : c.concurrent), c.sequential = this.sequential || !this.concurrent && (c == null ? void 0 : c.sequential), XC(_l(r), a, u, this.concurrent, this.sequential, this.shuffle, this.each, c);
  }
  return t.each = function(r, ...a) {
    const c = this.withContext();
    return this.setContext("each", !0), Array.isArray(r) && a.length && (r = TE(r, a)), (u, s, d) => {
      const m = _l(u), y = r.every(Array.isArray);
      r.forEach((E, b) => {
        const x = Array.isArray(E) ? E : [E];
        y ? c(Kf(m, x, b), () => s(...x), d) : c(Kf(m, x, b), () => s(E), d);
      }), this.setContext("each", void 0);
    };
  }, t.skipIf = (r) => r ? Vs.skip : Vs, t.runIf = (r) => r ? Vs : Vs.skip, vE(
    ["concurrent", "sequential", "shuffle", "skip", "only", "todo"],
    t
  );
}
function eR(t, r) {
  const a = t;
  a.each = function(u, ...s) {
    const d = this.withContext();
    return this.setContext("each", !0), Array.isArray(u) && s.length && (u = TE(u, s)), (m, y, E) => {
      const b = _l(m), x = u.every(Array.isArray);
      u.forEach((R, j) => {
        const U = Array.isArray(R) ? R : [R];
        x ? d(Kf(b, U, j), () => y(...U), E) : d(Kf(b, U, j), () => y(R), E);
      }), this.setContext("each", void 0);
    };
  }, a.skipIf = function(u) {
    return u ? this.skip : this;
  }, a.runIf = function(u) {
    return u ? this : this.skip;
  }, a.extend = function(u) {
    const s = qC(u, r);
    return Am(function(d, m, y) {
      $m().test.fn.call(this, _l(d), m, y);
    }, s);
  };
  const c = vE(
    ["concurrent", "sequential", "skip", "only", "todo", "fails"],
    a
  );
  return r && c.mergeContext(r), c;
}
function Am(t, r) {
  return eR(t, r);
}
function _l(t) {
  return typeof t == "string" ? t : t instanceof Function ? t.name || "<anonymous>" : String(t);
}
function Kf(t, r, a) {
  t.includes("%#") && (t = t.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${a}`).replace(/__vitest_escaped_%__/g, "%%"));
  const c = t.split("%").length - 1;
  let u = iE(t, ...r.slice(0, c));
  return wS(r[0]) && (u = u.replace(
    /\$([$\w_.]+)/g,
    // https://github.com/chaijs/chai/pull/1490
    (s, d) => {
      var m, y;
      return K_(px(r[0], d), { truncate: (y = (m = void 0) == null ? void 0 : m.chaiConfig) == null ? void 0 : y.truncateThreshold });
    }
  )), u;
}
function TE(t, r) {
  const a = t.join("").trim().replace(/ /g, "").split(`
`).map((u) => u.split("|"))[0], c = [];
  for (let u = 0; u < Math.floor(r.length / a.length); u++) {
    const s = {};
    for (let d = 0; d < a.length; d++)
      s[a[d]] = r[u * a.length + d];
    c.push(s);
  }
  return c;
}
function Dm() {
  const t = globalThis.__vitest_worker__;
  if (!t) {
    const r = `Vitest failed to access its internal state.

One of the following is possible:
- "vitest" is imported directly without running "vitest" command
- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)
- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues
`;
    throw new Error(r);
  }
  return t;
}
function tR() {
  const t = Dm();
  return t == null ? void 0 : t.environment.name;
}
var Lh = {};
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function wE() {
  var t = [].slice.call(arguments);
  function r(a, c) {
    Object.keys(c).forEach(function(u) {
      ~t.indexOf(u) || (a[u] = c[u]);
    });
  }
  return function() {
    for (var c = [].slice.call(arguments), u = 0, s = {}; u < c.length; u++)
      r(s, c[u]);
    return s;
  };
}
/*!
 * Primary Exports
 */
var xE = Wo;
function Wo(t, r, a) {
  var c = wE("name", "message", "stack", "constructor", "toJSON"), u = c(r || {});
  this.message = t || "Unspecified AssertionError", this.showDiff = !1;
  for (var s in u)
    this[s] = u[s];
  if (a = a || Wo, Error.captureStackTrace)
    Error.captureStackTrace(this, a);
  else
    try {
      throw new Error();
    } catch (d) {
      this.stack = d.stack;
    }
}
/*!
 * Inherit from Error.prototype
 */
Wo.prototype = Object.create(Error.prototype);
/*!
 * Statically set name
 */
Wo.prototype.name = "AssertionError";
/*!
 * Ensure correct constructor
 */
Wo.prototype.constructor = Wo;
Wo.prototype.toJSON = function(t) {
  var r = wE("constructor", "toJSON", "stack"), a = r({ name: this.name }, this);
  return t !== !1 && this.stack && (a.stack = this.stack), a;
};
var qt = {};
function _E(t, r) {
  return typeof t > "u" || t === null ? !1 : r in Object(t);
}
function CE(t) {
  var r = t.replace(/([^\\])\[/g, "$1.["), a = r.match(/(\\\.|[^.]+?)+/g);
  return a.map(function(u) {
    if (u === "constructor" || u === "__proto__" || u === "prototype")
      return {};
    var s = /^\[(\d+)\]$/, d = s.exec(u), m = null;
    return d ? m = { i: parseFloat(d[1]) } : m = { p: u.replace(/\\([.[\]])/g, "$1") }, m;
  });
}
function rb(t, r, a) {
  var c = t, u = null;
  a = typeof a > "u" ? r.length : a;
  for (var s = 0; s < a; s++) {
    var d = r[s];
    c && (typeof d.p > "u" ? c = c[d.i] : c = c[d.p], s === a - 1 && (u = c));
  }
  return u;
}
function nR(t, r, a) {
  for (var c = t, u = a.length, s = null, d = 0; d < u; d++) {
    var m = null, y = null;
    if (s = a[d], d === u - 1)
      m = typeof s.p > "u" ? s.i : s.p, c[m] = r;
    else if (typeof s.p < "u" && c[s.p])
      c = c[s.p];
    else if (typeof s.i < "u" && c[s.i])
      c = c[s.i];
    else {
      var E = a[d + 1];
      m = typeof s.p > "u" ? s.i : s.p, y = typeof E.p > "u" ? [] : {}, c[m] = y, c = c[m];
    }
  }
}
function RE(t, r) {
  var a = CE(r), c = a[a.length - 1], u = {
    parent: a.length > 1 ? rb(t, a, a.length - 1) : t,
    name: c.p || c.i,
    value: rb(t, a)
  };
  return u.exists = _E(u.parent, u.name), u;
}
function rR(t, r) {
  var a = RE(t, r);
  return a.value;
}
function iR(t, r, a) {
  var c = CE(r);
  return nR(t, a, c), t;
}
var aR = {
  hasProperty: _E,
  getPathInfo: RE,
  getPathValue: rR,
  setPathValue: iR
};
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var hi = function(r, a, c) {
  var u = r.__flags || (r.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    u[a] = c;
  else
    return u[a];
};
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var oR = hi, uR = function(r, a) {
  var c = oR(r, "negate"), u = a[0];
  return c ? !u : u;
}, OE = { exports: {} };
(function(t, r) {
  (function(a, c) {
    t.exports = c();
  })(rm, function() {
    var a = typeof Promise == "function", c = typeof self == "object" ? self : rm, u = typeof Symbol < "u", s = typeof Map < "u", d = typeof Set < "u", m = typeof WeakMap < "u", y = typeof WeakSet < "u", E = typeof DataView < "u", b = u && typeof Symbol.iterator < "u", x = u && typeof Symbol.toStringTag < "u", R = d && typeof Set.prototype.entries == "function", j = s && typeof Map.prototype.entries == "function", U = R && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), q = j && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), A = b && typeof Array.prototype[Symbol.iterator] == "function", ye = A && Object.getPrototypeOf([][Symbol.iterator]()), ee = b && typeof String.prototype[Symbol.iterator] == "function", le = ee && Object.getPrototypeOf(""[Symbol.iterator]()), Z = 8, K = -1;
    function se(Te) {
      var ve = typeof Te;
      if (ve !== "object")
        return ve;
      if (Te === null)
        return "null";
      if (Te === c)
        return "global";
      if (Array.isArray(Te) && (x === !1 || !(Symbol.toStringTag in Te)))
        return "Array";
      if (typeof window == "object" && window !== null) {
        if (typeof window.location == "object" && Te === window.location)
          return "Location";
        if (typeof window.document == "object" && Te === window.document)
          return "Document";
        if (typeof window.navigator == "object") {
          if (typeof window.navigator.mimeTypes == "object" && Te === window.navigator.mimeTypes)
            return "MimeTypeArray";
          if (typeof window.navigator.plugins == "object" && Te === window.navigator.plugins)
            return "PluginArray";
        }
        if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && Te instanceof window.HTMLElement) {
          if (Te.tagName === "BLOCKQUOTE")
            return "HTMLQuoteElement";
          if (Te.tagName === "TD")
            return "HTMLTableDataCellElement";
          if (Te.tagName === "TH")
            return "HTMLTableHeaderCellElement";
        }
      }
      var Ve = x && Te[Symbol.toStringTag];
      if (typeof Ve == "string")
        return Ve;
      var ce = Object.getPrototypeOf(Te);
      return ce === RegExp.prototype ? "RegExp" : ce === Date.prototype ? "Date" : a && ce === Promise.prototype ? "Promise" : d && ce === Set.prototype ? "Set" : s && ce === Map.prototype ? "Map" : y && ce === WeakSet.prototype ? "WeakSet" : m && ce === WeakMap.prototype ? "WeakMap" : E && ce === DataView.prototype ? "DataView" : s && ce === q ? "Map Iterator" : d && ce === U ? "Set Iterator" : A && ce === ye ? "Array Iterator" : ee && ce === le ? "String Iterator" : ce === null ? "Object" : Object.prototype.toString.call(Te).slice(Z, K);
    }
    return se;
  });
})(OE);
var td = OE.exports;
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var lR = xE, Fh = hi, sR = td, cR = function(r, a) {
  var c = Fh(r, "message"), u = Fh(r, "ssfi");
  c = c ? c + ": " : "", r = Fh(r, "object"), a = a.map(function(m) {
    return m.toLowerCase();
  }), a.sort();
  var s = a.map(function(m, y) {
    var E = ~["a", "e", "i", "o", "u"].indexOf(m.charAt(0)) ? "an" : "a", b = a.length > 1 && y === a.length - 1 ? "or " : "";
    return b + E + " " + m;
  }).join(", "), d = sR(r).toLowerCase();
  if (!a.some(function(m) {
    return d === m;
  }))
    throw new lR(
      c + "object tested must be " + s + ", but " + d + " given",
      void 0,
      u
    );
};
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var NE = function(r, a) {
  return a.length > 4 ? a[4] : r._obj;
}, fR = Function.prototype.toString, dR = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/, pR = 512;
function hR(t) {
  if (typeof t != "function")
    return null;
  var r = "";
  if (typeof Function.prototype.name > "u" && typeof t.name > "u") {
    var a = fR.call(t);
    if (a.indexOf("(") > pR)
      return r;
    var c = a.match(dR);
    c && (r = c[1]);
  } else
    r = t.name;
  return r;
}
var ME = hR, Ol = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */
  includeStack: !1,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */
  showDiff: !0,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {Boolean}
   * @api public
   */
  useProxy: !0,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @api public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"],
  /**
   * ### config.deepEqual
   *
   * User configurable property, defines which a custom function to use for deepEqual
   * comparisons.
   * By default, the function used is the one from the `deep-eql` package without custom comparator.
   *
   *     // use a custom comparator
   *     chai.config.deepEqual = (expected, actual) => {
   *        return chai.util.eql(expected, actual, {
   *           comparator: (expected, actual) => {
   *              // for non number comparison, use the default behavior
   *              if(typeof expected !== 'number') return null;
   *              // allow a difference of 10 between compared numbers
   *              return typeof actual === 'number' && Math.abs(actual - expected) < 10
   *           }
   *        })
   *     };
   *
   * @param {Function}
   * @api public
   */
  deepEqual: null
}, mR = rE, ib = Ol, Pm = vR;
function vR(t, r, a, c) {
  var u = {
    colors: c,
    depth: typeof a > "u" ? 2 : a,
    showHidden: r,
    truncate: ib.truncateThreshold ? ib.truncateThreshold : 1 / 0
  };
  return mR.inspect(t, u);
}
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var yR = Pm, ab = Ol, $E = function(r) {
  var a = yR(r), c = Object.prototype.toString.call(r);
  if (ab.truncateThreshold && a.length >= ab.truncateThreshold) {
    if (c === "[object Function]")
      return !r.name || r.name === "" ? "[Function]" : "[Function: " + r.name + "]";
    if (c === "[object Array]")
      return "[ Array(" + r.length + ") ]";
    if (c === "[object Object]") {
      var u = Object.keys(r), s = u.length > 2 ? u.splice(0, 2).join(", ") + ", ..." : u.join(", ");
      return "{ Object (" + s + ") }";
    } else
      return a;
  } else
    return a;
};
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var Uh = hi, gR = NE, Bh = $E, bR = function(r, a) {
  var c = Uh(r, "negate"), u = Uh(r, "object"), s = a[3], d = gR(r, a), m = c ? a[2] : a[1], y = Uh(r, "message");
  return typeof m == "function" && (m = m()), m = m || "", m = m.replace(/#\{this\}/g, function() {
    return Bh(u);
  }).replace(/#\{act\}/g, function() {
    return Bh(d);
  }).replace(/#\{exp\}/g, function() {
    return Bh(s);
  }), y ? y + ": " + m : m;
};
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Xo = function(r, a, c) {
  var u = r.__flags || (r.__flags = /* @__PURE__ */ Object.create(null));
  a.__flags || (a.__flags = /* @__PURE__ */ Object.create(null)), c = arguments.length === 3 ? c : !0;
  for (var s in u)
    (c || s !== "object" && s !== "ssfi" && s !== "lockSsfi" && s != "message") && (a.__flags[s] = u[s]);
}, jm = { exports: {} };
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var ob = td;
function AE() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
AE.prototype = {
  get: function(r) {
    return r[this._key];
  },
  set: function(r, a) {
    Object.isExtensible(r) && Object.defineProperty(r, this._key, {
      value: a,
      configurable: !0
    });
  }
};
var km = typeof WeakMap == "function" ? WeakMap : AE;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function ub(t, r, a) {
  if (!a || Cl(t) || Cl(r))
    return null;
  var c = a.get(t);
  if (c) {
    var u = c.get(r);
    if (typeof u == "boolean")
      return u;
  }
  return null;
}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function zf(t, r, a, c) {
  if (!(!a || Cl(t) || Cl(r))) {
    var u = a.get(t);
    u ? u.set(r, c) : (u = new km(), u.set(r, c), a.set(t, u));
  }
}
/*!
 * Primary Export
 */
jm.exports = nd;
jm.exports.MemoizeMap = km;
function nd(t, r, a) {
  if (a && a.comparator)
    return lb(t, r, a);
  var c = DE(t, r);
  return c !== null ? c : lb(t, r, a);
}
function DE(t, r) {
  return t === r ? t !== 0 || 1 / t === 1 / r : t !== t && // eslint-disable-line no-self-compare
  r !== r ? !0 : Cl(t) || Cl(r) ? !1 : null;
}
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function lb(t, r, a) {
  a = a || {}, a.memoize = a.memoize === !1 ? !1 : a.memoize || new km();
  var c = a && a.comparator, u = ub(t, r, a.memoize);
  if (u !== null)
    return u;
  var s = ub(r, t, a.memoize);
  if (s !== null)
    return s;
  if (c) {
    var d = c(t, r);
    if (d === !1 || d === !0)
      return zf(t, r, a.memoize, d), d;
    var m = DE(t, r);
    if (m !== null)
      return m;
  }
  var y = ob(t);
  if (y !== ob(r))
    return zf(t, r, a.memoize, !1), !1;
  zf(t, r, a.memoize, !0);
  var E = SR(t, r, y, a);
  return zf(t, r, a.memoize, E), E;
}
function SR(t, r, a, c) {
  switch (a) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return nd(t.valueOf(), r.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return t === r;
    case "Error":
      return PE(t, r, ["name", "message", "code"], c);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return Go(t, r, c);
    case "RegExp":
      return ER(t, r);
    case "Generator":
      return TR(t, r, c);
    case "DataView":
      return Go(new Uint8Array(t.buffer), new Uint8Array(r.buffer), c);
    case "ArrayBuffer":
      return Go(new Uint8Array(t), new Uint8Array(r), c);
    case "Set":
      return sb(t, r, c);
    case "Map":
      return sb(t, r, c);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return t.equals(r);
    case "Temporal.Duration":
      return t.total("nanoseconds") === r.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return t.toString() === r.toString();
    default:
      return xR(t, r, c);
  }
}
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
function ER(t, r) {
  return t.toString() === r.toString();
}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function sb(t, r, a) {
  if (t.size !== r.size)
    return !1;
  if (t.size === 0)
    return !0;
  var c = [], u = [];
  return t.forEach(function(d, m) {
    c.push([d, m]);
  }), r.forEach(function(d, m) {
    u.push([d, m]);
  }), Go(c.sort(), u.sort(), a);
}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function Go(t, r, a) {
  var c = t.length;
  if (c !== r.length)
    return !1;
  if (c === 0)
    return !0;
  for (var u = -1; ++u < c; )
    if (nd(t[u], r[u], a) === !1)
      return !1;
  return !0;
}
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function TR(t, r, a) {
  return Go(pm(t), pm(r), a);
}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function wR(t) {
  return typeof Symbol < "u" && typeof t == "object" && typeof Symbol.iterator < "u" && typeof t[Symbol.iterator] == "function";
}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function cb(t) {
  if (wR(t))
    try {
      return pm(t[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function pm(t) {
  for (var r = t.next(), a = [r.value]; r.done === !1; )
    r = t.next(), a.push(r.value);
  return a;
}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function fb(t) {
  var r = [];
  for (var a in t)
    r.push(a);
  return r;
}
function db(t) {
  for (var r = [], a = Object.getOwnPropertySymbols(t), c = 0; c < a.length; c += 1) {
    var u = a[c];
    Object.getOwnPropertyDescriptor(t, u).enumerable && r.push(u);
  }
  return r;
}
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function PE(t, r, a, c) {
  var u = a.length;
  if (u === 0)
    return !0;
  for (var s = 0; s < u; s += 1)
    if (nd(t[a[s]], r[a[s]], c) === !1)
      return !1;
  return !0;
}
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function xR(t, r, a) {
  var c = fb(t), u = fb(r), s = db(t), d = db(r);
  if (c = c.concat(s), u = u.concat(d), c.length && c.length === u.length)
    return Go(pb(c).sort(), pb(u).sort()) === !1 ? !1 : PE(t, r, c, a);
  var m = cb(t), y = cb(r);
  return m.length && m.length === y.length ? (m.sort(), y.sort(), Go(m, y, a)) : c.length === 0 && m.length === 0 && u.length === 0 && y.length === 0;
}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function Cl(t) {
  return t === null || typeof t != "object";
}
function pb(t) {
  return t.map(function(a) {
    return typeof a == "symbol" ? a.toString() : a;
  });
}
var _R = jm.exports, CR = Ol;
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var rd = function() {
  return CR.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
};
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Ih, hb;
function RR() {
  if (hb)
    return Ih;
  hb = 1;
  var t = Zo(), r = hi, a = rd, c = Xo;
  return Ih = function(s, d, m) {
    m = m === void 0 ? function() {
    } : m, Object.defineProperty(
      s,
      d,
      {
        get: function y() {
          !a() && !r(this, "lockSsfi") && r(this, "ssfi", y);
          var E = m.call(this);
          if (E !== void 0)
            return E;
          var b = new t.Assertion();
          return c(this, b), b;
        },
        configurable: !0
      }
    );
  }, Ih;
}
var OR = Object.getOwnPropertyDescriptor(function() {
}, "length");
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var id = function(r, a, c) {
  return OR.configurable && Object.defineProperty(r, "length", {
    get: function() {
      throw Error(c ? "Invalid Chai property: " + a + '.length. Due to a compatibility issue, "length" cannot directly follow "' + a + '". Use "' + a + '.lengthOf" instead.' : "Invalid Chai property: " + a + '.length. See docs for proper usage of "' + a + '".');
    }
  }), r;
};
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var NR = function(r) {
  var a = Object.getOwnPropertyNames(r);
  function c(s) {
    a.indexOf(s) === -1 && a.push(s);
  }
  for (var u = Object.getPrototypeOf(r); u !== null; )
    Object.getOwnPropertyNames(u).forEach(c), u = Object.getPrototypeOf(u);
  return a;
}, MR = Ol, mb = hi, $R = NR, AR = rd;
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var vb = ["__flags", "__methods", "_obj", "assert"], ad = function(r, a) {
  return AR() ? new Proxy(r, {
    get: function c(u, s) {
      if (typeof s == "string" && MR.proxyExcludedKeys.indexOf(s) === -1 && !Reflect.has(u, s)) {
        if (a)
          throw Error("Invalid Chai property: " + a + "." + s + '. See docs for proper usage of "' + a + '".');
        var d = null, m = 4;
        throw $R(u).forEach(function(y) {
          if (!Object.prototype.hasOwnProperty(y) && vb.indexOf(y) === -1) {
            var E = DR(
              s,
              y,
              m
            );
            E < m && (d = y, m = E);
          }
        }), Error(d !== null ? "Invalid Chai property: " + s + '. Did you mean "' + d + '"?' : "Invalid Chai property: " + s);
      }
      return vb.indexOf(s) === -1 && !mb(u, "lockSsfi") && mb(u, "ssfi", c), Reflect.get(u, s);
    }
  }) : r;
};
function DR(t, r, a) {
  if (Math.abs(t.length - r.length) >= a)
    return a;
  for (var c = [], u = 0; u <= t.length; u++)
    c[u] = Array(r.length + 1).fill(0), c[u][0] = u;
  for (var s = 0; s < r.length; s++)
    c[0][s] = s;
  for (var u = 1; u <= t.length; u++)
    for (var d = t.charCodeAt(u - 1), s = 1; s <= r.length; s++) {
      if (Math.abs(u - s) >= a) {
        c[u][s] = a;
        continue;
      }
      c[u][s] = Math.min(
        c[u - 1][s] + 1,
        c[u][s - 1] + 1,
        c[u - 1][s - 1] + (d === r.charCodeAt(s - 1) ? 0 : 1)
      );
    }
  return c[t.length][r.length];
}
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var qh, yb;
function PR() {
  if (yb)
    return qh;
  yb = 1;
  var t = id, r = Zo(), a = hi, c = ad, u = Xo;
  return qh = function(d, m, y) {
    var E = function() {
      a(this, "lockSsfi") || a(this, "ssfi", E);
      var b = y.apply(this, arguments);
      if (b !== void 0)
        return b;
      var x = new r.Assertion();
      return u(this, x), x;
    };
    t(E, m, !1), d[m] = c(E, m);
  }, qh;
}
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Vh, gb;
function jR() {
  if (gb)
    return Vh;
  gb = 1;
  var t = Zo(), r = hi, a = rd, c = Xo;
  return Vh = function(s, d, m) {
    var y = Object.getOwnPropertyDescriptor(s, d), E = function() {
    };
    y && typeof y.get == "function" && (E = y.get), Object.defineProperty(
      s,
      d,
      {
        get: function b() {
          !a() && !r(this, "lockSsfi") && r(this, "ssfi", b);
          var x = r(this, "lockSsfi");
          r(this, "lockSsfi", !0);
          var R = m(E).call(this);
          if (r(this, "lockSsfi", x), R !== void 0)
            return R;
          var j = new t.Assertion();
          return c(this, j), j;
        },
        configurable: !0
      }
    );
  }, Vh;
}
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Hh, bb;
function kR() {
  if (bb)
    return Hh;
  bb = 1;
  var t = id, r = Zo(), a = hi, c = ad, u = Xo;
  return Hh = function(d, m, y) {
    var E = d[m], b = function() {
      throw new Error(m + " is not a function");
    };
    E && typeof E == "function" && (b = E);
    var x = function() {
      a(this, "lockSsfi") || a(this, "ssfi", x);
      var R = a(this, "lockSsfi");
      a(this, "lockSsfi", !0);
      var j = y(b).apply(this, arguments);
      if (a(this, "lockSsfi", R), j !== void 0)
        return j;
      var U = new r.Assertion();
      return u(this, U), U;
    };
    t(x, m, !1), d[m] = c(x, m);
  }, Hh;
}
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Yh, Sb;
function zR() {
  if (Sb)
    return Yh;
  Sb = 1;
  /*!
   * Module dependencies
   */
  var t = id, r = Zo(), a = hi, c = ad, u = Xo;
  /*!
   * Module variables
   */
  var s = typeof Object.setPrototypeOf == "function", d = function() {
  }, m = Object.getOwnPropertyNames(d).filter(function(b) {
    var x = Object.getOwnPropertyDescriptor(d, b);
    return typeof x != "object" ? !0 : !x.configurable;
  }), y = Function.prototype.call, E = Function.prototype.apply;
  return Yh = function(x, R, j, U) {
    typeof U != "function" && (U = function() {
    });
    var q = {
      method: j,
      chainingBehavior: U
    };
    x.__methods || (x.__methods = {}), x.__methods[R] = q, Object.defineProperty(
      x,
      R,
      {
        get: function() {
          q.chainingBehavior.call(this);
          var ye = function() {
            a(this, "lockSsfi") || a(this, "ssfi", ye);
            var Z = q.method.apply(this, arguments);
            if (Z !== void 0)
              return Z;
            var K = new r.Assertion();
            return u(this, K), K;
          };
          if (t(ye, R, !0), s) {
            var ee = Object.create(this);
            ee.call = y, ee.apply = E, Object.setPrototypeOf(ye, ee);
          } else {
            var le = Object.getOwnPropertyNames(x);
            le.forEach(function(Z) {
              if (m.indexOf(Z) === -1) {
                var K = Object.getOwnPropertyDescriptor(x, Z);
                Object.defineProperty(ye, Z, K);
              }
            });
          }
          return u(this, ye), c(ye);
        },
        configurable: !0
      }
    );
  }, Yh;
}
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Qh, Eb;
function LR() {
  if (Eb)
    return Qh;
  Eb = 1;
  var t = Zo(), r = Xo;
  return Qh = function(c, u, s, d) {
    var m = c.__methods[u], y = m.chainingBehavior;
    m.chainingBehavior = function() {
      var x = d(y).call(this);
      if (x !== void 0)
        return x;
      var R = new t.Assertion();
      return r(this, R), R;
    };
    var E = m.method;
    m.method = function() {
      var x = s(E).apply(this, arguments);
      if (x !== void 0)
        return x;
      var R = new t.Assertion();
      return r(this, R), R;
    };
  }, Qh;
}
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var Tb = Pm, FR = function(r, a) {
  return Tb(r) < Tb(a) ? -1 : 1;
};
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var jE = function(r) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(r).filter(function(a) {
    return Object.getOwnPropertyDescriptor(r, a).enumerable;
  });
};
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var UR = jE, BR = function(r) {
  return Object.keys(r).concat(UR(r));
}, Kh = ME;
function IR(t, r) {
  return r instanceof Error && t === r;
}
function qR(t, r) {
  return r instanceof Error ? t.constructor === r.constructor || t instanceof r.constructor : r.prototype instanceof Error || r === Error ? t.constructor === r || t instanceof r : !1;
}
function VR(t, r) {
  var a = typeof t == "string" ? t : t.message;
  return r instanceof RegExp ? r.test(a) : typeof r == "string" ? a.indexOf(r) !== -1 : !1;
}
function HR(t) {
  var r = t;
  if (t instanceof Error)
    r = Kh(t.constructor);
  else if (typeof t == "function" && (r = Kh(t), r === "")) {
    var a = Kh(new t());
    r = a || r;
  }
  return r;
}
function YR(t) {
  var r = "";
  return t && t.message ? r = t.message : typeof t == "string" && (r = t), r;
}
var QR = {
  compatibleInstance: IR,
  compatibleConstructor: qR,
  compatibleMessage: VR,
  getMessage: YR,
  getConstructorName: HR
};
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function KR(t) {
  return t !== t;
}
var GR = Number.isNaN || KR, WR = td, wb = hi;
function JR(t) {
  var r = WR(t), a = ["Array", "Object", "function"];
  return a.indexOf(r) !== -1;
}
var XR = function(r, a) {
  var c = wb(r, "operator"), u = wb(r, "negate"), s = a[3], d = u ? a[2] : a[1];
  if (c)
    return c;
  if (typeof d == "function" && (d = d()), d = d || "", !!d && !/\shave\s/.test(d)) {
    var m = JR(s);
    return /\snot\s/.test(d) ? m ? "notDeepStrictEqual" : "notStrictEqual" : m ? "deepStrictEqual" : "strictEqual";
  }
};
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var xb;
function ZR() {
  if (xb)
    return qt;
  xb = 1;
  /*!
   * Dependencies that are used for multiple exports are required here only once
   */
  var t = aR;
  /*!
   * test utility
   */
  qt.test = uR;
  /*!
   * type utility
   */
  qt.type = td;
  /*!
   * expectTypes utility
   */
  qt.expectTypes = cR;
  /*!
   * message utility
   */
  qt.getMessage = bR;
  /*!
   * actual utility
   */
  qt.getActual = NE;
  /*!
   * Inspect util
   */
  qt.inspect = Pm;
  /*!
   * Object Display util
   */
  qt.objDisplay = $E;
  /*!
   * Flag utility
   */
  qt.flag = hi;
  /*!
   * Flag transferring utility
   */
  qt.transferFlags = Xo;
  /*!
   * Deep equal utility
   */
  qt.eql = _R;
  /*!
   * Deep path info
   */
  qt.getPathInfo = t.getPathInfo;
  /*!
   * Check if a property exists
   */
  qt.hasProperty = t.hasProperty;
  /*!
   * Function name
   */
  qt.getName = ME;
  /*!
   * add Property
   */
  qt.addProperty = RR();
  /*!
   * add Method
   */
  qt.addMethod = PR();
  /*!
   * overwrite Property
   */
  qt.overwriteProperty = jR();
  /*!
   * overwrite Method
   */
  qt.overwriteMethod = kR();
  /*!
   * Add a chainable method
   */
  qt.addChainableMethod = zR();
  /*!
   * Overwrite chainable method
   */
  qt.overwriteChainableMethod = LR();
  /*!
   * Compare by inspect method
   */
  qt.compareByInspect = FR;
  /*!
   * Get own enumerable property symbols method
   */
  qt.getOwnEnumerablePropertySymbols = jE;
  /*!
   * Get own enumerable properties method
   */
  qt.getOwnEnumerableProperties = BR;
  /*!
   * Checks error against a given set of criteria
   */
  qt.checkError = QR;
  /*!
   * Proxify util
   */
  qt.proxify = ad;
  /*!
   * addLengthGuard util
   */
  qt.addLengthGuard = id;
  /*!
   * isProxyEnabled helper
   */
  qt.isProxyEnabled = rd;
  /*!
   * isNaN method
   */
  qt.isNaN = GR;
  /*!
   * getOperator method
   */
  return qt.getOperator = XR, qt;
}
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var Yo = Ol, eO = function(t, r) {
  /*!
   * Module dependencies.
   */
  var a = t.AssertionError, c = r.flag;
  /*!
   * Module export.
   */
  t.Assertion = u;
  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * - `eql`: This flag contains the deepEqual function to be used by the assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
  function u(s, d, m, y) {
    return c(this, "ssfi", m || u), c(this, "lockSsfi", y), c(this, "object", s), c(this, "message", d), c(this, "eql", Yo.deepEqual ?? r.eql), r.proxify(this);
  }
  Object.defineProperty(u, "includeStack", {
    get: function() {
      return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), Yo.includeStack;
    },
    set: function(s) {
      console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), Yo.includeStack = s;
    }
  }), Object.defineProperty(u, "showDiff", {
    get: function() {
      return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), Yo.showDiff;
    },
    set: function(s) {
      console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), Yo.showDiff = s;
    }
  }), u.addProperty = function(s, d) {
    r.addProperty(this.prototype, s, d);
  }, u.addMethod = function(s, d) {
    r.addMethod(this.prototype, s, d);
  }, u.addChainableMethod = function(s, d, m) {
    r.addChainableMethod(this.prototype, s, d, m);
  }, u.overwriteProperty = function(s, d) {
    r.overwriteProperty(this.prototype, s, d);
  }, u.overwriteMethod = function(s, d) {
    r.overwriteMethod(this.prototype, s, d);
  }, u.overwriteChainableMethod = function(s, d, m) {
    r.overwriteChainableMethod(this.prototype, s, d, m);
  }, u.prototype.assert = function(s, d, m, y, E, b) {
    var x = r.test(this, arguments);
    if (b !== !1 && (b = !0), y === void 0 && E === void 0 && (b = !1), Yo.showDiff !== !0 && (b = !1), !x) {
      d = r.getMessage(this, arguments);
      var R = r.getActual(this, arguments), j = {
        actual: R,
        expected: y,
        showDiff: b
      }, U = r.getOperator(this, arguments);
      throw U && (j.operator = U), new a(
        d,
        j,
        Yo.includeStack ? this.assert : c(this, "ssfi")
      );
    }
  };
  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
  Object.defineProperty(
    u.prototype,
    "_obj",
    {
      get: function() {
        return c(this, "object");
      },
      set: function(s) {
        c(this, "object", s);
      }
    }
  );
};
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var tO = function(t, r) {
  var a = t.Assertion, c = t.AssertionError, u = r.flag;
  [
    "to",
    "be",
    "been",
    "is",
    "and",
    "has",
    "have",
    "with",
    "that",
    "which",
    "at",
    "of",
    "same",
    "but",
    "does",
    "still",
    "also"
  ].forEach(function(C) {
    a.addProperty(C);
  }), a.addProperty("not", function() {
    u(this, "negate", !0);
  }), a.addProperty("deep", function() {
    u(this, "deep", !0);
  }), a.addProperty("nested", function() {
    u(this, "nested", !0);
  }), a.addProperty("own", function() {
    u(this, "own", !0);
  }), a.addProperty("ordered", function() {
    u(this, "ordered", !0);
  }), a.addProperty("any", function() {
    u(this, "any", !0), u(this, "all", !1);
  }), a.addProperty("all", function() {
    u(this, "all", !0), u(this, "any", !1);
  });
  function s(C, D) {
    D && u(this, "message", D), C = C.toLowerCase();
    var V = u(this, "object"), G = ~["a", "e", "i", "o", "u"].indexOf(C.charAt(0)) ? "an " : "a ";
    this.assert(
      C === r.type(V).toLowerCase(),
      "expected #{this} to be " + G + C,
      "expected #{this} not to be " + G + C
    );
  }
  a.addChainableMethod("an", s), a.addChainableMethod("a", s);
  function d(C, D) {
    return r.isNaN(C) && r.isNaN(D) || C === D;
  }
  function m() {
    u(this, "contains", !0);
  }
  function y(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = r.type(V).toLowerCase(), oe = u(this, "message"), be = u(this, "negate"), re = u(this, "ssfi"), Q = u(this, "deep"), De = Q ? "deep " : "", Ge = Q ? u(this, "eql") : d;
    oe = oe ? oe + ": " : "";
    var tt = !1;
    switch (G) {
      case "string":
        tt = V.indexOf(C) !== -1;
        break;
      case "weakset":
        if (Q)
          throw new c(
            oe + "unable to use .deep.include with WeakSet",
            void 0,
            re
          );
        tt = V.has(C);
        break;
      case "map":
        V.forEach(function(mt) {
          tt = tt || Ge(mt, C);
        });
        break;
      case "set":
        Q ? V.forEach(function(mt) {
          tt = tt || Ge(mt, C);
        }) : tt = V.has(C);
        break;
      case "array":
        Q ? tt = V.some(function(mt) {
          return Ge(mt, C);
        }) : tt = V.indexOf(C) !== -1;
        break;
      default:
        if (C !== Object(C))
          throw new c(
            oe + "the given combination of arguments (" + G + " and " + r.type(C).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + r.type(C).toLowerCase(),
            void 0,
            re
          );
        var ot = Object.keys(C), nt = null, Ze = 0;
        if (ot.forEach(function(mt) {
          var J = new a(V);
          if (r.transferFlags(this, J, !0), u(J, "lockSsfi", !0), !be || ot.length === 1) {
            J.property(mt, C[mt]);
            return;
          }
          try {
            J.property(mt, C[mt]);
          } catch (gt) {
            if (!r.checkError.compatibleConstructor(gt, c))
              throw gt;
            nt === null && (nt = gt), Ze++;
          }
        }, this), be && ot.length > 1 && Ze === ot.length)
          throw nt;
        return;
    }
    this.assert(
      tt,
      "expected #{this} to " + De + "include " + r.inspect(C),
      "expected #{this} to not " + De + "include " + r.inspect(C)
    );
  }
  a.addChainableMethod("include", y, m), a.addChainableMethod("contain", y, m), a.addChainableMethod("contains", y, m), a.addChainableMethod("includes", y, m), a.addProperty("ok", function() {
    this.assert(
      u(this, "object"),
      "expected #{this} to be truthy",
      "expected #{this} to be falsy"
    );
  }), a.addProperty("true", function() {
    this.assert(
      u(this, "object") === !0,
      "expected #{this} to be true",
      "expected #{this} to be false",
      !u(this, "negate")
    );
  }), a.addProperty("false", function() {
    this.assert(
      u(this, "object") === !1,
      "expected #{this} to be false",
      "expected #{this} to be true",
      !!u(this, "negate")
    );
  }), a.addProperty("null", function() {
    this.assert(
      u(this, "object") === null,
      "expected #{this} to be null",
      "expected #{this} not to be null"
    );
  }), a.addProperty("undefined", function() {
    this.assert(
      u(this, "object") === void 0,
      "expected #{this} to be undefined",
      "expected #{this} not to be undefined"
    );
  }), a.addProperty("NaN", function() {
    this.assert(
      r.isNaN(u(this, "object")),
      "expected #{this} to be NaN",
      "expected #{this} not to be NaN"
    );
  });
  function E() {
    var C = u(this, "object");
    this.assert(
      C != null,
      "expected #{this} to exist",
      "expected #{this} to not exist"
    );
  }
  a.addProperty("exist", E), a.addProperty("exists", E), a.addProperty("empty", function() {
    var C = u(this, "object"), D = u(this, "ssfi"), V = u(this, "message"), G;
    switch (V = V ? V + ": " : "", r.type(C).toLowerCase()) {
      case "array":
      case "string":
        G = C.length;
        break;
      case "map":
      case "set":
        G = C.size;
        break;
      case "weakmap":
      case "weakset":
        throw new c(
          V + ".empty was passed a weak collection",
          void 0,
          D
        );
      case "function":
        var oe = V + ".empty was passed a function " + r.getName(C);
        throw new c(oe.trim(), void 0, D);
      default:
        if (C !== Object(C))
          throw new c(
            V + ".empty was passed non-string primitive " + r.inspect(C),
            void 0,
            D
          );
        G = Object.keys(C).length;
    }
    this.assert(
      G === 0,
      "expected #{this} to be empty",
      "expected #{this} not to be empty"
    );
  });
  function b() {
    var C = u(this, "object"), D = r.type(C);
    this.assert(
      D === "Arguments",
      "expected #{this} to be arguments but got " + D,
      "expected #{this} to not be arguments"
    );
  }
  a.addProperty("arguments", b), a.addProperty("Arguments", b);
  function x(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object");
    if (u(this, "deep")) {
      var G = u(this, "lockSsfi");
      u(this, "lockSsfi", !0), this.eql(C), u(this, "lockSsfi", G);
    } else
      this.assert(
        C === V,
        "expected #{this} to equal #{exp}",
        "expected #{this} to not equal #{exp}",
        C,
        this._obj,
        !0
      );
  }
  a.addMethod("equal", x), a.addMethod("equals", x), a.addMethod("eq", x);
  function R(C, D) {
    D && u(this, "message", D);
    var V = u(this, "eql");
    this.assert(
      V(C, u(this, "object")),
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      C,
      this._obj,
      !0
    );
  }
  a.addMethod("eql", R), a.addMethod("eqls", R);
  function j(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = u(this, "doLength"), oe = u(this, "message"), be = oe ? oe + ": " : "", re = u(this, "ssfi"), Q = r.type(V).toLowerCase(), De = r.type(C).toLowerCase(), Ge, tt = !0;
    if (G && Q !== "map" && Q !== "set" && new a(V, oe, re, !0).to.have.property("length"), !G && Q === "date" && De !== "date")
      Ge = be + "the argument to above must be a date";
    else if (De !== "number" && (G || Q === "number"))
      Ge = be + "the argument to above must be a number";
    else if (!G && Q !== "date" && Q !== "number") {
      var ot = Q === "string" ? "'" + V + "'" : V;
      Ge = be + "expected " + ot + " to be a number or a date";
    } else
      tt = !1;
    if (tt)
      throw new c(Ge, void 0, re);
    if (G) {
      var nt = "length", Ze;
      Q === "map" || Q === "set" ? (nt = "size", Ze = V.size) : Ze = V.length, this.assert(
        Ze > C,
        "expected #{this} to have a " + nt + " above #{exp} but got #{act}",
        "expected #{this} to not have a " + nt + " above #{exp}",
        C,
        Ze
      );
    } else
      this.assert(
        V > C,
        "expected #{this} to be above #{exp}",
        "expected #{this} to be at most #{exp}",
        C
      );
  }
  a.addMethod("above", j), a.addMethod("gt", j), a.addMethod("greaterThan", j);
  function U(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = u(this, "doLength"), oe = u(this, "message"), be = oe ? oe + ": " : "", re = u(this, "ssfi"), Q = r.type(V).toLowerCase(), De = r.type(C).toLowerCase(), Ge, tt = !0;
    if (G && Q !== "map" && Q !== "set" && new a(V, oe, re, !0).to.have.property("length"), !G && Q === "date" && De !== "date")
      Ge = be + "the argument to least must be a date";
    else if (De !== "number" && (G || Q === "number"))
      Ge = be + "the argument to least must be a number";
    else if (!G && Q !== "date" && Q !== "number") {
      var ot = Q === "string" ? "'" + V + "'" : V;
      Ge = be + "expected " + ot + " to be a number or a date";
    } else
      tt = !1;
    if (tt)
      throw new c(Ge, void 0, re);
    if (G) {
      var nt = "length", Ze;
      Q === "map" || Q === "set" ? (nt = "size", Ze = V.size) : Ze = V.length, this.assert(
        Ze >= C,
        "expected #{this} to have a " + nt + " at least #{exp} but got #{act}",
        "expected #{this} to have a " + nt + " below #{exp}",
        C,
        Ze
      );
    } else
      this.assert(
        V >= C,
        "expected #{this} to be at least #{exp}",
        "expected #{this} to be below #{exp}",
        C
      );
  }
  a.addMethod("least", U), a.addMethod("gte", U), a.addMethod("greaterThanOrEqual", U);
  function q(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = u(this, "doLength"), oe = u(this, "message"), be = oe ? oe + ": " : "", re = u(this, "ssfi"), Q = r.type(V).toLowerCase(), De = r.type(C).toLowerCase(), Ge, tt = !0;
    if (G && Q !== "map" && Q !== "set" && new a(V, oe, re, !0).to.have.property("length"), !G && Q === "date" && De !== "date")
      Ge = be + "the argument to below must be a date";
    else if (De !== "number" && (G || Q === "number"))
      Ge = be + "the argument to below must be a number";
    else if (!G && Q !== "date" && Q !== "number") {
      var ot = Q === "string" ? "'" + V + "'" : V;
      Ge = be + "expected " + ot + " to be a number or a date";
    } else
      tt = !1;
    if (tt)
      throw new c(Ge, void 0, re);
    if (G) {
      var nt = "length", Ze;
      Q === "map" || Q === "set" ? (nt = "size", Ze = V.size) : Ze = V.length, this.assert(
        Ze < C,
        "expected #{this} to have a " + nt + " below #{exp} but got #{act}",
        "expected #{this} to not have a " + nt + " below #{exp}",
        C,
        Ze
      );
    } else
      this.assert(
        V < C,
        "expected #{this} to be below #{exp}",
        "expected #{this} to be at least #{exp}",
        C
      );
  }
  a.addMethod("below", q), a.addMethod("lt", q), a.addMethod("lessThan", q);
  function A(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = u(this, "doLength"), oe = u(this, "message"), be = oe ? oe + ": " : "", re = u(this, "ssfi"), Q = r.type(V).toLowerCase(), De = r.type(C).toLowerCase(), Ge, tt = !0;
    if (G && Q !== "map" && Q !== "set" && new a(V, oe, re, !0).to.have.property("length"), !G && Q === "date" && De !== "date")
      Ge = be + "the argument to most must be a date";
    else if (De !== "number" && (G || Q === "number"))
      Ge = be + "the argument to most must be a number";
    else if (!G && Q !== "date" && Q !== "number") {
      var ot = Q === "string" ? "'" + V + "'" : V;
      Ge = be + "expected " + ot + " to be a number or a date";
    } else
      tt = !1;
    if (tt)
      throw new c(Ge, void 0, re);
    if (G) {
      var nt = "length", Ze;
      Q === "map" || Q === "set" ? (nt = "size", Ze = V.size) : Ze = V.length, this.assert(
        Ze <= C,
        "expected #{this} to have a " + nt + " at most #{exp} but got #{act}",
        "expected #{this} to have a " + nt + " above #{exp}",
        C,
        Ze
      );
    } else
      this.assert(
        V <= C,
        "expected #{this} to be at most #{exp}",
        "expected #{this} to be above #{exp}",
        C
      );
  }
  a.addMethod("most", A), a.addMethod("lte", A), a.addMethod("lessThanOrEqual", A), a.addMethod("within", function(C, D, V) {
    V && u(this, "message", V);
    var G = u(this, "object"), oe = u(this, "doLength"), be = u(this, "message"), re = be ? be + ": " : "", Q = u(this, "ssfi"), De = r.type(G).toLowerCase(), Ge = r.type(C).toLowerCase(), tt = r.type(D).toLowerCase(), ot, nt = !0, Ze = Ge === "date" && tt === "date" ? C.toISOString() + ".." + D.toISOString() : C + ".." + D;
    if (oe && De !== "map" && De !== "set" && new a(G, be, Q, !0).to.have.property("length"), !oe && De === "date" && (Ge !== "date" || tt !== "date"))
      ot = re + "the arguments to within must be dates";
    else if ((Ge !== "number" || tt !== "number") && (oe || De === "number"))
      ot = re + "the arguments to within must be numbers";
    else if (!oe && De !== "date" && De !== "number") {
      var mt = De === "string" ? "'" + G + "'" : G;
      ot = re + "expected " + mt + " to be a number or a date";
    } else
      nt = !1;
    if (nt)
      throw new c(ot, void 0, Q);
    if (oe) {
      var J = "length", gt;
      De === "map" || De === "set" ? (J = "size", gt = G.size) : gt = G.length, this.assert(
        gt >= C && gt <= D,
        "expected #{this} to have a " + J + " within " + Ze,
        "expected #{this} to not have a " + J + " within " + Ze
      );
    } else
      this.assert(
        G >= C && G <= D,
        "expected #{this} to be within " + Ze,
        "expected #{this} to not be within " + Ze
      );
  });
  function ye(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = u(this, "ssfi"), oe = u(this, "message");
    try {
      var be = V instanceof C;
    } catch (Q) {
      throw Q instanceof TypeError ? (oe = oe ? oe + ": " : "", new c(
        oe + "The instanceof assertion needs a constructor but " + r.type(C) + " was given.",
        void 0,
        G
      )) : Q;
    }
    var re = r.getName(C);
    re === null && (re = "an unnamed constructor"), this.assert(
      be,
      "expected #{this} to be an instance of " + re,
      "expected #{this} to not be an instance of " + re
    );
  }
  a.addMethod("instanceof", ye), a.addMethod("instanceOf", ye);
  function ee(C, D, V) {
    V && u(this, "message", V);
    var G = u(this, "nested"), oe = u(this, "own"), be = u(this, "message"), re = u(this, "object"), Q = u(this, "ssfi"), De = typeof C;
    if (be = be ? be + ": " : "", G) {
      if (De !== "string")
        throw new c(
          be + "the argument to property must be a string when using nested syntax",
          void 0,
          Q
        );
    } else if (De !== "string" && De !== "number" && De !== "symbol")
      throw new c(
        be + "the argument to property must be a string, number, or symbol",
        void 0,
        Q
      );
    if (G && oe)
      throw new c(
        be + 'The "nested" and "own" flags cannot be combined.',
        void 0,
        Q
      );
    if (re == null)
      throw new c(
        be + "Target cannot be null or undefined.",
        void 0,
        Q
      );
    var Ge = u(this, "deep"), tt = u(this, "negate"), ot = G ? r.getPathInfo(re, C) : null, nt = G ? ot.value : re[C], Ze = Ge ? u(this, "eql") : (gt, ct) => gt === ct, mt = "";
    Ge && (mt += "deep "), oe && (mt += "own "), G && (mt += "nested "), mt += "property ";
    var J;
    oe ? J = Object.prototype.hasOwnProperty.call(re, C) : G ? J = ot.exists : J = r.hasProperty(re, C), (!tt || arguments.length === 1) && this.assert(
      J,
      "expected #{this} to have " + mt + r.inspect(C),
      "expected #{this} to not have " + mt + r.inspect(C)
    ), arguments.length > 1 && this.assert(
      J && Ze(D, nt),
      "expected #{this} to have " + mt + r.inspect(C) + " of #{exp}, but got #{act}",
      "expected #{this} to not have " + mt + r.inspect(C) + " of #{act}",
      D,
      nt
    ), u(this, "object", nt);
  }
  a.addMethod("property", ee);
  function le(C, D, V) {
    u(this, "own", !0), ee.apply(this, arguments);
  }
  a.addMethod("ownProperty", le), a.addMethod("haveOwnProperty", le);
  function Z(C, D, V) {
    typeof D == "string" && (V = D, D = null), V && u(this, "message", V);
    var G = u(this, "object"), oe = Object.getOwnPropertyDescriptor(Object(G), C), be = u(this, "eql");
    oe && D ? this.assert(
      be(D, oe),
      "expected the own property descriptor for " + r.inspect(C) + " on #{this} to match " + r.inspect(D) + ", got " + r.inspect(oe),
      "expected the own property descriptor for " + r.inspect(C) + " on #{this} to not match " + r.inspect(D),
      D,
      oe,
      !0
    ) : this.assert(
      oe,
      "expected #{this} to have an own property descriptor for " + r.inspect(C),
      "expected #{this} to not have an own property descriptor for " + r.inspect(C)
    ), u(this, "object", oe);
  }
  a.addMethod("ownPropertyDescriptor", Z), a.addMethod("haveOwnPropertyDescriptor", Z);
  function K() {
    u(this, "doLength", !0);
  }
  function se(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = r.type(V).toLowerCase(), oe = u(this, "message"), be = u(this, "ssfi"), re = "length", Q;
    switch (G) {
      case "map":
      case "set":
        re = "size", Q = V.size;
        break;
      default:
        new a(V, oe, be, !0).to.have.property("length"), Q = V.length;
    }
    this.assert(
      Q == C,
      "expected #{this} to have a " + re + " of #{exp} but got #{act}",
      "expected #{this} to not have a " + re + " of #{act}",
      C,
      Q
    );
  }
  a.addChainableMethod("length", se, K), a.addChainableMethod("lengthOf", se, K);
  function Te(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object");
    this.assert(
      C.exec(V),
      "expected #{this} to match " + C,
      "expected #{this} not to match " + C
    );
  }
  a.addMethod("match", Te), a.addMethod("matches", Te), a.addMethod("string", function(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = u(this, "message"), oe = u(this, "ssfi");
    new a(V, G, oe, !0).is.a("string"), this.assert(
      ~V.indexOf(C),
      "expected #{this} to contain " + r.inspect(C),
      "expected #{this} to not contain " + r.inspect(C)
    );
  });
  function ve(C) {
    var D = u(this, "object"), V = r.type(D), G = r.type(C), oe = u(this, "ssfi"), be = u(this, "deep"), re, Q = "", De, Ge = !0, tt = u(this, "message");
    tt = tt ? tt + ": " : "";
    var ot = tt + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
    if (V === "Map" || V === "Set")
      Q = be ? "deeply " : "", De = [], D.forEach(function(pt, Zt) {
        De.push(Zt);
      }), G !== "Array" && (C = Array.prototype.slice.call(arguments));
    else {
      switch (De = r.getOwnEnumerableProperties(D), G) {
        case "Array":
          if (arguments.length > 1)
            throw new c(ot, void 0, oe);
          break;
        case "Object":
          if (arguments.length > 1)
            throw new c(ot, void 0, oe);
          C = Object.keys(C);
          break;
        default:
          C = Array.prototype.slice.call(arguments);
      }
      C = C.map(function(pt) {
        return typeof pt == "symbol" ? pt : String(pt);
      });
    }
    if (!C.length)
      throw new c(tt + "keys required", void 0, oe);
    var nt = C.length, Ze = u(this, "any"), mt = u(this, "all"), J = C, gt = be ? u(this, "eql") : (pt, Zt) => pt === Zt;
    if (!Ze && !mt && (mt = !0), Ze && (Ge = J.some(function(pt) {
      return De.some(function(Zt) {
        return gt(pt, Zt);
      });
    })), mt && (Ge = J.every(function(pt) {
      return De.some(function(Zt) {
        return gt(pt, Zt);
      });
    }), u(this, "contains") || (Ge = Ge && C.length == De.length)), nt > 1) {
      C = C.map(function(pt) {
        return r.inspect(pt);
      });
      var ct = C.pop();
      mt && (re = C.join(", ") + ", and " + ct), Ze && (re = C.join(", ") + ", or " + ct);
    } else
      re = r.inspect(C[0]);
    re = (nt > 1 ? "keys " : "key ") + re, re = (u(this, "contains") ? "contain " : "have ") + re, this.assert(
      Ge,
      "expected #{this} to " + Q + re,
      "expected #{this} to not " + Q + re,
      J.slice(0).sort(r.compareByInspect),
      De.sort(r.compareByInspect),
      !0
    );
  }
  a.addMethod("keys", ve), a.addMethod("key", ve);
  function Ve(C, D, V) {
    V && u(this, "message", V);
    var G = u(this, "object"), oe = u(this, "ssfi"), be = u(this, "message"), re = u(this, "negate") || !1;
    new a(G, be, oe, !0).is.a("function"), (C instanceof RegExp || typeof C == "string") && (D = C, C = null);
    var Q;
    try {
      G();
    } catch (ct) {
      Q = ct;
    }
    var De = C === void 0 && D === void 0, Ge = !!(C && D), tt = !1, ot = !1;
    if (De || !De && !re) {
      var nt = "an error";
      C instanceof Error ? nt = "#{exp}" : C && (nt = r.checkError.getConstructorName(C)), this.assert(
        Q,
        "expected #{this} to throw " + nt,
        "expected #{this} to not throw an error but #{act} was thrown",
        C && C.toString(),
        Q instanceof Error ? Q.toString() : typeof Q == "string" ? Q : Q && r.checkError.getConstructorName(Q)
      );
    }
    if (C && Q) {
      if (C instanceof Error) {
        var Ze = r.checkError.compatibleInstance(Q, C);
        Ze === re && (Ge && re ? tt = !0 : this.assert(
          re,
          "expected #{this} to throw #{exp} but #{act} was thrown",
          "expected #{this} to not throw #{exp}" + (Q && !re ? " but #{act} was thrown" : ""),
          C.toString(),
          Q.toString()
        ));
      }
      var mt = r.checkError.compatibleConstructor(Q, C);
      mt === re && (Ge && re ? tt = !0 : this.assert(
        re,
        "expected #{this} to throw #{exp} but #{act} was thrown",
        "expected #{this} to not throw #{exp}" + (Q ? " but #{act} was thrown" : ""),
        C instanceof Error ? C.toString() : C && r.checkError.getConstructorName(C),
        Q instanceof Error ? Q.toString() : Q && r.checkError.getConstructorName(Q)
      ));
    }
    if (Q && D !== void 0 && D !== null) {
      var J = "including";
      D instanceof RegExp && (J = "matching");
      var gt = r.checkError.compatibleMessage(Q, D);
      gt === re && (Ge && re ? ot = !0 : this.assert(
        re,
        "expected #{this} to throw error " + J + " #{exp} but got #{act}",
        "expected #{this} to throw error not " + J + " #{exp}",
        D,
        r.checkError.getMessage(Q)
      ));
    }
    tt && ot && this.assert(
      re,
      "expected #{this} to throw #{exp} but #{act} was thrown",
      "expected #{this} to not throw #{exp}" + (Q ? " but #{act} was thrown" : ""),
      C instanceof Error ? C.toString() : C && r.checkError.getConstructorName(C),
      Q instanceof Error ? Q.toString() : Q && r.checkError.getConstructorName(Q)
    ), u(this, "object", Q);
  }
  a.addMethod("throw", Ve), a.addMethod("throws", Ve), a.addMethod("Throw", Ve);
  function ce(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = u(this, "itself"), oe = typeof V == "function" && !G ? V.prototype[C] : V[C];
    this.assert(
      typeof oe == "function",
      "expected #{this} to respond to " + r.inspect(C),
      "expected #{this} to not respond to " + r.inspect(C)
    );
  }
  a.addMethod("respondTo", ce), a.addMethod("respondsTo", ce), a.addProperty("itself", function() {
    u(this, "itself", !0);
  });
  function Xe(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = C(V);
    this.assert(
      G,
      "expected #{this} to satisfy " + r.objDisplay(C),
      "expected #{this} to not satisfy" + r.objDisplay(C),
      !u(this, "negate"),
      G
    );
  }
  a.addMethod("satisfy", Xe), a.addMethod("satisfies", Xe);
  function ie(C, D, V) {
    V && u(this, "message", V);
    var G = u(this, "object"), oe = u(this, "message"), be = u(this, "ssfi");
    if (new a(G, oe, be, !0).is.a("number"), typeof C != "number" || typeof D != "number") {
      oe = oe ? oe + ": " : "";
      var re = D === void 0 ? ", and a delta is required" : "";
      throw new c(
        oe + "the arguments to closeTo or approximately must be numbers" + re,
        void 0,
        be
      );
    }
    this.assert(
      Math.abs(G - C) <= D,
      "expected #{this} to be close to " + C + " +/- " + D,
      "expected #{this} not to be close to " + C + " +/- " + D
    );
  }
  a.addMethod("closeTo", ie), a.addMethod("approximately", ie);
  function ge(C, D, V, G, oe) {
    if (!G) {
      if (C.length !== D.length)
        return !1;
      D = D.slice();
    }
    return C.every(function(be, re) {
      if (oe)
        return V ? V(be, D[re]) : be === D[re];
      if (!V) {
        var Q = D.indexOf(be);
        return Q === -1 ? !1 : (G || D.splice(Q, 1), !0);
      }
      return D.some(function(De, Ge) {
        return V(be, De) ? (G || D.splice(Ge, 1), !0) : !1;
      });
    });
  }
  a.addMethod("members", function(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = u(this, "message"), oe = u(this, "ssfi");
    new a(V, G, oe, !0).to.be.an("array"), new a(C, G, oe, !0).to.be.an("array");
    var be = u(this, "contains"), re = u(this, "ordered"), Q, De, Ge;
    be ? (Q = re ? "an ordered superset" : "a superset", De = "expected #{this} to be " + Q + " of #{exp}", Ge = "expected #{this} to not be " + Q + " of #{exp}") : (Q = re ? "ordered members" : "members", De = "expected #{this} to have the same " + Q + " as #{exp}", Ge = "expected #{this} to not have the same " + Q + " as #{exp}");
    var tt = u(this, "deep") ? u(this, "eql") : void 0;
    this.assert(
      ge(C, V, tt, be, re),
      De,
      Ge,
      C,
      V,
      !0
    );
  });
  function Ae(C, D) {
    D && u(this, "message", D);
    var V = u(this, "object"), G = u(this, "message"), oe = u(this, "ssfi"), be = u(this, "contains"), re = u(this, "deep"), Q = u(this, "eql");
    new a(C, G, oe, !0).to.be.an("array"), be ? this.assert(
      C.some(function(De) {
        return V.indexOf(De) > -1;
      }),
      "expected #{this} to contain one of #{exp}",
      "expected #{this} to not contain one of #{exp}",
      C,
      V
    ) : re ? this.assert(
      C.some(function(De) {
        return Q(V, De);
      }),
      "expected #{this} to deeply equal one of #{exp}",
      "expected #{this} to deeply equal one of #{exp}",
      C,
      V
    ) : this.assert(
      C.indexOf(V) > -1,
      "expected #{this} to be one of #{exp}",
      "expected #{this} to not be one of #{exp}",
      C,
      V
    );
  }
  a.addMethod("oneOf", Ae);
  function et(C, D, V) {
    V && u(this, "message", V);
    var G = u(this, "object"), oe = u(this, "message"), be = u(this, "ssfi");
    new a(G, oe, be, !0).is.a("function");
    var re;
    D ? (new a(C, oe, be, !0).to.have.property(D), re = C[D]) : (new a(C, oe, be, !0).is.a("function"), re = C()), G();
    var Q = D == null ? C() : C[D], De = D == null ? re : "." + D;
    u(this, "deltaMsgObj", De), u(this, "initialDeltaValue", re), u(this, "finalDeltaValue", Q), u(this, "deltaBehavior", "change"), u(this, "realDelta", Q !== re), this.assert(
      re !== Q,
      "expected " + De + " to change",
      "expected " + De + " to not change"
    );
  }
  a.addMethod("change", et), a.addMethod("changes", et);
  function Pe(C, D, V) {
    V && u(this, "message", V);
    var G = u(this, "object"), oe = u(this, "message"), be = u(this, "ssfi");
    new a(G, oe, be, !0).is.a("function");
    var re;
    D ? (new a(C, oe, be, !0).to.have.property(D), re = C[D]) : (new a(C, oe, be, !0).is.a("function"), re = C()), new a(re, oe, be, !0).is.a("number"), G();
    var Q = D == null ? C() : C[D], De = D == null ? re : "." + D;
    u(this, "deltaMsgObj", De), u(this, "initialDeltaValue", re), u(this, "finalDeltaValue", Q), u(this, "deltaBehavior", "increase"), u(this, "realDelta", Q - re), this.assert(
      Q - re > 0,
      "expected " + De + " to increase",
      "expected " + De + " to not increase"
    );
  }
  a.addMethod("increase", Pe), a.addMethod("increases", Pe);
  function Qe(C, D, V) {
    V && u(this, "message", V);
    var G = u(this, "object"), oe = u(this, "message"), be = u(this, "ssfi");
    new a(G, oe, be, !0).is.a("function");
    var re;
    D ? (new a(C, oe, be, !0).to.have.property(D), re = C[D]) : (new a(C, oe, be, !0).is.a("function"), re = C()), new a(re, oe, be, !0).is.a("number"), G();
    var Q = D == null ? C() : C[D], De = D == null ? re : "." + D;
    u(this, "deltaMsgObj", De), u(this, "initialDeltaValue", re), u(this, "finalDeltaValue", Q), u(this, "deltaBehavior", "decrease"), u(this, "realDelta", re - Q), this.assert(
      Q - re < 0,
      "expected " + De + " to decrease",
      "expected " + De + " to not decrease"
    );
  }
  a.addMethod("decrease", Qe), a.addMethod("decreases", Qe);
  function me(C, D) {
    D && u(this, "message", D);
    var V = u(this, "deltaMsgObj"), G = u(this, "initialDeltaValue"), oe = u(this, "finalDeltaValue"), be = u(this, "deltaBehavior"), re = u(this, "realDelta"), Q;
    be === "change" ? Q = Math.abs(oe - G) === Math.abs(C) : Q = re === Math.abs(C), this.assert(
      Q,
      "expected " + V + " to " + be + " by " + C,
      "expected " + V + " to not " + be + " by " + C
    );
  }
  a.addMethod("by", me), a.addProperty("extensible", function() {
    var C = u(this, "object"), D = C === Object(C) && Object.isExtensible(C);
    this.assert(
      D,
      "expected #{this} to be extensible",
      "expected #{this} to not be extensible"
    );
  }), a.addProperty("sealed", function() {
    var C = u(this, "object"), D = C === Object(C) ? Object.isSealed(C) : !0;
    this.assert(
      D,
      "expected #{this} to be sealed",
      "expected #{this} to not be sealed"
    );
  }), a.addProperty("frozen", function() {
    var C = u(this, "object"), D = C === Object(C) ? Object.isFrozen(C) : !0;
    this.assert(
      D,
      "expected #{this} to be frozen",
      "expected #{this} to not be frozen"
    );
  }), a.addProperty("finite", function(C) {
    var D = u(this, "object");
    this.assert(
      typeof D == "number" && isFinite(D),
      "expected #{this} to be a finite number",
      "expected #{this} to not be a finite number"
    );
  });
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var nO = function(t, r) {
  t.expect = function(a, c) {
    return new t.Assertion(a, c);
  }, t.expect.fail = function(a, c, u, s) {
    throw arguments.length < 2 && (u = a, a = void 0), u = u || "expect.fail()", new t.AssertionError(u, {
      actual: a,
      expected: c,
      operator: s
    }, t.expect.fail);
  };
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var rO = function(t, r) {
  var a = t.Assertion;
  function c() {
    function u() {
      return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new a(this.valueOf(), null, u) : new a(this, null, u);
    }
    function s(m) {
      Object.defineProperty(this, "should", {
        value: m,
        enumerable: !0,
        configurable: !0,
        writable: !0
      });
    }
    Object.defineProperty(Object.prototype, "should", {
      set: s,
      get: u,
      configurable: !0
    });
    var d = {};
    return d.fail = function(m, y, E, b) {
      throw arguments.length < 2 && (E = m, m = void 0), E = E || "should.fail()", new t.AssertionError(E, {
        actual: m,
        expected: y,
        operator: b
      }, d.fail);
    }, d.equal = function(m, y, E) {
      new a(m, E).to.equal(y);
    }, d.Throw = function(m, y, E, b) {
      new a(m, b).to.Throw(y, E);
    }, d.exist = function(m, y) {
      new a(m, y).to.exist;
    }, d.not = {}, d.not.equal = function(m, y, E) {
      new a(m, E).to.not.equal(y);
    }, d.not.Throw = function(m, y, E, b) {
      new a(m, b).to.not.Throw(y, E);
    }, d.not.exist = function(m, y) {
      new a(m, y).to.not.exist;
    }, d.throw = d.Throw, d.not.throw = d.not.Throw, d;
  }
  t.should = c, t.Should = c;
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var iO = function(t, r) {
  /*!
   * Chai dependencies.
   */
  var a = t.Assertion, c = r.flag;
  /*!
   * Module export.
   */
  var u = t.assert = function(s, d) {
    var m = new a(null, null, t.assert, !0);
    m.assert(
      s,
      d,
      "[ negation message unavailable ]"
    );
  };
  u.fail = function(s, d, m, y) {
    throw arguments.length < 2 && (m = s, s = void 0), m = m || "assert.fail()", new t.AssertionError(m, {
      actual: s,
      expected: d,
      operator: y
    }, u.fail);
  }, u.isOk = function(s, d) {
    new a(s, d, u.isOk, !0).is.ok;
  }, u.isNotOk = function(s, d) {
    new a(s, d, u.isNotOk, !0).is.not.ok;
  }, u.equal = function(s, d, m) {
    var y = new a(s, m, u.equal, !0);
    y.assert(
      d == c(y, "object"),
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{act}",
      d,
      s,
      !0
    );
  }, u.notEqual = function(s, d, m) {
    var y = new a(s, m, u.notEqual, !0);
    y.assert(
      d != c(y, "object"),
      "expected #{this} to not equal #{exp}",
      "expected #{this} to equal #{act}",
      d,
      s,
      !0
    );
  }, u.strictEqual = function(s, d, m) {
    new a(s, m, u.strictEqual, !0).to.equal(d);
  }, u.notStrictEqual = function(s, d, m) {
    new a(s, m, u.notStrictEqual, !0).to.not.equal(d);
  }, u.deepEqual = u.deepStrictEqual = function(s, d, m) {
    new a(s, m, u.deepEqual, !0).to.eql(d);
  }, u.notDeepEqual = function(s, d, m) {
    new a(s, m, u.notDeepEqual, !0).to.not.eql(d);
  }, u.isAbove = function(s, d, m) {
    new a(s, m, u.isAbove, !0).to.be.above(d);
  }, u.isAtLeast = function(s, d, m) {
    new a(s, m, u.isAtLeast, !0).to.be.least(d);
  }, u.isBelow = function(s, d, m) {
    new a(s, m, u.isBelow, !0).to.be.below(d);
  }, u.isAtMost = function(s, d, m) {
    new a(s, m, u.isAtMost, !0).to.be.most(d);
  }, u.isTrue = function(s, d) {
    new a(s, d, u.isTrue, !0).is.true;
  }, u.isNotTrue = function(s, d) {
    new a(s, d, u.isNotTrue, !0).to.not.equal(!0);
  }, u.isFalse = function(s, d) {
    new a(s, d, u.isFalse, !0).is.false;
  }, u.isNotFalse = function(s, d) {
    new a(s, d, u.isNotFalse, !0).to.not.equal(!1);
  }, u.isNull = function(s, d) {
    new a(s, d, u.isNull, !0).to.equal(null);
  }, u.isNotNull = function(s, d) {
    new a(s, d, u.isNotNull, !0).to.not.equal(null);
  }, u.isNaN = function(s, d) {
    new a(s, d, u.isNaN, !0).to.be.NaN;
  }, u.isNotNaN = function(s, d) {
    new a(s, d, u.isNotNaN, !0).not.to.be.NaN;
  }, u.exists = function(s, d) {
    new a(s, d, u.exists, !0).to.exist;
  }, u.notExists = function(s, d) {
    new a(s, d, u.notExists, !0).to.not.exist;
  }, u.isUndefined = function(s, d) {
    new a(s, d, u.isUndefined, !0).to.equal(void 0);
  }, u.isDefined = function(s, d) {
    new a(s, d, u.isDefined, !0).to.not.equal(void 0);
  }, u.isFunction = function(s, d) {
    new a(s, d, u.isFunction, !0).to.be.a("function");
  }, u.isNotFunction = function(s, d) {
    new a(s, d, u.isNotFunction, !0).to.not.be.a("function");
  }, u.isObject = function(s, d) {
    new a(s, d, u.isObject, !0).to.be.a("object");
  }, u.isNotObject = function(s, d) {
    new a(s, d, u.isNotObject, !0).to.not.be.a("object");
  }, u.isArray = function(s, d) {
    new a(s, d, u.isArray, !0).to.be.an("array");
  }, u.isNotArray = function(s, d) {
    new a(s, d, u.isNotArray, !0).to.not.be.an("array");
  }, u.isString = function(s, d) {
    new a(s, d, u.isString, !0).to.be.a("string");
  }, u.isNotString = function(s, d) {
    new a(s, d, u.isNotString, !0).to.not.be.a("string");
  }, u.isNumber = function(s, d) {
    new a(s, d, u.isNumber, !0).to.be.a("number");
  }, u.isNotNumber = function(s, d) {
    new a(s, d, u.isNotNumber, !0).to.not.be.a("number");
  }, u.isFinite = function(s, d) {
    new a(s, d, u.isFinite, !0).to.be.finite;
  }, u.isBoolean = function(s, d) {
    new a(s, d, u.isBoolean, !0).to.be.a("boolean");
  }, u.isNotBoolean = function(s, d) {
    new a(s, d, u.isNotBoolean, !0).to.not.be.a("boolean");
  }, u.typeOf = function(s, d, m) {
    new a(s, m, u.typeOf, !0).to.be.a(d);
  }, u.notTypeOf = function(s, d, m) {
    new a(s, m, u.notTypeOf, !0).to.not.be.a(d);
  }, u.instanceOf = function(s, d, m) {
    new a(s, m, u.instanceOf, !0).to.be.instanceOf(d);
  }, u.notInstanceOf = function(s, d, m) {
    new a(s, m, u.notInstanceOf, !0).to.not.be.instanceOf(d);
  }, u.include = function(s, d, m) {
    new a(s, m, u.include, !0).include(d);
  }, u.notInclude = function(s, d, m) {
    new a(s, m, u.notInclude, !0).not.include(d);
  }, u.deepInclude = function(s, d, m) {
    new a(s, m, u.deepInclude, !0).deep.include(d);
  }, u.notDeepInclude = function(s, d, m) {
    new a(s, m, u.notDeepInclude, !0).not.deep.include(d);
  }, u.nestedInclude = function(s, d, m) {
    new a(s, m, u.nestedInclude, !0).nested.include(d);
  }, u.notNestedInclude = function(s, d, m) {
    new a(s, m, u.notNestedInclude, !0).not.nested.include(d);
  }, u.deepNestedInclude = function(s, d, m) {
    new a(s, m, u.deepNestedInclude, !0).deep.nested.include(d);
  }, u.notDeepNestedInclude = function(s, d, m) {
    new a(s, m, u.notDeepNestedInclude, !0).not.deep.nested.include(d);
  }, u.ownInclude = function(s, d, m) {
    new a(s, m, u.ownInclude, !0).own.include(d);
  }, u.notOwnInclude = function(s, d, m) {
    new a(s, m, u.notOwnInclude, !0).not.own.include(d);
  }, u.deepOwnInclude = function(s, d, m) {
    new a(s, m, u.deepOwnInclude, !0).deep.own.include(d);
  }, u.notDeepOwnInclude = function(s, d, m) {
    new a(s, m, u.notDeepOwnInclude, !0).not.deep.own.include(d);
  }, u.match = function(s, d, m) {
    new a(s, m, u.match, !0).to.match(d);
  }, u.notMatch = function(s, d, m) {
    new a(s, m, u.notMatch, !0).to.not.match(d);
  }, u.property = function(s, d, m) {
    new a(s, m, u.property, !0).to.have.property(d);
  }, u.notProperty = function(s, d, m) {
    new a(s, m, u.notProperty, !0).to.not.have.property(d);
  }, u.propertyVal = function(s, d, m, y) {
    new a(s, y, u.propertyVal, !0).to.have.property(d, m);
  }, u.notPropertyVal = function(s, d, m, y) {
    new a(s, y, u.notPropertyVal, !0).to.not.have.property(d, m);
  }, u.deepPropertyVal = function(s, d, m, y) {
    new a(s, y, u.deepPropertyVal, !0).to.have.deep.property(d, m);
  }, u.notDeepPropertyVal = function(s, d, m, y) {
    new a(s, y, u.notDeepPropertyVal, !0).to.not.have.deep.property(d, m);
  }, u.ownProperty = function(s, d, m) {
    new a(s, m, u.ownProperty, !0).to.have.own.property(d);
  }, u.notOwnProperty = function(s, d, m) {
    new a(s, m, u.notOwnProperty, !0).to.not.have.own.property(d);
  }, u.ownPropertyVal = function(s, d, m, y) {
    new a(s, y, u.ownPropertyVal, !0).to.have.own.property(d, m);
  }, u.notOwnPropertyVal = function(s, d, m, y) {
    new a(s, y, u.notOwnPropertyVal, !0).to.not.have.own.property(d, m);
  }, u.deepOwnPropertyVal = function(s, d, m, y) {
    new a(s, y, u.deepOwnPropertyVal, !0).to.have.deep.own.property(d, m);
  }, u.notDeepOwnPropertyVal = function(s, d, m, y) {
    new a(s, y, u.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(d, m);
  }, u.nestedProperty = function(s, d, m) {
    new a(s, m, u.nestedProperty, !0).to.have.nested.property(d);
  }, u.notNestedProperty = function(s, d, m) {
    new a(s, m, u.notNestedProperty, !0).to.not.have.nested.property(d);
  }, u.nestedPropertyVal = function(s, d, m, y) {
    new a(s, y, u.nestedPropertyVal, !0).to.have.nested.property(d, m);
  }, u.notNestedPropertyVal = function(s, d, m, y) {
    new a(s, y, u.notNestedPropertyVal, !0).to.not.have.nested.property(d, m);
  }, u.deepNestedPropertyVal = function(s, d, m, y) {
    new a(s, y, u.deepNestedPropertyVal, !0).to.have.deep.nested.property(d, m);
  }, u.notDeepNestedPropertyVal = function(s, d, m, y) {
    new a(s, y, u.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(d, m);
  }, u.lengthOf = function(s, d, m) {
    new a(s, m, u.lengthOf, !0).to.have.lengthOf(d);
  }, u.hasAnyKeys = function(s, d, m) {
    new a(s, m, u.hasAnyKeys, !0).to.have.any.keys(d);
  }, u.hasAllKeys = function(s, d, m) {
    new a(s, m, u.hasAllKeys, !0).to.have.all.keys(d);
  }, u.containsAllKeys = function(s, d, m) {
    new a(s, m, u.containsAllKeys, !0).to.contain.all.keys(d);
  }, u.doesNotHaveAnyKeys = function(s, d, m) {
    new a(s, m, u.doesNotHaveAnyKeys, !0).to.not.have.any.keys(d);
  }, u.doesNotHaveAllKeys = function(s, d, m) {
    new a(s, m, u.doesNotHaveAllKeys, !0).to.not.have.all.keys(d);
  }, u.hasAnyDeepKeys = function(s, d, m) {
    new a(s, m, u.hasAnyDeepKeys, !0).to.have.any.deep.keys(d);
  }, u.hasAllDeepKeys = function(s, d, m) {
    new a(s, m, u.hasAllDeepKeys, !0).to.have.all.deep.keys(d);
  }, u.containsAllDeepKeys = function(s, d, m) {
    new a(s, m, u.containsAllDeepKeys, !0).to.contain.all.deep.keys(d);
  }, u.doesNotHaveAnyDeepKeys = function(s, d, m) {
    new a(s, m, u.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(d);
  }, u.doesNotHaveAllDeepKeys = function(s, d, m) {
    new a(s, m, u.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(d);
  }, u.throws = function(s, d, m, y) {
    (typeof d == "string" || d instanceof RegExp) && (m = d, d = null);
    var E = new a(s, y, u.throws, !0).to.throw(d, m);
    return c(E, "object");
  }, u.doesNotThrow = function(s, d, m, y) {
    (typeof d == "string" || d instanceof RegExp) && (m = d, d = null), new a(s, y, u.doesNotThrow, !0).to.not.throw(d, m);
  }, u.operator = function(s, d, m, y) {
    var E;
    switch (d) {
      case "==":
        E = s == m;
        break;
      case "===":
        E = s === m;
        break;
      case ">":
        E = s > m;
        break;
      case ">=":
        E = s >= m;
        break;
      case "<":
        E = s < m;
        break;
      case "<=":
        E = s <= m;
        break;
      case "!=":
        E = s != m;
        break;
      case "!==":
        E = s !== m;
        break;
      default:
        throw y = y && y + ": ", new t.AssertionError(
          y + 'Invalid operator "' + d + '"',
          void 0,
          u.operator
        );
    }
    var b = new a(E, y, u.operator, !0);
    b.assert(
      c(b, "object") === !0,
      "expected " + r.inspect(s) + " to be " + d + " " + r.inspect(m),
      "expected " + r.inspect(s) + " to not be " + d + " " + r.inspect(m)
    );
  }, u.closeTo = function(s, d, m, y) {
    new a(s, y, u.closeTo, !0).to.be.closeTo(d, m);
  }, u.approximately = function(s, d, m, y) {
    new a(s, y, u.approximately, !0).to.be.approximately(d, m);
  }, u.sameMembers = function(s, d, m) {
    new a(s, m, u.sameMembers, !0).to.have.same.members(d);
  }, u.notSameMembers = function(s, d, m) {
    new a(s, m, u.notSameMembers, !0).to.not.have.same.members(d);
  }, u.sameDeepMembers = function(s, d, m) {
    new a(s, m, u.sameDeepMembers, !0).to.have.same.deep.members(d);
  }, u.notSameDeepMembers = function(s, d, m) {
    new a(s, m, u.notSameDeepMembers, !0).to.not.have.same.deep.members(d);
  }, u.sameOrderedMembers = function(s, d, m) {
    new a(s, m, u.sameOrderedMembers, !0).to.have.same.ordered.members(d);
  }, u.notSameOrderedMembers = function(s, d, m) {
    new a(s, m, u.notSameOrderedMembers, !0).to.not.have.same.ordered.members(d);
  }, u.sameDeepOrderedMembers = function(s, d, m) {
    new a(s, m, u.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(d);
  }, u.notSameDeepOrderedMembers = function(s, d, m) {
    new a(s, m, u.notSameDeepOrderedMembers, !0).to.not.have.same.deep.ordered.members(d);
  }, u.includeMembers = function(s, d, m) {
    new a(s, m, u.includeMembers, !0).to.include.members(d);
  }, u.notIncludeMembers = function(s, d, m) {
    new a(s, m, u.notIncludeMembers, !0).to.not.include.members(d);
  }, u.includeDeepMembers = function(s, d, m) {
    new a(s, m, u.includeDeepMembers, !0).to.include.deep.members(d);
  }, u.notIncludeDeepMembers = function(s, d, m) {
    new a(s, m, u.notIncludeDeepMembers, !0).to.not.include.deep.members(d);
  }, u.includeOrderedMembers = function(s, d, m) {
    new a(s, m, u.includeOrderedMembers, !0).to.include.ordered.members(d);
  }, u.notIncludeOrderedMembers = function(s, d, m) {
    new a(s, m, u.notIncludeOrderedMembers, !0).to.not.include.ordered.members(d);
  }, u.includeDeepOrderedMembers = function(s, d, m) {
    new a(s, m, u.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(d);
  }, u.notIncludeDeepOrderedMembers = function(s, d, m) {
    new a(s, m, u.notIncludeDeepOrderedMembers, !0).to.not.include.deep.ordered.members(d);
  }, u.oneOf = function(s, d, m) {
    new a(s, m, u.oneOf, !0).to.be.oneOf(d);
  }, u.changes = function(s, d, m, y) {
    arguments.length === 3 && typeof d == "function" && (y = m, m = null), new a(s, y, u.changes, !0).to.change(d, m);
  }, u.changesBy = function(s, d, m, y, E) {
    if (arguments.length === 4 && typeof d == "function") {
      var b = y;
      y = m, E = b;
    } else
      arguments.length === 3 && (y = m, m = null);
    new a(s, E, u.changesBy, !0).to.change(d, m).by(y);
  }, u.doesNotChange = function(s, d, m, y) {
    return arguments.length === 3 && typeof d == "function" && (y = m, m = null), new a(s, y, u.doesNotChange, !0).to.not.change(d, m);
  }, u.changesButNotBy = function(s, d, m, y, E) {
    if (arguments.length === 4 && typeof d == "function") {
      var b = y;
      y = m, E = b;
    } else
      arguments.length === 3 && (y = m, m = null);
    new a(s, E, u.changesButNotBy, !0).to.change(d, m).but.not.by(y);
  }, u.increases = function(s, d, m, y) {
    return arguments.length === 3 && typeof d == "function" && (y = m, m = null), new a(s, y, u.increases, !0).to.increase(d, m);
  }, u.increasesBy = function(s, d, m, y, E) {
    if (arguments.length === 4 && typeof d == "function") {
      var b = y;
      y = m, E = b;
    } else
      arguments.length === 3 && (y = m, m = null);
    new a(s, E, u.increasesBy, !0).to.increase(d, m).by(y);
  }, u.doesNotIncrease = function(s, d, m, y) {
    return arguments.length === 3 && typeof d == "function" && (y = m, m = null), new a(s, y, u.doesNotIncrease, !0).to.not.increase(d, m);
  }, u.increasesButNotBy = function(s, d, m, y, E) {
    if (arguments.length === 4 && typeof d == "function") {
      var b = y;
      y = m, E = b;
    } else
      arguments.length === 3 && (y = m, m = null);
    new a(s, E, u.increasesButNotBy, !0).to.increase(d, m).but.not.by(y);
  }, u.decreases = function(s, d, m, y) {
    return arguments.length === 3 && typeof d == "function" && (y = m, m = null), new a(s, y, u.decreases, !0).to.decrease(d, m);
  }, u.decreasesBy = function(s, d, m, y, E) {
    if (arguments.length === 4 && typeof d == "function") {
      var b = y;
      y = m, E = b;
    } else
      arguments.length === 3 && (y = m, m = null);
    new a(s, E, u.decreasesBy, !0).to.decrease(d, m).by(y);
  }, u.doesNotDecrease = function(s, d, m, y) {
    return arguments.length === 3 && typeof d == "function" && (y = m, m = null), new a(s, y, u.doesNotDecrease, !0).to.not.decrease(d, m);
  }, u.doesNotDecreaseBy = function(s, d, m, y, E) {
    if (arguments.length === 4 && typeof d == "function") {
      var b = y;
      y = m, E = b;
    } else
      arguments.length === 3 && (y = m, m = null);
    return new a(s, E, u.doesNotDecreaseBy, !0).to.not.decrease(d, m).by(y);
  }, u.decreasesButNotBy = function(s, d, m, y, E) {
    if (arguments.length === 4 && typeof d == "function") {
      var b = y;
      y = m, E = b;
    } else
      arguments.length === 3 && (y = m, m = null);
    new a(s, E, u.decreasesButNotBy, !0).to.decrease(d, m).but.not.by(y);
  };
  /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */
  u.ifError = function(s) {
    if (s)
      throw s;
  }, u.isExtensible = function(s, d) {
    new a(s, d, u.isExtensible, !0).to.be.extensible;
  }, u.isNotExtensible = function(s, d) {
    new a(s, d, u.isNotExtensible, !0).to.not.be.extensible;
  }, u.isSealed = function(s, d) {
    new a(s, d, u.isSealed, !0).to.be.sealed;
  }, u.isNotSealed = function(s, d) {
    new a(s, d, u.isNotSealed, !0).to.not.be.sealed;
  }, u.isFrozen = function(s, d) {
    new a(s, d, u.isFrozen, !0).to.be.frozen;
  }, u.isNotFrozen = function(s, d) {
    new a(s, d, u.isNotFrozen, !0).to.not.be.frozen;
  }, u.isEmpty = function(s, d) {
    new a(s, d, u.isEmpty, !0).to.be.empty;
  }, u.isNotEmpty = function(s, d) {
    new a(s, d, u.isNotEmpty, !0).to.not.be.empty;
  };
  /*!
   * Aliases.
   */
  (function s(d, m) {
    return u[m] = u[d], s;
  })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
};
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var _b;
function Zo() {
  return _b || (_b = 1, function(t) {
    var r = [];
    /*!
     * Chai version
     */
    t.version = "4.3.8";
    /*!
     * Assertion Error
     */
    t.AssertionError = xE;
    /*!
     * Utils for plugins (not exported)
     */
    var a = ZR();
    t.use = function(E) {
      return ~r.indexOf(E) || (E(t, a), r.push(E)), t;
    };
    /*!
     * Utility Functions
     */
    t.util = a;
    /*!
     * Configuration
     */
    var c = Ol;
    t.config = c;
    /*!
     * Primary `Assertion` prototype
     */
    var u = eO;
    t.use(u);
    /*!
     * Core Assertions
     */
    var s = tO;
    t.use(s);
    /*!
     * Expect interface
     */
    var d = nO;
    t.use(d);
    /*!
     * Should interface
     */
    var m = rO;
    t.use(m);
    /*!
     * Assert interface
     */
    var y = iO;
    t.use(y);
  }(Lh)), Lh;
}
var aO = Zo();
const Fi = /* @__PURE__ */ bS(aO), Gh = Fi.expect;
Fi.version;
Fi.Assertion;
Fi.AssertionError;
const Gf = Fi.util;
Fi.config;
const ic = Fi.use;
Fi.should;
const oO = Fi.assert;
Fi.core;
var ec = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uO(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Vf(t, r) {
  if (!t)
    throw new Error(r);
}
function bl(t, r) {
  return typeof r === t;
}
function lO(t) {
  return t instanceof Promise;
}
function hm(t, r, a) {
  Object.defineProperty(t, r, a);
}
function Sl(t, r, a) {
  Object.defineProperty(t, r, { value: a });
}
var Ks = Symbol.for("tinyspy:spy"), sO = /* @__PURE__ */ new Set(), cO = (t) => {
  t.called = !1, t.callCount = 0, t.calls = [], t.results = [], t.next = [];
}, fO = (t) => (hm(t, Ks, { value: { reset: () => cO(t[Ks]) } }), t[Ks]), mm = (t) => t[Ks] || fO(t);
function dO(t) {
  Vf(bl("function", t) || bl("undefined", t), "cannot spy on a non-function value");
  let r = function(...c) {
    let u = mm(r);
    u.called = !0, u.callCount++, u.calls.push(c);
    let s = u.next.shift();
    if (s) {
      u.results.push(s);
      let [E, b] = s;
      if (E === "ok")
        return b;
      throw b;
    }
    let d, m = "ok";
    if (u.impl)
      try {
        new.target ? d = Reflect.construct(u.impl, c, new.target) : d = u.impl.apply(this, c), m = "ok";
      } catch (E) {
        throw d = E, m = "error", u.results.push([m, E]), E;
      }
    let y = [m, d];
    if (lO(d)) {
      let E = d.then((b) => y[1] = b).catch((b) => {
        throw y[0] = "error", y[1] = b, b;
      });
      Object.assign(E, d), d = E;
    }
    return u.results.push(y), d;
  };
  Sl(r, "_isMockFunction", !0), Sl(r, "length", t ? t.length : 0), Sl(r, "name", t && t.name || "spy");
  let a = mm(r);
  return a.reset(), a.impl = t, r;
}
var Cb = (t, r) => Object.getOwnPropertyDescriptor(t, r);
function kE(t, r, a) {
  Vf(!bl("undefined", t), "spyOn could not find an object to spy upon"), Vf(bl("object", t) || bl("function", t), "cannot spyOn on a primitive value");
  let c = () => {
    if (!bl("object", r))
      return [r, "value"];
    if ("getter" in r && "setter" in r)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in r)
      return [r.getter, "get"];
    if ("setter" in r)
      return [r.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  }, [u, s] = c(), d = Cb(t, u), m = Object.getPrototypeOf(t), y = m && Cb(m, u), E = d || y;
  Vf(E || u in t, `${String(u)} does not exist`);
  let b = !1;
  s === "value" && E && !E.value && E.get && (s = "get", b = !0, a = E.get());
  let x;
  E ? x = E[s] : s !== "value" ? x = () => t[u] : x = t[u], a || (a = x);
  let R = dO(a), j = (A) => {
    let { value: ye, ...ee } = E || {
      configurable: !0,
      writable: !0
    };
    s !== "value" && delete ee.writable, ee[s] = A, hm(t, u, ee);
  }, U = () => E ? hm(t, u, E) : j(x), q = R[Ks];
  return Sl(q, "restore", U), Sl(q, "getOriginal", () => b ? x() : x), Sl(q, "willCall", (A) => (q.impl = A, R)), j(b ? () => R : R), sO.add(R), R;
}
const Hf = /* @__PURE__ */ new Set();
function zE(t) {
  return typeof t == "function" && "_isMockFunction" in t && t._isMockFunction;
}
function pO(t, r, a) {
  const u = a ? { [{
    get: "getter",
    set: "setter"
  }[a]]: r } : r, s = kE(t, u);
  return LE(s);
}
let hO = 0;
function LE(t) {
  const r = t;
  let a, c = [], u = [];
  const s = mm(t), d = {
    get calls() {
      return s.calls;
    },
    get instances() {
      return c;
    },
    get invocationCallOrder() {
      return u;
    },
    get results() {
      return s.results.map(([R, j]) => ({ type: R === "error" ? "throw" : "return", value: j }));
    },
    get lastCall() {
      return s.calls[s.calls.length - 1];
    }
  };
  let m = [], y = !1;
  function E(...R) {
    return c.push(this), u.push(++hO), (y ? a : m.shift() || a || s.getOriginal() || (() => {
    })).apply(this, R);
  }
  let b = r.name;
  r.getMockName = () => b || "vi.fn()", r.mockName = (R) => (b = R, r), r.mockClear = () => (s.reset(), c = [], u = [], r), r.mockReset = () => (r.mockClear(), a = () => {
  }, m = [], r), r.mockRestore = () => (r.mockReset(), s.restore(), a = void 0, r), r.getMockImplementation = () => a, r.mockImplementation = (R) => (a = R, s.willCall(E), r), r.mockImplementationOnce = (R) => (m.push(R), r);
  function x(R, j) {
    const U = a;
    a = R, s.willCall(E), y = !0;
    const q = () => {
      a = U, y = !1;
    }, A = j();
    return A instanceof Promise ? A.then(() => (q(), r)) : (q(), r);
  }
  return r.withImplementation = x, r.mockReturnThis = () => r.mockImplementation(function() {
    return this;
  }), r.mockReturnValue = (R) => r.mockImplementation(() => R), r.mockReturnValueOnce = (R) => r.mockImplementationOnce(() => R), r.mockResolvedValue = (R) => r.mockImplementation(() => Promise.resolve(R)), r.mockResolvedValueOnce = (R) => r.mockImplementationOnce(() => Promise.resolve(R)), r.mockRejectedValue = (R) => r.mockImplementation(() => Promise.reject(R)), r.mockRejectedValueOnce = (R) => r.mockImplementationOnce(() => Promise.reject(R)), Object.defineProperty(r, "mock", {
    get: () => d
  }), s.willCall(E), Hf.add(r), r;
}
function mO(t) {
  const r = LE(kE({ spy: t || (() => {
  }) }, "spy"));
  return t && r.mockImplementation(t), r;
}
const Wf = Symbol.for("matchers-object"), zm = Symbol.for("$$jest-matchers-object"), ac = Symbol.for("expect-global"), Lm = Symbol.for("asymmetric-matchers-object");
if (!Object.prototype.hasOwnProperty.call(globalThis, Wf)) {
  const t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, Wf, {
    get: () => t
  }), Object.defineProperty(globalThis, zm, {
    configurable: !0,
    get: () => ({
      state: t.get(globalThis[ac]),
      matchers: r
    })
  }), Object.defineProperty(globalThis, Lm, {
    get: () => a
  });
}
function El(t) {
  return globalThis[Wf].get(t);
}
function Wh(t, r) {
  const a = globalThis[Wf], c = a.get(r) || {};
  Object.assign(c, t), a.set(r, c);
}
function FE() {
  const t = () => Om(), r = t().green, a = t().red, c = t().inverse, u = t().bold, s = t().dim;
  function d(x, R = "received", j = "expected", U = {}) {
    const {
      comment: q = "",
      isDirectExpectCall: A = !1,
      // seems redundant with received === ''
      isNot: ye = !1,
      promise: ee = "",
      secondArgument: le = "",
      expectedColor: Z = r,
      receivedColor: K = a,
      secondArgumentColor: se = r
    } = U;
    let Te = "", ve = "expect";
    return !A && R !== "" && (Te += s(`${ve}(`) + K(R), ve = ")"), ee !== "" && (Te += s(`${ve}.`) + ee, ve = ""), ye && (Te += `${s(`${ve}.`)}not`, ve = ""), x.includes(".") ? ve += x : (Te += s(`${ve}.`) + x, ve = ""), j === "" ? ve += "()" : (Te += s(`${ve}(`) + Z(j), le && (Te += s(", ") + se(le)), ve = ")"), q !== "" && (ve += ` // ${q}`), ve !== "" && (Te += s(ve)), Te;
  }
  const m = "·", y = (x) => x.replace(/\s+$/gm, (R) => m.repeat(R.length));
  return {
    EXPECTED_COLOR: r,
    RECEIVED_COLOR: a,
    INVERTED_COLOR: c,
    BOLD_WEIGHT: u,
    DIM_COLOR: s,
    matcherHint: d,
    printReceived: (x) => a(y(da(x))),
    printExpected: (x) => r(y(da(x)))
  };
}
function Xt(t, r, a, c) {
  return a = a || [], UE(t, r, [], [], a, c ? BE : yO);
}
function Rb(t) {
  return !!t && typeof t == "object" && "asymmetricMatch" in t && pi("Function", t.asymmetricMatch);
}
function vO(t, r) {
  const a = Rb(t), c = Rb(r);
  if (!(a && c)) {
    if (a)
      return t.asymmetricMatch(r);
    if (c)
      return r.asymmetricMatch(t);
  }
}
function UE(t, r, a, c, u, s) {
  let d = !0;
  const m = vO(t, r);
  if (m !== void 0)
    return m;
  for (let j = 0; j < u.length; j++) {
    const U = u[j](t, r);
    if (U !== void 0)
      return U;
  }
  if (t instanceof Error && r instanceof Error)
    return t.message === r.message;
  if (typeof URL == "function" && t instanceof URL && r instanceof URL)
    return t.href === r.href;
  if (Object.is(t, r))
    return !0;
  if (t === null || r === null)
    return t === r;
  const y = Object.prototype.toString.call(t);
  if (y !== Object.prototype.toString.call(r))
    return !1;
  switch (y) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      return typeof t != typeof r ? !1 : typeof t != "object" && typeof r != "object" ? Object.is(t, r) : Object.is(t.valueOf(), r.valueOf());
    case "[object Date]": {
      const j = +t, U = +r;
      return j === U || Number.isNaN(j) && Number.isNaN(U);
    }
    case "[object RegExp]":
      return t.source === r.source && t.flags === r.flags;
  }
  if (typeof t != "object" || typeof r != "object")
    return !1;
  if (Nb(t) && Nb(r))
    return t.isEqualNode(r);
  let E = a.length;
  for (; E--; ) {
    if (a[E] === t)
      return c[E] === r;
    if (c[E] === r)
      return !1;
  }
  if (a.push(t), c.push(r), y === "[object Array]" && t.length !== r.length)
    return !1;
  const b = Ob(t, s);
  let x, R = b.length;
  if (Ob(r, s).length !== R)
    return !1;
  for (; R--; )
    if (x = b[R], d = s(r, x) && UE(t[x], r[x], a, c, u, s), !d)
      return !1;
  return a.pop(), c.pop(), d;
}
function Ob(t, r) {
  const a = [];
  for (const c in t)
    r(t, c) && a.push(c);
  return a.concat(
    Object.getOwnPropertySymbols(t).filter(
      (c) => Object.getOwnPropertyDescriptor(t, c).enumerable
    )
  );
}
function yO(t, r) {
  return BE(t, r) && t[r] !== void 0;
}
function BE(t, r) {
  return Object.prototype.hasOwnProperty.call(t, r);
}
function pi(t, r) {
  return Object.prototype.toString.apply(r) === `[object ${t}]`;
}
function Nb(t) {
  return t !== null && typeof t == "object" && "nodeType" in t && typeof t.nodeType == "number" && "nodeName" in t && typeof t.nodeName == "string" && "isEqualNode" in t && typeof t.isEqualNode == "function";
}
const gO = "@@__IMMUTABLE_KEYED__@@", bO = "@@__IMMUTABLE_SET__@@", IE = "@@__IMMUTABLE_ORDERED__@@";
function SO(t) {
  return !!(t && t[gO] && !t[IE]);
}
function EO(t) {
  return !!(t && t[bO] && !t[IE]);
}
const qE = Symbol.iterator;
function Mb(t) {
  return !!(t != null && t[qE]);
}
function mr(t, r, a = [], c = []) {
  if (typeof t != "object" || typeof r != "object" || Array.isArray(t) || Array.isArray(r) || !Mb(t) || !Mb(r))
    return;
  if (t.constructor !== r.constructor)
    return !1;
  let u = a.length;
  for (; u--; )
    if (a[u] === t)
      return c[u] === r;
  a.push(t), c.push(r);
  const s = (m, y) => mr(m, y, [...a], [...c]);
  if (t.size !== void 0) {
    if (t.size !== r.size)
      return !1;
    if (pi("Set", t) || EO(t)) {
      let m = !0;
      for (const y of t)
        if (!r.has(y)) {
          let E = !1;
          for (const b of r)
            Xt(y, b, [s]) === !0 && (E = !0);
          if (E === !1) {
            m = !1;
            break;
          }
        }
      return a.pop(), c.pop(), m;
    } else if (pi("Map", t) || SO(t)) {
      let m = !0;
      for (const y of t)
        if (!r.has(y[0]) || !Xt(y[1], r.get(y[0]), [s])) {
          let E = !1;
          for (const b of r) {
            const x = Xt(y[0], b[0], [
              s
            ]);
            let R = !1;
            x === !0 && (R = Xt(y[1], b[1], [
              s
            ])), R === !0 && (E = !0);
          }
          if (E === !1) {
            m = !1;
            break;
          }
        }
      return a.pop(), c.pop(), m;
    }
  }
  const d = r[qE]();
  for (const m of t) {
    const y = d.next();
    if (y.done || !Xt(m, y.value, [s]))
      return !1;
  }
  return d.next().done ? (a.pop(), c.pop(), !0) : !1;
}
function VE(t, r) {
  return !t || typeof t != "object" || t === Object.prototype ? !1 : Object.prototype.hasOwnProperty.call(t, r) || VE(Object.getPrototypeOf(t), r);
}
function $b(t) {
  return wS(t) && !(t instanceof Error) && !Array.isArray(t) && !(t instanceof Date);
}
function od(t, r) {
  const a = (c = /* @__PURE__ */ new WeakMap()) => (u, s) => {
    if ($b(s))
      return Object.keys(s).every((d) => {
        if ($b(s[d])) {
          if (c.has(s[d]))
            return Xt(u[d], s[d], [mr]);
          c.set(s[d], !0);
        }
        const m = u != null && VE(u, d) && Xt(u[d], s[d], [
          mr,
          a(c)
        ]);
        return c.delete(s[d]), m;
      });
  };
  return a()(t, r);
}
function vm(t, r) {
  if (!(t == null || r == null || t.constructor === r.constructor))
    return !1;
}
function Ab(t, r) {
  let a = t, c = r;
  if (!(t instanceof DataView && r instanceof DataView)) {
    if (!(t instanceof ArrayBuffer) || !(r instanceof ArrayBuffer))
      return;
    try {
      a = new DataView(t), c = new DataView(r);
    } catch {
      return;
    }
  }
  if (a.byteLength !== c.byteLength)
    return !1;
  for (let u = 0; u < a.byteLength; u++)
    if (a.getUint8(u) !== c.getUint8(u))
      return !1;
  return !0;
}
function Db(t, r) {
  if (!Array.isArray(t) || !Array.isArray(r))
    return;
  const a = Object.keys(t), c = Object.keys(r);
  return Xt(t, r, [mr, vm], !0) && Xt(a, c);
}
function TO(t, r = "#{this}", a = "#{exp}") {
  const c = `expected ${r} to be ${a} // Object.is equality`;
  return ["toStrictEqual", "toEqual"].includes(t) ? `${c}

If it should pass with deep equality, replace "toBe" with "${t}"

Expected: ${r}
Received: serializes to the same string
` : c;
}
function wO(t, r) {
  return `${r} ${t}${r === 1 ? "" : "s"}`;
}
let so = class {
  constructor(r, a = !1) {
    // should have "jest" to be compatible with its ecosystem
    Pt(this, "$$typeof", Symbol.for("jest.asymmetricMatcher"));
    this.sample = r, this.inverse = a;
  }
  getMatcherContext(r) {
    return {
      ...El(r || globalThis[ac]),
      equals: Xt,
      isNot: this.inverse,
      customTesters: [],
      utils: {
        ...FE(),
        diff: Zs,
        stringify: da,
        iterableEquality: mr,
        subsetEquality: od
      }
    };
  }
};
class Pb extends so {
  constructor(r, a = !1) {
    if (!pi("String", r))
      throw new Error("Expected is not a string");
    super(r, a);
  }
  asymmetricMatch(r) {
    const a = pi("String", r) && r.includes(this.sample);
    return this.inverse ? !a : a;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
}
class xO extends so {
  asymmetricMatch(r) {
    return r != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
}
class jb extends so {
  constructor(r, a = !1) {
    super(r, a);
  }
  getPrototype(r) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(r) : r.constructor.prototype === r ? null : r.constructor.prototype;
  }
  hasProperty(r, a) {
    return r ? Object.prototype.hasOwnProperty.call(r, a) ? !0 : this.hasProperty(this.getPrototype(r), a) : !1;
  }
  asymmetricMatch(r) {
    if (typeof this.sample != "object")
      throw new TypeError(
        `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
      );
    let a = !0;
    for (const c in this.sample)
      if (!this.hasProperty(r, c) || !Xt(this.sample[c], r[c])) {
        a = !1;
        break;
      }
    return this.inverse ? !a : a;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
}
class kb extends so {
  constructor(r, a = !1) {
    super(r, a);
  }
  asymmetricMatch(r) {
    if (!Array.isArray(this.sample))
      throw new TypeError(
        `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
      );
    const a = this.sample.length === 0 || Array.isArray(r) && this.sample.every(
      (c) => r.some((u) => Xt(c, u))
    );
    return this.inverse ? !a : a;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
}
class _O extends so {
  constructor(r) {
    if (typeof r > "u")
      throw new TypeError(
        "any() expects to be passed a constructor function. Please pass one or use anything() to match any object."
      );
    super(r);
  }
  fnNameFor(r) {
    if (r.name)
      return r.name;
    const c = Function.prototype.toString.call(r).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
    return c ? c[1] : "<anonymous>";
  }
  asymmetricMatch(r) {
    return this.sample === String ? typeof r == "string" || r instanceof String : this.sample === Number ? typeof r == "number" || r instanceof Number : this.sample === Function ? typeof r == "function" || r instanceof Function : this.sample === Boolean ? typeof r == "boolean" || r instanceof Boolean : this.sample === BigInt ? typeof r == "bigint" || r instanceof BigInt : this.sample === Symbol ? typeof r == "symbol" || r instanceof Symbol : this.sample === Object ? typeof r == "object" : r instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    return this.sample === String ? "string" : this.sample === Number ? "number" : this.sample === Function ? "function" : this.sample === Object ? "object" : this.sample === Boolean ? "boolean" : this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
}
class zb extends so {
  constructor(r, a = !1) {
    if (!pi("String", r) && !pi("RegExp", r))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(r), a);
  }
  asymmetricMatch(r) {
    const a = pi("String", r) && this.sample.test(r);
    return this.inverse ? !a : a;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
}
class Lb extends so {
  constructor(a, c = 2, u = !1) {
    if (!pi("Number", a))
      throw new Error("Expected is not a Number");
    if (!pi("Number", c))
      throw new Error("Precision is not a Number");
    super(a);
    Pt(this, "precision");
    this.inverse = u, this.precision = c;
  }
  asymmetricMatch(a) {
    if (!pi("Number", a))
      return !1;
    let c = !1;
    return a === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY ? c = !0 : c = Math.abs(this.sample - a) < 10 ** -this.precision / 2, this.inverse ? !c : c;
  }
  toString() {
    return `Number${this.inverse ? "Not" : ""}CloseTo`;
  }
  getExpectedType() {
    return "number";
  }
  toAsymmetricMatcher() {
    return [
      this.toString(),
      this.sample,
      `(${wO("digit", this.precision)})`
    ].join(" ");
  }
}
const CO = (t, r) => {
  r.addMethod(
    t.expect,
    "anything",
    () => new xO()
  ), r.addMethod(
    t.expect,
    "any",
    (a) => new _O(a)
  ), r.addMethod(
    t.expect,
    "stringContaining",
    (a) => new Pb(a)
  ), r.addMethod(
    t.expect,
    "objectContaining",
    (a) => new jb(a)
  ), r.addMethod(
    t.expect,
    "arrayContaining",
    (a) => new kb(a)
  ), r.addMethod(
    t.expect,
    "stringMatching",
    (a) => new zb(a)
  ), r.addMethod(
    t.expect,
    "closeTo",
    (a, c) => new Lb(a, c)
  ), t.expect.not = {
    stringContaining: (a) => new Pb(a, !0),
    objectContaining: (a) => new jb(a, !0),
    arrayContaining: (a) => new kb(a, !0),
    stringMatching: (a) => new zb(a, !0),
    closeTo: (a, c) => new Lb(a, c, !0)
  };
};
function Fb(t, r) {
  return t && r instanceof Promise && (r = r.finally(() => {
    const a = t.promises.indexOf(r);
    a !== -1 && t.promises.splice(a, 1);
  }), t.promises || (t.promises = []), t.promises.push(r)), r;
}
function HE(t, r) {
  return function(...a) {
    var c;
    const u = t.flag(this, "vitest-test");
    if (!(u != null && u.context._local ? u.context.expect.getState() : El(globalThis[ac])).soft)
      return r.apply(this, a);
    if (!u)
      throw new Error("expect.soft() can only be used inside a test");
    try {
      return r.apply(this, a);
    } catch (d) {
      u.result || (u.result = { state: "fail" }), u.result.state = "fail", (c = u.result).errors || (c.errors = []), u.result.errors.push(_C(d));
    }
  };
}
const RO = (t, r) => {
  const { AssertionError: a } = t, c = () => Om();
  function u(b, x) {
    const R = (j) => {
      const U = HE(r, x);
      r.addMethod(t.Assertion.prototype, j, U), r.addMethod(globalThis[zm].matchers, j, U);
    };
    Array.isArray(b) ? b.forEach((j) => R(j)) : R(b);
  }
  ["throw", "throws", "Throw"].forEach((b) => {
    r.overwriteMethod(t.Assertion.prototype, b, (x) => function(...R) {
      const j = r.flag(this, "promise"), U = r.flag(this, "object"), q = r.flag(this, "negate");
      if (j === "rejects")
        r.flag(this, "object", () => {
          throw U;
        });
      else if (j === "resolves" && typeof U != "function") {
        if (q)
          return;
        {
          const A = r.flag(this, "message") || "expected promise to throw an error, but it didn't", ye = {
            showDiff: !1
          };
          throw new a(A, ye, r.flag(this, "ssfi"));
        }
      }
      x.apply(this, R);
    });
  }), u("withTest", function(b) {
    return r.flag(this, "vitest-test", b), this;
  }), u("toEqual", function(b) {
    const x = r.flag(this, "object"), R = Xt(
      x,
      b,
      [mr]
    );
    return this.assert(
      R,
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      b,
      x
    );
  }), u("toStrictEqual", function(b) {
    const x = r.flag(this, "object"), R = Xt(
      x,
      b,
      [
        mr,
        vm,
        Db,
        Ab
      ],
      !0
    );
    return this.assert(
      R,
      "expected #{this} to strictly equal #{exp}",
      "expected #{this} to not strictly equal #{exp}",
      b,
      x
    );
  }), u("toBe", function(b) {
    const x = this._obj, R = Object.is(x, b);
    let j = "";
    return R || (Xt(
      x,
      b,
      [
        mr,
        vm,
        Db,
        Ab
      ],
      !0
    ) ? j = "toStrictEqual" : Xt(
      x,
      b,
      [mr]
    ) && (j = "toEqual")), this.assert(
      R,
      TO(j),
      "expected #{this} not to be #{exp} // Object.is equality",
      b,
      x
    );
  }), u("toMatchObject", function(b) {
    const x = this._obj;
    return this.assert(
      Xt(x, b, [mr, od]),
      "expected #{this} to match object #{exp}",
      "expected #{this} to not match object #{exp}",
      b,
      x
    );
  }), u("toMatch", function(b) {
    return typeof b == "string" ? this.include(b) : this.match(b);
  }), u("toContain", function(b) {
    const x = this._obj;
    if (typeof Node < "u" && x instanceof Node) {
      if (!(b instanceof Node))
        throw new TypeError(`toContain() expected a DOM node as the argument, but got ${typeof b}`);
      return this.assert(
        x.contains(b),
        "expected #{this} to contain element #{exp}",
        "expected #{this} not to contain element #{exp}",
        b,
        x
      );
    }
    if (typeof DOMTokenList < "u" && x instanceof DOMTokenList) {
      zi(b, "class name", ["string"]);
      const j = r.flag(this, "negate") ? x.value.replace(b, "").trim() : `${x.value} ${b}`;
      return this.assert(
        x.contains(b),
        `expected "${x.value}" to contain "${b}"`,
        `expected "${x.value}" not to contain "${b}"`,
        j,
        x.value
      );
    }
    return x != null && typeof x != "string" && r.flag(this, "object", Array.from(x)), this.contain(b);
  }), u("toContainEqual", function(b) {
    const x = r.flag(this, "object"), R = Array.from(x).findIndex((j) => Xt(j, b));
    this.assert(
      R !== -1,
      "expected #{this} to deep equally contain #{exp}",
      "expected #{this} to not deep equally contain #{exp}",
      b
    );
  }), u("toBeTruthy", function() {
    const b = r.flag(this, "object");
    this.assert(
      !!b,
      "expected #{this} to be truthy",
      "expected #{this} to not be truthy",
      b,
      !1
    );
  }), u("toBeFalsy", function() {
    const b = r.flag(this, "object");
    this.assert(
      !b,
      "expected #{this} to be falsy",
      "expected #{this} to not be falsy",
      b,
      !1
    );
  }), u("toBeGreaterThan", function(b) {
    const x = this._obj;
    return zi(x, "actual", ["number", "bigint"]), zi(b, "expected", ["number", "bigint"]), this.assert(
      x > b,
      `expected ${x} to be greater than ${b}`,
      `expected ${x} to be not greater than ${b}`,
      x,
      b,
      !1
    );
  }), u("toBeGreaterThanOrEqual", function(b) {
    const x = this._obj;
    return zi(x, "actual", ["number", "bigint"]), zi(b, "expected", ["number", "bigint"]), this.assert(
      x >= b,
      `expected ${x} to be greater than or equal to ${b}`,
      `expected ${x} to be not greater than or equal to ${b}`,
      x,
      b,
      !1
    );
  }), u("toBeLessThan", function(b) {
    const x = this._obj;
    return zi(x, "actual", ["number", "bigint"]), zi(b, "expected", ["number", "bigint"]), this.assert(
      x < b,
      `expected ${x} to be less than ${b}`,
      `expected ${x} to be not less than ${b}`,
      x,
      b,
      !1
    );
  }), u("toBeLessThanOrEqual", function(b) {
    const x = this._obj;
    return zi(x, "actual", ["number", "bigint"]), zi(b, "expected", ["number", "bigint"]), this.assert(
      x <= b,
      `expected ${x} to be less than or equal to ${b}`,
      `expected ${x} to be not less than or equal to ${b}`,
      x,
      b,
      !1
    );
  }), u("toBeNaN", function() {
    return this.be.NaN;
  }), u("toBeUndefined", function() {
    return this.be.undefined;
  }), u("toBeNull", function() {
    return this.be.null;
  }), u("toBeDefined", function() {
    const b = r.flag(this, "negate");
    return r.flag(this, "negate", !1), b ? this.be.undefined : this.not.be.undefined;
  }), u("toBeTypeOf", function(b) {
    const x = typeof this._obj, R = b === x;
    return this.assert(
      R,
      "expected #{this} to be type of #{exp}",
      "expected #{this} not to be type of #{exp}",
      b,
      x
    );
  }), u("toBeInstanceOf", function(b) {
    return this.instanceOf(b);
  }), u("toHaveLength", function(b) {
    return this.have.length(b);
  }), u("toHaveProperty", function(...b) {
    Array.isArray(b[0]) && (b[0] = b[0].map((le) => String(le).replace(/([.[\]])/g, "\\$1")).join("."));
    const x = this._obj, [R, j] = b, U = () => Object.prototype.hasOwnProperty.call(x, R) ? { value: x[R], exists: !0 } : r.getPathInfo(x, R), { value: q, exists: A } = U(), ye = A && (b.length === 1 || Xt(j, q)), ee = b.length === 1 ? "" : ` with value ${r.objDisplay(j)}`;
    return this.assert(
      ye,
      `expected #{this} to have property "${R}"${ee}`,
      `expected #{this} to not have property "${R}"${ee}`,
      j,
      A ? q : void 0
    );
  }), u("toBeCloseTo", function(b, x = 2) {
    const R = this._obj;
    let j = !1, U = 0, q = 0;
    return b === Number.POSITIVE_INFINITY && R === Number.POSITIVE_INFINITY || b === Number.NEGATIVE_INFINITY && R === Number.NEGATIVE_INFINITY ? j = !0 : (U = 10 ** -x / 2, q = Math.abs(R - b), j = q < U), this.assert(
      j,
      `expected #{this} to be close to #{exp}, received difference is ${q}, but expected ${U}`,
      `expected #{this} to not be close to #{exp}, received difference is ${q}, but expected ${U}`,
      b,
      R,
      !1
    );
  });
  const s = (b) => {
    if (!zE(b._obj))
      throw new TypeError(`${r.inspect(b._obj)} is not a spy or a call to a spy!`);
  }, d = (b) => (s(b), b._obj), m = (b) => {
    const x = b % 10, R = b % 100;
    return x === 1 && R !== 11 ? `${b}st` : x === 2 && R !== 12 ? `${b}nd` : x === 3 && R !== 13 ? `${b}rd` : `${b}th`;
  }, y = (b, x, R) => (b.mock.calls && (x += c().gray(`

Received: 

${b.mock.calls.map((j, U) => {
    let q = c().bold(`  ${m(U + 1)} ${b.getMockName()} call:

`);
    return R ? q += Zs(R, j, { omitAnnotationLines: !0 }) : q += da(j).split(`
`).map((A) => `    ${A}`).join(`
`), q += `
`, q;
  }).join(`
`)}`)), x += c().gray(`

Number of calls: ${c().bold(b.mock.calls.length)}
`), x), E = (b, x, R) => (x += c().gray(`

Received: 

${b.mock.results.map((j, U) => {
    let q = c().bold(`  ${m(U + 1)} ${b.getMockName()} call return:

`);
    return R ? q += Zs(R, j.value, { omitAnnotationLines: !0 }) : q += da(j).split(`
`).map((A) => `    ${A}`).join(`
`), q += `
`, q;
  }).join(`
`)}`), x += c().gray(`

Number of calls: ${c().bold(b.mock.calls.length)}
`), x);
  u(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(b) {
    const x = d(this), R = x.getMockName(), j = x.mock.calls.length;
    return this.assert(
      j === b,
      `expected "${R}" to be called #{exp} times, but got ${j} times`,
      `expected "${R}" to not be called #{exp} times`,
      b,
      j,
      !1
    );
  }), u("toHaveBeenCalledOnce", function() {
    const b = d(this), x = b.getMockName(), R = b.mock.calls.length;
    return this.assert(
      R === 1,
      `expected "${x}" to be called once, but got ${R} times`,
      `expected "${x}" to not be called once`,
      1,
      R,
      !1
    );
  }), u(["toHaveBeenCalled", "toBeCalled"], function() {
    const b = d(this), x = b.getMockName(), R = b.mock.calls.length, j = R > 0, U = r.flag(this, "negate");
    let q = r.getMessage(
      this,
      [
        j,
        `expected "${x}" to be called at least once`,
        `expected "${x}" to not be called at all, but actually been called ${R} times`,
        !0,
        j
      ]
    );
    if (j && U && (q = y(b, q)), j && U || !j && !U)
      throw new a(q);
  }), u(["toHaveBeenCalledWith", "toBeCalledWith"], function(...b) {
    const x = d(this), R = x.getMockName(), j = x.mock.calls.some((A) => Xt(A, b, [mr])), U = r.flag(this, "negate"), q = r.getMessage(
      this,
      [
        j,
        `expected "${R}" to be called with arguments: #{exp}`,
        `expected "${R}" to not be called with arguments: #{exp}`,
        b
      ]
    );
    if (j && U || !j && !U)
      throw new a(y(x, q, b));
  }), u(["toHaveBeenNthCalledWith", "nthCalledWith"], function(b, ...x) {
    const R = d(this), j = R.getMockName(), U = R.mock.calls[b - 1];
    this.assert(
      Xt(U, x, [mr]),
      `expected ${m(b)} "${j}" call to have been called with #{exp}`,
      `expected ${m(b)} "${j}" call to not have been called with #{exp}`,
      x,
      U
    );
  }), u(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...b) {
    const x = d(this), R = x.getMockName(), j = x.mock.calls[x.mock.calls.length - 1];
    this.assert(
      Xt(j, b, [mr]),
      `expected last "${R}" call to have been called with #{exp}`,
      `expected last "${R}" call to not have been called with #{exp}`,
      b,
      j
    );
  }), u(["toThrow", "toThrowError"], function(b) {
    if (typeof b == "string" || typeof b > "u" || b instanceof RegExp)
      return this.throws(b);
    const x = this._obj, R = r.flag(this, "promise"), j = r.flag(this, "negate");
    let U = null;
    if (R === "rejects")
      U = x;
    else if (R === "resolves" && typeof x != "function") {
      if (j)
        return;
      {
        const q = r.flag(this, "message") || "expected promise to throw an error, but it didn't", A = {
          showDiff: !1
        };
        throw new a(q, A, r.flag(this, "ssfi"));
      }
    } else {
      let q = !1;
      try {
        x();
      } catch (A) {
        q = !0, U = A;
      }
      if (!q && !j) {
        const A = r.flag(this, "message") || "expected function to throw an error, but it didn't", ye = {
          showDiff: !1
        };
        throw new a(A, ye, r.flag(this, "ssfi"));
      }
    }
    if (typeof b == "function") {
      const q = b.name || b.prototype.constructor.name;
      return this.assert(
        U && U instanceof b,
        `expected error to be instance of ${q}`,
        `expected error not to be instance of ${q}`,
        b,
        U,
        !1
      );
    }
    if (b instanceof Error)
      return this.assert(
        U && b.message === U.message,
        `expected error to have message: ${b.message}`,
        `expected error not to have message: ${b.message}`,
        b.message,
        U && U.message
      );
    if (typeof b == "object" && "asymmetricMatch" in b && typeof b.asymmetricMatch == "function") {
      const q = b;
      return this.assert(
        U && q.asymmetricMatch(U),
        "expected error to match asymmetric matcher",
        "expected error not to match asymmetric matcher",
        q.toString(),
        U,
        !1
      );
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof b}"`);
  }), u(["toHaveReturned", "toReturn"], function() {
    const b = d(this), x = b.getMockName(), R = b.mock.calls.length > 0 && b.mock.results.some(({ type: j }) => j !== "throw");
    this.assert(
      R,
      `expected "${x}" to be successfully called at least once`,
      `expected "${x}" to not be successfully called`,
      R,
      !R,
      !1
    );
  }), u(["toHaveReturnedTimes", "toReturnTimes"], function(b) {
    const x = d(this), R = x.getMockName(), j = x.mock.results.reduce((U, { type: q }) => q === "throw" ? U : ++U, 0);
    this.assert(
      j === b,
      `expected "${R}" to be successfully called ${b} times`,
      `expected "${R}" to not be successfully called ${b} times`,
      `expected number of returns: ${b}`,
      `received number of returns: ${j}`,
      !1
    );
  }), u(["toHaveReturnedWith", "toReturnWith"], function(b) {
    const x = d(this), R = x.getMockName(), j = x.mock.results.some(({ type: A, value: ye }) => A === "return" && Xt(b, ye)), U = r.flag(this, "negate"), q = r.getMessage(
      this,
      [
        j,
        `expected "${R}" to return with: #{exp} at least once`,
        `expected "${R}" to not return with: #{exp}`,
        b
      ]
    );
    if (j && U || !j && !U)
      throw new a(E(x, q, b));
  }), u(["toHaveLastReturnedWith", "lastReturnedWith"], function(b) {
    const x = d(this), R = x.getMockName(), { value: j } = x.mock.results[x.mock.results.length - 1], U = Xt(j, b);
    this.assert(
      U,
      `expected last "${R}" call to return #{exp}`,
      `expected last "${R}" call to not return #{exp}`,
      b,
      j
    );
  }), u(["toHaveNthReturnedWith", "nthReturnedWith"], function(b, x) {
    const R = d(this), j = R.getMockName(), U = r.flag(this, "negate"), { type: q, value: A } = R.mock.results[b - 1], ye = `${m(b)} call`;
    !U && q === "throw" && t.assert.fail(`expected ${ye} to return #{exp}, but instead it threw an error`);
    const ee = Xt(A, x);
    this.assert(
      ee,
      `expected ${ye} "${j}" call to return #{exp}`,
      `expected ${ye} "${j}" call to not return #{exp}`,
      x,
      A
    );
  }), u("toSatisfy", function(b, x) {
    return this.be.satisfy(b, x);
  }), r.addProperty(t.Assertion.prototype, "resolves", function() {
    const x = new Error("resolves");
    r.flag(this, "promise", "resolves"), r.flag(this, "error", x);
    const R = r.flag(this, "vitest-test"), j = r.flag(this, "object");
    if (typeof (j == null ? void 0 : j.then) != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof j}'.`);
    const U = new Proxy(this, {
      get: (q, A, ye) => {
        const ee = Reflect.get(q, A, ye);
        return typeof ee != "function" ? ee instanceof t.Assertion ? U : ee : async (...le) => {
          const Z = j.then(
            (K) => (r.flag(this, "object", K), ee.call(this, ...le)),
            (K) => {
              const se = new a(
                `promise rejected "${r.inspect(K)}" instead of resolving`,
                { showDiff: !1 }
              );
              throw se.cause = K, se.stack = x.stack.replace(x.message, se.message), se;
            }
          );
          return Fb(R, Z);
        };
      }
    });
    return U;
  }), r.addProperty(t.Assertion.prototype, "rejects", function() {
    const x = new Error("rejects");
    r.flag(this, "promise", "rejects"), r.flag(this, "error", x);
    const R = r.flag(this, "vitest-test"), j = r.flag(this, "object"), U = typeof j == "function" ? j() : j;
    if (typeof (U == null ? void 0 : U.then) != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof U}'.`);
    const q = new Proxy(this, {
      get: (A, ye, ee) => {
        const le = Reflect.get(A, ye, ee);
        return typeof le != "function" ? le instanceof t.Assertion ? q : le : async (...Z) => {
          const K = U.then(
            (se) => {
              const Te = new a(
                `promise resolved "${r.inspect(se)}" instead of rejecting`,
                { showDiff: !0, expected: new Error("rejected promise"), actual: se }
              );
              throw Te.stack = x.stack.replace(x.message, Te.message), Te;
            },
            (se) => (r.flag(this, "object", se), le.call(this, ...Z))
          );
          return Fb(R, K);
        };
      }
    });
    return q;
  });
};
function OO(t, r) {
  const a = t._obj, c = Gf.flag(t, "negate"), u = Gf.flag(t, "promise") || "", s = {
    ...FE(),
    diff: Zs,
    stringify: da,
    iterableEquality: mr,
    subsetEquality: od
  };
  return {
    state: {
      ...El(r),
      // TODO: implement via expect.addEqualityTesters
      customTesters: [],
      isNot: c,
      utils: s,
      promise: u,
      equals: Xt,
      // needed for built-in jest-snapshots, but we don't use it
      suppressedErrors: []
    },
    isNot: c,
    obj: a
  };
}
class Ub extends Error {
  constructor(r, a, c) {
    super(r), this.actual = a, this.expected = c;
  }
}
function NO(t, r) {
  return (a, c) => {
    Object.entries(r).forEach(([u, s]) => {
      function d(...b) {
        const { state: x, isNot: R, obj: j } = OO(this, t), U = s.call(x, j, ...b);
        if (U && typeof U == "object" && U instanceof Promise)
          return U.then(({ pass: le, message: Z, actual: K, expected: se }) => {
            if (le && R || !le && !R)
              throw new Ub(Z(), K, se);
          });
        const { pass: q, message: A, actual: ye, expected: ee } = U;
        if (q && R || !q && !R)
          throw new Ub(A(), ye, ee);
      }
      const m = HE(c, d);
      c.addMethod(globalThis[zm].matchers, u, m), c.addMethod(a.Assertion.prototype, u, m);
      class y extends so {
        constructor(x = !1, ...R) {
          super(R, x);
        }
        asymmetricMatch(x) {
          const { pass: R } = s.call(
            this.getMatcherContext(t),
            x,
            ...this.sample
          );
          return this.inverse ? !R : R;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${u}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      const E = (...b) => new y(!1, ...b);
      Object.defineProperty(t, u, {
        configurable: !0,
        enumerable: !0,
        value: E,
        writable: !0
      }), Object.defineProperty(t.not, u, {
        configurable: !0,
        enumerable: !0,
        value: (...b) => new y(!0, ...b),
        writable: !0
      }), Object.defineProperty(globalThis[Lm], u, {
        configurable: !0,
        enumerable: !0,
        value: E,
        writable: !0
      });
    });
  };
}
const MO = (t, r) => {
  r.addMethod(t.expect, "extend", (a, c) => {
    t.use(NO(a, c));
  });
};
var oo = {}, Fm = { exports: {} };
Fm.exports;
(function(t) {
  const a = (s = 0) => (d) => `\x1B[${38 + s};5;${d}m`, c = (s = 0) => (d, m, y) => `\x1B[${38 + s};2;${d};${m};${y}m`;
  function u() {
    const s = /* @__PURE__ */ new Map(), d = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    d.color.gray = d.color.blackBright, d.bgColor.bgGray = d.bgColor.bgBlackBright, d.color.grey = d.color.blackBright, d.bgColor.bgGrey = d.bgColor.bgBlackBright;
    for (const [m, y] of Object.entries(d)) {
      for (const [E, b] of Object.entries(y))
        d[E] = {
          open: `\x1B[${b[0]}m`,
          close: `\x1B[${b[1]}m`
        }, y[E] = d[E], s.set(b[0], b[1]);
      Object.defineProperty(d, m, {
        value: y,
        enumerable: !1
      });
    }
    return Object.defineProperty(d, "codes", {
      value: s,
      enumerable: !1
    }), d.color.close = "\x1B[39m", d.bgColor.close = "\x1B[49m", d.color.ansi256 = a(), d.color.ansi16m = c(), d.bgColor.ansi256 = a(10), d.bgColor.ansi16m = c(10), Object.defineProperties(d, {
      rgbToAnsi256: {
        value: (m, y, E) => m === y && y === E ? m < 8 ? 16 : m > 248 ? 231 : Math.round((m - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(m / 255 * 5) + 6 * Math.round(y / 255 * 5) + Math.round(E / 255 * 5),
        enumerable: !1
      },
      hexToRgb: {
        value: (m) => {
          const y = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(m.toString(16));
          if (!y)
            return [0, 0, 0];
          let { colorString: E } = y.groups;
          E.length === 3 && (E = E.split("").map((x) => x + x).join(""));
          const b = Number.parseInt(E, 16);
          return [
            b >> 16 & 255,
            b >> 8 & 255,
            b & 255
          ];
        },
        enumerable: !1
      },
      hexToAnsi256: {
        value: (m) => d.rgbToAnsi256(...d.hexToRgb(m)),
        enumerable: !1
      }
    }), d;
  }
  Object.defineProperty(t, "exports", {
    enumerable: !0,
    get: u
  });
})(Fm);
var $O = Fm.exports, ha = {};
Object.defineProperty(ha, "__esModule", {
  value: !0
});
ha.printIteratorEntries = DO;
ha.printIteratorValues = PO;
ha.printListItems = jO;
ha.printObjectProperties = kO;
const AO = (t, r) => {
  const a = Object.keys(t), c = r !== null ? a.sort(r) : a;
  return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((u) => {
    Object.getOwnPropertyDescriptor(t, u).enumerable && c.push(u);
  }), c;
};
function DO(t, r, a, c, u, s, d = ": ") {
  let m = "", y = 0, E = t.next();
  if (!E.done) {
    m += r.spacingOuter;
    const b = a + r.indent;
    for (; !E.done; ) {
      if (m += b, y++ === r.maxWidth) {
        m += "…";
        break;
      }
      const x = s(
        E.value[0],
        r,
        b,
        c,
        u
      ), R = s(
        E.value[1],
        r,
        b,
        c,
        u
      );
      m += x + d + R, E = t.next(), E.done ? r.min || (m += ",") : m += `,${r.spacingInner}`;
    }
    m += r.spacingOuter + a;
  }
  return m;
}
function PO(t, r, a, c, u, s) {
  let d = "", m = 0, y = t.next();
  if (!y.done) {
    d += r.spacingOuter;
    const E = a + r.indent;
    for (; !y.done; ) {
      if (d += E, m++ === r.maxWidth) {
        d += "…";
        break;
      }
      d += s(y.value, r, E, c, u), y = t.next(), y.done ? r.min || (d += ",") : d += `,${r.spacingInner}`;
    }
    d += r.spacingOuter + a;
  }
  return d;
}
function jO(t, r, a, c, u, s) {
  let d = "";
  if (t.length) {
    d += r.spacingOuter;
    const m = a + r.indent;
    for (let y = 0; y < t.length; y++) {
      if (d += m, y === r.maxWidth) {
        d += "…";
        break;
      }
      y in t && (d += s(t[y], r, m, c, u)), y < t.length - 1 ? d += `,${r.spacingInner}` : r.min || (d += ",");
    }
    d += r.spacingOuter + a;
  }
  return d;
}
function kO(t, r, a, c, u, s) {
  let d = "";
  const m = AO(t, r.compareKeys);
  if (m.length) {
    d += r.spacingOuter;
    const y = a + r.indent;
    for (let E = 0; E < m.length; E++) {
      const b = m[E], x = s(b, r, y, c, u), R = s(t[b], r, y, c, u);
      d += `${y + x}: ${R}`, E < m.length - 1 ? d += `,${r.spacingInner}` : r.min || (d += ",");
    }
    d += r.spacingOuter + a;
  }
  return d;
}
var Za = {};
Object.defineProperty(Za, "__esModule", {
  value: !0
});
Za.test = Za.serialize = Za.default = void 0;
var Bb = ha, Jh = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const zO = typeof Jh == "function" && Jh.for ? Jh.for("jest.asymmetricMatcher") : 1267621, Lf = " ", YE = (t, r, a, c, u, s) => {
  const d = t.toString();
  if (d === "ArrayContaining" || d === "ArrayNotContaining")
    return ++c > r.maxDepth ? `[${d}]` : `${d + Lf}[${(0, Bb.printListItems)(
      t.sample,
      r,
      a,
      c,
      u,
      s
    )}]`;
  if (d === "ObjectContaining" || d === "ObjectNotContaining")
    return ++c > r.maxDepth ? `[${d}]` : `${d + Lf}{${(0, Bb.printObjectProperties)(
      t.sample,
      r,
      a,
      c,
      u,
      s
    )}}`;
  if (d === "StringMatching" || d === "StringNotMatching" || d === "StringContaining" || d === "StringNotContaining")
    return d + Lf + s(t.sample, r, a, c, u);
  if (typeof t.toAsymmetricMatcher != "function")
    throw new Error(
      `Asymmetric matcher ${t.constructor.name} does not implement toAsymmetricMatcher()`
    );
  return t.toAsymmetricMatcher();
};
Za.serialize = YE;
const QE = (t) => t && t.$$typeof === zO;
Za.test = QE;
const LO = {
  serialize: YE,
  test: QE
};
var FO = LO;
Za.default = FO;
var eo = {};
Object.defineProperty(eo, "__esModule", {
  value: !0
});
eo.test = eo.serialize = eo.default = void 0;
var Ib = ha;
const UO = " ", KE = ["DOMStringMap", "NamedNodeMap"], BO = /^(HTML\w*Collection|NodeList)$/, IO = (t) => KE.indexOf(t) !== -1 || BO.test(t), GE = (t) => t && t.constructor && !!t.constructor.name && IO(t.constructor.name);
eo.test = GE;
const qO = (t) => t.constructor.name === "NamedNodeMap", WE = (t, r, a, c, u, s) => {
  const d = t.constructor.name;
  return ++c > r.maxDepth ? `[${d}]` : (r.min ? "" : d + UO) + (KE.indexOf(d) !== -1 ? `{${(0, Ib.printObjectProperties)(
    qO(t) ? Array.from(t).reduce((m, y) => (m[y.name] = y.value, m), {}) : {
      ...t
    },
    r,
    a,
    c,
    u,
    s
  )}}` : `[${(0, Ib.printListItems)(
    Array.from(t),
    r,
    a,
    c,
    u,
    s
  )}]`);
};
eo.serialize = WE;
const VO = {
  serialize: WE,
  test: GE
};
var HO = VO;
eo.default = HO;
var to = {}, ar = {}, Um = {};
Object.defineProperty(Um, "__esModule", {
  value: !0
});
Um.default = YO;
function YO(t) {
  return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(ar, "__esModule", {
  value: !0
});
ar.printText = ar.printProps = ar.printElementAsLeaf = ar.printElement = ar.printComment = ar.printChildren = void 0;
var JE = QO(Um);
function QO(t) {
  return t && t.__esModule ? t : { default: t };
}
const KO = (t, r, a, c, u, s, d) => {
  const m = c + a.indent, y = a.colors;
  return t.map((E) => {
    const b = r[E];
    let x = d(b, a, m, u, s);
    return typeof b != "string" && (x.indexOf(`
`) !== -1 && (x = a.spacingOuter + m + x + a.spacingOuter + c), x = `{${x}}`), `${a.spacingInner + c + y.prop.open + E + y.prop.close}=${y.value.open}${x}${y.value.close}`;
  }).join("");
};
ar.printProps = KO;
const GO = (t, r, a, c, u, s) => t.map(
  (d) => r.spacingOuter + a + (typeof d == "string" ? XE(d, r) : s(d, r, a, c, u))
).join("");
ar.printChildren = GO;
const XE = (t, r) => {
  const a = r.colors.content;
  return a.open + (0, JE.default)(t) + a.close;
};
ar.printText = XE;
const WO = (t, r) => {
  const a = r.colors.comment;
  return `${a.open}<!--${(0, JE.default)(t)}-->${a.close}`;
};
ar.printComment = WO;
const JO = (t, r, a, c, u) => {
  const s = c.colors.tag;
  return `${s.open}<${t}${r && s.close + r + c.spacingOuter + u + s.open}${a ? `>${s.close}${a}${c.spacingOuter}${u}${s.open}</${t}` : `${r && !c.min ? "" : " "}/`}>${s.close}`;
};
ar.printElement = JO;
const XO = (t, r) => {
  const a = r.colors.tag;
  return `${a.open}<${t}${a.close} …${a.open} />${a.close}`;
};
ar.printElementAsLeaf = XO;
Object.defineProperty(to, "__esModule", {
  value: !0
});
to.test = to.serialize = to.default = void 0;
var ml = ar;
const ZO = 1, ZE = 3, e1 = 8, t1 = 11, eN = /^((HTML|SVG)\w*)?Element$/, tN = (t) => {
  try {
    return typeof t.hasAttribute == "function" && t.hasAttribute("is");
  } catch {
    return !1;
  }
}, nN = (t) => {
  const r = t.constructor.name, { nodeType: a, tagName: c } = t, u = typeof c == "string" && c.includes("-") || tN(t);
  return a === ZO && (eN.test(r) || u) || a === ZE && r === "Text" || a === e1 && r === "Comment" || a === t1 && r === "DocumentFragment";
}, n1 = (t) => {
  var r;
  return ((r = t == null ? void 0 : t.constructor) == null ? void 0 : r.name) && nN(t);
};
to.test = n1;
function rN(t) {
  return t.nodeType === ZE;
}
function iN(t) {
  return t.nodeType === e1;
}
function Xh(t) {
  return t.nodeType === t1;
}
const r1 = (t, r, a, c, u, s) => {
  if (rN(t))
    return (0, ml.printText)(t.data, r);
  if (iN(t))
    return (0, ml.printComment)(t.data, r);
  const d = Xh(t) ? "DocumentFragment" : t.tagName.toLowerCase();
  return ++c > r.maxDepth ? (0, ml.printElementAsLeaf)(d, r) : (0, ml.printElement)(
    d,
    (0, ml.printProps)(
      Xh(t) ? [] : Array.from(t.attributes, (m) => m.name).sort(),
      Xh(t) ? {} : Array.from(t.attributes).reduce((m, y) => (m[y.name] = y.value, m), {}),
      r,
      a + r.indent,
      c,
      u,
      s
    ),
    (0, ml.printChildren)(
      Array.prototype.slice.call(t.childNodes || t.children),
      r,
      a + r.indent,
      c,
      u,
      s
    ),
    r,
    a
  );
};
to.serialize = r1;
const aN = {
  serialize: r1,
  test: n1
};
var oN = aN;
to.default = oN;
var no = {};
Object.defineProperty(no, "__esModule", {
  value: !0
});
no.test = no.serialize = no.default = void 0;
var tc = ha;
const uN = "@@__IMMUTABLE_ITERABLE__@@", lN = "@@__IMMUTABLE_LIST__@@", sN = "@@__IMMUTABLE_KEYED__@@", cN = "@@__IMMUTABLE_MAP__@@", qb = "@@__IMMUTABLE_ORDERED__@@", fN = "@@__IMMUTABLE_RECORD__@@", dN = "@@__IMMUTABLE_SEQ__@@", pN = "@@__IMMUTABLE_SET__@@", hN = "@@__IMMUTABLE_STACK__@@", Rl = (t) => `Immutable.${t}`, ud = (t) => `[${t}]`, nc = " ", Vb = "…", mN = (t, r, a, c, u, s, d) => ++c > r.maxDepth ? ud(Rl(d)) : `${Rl(d) + nc}{${(0, tc.printIteratorEntries)(
  t.entries(),
  r,
  a,
  c,
  u,
  s
)}}`;
function vN(t) {
  let r = 0;
  return {
    next() {
      if (r < t._keys.length) {
        const a = t._keys[r++];
        return {
          done: !1,
          value: [a, t.get(a)]
        };
      }
      return {
        done: !0,
        value: void 0
      };
    }
  };
}
const yN = (t, r, a, c, u, s) => {
  const d = Rl(t._name || "Record");
  return ++c > r.maxDepth ? ud(d) : `${d + nc}{${(0, tc.printIteratorEntries)(
    vN(t),
    r,
    a,
    c,
    u,
    s
  )}}`;
}, gN = (t, r, a, c, u, s) => {
  const d = Rl("Seq");
  return ++c > r.maxDepth ? ud(d) : t[sN] ? `${d + nc}{${// from Immutable collection of entries or from ECMAScript object
  t._iter || t._object ? (0, tc.printIteratorEntries)(
    t.entries(),
    r,
    a,
    c,
    u,
    s
  ) : Vb}}` : `${d + nc}[${t._iter || // from Immutable collection of values
  t._array || // from ECMAScript array
  t._collection || // from ECMAScript collection in immutable v4
  t._iterable ? (0, tc.printIteratorValues)(
    t.values(),
    r,
    a,
    c,
    u,
    s
  ) : Vb}]`;
}, Zh = (t, r, a, c, u, s, d) => ++c > r.maxDepth ? ud(Rl(d)) : `${Rl(d) + nc}[${(0, tc.printIteratorValues)(
  t.values(),
  r,
  a,
  c,
  u,
  s
)}]`, i1 = (t, r, a, c, u, s) => t[cN] ? mN(
  t,
  r,
  a,
  c,
  u,
  s,
  t[qb] ? "OrderedMap" : "Map"
) : t[lN] ? Zh(
  t,
  r,
  a,
  c,
  u,
  s,
  "List"
) : t[pN] ? Zh(
  t,
  r,
  a,
  c,
  u,
  s,
  t[qb] ? "OrderedSet" : "Set"
) : t[hN] ? Zh(
  t,
  r,
  a,
  c,
  u,
  s,
  "Stack"
) : t[dN] ? gN(t, r, a, c, u, s) : yN(t, r, a, c, u, s);
no.serialize = i1;
const a1 = (t) => t && (t[uN] === !0 || t[fN] === !0);
no.test = a1;
const bN = {
  serialize: i1,
  test: a1
};
var SN = bN;
no.default = SN;
var ro = {}, ym = { exports: {} }, Vt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hb;
function EN() {
  return Hb || (Hb = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.server_context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), U = !1, q = !1, A = !1, ye = !1, ee = !1, le;
    le = Symbol.for("react.module.reference");
    function Z(J) {
      return !!(typeof J == "string" || typeof J == "function" || J === a || J === u || ee || J === c || J === E || J === b || ye || J === j || U || q || A || typeof J == "object" && J !== null && (J.$$typeof === R || J.$$typeof === x || J.$$typeof === s || J.$$typeof === d || J.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      J.$$typeof === le || J.getModuleId !== void 0));
    }
    function K(J) {
      if (typeof J == "object" && J !== null) {
        var gt = J.$$typeof;
        switch (gt) {
          case t:
            var ct = J.type;
            switch (ct) {
              case a:
              case u:
              case c:
              case E:
              case b:
                return ct;
              default:
                var pt = ct && ct.$$typeof;
                switch (pt) {
                  case m:
                  case d:
                  case y:
                  case R:
                  case x:
                  case s:
                    return pt;
                  default:
                    return gt;
                }
            }
          case r:
            return gt;
        }
      }
    }
    var se = d, Te = s, ve = t, Ve = y, ce = a, Xe = R, ie = x, ge = r, Ae = u, et = c, Pe = E, Qe = b, me = !1, C = !1;
    function D(J) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(J) {
      return C || (C = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(J) {
      return K(J) === d;
    }
    function oe(J) {
      return K(J) === s;
    }
    function be(J) {
      return typeof J == "object" && J !== null && J.$$typeof === t;
    }
    function re(J) {
      return K(J) === y;
    }
    function Q(J) {
      return K(J) === a;
    }
    function De(J) {
      return K(J) === R;
    }
    function Ge(J) {
      return K(J) === x;
    }
    function tt(J) {
      return K(J) === r;
    }
    function ot(J) {
      return K(J) === u;
    }
    function nt(J) {
      return K(J) === c;
    }
    function Ze(J) {
      return K(J) === E;
    }
    function mt(J) {
      return K(J) === b;
    }
    Vt.ContextConsumer = se, Vt.ContextProvider = Te, Vt.Element = ve, Vt.ForwardRef = Ve, Vt.Fragment = ce, Vt.Lazy = Xe, Vt.Memo = ie, Vt.Portal = ge, Vt.Profiler = Ae, Vt.StrictMode = et, Vt.Suspense = Pe, Vt.SuspenseList = Qe, Vt.isAsyncMode = D, Vt.isConcurrentMode = V, Vt.isContextConsumer = G, Vt.isContextProvider = oe, Vt.isElement = be, Vt.isForwardRef = re, Vt.isFragment = Q, Vt.isLazy = De, Vt.isMemo = Ge, Vt.isPortal = tt, Vt.isProfiler = ot, Vt.isStrictMode = nt, Vt.isSuspense = Ze, Vt.isSuspenseList = mt, Vt.isValidElementType = Z, Vt.typeOf = K;
  }()), Vt;
}
var Ht = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yb;
function TN() {
  if (Yb)
    return Ht;
  Yb = 1;
  var t = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.server_context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), U;
  U = Symbol.for("react.module.reference");
  function q(A) {
    if (typeof A == "object" && A !== null) {
      var ye = A.$$typeof;
      switch (ye) {
        case t:
          switch (A = A.type, A) {
            case a:
            case u:
            case c:
            case E:
            case b:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case m:
                case d:
                case y:
                case R:
                case x:
                case s:
                  return A;
                default:
                  return ye;
              }
          }
        case r:
          return ye;
      }
    }
  }
  return Ht.ContextConsumer = d, Ht.ContextProvider = s, Ht.Element = t, Ht.ForwardRef = y, Ht.Fragment = a, Ht.Lazy = R, Ht.Memo = x, Ht.Portal = r, Ht.Profiler = u, Ht.StrictMode = c, Ht.Suspense = E, Ht.SuspenseList = b, Ht.isAsyncMode = function() {
    return !1;
  }, Ht.isConcurrentMode = function() {
    return !1;
  }, Ht.isContextConsumer = function(A) {
    return q(A) === d;
  }, Ht.isContextProvider = function(A) {
    return q(A) === s;
  }, Ht.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === t;
  }, Ht.isForwardRef = function(A) {
    return q(A) === y;
  }, Ht.isFragment = function(A) {
    return q(A) === a;
  }, Ht.isLazy = function(A) {
    return q(A) === R;
  }, Ht.isMemo = function(A) {
    return q(A) === x;
  }, Ht.isPortal = function(A) {
    return q(A) === r;
  }, Ht.isProfiler = function(A) {
    return q(A) === u;
  }, Ht.isStrictMode = function(A) {
    return q(A) === c;
  }, Ht.isSuspense = function(A) {
    return q(A) === E;
  }, Ht.isSuspenseList = function(A) {
    return q(A) === b;
  }, Ht.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === a || A === u || A === c || A === E || A === b || A === j || typeof A == "object" && A !== null && (A.$$typeof === R || A.$$typeof === x || A.$$typeof === s || A.$$typeof === d || A.$$typeof === y || A.$$typeof === U || A.getModuleId !== void 0);
  }, Ht.typeOf = q, Ht;
}
process.env.NODE_ENV === "production" ? ym.exports = TN() : ym.exports = EN();
var wN = ym.exports;
Object.defineProperty(ro, "__esModule", {
  value: !0
});
ro.test = ro.serialize = ro.default = void 0;
var Ko = xN(wN), Ff = ar;
function o1(t) {
  if (typeof WeakMap != "function")
    return null;
  var r = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
  return (o1 = function(c) {
    return c ? a : r;
  })(t);
}
function xN(t, r) {
  if (!r && t && t.__esModule)
    return t;
  if (t === null || typeof t != "object" && typeof t != "function")
    return { default: t };
  var a = o1(r);
  if (a && a.has(t))
    return a.get(t);
  var c = {}, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in t)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(t, s)) {
      var d = u ? Object.getOwnPropertyDescriptor(t, s) : null;
      d && (d.get || d.set) ? Object.defineProperty(c, s, d) : c[s] = t[s];
    }
  return c.default = t, a && a.set(t, c), c;
}
const u1 = (t, r = []) => (Array.isArray(t) ? t.forEach((a) => {
  u1(a, r);
}) : t != null && t !== !1 && r.push(t), r), Qb = (t) => {
  const r = t.type;
  if (typeof r == "string")
    return r;
  if (typeof r == "function")
    return r.displayName || r.name || "Unknown";
  if (Ko.isFragment(t))
    return "React.Fragment";
  if (Ko.isSuspense(t))
    return "React.Suspense";
  if (typeof r == "object" && r !== null) {
    if (Ko.isContextProvider(t))
      return "Context.Provider";
    if (Ko.isContextConsumer(t))
      return "Context.Consumer";
    if (Ko.isForwardRef(t)) {
      if (r.displayName)
        return r.displayName;
      const a = r.render.displayName || r.render.name || "";
      return a !== "" ? `ForwardRef(${a})` : "ForwardRef";
    }
    if (Ko.isMemo(t)) {
      const a = r.displayName || r.type.displayName || r.type.name || "";
      return a !== "" ? `Memo(${a})` : "Memo";
    }
  }
  return "UNDEFINED";
}, _N = (t) => {
  const { props: r } = t;
  return Object.keys(r).filter((a) => a !== "children" && r[a] !== void 0).sort();
}, l1 = (t, r, a, c, u, s) => ++c > r.maxDepth ? (0, Ff.printElementAsLeaf)(Qb(t), r) : (0, Ff.printElement)(
  Qb(t),
  (0, Ff.printProps)(
    _N(t),
    t.props,
    r,
    a + r.indent,
    c,
    u,
    s
  ),
  (0, Ff.printChildren)(
    u1(t.props.children),
    r,
    a + r.indent,
    c,
    u,
    s
  ),
  r,
  a
);
ro.serialize = l1;
const s1 = (t) => t != null && Ko.isElement(t);
ro.test = s1;
const CN = {
  serialize: l1,
  test: s1
};
var RN = CN;
ro.default = RN;
var io = {};
Object.defineProperty(io, "__esModule", {
  value: !0
});
io.test = io.serialize = io.default = void 0;
var Uf = ar, em = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
const ON = typeof em == "function" && em.for ? em.for("react.test.json") : 245830487, NN = (t) => {
  const { props: r } = t;
  return r ? Object.keys(r).filter((a) => r[a] !== void 0).sort() : [];
}, c1 = (t, r, a, c, u, s) => ++c > r.maxDepth ? (0, Uf.printElementAsLeaf)(t.type, r) : (0, Uf.printElement)(
  t.type,
  t.props ? (0, Uf.printProps)(
    NN(t),
    t.props,
    r,
    a + r.indent,
    c,
    u,
    s
  ) : "",
  t.children ? (0, Uf.printChildren)(
    t.children,
    r,
    a + r.indent,
    c,
    u,
    s
  ) : "",
  r,
  a
);
io.serialize = c1;
const f1 = (t) => t && t.$$typeof === ON;
io.test = f1;
const MN = {
  serialize: c1,
  test: f1
};
var $N = MN;
io.default = $N;
Object.defineProperty(oo, "__esModule", {
  value: !0
});
oo.default = oo.DEFAULT_OPTIONS = void 0;
var AN = oo.format = w1, d1 = oo.plugins = void 0, DN = eu($O), Bs = ha, PN = eu(
  Za
), jN = eu(eo), kN = eu(to), zN = eu(no), LN = eu(ro), FN = eu(
  io
);
function eu(t) {
  return t && t.__esModule ? t : { default: t };
}
const p1 = Object.prototype.toString, UN = Date.prototype.toISOString, BN = Error.prototype.toString, Kb = RegExp.prototype.toString, tm = (t) => typeof t.constructor == "function" && t.constructor.name || "Object", IN = (t) => typeof window < "u" && t === window, qN = /^Symbol\((.*)\)(.*)$/, VN = /\n/gi;
class h1 extends Error {
  constructor(r, a) {
    super(r), this.stack = a, this.name = this.constructor.name;
  }
}
function HN(t) {
  return t === "[object Array]" || t === "[object ArrayBuffer]" || t === "[object DataView]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object Int8Array]" || t === "[object Int16Array]" || t === "[object Int32Array]" || t === "[object Uint8Array]" || t === "[object Uint8ClampedArray]" || t === "[object Uint16Array]" || t === "[object Uint32Array]";
}
function YN(t) {
  return Object.is(t, -0) ? "-0" : String(t);
}
function QN(t) {
  return `${t}n`;
}
function Gb(t, r) {
  return r ? `[Function ${t.name || "anonymous"}]` : "[Function]";
}
function Wb(t) {
  return String(t).replace(qN, "Symbol($1)");
}
function Jb(t) {
  return `[${BN.call(t)}]`;
}
function m1(t, r, a, c) {
  if (t === !0 || t === !1)
    return `${t}`;
  if (t === void 0)
    return "undefined";
  if (t === null)
    return "null";
  const u = typeof t;
  if (u === "number")
    return YN(t);
  if (u === "bigint")
    return QN(t);
  if (u === "string")
    return c ? `"${t.replace(/"|\\/g, "\\$&")}"` : `"${t}"`;
  if (u === "function")
    return Gb(t, r);
  if (u === "symbol")
    return Wb(t);
  const s = p1.call(t);
  return s === "[object WeakMap]" ? "WeakMap {}" : s === "[object WeakSet]" ? "WeakSet {}" : s === "[object Function]" || s === "[object GeneratorFunction]" ? Gb(t, r) : s === "[object Symbol]" ? Wb(t) : s === "[object Date]" ? isNaN(+t) ? "Date { NaN }" : UN.call(t) : s === "[object Error]" ? Jb(t) : s === "[object RegExp]" ? a ? Kb.call(t).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Kb.call(t) : t instanceof Error ? Jb(t) : null;
}
function v1(t, r, a, c, u, s) {
  if (u.indexOf(t) !== -1)
    return "[Circular]";
  u = u.slice(), u.push(t);
  const d = ++c > r.maxDepth, m = r.min;
  if (r.callToJSON && !d && t.toJSON && typeof t.toJSON == "function" && !s)
    return Ya(t.toJSON(), r, a, c, u, !0);
  const y = p1.call(t);
  return y === "[object Arguments]" ? d ? "[Arguments]" : `${m ? "" : "Arguments "}[${(0, Bs.printListItems)(
    t,
    r,
    a,
    c,
    u,
    Ya
  )}]` : HN(y) ? d ? `[${t.constructor.name}]` : `${m || !r.printBasicPrototype && t.constructor.name === "Array" ? "" : `${t.constructor.name} `}[${(0, Bs.printListItems)(
    t,
    r,
    a,
    c,
    u,
    Ya
  )}]` : y === "[object Map]" ? d ? "[Map]" : `Map {${(0, Bs.printIteratorEntries)(
    t.entries(),
    r,
    a,
    c,
    u,
    Ya,
    " => "
  )}}` : y === "[object Set]" ? d ? "[Set]" : `Set {${(0, Bs.printIteratorValues)(
    t.values(),
    r,
    a,
    c,
    u,
    Ya
  )}}` : d || IN(t) ? `[${tm(t)}]` : `${m || !r.printBasicPrototype && tm(t) === "Object" ? "" : `${tm(t)} `}{${(0, Bs.printObjectProperties)(
    t,
    r,
    a,
    c,
    u,
    Ya
  )}}`;
}
function KN(t) {
  return t.serialize != null;
}
function y1(t, r, a, c, u, s) {
  let d;
  try {
    d = KN(t) ? t.serialize(r, a, c, u, s, Ya) : t.print(
      r,
      (m) => Ya(m, a, c, u, s),
      (m) => {
        const y = c + a.indent;
        return y + m.replace(VN, `
${y}`);
      },
      {
        edgeSpacing: a.spacingOuter,
        min: a.min,
        spacing: a.spacingInner
      },
      a.colors
    );
  } catch (m) {
    throw new h1(m.message, m.stack);
  }
  if (typeof d != "string")
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof d}".`
    );
  return d;
}
function g1(t, r) {
  for (let a = 0; a < t.length; a++)
    try {
      if (t[a].test(r))
        return t[a];
    } catch (c) {
      throw new h1(c.message, c.stack);
    }
  return null;
}
function Ya(t, r, a, c, u, s) {
  const d = g1(r.plugins, t);
  if (d !== null)
    return y1(d, t, r, a, c, u);
  const m = m1(
    t,
    r.printFunctionName,
    r.escapeRegex,
    r.escapeString
  );
  return m !== null ? m : v1(
    t,
    r,
    a,
    c,
    u,
    s
  );
}
const Bm = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, b1 = Object.keys(Bm), GN = (t) => t, Jr = GN({
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: 1 / 0,
  maxWidth: 1 / 0,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: Bm
});
oo.DEFAULT_OPTIONS = Jr;
function WN(t) {
  if (Object.keys(t).forEach((r) => {
    if (!Object.prototype.hasOwnProperty.call(Jr, r))
      throw new Error(`pretty-format: Unknown option "${r}".`);
  }), t.min && t.indent !== void 0 && t.indent !== 0)
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (t.theme !== void 0) {
    if (t.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof t.theme != "object")
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof t.theme}".`
      );
  }
}
const JN = (t) => b1.reduce((r, a) => {
  const c = t.theme && t.theme[a] !== void 0 ? t.theme[a] : Bm[a], u = c && DN.default[c];
  if (u && typeof u.close == "string" && typeof u.open == "string")
    r[a] = u;
  else
    throw new Error(
      `pretty-format: Option "theme" has a key "${a}" whose value "${c}" is undefined in ansi-styles.`
    );
  return r;
}, /* @__PURE__ */ Object.create(null)), XN = () => b1.reduce((t, r) => (t[r] = {
  close: "",
  open: ""
}, t), /* @__PURE__ */ Object.create(null)), S1 = (t) => (t == null ? void 0 : t.printFunctionName) ?? Jr.printFunctionName, E1 = (t) => (t == null ? void 0 : t.escapeRegex) ?? Jr.escapeRegex, T1 = (t) => (t == null ? void 0 : t.escapeString) ?? Jr.escapeString, Xb = (t) => ({
  callToJSON: (t == null ? void 0 : t.callToJSON) ?? Jr.callToJSON,
  colors: t != null && t.highlight ? JN(t) : XN(),
  compareKeys: typeof (t == null ? void 0 : t.compareKeys) == "function" || (t == null ? void 0 : t.compareKeys) === null ? t.compareKeys : Jr.compareKeys,
  escapeRegex: E1(t),
  escapeString: T1(t),
  indent: t != null && t.min ? "" : ZN((t == null ? void 0 : t.indent) ?? Jr.indent),
  maxDepth: (t == null ? void 0 : t.maxDepth) ?? Jr.maxDepth,
  maxWidth: (t == null ? void 0 : t.maxWidth) ?? Jr.maxWidth,
  min: (t == null ? void 0 : t.min) ?? Jr.min,
  plugins: (t == null ? void 0 : t.plugins) ?? Jr.plugins,
  printBasicPrototype: (t == null ? void 0 : t.printBasicPrototype) ?? !0,
  printFunctionName: S1(t),
  spacingInner: t != null && t.min ? " " : `
`,
  spacingOuter: t != null && t.min ? "" : `
`
});
function ZN(t) {
  return new Array(t + 1).join(" ");
}
function w1(t, r) {
  if (r && (WN(r), r.plugins)) {
    const c = g1(r.plugins, t);
    if (c !== null)
      return y1(c, t, Xb(r), "", 0, []);
  }
  const a = m1(
    t,
    S1(r),
    E1(r),
    T1(r)
  );
  return a !== null ? a : v1(t, Xb(r), "", 0, []);
}
const eM = {
  AsymmetricMatcher: PN.default,
  DOMCollection: jN.default,
  DOMElement: kN.default,
  Immutable: zN.default,
  ReactElement: LN.default,
  ReactTestComponent: FN.default
};
d1 = oo.plugins = eM;
var tM = w1;
oo.default = tM;
function nM(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var x1 = { exports: {} };
/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */
var Zb = function(t, r) {
  var a, c, u = 1, s = 0, d = 0, m = String.alphabet;
  function y(E, b, x) {
    if (x) {
      for (a = b; x = y(E, a), x < 76 && x > 65; )
        ++a;
      return +E.slice(b - 1, a);
    }
    return x = m && m.indexOf(E.charAt(b)), x > -1 ? x + 76 : (x = E.charCodeAt(b) || 0, x < 45 || x > 127 ? x : x < 46 ? 65 : x < 48 ? x - 1 : x < 58 ? x + 18 : x < 65 ? x - 11 : x < 91 ? x + 11 : x < 97 ? x - 37 : x < 123 ? x + 5 : x - 63);
  }
  if ((t += "") != (r += "")) {
    for (; u; )
      if (c = y(t, s++), u = y(r, d++), c < 76 && u < 76 && c > 66 && u > 66 && (c = y(t, s, s), u = y(r, d, s = a), d = a), c != u)
        return c < u ? -1 : 1;
  }
  return 0;
};
try {
  x1.exports = Zb;
} catch {
  String.naturalCompare = Zb;
}
var rM = x1.exports, iM = /* @__PURE__ */ nM(rM);
function _1(t) {
  return t != null;
}
function aM(t) {
  return t === null || typeof t != "function" && typeof t != "object";
}
function Yf(t) {
  return t != null && typeof t == "object" && !Array.isArray(t);
}
function oM(t) {
  let r = -1, a = null, c = 0, u = 0, s = null;
  for (; r <= t.length; ) {
    s = t[r], r++;
    const d = t[r];
    if ((d === '"' || d === "'" || d === "`") && s !== "\\" && (a === d ? a = null : a || (a = d)), a || (d === "(" && c++, d === ")" && u++), c && u && c === u)
      return r;
  }
  return null;
}
let uM = () => "Promise{…}";
try {
  const { getPromiseDetails: t, kPending: r, kRejected: a } = process.binding("util");
  Array.isArray(t(Promise.resolve())) && (uM = (c, u) => {
    const [s, d] = t(c);
    return s === r ? "Promise{<pending>}" : `Promise${s === a ? "!" : ""}{${u.inspect(d, u)}}`;
  });
} catch {
}
let eS = !1;
try {
  const t = require("util");
  eS = t.inspect ? t.inspect.custom : !1;
} catch {
  eS = !1;
}
const Im = /\r?\n/;
function lM(t, r, a) {
  const c = t.split(Im), u = /\r\n/.test(t) ? 2 : 1;
  let s = 0;
  if (r > c.length)
    return t.length;
  for (let d = 0; d < r - 1; d++)
    s += c[d].length + u;
  return s + a;
}
function sM(t, r) {
  if (r > t.length)
    throw new Error(
      `offset is longer than source length! offset ${r} > length ${t.length}`
    );
  const a = t.split(Im), c = /\r\n/.test(t) ? 2 : 1;
  let u = 0, s = 0;
  for (; s < a.length; s++) {
    const d = a[s].length + c;
    if (u + d >= r)
      break;
    u += d;
  }
  return s + 1;
}
const cM = (t, r, a, c, u, s) => {
  const d = t.getMockName(), m = d === "vi.fn()" ? "" : ` ${d}`;
  let y = "";
  if (t.mock.calls.length !== 0) {
    const E = a + r.indent;
    y = ` {${r.spacingOuter}${E}"calls": ${s(t.mock.calls, r, E, c, u)}${r.min ? ", " : ","}${r.spacingOuter}${E}"results": ${s(t.mock.results, r, E, c, u)}${r.min ? "" : ","}${r.spacingOuter}${a}}`;
  }
  return `[MockFunction${m}]${y}`;
}, fM = (t) => t && !!t._isMockFunction, dM = { serialize: cM, test: fM }, {
  DOMCollection: pM,
  DOMElement: hM,
  Immutable: mM,
  ReactElement: vM,
  ReactTestComponent: yM,
  AsymmetricMatcher: gM
} = d1;
let gm = [
  yM,
  vM,
  hM,
  pM,
  mM,
  gM,
  dM
];
function bM(t) {
  gm = [t].concat(gm);
}
function SM() {
  return gm;
}
function EM(t, r) {
  return `${t} ${r}`;
}
function TM(t) {
  if (!/ \d+$/.test(t))
    throw new Error("Snapshot keys must end with a number.");
  return t.replace(/ \d+$/, "");
}
function wM(t, r) {
  const a = r.updateSnapshot, c = /* @__PURE__ */ Object.create(null);
  let u = "", s = !1;
  if (t != null)
    try {
      u = t, new Function("exports", u)(c);
    } catch {
    }
  return (a === "all" || a === "new") && u && (s = !0), { data: c, dirty: s };
}
function xM(t) {
  return t.includes(`
`) ? `
${t}
` : t;
}
function tS(t) {
  return t.length > 2 && t.startsWith(`
`) && t.endsWith(`
`) ? t.slice(1, -1) : t;
}
const _M = !0, CM = !1;
function RM(t, r = 2, a = {}) {
  return qm(
    AN(t, {
      escapeRegex: _M,
      indent: r,
      plugins: SM(),
      printFunctionName: CM,
      ...a
    })
  );
}
function OM(t) {
  return t.replace(/`|\\|\${/g, "\\$&");
}
function nS(t) {
  return `\`${OM(t)}\``;
}
function qm(t) {
  return t.replace(/\r\n|\r/g, `
`);
}
async function NM(t, r, a) {
  const c = Object.keys(r).sort(iM).map(
    (m) => `exports[${nS(m)}] = ${nS(qm(r[m]))};`
  ), u = `${t.getHeader()}

${c.join(`

`)}
`, s = await t.readSnapshotFile(a);
  s != null && s === u || await t.saveSnapshotFile(
    a,
    u
  );
}
function rS(t) {
  function r() {
    var u, s;
    const d = /^( +)}\s+$/m.exec(t || ""), m = (u = d == null ? void 0 : d[1]) == null ? void 0 : u.length;
    if (m)
      return m;
    const y = /^\n( +)"/.exec(t || "");
    return ((s = y == null ? void 0 : y[1]) == null ? void 0 : s.length) || 0;
  }
  const a = r();
  let c = t == null ? void 0 : t.trim();
  return a && (c = c == null ? void 0 : c.replace(new RegExp(`^${" ".repeat(a)}`, "gm"), "").replace(/ +}$/, "}")), c;
}
function bm(t = [], r = []) {
  const a = Array.from(t);
  return r.forEach((c, u) => {
    const s = a[u];
    Array.isArray(t[u]) ? a[u] = bm(t[u], c) : Yf(s) ? a[u] = Vm(t[u], c) : a[u] = c;
  }), a;
}
function Vm(t, r) {
  if (Yf(t) && Yf(r)) {
    const a = { ...t };
    return Object.keys(r).forEach((c) => {
      Yf(r[c]) && !r[c].$$typeof ? c in t ? a[c] = Vm(t[c], r[c]) : Object.assign(a, { [c]: r[c] }) : Array.isArray(r[c]) ? a[c] = bm(t[c], r[c]) : Object.assign(a, { [c]: r[c] });
    }), a;
  } else if (Array.isArray(t) && Array.isArray(r))
    return bm(t, r);
  return t;
}
const MM = 44, iS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $M = new Uint8Array(64), C1 = new Uint8Array(128);
for (let t = 0; t < iS.length; t++) {
  const r = iS.charCodeAt(t);
  $M[t] = r, C1[r] = t;
}
function AM(t) {
  const r = new Int32Array(5), a = [];
  let c = 0;
  do {
    const u = DM(t, c), s = [];
    let d = !0, m = 0;
    r[0] = 0;
    for (let y = c; y < u; y++) {
      let E;
      y = Is(t, y, r, 0);
      const b = r[0];
      b < m && (d = !1), m = b, aS(t, y, u) ? (y = Is(t, y, r, 1), y = Is(t, y, r, 2), y = Is(t, y, r, 3), aS(t, y, u) ? (y = Is(t, y, r, 4), E = [b, r[1], r[2], r[3], r[4]]) : E = [b, r[1], r[2], r[3]]) : E = [b], s.push(E);
    }
    d || PM(s), a.push(s), c = u + 1;
  } while (c <= t.length);
  return a;
}
function DM(t, r) {
  const a = t.indexOf(";", r);
  return a === -1 ? t.length : a;
}
function Is(t, r, a, c) {
  let u = 0, s = 0, d = 0;
  do {
    const y = t.charCodeAt(r++);
    d = C1[y], u |= (d & 31) << s, s += 5;
  } while (d & 32);
  const m = u & 1;
  return u >>>= 1, m && (u = -2147483648 | -u), a[c] += u, r;
}
function aS(t, r, a) {
  return r >= a ? !1 : t.charCodeAt(r) !== MM;
}
function PM(t) {
  t.sort(jM);
}
function jM(t, r) {
  return t[0] - r[0];
}
const kM = /^[\w+.-]+:\/\//, zM = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, LM = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var wn;
(function(t) {
  t[t.Empty = 1] = "Empty", t[t.Hash = 2] = "Hash", t[t.Query = 3] = "Query", t[t.RelativePath = 4] = "RelativePath", t[t.AbsolutePath = 5] = "AbsolutePath", t[t.SchemeRelative = 6] = "SchemeRelative", t[t.Absolute = 7] = "Absolute";
})(wn || (wn = {}));
function FM(t) {
  return kM.test(t);
}
function UM(t) {
  return t.startsWith("//");
}
function R1(t) {
  return t.startsWith("/");
}
function BM(t) {
  return t.startsWith("file:");
}
function oS(t) {
  return /^[.?#]/.test(t);
}
function Bf(t) {
  const r = zM.exec(t);
  return O1(r[1], r[2] || "", r[3], r[4] || "", r[5] || "/", r[6] || "", r[7] || "");
}
function IM(t) {
  const r = LM.exec(t), a = r[2];
  return O1("file:", "", r[1] || "", "", R1(a) ? a : "/" + a, r[3] || "", r[4] || "");
}
function O1(t, r, a, c, u, s, d) {
  return {
    scheme: t,
    user: r,
    host: a,
    port: c,
    path: u,
    query: s,
    hash: d,
    type: wn.Absolute
  };
}
function uS(t) {
  if (UM(t)) {
    const a = Bf("http:" + t);
    return a.scheme = "", a.type = wn.SchemeRelative, a;
  }
  if (R1(t)) {
    const a = Bf("http://foo.com" + t);
    return a.scheme = "", a.host = "", a.type = wn.AbsolutePath, a;
  }
  if (BM(t))
    return IM(t);
  if (FM(t))
    return Bf(t);
  const r = Bf("http://foo.com/" + t);
  return r.scheme = "", r.host = "", r.type = t ? t.startsWith("?") ? wn.Query : t.startsWith("#") ? wn.Hash : wn.RelativePath : wn.Empty, r;
}
function qM(t) {
  if (t.endsWith("/.."))
    return t;
  const r = t.lastIndexOf("/");
  return t.slice(0, r + 1);
}
function VM(t, r) {
  N1(r, r.type), t.path === "/" ? t.path = r.path : t.path = qM(r.path) + t.path;
}
function N1(t, r) {
  const a = r <= wn.RelativePath, c = t.path.split("/");
  let u = 1, s = 0, d = !1;
  for (let y = 1; y < c.length; y++) {
    const E = c[y];
    if (!E) {
      d = !0;
      continue;
    }
    if (d = !1, E !== ".") {
      if (E === "..") {
        s ? (d = !0, s--, u--) : a && (c[u++] = E);
        continue;
      }
      c[u++] = E, s++;
    }
  }
  let m = "";
  for (let y = 1; y < u; y++)
    m += "/" + c[y];
  (!m || d && !m.endsWith("/..")) && (m += "/"), t.path = m;
}
function HM(t, r) {
  if (!t && !r)
    return "";
  const a = uS(t);
  let c = a.type;
  if (r && c !== wn.Absolute) {
    const s = uS(r), d = s.type;
    switch (c) {
      case wn.Empty:
        a.hash = s.hash;
      case wn.Hash:
        a.query = s.query;
      case wn.Query:
      case wn.RelativePath:
        VM(a, s);
      case wn.AbsolutePath:
        a.user = s.user, a.host = s.host, a.port = s.port;
      case wn.SchemeRelative:
        a.scheme = s.scheme;
    }
    d > c && (c = d);
  }
  N1(a, c);
  const u = a.query + a.hash;
  switch (c) {
    case wn.Hash:
    case wn.Query:
      return u;
    case wn.RelativePath: {
      const s = a.path.slice(1);
      return s ? oS(r || t) && !oS(s) ? "./" + s + u : s + u : u || ".";
    }
    case wn.AbsolutePath:
      return a.path + u;
    default:
      return a.scheme + "//" + a.user + a.host + a.port + a.path + u;
  }
}
function lS(t, r) {
  return r && !r.endsWith("/") && (r += "/"), HM(t, r);
}
function YM(t) {
  if (!t)
    return "";
  const r = t.lastIndexOf("/");
  return t.slice(0, r + 1);
}
const uo = 0, QM = 1, KM = 2, GM = 3, WM = 4;
function JM(t, r) {
  const a = sS(t, 0);
  if (a === t.length)
    return t;
  r || (t = t.slice());
  for (let c = a; c < t.length; c = sS(t, c + 1))
    t[c] = ZM(t[c], r);
  return t;
}
function sS(t, r) {
  for (let a = r; a < t.length; a++)
    if (!XM(t[a]))
      return a;
  return t.length;
}
function XM(t) {
  for (let r = 1; r < t.length; r++)
    if (t[r][uo] < t[r - 1][uo])
      return !1;
  return !0;
}
function ZM(t, r) {
  return r || (t = t.slice()), t.sort(e$);
}
function e$(t, r) {
  return t[uo] - r[uo];
}
let Jf = !1;
function t$(t, r, a, c) {
  for (; a <= c; ) {
    const u = a + (c - a >> 1), s = t[u][uo] - r;
    if (s === 0)
      return Jf = !0, u;
    s < 0 ? a = u + 1 : c = u - 1;
  }
  return Jf = !1, a - 1;
}
function n$(t, r, a) {
  for (let c = a + 1; c < t.length && t[c][uo] === r; a = c++)
    ;
  return a;
}
function r$(t, r, a) {
  for (let c = a - 1; c >= 0 && t[c][uo] === r; a = c--)
    ;
  return a;
}
function i$() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function a$(t, r, a, c) {
  const { lastKey: u, lastNeedle: s, lastIndex: d } = a;
  let m = 0, y = t.length - 1;
  if (c === u) {
    if (r === s)
      return Jf = d !== -1 && t[d][uo] === r, d;
    r >= s ? m = d === -1 ? 0 : d : y = d;
  }
  return a.lastKey = c, a.lastNeedle = r, a.lastIndex = t$(t, r, m, y);
}
const o$ = "`line` must be greater than 0 (lines start at line 1)", u$ = "`column` must be greater than or equal to 0 (columns start at column 0)", cS = -1, l$ = 1;
let fS, M1;
class s$ {
  constructor(r, a) {
    const c = typeof r == "string";
    if (!c && r._decodedMemo)
      return r;
    const u = c ? JSON.parse(r) : r, { version: s, file: d, names: m, sourceRoot: y, sources: E, sourcesContent: b } = u;
    this.version = s, this.file = d, this.names = m || [], this.sourceRoot = y, this.sources = E, this.sourcesContent = b;
    const x = lS(y || "", YM(a));
    this.resolvedSources = E.map((j) => lS(j || "", x));
    const { mappings: R } = u;
    typeof R == "string" ? (this._encoded = R, this._decoded = void 0) : (this._encoded = void 0, this._decoded = JM(R, c)), this._decodedMemo = i$(), this._bySources = void 0, this._bySourceMemos = void 0;
  }
}
fS = (t) => t._decoded || (t._decoded = AM(t._encoded)), M1 = (t, { line: r, column: a, bias: c }) => {
  if (r--, r < 0)
    throw new Error(o$);
  if (a < 0)
    throw new Error(u$);
  const u = fS(t);
  if (r >= u.length)
    return If(null, null, null, null);
  const s = u[r], d = c$(s, t._decodedMemo, r, a, c || l$);
  if (d === -1)
    return If(null, null, null, null);
  const m = s[d];
  if (m.length === 1)
    return If(null, null, null, null);
  const { names: y, resolvedSources: E } = t;
  return If(E[m[QM]], m[KM] + 1, m[GM], m.length === 5 ? y[m[WM]] : null);
};
function If(t, r, a, c) {
  return { source: t, line: r, column: a, name: c };
}
function c$(t, r, a, c, u) {
  let s = a$(t, c, r, a);
  return Jf ? s = (u === cS ? n$ : r$)(t, c, s) : u === cS && s++, s === -1 || s === t.length ? -1 : s;
}
const $1 = /^\s*at .*(\S+:\d+|\(native\))/m, f$ = /^(eval@)?(\[native code])?$/, d$ = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/",
  "/deps/chai.js",
  /__vitest_browser__/
];
function A1(t) {
  if (!t.includes(":"))
    return [t];
  const a = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/^\(|\)$/g, ""));
  if (!a)
    return [t];
  let c = a[1];
  return (c.startsWith("http:") || c.startsWith("https:")) && (c = new URL(c).pathname), c.startsWith("/@fs/") && (c = c.slice(typeof process < "u" && process.platform === "win32" ? 5 : 4)), [c, a[2] || void 0, a[3] || void 0];
}
function p$(t) {
  let r = t.trim();
  if (f$.test(r) || (r.includes(" > eval") && (r = r.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !r.includes("@") && !r.includes(":")))
    return null;
  const a = /((.*".+"[^@]*)?[^@]*)(?:@)/, c = r.match(a), u = c && c[1] ? c[1] : void 0, [s, d, m] = A1(r.replace(a, ""));
  return !s || !d || !m ? null : {
    file: s,
    method: u || "",
    line: Number.parseInt(d),
    column: Number.parseInt(m)
  };
}
function h$(t) {
  let r = t.trim();
  if (!$1.test(r))
    return null;
  r.includes("(eval ") && (r = r.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let a = r.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const c = a.match(/ (\(.+\)$)/);
  a = c ? a.replace(c[0], "") : a;
  const [u, s, d] = A1(c ? c[1] : a);
  let m = c && a || "", y = u && ["eval", "<anonymous>"].includes(u) ? void 0 : u;
  return !y || !s || !d ? null : (m.startsWith("async ") && (m = m.slice(6)), y.startsWith("file://") && (y = y.slice(7)), y = NC(y), m && (m = m.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: m,
    file: y,
    line: Number.parseInt(s),
    column: Number.parseInt(d)
  });
}
function m$(t, r = {}) {
  const { ignoreStackEntries: a = d$ } = r;
  let c = $1.test(t) ? y$(t) : v$(t);
  return a.length && (c = c.filter((u) => !a.some((s) => u.file.match(s)))), c.map((u) => {
    var s;
    const d = (s = r.getSourceMap) == null ? void 0 : s.call(r, u.file);
    if (!d || typeof d != "object" || !d.version)
      return u;
    const m = new s$(d), { line: y, column: E } = M1(m, u);
    return y != null && E != null ? { ...u, line: y, column: E } : u;
  });
}
function v$(t) {
  return t.split(`
`).map((r) => p$(r)).filter(_1);
}
function y$(t) {
  return t.split(`
`).map((r) => h$(r)).filter(_1);
}
function g$(t, r = {}) {
  if (!t || aM(t))
    return [];
  if (t.stacks)
    return t.stacks;
  const a = t.stack || t.stackStr || "";
  let c = m$(a, r);
  return r.frameFilter && (c = c.filter((u) => r.frameFilter(t, u) !== !1)), t.stacks = c, c;
}
async function b$(t, r) {
  const a = (await import("../../magic-string.es-QyafyARI.js")).default, c = new Set(r.map((u) => u.file));
  await Promise.all(Array.from(c).map(async (u) => {
    const s = r.filter((E) => E.file === u), d = await t.readSnapshotFile(u), m = new a(d);
    for (const E of s) {
      const b = lM(d, E.line, E.column);
      x$(d, m, b, E.snapshot);
    }
    const y = m.toString();
    y !== d && await t.saveSnapshotFile(u, y);
  }));
}
const S$ = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*({)/m;
function E$(t, r, a, c) {
  let u = t.slice(a);
  const s = S$.exec(u);
  if (!s)
    return !1;
  u = u.slice(s.index);
  let d = oM(u);
  if (d === null)
    return !1;
  d += a + s.index;
  const m = a + s.index + s[0].length, y = T$(t, m), E = `, ${D1(c, t, a)}`;
  return y === d ? r.appendLeft(d, E) : r.overwrite(y, d, E), !0;
}
function T$(t, r) {
  let a = 1, c = 0;
  for (; a !== c && r < t.length; ) {
    const u = t[r++];
    u === "{" ? a++ : u === "}" && c++;
  }
  return r;
}
function D1(t, r, a) {
  const c = sM(r, a), s = r.split(Im)[c - 1].match(/^\s*/)[0] || "", d = s.includes("	") ? `${s}	` : `${s}  `, m = t.trim().replace(/\\/g, "\\\\").split(/\n/g), y = m.length <= 1, E = "`";
  return y ? `${E}${m.join(`
`).replace(/`/g, "\\`").replace(/\${/g, "\\${")}${E}` : `${E}
${m.map((b) => b ? d + b : "").join(`
`).replace(/`/g, "\\`").replace(/\${/g, "\\${")}
${s}${E}`;
}
const w$ = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*[\w_$]*(['"`\)])/m;
function x$(t, r, a, c) {
  const u = t.slice(a), s = w$.exec(u), d = /toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot/.exec(u);
  if (!s || s.index !== (d == null ? void 0 : d.index))
    return E$(t, r, a, c);
  const m = s[1], y = a + s.index + s[0].length, E = D1(c, t, a);
  if (m === ")")
    return r.appendRight(y - 1, E), !0;
  const x = new RegExp(`(?:^|[^\\\\])${m}`).exec(t.slice(y));
  if (!x)
    return !1;
  const R = y + x.index + x[0].length;
  return r.overwrite(y - 1, R, E), !0;
}
const _$ = /^([^\S\n]*)\S/m;
function dS(t) {
  const r = t.match(_$);
  if (!r || !r[1])
    return t;
  const a = r[1], c = t.split(/\n/g);
  if (c.length <= 2 || c[0].trim() !== "" || c[c.length - 1].trim() !== "")
    return t;
  for (let u = 1; u < c.length - 1; u++)
    if (c[u] !== "") {
      if (c[u].indexOf(a) !== 0)
        return t;
      c[u] = c[u].substring(a.length);
    }
  return c[c.length - 1] = "", t = c.join(`
`), t;
}
async function C$(t, r) {
  await Promise.all(r.map(async (a) => {
    a.readonly || await t.saveSnapshotFile(a.file, a.snapshot);
  }));
}
class Hm {
  constructor(r, a, c, u) {
    Pt(this, "_counters");
    Pt(this, "_dirty");
    Pt(this, "_updateSnapshot");
    Pt(this, "_snapshotData");
    Pt(this, "_initialData");
    Pt(this, "_inlineSnapshots");
    Pt(this, "_rawSnapshots");
    Pt(this, "_uncheckedKeys");
    Pt(this, "_snapshotFormat");
    Pt(this, "_environment");
    Pt(this, "_fileExists");
    Pt(this, "added");
    Pt(this, "expand");
    Pt(this, "matched");
    Pt(this, "unmatched");
    Pt(this, "updated");
    this.testFilePath = r, this.snapshotPath = a;
    const { data: s, dirty: d } = wM(
      c,
      u
    );
    this._fileExists = c != null, this._initialData = s, this._snapshotData = s, this._dirty = d, this._inlineSnapshots = [], this._rawSnapshots = [], this._uncheckedKeys = new Set(Object.keys(this._snapshotData)), this._counters = /* @__PURE__ */ new Map(), this.expand = u.expand || !1, this.added = 0, this.matched = 0, this.unmatched = 0, this._updateSnapshot = u.updateSnapshot, this.updated = 0, this._snapshotFormat = {
      printBasicPrototype: !1,
      escapeString: !1,
      ...u.snapshotFormat
    }, this._environment = u.snapshotEnvironment;
  }
  static async create(r, a) {
    const c = await a.snapshotEnvironment.resolvePath(r), u = await a.snapshotEnvironment.readSnapshotFile(c);
    return new Hm(r, c, u, a);
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(r) {
    this._uncheckedKeys.forEach((a) => {
      TM(a) === r && this._uncheckedKeys.delete(a);
    });
  }
  _inferInlineSnapshotStack(r) {
    const a = r.findIndex((u) => u.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (a !== -1)
      return r[a + 3];
    const c = r.findIndex((u) => u.method.includes("__INLINE_SNAPSHOT__"));
    return c !== -1 ? r[c + 2] : null;
  }
  _addSnapshot(r, a, c) {
    if (this._dirty = !0, c.isInline) {
      const u = g$(c.error || new Error("snapshot"), { ignoreStackEntries: [] }), s = this._inferInlineSnapshotStack(u);
      if (!s)
        throw new Error(
          `@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(u)}`
        );
      s.column--, this._inlineSnapshots.push({
        snapshot: a,
        ...s
      });
    } else
      c.rawSnapshot ? this._rawSnapshots.push({
        ...c.rawSnapshot,
        snapshot: a
      }) : this._snapshotData[r] = a;
  }
  clear() {
    this._snapshotData = this._initialData, this._counters = /* @__PURE__ */ new Map(), this.added = 0, this.matched = 0, this.unmatched = 0, this.updated = 0, this._dirty = !1;
  }
  async save() {
    const r = Object.keys(this._snapshotData).length, a = this._inlineSnapshots.length, c = this._rawSnapshots.length, u = !r && !a && !c, s = {
      deleted: !1,
      saved: !1
    };
    return (this._dirty || this._uncheckedKeys.size) && !u ? (r && (await NM(this._environment, this._snapshotData, this.snapshotPath), this._fileExists = !0), a && await b$(this._environment, this._inlineSnapshots), c && await C$(this._environment, this._rawSnapshots), s.saved = !0) : !r && this._fileExists && (this._updateSnapshot === "all" && (await this._environment.removeSnapshotFile(this.snapshotPath), this._fileExists = !1), s.deleted = !0), s;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    this._updateSnapshot === "all" && this._uncheckedKeys.size && (this._dirty = !0, this._uncheckedKeys.forEach((r) => delete this._snapshotData[r]), this._uncheckedKeys.clear());
  }
  match({
    testName: r,
    received: a,
    key: c,
    inlineSnapshot: u,
    isInline: s,
    error: d,
    rawSnapshot: m
  }) {
    this._counters.set(r, (this._counters.get(r) || 0) + 1);
    const y = Number(this._counters.get(r));
    c || (c = EM(r, y)), s && this._snapshotData[c] !== void 0 || this._uncheckedKeys.delete(c);
    let E = m && typeof a == "string" ? a : RM(a, void 0, this._snapshotFormat);
    m || (E = xM(E)), m && m.content && m.content.match(/\r\n/) && !E.match(/\r\n/) && (m.content = qm(m.content));
    const b = s ? u : m ? m.content : this._snapshotData[c], x = rS(b), R = x === rS(E), j = b !== void 0, U = s || this._fileExists || m && m.content != null;
    return R && !s && !m && (this._snapshotData[c] = E), j && this._updateSnapshot === "all" || (!j || !U) && (this._updateSnapshot === "new" || this._updateSnapshot === "all") ? (this._updateSnapshot === "all" ? R ? this.matched++ : (j ? this.updated++ : this.added++, this._addSnapshot(c, E, { error: d, isInline: s, rawSnapshot: m })) : (this._addSnapshot(c, E, { error: d, isInline: s, rawSnapshot: m }), this.added++), {
      actual: "",
      count: y,
      expected: "",
      key: c,
      pass: !0
    }) : R ? (this.matched++, {
      actual: "",
      count: y,
      expected: "",
      key: c,
      pass: !0
    }) : (this.unmatched++, {
      actual: tS(E),
      count: y,
      expected: x !== void 0 ? tS(x) : void 0,
      key: c,
      pass: !1
    });
  }
  async pack() {
    const r = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: !1,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    }, a = this.getUncheckedCount(), c = this.getUncheckedKeys();
    a && this.removeUncheckedKeys();
    const u = await this.save();
    return r.fileDeleted = u.deleted, r.added = this.added, r.matched = this.matched, r.unmatched = this.unmatched, r.updated = this.updated, r.unchecked = u.deleted ? 0 : a, r.uncheckedKeys = Array.from(c), r;
  }
}
function pS(t, r, a, c) {
  const u = new Error(t);
  return Object.defineProperty(u, "actual", {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(u, "expected", {
    value: c,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(u, "diffOptions", { value: { expand: r } }), u;
}
class R$ {
  constructor(r = {}) {
    Pt(this, "filepath");
    Pt(this, "name");
    Pt(this, "snapshotState");
    Pt(this, "snapshotStateMap", /* @__PURE__ */ new Map());
    this.options = r;
  }
  async startCurrentRun(r, a, c) {
    var u;
    this.filepath = r, this.name = a, ((u = this.snapshotState) == null ? void 0 : u.testFilePath) !== r && (await this.finishCurrentRun(), this.getSnapshotState(r) || this.snapshotStateMap.set(
      r,
      await Hm.create(
        r,
        c
      )
    ), this.snapshotState = this.getSnapshotState(r));
  }
  getSnapshotState(r) {
    return this.snapshotStateMap.get(r);
  }
  clearTest() {
    this.filepath = void 0, this.name = void 0;
  }
  skipTestSnapshots(r) {
    var a;
    (a = this.snapshotState) == null || a.markSnapshotsAsCheckedForTest(r);
  }
  assert(r) {
    var a, c, u, s;
    const {
      filepath: d = this.filepath,
      name: m = this.name,
      message: y,
      isInline: E = !1,
      properties: b,
      inlineSnapshot: x,
      error: R,
      errorMessage: j,
      rawSnapshot: U
    } = r;
    let { received: q } = r;
    if (!d)
      throw new Error("Snapshot cannot be used outside of test");
    if (typeof b == "object") {
      if (typeof q != "object" || !q)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        if (((c = (a = this.options).isEqual) == null ? void 0 : c.call(a, q, b)) ?? !1)
          q = Vm(q, b);
        else
          throw pS("Snapshot properties mismatched", (u = this.snapshotState) == null ? void 0 : u.expand, q, b);
      } catch (se) {
        throw se.message = j || "Snapshot mismatched", se;
      }
    }
    const A = [
      m,
      ...y ? [y] : []
    ].join(" > "), ye = this.getSnapshotState(d), { actual: ee, expected: le, key: Z, pass: K } = ye.match({
      testName: A,
      received: q,
      isInline: E,
      error: R,
      inlineSnapshot: x,
      rawSnapshot: U
    });
    if (!K)
      throw pS(`Snapshot \`${Z || "unknown"}\` mismatched`, (s = this.snapshotState) == null ? void 0 : s.expand, ee == null ? void 0 : ee.trim(), le == null ? void 0 : le.trim());
  }
  async assertRaw(r) {
    if (!r.rawSnapshot)
      throw new Error("Raw snapshot is required");
    const {
      filepath: a = this.filepath,
      rawSnapshot: c
    } = r;
    if (c.content == null) {
      if (!a)
        throw new Error("Snapshot cannot be used outside of test");
      const u = this.getSnapshotState(a);
      r.filepath || (r.filepath = a), c.file = await u.environment.resolveRawPath(a, c.file), c.content = await u.environment.readSnapshotFile(c.file) || void 0;
    }
    return this.assert(r);
  }
  async finishCurrentRun() {
    if (!this.snapshotState)
      return null;
    const r = await this.snapshotState.pack();
    return this.snapshotState = void 0, r;
  }
  clear() {
    this.snapshotStateMap.clear();
  }
}
function O$(t, r = " > ") {
  return yE(t).join(r);
}
function N$(t = "") {
  return !t || !t.includes("\\") ? t : t.replace(/\\/g, "/");
}
const M$ = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function $$() {
  return typeof process < "u" ? process.cwd().replace(/\\/g, "/") : "/";
}
const A$ = function(...t) {
  t = t.map((c) => N$(c));
  let r = "", a = !1;
  for (let c = t.length - 1; c >= -1 && !a; c--) {
    const u = c >= 0 ? t[c] : $$();
    !u || u.length === 0 || (r = `${u}/${r}`, a = hS(u));
  }
  return r = D$(r, !a), a && !hS(r) ? `/${r}` : r.length > 0 ? r : ".";
};
function D$(t, r) {
  let a = "", c = 0, u = -1, s = 0, d = null;
  for (let m = 0; m <= t.length; ++m) {
    if (m < t.length)
      d = t[m];
    else {
      if (d === "/")
        break;
      d = "/";
    }
    if (d === "/") {
      if (!(u === m - 1 || s === 1))
        if (s === 2) {
          if (a.length < 2 || c !== 2 || a[a.length - 1] !== "." || a[a.length - 2] !== ".") {
            if (a.length > 2) {
              const y = a.lastIndexOf("/");
              y === -1 ? (a = "", c = 0) : (a = a.slice(0, y), c = a.length - 1 - a.lastIndexOf("/")), u = m, s = 0;
              continue;
            } else if (a.length > 0) {
              a = "", c = 0, u = m, s = 0;
              continue;
            }
          }
          r && (a += a.length > 0 ? "/.." : "..", c = 2);
        } else
          a.length > 0 ? a += `/${t.slice(u + 1, m)}` : a = t.slice(u + 1, m), c = m - u - 1;
      u = m, s = 0;
    } else
      d === "." && s !== -1 ? ++s : s = -1;
  }
  return a;
}
const hS = function(t) {
  return M$.test(t);
}, mS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", P$ = new Uint8Array(64), j$ = new Uint8Array(128);
for (let t = 0; t < mS.length; t++) {
  const r = mS.charCodeAt(t);
  P$[t] = r, j$[r] = t;
}
var vS;
(function(t) {
  t[t.Empty = 1] = "Empty", t[t.Hash = 2] = "Hash", t[t.Query = 3] = "Query", t[t.RelativePath = 4] = "RelativePath", t[t.AbsolutePath = 5] = "AbsolutePath", t[t.SchemeRelative = 6] = "SchemeRelative", t[t.Absolute = 7] = "Absolute";
})(vS || (vS = {}));
const P1 = /^\s*at .*(\S+:\d+|\(native\))/m, k$ = /^(eval@)?(\[native code])?$/;
function j1(t) {
  if (!t.includes(":"))
    return [t];
  const a = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/^\(|\)$/g, ""));
  if (!a)
    return [t];
  let c = a[1];
  return (c.startsWith("http:") || c.startsWith("https:")) && (c = new URL(c).pathname), c.startsWith("/@fs/") && (c = c.slice(typeof process < "u" && process.platform === "win32" ? 5 : 4)), [c, a[2] || void 0, a[3] || void 0];
}
function z$(t) {
  let r = t.trim();
  if (k$.test(r) || (r.includes(" > eval") && (r = r.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !r.includes("@") && !r.includes(":")))
    return null;
  const a = /((.*".+"[^@]*)?[^@]*)(?:@)/, c = r.match(a), u = c && c[1] ? c[1] : void 0, [s, d, m] = j1(r.replace(a, ""));
  return !s || !d || !m ? null : {
    file: s,
    method: u || "",
    line: Number.parseInt(d),
    column: Number.parseInt(m)
  };
}
function L$(t) {
  const r = t.trim();
  return P1.test(r) ? F$(r) : z$(r);
}
function F$(t) {
  let r = t.trim();
  if (!P1.test(r))
    return null;
  r.includes("(eval ") && (r = r.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let a = r.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const c = a.match(/ (\(.+\)$)/);
  a = c ? a.replace(c[0], "") : a;
  const [u, s, d] = j1(c ? c[1] : a);
  let m = c && a || "", y = u && ["eval", "<anonymous>"].includes(u) ? void 0 : u;
  return !y || !s || !d ? null : (m.startsWith("async ") && (m = m.slice(6)), y.startsWith("file://") && (y = y.slice(7)), y = A$(y), m && (m = m.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: m,
    file: y,
    line: Number.parseInt(s),
    column: Number.parseInt(d)
  });
}
const di = Date;
let Sm = null;
class lo extends di {
  constructor(r, a, c, u, s, d, m) {
    super();
    let y;
    switch (arguments.length) {
      case 0:
        Sm !== null ? y = new di(Sm.valueOf()) : y = new di();
        break;
      case 1:
        y = new di(r);
        break;
      default:
        c = typeof c > "u" ? 1 : c, u = u || 0, s = s || 0, d = d || 0, m = m || 0, y = new di(r, a, c, u, s, d, m);
        break;
    }
    return Object.setPrototypeOf(y, lo.prototype), y;
  }
}
lo.UTC = di.UTC;
lo.now = function() {
  return new lo().valueOf();
};
lo.parse = function(t) {
  return di.parse(t);
};
lo.toString = function() {
  return di.toString();
};
function U$(t) {
  const r = new di(t.valueOf());
  if (Number.isNaN(r.getTime()))
    throw new TypeError(`mockdate: The time set is an invalid date: ${t}`);
  globalThis.Date = lo, Sm = r.valueOf();
}
function B$() {
  globalThis.Date = di;
}
function I$(t, r = !1) {
  const a = [
    // Vitest
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    // yarn's .store folder
    /vitest-virtual-\w+\/dist/,
    // cnpm
    /@vitest\/dist/,
    // don't clear mocks
    ...r ? [] : [/^mock:/]
  ];
  t.forEach((c, u) => {
    a.some((s) => s.test(u)) || t.invalidateModule(c);
  });
}
function q$() {
  const { setTimeout: t } = ed();
  return new Promise((r) => t(r, 0));
}
async function k1() {
  await q$();
  const t = Dm(), r = [];
  let a = 0;
  for (const c of t.moduleCache.values())
    c.promise && !c.evaluated && r.push(c.promise), c.resolving && a++;
  !r.length && !a || (await Promise.allSettled(r), await k1());
}
function V$(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var z1 = { exports: {} };
(function(t, r) {
  (function() {
    (function(a) {
      return typeof V$ == "function" ? t.exports = a : chai.use(a);
    })(function(a, c) {
      var u = a.Assertion, s = u.prototype;
      u.addMethod("containSubset", function(m) {
        var y = c.flag(this, "object"), E = a.config.showDiff;
        s.assert.call(
          this,
          d(m, y),
          "expected #{act} to contain subset #{exp}",
          "expected #{act} to not contain subset #{exp}",
          m,
          y,
          E
        );
      }), a.assert.containSubset = function(m, y, E) {
        new a.Assertion(m, E).to.be.containSubset(y);
      };
      function d(m, y) {
        if (m === y)
          return !0;
        if (typeof y != typeof m)
          return !1;
        if (typeof m != "object" || m === null)
          return m === y;
        if (m && !y)
          return !1;
        if (Array.isArray(m)) {
          if (typeof y.length != "number")
            return !1;
          var E = Array.prototype.slice.call(y);
          return m.every(function(b) {
            return E.some(function(x) {
              return d(b, x);
            });
          });
        }
        return m instanceof Date ? y instanceof Date ? m.getTime() === y.getTime() : !1 : Object.keys(m).every(function(b) {
          var x = m[b], R = y[b];
          return typeof x == "object" && x !== null && R !== null ? d(x, R) : typeof x == "function" ? x(R) : R === x;
        });
      }
    });
  }).call(ec);
})(z1);
var H$ = z1.exports, Y$ = /* @__PURE__ */ uO(H$);
const yS = Symbol.for("matchers-object"), Q$ = Symbol.for("$$jest-matchers-object"), K$ = Symbol.for("expect-global"), G$ = Symbol.for("asymmetric-matchers-object");
if (!Object.prototype.hasOwnProperty.call(globalThis, yS)) {
  const t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, yS, {
    get: () => t
  }), Object.defineProperty(globalThis, Q$, {
    configurable: !0,
    get: () => ({
      state: t.get(globalThis[K$]),
      matchers: r
    })
  }), Object.defineProperty(globalThis, G$, {
    get: () => a
  });
}
function W$(t, r) {
  return t && r instanceof Promise && (r = r.finally(() => {
    const a = t.promises.indexOf(r);
    a !== -1 && t.promises.splice(a, 1);
  }), t.promises || (t.promises = []), t.promises.push(r)), r;
}
let nm;
function qs() {
  return nm || (nm = new R$({
    isEqual: (t, r) => Xt(t, r, [mr, od])
  })), nm;
}
function gS(t, r) {
  if (typeof t != "function") {
    if (!r)
      throw new Error(`expected must be a function, received ${typeof t}`);
    return t;
  }
  try {
    t();
  } catch (a) {
    return a;
  }
  throw new Error("snapshot function didn't throw");
}
const J$ = (t, r) => {
  const a = (c) => {
    var u;
    return c ? {
      filepath: (u = c.file) == null ? void 0 : u.filepath,
      name: yE(c).slice(1).join(" > ")
    } : {};
  };
  for (const c of ["matchSnapshot", "toMatchSnapshot"])
    r.addMethod(
      t.Assertion.prototype,
      c,
      function(u, s) {
        const d = r.flag(this, "object"), m = r.flag(this, "vitest-test");
        typeof u == "string" && typeof s > "u" && (s = u, u = void 0);
        const y = r.flag(this, "message");
        qs().assert({
          received: d,
          message: s,
          isInline: !1,
          properties: u,
          errorMessage: y,
          ...a(m)
        });
      }
    );
  r.addMethod(
    t.Assertion.prototype,
    "toMatchFileSnapshot",
    function(c, u) {
      const s = r.flag(this, "object"), d = r.flag(this, "vitest-test"), m = r.flag(this, "message"), y = qs().assertRaw({
        received: s,
        message: u,
        isInline: !1,
        rawSnapshot: {
          file: c
        },
        errorMessage: m,
        ...a(d)
      });
      return W$(d, y);
    }
  ), r.addMethod(
    t.Assertion.prototype,
    "toMatchInlineSnapshot",
    function(u, s, d) {
      var m;
      const y = r.flag(this, "vitest-test");
      if (y && (y.each || ((m = y.suite) == null ? void 0 : m.each)))
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const b = r.flag(this, "object"), x = r.flag(this, "error");
      typeof u == "string" && (d = s, s = u, u = void 0), s && (s = dS(s));
      const R = r.flag(this, "message");
      qs().assert({
        received: b,
        message: d,
        isInline: !0,
        properties: u,
        inlineSnapshot: s,
        error: x,
        errorMessage: R,
        ...a(y)
      });
    }
  ), r.addMethod(
    t.Assertion.prototype,
    "toThrowErrorMatchingSnapshot",
    function(c) {
      const u = r.flag(this, "object"), s = r.flag(this, "vitest-test"), d = r.flag(this, "promise"), m = r.flag(this, "message");
      qs().assert({
        received: gS(u, d),
        message: c,
        errorMessage: m,
        ...a(s)
      });
    }
  ), r.addMethod(
    t.Assertion.prototype,
    "toThrowErrorMatchingInlineSnapshot",
    function(u, s) {
      var d;
      const m = r.flag(this, "vitest-test");
      if (m && (m.each || ((d = m.suite) == null ? void 0 : d.each)))
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const E = r.flag(this, "object"), b = r.flag(this, "error"), x = r.flag(this, "promise"), R = r.flag(this, "message");
      u && (u = dS(u)), qs().assert({
        received: gS(E, x),
        message: s,
        inlineSnapshot: u,
        isInline: !0,
        error: b,
        errorMessage: R,
        ...a(m)
      });
    }
  ), r.addMethod(
    t.expect,
    "addSnapshotSerializer",
    bM
  );
};
ic(MO);
ic(RO);
ic(Y$);
ic(J$);
ic(CO);
function X$(t) {
  var r;
  const a = (d, m) => {
    const { assertionCalls: y } = El(a);
    Wh({ assertionCalls: y + 1, soft: !1 }, a);
    const E = Gh(d, m), b = t || QC();
    return b ? E.withTest(b) : E;
  };
  Object.assign(a, Gh), Object.assign(a, globalThis[Lm]), a.getState = () => El(a), a.setState = (d) => Wh(d, a);
  const c = El(globalThis[ac]) || {};
  Wh({
    // this should also add "snapshotState" that is added conditionally
    ...c,
    assertionCalls: 0,
    isExpectingAssertions: !1,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: tR(),
    testPath: t ? (r = t.suite.file) == null ? void 0 : r.filepath : c.testPath,
    currentTestName: t ? O$(t) : c.currentTestName
  }, a), a.extend = (d) => Gh.extend(a, d), a.soft = (...d) => {
    const m = a(...d);
    return a.setState({
      soft: !0
    }), m;
  }, a.unreachable = (d) => {
    oO.fail(`expected${d ? ` "${d}" ` : " "}not to be reached`);
  };
  function u(d) {
    const m = () => new Error(`expected number of assertions to be ${d}, but got ${a.getState().assertionCalls}`);
    Error.captureStackTrace && Error.captureStackTrace(m(), u), a.setState({
      expectedAssertionsNumber: d,
      expectedAssertionsNumberErrorGen: m
    });
  }
  function s() {
    const d = new Error("expected any number of assertion, but got none");
    Error.captureStackTrace && Error.captureStackTrace(d, s), a.setState({
      isExpectingAssertions: !0,
      isExpectingAssertionsError: d
    });
  }
  return Gf.addMethod(a, "assertions", u), Gf.addMethod(a, "hasAssertions", s), a;
}
const Em = X$();
Object.defineProperty(globalThis, ac, {
  value: Em,
  writable: !0,
  configurable: !0
});
var Qf;
typeof ec < "u" ? Qf = ec : typeof window < "u" ? Qf = window : Qf = self;
var Z$ = Qf;
let Tm;
try {
  ({}).__proto__, Tm = !1;
} catch {
  Tm = !0;
}
var eA = Tm, tA = Function.call, nA = eA, L1 = [
  // ignore size because it throws from Map
  "size",
  "caller",
  "callee",
  "arguments"
];
nA && L1.push("__proto__");
var Nl = function(r) {
  return Object.getOwnPropertyNames(r).reduce(
    function(a, c) {
      return L1.includes(c) || typeof r[c] != "function" || (a[c] = tA.bind(r[c])), a;
    },
    /* @__PURE__ */ Object.create(null)
  );
}, rA = Nl, ld = rA(Array.prototype), iA = ld.every;
function aA(t, r) {
  return t[r.id] === void 0 && (t[r.id] = 0), t[r.id] < r.callCount;
}
function oA(t, r, a, c) {
  var u = !0;
  return a !== c.length - 1 && (u = r.calledBefore(c[a + 1])), aA(t, r) && u ? (t[r.id] += 1, !0) : !1;
}
function uA(t) {
  var r = {}, a = arguments.length > 1 ? arguments : t;
  return iA(a, oA.bind(null, r));
}
var lA = uA, F1 = function(r) {
  if (!r)
    return "";
  try {
    return r.displayName || r.name || // Use function decomposition as a last resort to get function
    // name. Does not rely on function decomposition to work - if it
    // doesn't debugging will be slightly less informative
    // (i.e. toString will say 'spy' rather than 'myFunc').
    (String(r).match(/function ([^\s(]+)/) || [])[1];
  } catch {
    return "";
  }
}, sA = F1;
function cA(t) {
  return t.constructor && t.constructor.name || // The next branch is for IE11 support only:
  // Because the name property is not set on the prototype
  // of the Function object, we finally try to grab the
  // name from its definition. This will never be reached
  // in node, so we are not able to test this properly.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  typeof t.constructor == "function" && /* istanbul ignore next */
  sA(t.constructor) || null;
}
var fA = cA, U1 = {};
(function(t) {
  t.wrap = function(r, a) {
    var c = function() {
      return t.printWarning(a), r.apply(this, arguments);
    };
    return r.prototype && (c.prototype = r.prototype), c;
  }, t.defaultMsg = function(r, a) {
    return `${r}.${a} is deprecated and will be removed from the public API in a future version of ${r}.`;
  }, t.printWarning = function(r) {
    typeof process == "object" && process.emitWarning ? process.emitWarning(r) : console.info ? console.info(r) : console.log(r);
  };
})(U1);
var dA = function(r, a) {
  var c = !0;
  try {
    r.forEach(function() {
      if (!a.apply(this, arguments))
        throw new Error();
    });
  } catch {
    c = !1;
  }
  return c;
}, pA = ld.sort, hA = ld.slice;
function mA(t, r) {
  var a = t.getCall(0), c = r.getCall(0), u = a && a.callId || -1, s = c && c.callId || -1;
  return u < s ? -1 : 1;
}
function vA(t) {
  return pA(hA(t), mA);
}
var yA = vA, gA = Nl, bA = gA(Function.prototype), SA = Nl, EA = SA(Map.prototype), TA = Nl, wA = TA(Object.prototype), xA = Nl, _A = xA(Set.prototype), CA = Nl, RA = CA(String.prototype), OA = {
  array: ld,
  function: bA,
  map: EA,
  object: wA,
  set: _A,
  string: RA
}, B1 = { exports: {} };
(function(t, r) {
  (function(a, c) {
    t.exports = c();
  })(ec, function() {
    var a = typeof Promise == "function", c = typeof self == "object" ? self : ec, u = typeof Symbol < "u", s = typeof Map < "u", d = typeof Set < "u", m = typeof WeakMap < "u", y = typeof WeakSet < "u", E = typeof DataView < "u", b = u && typeof Symbol.iterator < "u", x = u && typeof Symbol.toStringTag < "u", R = d && typeof Set.prototype.entries == "function", j = s && typeof Map.prototype.entries == "function", U = R && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), q = j && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), A = b && typeof Array.prototype[Symbol.iterator] == "function", ye = A && Object.getPrototypeOf([][Symbol.iterator]()), ee = b && typeof String.prototype[Symbol.iterator] == "function", le = ee && Object.getPrototypeOf(""[Symbol.iterator]()), Z = 8, K = -1;
    function se(Te) {
      var ve = typeof Te;
      if (ve !== "object")
        return ve;
      if (Te === null)
        return "null";
      if (Te === c)
        return "global";
      if (Array.isArray(Te) && (x === !1 || !(Symbol.toStringTag in Te)))
        return "Array";
      if (typeof window == "object" && window !== null) {
        if (typeof window.location == "object" && Te === window.location)
          return "Location";
        if (typeof window.document == "object" && Te === window.document)
          return "Document";
        if (typeof window.navigator == "object") {
          if (typeof window.navigator.mimeTypes == "object" && Te === window.navigator.mimeTypes)
            return "MimeTypeArray";
          if (typeof window.navigator.plugins == "object" && Te === window.navigator.plugins)
            return "PluginArray";
        }
        if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && Te instanceof window.HTMLElement) {
          if (Te.tagName === "BLOCKQUOTE")
            return "HTMLQuoteElement";
          if (Te.tagName === "TD")
            return "HTMLTableDataCellElement";
          if (Te.tagName === "TH")
            return "HTMLTableHeaderCellElement";
        }
      }
      var Ve = x && Te[Symbol.toStringTag];
      if (typeof Ve == "string")
        return Ve;
      var ce = Object.getPrototypeOf(Te);
      return ce === RegExp.prototype ? "RegExp" : ce === Date.prototype ? "Date" : a && ce === Promise.prototype ? "Promise" : d && ce === Set.prototype ? "Set" : s && ce === Map.prototype ? "Map" : y && ce === WeakSet.prototype ? "WeakSet" : m && ce === WeakMap.prototype ? "WeakMap" : E && ce === DataView.prototype ? "DataView" : s && ce === q ? "Map Iterator" : d && ce === U ? "Set Iterator" : A && ce === ye ? "Array Iterator" : ee && ce === le ? "String Iterator" : ce === null ? "Object" : Object.prototype.toString.call(Te).slice(Z, K);
    }
    return se;
  });
})(B1);
var NA = B1.exports, MA = NA, $A = function(r) {
  return MA(r).toLowerCase();
};
function AA(t) {
  return t && t.toString ? t.toString() : String(t);
}
var DA = AA, PA = {
  global: Z$,
  calledInOrder: lA,
  className: fA,
  deprecated: U1,
  every: dA,
  functionName: F1,
  orderByFirstCall: yA,
  prototypes: OA,
  typeOf: $A,
  valueToString: DA
};
const I1 = PA.global;
let yl;
if (typeof __vitest_required__ < "u")
  try {
    yl = __vitest_required__.timers;
  } catch {
  }
function Ym(t) {
  const r = Math.pow(2, 31) - 1, a = 1e12, c = function() {
  }, u = function() {
    return [];
  }, s = t.setTimeout(c, 0), d = typeof s == "object", m = t.process && typeof t.process.hrtime == "function", y = m && typeof t.process.hrtime.bigint == "function", E = t.process && typeof t.process.nextTick == "function", b = t.process && t.__vitest_required__ && t.__vitest_required__.util.promisify, x = t.performance && typeof t.performance.now == "function", R = t.Performance && (typeof t.Performance).match(/^(function|object)$/), j = t.performance && t.performance.constructor && t.performance.constructor.prototype, U = t.hasOwnProperty("queueMicrotask"), q = t.requestAnimationFrame && typeof t.requestAnimationFrame == "function", A = t.cancelAnimationFrame && typeof t.cancelAnimationFrame == "function", ye = t.requestIdleCallback && typeof t.requestIdleCallback == "function", ee = t.cancelIdleCallback && typeof t.cancelIdleCallback == "function", le = t.setImmediate && typeof t.setImmediate == "function", Z = t.Intl && typeof t.Intl == "object";
  t.clearTimeout(s);
  const K = t.Date, se = t.Intl;
  let Te = a;
  function ve(z) {
    return Number.isFinite ? Number.isFinite(z) : isFinite(z);
  }
  let Ve = !1;
  function ce(z, B) {
    z.loopLimit && B === z.loopLimit - 1 && (Ve = !0);
  }
  function Xe() {
    Ve = !1;
  }
  function ie(z) {
    if (!z)
      return 0;
    const B = z.split(":"), fe = B.length;
    let Ne = fe, P = 0, ut;
    if (fe > 3 || !/^(\d\d:){0,2}\d\d?$/.test(z))
      throw new Error(
        "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
      );
    for (; Ne--; ) {
      if (ut = parseInt(B[Ne], 10), ut >= 60)
        throw new Error(`Invalid time ${z}`);
      P += ut * Math.pow(60, fe - Ne - 1);
    }
    return P * 1e3;
  }
  function ge(z) {
    const fe = z * 1e6 % 1e6, Ne = fe < 0 ? fe + 1e6 : fe;
    return Math.floor(Ne);
  }
  function Ae(z) {
    if (!z)
      return 0;
    if (typeof z.getTime == "function")
      return z.getTime();
    if (typeof z == "number")
      return z;
    throw new TypeError("now should be milliseconds since UNIX epoch");
  }
  function et(z, B, fe) {
    return fe && fe.callAt >= z && fe.callAt <= B;
  }
  function Pe(z, B) {
    const fe = new Error(
      `Aborting after running ${z.loopLimit} timers, assuming an infinite loop!`
    );
    if (!B.error)
      return fe;
    const Ne = /target\.*[<|(|[].*?[>|\]|)]\s*/;
    let P = new RegExp(
      String(Object.keys(z).join("|"))
    );
    d && (P = new RegExp(
      `\\s+at (Object\\.)?(?:${Object.keys(z).join("|")})\\s+`
    ));
    let ut = -1;
    B.error.stack.split(`
`).some(function(Ot, un) {
      return Ot.match(Ne) ? (ut = un, !0) : Ot.match(P) ? (ut = un, !1) : ut >= 0;
    });
    const xt = `${fe}
${B.type || "Microtask"} - ${B.func.name || "anonymous"}
${B.error.stack.split(`
`).slice(ut + 1).join(`
`)}`;
    try {
      Object.defineProperty(fe, "stack", {
        value: xt
      });
    } catch {
    }
    return fe;
  }
  function Qe(z, B) {
    let fe;
    for (fe in B)
      B.hasOwnProperty(fe) && (z[fe] = B[fe]);
    return B.now ? z.now = function() {
      return z.clock.now;
    } : delete z.now, B.toSource ? z.toSource = function() {
      return B.toSource();
    } : delete z.toSource, z.toString = function() {
      return B.toString();
    }, z.prototype = B.prototype, z.parse = B.parse, z.UTC = B.UTC, z.prototype.toUTCString = B.prototype.toUTCString, z.isFake = !0, z;
  }
  function me() {
    function z(B, fe, Ne, P, ut, xt, Ot) {
      if (!(this instanceof z))
        return new K(z.clock.now).toString();
      switch (arguments.length) {
        case 0:
          return new K(z.clock.now);
        case 1:
          return new K(B);
        case 2:
          return new K(B, fe);
        case 3:
          return new K(B, fe, Ne);
        case 4:
          return new K(B, fe, Ne, P);
        case 5:
          return new K(B, fe, Ne, P, ut);
        case 6:
          return new K(
            B,
            fe,
            Ne,
            P,
            ut,
            xt
          );
        default:
          return new K(
            B,
            fe,
            Ne,
            P,
            ut,
            xt,
            Ot
          );
      }
    }
    return Qe(z, K);
  }
  function C() {
    const z = { ...se };
    return z.DateTimeFormat = function(...B) {
      const fe = new se.DateTimeFormat(...B), Ne = {};
      return ["formatRange", "formatRangeToParts", "resolvedOptions"].forEach(
        (P) => {
          Ne[P] = fe[P].bind(fe);
        }
      ), ["format", "formatToParts"].forEach((P) => {
        Ne[P] = function(ut) {
          return fe[P](ut || z.clock.now);
        };
      }), Ne;
    }, z.DateTimeFormat.prototype = Object.create(
      se.DateTimeFormat.prototype
    ), z.DateTimeFormat.supportedLocalesOf = se.DateTimeFormat.supportedLocalesOf, z;
  }
  function D(z, B) {
    z.jobs || (z.jobs = []), z.jobs.push(B);
  }
  function V(z) {
    if (z.jobs) {
      for (let B = 0; B < z.jobs.length; B++) {
        const fe = z.jobs[B];
        if (fe.func.apply(null, fe.args), ce(z, B), z.loopLimit && B > z.loopLimit)
          throw Pe(z, fe);
      }
      Xe(), z.jobs = [];
    }
  }
  function G(z, B) {
    if (B.func === void 0)
      throw new Error("Callback must be provided to timer calls");
    if (d && typeof B.func != "function")
      throw new TypeError(
        `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${B.func} of type ${typeof B.func}`
      );
    if (Ve && (B.error = new Error()), B.type = B.immediate ? "Immediate" : "Timeout", B.hasOwnProperty("delay") && (typeof B.delay != "number" && (B.delay = parseInt(B.delay, 10)), ve(B.delay) || (B.delay = 0), B.delay = B.delay > r ? 1 : B.delay, B.delay = Math.max(0, B.delay)), B.hasOwnProperty("interval") && (B.type = "Interval", B.interval = B.interval > r ? 1 : B.interval), B.hasOwnProperty("animation") && (B.type = "AnimationFrame", B.animation = !0), B.hasOwnProperty("idleCallback") && (B.type = "IdleCallback", B.idleCallback = !0), z.timers || (z.timers = {}), B.id = Te++, B.createdAt = z.now, B.callAt = z.now + (parseInt(B.delay) || (z.duringTick ? 1 : 0)), z.timers[B.id] = B, d) {
      const fe = {
        refed: !0,
        ref: function() {
          return this.refed = !0, fe;
        },
        unref: function() {
          return this.refed = !1, fe;
        },
        hasRef: function() {
          return this.refed;
        },
        refresh: function() {
          return B.callAt = z.now + (parseInt(B.delay) || (z.duringTick ? 1 : 0)), z.timers[B.id] = B, fe;
        },
        [Symbol.toPrimitive]: function() {
          return B.id;
        }
      };
      return fe;
    }
    return B.id;
  }
  function oe(z, B) {
    if (z.callAt < B.callAt)
      return -1;
    if (z.callAt > B.callAt)
      return 1;
    if (z.immediate && !B.immediate)
      return -1;
    if (!z.immediate && B.immediate)
      return 1;
    if (z.createdAt < B.createdAt)
      return -1;
    if (z.createdAt > B.createdAt)
      return 1;
    if (z.id < B.id)
      return -1;
    if (z.id > B.id)
      return 1;
  }
  function be(z, B, fe) {
    const Ne = z.timers;
    let P = null, ut, xt;
    for (ut in Ne)
      Ne.hasOwnProperty(ut) && (xt = et(B, fe, Ne[ut]), xt && (!P || oe(P, Ne[ut]) === 1) && (P = Ne[ut]));
    return P;
  }
  function re(z) {
    const B = z.timers;
    let fe = null, Ne;
    for (Ne in B)
      B.hasOwnProperty(Ne) && (!fe || oe(fe, B[Ne]) === 1) && (fe = B[Ne]);
    return fe;
  }
  function Q(z) {
    const B = z.timers;
    let fe = null, Ne;
    for (Ne in B)
      B.hasOwnProperty(Ne) && (!fe || oe(fe, B[Ne]) === -1) && (fe = B[Ne]);
    return fe;
  }
  function De(z, B) {
    if (typeof B.interval == "number" ? z.timers[B.id].callAt += B.interval : delete z.timers[B.id], typeof B.func == "function")
      B.func.apply(null, B.args);
    else {
      const fe = eval;
      (function() {
        fe(B.func);
      })();
    }
  }
  function Ge(z) {
    return z === "IdleCallback" || z === "AnimationFrame" ? `cancel${z}` : `clear${z}`;
  }
  function tt(z) {
    return z === "IdleCallback" || z === "AnimationFrame" ? `request${z}` : `set${z}`;
  }
  function ot() {
    let z = 0;
    return function(B) {
      !z++ && console.warn(B);
    };
  }
  const nt = ot();
  function Ze(z, B, fe) {
    if (!B)
      return;
    z.timers || (z.timers = {});
    const Ne = Number(B);
    if (Number.isNaN(Ne) || Ne < a) {
      const P = Ge(fe);
      if (z.shouldClearNativeTimers === !0) {
        const ut = z[`_${P}`];
        return typeof ut == "function" ? ut(B) : void 0;
      }
      nt(
        `FakeTimers: ${P} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
      );
    }
    if (z.timers.hasOwnProperty(Ne)) {
      const P = z.timers[Ne];
      if (P.type === fe || P.type === "Timeout" && fe === "Interval" || P.type === "Interval" && fe === "Timeout")
        delete z.timers[Ne];
      else {
        const ut = Ge(fe), xt = tt(P.type);
        throw new Error(
          `Cannot clear timer: timer created with ${xt}() but cleared with ${ut}()`
        );
      }
    }
  }
  function mt(z, B) {
    let fe, Ne, P;
    const ut = "_hrtime", xt = "_nextTick";
    for (Ne = 0, P = z.methods.length; Ne < P; Ne++) {
      if (fe = z.methods[Ne], fe === "hrtime" && t.process)
        t.process.hrtime = z[ut];
      else if (fe === "nextTick" && t.process)
        t.process.nextTick = z[xt];
      else if (fe === "performance") {
        const Ot = Object.getOwnPropertyDescriptor(
          z,
          `_${fe}`
        );
        Ot && Ot.get && !Ot.set ? Object.defineProperty(
          t,
          fe,
          Ot
        ) : Ot.configurable && (t[fe] = z[`_${fe}`]);
      } else if (t[fe] && t[fe].hadOwnProperty)
        t[fe] = z[`_${fe}`];
      else
        try {
          delete t[fe];
        } catch {
        }
      if (z.timersModuleMethods !== void 0)
        for (let Ot = 0; Ot < z.timersModuleMethods.length; Ot++) {
          const un = z.timersModuleMethods[Ot];
          yl[un.methodName] = un.original;
        }
    }
    return B.shouldAdvanceTime === !0 && t.clearInterval(z.attachedInterval), z.methods = [], z.timers ? Object.keys(z.timers).map(function(un) {
      return z.timers[un];
    }) : [];
  }
  function J(z, B, fe) {
    if (fe[B].hadOwnProperty = Object.prototype.hasOwnProperty.call(
      z,
      B
    ), fe[`_${B}`] = z[B], B === "Date") {
      const Ne = Qe(fe[B], z[B]);
      z[B] = Ne;
    } else if (B === "Intl")
      z[B] = fe[B];
    else if (B === "performance") {
      const Ne = Object.getOwnPropertyDescriptor(
        z,
        B
      );
      if (Ne && Ne.get && !Ne.set) {
        Object.defineProperty(
          fe,
          `_${B}`,
          Ne
        );
        const P = Object.getOwnPropertyDescriptor(
          fe,
          B
        );
        Object.defineProperty(z, B, P);
      } else
        z[B] = fe[B];
    } else
      z[B] = function() {
        return fe[B].apply(fe, arguments);
      }, Object.defineProperties(
        z[B],
        Object.getOwnPropertyDescriptors(fe[B])
      );
    z[B].clock = fe;
  }
  function gt(z, B) {
    z.tick(B);
  }
  const ct = {
    setTimeout: t.setTimeout,
    clearTimeout: t.clearTimeout,
    setInterval: t.setInterval,
    clearInterval: t.clearInterval,
    Date: t.Date
  };
  le && (ct.setImmediate = t.setImmediate, ct.clearImmediate = t.clearImmediate), m && (ct.hrtime = t.process.hrtime), E && (ct.nextTick = t.process.nextTick), x && (ct.performance = t.performance), q && (ct.requestAnimationFrame = t.requestAnimationFrame), U && (ct.queueMicrotask = !0), A && (ct.cancelAnimationFrame = t.cancelAnimationFrame), ye && (ct.requestIdleCallback = t.requestIdleCallback), ee && (ct.cancelIdleCallback = t.cancelIdleCallback), Z && (ct.Intl = t.Intl);
  const pt = t.setImmediate || t.setTimeout;
  function Zt(z, B) {
    z = Math.floor(Ae(z)), B = B || 1e3;
    let fe = 0;
    const Ne = [0, 0];
    if (K === void 0)
      throw new Error(
        "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
      );
    const P = {
      now: z,
      Date: me(),
      loopLimit: B
    };
    P.Date.clock = P;
    function ut() {
      return 16 - (P.now - z) % 16;
    }
    function xt(rt) {
      const Fe = P.now - Ne[0] - z, he = Math.floor(Fe / 1e3), _e = (Fe - he * 1e3) * 1e6 + fe - Ne[1];
      if (Array.isArray(rt)) {
        if (rt[1] > 1e9)
          throw new TypeError(
            "Number of nanoseconds can't exceed a billion"
          );
        const Me = rt[0];
        let ae = _e - rt[1], je = he - Me;
        return ae < 0 && (ae += 1e9, je -= 1), [je, ae];
      }
      return [he, _e];
    }
    function Ot() {
      const rt = xt();
      return rt[0] * 1e3 + rt[1] / 1e6;
    }
    y && (xt.bigint = function() {
      const rt = xt();
      return BigInt(rt[0]) * BigInt(1e9) + BigInt(rt[1]);
    }), Z && (P.Intl = C(), P.Intl.clock = P), P.requestIdleCallback = function(Fe, he) {
      let _e = 0;
      P.countTimers() > 0 && (_e = 50);
      const Me = G(P, {
        func: Fe,
        args: Array.prototype.slice.call(arguments, 2),
        delay: typeof he > "u" ? _e : Math.min(he, _e),
        idleCallback: !0
      });
      return Number(Me);
    }, P.cancelIdleCallback = function(Fe) {
      return Ze(P, Fe, "IdleCallback");
    }, P.setTimeout = function(Fe, he) {
      return G(P, {
        func: Fe,
        args: Array.prototype.slice.call(arguments, 2),
        delay: he
      });
    }, typeof t.Promise < "u" && b && (P.setTimeout[b.custom] = function(Fe, he) {
      return new t.Promise(function(Me) {
        G(P, {
          func: Me,
          args: [he],
          delay: Fe
        });
      });
    }), P.clearTimeout = function(Fe) {
      return Ze(P, Fe, "Timeout");
    }, P.nextTick = function(Fe) {
      return D(P, {
        func: Fe,
        args: Array.prototype.slice.call(arguments, 1),
        error: Ve ? new Error() : null
      });
    }, P.queueMicrotask = function(Fe) {
      return P.nextTick(Fe);
    }, P.setInterval = function(Fe, he) {
      return he = parseInt(he, 10), G(P, {
        func: Fe,
        args: Array.prototype.slice.call(arguments, 2),
        delay: he,
        interval: he
      });
    }, P.clearInterval = function(Fe) {
      return Ze(P, Fe, "Interval");
    }, le && (P.setImmediate = function(Fe) {
      return G(P, {
        func: Fe,
        args: Array.prototype.slice.call(arguments, 1),
        immediate: !0
      });
    }, typeof t.Promise < "u" && b && (P.setImmediate[b.custom] = function(Fe) {
      return new t.Promise(
        function(_e) {
          G(P, {
            func: _e,
            args: [Fe],
            immediate: !0
          });
        }
      );
    }), P.clearImmediate = function(Fe) {
      return Ze(P, Fe, "Immediate");
    }), P.countTimers = function() {
      return Object.keys(P.timers || {}).length + (P.jobs || []).length;
    }, P.requestAnimationFrame = function(Fe) {
      const he = G(P, {
        func: Fe,
        delay: ut(),
        get args() {
          return [Ot()];
        },
        animation: !0
      });
      return Number(he);
    }, P.cancelAnimationFrame = function(Fe) {
      return Ze(P, Fe, "AnimationFrame");
    }, P.runMicrotasks = function() {
      V(P);
    };
    function un(rt, Fe, he, _e) {
      const Me = typeof rt == "number" ? rt : ie(rt), ae = Math.floor(Me), je = ge(Me);
      let Ce = fe + je, xe = P.now + ae;
      if (Me < 0)
        throw new TypeError("Negative ticks are not supported");
      Ce >= 1e6 && (xe += 1, Ce -= 1e6), fe = Ce;
      let $ = P.now, N = P.now, k, Oe, Se, We, Ie, St;
      P.duringTick = !0, Se = P.now, V(P), Se !== P.now && ($ += P.now - Se, xe += P.now - Se);
      function Et() {
        for (k = be(P, $, xe); k && $ <= xe; ) {
          if (P.timers[k.id]) {
            $ = k.callAt, P.now = k.callAt, Se = P.now;
            try {
              V(P), De(P, k);
            } catch (Nt) {
              Oe = Oe || Nt;
            }
            if (Fe) {
              pt(We);
              return;
            }
            Ie();
          }
          St();
        }
        if (Se = P.now, V(P), Se !== P.now && ($ += P.now - Se, xe += P.now - Se), P.duringTick = !1, k = be(P, $, xe), k)
          try {
            P.tick(xe - P.now);
          } catch (Nt) {
            Oe = Oe || Nt;
          }
        else
          P.now = xe, fe = Ce;
        if (Oe)
          throw Oe;
        if (Fe)
          he(P.now);
        else
          return P.now;
      }
      return We = Fe && function() {
        try {
          Ie(), St(), Et();
        } catch (Nt) {
          _e(Nt);
        }
      }, Ie = function() {
        Se !== P.now && ($ += P.now - Se, xe += P.now - Se, N += P.now - Se);
      }, St = function() {
        k = be(P, N, xe), N = $;
      }, Et();
    }
    return P.tick = function(Fe) {
      return un(Fe, !1);
    }, typeof t.Promise < "u" && (P.tickAsync = function(Fe) {
      return new t.Promise(function(he, _e) {
        pt(function() {
          try {
            un(Fe, !0, he, _e);
          } catch (Me) {
            _e(Me);
          }
        });
      });
    }), P.next = function() {
      V(P);
      const Fe = re(P);
      if (!Fe)
        return P.now;
      P.duringTick = !0;
      try {
        return P.now = Fe.callAt, De(P, Fe), V(P), P.now;
      } finally {
        P.duringTick = !1;
      }
    }, typeof t.Promise < "u" && (P.nextAsync = function() {
      return new t.Promise(function(Fe, he) {
        pt(function() {
          try {
            const _e = re(P);
            if (!_e) {
              Fe(P.now);
              return;
            }
            let Me;
            P.duringTick = !0, P.now = _e.callAt;
            try {
              De(P, _e);
            } catch (ae) {
              Me = ae;
            }
            P.duringTick = !1, pt(function() {
              Me ? he(Me) : Fe(P.now);
            });
          } catch (_e) {
            he(_e);
          }
        });
      });
    }), P.runAll = function() {
      let Fe, he;
      for (V(P), he = 0; he < P.loopLimit; he++) {
        if (!P.timers || (Fe = Object.keys(P.timers).length, Fe === 0))
          return Xe(), P.now;
        P.next(), ce(P, he);
      }
      const _e = re(P);
      throw Pe(P, _e);
    }, P.runToFrame = function() {
      return P.tick(ut());
    }, typeof t.Promise < "u" && (P.runAllAsync = function() {
      return new t.Promise(function(Fe, he) {
        let _e = 0;
        function Me() {
          pt(function() {
            try {
              let ae;
              if (_e < P.loopLimit) {
                if (!P.timers) {
                  Xe(), Fe(P.now);
                  return;
                }
                if (ae = Object.keys(
                  P.timers
                ).length, ae === 0) {
                  Xe(), Fe(P.now);
                  return;
                }
                P.next(), _e++, Me(), ce(P, _e);
                return;
              }
              const je = re(P);
              he(Pe(P, je));
            } catch (ae) {
              he(ae);
            }
          });
        }
        Me();
      });
    }), P.runToLast = function() {
      const Fe = Q(P);
      return Fe ? P.tick(Fe.callAt - P.now) : (V(P), P.now);
    }, typeof t.Promise < "u" && (P.runToLastAsync = function() {
      return new t.Promise(function(Fe, he) {
        pt(function() {
          try {
            const _e = Q(P);
            _e || Fe(P.now), Fe(P.tickAsync(_e.callAt - P.now));
          } catch (_e) {
            he(_e);
          }
        });
      });
    }), P.reset = function() {
      fe = 0, P.timers = {}, P.jobs = [], P.now = z;
    }, P.setSystemTime = function(Fe) {
      const he = Ae(Fe), _e = he - P.now;
      let Me, ae;
      Ne[0] = Ne[0] + _e, Ne[1] = Ne[1] + fe, P.now = he, fe = 0;
      for (Me in P.timers)
        P.timers.hasOwnProperty(Me) && (ae = P.timers[Me], ae.createdAt += _e, ae.callAt += _e);
    }, P.jump = function(Fe) {
      const he = typeof Fe == "number" ? Fe : ie(Fe), _e = Math.floor(he);
      for (const Me of Object.values(P.timers))
        P.now + _e > Me.callAt && (Me.callAt = P.now + _e);
      P.tick(_e);
    }, x && (P.performance = /* @__PURE__ */ Object.create(null), P.performance.now = Ot), m && (P.hrtime = xt), P;
  }
  function In(z) {
    if (arguments.length > 1 || z instanceof Date || Array.isArray(z) || typeof z == "number")
      throw new TypeError(
        `FakeTimers.install called with ${String(
          z
        )} install requires an object parameter`
      );
    if (t.Date.isFake === !0)
      throw new TypeError(
        "Can't install fake timers twice on the same global object."
      );
    if (z = typeof z < "u" ? z : {}, z.shouldAdvanceTime = z.shouldAdvanceTime || !1, z.advanceTimeDelta = z.advanceTimeDelta || 20, z.shouldClearNativeTimers = z.shouldClearNativeTimers || !1, z.target)
      throw new TypeError(
        "config.target is no longer supported. Use `withGlobal(target)` instead."
      );
    let B, fe;
    const Ne = Zt(z.now, z.loopLimit);
    if (Ne.shouldClearNativeTimers = z.shouldClearNativeTimers, Ne.uninstall = function() {
      return mt(Ne, z);
    }, Ne.methods = z.toFake || [], Ne.methods.length === 0 && (Ne.methods = Object.keys(ct).filter(function(P) {
      return P !== "nextTick" && P !== "queueMicrotask";
    })), z.shouldAdvanceTime === !0) {
      const P = gt.bind(
        null,
        Ne,
        z.advanceTimeDelta
      ), ut = t.setInterval(
        P,
        z.advanceTimeDelta
      );
      Ne.attachedInterval = ut;
    }
    if (Ne.methods.includes("performance")) {
      const P = (() => {
        if (j)
          return t.performance.constructor.prototype;
        if (R)
          return t.Performance.prototype;
      })();
      if (P)
        Object.getOwnPropertyNames(P).forEach(function(ut) {
          ut !== "now" && (Ne.performance[ut] = ut.indexOf("getEntries") === 0 ? u : c);
        });
      else if ((z.toFake || []).includes("performance"))
        throw new ReferenceError(
          "non-existent performance object cannot be faked"
        );
    }
    for (t === I1 && yl && (Ne.timersModuleMethods = []), B = 0, fe = Ne.methods.length; B < fe; B++) {
      const P = Ne.methods[B];
      if (P === "hrtime" ? t.process && typeof t.process.hrtime == "function" && J(t.process, P, Ne) : P === "nextTick" ? t.process && typeof t.process.nextTick == "function" && J(t.process, P, Ne) : J(t, P, Ne), Ne.timersModuleMethods !== void 0 && yl[P]) {
        const ut = yl[P];
        Ne.timersModuleMethods.push({
          methodName: P,
          original: ut
        }), yl[P] = t[P];
      }
    }
    return Ne;
  }
  return {
    timers: ct,
    createClock: Zt,
    install: In,
    withGlobal: Ym
  };
}
const Qm = Ym(I1);
Qm.timers;
Qm.createClock;
Qm.install;
var jA = Ym;
class kA {
  constructor({
    global: r,
    config: a
  }) {
    Pt(this, "_clock");
    Pt(this, "_fakingTime");
    Pt(this, "_fakingDate");
    Pt(this, "_fakeTimers");
    Pt(this, "_userConfig");
    Pt(this, "_now", di.now);
    this._userConfig = a, this._fakingDate = !1, this._fakingTime = !1, this._fakeTimers = jA(r);
  }
  clearAllTimers() {
    this._fakingTime && this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    this._checkFakeTimers() && this._clock.runAll();
  }
  async runAllTimersAsync() {
    this._checkFakeTimers() && await this._clock.runAllAsync();
  }
  runOnlyPendingTimers() {
    this._checkFakeTimers() && this._clock.runToLast();
  }
  async runOnlyPendingTimersAsync() {
    this._checkFakeTimers() && await this._clock.runToLastAsync();
  }
  advanceTimersToNextTimer(r = 1) {
    if (this._checkFakeTimers())
      for (let a = r; a > 0 && (this._clock.next(), this._clock.tick(0), this._clock.countTimers() !== 0); a--)
        ;
  }
  async advanceTimersToNextTimerAsync(r = 1) {
    if (this._checkFakeTimers())
      for (let a = r; a > 0 && (await this._clock.nextAsync(), this._clock.tick(0), this._clock.countTimers() !== 0); a--)
        ;
  }
  advanceTimersByTime(r) {
    this._checkFakeTimers() && this._clock.tick(r);
  }
  async advanceTimersByTimeAsync(r) {
    this._checkFakeTimers() && await this._clock.tickAsync(r);
  }
  runAllTicks() {
    this._checkFakeTimers() && this._clock.runMicrotasks();
  }
  useRealTimers() {
    this._fakingDate && (B$(), this._fakingDate = !1), this._fakingTime && (this._clock.uninstall(), this._fakingTime = !1);
  }
  useFakeTimers() {
    var r, a;
    if (this._fakingDate)
      throw new Error(
        '"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.'
      );
    if (!this._fakingTime) {
      const c = Object.keys(this._fakeTimers.timers).filter((u) => u !== "nextTick");
      if ((a = (r = this._userConfig) == null ? void 0 : r.toFake) != null && a.includes("nextTick") && globalThis.__vitest_worker__.isChildProcess)
        throw new Error("process.nextTick cannot be mocked inside child_process");
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        toFake: c,
        ...this._userConfig
      }), this._fakingTime = !0;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: r } = this._clock;
      this._clock.reset(), this._clock.setSystemTime(r);
    }
  }
  setSystemTime(r) {
    this._fakingTime ? this._clock.setSystemTime(r) : (U$(r ?? this.getRealSystemTime()), this._fakingDate = !0);
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    return this._checkFakeTimers() ? this._clock.countTimers() : 0;
  }
  configure(r) {
    this._userConfig = r;
  }
  isFakeTimers() {
    return this._fakingTime;
  }
  _checkFakeTimers() {
    if (!this._fakingTime)
      throw new Error(
        'Timers are not mocked. Try calling "vi.useFakeTimers()" first.'
      );
    return this._fakingTime;
  }
}
function q1(t, r) {
  return r.stack !== void 0 && (t.stack = r.stack.replace(r.message, t.message)), t;
}
function zA(t, r = {}) {
  const { setTimeout: a, setInterval: c, clearTimeout: u, clearInterval: s } = ed(), { interval: d = 50, timeout: m = 1e3 } = typeof r == "number" ? { timeout: r } : r, y = new Error("STACK_TRACE_ERROR");
  return new Promise((E, b) => {
    let x, R = "idle", j, U;
    const q = (ee) => {
      j && u(j), U && s(U), E(ee);
    }, A = () => {
      let ee = x;
      ee || (ee = q1(new Error("Timed out in waitFor!"), y)), b(ee);
    }, ye = () => {
      if (Xf.isFakeTimers() && Xf.advanceTimersByTime(d), R !== "pending")
        try {
          const ee = t();
          if (ee !== null && typeof ee == "object" && typeof ee.then == "function") {
            const le = ee;
            R = "pending", le.then(
              (Z) => {
                R = "resolved", q(Z);
              },
              (Z) => {
                R = "rejected", x = Z;
              }
            );
          } else
            return q(ee), !0;
        } catch (ee) {
          x = ee;
        }
    };
    ye() !== !0 && (j = a(A, m), U = c(ye, d));
  });
}
function LA(t, r = {}) {
  const { setTimeout: a, setInterval: c, clearTimeout: u, clearInterval: s } = ed(), { interval: d = 50, timeout: m = 1e3 } = typeof r == "number" ? { timeout: r } : r, y = new Error("STACK_TRACE_ERROR");
  return new Promise((E, b) => {
    let x = "idle", R, j;
    const U = (ye) => {
      ye || (ye = q1(new Error("Timed out in waitUntil!"), y)), b(ye);
    }, q = (ye) => {
      if (ye)
        return R && u(R), j && s(j), E(ye), !0;
    }, A = () => {
      if (Xf.isFakeTimers() && Xf.advanceTimersByTime(d), x !== "pending")
        try {
          const ye = t();
          if (ye !== null && typeof ye == "object" && typeof ye.then == "function") {
            const ee = ye;
            x = "pending", ee.then(
              (le) => {
                x = "resolved", q(le);
              },
              (le) => {
                x = "rejected", U(le);
              }
            );
          } else
            return q(ye);
        } catch (ye) {
          U(ye);
        }
    };
    A() !== !0 && (R = a(U, m), j = c(A, d));
  });
}
function FA() {
  const t = typeof __vitest_mocker__ < "u" ? __vitest_mocker__ : new Proxy({}, {
    get(E, b) {
      throw new Error(
        `Vitest mocker was not initialized in this environment. vi.${String(b)}() is forbidden.`
      );
    }
  });
  let r = null, a = null;
  const c = Dm(), u = new kA({
    global: globalThis,
    config: c.config.fakeTimers
  }), s = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), m = () => {
    const b = Z_({ stackTraceLimit: 4 }).split(`
`)[4], x = L$(b);
    return (x == null ? void 0 : x.file) || "";
  }, y = {
    useFakeTimers(E) {
      var b, x, R, j;
      if (c.isChildProcess && ((b = E == null ? void 0 : E.toFake) != null && b.includes("nextTick") || (j = (R = (x = c.config) == null ? void 0 : x.fakeTimers) == null ? void 0 : R.toFake) != null && j.includes("nextTick")))
        throw new Error(
          'vi.useFakeTimers({ toFake: ["nextTick"] }) is not supported in node:child_process. Use --pool=threads if mocking nextTick is required.'
        );
      return E ? u.configure({ ...c.config.fakeTimers, ...E }) : u.configure(c.config.fakeTimers), u.useFakeTimers(), y;
    },
    isFakeTimers() {
      return u.isFakeTimers();
    },
    useRealTimers() {
      return u.useRealTimers(), r = null, y;
    },
    runOnlyPendingTimers() {
      return u.runOnlyPendingTimers(), y;
    },
    async runOnlyPendingTimersAsync() {
      return await u.runOnlyPendingTimersAsync(), y;
    },
    runAllTimers() {
      return u.runAllTimers(), y;
    },
    async runAllTimersAsync() {
      return await u.runAllTimersAsync(), y;
    },
    runAllTicks() {
      return u.runAllTicks(), y;
    },
    advanceTimersByTime(E) {
      return u.advanceTimersByTime(E), y;
    },
    async advanceTimersByTimeAsync(E) {
      return await u.advanceTimersByTimeAsync(E), y;
    },
    advanceTimersToNextTimer() {
      return u.advanceTimersToNextTimer(), y;
    },
    async advanceTimersToNextTimerAsync() {
      return await u.advanceTimersToNextTimerAsync(), y;
    },
    getTimerCount() {
      return u.getTimerCount();
    },
    setSystemTime(E) {
      const b = E instanceof Date ? E : new Date(E);
      return r = b, u.setSystemTime(b), y;
    },
    getMockedSystemTime() {
      return r;
    },
    getRealSystemTime() {
      return u.getRealSystemTime();
    },
    clearAllTimers() {
      return u.clearAllTimers(), y;
    },
    // mocks
    spyOn: pO,
    fn: mO,
    waitFor: zA,
    waitUntil: LA,
    hoisted(E) {
      return zi(E, '"vi.hoisted" factory', ["function"]), E();
    },
    mock(E, b) {
      const x = m();
      t.queueMock(
        E,
        x,
        b ? () => b(() => t.importActual(E, x, t.getMockContext().callstack)) : void 0,
        !0
      );
    },
    unmock(E) {
      t.queueUnmock(E, m());
    },
    doMock(E, b) {
      const x = m();
      t.queueMock(
        E,
        x,
        b ? () => b(() => t.importActual(E, x, t.getMockContext().callstack)) : void 0,
        !1
      );
    },
    doUnmock(E) {
      t.queueUnmock(E, m());
    },
    async importActual(E) {
      return t.importActual(
        E,
        m(),
        t.getMockContext().callstack
      );
    },
    async importMock(E) {
      return t.importMock(E, m());
    },
    mocked(E, b = {}) {
      return E;
    },
    isMockFunction(E) {
      return zE(E);
    },
    clearAllMocks() {
      return Hf.forEach((E) => E.mockClear()), y;
    },
    resetAllMocks() {
      return Hf.forEach((E) => E.mockReset()), y;
    },
    restoreAllMocks() {
      return Hf.forEach((E) => E.mockRestore()), y;
    },
    stubGlobal(E, b) {
      return s.has(E) || s.set(E, Object.getOwnPropertyDescriptor(globalThis, E)), Object.defineProperty(globalThis, E, {
        value: b,
        writable: !0,
        configurable: !0,
        enumerable: !0
      }), y;
    },
    stubEnv(E, b) {
      return d.has(E) || d.set(E, process.env[E]), process.env[E] = b, y;
    },
    unstubAllGlobals() {
      return s.forEach((E, b) => {
        E ? Object.defineProperty(globalThis, b, E) : Reflect.deleteProperty(globalThis, b);
      }), s.clear(), y;
    },
    unstubAllEnvs() {
      return d.forEach((E, b) => {
        E === void 0 ? delete process.env[b] : process.env[b] = E;
      }), d.clear(), y;
    },
    resetModules() {
      return I$(c.moduleCache), y;
    },
    async dynamicImportSettled() {
      return k1();
    },
    setConfig(E) {
      a || (a = { ...c.config }), Object.assign(c.config, E);
    },
    resetConfig() {
      a && Object.assign(c.config, a);
    }
  };
  return y;
}
const UA = FA(), Xf = UA;
GC("Button component", () => {
  nb("Button component renders correctly", () => {
    const r = wg.create(
      /* @__PURE__ */ pg(hg, { label: "Submit" })
    ).toJSON();
    Em(r).toMatchSnapshot();
  }), nb("prop working", () => {
    const r = wg.create(
      /* @__PURE__ */ pg(hg, { type: "reset", label: "Reset" })
    ).toJSON();
    Em(r).toMatchSnapshot();
  });
});
