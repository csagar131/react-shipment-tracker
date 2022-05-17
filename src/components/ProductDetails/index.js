import React, { useContext } from 'react';
import { Row, Col } from 'antd';

import { ProductDetailContainer } from './style';
import ProductCard from './ProductCard';
import { DataContext } from '../../context/dataProvider';

const ProductDetails = () => {
  const { brandDataState } = useContext(DataContext);

  const {
    brandData: {
      other: { product_details = [], other_details = {} } = {},
    } = {},
  } = brandDataState;

  const { brandData = {} } = brandDataState;
  return (
    <ProductDetailContainer
      height={!Object.keys(brandData).length ? true : false}
      products={product_details && product_details.length}
    >
      <Row gutter={[24, 28]} style={{ justifyContent: 'center' }}>
        {!!product_details.length &&
          product_details.map((productData, index) => {
            return (
              productData && (
                <Col key={index} xl={8} lg={8} md={12} sm={24} xs={24}>
                  <ProductCard
                    productData={productData}
                    otherDetails={other_details}
                  />
                </Col>
              )
            );
          })}
      </Row>
    </ProductDetailContainer>
  );
};
export default ProductDetails;
