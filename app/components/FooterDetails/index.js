import React from "react";
import {
  SpaceBetweenContainer,
  FlexContainer,
  FlexBox,
} from "~/components/UIElements";
import { Card, Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";
import SocialMediaHandles from "./SocialMediaHandles";

const getSocialMediaLink = (socialMediaLinkList, title) => {
  const filteredData = socialMediaLinkList.filter(
    (item) => item.title === title
  );
  return filteredData.length > 0 && filteredData[0]?.link || false;
};

const FooterDetails = ({ footerData, context }) => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  return (
    <>
      {!isMobileDevice ? (
        <Card style={{ marginTop: "8px" }}>
          <SpaceBetweenContainer style={{ padding: "0 8px", flexWrap: "wrap" }}>
            {context?.sellerData && context?.sellerData?.contact ? (
              <span>
                <img
                  src="https://pickrr.s3.amazonaws.com/2022-05-30T12:09:55.835804_Vectorcall_icon.svg"
                  alt="call-icon"
                  width={20}
                  height={20}
                />{" "}
                {context.sellerData?.contact}
              </span>
            ) : (
              <div></div>
            )}

            <span>
              <img
                src="https://pickrr.s3.amazonaws.com/2022-05-30T12:12:41.027293_pickrr_icon.svg"
                alt="pickrr-icon"
              />{" "}
              Powered by Pickrr
            </span>
            <span>Follow Us</span>
          </SpaceBetweenContainer>
          <SpaceBetweenContainer style={{ padding: "0 8px", flexWrap: "wrap" }}>
            {context.sellerData && context?.sellerData?.email ? (
              <span>
                <img
                  src="https://pickrr.s3.amazonaws.com/2022-05-30T12:13:57.379077_mailemail.svg"
                  alt="email-icon"
                />{" "}
                {context.sellerData?.email}
              </span>
            ) : (
              <div></div>
            )}
            <FlexContainer>
              <SocialMediaHandles footerData={footerData} getSocialMediaLink={getSocialMediaLink}/>
            </FlexContainer>
          </SpaceBetweenContainer>
          <FlexContainer
            style={{
              justifyContent: "flex-start",
              padding: "0 8px",
              marginTop: "4px",
            }}
          >
            {footerData && footerData?.call_timings ? (
              <span>
                <img
                  width={20}
                  height={20}
                  src="https://pickrr.s3.amazonaws.com/2022-06-01T19:56:25.148496_clock-icon.svg"
                  alt="clock"
                />{" "}
                ({footerData?.call_timings})
              </span>
            ) : (
              <div></div>
            )}
          </FlexContainer>
        </Card>
      ) : (
        <Card style={{ marginTop: "8px" }}>
          <Row gutter={[0, 12]}>
            <Col sm={24} xs={24}>
              Follow Us
            </Col>
            <Col sm={24} xs={24}>
              <FlexBox>
                <SocialMediaHandles footerData={footerData} getSocialMediaLink={getSocialMediaLink}/>
              </FlexBox>
            </Col>
            <Col sm={24} xs={24}>
              {context?.sellerData && context?.sellerData?.contact ? (
                <span>
                  <img
                    src="https://pickrr.s3.amazonaws.com/2022-05-30T12:09:55.835804_Vectorcall_icon.svg"
                    alt="call-icon"
                    width={20}
                    height={20}
                  />{" "}
                  {context.sellerData?.contact}
                </span>
              ) : (
                <div></div>
              )}
            </Col>
            <Col sm={24} xs={24}>
              {context.sellerData && context?.sellerData?.email ? (
                <span>
                  <img
                    src="https://pickrr.s3.amazonaws.com/2022-05-30T12:13:57.379077_mailemail.svg"
                    alt="email-icon"
                  />{" "}
                  {context.sellerData?.email}
                </span>
              ) : (
                <div></div>
              )}
            </Col>
            <Col sm={24} xs={24}>
              {footerData && footerData?.call_timings ? (
                <span>
                  <img
                    width={20}
                    height={20}
                    src="https://pickrr.s3.amazonaws.com/2022-06-01T19:56:25.148496_clock-icon.svg"
                    alt="clock"
                  />{" "}
                  ({footerData?.call_timings})
                </span>
              ) : (
                <div></div>
              )}
            </Col>
            <Col sm={24} xs={24}>
              <FlexContainer>
                <span>
                  <img
                    src="https://pickrr.s3.amazonaws.com/2022-05-30T12:12:41.027293_pickrr_icon.svg"
                    alt="pickrr-icon"
                  />{" "}
                  Powered by Pickrr
                </span>
              </FlexContainer>
            </Col>
          </Row>
        </Card>
      )}
    </>
  );
};

export default FooterDetails;
