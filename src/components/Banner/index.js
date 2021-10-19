import React, {useContext} from 'react';
import { DataContext } from '../../context/dataProvider';
import Overview from '../Overview';
import { BannerContainer } from './style';

const Banner =() =>{
    const { brandDataState } = useContext(DataContext);
    const {brandData: {other: { small_banner: {url : mobile_banner} ={}, banner: {url} ={}} ={}} ={} } = brandDataState;
    return(
        <>
            <BannerContainer url={url} mobileBanner={mobile_banner} >
                <Overview />
            </BannerContainer>
        </>
    )
}
export default Banner;