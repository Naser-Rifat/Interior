import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Alert, Rating, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";

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

const FeedbackDraw = () => {
  const { user } = useAuth();
  const [value, setValue] = useState(0);
  const [profession, setProffesion] = useState("");
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleFeedback = (e) => {
    e.preventDefault();

    const updatefeedback = {
      name: user?.displayName,
      rating: value,
      feedback: feedback,
      profession: profession,
      img: user?.photoURL,
    };
    axios.post(`http://localhost:7000/feedback`, updatefeedback).then((res) => {
      if (res.data.acknowledged === true) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    });
  };

  const handleChange = (event) => {
    setProffesion(event.target.value);
    console.log(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thanks for your feedback!
        </Alert>
      </Snackbar>
      <Navigation></Navigation>
      <div className="container flex justify-center	">
        <div className="card mt-5 pb-5">
          <div className="flex flex-row justify-between p-3 adiv text-white">
            <i className="fas fa-chevron-left"></i>
            <span className="pb-3">feedback</span>
            <i className="fas fa-times"></i>
          </div>
          <div className="mt-2 p-4 text-center">
            <h6 className="mb-0">Your feedback help us to improve.</h6>
            <small className="px-3">
              Please let us know about your experience with us.
            </small>
            <form onSubmit={handleFeedback}>
              <div className="text-center mt-2">
                <Rating
                  name="highlight-selected-only"
                  defaultValue={2}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  IconContainerComponent={IconContainer}
                  highlightSelectedOnly
                  required
                />
              </div>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Profession
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={profession}
                    label="Profession"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Student "}>Student</MenuItem>
                    <MenuItem value={"Engineer "}>Engineer</MenuItem>
                    <MenuItem value={"Designer"}>Designer</MenuItem>
                    <MenuItem value={"Teacher"}>Teacher</MenuItem>
                    <MenuItem value={"Bussiness"}>Bussiness</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <div className="form-group mt-4">
                <textarea
                  onChange={(e) => setFeedback(e.target.value)}
                  className="form-control bg-gray-100  w-96 rounded-lg p-2"
                  rows="4"
                  required
                  placeholder="Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-2 bg-pink-400 transation duration-400ms text-white w-96 hover:shadow-lg	 rounded-lg py-2 "
                >
                  <span>Send feedback</span>
                </button>
              </div>
            </form>
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

export default FeedbackDraw;
