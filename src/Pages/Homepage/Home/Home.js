import React from 'react';
import Showcase from '../../Showscase/Showcase';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import Feedback from '../Feedback/Feedback';
import Gallery from '../Gellary/Gallery';
import LatestInterrior from '../LatestInterior/LatestInterrior';
import Services from '../Services/Services';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    return (
        <div>

            <Banner></Banner>

            <Company></Company>
            <LatestInterrior></LatestInterrior>
            {/* <About></About> */}
            <Showcase></Showcase>
            <Services></Services>
            <Gallery></Gallery>
            <Feedback></Feedback>
            <Subscribe></Subscribe>

        </div>
    );
};

export default Home;