import {
  CustomInput,
  Title,
  button_default
} from "/build/_shared/chunk-PBKWW5BI.js";
import "/build/_shared/chunk-OQ4VQ54M.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-XCL4Y7RH.js";
import {
  Link
} from "/build/_shared/chunk-F4VFSHQS.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/sagarmochi/Applications/brand-tracking/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/page-components/landing-search-page/index.jsx
init_react();
var import_react = __toModule(require_react());

// app/page-components/landing-search-page/style.js
init_react();
var Footer = styled_components_browser_esm_default.img`
  width: 100%;
  bottom: 0;
`;
var MainContainer = styled_components_browser_esm_default.div`
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
  padding: 70px;
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
    letter-spacing: 0.01em;
    color: #38446d;
  }
  .subtitle {
    margin-top: 39px;
  }
  .support-text {
    font-weight: 400;
    font-size: 14px;
    color: #38446d;
    margin-bottom: 15px;
  }
  .input-button-container {
    display: flex;
  }
  .powered {
    text-align: center;
    margin-top: 85px;
    text-decoration-line: underline;
    color: #38446d;
  }
`;
var LandingSearchPageContainer = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
var CustomButton = styled_components_browser_esm_default(button_default)`
  width: 216px !important;
  height: 49px !important;
  background: linear-gradient(
    105.06deg,
    #ff4c4a -5.19%,
    #ff756c 32.99%,
    #f16242 57.37%,
    #da4040 97.18%,
    #ce2500 116.5%,
    #9a0200 150.8%
  ) !important;
  border-radius: 10px !important;
`;

// app/page-components/landing-search-page/index.jsx
function LandingSearchPage() {
  const [input, setInput] = (0, import_react.useState)("");
  const handleEnterKey = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.target.blur();
      handleTrack();
    }
  };
  return /* @__PURE__ */ import_react.default.createElement(LandingSearchPageContainer, null, /* @__PURE__ */ import_react.default.createElement(MainContainer, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "title"
  }, "Welcome to Pickrr Tracking !"), /* @__PURE__ */ import_react.default.createElement(Title, {
    className: "subtitle"
  }, " Track Your Order"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "support-text"
  }, "You can find tracking ID in the email and SMS alerts you received from us upon order confirmation."), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "input-button-container"
  }, /* @__PURE__ */ import_react.default.createElement(CustomInput, {
    style: { marginRight: 10 },
    placeholder: "Enter Tracking ID (Comma separated if multiple)",
    onChange: (e) => {
      setInput(e.target.value);
    },
    enterButton: "Track",
    size: "large",
    onKeyDown: handleEnterKey,
    value: input
  }), /* @__PURE__ */ import_react.default.createElement(Link, {
    to: `/tracking/${input}`
  }, /* @__PURE__ */ import_react.default.createElement(CustomButton, {
    type: "primary",
    onClick: handleEnterKey
  }, "Track Order"))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "powered"
  }, "Powered by Pickrr ")), /* @__PURE__ */ import_react.default.createElement(Footer, {
    src: "https://d10srchmli830n.cloudfront.net/1652867194453_e3b1cfc2-46b6-4959-b1e5-c2d02f51c30a_Group-27611.svg"
  }));
}
var landing_search_page_default = LandingSearchPage;

// app/routes/index.jsx
function Home() {
  return /* @__PURE__ */ React.createElement(landing_search_page_default, null);
}
var routes_default = Home;
export {
  routes_default as default
};
//# sourceMappingURL=/build/routes/index-LSLJDIUS.js.map
