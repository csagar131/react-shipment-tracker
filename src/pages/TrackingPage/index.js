
import React from 'react';
import Banner from '../../components/Banner';
import TrackHeader from '../../components/TrackHeader';
import brandData from '../../components/MainComponent/data.json';

const TrackingPage =({brandData =brandData}) =>{
    
    return(
        <>
           <TrackHeader brandData={brandData} />
           <Banner brandData={brandData} />
        </>
    )
}
export default TrackingPage;