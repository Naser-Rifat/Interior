import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Rating } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";

const theme = createTheme({
  components: {
    Reviews: {
      Rating: {
        sizeLarge: {
          MuiRatingSizeLarge: "large",
        },
      },
    },
  },
});

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon sx={{ fontSize: 40 }} />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon sx={{ fontSize: 40 }} />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon sx={{ fontSize: 40 }} />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon sx={{ fontSize: 40 }} />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 40 }} />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const Reviews = () => {
  const [value, setValue] = useState(0);

  const handleFeedback = () => {
    const updatefeedback = {};
  };
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
            <div className="text-center mt-2">
              <Rating
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
              />
            </div>
            {/* <div className="flex flex-row justify-center mt-2">
              {" "}
              <img
                onChange={() => setValue(1)}
                src="https://img.icons8.com/emoji/48/000000/angry-face-emoji--v2.png"
              />{" "}
              <img
                onChange={() => setValue(2)}
                src="https://img.icons8.com/fluent/48/000000/sad.png"
              />{" "}
              <img
                onChange={() => setValue(3)}
                src="https://img.icons8.com/color/48/000000/happy.png"
              />{" "}
              <img
                onChange={() => setValue(4)}
                src="https://img.icons8.com/emoji/48/000000/smiling-face.png"
              />{" "}
              <img
                className="cursor-pointer hover:bg-clip-border hover:bg-violet-600 border-4 hover:border-4 rounded-full 	"
                onChange={() => setValue(5)}
                src="https://img.icons8.com/color/48/000000/lol.png"
              />{" "}
            </div> */}
            <div className="form-group mt-4">
              <textarea
                className="form-control bg-gray-100  w-96 rounded-lg p-2"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="mt-2 bg-pink-400 transation duration-400ms text-white  hover:shadow-lg	 rounded-lg py-2 ">
              <button
                onClick={handleFeedback}
                type="button"
                className="btn-primary d-block"
              >
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
