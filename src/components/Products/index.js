import React from 'react';
import { Card, Row, Col } from 'antd';
import { CustomButton } from '../UIElements';

const { Meta } = Card;
const Products = () => {
  return (
    <Row gutter={16} style={{ marginTop: '12px' }}>
      <Col lg={8} sm={24}>
        <Card
          style={{
            borderRadius: '12px',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
          }}
          hoverable={true}
          cover={
            <img
              alt="example"
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/1_c93ac3e7-87da-4d8b-9f11-81e982076519_800x.jpg?v=1608121515"
            />
          }
          actions={[
            <CustomButton style={{ background: 'black' }}>
              Read More
            </CustomButton>,
          ]}
        >
          <Meta
            title="PapyBlem Pigmentation Blemish Cream Gel For Skin Brightening with Papaya & Saffron, 85gm"
            description="Using organic papaya extract & the choicest saffron, our Papyblem pigmentation cream is the perfect skin regimen for improving complexion, repairing skin ...."
          />
        </Card>
      </Col>
      <Col lg={8} sm={24}>
        <Card
          style={{
            borderRadius: '12px',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
          }}
          hoverable={true}
          cover={
            <img
              alt="example"
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/2_c2457748-aa5a-4262-a61a-c777c04e6fdd_800x.jpg?v=1608123645"
            />
          }
          actions={[
            <CustomButton style={{ background: 'black' }}>
              Read More
            </CustomButton>,
          ]}
        >
          <Meta
            title="NicoLips Lip Lightening Scrub For Dark, Dry, Chapped & Damaged Lips Unisex , 20 gm"
            description="NicoLips natural lip scrub is specially designed to work on pigmented, tanned, or nicotine affected lips and restore their original color. The natural ingre...."
          />
        </Card>
      </Col>
      <Col lg={8} sm={24}>
        <Card
          style={{
            borderRadius: '12px',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
          }}
          hoverable={true}
          cover={
            <img
              alt="example"
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/products/3_4daa05e3-c58c-4253-a16b-143514e99ddb_800x.jpg?v=1626938971"
            />
          }
          actions={[
            <CustomButton style={{ background: 'black' }}>
              Read More
            </CustomButton>,
          ]}
        >
          <Meta
            title="Vitamin C-Glow Natural Face Wash With Coffee, Neem & Mint, Oil Control, Acne, Brightening & Glow, Men & Women, 225 ml"
            description="The Vitamin C Face Wash, C-Glow, is a blend of natural & ayurvedic ingredients that gives your face a natural glow. It controls excess oil secretion, de-tan...."
          />
        </Card>
      </Col>
    </Row>
  );
};

export default Products;
