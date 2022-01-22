import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LatestInterrior = () => {
  const [interiorProjects, setProjectImage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/latest_interiors")
      .then((res) => res.json())
      .then((data) => {
        setProjectImage(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div id="latestproject" className="">
      <div className="min-h-screen bg-white flex justify-center items-center ">
        <div className="lg:mx-40 mx-auto    rounded-xl">
          <h1 className="text-4xl uppercase font-medium from-current text-black mb-8">
            <hr className="border-2 border-neutral-800 w-16 mr-2 mb-3 font-bold inline-block" />
            Latest Projects
          </h1>
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
            {interiorProjects.map((interiorProject) => (
              <div className="bg-white">
                <div>
                  <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
                    <NavLink to={`/projectdetails/${interiorProject._id}`}>
                      <div>
                        <img className="w-full" src={interiorProject.img} />
                        <div className="px-4 py-2 ">
                          <h1 className="text-xl font-gray-700 font-bold">
                            {interiorProject.title}
                          </h1>
                          <div className="flex justify-start  space-x-2 mt-2">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" h-4 w-4  text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </span>
                            <h3 className=" text-sm text-gray-600 font-semibold mb-2">
                              {interiorProject.address}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestInterrior;
