import React, { useState, useContext } from "react";
import {
  MainContainer,
  CustomButton,
} from "./style";

import {
  CustomInput,
  Title,
  Container,
} from "~/components/UIElements";
import { useMediaQuery } from "react-responsive";
import { notification } from "antd";

import DataContext from "~/context/data-context";
import FooterDetails from "~/components/FooterDetails";
import SellerProductDetails from "~/components/SellerProductDetails";
import { useNavigate } from "react-router";

const LandingSearchPage = () => {
  const context = useContext(DataContext);

  const [trackingId, setTrackingId] = useState("");
  const { other: brandUIData } = context.sellerData;
  const navigate = useNavigate();

  const footerData = context.sellerData.other.footer;

  const handleEnterKey = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.target.blur();
      if (!trackingId) {
        notification.error({ message: "Please enter Tracking ID" });
        return;
      } else {
        navigate(`/tracking/${trackingId}`);
      }
    }
  };

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  const handleBtnClick = () => {
    if (!trackingId) {
      notification.error({ message: "Please enter Tracking ID" });
      return;
    } else {
      navigate(`/tracking/${trackingId}`);
    }
  };

  return (
    <>
      <Container>
        <div style={{ padding: `${isMobileDevice ? "8px" : ""}` }}>
          <MainContainer>
            <div className="title">Welcome to Pickrr Tracking !</div>
            <Title className="subtitle"> Track Your Order</Title>
            <div className="support-text">
              You can find tracking ID in the email and SMS alerts you received
              from us upon order confirmation.
            </div>
            <div className="input-button-container">
              <CustomInput
                placeholder="Enter Tracking ID (Comma separated if multiple)"
                onChange={(e) => {
                  setTrackingId(e.target.value);
                }}
                enterbutton="Track"
                size="large"
                onKeyDown={handleEnterKey}
                value={trackingId}
                allowClear
              />
              <CustomButton type="primary" onClick={handleBtnClick} style={{ border : 'none'}}>
                Track Order
              </CustomButton>
            </div>
          </MainContainer>
          <div>
            <img
              src={brandUIData?.banner.url}
              alt="brand-img"
              style={{
                margin: "8px 0",
                border: "1px solid tranparent",
                borderRadius: "10px",
                width: "100%",
              }}
            />
          </div>
        </div>
        <MainContainer style={{ padding: "0", background: "transparent" }}>
          {brandUIData && brandUIData?.product_details.length > 0 && (
            <SellerProductDetails brandUIData={brandUIData} />
          )}
          <FooterDetails footerData={footerData} context={context} />
        </MainContainer>
      </Container>
    </>
  );
};

export default LandingSearchPage;