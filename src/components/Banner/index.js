import React from 'react';
import Overview from '../Overview';
import ProductDetails from '../ProductDetails';
import { BannerContainer } from './style';

const Banner =({brandData}) =>{
        const {banner: {url} ={}} = brandData;
    return(
        <>
            <BannerContainer url={url}>
                <Overview  brandData={brandData}/>
            </BannerContainer>
        </>
    )
}
export default Banner;