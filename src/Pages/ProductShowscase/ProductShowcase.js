import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "./ProductShowcase.css";

const ProductShowcase = () => {
  const [productsimages, setProductImages] = React.useState([]);

  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    fetch("http://localhost:8000/productsimages")
      .then((res) => res.json())
      .then((data) => setProductImages(data));
  }, []);
  return (
    <div className="lg:flex  mx-auto">
      <div className="  my-auto lg:mt-40 sm:mt-20 lg:w-1/2 sm:w-full">
        <div className=" m-10  ">
          <Slider className="lg:m-10  " {...settings}>
            {productsimages.slice(0, 3).map((productsimage) => (
              <NavLink to="/exploreproducts">
                <div
                  key={productsimage._id}
                  className=" transform hover:scale-105 transition duration-500   hover:bg-dark rounded-t-lg w-80 mx-auto relative 		   productsimg"
                  style={{
                    height: "480px",

                    // backgroundPosition: "center center",
                    backgroundImage: `url(${productsimage.img})`,
                  }}
                >
                  <div className=" absolute bottom-0 uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md py-2   mx-24 my-10 hover:shadow-lg   justify-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300">
                    Explore{" "}
                    <i className=" text-white pl-2 -mb-5 fas fa-arrow-right"></i>
                  </div>
                  {/* <button className="opacitycontrol cursor-pointer border-2 text-xl text-gray-500 absolute bottom-0 bg-white rounded-lg py-2 px-10  mx-16 my-10 hover:shadow-lg   justify-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300">
                    Expolre{" "}
                    <i className=" text-gray-500 pl-2 -mb-5 fas fa-arrow-right"></i>
                  </button> */}
                </div>
                {/* <img key={productsimage._id} className="rounded-t-lg w-80 mx-auto h-96  object-contain	" src={productsimage.img} alt="" /> */}
              </NavLink>
            ))}
          </Slider>
        </div>
      </div>

      <div className=" lg:mt-16  sm:mt-20 lg:w-1/2 sm:w-full">
        <div className="mb-20 lg:text-left ">
          <h1 className="text-4xl productshowtext font-extrabold upercase text-left mb-1 ">
            CHOOSE YOUR PRODUCTS WITH TOTAL EASE
          </h1>
          <i className="productshowtext">
            Ensure best Quality & Comportable to use.
          </i>
        </div>
        <img
          className="mb-0 "
          src="https://aalto.qodeinteractive.com/wp-content/uploads/2017/11/landing-img-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductShowcase;
