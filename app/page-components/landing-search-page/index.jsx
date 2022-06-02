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
import { Row, Col, Card } from "antd";
import { Link } from "remix";
import DataContext from "~/context/data-context";
import FooterDetails from "~/components/FooterDetails";
import SellerProductDetails from "~/components/SellerProductDetails";

const LandingSearchPage = () => {
  const context = useContext(DataContext);

  const [trakingId, setTrackingId] = useState("");
  const { other: brandUIData } = context.sellerData;

  const footerData = context.sellerData.other.footer;

  const handleEnterKey = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.target.blur();
    }
  };

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

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
                value={trakingId}
                allowClear
              />
              <Link
                to={`/tracking/${trakingId}`}
                state={brandUIData}
                className="track-order-button-link"
              >
                <CustomButton type="primary">Track Order</CustomButton>
              </Link>
            </div>
          </MainContainer>
          <div>
            <img
              src={brandUIData?.banner.url}
              alt="brand-img"
              style={{
                margin: "16px 0",
                border: "1px solid tranparent",
                borderRadius: "10px",
                width: "100%",
              }}
            />
          </div>
        </div>
        <MainContainer style={{ padding: "0", background: "transparent" }}>
          <SellerProductDetails brandUIData={brandUIData}/>
          <FooterDetails footerData={footerData} context={context}/>
        </MainContainer>
      </Container>
      <Footer src="https://d10srchmli830n.cloudfront.net/1652867194453_e3b1cfc2-46b6-4959-b1e5-c2d02f51c30a_Group-27611.svg" />
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
