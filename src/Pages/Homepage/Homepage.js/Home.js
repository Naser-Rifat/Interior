import React from "react";
import Footer from "../../Shared/Footer";
import Banner from "../Banner/Banner";
import Company from "../Company/Company";
import Feedback from "../Feedback/Feedback";
import Gallery from "../Gellary/Gallery";
import LatestInterrior from "../LatestInterior/LatestInterrior";
import ProductShowcase from "../ProductShowscase/ProductShowcase";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>

      <Company></Company>
      <LatestInterrior></LatestInterrior>
      {/* <About></About> */}
      <ProductShowcase></ProductShowcase>
      <Services></Services>
      <Gallery></Gallery>
      <Feedback></Feedback>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
