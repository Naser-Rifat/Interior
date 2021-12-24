import React from 'react';
import About from '../About/About';
import Discovernew from '../Discovernew/Discovernew';
import Gellary from '../Gellary/Gellary';
import Banner from '../Header/Banner';
import Navigation from '../Header/Navigation';
import LatestInterrior from '../LatestInterior/LatestInterrior';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Discovernew></Discovernew>
            <LatestInterrior></LatestInterrior>
            <Gellary></Gellary>

        </div>
    );
};

export default Home;