import {
  Link,
  Links,
  LiveReload,
  Meta,
  import_react_router_dom
} from "/build/_shared/chunk-6ZQ6M4IZ.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/sagarmochi/Applications/tracking-page-v2/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-AFIROZCC.css";

// app/root.jsx
var links = () => [{ rel: "stylesheet", href: global_default }];
var meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "remix, react, javascript";
  return {
    description,
    keywords
  };
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null), /* @__PURE__ */ React.createElement("title", null, "Pickrr Tracking Page")), /* @__PURE__ */ React.createElement("body", null, children, true ? /* @__PURE__ */ React.createElement(LiveReload, null) : null));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/",
    className: "logo"
  }, "Pickrr"), /* @__PURE__ */ React.createElement("ul", {
    className: "nav"
  }, /* @__PURE__ */ React.createElement("li", null))), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, children));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, error.message)));
}
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-P32AGFWW.js.map
