import React from "react";
import {
  SpaceBetweenContainer,
  FlexContainer,
  FlexBox,
} from "~/components/UIElements";
import { Card, Col, Row } from "antd";
import { useMediaQuery } from "react-responsive";

const getSocialMediaLink = (socialMediaLinkList, title) => {
  const filteredData = socialMediaLinkList.filter(
    (item) => item.title === title
  );
  return filteredData[0].link;
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
              <a
                href={getSocialMediaLink(footerData.social_media, "facebook")}
                target="_blank"
              >
                <img
                  src="https://d10srchmli830n.cloudfront.net/1654153662790_a54d45a8-5c32-488d-b7f1-8225876974f2_Facebookfb_icon.svg"
                  alt="fb-icon"
                  style={{ marginRight: "12px" }}
                />
              </a>
              <a
                href={getSocialMediaLink(footerData.social_media, "instagram")}
                target="_blank"
              >
                <img
                  src="https://d10srchmli830n.cloudfront.net/1654153868600_0a077458-1763-4f91-a524-2df93d640aa2_Groupinsta_icon.svg"
                  alt="insta-icon"
                  style={{ marginRight: "12px" }}
                />
              </a>
              <a
                href={getSocialMediaLink(footerData.social_media, "twitter")}
                target="_blank"
              >
                <img
                  src="https://d10srchmli830n.cloudfront.net/1654153692421_f9b87b8c-d6ae-4498-b298-4daabfdb9f58_Twittertwitter_icon.svg"
                  alt="twiiter-icon"
                  style={{ marginRight: "12px" }}
                />
              </a>
              <a
                href={getSocialMediaLink(footerData.social_media, "youtube")}
                target="_blank"
              >
                <img
                  src="https://d10srchmli830n.cloudfront.net/1654153737272_cad9331b-aee1-4a09-963b-96c815d79a14_YouTubeyoutube_icon.svg"
                  alt="youtube-icon"
                />
              </a>
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
              <></>
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
                <a
                  href={getSocialMediaLink(footerData.social_media, "facebook")}
                  target="_blank"
                >
                  <img
                    src="https://d10srchmli830n.cloudfront.net/1654153662790_a54d45a8-5c32-488d-b7f1-8225876974f2_Facebookfb_icon.svg"
                    alt="fb-icon"
                    style={{ marginRight: "12px" }}
                  />
                </a>
                <a
                  href={getSocialMediaLink(
                    footerData.social_media,
                    "instagram"
                  )}
                  target="_blank"
                >
                  <img
                    src="https://d10srchmli830n.cloudfront.net/1654153868600_0a077458-1763-4f91-a524-2df93d640aa2_Groupinsta_icon.svg"
                    alt="insta-icon"
                    style={{ marginRight: "12px" }}
                  />
                </a>
                <a
                  href={getSocialMediaLink(footerData.social_media, "twitter")}
                  target="_blank"
                >
                  <img
                    src="https://d10srchmli830n.cloudfront.net/1654153692421_f9b87b8c-d6ae-4498-b298-4daabfdb9f58_Twittertwitter_icon.svg"
                    alt="twiiter-icon"
                    style={{ marginRight: "12px" }}
                  />
                </a>
                <a
                  href={getSocialMediaLink(footerData.social_media, "youtube")}
                  target="_blank"
                >
                  <img
                    src="https://d10srchmli830n.cloudfront.net/1654153737272_cad9331b-aee1-4a09-963b-96c815d79a14_YouTubeyoutube_icon.svg"
                    alt="youtube-icon"
                  />
                </a>
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
                <></>
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
