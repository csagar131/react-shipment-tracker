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
import { icons } from "./utils";


const OrderItems = ({ title, content, css }) => {
  return (
    <OrderItem style={css}>
      <div className="title" style={{ }}>{title}</div>
      <div className="content">{content}</div>
    </OrderItem>
  );
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
  trackingId
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
          {(status !== "DL" && status !== "LT" && status !== "OC") ? (
              <div className="expectedContainer">
                <div className="expected">Expected Delivery </div>
                <div className="delivery-info">
                  {status === "NDR" || status === "OC"
                    ? "-"
                    : `Arriving on ${moment(new Date(expectedDelivery)).format(
                        "MMMM Do YYYY"
                      )}`}
                </div>
              </div>
            ) : <div></div>}
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
              {/* <OrderItems title="Order ID " content={orderId} /> */}
              <OrderItem>
                <div style={{ textAlign : 'end'}} className="title" >Order ID</div>
                <div className="content" >{orderId}</div>
              </OrderItem>
            </SpaceBetweenContainer>
            <SpaceBetweenContainer style={{ marginTop: "12px" }}>
            <OrderItem>
                <div style={{ textAlign : 'start'}} className="title" >Courier</div>
                <div className="content" >{courier}</div>
              </OrderItem>
              
              <OrderItem>
                <div style={{ textAlign : 'end'}} className="title" >Payment Mode</div>
                <div className="content" style={{ textAlign : 'end'}}>{!data?.is_cod ? "Prepaid" : "COD"}</div>
              </OrderItem>
            </SpaceBetweenContainer>
          </>
        )}
      </MainContainer>
      {isMultiOrder && (
        <div style={{ display : 'flex', justifyContent:'center', marginTop: "-15px" }}>
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
      <div>{status == "DL" && <Feedback data={data} trackingId={trackingId} />}</div>
      {(isViewMore || (!isMultiOrder && !isViewMore)) && (
        <StatusContainer>
          <div className="stepper-container">
            <ProductTracker trackArr={trackArr && trackArr} />
          </div>

          <div className="brand-details-container">
          <div className="brand-name">{data?.company_name}</div>
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
                            <div style={{ marginRight: 10, fontWeight: 600 }}>{index + 1}</div>
                            <div>
                              <div>{item?.item_name}</div>
                              <div>Qty : {item?.quantity}</div>
                            </div>
                          </FlexContainer>
                          <div className="prepaid" style={{fontWeight : '700', color:"#0C3784"}}>₹{item?.price ? Number(item?.price).toFixed(2) :""}</div>
                        </div>
                      );
                    } else {
                      if (showMoreItems) {
                        return (
                          <div className="product-item" key={index}>
                            <FlexContainer>
                              <div
                                 style={{ marginRight: 10, fontWeight: 600 }}
                              >
                                {index + 1}
                              </div>
                              <div>
                                <div>{item?.item_name}</div>
                                <div
                                  style={{
                                    marginRight: "10px",
                                  }}
                                >
                                  Qty : {item?.quantity}
                                </div>
                              </div>
                            </FlexContainer>
                            <div className="prepaid" style={{fontWeight : '700', color:"#0C3784"}}>₹{item?.price ? Number(item?.price).toFixed(2) :""}</div>
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
