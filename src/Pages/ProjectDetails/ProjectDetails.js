import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";

const ProjectDetails = () => {
  const [projectdetails, setProjectDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:7000/latest_interiors/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjectDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return (
    <div>
      <Navigation></Navigation>
      <div
        style={{ width: "100%", backgroundColor: "#F3F4F6" }}
        className=" mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <HashLink to="/home" className="hover:underline hover:text-gray-600">
            Home
          </HashLink>
          <span>
            <svg
              className="h-5 w-5 leading-none text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <HashLink
            to="/home#latestproject"
            className="hover:underline hover:text-gray-600"
          >
            LatestInterior
          </HashLink>
          <span>
            <svg
              className="h-5 w-5 leading-none text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <span>Project details</span>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#F3F4F6" }}
        className="min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative"
      >
        <section className="py-48 px-10 bg-white flex flex-col justify-center">
          <div className="lg:grid grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="-mt-20 mb-2 lg:flex  justify-end">
              <img
                style={{ height: "516px" }}
                className="w-2/3   object-cover rounded-lg overflow-hidden"
                src={projectdetails.img2}
              />
            </div>
            <div className="lg:flex  justify-start">
              <img
                style={{ height: "347px" }}
                className="rounded-lg object-cover sm:my-2 h-full w-full overflow-hidden"
                src={projectdetails.img3}
              />
            </div>
            <div className="mt-2 mb-16 flex  justify-start">
              <img
                style={{ height: "702px" }}
                className="rounded-lg object-cover  w-full overflow-hidden"
                src={projectdetails.img4}
              />
            </div>
            <div className="lg:flex justify-start  ">
              <div className="-translate-y-20 transform  p-16 shadow-xl rounded-xl overflow-hidden bg-white">
                <div className="space-y-4">
                  <p className="text-5xl font-bold text-black tracking-tight">
                    {projectdetails.title}
                  </p>
                  <p className="text-xl text-black">
                    {projectdetails.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 border-t-2  border-gray-200 mt-12 pt-12 pb-2">
                  <p className="text-gray-600 font-semibold"> Object type: </p>
                  <p className=""> {projectdetails.objectType} </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-2 py-2">
                  <p className="text-gray-600 font-semibold">Area: </p>
                  <p className=""> {projectdetails.Area} </p>
                </div>
                <div className="grid grid-cols-2 gap-6  mt-2 py-2">
                  <p className="text-gray-600 font-semibold">
                    {" "}
                    Term of works:{" "}
                  </p>
                  <p className=""> {projectdetails.TermOfWorks} </p>
                </div>
                <div className="grid grid-cols-2 gap-6  mt-2 py-2">
                  <p className="text-gray-600 font-semibold"> Location: </p>
                  <p className=""> {projectdetails.address} </p>
                </div>

                <ul className="social-share social-links without-bg grid grid-cols-10 pt-10 pb-2 ">
                  <li>
                    {" "}
                    <a
                      className="share-btn share-btn-facebook share-btn-1"
                      href="#"
                    >
                      {" "}
                      <i className="fab fa-facebook-f"></i>{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      className="share-btn share-btn-twitter share-btn-2"
                      href="#"
                    >
                      {" "}
                      <i className="fab fa-twitter"></i>{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      className="share-btn share-btn-linkedin share-btn-3"
                      href="#"
                    >
                      {" "}
                      <i className="fab fa-linkedin"></i>{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      className="share-btn share-btn-reddit share-btn-4"
                      href="#"
                    >
                      {" "}
                      <i
                        className="fab fa-reddit-alien"
                        aria-hidden="true"
                      ></i>{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      className="share-btn share-btn-pinterest share-btn-5"
                      href="#"
                    >
                      {" "}
                      <i className="fab fa-pinterest-p"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"></div>
      <Footer></Footer>
    </div>
  );
};

export default ProjectDetails;
