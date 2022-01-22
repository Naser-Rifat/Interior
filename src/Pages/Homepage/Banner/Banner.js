import React from "react";
import chair from "../../../Images/Image/chair&lamp2.jpg";
import Navigation from "../../Shared/Navigation";
import "./bnaner.css";

const Banner = () => {
  return (
    <div>
      <Navigation></Navigation>
      <main className="dark:bg-gray-800 bg-white relative overflow-hidden lg:h-screen">
        <div className=" bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative py-16">
            <div className="text-start sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 className="m font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col  dark:text-white text-gray-800">
                Meet
                <span className="text-5xl sm:text-7xl">natural art</span>
              </h1>
              <p className="text-sm italic sm:text-base text-gray-700 dark:text-white">
                “We shape our homes and then our homes shape us.” – Winston
                Churchill
              </p>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img src={chair} className="max-w-xs lg:max-w-sm m-auto" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;
