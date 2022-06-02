import { Button, Card, Col, Divider, Row, Steps } from "antd";
import React, { useState } from "react";
import {
  Container,
  OrderItem,
  MainContainer,
  ViewButton,
  StatusContainer,
  Heading,
  Stepper,
} from "./style";
import { CheckOrderStatus, Color } from "./utils";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import {
  FlexContainer,
  SpaceBetweenContainer,
} from "../UIElements";
import { useMediaQuery } from "react-responsive";
import moment from "moment";

const OrderItems = ({ title, content }) => {
  return (
    <OrderItem>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </OrderItem>
  );
};

const icons = {
  NDR: "https://d10srchmli830n.cloudfront.net/1653565865471_254a535d-5d10-491b-8e14-4c764f67c868_Group-27878.svg",
  DL: "https://d10srchmli830n.cloudfront.net/1653565931591_dea56aa1-7282-4cce-b881-01a0b11163a6_Vector-(2).svg",
  RTO: "https://d10srchmli830n.cloudfront.net/1653565990655_f82a51ec-34ae-429c-8c5e-962691834a2d_Group-27880.svg",
  OC: "https://d10srchmli830n.cloudfront.net/1653566478662_7159942a-b837-4bbf-a7f2-32f0b54e1e00_States---Popups-icons.svg",
  PP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  OP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  SHP: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
  OO: "https://d10srchmli830n.cloudfront.net/1653566838817_22ede491-b980-4146-a07c-5220683f59dd_Vector-(3).svg",
};

const OrderDetails = ({
  status,
  statusType,
  courier,
  orderDate,
  orderId,
  lastUpdate,
  isMultiOrder,
  itemList,
  trackArr,
  expectedDelivery,
  is_cod,
  resData
}) => {
  const [isViewMore, setIsViewMore] = useState(false);
  const [showNestedStepper, setShowNestedStepper] = useState(false);

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  const { Step } = Steps;
  const totalInvoice = itemList?.map((item) => item.price).reduce((a, b) => a + b);

  if(resData.err){
    return (
      <MainContainer style={{color : "#FF0006"}}>
          Tracking Id Not Found  
      </MainContainer>
    )
  }
  
  return (
    <div>
      {!isMobileDevice ? (
        <MainContainer>
          <Container>
            <div className="order-placed">
              <img
                src={icons[statusType]}
                height={29}
                width={29}
              />
              <div className="content">
                <div
                  style={{
                    color: Color(statusType),
                  }}
                >
                  {CheckOrderStatus(statusType)}
                </div>

                <div className="subcontent">
                  Last updated on{" "}
                  {moment(lastUpdate)?.format("MMMM Do YYYY, h:mm a")}
                </div>
              </div>
            </div>
            {status !== "delivered" && (
              <div>
                <div className="expected">Expected Delivery </div>
                <div className="delivery-info">
                  {/* {status !== "failed" || status !== "cancelled"
                    ? "-"
                    : `Arriving on ${expectedDelivery}`} */}
                  {moment(expectedDelivery)?.format("MMMM Do YYYY")}
                </div>
              </div>
            )}
            <div className="support">
              <a href="" target="_blank">
                <img
                  src="https://d10srchmli830n.cloudfront.net/1654157170763_7e79ffc0-a8b6-43e3-a113-9b2c5aad2eb0_whatsapp_share.svg"
                  alt="wtsp-share"
                />
              </a>
            </div>
          </Container>
          <Row style={{ marginTop: "12px" }}>
            <Col xl={5} lg={5}>
              <OrderItems
                title="Order Date"
                content={moment(orderDate)?.format("MMMM Do YYYY")}
              />
            </Col>
            <Col xl={5} lg={5}>
              <OrderItems title="Order ID " content={orderId} />
            </Col>
            <Col xl={5} lg={5}>
              <OrderItems title="Courier" content={courier} />
            </Col>
            <Col xl={9} lg={9}>
              <FlexContainer>
                {/* <OrderItems title="Payment Mode" content="Prepaid" /> */}
                <OrderItem style={{ borderRight: 0 }}>
                  <div className="title">Payment Mode</div>
                  <div className="content">Prepaid</div>
                </OrderItem>

                {(statusType === "NDR" ||
                  statusType === "DL") && (
                    <Button
                      type="ghost"
                      style={{
                        borderRadius: "10px",
                        color: "#1C439F",
                        marginLeft: "10px",
                      }}
                    >
                      {statusType === "DL"
                        ? "Return Order"
                        : "Request for Reattempt"}
                    </Button>
                  )}
              </FlexContainer>
            </Col>
          </Row>
          <Divider />
        </MainContainer>
      ) : (
        <MainContainer>
          <Row>
            <Col sm={24} xs={24}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <img src={icons[status]} />
                <div className="content" style={{ marginLeft: "10px" }}>
                  <div style={{ color: Color(status) }}>
                    {CheckOrderStatus(status)}
                  </div>
                  <div className="subcontent">
                    Last updated on{" "}
                    {moment(lastUpdate)?.format("MMMM Do YYYY, h:mm a")}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <SpaceBetweenContainer
            style={{ marginTop: "12px", alignItems: "flex-start" }}
          >
            {status !== "delivered" && (
              <div>
                <div className="expected">Expected Delivery </div>
                <div className="delivery-info">
                  {/* {status !== "failed" || status !== "cancelled"
                    ? "-"
                    : `Arriving on ${expectedDelivery}`} */}
                  {moment(expectedDelivery)?.format("MMMM Do YYYY")}
                </div>
              </div>
            )}
            <div className="support">
              <a>
                <img
                  src="https://d10srchmli830n.cloudfront.net/1654157170763_7e79ffc0-a8b6-43e3-a113-9b2c5aad2eb0_whatsapp_share.svg"
                  alt="wtsp-share"
                />
              </a>
            </div>
          </SpaceBetweenContainer>
          <SpaceBetweenContainer style={{ marginTop: "12px" }}>
            <OrderItems title="Order Date" content="4 April 2022" />
            <OrderItems title="Order ID " content="534524TRRDD" />
          </SpaceBetweenContainer>
          <SpaceBetweenContainer style={{ marginTop: "12px" }}>
            <OrderItems title="Courier" content="Ekart" />
            <OrderItems title="Payment Mode" content="Prepaid" />
          </SpaceBetweenContainer>
        </MainContainer>
      )}

      {isMultiOrder && (
        <div
          style={{ textAlign: "center", marginTop: "-15px" }}
          onClick={() => setIsViewMore(!isViewMore)}
        >
          <ViewButton type="primary" size="large">
            {isViewMore ? "Hide" : "View"} Details{" "}
            {isViewMore ? <UpOutlined /> : <DownOutlined />}
          </ViewButton>
        </div>
      )}

      {(isViewMore || (!isMultiOrder && !isViewMore)) && (
        <StatusContainer>
          <div className="stepper-container">
            <Stepper
              progressDot
              current={trackArr?.length}
              direction="vertical"
            >
              {trackArr?.map((track, index) => {
                return (
                  <Step
                    title={track?.status_array[0]?.status_body}
                    description="Last updated on -April 1st 2022 - 12:00 pm"
                    key={index}
                    // {...track?.status_array[0]?.status_time}
                  ></Step>
                );
              })}

              {/* <Step
                title="Finished"
                onClick={() => setShowNestedStepper(!showNestedStepper)}
                className="steps"
                description={
                  showNestedStepper && (
                    <Steps progressDot current={1} direction="vertical">
                      <Step
                        title="Finished"
                        description="This is a description. This is a description."
                      />
                      <Step
                        title="Finished"
                        description="This is a description. This is a description."
                      />
                      <Step
                        title="Finished"
                        description="This is a description. This is a description."
                      />
                      <Step
                        title="Waiting"
                        description="This is a description."
                      />
                    </Steps>
                  )
                }
              ></Step> */}
            </Stepper>
          </div>
          <div className="brand-details-container">
            <div className="brand-name">Brand Name</div>
            <div className="mode-of-payment">
              <div>Mode of payment :</div>
              <div className="prepaid">
                {!is_cod ? "Prepaid" : "Prepaid"}
              </div>
            </div>
            <div>
              <Heading>Product Details :</Heading>
              <div className="product-name">
                {itemList?.map((item, index) => {
                  return (
                    <div className="product-item" key={index}> 
                      <div>1</div>
                      <div>
                        <div>{item.item_name}</div>
                        <div>Qty : {item.quantity}</div>
                      </div>
                      <div className="prepaid">₹{item.price}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mode-of-payment">
              <div>Total</div>
              <div className="prepaid">₹{totalInvoice}</div>
            </div>
          </div>
        </StatusContainer>
      )}
    </div>
  );
};

export default OrderDetails;
