import {
  Container,
  MainContainer
} from "/build/_shared/chunk-B5X6XAGS.js";
import {
  AntdIcon_default,
  CheckCircleFilled_default,
  CustomButton,
  CustomInput,
  Title,
  _objectSpread2,
  button_default,
  steps_default
} from "/build/_shared/chunk-PBKWW5BI.js";
import "/build/_shared/chunk-OQ4VQ54M.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-XCL4Y7RH.js";
import "/build/_shared/chunk-CNFU4JEV.js";
import {
  useLoaderData
} from "/build/_shared/chunk-F4VFSHQS.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/sagarmochi/Applications/brand-tracking/app/routes/tracking/$index.jsx?browser
init_react();

// app/routes/tracking/$index.jsx
init_react();

// node_modules/@ant-design/icons/es/icons/DownOutlined.js
init_react();
var React2 = __toModule(require_react());

// node_modules/@ant-design/icons-svg/es/asn/DownOutlined.js
init_react();
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
var DownOutlined_default = DownOutlined;

// node_modules/@ant-design/icons/es/icons/DownOutlined.js
var DownOutlined2 = function DownOutlined3(props, ref) {
  return /* @__PURE__ */ React2.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
    ref,
    icon: DownOutlined_default
  }));
};
DownOutlined2.displayName = "DownOutlined";
var DownOutlined_default2 = /* @__PURE__ */ React2.forwardRef(DownOutlined2);

// node_modules/@ant-design/icons/es/icons/UpOutlined.js
init_react();
var React3 = __toModule(require_react());

// node_modules/@ant-design/icons-svg/es/asn/UpOutlined.js
init_react();
var UpOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, "name": "up", "theme": "outlined" };
var UpOutlined_default = UpOutlined;

// node_modules/@ant-design/icons/es/icons/UpOutlined.js
var UpOutlined2 = function UpOutlined3(props, ref) {
  return /* @__PURE__ */ React3.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
    ref,
    icon: UpOutlined_default
  }));
};
UpOutlined2.displayName = "UpOutlined";
var UpOutlined_default2 = /* @__PURE__ */ React3.forwardRef(UpOutlined2);

// app/components/OrderInfoContainer/index.js
init_react();
var import_react = __toModule(require_react());

// app/components/OrderInfoContainer/style.js
init_react();

// node_modules/@ant-design/icons/es/icons/index.js
init_react();

// app/components/OrderInfoContainer/style.js
var MainContainer2 = styled_components_browser_esm_default.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 23px 20px;
`;
var Container2 = styled_components_browser_esm_default.div`
  border-bottom: 1px solid #edf0f9;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-style: normal;
  color: #38446d;
  .order-placed {
    display: flex;
  }
  .content {
    margin-left: 13px;
    font-size: 18px;
    .subcontent {
      font-weight: 400;
      font-size: 14px;
    }
  }
  .expected {
    font-size: 16px;
  }
  .delivery-info {
    color: #158a2a;
    font-weight: 700;
    font-size: 14px;
  }
  .support {
    font-size: 14px;
    color: #1c439f;
    font-weight: 400;
  }
`;
var Icon = styled_components_browser_esm_default(CheckCircleFilled_default)`
  font-size: 29px;
`;
var OrderInfoContainer = styled_components_browser_esm_default.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px 17px 0px;
  border-bottom: 1px solid #edf0f9;
  margin-bottom: 23px;
  .content {
    display: flex;
    @media screen and (max-width: 768px) {
    }
  }
`;
var OrderItem = styled_components_browser_esm_default.div`
  font-size: 16px;
  color: #38446d;
  border-right: 1px solid #c6c8e3;
  padding-right: 30px;
  .title {
    font-weight: 400;
  }
  .content {
    font-weight: 600;
  }
`;
var ViewButton = styled_components_browser_esm_default(button_default)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 154.96px;
  height: 40px;
  border-radius: 10px !important;
  background-color: #0051bf !important;
  text-align: center !important;
  .ant-btn-primary {
  }
`;
var StatusContainer = styled_components_browser_esm_default.div`
  margin-top: 24px;
  display: flex;
  .stepper-container {
    background: #ffffff;
    border-radius: 10px;
    flex: 0.5;
    padding: 25px;
    overflow-x: hidden;
    height: 487px;
    .steps {
      cursor: pointer;
    }
    .ant-steps-vertical.ant-steps-dot
      .ant-steps-item
      > .ant-steps-item-container
      > .ant-steps-item-tail {
      top: 13px;
      left: -9px;
      margin: 0;
      padding: 0px;
    }
  }
  .brand-details-container {
    background: #ffffff;
    border-radius: 10px;
    flex: 0.5;
    margin-left: 24px;
    font-size: 16px;
    .brand-name {
      padding: 33px 25px 22px;
      border-bottom: 1px solid #c5cde3;
      font-weight: 700;

      color: #000b34;
    }
    .mode-of-payment {
      padding: 10px;
      border-bottom: 1px solid #c5cde3;
      margin: 15px;
      display: flex;
      justify-content: space-between;
      .prepaid {
        font-weight: 700;
        color: #0c3784;
      }
      .payment {
        font-weight: 600;
        color: #38446d;
      }
    }
    .product-name {
      padding: 0px 25px 22px;
      border-bottom: 1px solid #c5cde3;
      overflow-x: hidden;
      height: 200px;

      .product-item {
        font-size: 16px;
        color: #38446d;
        display: flex;
        justify-content: space-between;
        margin-top: 17px;
        margin: 15px;
      }
    }
    @media screen and (max-width: 768px) {
      margin-left: 0px;
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
var Stepper = styled_components_browser_esm_default(steps_default)`
  .ant-steps-vertical {
    position: absolute;
    margin-left: -24px;
  }
`;
var Heading = styled_components_browser_esm_default.div`
  font-weight: 700;
  font-size: 18px;
  color: #38446d;
  padding: 0px 25px 22px;
`;
var InnerSteps = styled_components_browser_esm_default(steps_default)`
  .ant-steps .ant-steps-vertical .ant-steps-dot {
    margin-left: 1px;
    z-index: 50000;
  }
  .ant-steps-item-content {
    position: absolute;
    z-index: 10000;
  }
`;

// app/components/OrderInfoContainer/utils/index.js
init_react();
var CheckOrderStatus = (orderStatus) => {
  switch (orderStatus) {
    case "placed":
      return "Your Order has been placed";
    case "failed":
      return "Failed Attempt at Delivery";
    case "delivered":
      return "Your Order has been delivered";
    case "cancelled":
      return "Order Cancelled";
    case "inTransit":
      return "Order In- Transit";
    case "returned":
      return "Order Returned";
    default:
      return "Your order has been initiated";
  }
};
var Color = (orderStatus) => {
  switch (orderStatus) {
    case "placed":
      return "#38446D";
    case "failed":
      return "#EF7E00";
    case "delivered":
      return "#3B9A00";
    case "cancelled":
      return "#FA5357";
    default:
      return "#38446D";
  }
};

// app/components/OrderInfoContainer/index.js
var OrderItems = ({ title, content }) => {
  return /* @__PURE__ */ import_react.default.createElement(OrderItem, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "title"
  }, title), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "content"
  }, content));
};
var icons = {
  failed: "https://d10srchmli830n.cloudfront.net/1653565865471_254a535d-5d10-491b-8e14-4c764f67c868_Group-27878.svg",
  delivered: "https://d10srchmli830n.cloudfront.net/1653565931591_dea56aa1-7282-4cce-b881-01a0b11163a6_Vector-(2).svg",
  returned: "https://d10srchmli830n.cloudfront.net/1653565990655_f82a51ec-34ae-429c-8c5e-962691834a2d_Group-27880.svg",
  cancelled: "https://d10srchmli830n.cloudfront.net/1653566478662_7159942a-b837-4bbf-a7f2-32f0b54e1e00_States---Popups-icons.svg",
  intransit: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  placed: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg"
};
var OrderInfocontainer = ({ status = "placed", expectedDelivery }) => {
  const [isViewMore, setIsViewMore] = (0, import_react.useState)(false);
  const [showNestedStepper, setShowNestedStepper] = (0, import_react.useState)(false);
  const { Step } = steps_default;
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(MainContainer2, null, /* @__PURE__ */ import_react.default.createElement(Container2, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "order-placed"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: icons[status],
    height: 29,
    width: 29
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    style: { color: Color(status) }
  }, CheckOrderStatus(status)), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "subcontent"
  }, "Last updated on April 2nd 2022, 9:10 pm"))), status !== "delivered" && /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "expected"
  }, "Expected Delivery "), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "delivery-info"
  }, status !== "failed" || status !== "cancelled" ? "-" : `Arriving on ${expectedDelivery}`)), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "support"
  }, "support@pickrr.com")), /* @__PURE__ */ import_react.default.createElement(OrderInfoContainer, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Order Date",
    content: "4 April 2022"
  }), /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Order ID ",
    content: "534524TRRDD"
  })), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Courier",
    content: "Ekart"
  }), /* @__PURE__ */ import_react.default.createElement(OrderItems, {
    title: "Payment Mode",
    content: "Prepaid"
  })), /* @__PURE__ */ import_react.default.createElement(button_default, {
    type: "ghost",
    style: { borderRadius: "10px", color: "#1C439F" }
  }, "Request for Reattempt"))), " ", /* @__PURE__ */ import_react.default.createElement("div", {
    style: { textAlign: "center", marginTop: "-15px" },
    onClick: () => setIsViewMore(!isViewMore)
  }, /* @__PURE__ */ import_react.default.createElement(ViewButton, {
    type: "primary",
    size: "large"
  }, isViewMore ? "Hide" : "View", " Details", " ", isViewMore ? /* @__PURE__ */ import_react.default.createElement(UpOutlined_default2, null) : /* @__PURE__ */ import_react.default.createElement(DownOutlined_default2, null))), isViewMore && /* @__PURE__ */ import_react.default.createElement(StatusContainer, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "stepper-container"
  }, /* @__PURE__ */ import_react.default.createElement(Stepper, {
    progressDot: true,
    current: 3,
    direction: "vertical"
  }, /* @__PURE__ */ import_react.default.createElement(Step, {
    title: "Finished",
    description: "This is a description. This is a description."
  }), /* @__PURE__ */ import_react.default.createElement(Step, {
    title: "Finished",
    description: "This is a description. This is a description."
  }), /* @__PURE__ */ import_react.default.createElement(Step, {
    title: "Finished",
    description: "This is a description. This is a description."
  }), /* @__PURE__ */ import_react.default.createElement(Step, {
    title: "Finished",
    onClick: () => setShowNestedStepper(!showNestedStepper),
    className: "steps",
    description: showNestedStepper && /* @__PURE__ */ import_react.default.createElement(steps_default, {
      progressDot: true,
      current: 1,
      direction: "vertical"
    }, /* @__PURE__ */ import_react.default.createElement(Step, {
      title: "Finished",
      description: "This is a description. This is a description."
    }), /* @__PURE__ */ import_react.default.createElement(Step, {
      title: "Finished",
      description: "This is a description. This is a description."
    }), /* @__PURE__ */ import_react.default.createElement(Step, {
      title: "Finished",
      description: "This is a description. This is a description."
    }), /* @__PURE__ */ import_react.default.createElement(Step, {
      title: "Waiting",
      description: "This is a description."
    }))
  }))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "brand-details-container"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "brand-name"
  }, "Brand Name"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mode-of-payment"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, "Mode of payment :"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "prepaid"
  }, "Prepaid")), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement(Heading, null, "Product Details :"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "product-name"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "product-item"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, "1"), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", null, "Men\u2019s summer t- shirt"), /* @__PURE__ */ import_react.default.createElement("div", null, "Qty : 01")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "prepaid"
  }, "\u20B9243.00")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "product-item"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, "1"), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", null, "Men\u2019s summer t- shirt"), /* @__PURE__ */ import_react.default.createElement("div", null, "Qty : 01")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "prepaid"
  }, "\u20B9243.00")), " ", /* @__PURE__ */ import_react.default.createElement("div", {
    className: "product-item"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, "1"), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", null, "Men\u2019s summer t- shirt"), /* @__PURE__ */ import_react.default.createElement("div", null, "Qty : 01")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "prepaid"
  }, "\u20B9243.00")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "product-item"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, "1"), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", null, "Men\u2019s summer t- shirt"), /* @__PURE__ */ import_react.default.createElement("div", null, "Qty : 01")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "prepaid"
  }, "\u20B9243.00")))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mode-of-payment"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, "Total"), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "prepaid"
  }, "\u20B9243.00")))));
};
var OrderInfoContainer_default = OrderInfocontainer;

// app/routes/tracking/$index.jsx
function TrackingDetails() {
  const data = useLoaderData();
  console.log(data);
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Title, null, "Order Tracking Details"), /* @__PURE__ */ React.createElement(MainContainer, null, /* @__PURE__ */ React.createElement("div", {
    className: "input-button-container"
  }, /* @__PURE__ */ React.createElement(CustomInput, {
    placeholder: "Enter Tracking ID (Comma separated if multiple)",
    style: { marginRight: 10, maxWidth: "769px" }
  }), /* @__PURE__ */ React.createElement(CustomButton, {
    type: "danger"
  }, "Track Order"), /* @__PURE__ */ React.createElement("div", {
    className: "order-info-container"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { marginBottom: "30px" }
  }, /* @__PURE__ */ React.createElement(OrderInfoContainer_default, null))), /* @__PURE__ */ React.createElement("div", {
    className: "order-info-container"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { marginBottom: "30px" }
  }, /* @__PURE__ */ React.createElement(OrderInfoContainer_default, null))), /* @__PURE__ */ React.createElement("div", {
    className: "order-info-container"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { marginBottom: "30px" }
  }, /* @__PURE__ */ React.createElement(OrderInfoContainer_default, null))), /* @__PURE__ */ React.createElement("div", {
    className: "order-info-container"
  }, /* @__PURE__ */ React.createElement("div", {
    style: { marginBottom: "30px" }
  }, /* @__PURE__ */ React.createElement(OrderInfoContainer_default, null))))));
}
var index_default = TrackingDetails;
export {
  index_default as default
};
//# sourceMappingURL=/build/routes/tracking/$index-OSBR73WA.js.map
