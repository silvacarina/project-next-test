import "../../assets/Card.css";
import { jsxs as r, jsx as a } from "react/jsx-runtime";
import { B as c } from "../../Button-evJIStwZ.js";
const o = "_containerCard_1rywm_1", m = "_contentCard_1rywm_10", l = "_image_1rywm_14", _ = "_title_1rywm_20", p = "_subTitle_1rywm_29", u = "_paragraph_1rywm_36", d = "_input_1rywm_43", h = "_button_1rywm_54", t = {
  containerCard: o,
  contentCard: m,
  image: l,
  title: _,
  subTitle: p,
  paragraph: u,
  input: d,
  button: h
}, C = ({ title: n, subtitle: e, paragraph: i, image: s }) => /* @__PURE__ */ r("div", { className: t.containerCard, children: [
  /* @__PURE__ */ a("img", { className: t.image, src: s }),
  /* @__PURE__ */ r("div", { className: t.contentCard, children: [
    /* @__PURE__ */ a("h2", { className: t.title, children: n }),
    /* @__PURE__ */ a("h4", { className: t.subTitle, children: e }),
    /* @__PURE__ */ a("p", { className: t.paragraph, children: i }),
    /* @__PURE__ */ a("input", { className: t.input, type: "text", value: "Opnião pública" }),
    /* @__PURE__ */ a(c, { className: t.button, label: "Button", variant: "primary" })
  ] })
] });
export {
  C as Card
};
