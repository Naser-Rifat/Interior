import { CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";
import "./CheckoutForm.css";

const CheckOutForm = ({ name, email, price }) => {
  const { currentuser } = useAuth();
  const stripe = useStripe();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();

  // const totalPaymentAmount = localStorage.getItem("totalItemPrice");
  // const currentUser = localStorage.getItem("currentuser");
  const totalprice = {
    price: price,
  };
  useEffect(() => {
    axios
      .post(
        "https://nameless-spire-32128.herokuapp.com/create-payment-intent",
        totalprice
      )
      .then((res) => setClientSecret(res.data));
    // .then((data) => {
    //   console.log(data);
    //   setClientSecret(data.clientSecret);
    // });
  }, [price]);
  console.log(clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log("[error]", error.message);
    } else {
      setError("");
      console.log(paymentMethod);
    }

    //payment intent
    const { paymentIntent, error: intenterror } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intenterror) {
      setError(intenterror.message);
      setSuccess("");
    } else {
      setError("");
      console.log("payment", paymentIntent);
      setProcessing(false);
      setSuccess("payment succesfully procced");
      localStorage.setItem("totalItemPrice", 0);
      localStorage.setItem("subtotalItemPrice", 0);
      fetch(
        `https://nameless-spire-32128.herokuapp.com/orders?email=${currentuser}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("idToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          for (const value of data) {
            const payment = {
              amount: paymentIntent.amount,
              created: paymentIntent.created,
              last4: paymentMethod.card.last4,
              transaction: paymentIntent.client_secret.slice("_secret")[0],
            };
            axios.put(
              `https://nameless-spire-32128.herokuapp.com/orders/${value._id}`,
              payment
            );

            console.log("total value fetch from backend");
          }
        });
      // const orderConfirm = {
      //   status: 200,
      // };

      //   //   axios.put(`https://nameless-spire-32128.herokuapp.com/orders`, orderConfirm);
    }
  };

  // const handleConfirmPayment = () => () => {
  //   fetch(`https://nameless-spire-32128.herokuapp.com/finalorders?email=${currentUser}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       for (const value of data) {
  //         value.status = 200;
  //         axios.put(`https://nameless-spire-32128.herokuapp.com/orders/${value._id}`, value.status);

  //         console.log("total value fetch from backend");
  //       }
  //     });
  //   // const orderConfirm = {

  //   //   status: 200,

  //   // };

  //   //   axios.put(`https://nameless-spire-32128.herokuapp.com/orders`, orderConfirm);
  // };

  return (
    <>
      {" "}
      <Navigation></Navigation>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          style={{ maxWidth: "600px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="bg-pink-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              Secure payment info
            </h1>
          </div>
          <div className="mb-3 flex -mx-2">
            <div className="px-2">
              <label for="type1" className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-8 ml-3"
                />
              </label>
            </div>
            <div className="px-2">
              <label for="type2" className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type2"
                />
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  className="h-8 ml-3"
                />
              </label>
            </div>
          </div>
          {/* <h4> name:{name}</h4>
          <h4> email:{email}</h4> */}
          <form
            // style={{ width: "50%", margin: "0 auto" }}
            className="mt-20"
            onSubmit={handleSubmit}
          >
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
            {processing ? (
              <div className="text-center">
                <CircularProgress />
              </div>
            ) : (
              <button
                // onClick={handleConfirmPayment}
                type="submit"
                disabled={!stripe || success}
                className="block w-full mt-20 max-w-xs mx-auto bg-pink-500 hover:bg-pink-700 focus:bg-pink-700 text-white rounded-lg px-3 py-3 font-semibold"
              >
                <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW {"$"}
                {price}
                {/* {localStorage.getItem("totalItemPrice")} */}
              </button>
            )}
            {/* <button
              type="submit"
              disabled={!stripe}
              style={{ width: "274px" }}
              className=" py-2 mt-4 bg-pink-500 text-white font-medium  rounded"
            >
              Pay Now ${""}
              {localStorage.getItem("totalItemPrice")}
            </button> */}
            {/* <button type="submit" disabled={!stripe}>
          Pay
        </button> */}
          </form>
          {error && <p className="text-red-500 text-center my-3">{error}</p>}
          {success && (
            <p className="text-green-500 text-center my-3">{success}</p>
          )}
        </div>
      </div>
      {/* <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div
          className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
          style={{ maxWidth: "600px" }}
        >
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              Secure payment info
            </h1>
          </div>
          <div className="mb-3 flex -mx-2">
            <div className="px-2">
              <label for="type1" className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-8 ml-3"
                />
              </label>
            </div>
            <div className="px-2">
              <label for="type2" className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type2"
                />
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  className="h-8 ml-3"
                />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                defaultValue={user?.displayName}
                placeholder="John Smith"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">
                Expiration date
              </label>
              <div>
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>
          <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
              <input
                className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="000"
                type="text"
              />
            </div>
          </div>
          <div>
            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
            </button>
          </div>
        </div>
      </div> */}
      <Footer></Footer>
    </>
  );
};

export default CheckOutForm;
