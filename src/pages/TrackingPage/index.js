
import React, {useContext} from 'react';
import Lottie from 'react-lottie';
import Banner from '../../components/Banner';
import TrackHeader from '../../components/TrackHeader';
import carLoader from '../../components/LottieAnimations/carLoader.json'
//import brandData from '../../components/MainComponent/data.json';
import { DataContext } from '../../context/dataProvider';

const TrackingPage =() =>{

    const { brandDataState } = useContext(DataContext);

    const {brandData ={} } = brandDataState;
    
    return(
        <>
            <TrackHeader brandData={brandData} />
            <Banner />
        </>
        
    )
}
export default TrackingPage;