import "../../assets/AlertBar.css";
import { jsxs as c, jsx as i } from "react/jsx-runtime";
import { c as o, B as _ } from "../../Button-QQkSLjLk.js";
const d = "_containerAlertBar_19ruv_1", v = "_iconNotification_19ruv_11", h = "_info_19ruv_11", m = "_check_19ruv_15", p = "_error_19ruv_19", u = "_warning_19ruv_23", N = "_title_19ruv_31", f = "_description_19ruv_35", B = "_icons_19ruv_39", r = {
  containerAlertBar: d,
  iconNotification: v,
  info: h,
  check: m,
  error: p,
  warning: u,
  "type-dark": "_type-dark_19ruv_27",
  title: N,
  description: f,
  icons: B
}, g = ({ title: e, description: s, IconClose: a, IconNotification: t, iconVariant: n = "info", type: l = "light" }) => /* @__PURE__ */ c("div", { className: o(r.containerAlertBar, r[`type-${l}`]), children: [
  /* @__PURE__ */ i("div", { className: o(r.iconNotification, {
    [r[n]]: !!t
  }), children: t && /* @__PURE__ */ i(t, { variant: n }) }),
  /* @__PURE__ */ c("div", { className: r.contentAlertBar, children: [
    /* @__PURE__ */ i("h3", { className: r.title, children: e }),
    /* @__PURE__ */ i("p", { className: r.description, children: s }),
    /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(_, { label: "Click here", size: "white", variant: "secondary" }) })
  ] }),
  /* @__PURE__ */ i("div", { className: r.icons, children: /* @__PURE__ */ i(a, {}) })
] });
export {
  g as AlertBar
};
