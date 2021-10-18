import React, {useContext} from 'react';
import { DataContext } from '../../context/dataProvider';
import Overview from '../Overview';
import { BannerContainer } from './style';

const Banner =() =>{
    const { brandDataState } = useContext(DataContext);
    const {brandData: {other: {other_details: {primary_color, secondary_color} ={},banner: {url} ={}} ={}} ={} } = brandDataState;
    return(
        <>
            <BannerContainer url={url} bannerColor={secondary_color} >
                <Overview />
            </BannerContainer>
        </>
    )
}
export default Banner;