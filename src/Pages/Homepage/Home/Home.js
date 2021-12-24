import React from 'react';
import About from '../About/About';
import Discovernew from '../Discovernew/Discovernew';
import Gellary from '../Gellary/Gellary';
import Banner from '../Header/Banner';
import Navigation from '../Header/Navigation';
import LatestInterrior from '../LatestInterior/LatestInterrior';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <LatestInterrior></LatestInterrior>
            <Discovernew></Discovernew>
            <About></About>
            <Services></Services>
            <Gellary></Gellary>
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;