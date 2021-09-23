import React from 'react';
import { Card } from 'antd';
import { CustomButton } from '../UIElements';

const { Meta } = Card;

const ProductCard =({productData ={}, otherDetails}) =>{
  const {primary_color ='', secondary_font_color =''} = otherDetails;
    return(
      <Card
          style={{
            borderRadius: '12px',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
          }}
          hoverable={true}
          cover={
            <img
              alt="example"
              src={productData?.image_url}
              style={{paddingTop: 12}}
            />
          }
          actions={[
            <CustomButton
              style={{ background: `${primary_color ? primary_color :  '#000'}`, color: `${secondary_font_color ? secondary_font_color : '#fff'}` }}
              buttonColor={primary_color}
              onClick={() =>
                window.open(
                  productData.link
                )
              }
            >
              Read More
            </CustomButton>,
          ]}
        >
          <Meta
            title={productData?.product_heading}
            description={productData?.product_detail}
          />
        </Card>
    )
}
export default ProductCard;