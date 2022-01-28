import React from "react";
import { NavLink } from "react-router-dom";

const OrderSummery = ({ props }) => {
  const { total, shippingfee, newtotal, checked } = props;
  return (
    <div className="">
      <div className="flex grid grid-cols-2  mt-4">
        <div className="col-span-1  text-left text-gray-500 font-medium ">
          Subtotal ({checked.length} items)
        </div>
        <div className="col-span-1 text-gray-500 font-medium">
          <span className="text-xl  mr-1">৳</span>
          {newtotal}
        </div>
      </div>

      <div className="flex grid grid-cols-2 mt-2">
        <div className="col-span-1 text-left text-gray-500 font-medium">
          Shipping Fee
        </div>
        <div className="col-span-1 text-gray-500 font-medium">
          <span className="text-xl  mr-1">৳</span>
          {newtotal > 1 ? shippingfee : "0"}
        </div>
      </div>

      <div className="flex grid grid-cols-2 mt-2 ">
        <div className="col-span-1 text-left text-gray-900 font-medium">
          Total
        </div>
        <div className="col-span-1 text-gray-900 font-medium">
          <span className="text-xl  mr-1">৳</span>
          {total}
        </div>
      </div>
      <NavLink to="/stripe">
        <button
          style={{ width: "274px" }}
          className=" py-2 mt-4 bg-pink-500 text-white font-medium  rounded"
        >
          Pay Now
        </button>
      </NavLink>
    </div>
  );
};

export default OrderSummery;
