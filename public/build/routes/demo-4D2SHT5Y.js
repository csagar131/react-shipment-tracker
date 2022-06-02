import {
  Link
} from "/build/_shared/chunk-PFOIG7TV.js";
import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// browser-route-module:/Users/sagarmochi/Applications/brand-tracking/app/routes/demo.jsx?browser
init_react();

// app/routes/demo.jsx
init_react();
var import_react = __toModule(require_react());
function Demo() {
  const [value, setValue] = (0, import_react.useState)("");
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("input", {
    onChange: (e) => setValue(e.target.value),
    value
  }), /* @__PURE__ */ import_react.default.createElement(Link, {
    to: `/tracking/${value}`
  }, /* @__PURE__ */ import_react.default.createElement("button", null, "Hi demo")));
}
var demo_default = Demo;
export {
  demo_default as default
};
//# sourceMappingURL=/build/routes/demo-4D2SHT5Y.js.map
