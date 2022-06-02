import React, { useContext } from "react";
import {
  FlexColContainer,
} from "~/components/UIElements";

import { Row, Col, Card } from "antd";

import { ProductDetailContainer } from "./style";
import { useMediaQuery } from "react-responsive";
const SellerProductDetails = ({brandUIData}) => {

const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });

  return (
    <Card style={{ height: "auto" }} xl={24} lg={24}>
      <Row>
        {brandUIData?.product_details.map((item) => {
          return (
            <Col xl={8} lg={8} sm={24} xs={24} key={item.link}>
              <Card
                style={{
                  border: "none",
                  color: "#38446D",
                  fontWeight: "700",
                  marginTop: `${isMobileDevice ? "8px" : ""}`,
                }}
              >
                <FlexColContainer center={"center"}>
                  <img
                    src={item.image_url}
                    alt="item"
                    style={{ width: "200px", height: "200px" }}
                  />
                  <span
                    style={{
                      marginTop: "12px",
                      padding: "0 24px",
                      textAlign: "center",
                    }}
                  >
                    {item.product_heading}
                  </span>

                  <ProductDetailContainer>
                    {item.product_detail}
                  </ProductDetailContainer>
                </FlexColContainer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default SellerProductDetails;
