import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";

const Payment = () => {
  const { currentuser } = useAuth();
  // const currentUser = localStorage.getItem("currentuser");
  // const [checked, setChecked] = React.useState([]);

  const [orders, setOrders] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [subtotal, setSubtotal] = useState(0);
  // const cartItems = localStorage.getItem("totalItemPrice");

  // let newtotal = 0;
  // let total = 0;
  // const shippingfee = 40;

  const totalPrice = localStorage.getItem("totalItemPrice");
  const subTotalPrice = localStorage.getItem("subtotalItemPrice");
  const newOrder = localStorage.getItem("newOrder");

  // let newtotal = 0;
  // let total = 0;
  // const shippingfee = 40;
  // if (checked == false) {
  //   newtotal = 0;
  // }
  // useEffect(() => {
  //   setOrders(localStorage.getItem("cartitem"));
  // }, []);
  // let newtotal = 0;

  let shippingfee = 40;
  useEffect(() => {
    fetch(`http://localhost:7000/orders?email=${currentuser}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);

        // let total = 0;
        // for (const value of data) {
        //   newtotal = parseInt(value.price) + parseInt(newtotal);
        //   total = shippingfee + newtotal;
        //   setTotalPrice(total);
        //   setSubtotal(newtotal);
        //   console.log("total value fetch from backend");
        // }
      });
  }, [currentuser]);
  console.log("total value fetch from backend", totalPrice);
  // const handlePament=(id)=>{

  //     fetch(`http://localhost:7000/finalorders/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setOrders(data);
  //       });
  //   }
  // }

  // const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

  return (
    <div>
      <Navigation></Navigation>

      <div className="grid lg:grid-cols-12 bg-gray-100  ">
        <div className="bg-white my-5 p-8 rounded-md w-full col-span-8">
          <div className="leading-loose">
            <form className="max-w-xl p-4 bg-white rounded">
              <p className="text-gray-800 font-medium">Billing information</p>
              <div className="">
                <label className="block text-sm text-gray-00" for="cus_name">
                  Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-50 rounded"
                  id="cus_name"
                  name="cus_name"
                  type="text"
                  required=""
                  placeholder="Your Name"
                  aria-label="Name"
                />
              </div>
              <div className="mt-2">
                <label className="block text-sm text-gray-600" for="cus_email">
                  Email
                </label>
                <input
                  className="w-full px-5  py-4 text-gray-700 bg-gray-50 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Your Email"
                  aria-label="Email"
                />
              </div>
              <div className="mt-2">
                <label className=" block text-sm text-gray-600" for="cus_email">
                  Address
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-50 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Street"
                  aria-label="Email"
                />
              </div>
              <div className="mt-2">
                <label
                  className="hidden text-sm block text-gray-600"
                  for="cus_email"
                >
                  City
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-50 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="City"
                  aria-label="Email"
                />
              </div>
              <div className="inline-block mt-2 w-1/2 pr-1">
                <label
                  className="hidden block text-sm text-gray-600"
                  for="cus_email"
                >
                  Country
                </label>
                <input
                  className="w-full px-2 py-2 text-gray-700 bg-gray-50 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Country"
                  aria-label="Email"
                />
              </div>
              <div className="inline-block mt-2  pl-1 w-1/2">
                <label
                  className="hidden block text-sm text-gray-600"
                  for="cus_email"
                >
                  Zip
                </label>
                <input
                  className="w-full px-3 py-2 text-gray-700 bg-gray-50 m-0 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Zip"
                  aria-label="Email"
                />
              </div>
              {/* <p className="mt-4 text-gray-800 font-medium">Payment information</p>
    <div className="">
      <label className="block text-sm text-gray-600" for="cus_name">Card</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-50 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name"/>
    </div>
    <div className="mt-4">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">$3.00</button>
    </div> */}
            </form>
          </div>
          <div>
            <div className=" -mx-4 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        products
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.map((order) => {
                      return (
                        <>
                          {!order.payment ? (
                            <tr key={order._key}>
                              <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                                <p> {order.title}</p>
                                {/* <div className="flex items-center">
                                  <div className="flex-shrink-0 w-20 h-20">
                                    <img
                                      className="w-full h-full rounded"
                                      src={`data:image/*;base64,${order.img}`}
                                      alt=""
                                    />
                                    <p> {order.title}</p>
                                  </div>
                                </div> */}
                              </td>
                              <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {order.model}
                                </p>
                              </td>
                              <td className="px-5 text-center py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {order.price}
                                </p>
                              </td>
                            </tr>
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing {newOrder} to {newOrder} of {newOrder} Entries
                  </span>
                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-pink-400 bg-pink-600 font-semibold py-2 px-4 rounded-l">
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-pink-400 bg-pink-600 font-semibold py-2 px-4 rounded-r">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 border-2 bg-white w-full my-5 lg:mx-16 ml-6">
          <div className=" m-5">
            <div className="text-center p-2 ">
              <div className="">
                <div className="bg-pink-400 text-white p-2 font-medium rounded">
                  Order Summary
                </div>
              </div>
              <Divider />
              {/* {
                <Elements stripe={stripePromise}>
                  <CheckOutForm />
                </Elements>
              } */}
              <div className="">
                <div className="flex grid grid-cols-2  mt-4">
                  <div className="col-span-1  text-left text-gray-500 font-medium ">
                    Subtotal ({newOrder} items)
                  </div>
                  <div className="col-span-1 text-gray-500 font-medium">
                    <span className="text-xl  mr-1">৳</span>
                    {subTotalPrice}
                  </div>
                </div>

                <div className="flex grid grid-cols-2 mt-2">
                  <div className="col-span-1 text-left text-gray-500 font-medium">
                    Shipping Fee
                  </div>
                  <div className="col-span-1 text-gray-500 font-medium">
                    <span className="text-xl  mr-1">৳</span>
                    {totalPrice > 1 ? shippingfee : "0"}
                  </div>
                </div>

                <div className="flex grid grid-cols-2 mt-2 ">
                  <div className="col-span-1 text-left text-gray-900 font-medium">
                    Total
                  </div>
                  <div className="col-span-1 text-gray-900 font-medium">
                    <span className="text-xl  mr-1">
                      {/* {localStorage.getItem("totalItemPrice")} */}
                    </span>
                    {totalPrice}
                  </div>
                </div>
                <NavLink to={`/stripe`}>
                  <button
                    style={{ width: "274px" }}
                    className=" py-2 mt-4 bg-pink-500 text-white font-medium  rounded"
                  >
                    Pay Now
                    {/* {localStorage.getItem("totalItemPrice")} */}
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Payment;
