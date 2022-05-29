import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-XCL4Y7RH.js";
import "/build/_shared/chunk-CNFU4JEV.js";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  import_react_router_dom
} from "/build/_shared/chunk-F4VFSHQS.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/sagarmochi/Applications/brand-tracking/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();
var import_react4 = __toModule(require_react());

// app/styles/global.css
var global_default = "/build/_assets/global-GRQYI7CF.css";

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
    justify-content: space-between;
    max-width:168px;
    width: 100%;
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
  return /* @__PURE__ */ import_react.default.createElement(HeaderContainer, null, /* @__PURE__ */ import_react.default.createElement("img", {
    src: "https://d10srchmli830n.cloudfront.net/1652868953482_38eddf50-89ad-4916-adea-0861e26a95b4_Group-(1).svg",
    alt: "pickrr_logo"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "social-icon-container"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: "https://d10srchmli830n.cloudfront.net/1652950946901_035ad2b7-09b4-4e78-93c3-c310286c3e8b_bi_facebook.svg"
  }), /* @__PURE__ */ import_react.default.createElement("img", {
    src: "https://d10srchmli830n.cloudfront.net/1652951753044_dfe97bf5-728b-4c52-a9ba-65561a435e50_bx_bxl-instagram-alt.svg"
  }), /* @__PURE__ */ import_react.default.createElement("img", {
    src: "https://d10srchmli830n.cloudfront.net/1652952861732_4e75d8e1-053e-4a46-ad09-6b2e83205c88_typcn_social-twitter.svg"
  }), /* @__PURE__ */ import_react.default.createElement("img", {
    src: "https://d10srchmli830n.cloudfront.net/1652952783327_f0130071-fcbd-4fca-b1a0-d174ca65626f_typcn_social-youtube.svg"
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
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null)));
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, " ", /* @__PURE__ */ React.createElement(pickrr_header_default, null), children));
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
//# sourceMappingURL=/build/root-DXTRTO37.js.map
