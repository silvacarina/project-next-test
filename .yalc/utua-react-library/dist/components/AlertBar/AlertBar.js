import "../../assets/AlertBar.css";
import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { c, B as _ } from "../../Button-evJIStwZ.js";
const d = "_containerAlertBar_weo2y_1", y = "_iconNotification_weo2y_10", h = "_info_weo2y_10", w = "_check_weo2y_14", m = "_error_weo2y_18", p = "_warning_weo2y_22", N = "_title_weo2y_30", f = "_description_weo2y_34", B = "_icons_weo2y_38", o = {
  containerAlertBar: d,
  iconNotification: y,
  info: h,
  check: w,
  error: m,
  warning: p,
  "type-dark": "_type-dark_weo2y_26",
  title: N,
  description: f,
  icons: B
}, g = ({ title: r, description: s, IconClose: a, IconNotification: e, iconVariant: t = "info", type: l = "light" }) => /* @__PURE__ */ n("div", { className: c(o.containerAlertBar, o[`type-${l}`]), children: [
  /* @__PURE__ */ i("div", { className: c(o.iconNotification, {
    [o[t]]: !!e
  }), children: e && /* @__PURE__ */ i(e, { variant: t }) }),
  /* @__PURE__ */ n("div", { className: o.contentAlertBar, children: [
    /* @__PURE__ */ i("h3", { className: o.title, children: r }),
    /* @__PURE__ */ i("p", { className: o.description, children: s }),
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(_, { label: "Click here", size: "white", variant: "secondary" }) })
  ] }),
  /* @__PURE__ */ i("div", { className: o.icons, children: /* @__PURE__ */ i(a, {}) })
] });
export {
  g as AlertBar
};
