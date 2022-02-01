import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    fetch(`https://pure-plains-03469.herokuapp.com/feedback`)
      .then((res) => res.json())
      .then((data) => setFeedback(data.reverse()));
  }, []);
  return (
    <div className="bg-gray-100">
      <h1 className="sm:text-4xl lg:ml-40  pt-36 ml-2 text-5xl uppercase  pb-8 font-medium title-font mb-2 text-black">
        <hr className="border-2 border-neutral-800 w-16 ml-1 mr-2 mb-3 font-bold inline-block" />
        Thanks for your sweet words to us
      </h1>

      <div className="lg:mx-40 lg:flex  mx-auto pb-40 ">
        {feedback.slice(0, 3).map((customer) => (
          <div className="max-w-sm mr-2 bg-white border-2 mx-auto border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
            <div id="header" className="flex  items-center mb-4">
              <img
                alt="avatar"
                className="w-20 rounded-full border-2 border-gray-300"
                src="https://picsum.photos/seed/picsum/200"
              />
              <div id="header-text" className="leading-5 ml-6 sm">
                <h4 id="name" className="text-xl font-semibold">
                  {customer.name}
                </h4>
                <h5 id="job" className="font-semibold text-blue-600">
                  {customer.profession}
                </h5>
              </div>
            </div>
            <div id="quote">
              <q className="italic text-gray-600">{customer.feedback}</q>
            </div>
            <Rating
              name="size-medium"
              readOnly
              defaultValue={customer.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
