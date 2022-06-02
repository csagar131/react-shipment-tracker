import "/build/_shared/chunk-HQUBUBXA.js";
import {
  data_context_default
} from "/build/_shared/chunk-AHJ6HSVE.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-USDJIRMY.js";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-PFOIG7TV.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// browser-route-module:/Users/sagarmochi/Applications/brand-tracking/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();
var import_react4 = __toModule(require_react());

// app/styles/global.css
var global_default = "/build/_assets/global-4XQ5MAGH.css";

// node_modules/antd/dist/antd.css
var antd_default = "/build/_assets/antd-Z365KDXN.css";

// app/page-components/pickrr-header/index.jsx
init_react();
var import_react = __toModule(require_react());

// app/page-components/pickrr-header/style.js
init_react();
var HeaderContainer = styled_components_browser_esm_default.div`
  width: 100% !important;
  margin: auto;
  padding: 25px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  .social-icon-container {
    display: flex;
    @media screen and (max-width:768px){
        max-width:120px;
  }
  }
  @media screen and (max-width:768px){
      padding: 15px 16px;  
  }
`;

// app/page-components/pickrr-header/index.jsx
var PickrrHeader = () => {
  const context = (0, import_react.useContext)(data_context_default);
  const headerNavList = context.sellerData?.other?.header?.header_data;
  return /* @__PURE__ */ import_react.default.createElement(HeaderContainer, null, /* @__PURE__ */ import_react.default.createElement("img", {
    src: context?.sellerData?.logo,
    alt: "pickrr_logo",
    width: 80,
    height: 50
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "social-icon-container"
  }, headerNavList?.map((navItem) => {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      style: { display: "inline", margin: "0 8px" }
    }, /* @__PURE__ */ import_react.default.createElement("a", {
      href: navItem.link,
      target: "_blank",
      style: { color: "#38446D", fontSize: "14px", fontWeight: "600" }
    }, navItem.item_name));
  })));
};
var pickrr_header_default = PickrrHeader;

// app/styles-context.jsx
init_react();
var import_react2 = __toModule(require_react());
var styles_context_default = (0, import_react2.createContext)(null);

// app/root.jsx
var links = () => [
  { rel: "stylesheet", href: antd_default },
  { rel: "stylesheet", href: global_default }
];
var meta = () => {
  const description = "Pickrr Tracking page";
  const keywords = "remix, react, javascript";
  return {
    description,
    keywords
  };
};
function App() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(data_context_default.Provider, {
    value: { sellerData: data.res }
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null))));
}
function Document({ children, title }) {
  const styles = (0, import_react4.useContext)(styles_context_default);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    content: "width=device-width, initial-scale=1",
    name: "viewport"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(Meta, null), typeof document === "undefined" ? "__STYLES__" : null, styles, /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, " ", children), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(pickrr_header_default, null), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, " ", children));
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
//# sourceMappingURL=/build/root-QN5HOTWR.js.map
