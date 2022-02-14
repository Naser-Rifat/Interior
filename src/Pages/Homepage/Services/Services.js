import React from "react";
import img1 from "../../../Images/architect.png";
import img3 from "../../../Images/city.png";
import img2 from "../../../Images/interior-design.png";

const Services = () => {
  return (
    <div className="">
      <section className="  text-gray-500 body-font lg:mx-36">
        <div className=" container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl uppercase  font-medium title-font mb-2 text-black">
                <hr className="border-2 border-neutral-800 w-16 mr-2 mb-3 font-bold inline-block" />
                Services
              </h1>
              {/* <div className="h-1 mx-auto r w-20 bg-pink-500 rounded"></div> */}
            </div>
          </div>
          <div className="  lg:flex flex-wrap -m-4">
            <div className="p-4  lg:w-1/3 transform  hover:scale-105 transition duration-500 ">
              <div className="flex rounded-lg h-full bg-white border shadow-sm p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full  text-pink-700 flex-shrink-0">
                    <img src={img1} alt="" />
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg> */}
                  </div>
                  <h2 className="text-pink-700 text-lg title-font font-medium">
                    Architectural development
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-justify text-gray-700 ">
                    Initial Consultation, Pre-Design, and Schematic Design,
                    Construction Documents
                  </p>
                  <a
                    href=""
                    className="mt-3 text-pink-500 hover:text-gray-900 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3  transform  hover:scale-105 transition duration-500">
              <div className="flex rounded-lg border bg-white h-full shadow-sm p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                    <img src={img2} alt="" />
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg> */}
                  </div>
                  <h2 className="text-pink-700 text-lg title-font font-medium">
                    Interior design
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-gray-700">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a
                    href=""
                    className="mt-3 text-pink-500 hover:text-gray-900 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3 transform  hover:scale-105 transition duration-500">
              <div className="flex rounded-lg h-full border shadow-sm p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                    <img src={img3} alt="" />
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg> */}
                  </div>
                  <h2 className="text-pink-700 text-lg title-font font-medium">
                    Commercial interior design
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-gray-700">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a
                    href=""
                    className="mt-3 text-pink-500 hover:text-gray-900 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
