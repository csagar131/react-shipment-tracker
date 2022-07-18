import { Row, Col, Tooltip } from "antd";
import React, { useState, useRef } from "react";
import {
  Container,
  OrderItem,
  MainContainer,
  ViewButton,
  StatusContainer,
  Heading,
  Stepper,
  ViewMore,
} from "./style";
import { CheckOrderStatus, Color } from "./utils";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import moment from "moment";
import { FlexContainer, SpaceBetweenContainer } from "../UIElements";
import { useMediaQuery } from "react-responsive";
import Feedback from "../Feedback";
import ProductTracker from "../ProductTracker";
import { WhatsappShareButton, WhatsappIcon } from 'react-share';


const OrderItems = ({ title, content, css }) => {
  return (
    <OrderItem style={css}>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </OrderItem>
  );
};

const icons = {
  NDR: "https://d10srchmli830n.cloudfront.net/1653565865471_254a535d-5d10-491b-8e14-4c764f67c868_Group-27878.svg",
  DL: "https://d10srchmli830n.cloudfront.net/1653565931591_dea56aa1-7282-4cce-b881-01a0b11163a6_Vector-(2).svg",
  RTO: "https://d10srchmli830n.cloudfront.net/1653565990655_f82a51ec-34ae-429c-8c5e-962691834a2d_Group-27880.svg",
  RTD: "https://d10srchmli830n.cloudfront.net/1653565990655_f82a51ec-34ae-429c-8c5e-962691834a2d_Group-27880.svg",
  OC: "https://d10srchmli830n.cloudfront.net/1653566478662_7159942a-b837-4bbf-a7f2-32f0b54e1e00_States---Popups-icons.svg",
  OT: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  OP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  OO: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  PP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  SHP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
};

const OrderDetails = ({
  status,
  expectedDelivery,
  isMultiOrder,
  courier,
  orderDate,
  orderId,
  lastUpdate,
  itemList,
  trackArr,
  data,
  resData,
}) => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  const [isViewMore, setIsViewMore] = useState(false);
  const [showMoreItems, setShowMoreItems] = useState(false);

  const handleshowMoreItems = () => {
    setShowMoreItems(!showMoreItems);
  };

  if (resData.err) {
    return (
      <MainContainer style={{ color: "#FF0006" }}>
        {`Tracking Id ${resData.tracking_id} Not Found`}
      </MainContainer>
    );
  }

  return (
    <div>
      <MainContainer>
        <Container>
          <div className="order-placed">
            <img src={icons[status]} className="icon" />
            <div className="content">
              <div style={{ color: Color(status) }}>
                {CheckOrderStatus(status)}
              </div>

              <div className="subcontent">
                Last updated on{" "}
                {moment(new Date(lastUpdate)).format("MMMM Do YYYY, h:mm a")}
              </div>
            </div>
          </div>
          <div className="supportContainer">
            {status !== "delivered" && (
              <div className="expectedContainer">
                <div className="expected">Expected Delivery </div>
                <div className="delivery-info">
                  {status === "NDR" || status === "OC" || status === "DL"
                    ? "-"
                    : `Arriving on ${moment(new Date(expectedDelivery)).format(
                        "MMMM Do YYYY"
                      )}`}
                </div>
              </div>
            )}
            <Tooltip title="Share">
              <WhatsappShareButton
                url={typeof window !== 'undefined' && window.location.href}
                title={`${typeof window !== 'undefined' && window.location.host.split(".")[0]} Tracking`}
              >
                <WhatsappIcon size={36} />
              </WhatsappShareButton>
            </Tooltip>
          </div>
        </Container>
        {!isMobileDevice ? (
          <Row style={{ marginTop: "12px" }} gutter="16px" justify="end">
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <OrderItems
                title="Order Date"
                content={moment(new Date(orderDate)).format("MMMM Do YYYY")}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <OrderItems title="Order ID " content={orderId} />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <OrderItems title="Courier" content={courier} />
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              <OrderItems
                title="Payment Mode"
                content={!data?.is_cod ? "Prepaid" : "COD"}
              />
            </Col>
          </Row>
        ) : (
          <>
            <SpaceBetweenContainer style={{ marginTop: "12px" }}>
              <OrderItems
                title="Order Date"
                content={moment(new Date(orderDate))?.format("MMMM Do YYYY")}
              />
              <OrderItems title="Order ID " content={orderId} />
            </SpaceBetweenContainer>
            <SpaceBetweenContainer style={{ marginTop: "12px" }}>
              <OrderItems title="Courier" content={courier} />
              <OrderItems
                title="Payment Mode"
                content={!data?.is_cod ? "Prepaid" : "COD"}
              />
            </SpaceBetweenContainer>
          </>
        )}
      </MainContainer>
      {isMultiOrder && (
        <div style={{ textAlign: "center", marginTop: "-15px" }}>
          <ViewButton
            type="primary"
            size="large"
            onClick={(e) => {
              setIsViewMore(!isViewMore);
              e.target.scrollIntoView({
                behavior: "smooth",
                inline: "nearest",
              });
            }}
          >
            {isViewMore ? "Hide" : "View"} Details{" "}
            {isViewMore ? <UpOutlined /> : <DownOutlined />}
          </ViewButton>
        </div>
      )}
      <div>{status == "DL" && <Feedback data={data} />}</div>
      {(isViewMore || (!isMultiOrder && !isViewMore)) && (
        <StatusContainer>
          <div className="stepper-container">
            <ProductTracker trackArr={trackArr && trackArr} />
          </div>

          <div className="brand-details-container">
            <div className="brand-name">Brand Name</div>
            <div className="mode-of-payment">
              <div>Mode of payment :</div>
              <div className="prepaid">{data?.is_cod ? "COD" : "Prepaid"}</div>
            </div>
            <div>
              <Heading>Product Details :</Heading>
              <div className="product-name">
                {itemList &&
                  itemList?.map((item, index) => {
                    if (index < 2) {
                      return (
                        <div className="product-item" key={index}>
                          <FlexContainer style={{ alignItems: "flex-start" }}>
                            <div style={{ marginRight: 10 }}>{index + 1}</div>
                            <div>
                              <div>{item?.item_name}</div>
                              <div>Qty : {item?.quantity}</div>
                            </div>
                          </FlexContainer>
                          <div className="prepaid">₹{item?.price}</div>
                        </div>
                      );
                    } else {
                      if (showMoreItems) {
                        return (
                          <div className="product-item" key={index}>
                            <FlexContainer>
                              <div
                                style={{
                                  marginRight: "10px",
                                }}
                              >
                                {index + 1}
                              </div>
                              <div>
                                <div>{item?.item_name}</div>
                                <div
                                  style={{
                                    marginRight: "10px",
                                    marginTop: "-20px",
                                  }}
                                >
                                  Qty : {item?.quantity}
                                </div>
                              </div>
                            </FlexContainer>
                            <div className="prepaid">₹{item?.price}</div>
                          </div>
                        );
                      }
                    }
                  })}
                {itemList?.length > 2 && !showMoreItems && (
                  <ViewMore onClick={handleshowMoreItems}>
                    {"+"}
                    {itemList.length - 2} more
                  </ViewMore>
                )}
              </div>
            </div>
            <div className="mode-of-payment">
              <div>Total</div>
              <div className="prepaid">
                ₹{data?.info?.invoice_value || resData?.info?.invoice_value}
              </div>
            </div>
          </div>
        </StatusContainer>
      )}
    </div>
  );
};

export default OrderDetails;
