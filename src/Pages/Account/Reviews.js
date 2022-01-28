import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";

const Reviews = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="container flex justify-center	">
        <div className="card mt-5 pb-5">
          <div className="flex flex-row justify-between p-3 adiv text-white">
            {" "}
            <i className="fas fa-chevron-left"></i>{" "}
            <span className="pb-3">feedback</span>{" "}
            <i className="fas fa-times"></i>{" "}
          </div>
          <div className="mt-2 p-4 text-center">
            <h6 className="mb-0">Your feedback help us to improve.</h6>{" "}
            <small className="px-3">
              Please let us know about your chat experience.
            </small>
            <div className="flex flex-row justify-center mt-2">
              {" "}
              <img src="https://img.icons8.com/emoji/48/000000/angry-face-emoji--v2.png" />{" "}
              <img src="https://img.icons8.com/fluent/48/000000/sad.png" />{" "}
              <img src="https://img.icons8.com/color/48/000000/happy.png" />{" "}
              <img src="https://img.icons8.com/emoji/48/000000/smiling-face.png" />{" "}
              <img src="https://img.icons8.com/color/48/000000/lol.png" />{" "}
            </div>
            <div className="form-group mt-4">
              <textarea
                className="form-control bg-gray-100  w-96 rounded-lg p-2"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="mt-2 bg-pink-400 transation duration-400ms text-white  hover:shadow-lg	 rounded-lg py-2 ">
              <button type="button" className="btn-primary d-block">
                <span>Send feedback</span>
              </button>
            </div>
            <NavLink to="/home">
              <p className="mt-3 text-gray-500 hover:text-blue-500">
                Continue without sending feedback
              </p>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Reviews;
