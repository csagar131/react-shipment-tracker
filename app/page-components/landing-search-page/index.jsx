import React, { useState, useContext } from "react";
import {
  Footer,
  MainContainer,
  CustomButton,
  ProductDetailContainer,
} from "./style";

import {
  CustomInput,
  Title,
  Container,
  FlexColContainer,
  SpaceBetweenContainer,
  FlexContainer,
} from "~/components/UIElements";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Card, notification } from "antd";
import { Link, redirect } from "remix";
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
        navigate(`/tracking/${trackingId}`, { replace: true });
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
      navigate(`/tracking/${trackingId}`, { replace: true });
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
              <CustomButton type="primary" onClick={handleBtnClick}>
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

// <LandingSearchPageContainer>
//   <MainContainer>
//     <div className="title">Welcome to Pickrr Tracking !</div>
//     <Title className="subtitle"> Track Your Order</Title>
//     <div className="support-text">
//       You can find tracking ID in the email and SMS alerts you received from
//       us upon order confirmation.
//     </div>
//     <div  className="input-button-container">
//       <CustomInput
//         placeholder="Enter Tracking ID (Comma separated if multiple)"
//         onChange={(e) => {
//           setInput(e.target.value);
//         }}
//         enterbutton="Track"
//         size="large"
//         onKeyDown={handleEnterKey}
//         value={input}
//       />
//       <Link to={`/tracking/${input}`} className="track-order-button-link">
//         <CustomButton type="primary submit">
//           Track Order
//         </CustomButton>
//       </Link>
//     </div>
//     <div className="powered">Powered by Pickrr </div>
//   </MainContainer>
//   <Footer src="https://d10srchmli830n.cloudfront.net/1652867194453_e3b1cfc2-46b6-4959-b1e5-c2d02f51c30a_Group-27611.svg" />
// </LandingSearchPageContainer>
