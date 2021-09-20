import React from 'react';
import { Row, Col } from 'antd';

import {ProductDetailContainer} from './style';
import ProductCard from './ProductCard';

const ProductDetails =({brandData}) =>{
    
    const {other:{product_details =[], other_details = {}} ={}} = brandData;

    return(
        <ProductDetailContainer>
            <Row gutter={[24, 28]}>
                {
                    product_details.map((productData, index) =>{
                        return(
                            <Col key={index} xl={8} lg={8} md={12} sm={24} xs={24}> 
                                <ProductCard productData={productData} otherDetails={other_details} />
                            </Col>
                        )
                    })
                }
            </Row>   
        </ProductDetailContainer> 
    )
}
export default ProductDetails;