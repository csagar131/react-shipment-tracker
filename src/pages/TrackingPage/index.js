
import React, {useContext} from 'react';
import Lottie from 'react-lottie';
import Banner from '../../components/Banner';
import TrackHeader from '../../components/TrackHeader';
import carLoader from '../../components/LottieAnimations/carLoader.json'
//import brandData from '../../components/MainComponent/data.json';
import { DataContext } from '../../context/dataProvider';

const TrackingPage =() =>{

    const { brandDataState } = useContext(DataContext);

    const loaderOptions = {
        loop: true,
        autoplay: true,
        animationData: carLoader,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

    const {brandData ={}, brandLoading } = brandDataState;
    
    return(
        <>
        {
            brandLoading ? 
            (<Lottie options={loaderOptions} height={250} width={250} />)
            :
            (<>
                <TrackHeader brandData={brandData} />
                <Banner />
            </>
            )
        }
           
        </>
    )
}
export default TrackingPage;