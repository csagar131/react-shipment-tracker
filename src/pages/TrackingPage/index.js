
import React, {useContext} from 'react';
import Banner from '../../components/Banner';
import TrackHeader from '../../components/TrackHeader';
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