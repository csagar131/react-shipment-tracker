import {
  Container,
  CustomButton2 as CustomButton,
  CustomInput,
  Footer,
  FooterDetails_default,
  MainContainer,
  SellerProductDetails_default,
  Title,
  require_react_responsive
} from "/build/_shared/chunk-7H2CB7JQ.js";
import "/build/_shared/chunk-O4DCX5SV.js";
import {
  data_context_default
} from "/build/_shared/chunk-AHJ6HSVE.js";
import "/build/_shared/chunk-VQUUB63P.js";
import "/build/_shared/chunk-S4SOBIAD.js";
import {
  Link
} from "/build/_shared/chunk-B4PAEBFU.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// browser-route-module:/Users/sagarmochi/Applications/brand-tracking/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/page-components/landing-search-page/index.jsx
init_react();
var import_react = __toModule(require_react());
var import_react_responsive = __toModule(require_react_responsive());
var LandingSearchPage = () => {
  const context = (0, import_react.useContext)(data_context_default);
  const [trakingId, setTrackingId] = (0, import_react.useState)("");
  const { other: brandUIData } = context.sellerData;
  const footerData = context.sellerData.other.footer;
  const handleEnterKey = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.target.blur();
    }
  };
  const isMobileDevice = (0, import_react_responsive.useMediaQuery)({
    query: "(max-device-width: 768px)"
  });
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(Container, null, /* @__PURE__ */ import_react.default.createElement("div", {
    style: { padding: `${isMobileDevice ? "8px" : ""}` }
  }, /* @__PURE__ */ import_react.default.createElement(MainContainer, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "title"
  }, "Welcome to Pickrr Tracking !"), /* @__PURE__ */ import_react.default.createElement(Title, {
    className: "subtitle"
  }, " Track Your Order"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "support-text"
  }, "You can find tracking ID in the email and SMS alerts you received from us upon order confirmation."), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "input-button-container"
  }, /* @__PURE__ */ import_react.default.createElement(CustomInput, {
    placeholder: "Enter Tracking ID (Comma separated if multiple)",
    onChange: (e) => {
      setTrackingId(e.target.value);
    },
    enterbutton: "Track",
    size: "large",
    onKeyDown: handleEnterKey,
    value: trakingId,
    allowClear: true
  }), /* @__PURE__ */ import_react.default.createElement(Link, {
    to: `/tracking/${trakingId}`,
    state: brandUIData,
    className: "track-order-button-link"
  }, /* @__PURE__ */ import_react.default.createElement(CustomButton, {
    type: "primary"
  }, "Track Order")))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("img", {
    src: brandUIData?.banner.url,
    alt: "brand-img",
    style: {
      margin: "16px 0",
      border: "1px solid tranparent",
      borderRadius: "10px",
      width: "100%"
    }
  }))), /* @__PURE__ */ import_react.default.createElement(MainContainer, {
    style: { padding: "0", background: "transparent" }
  }, /* @__PURE__ */ import_react.default.createElement(SellerProductDetails_default, {
    brandUIData
  }), /* @__PURE__ */ import_react.default.createElement(FooterDetails_default, {
    footerData,
    context
  }))), /* @__PURE__ */ import_react.default.createElement(Footer, {
    src: "https://d10srchmli830n.cloudfront.net/1652867194453_e3b1cfc2-46b6-4959-b1e5-c2d02f51c30a_Group-27611.svg"
  }));
};
var landing_search_page_default = LandingSearchPage;

// app/routes/index.jsx
function Home() {
  return /* @__PURE__ */ React.createElement(landing_search_page_default, null);
}
var routes_default = Home;
export {
  routes_default as default
};
//# sourceMappingURL=/build/routes/index-AOJ2VJBR.js.map
