import React, {useContext} from 'react';
import { DataContext } from '../../context/dataProvider';
import Overview from '../Overview';
import { BannerContainer } from './style';

const Banner =() =>{
    const { brandDataState } = useContext(DataContext);
    const {brandData: {other: {banner: {url} ={}} ={}} ={} } = brandDataState;
    return(
        <>
            <BannerContainer url={url}>
                <Overview />
            </BannerContainer>
        </>
    )
}
export default Banner;