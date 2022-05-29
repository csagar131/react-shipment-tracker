import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/sagarmochi/Applications/tracking-page-v2/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
function Home() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Main tracking Page"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    action: "/search"
  }, /* @__PURE__ */ React.createElement("label", null, "Search ", /* @__PURE__ */ React.createElement("input", {
    name: "term",
    type: "text"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Track")));
}
var routes_default = Home;
export {
  routes_default as default
};
//# sourceMappingURL=/build/routes/index-EZMTKU7X.js.map
