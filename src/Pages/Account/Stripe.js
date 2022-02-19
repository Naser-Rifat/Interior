import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckoutForm";
const Stripe = () => {
  //   const { currentuser } = useAuth();

  //   const [orders, setOrders] = useState([]);
  //   const [totalPrice, setTotalPrice] = useState(0);
  //   const [subtotal, setSubtotal] = useState(0);
  //   const currentUser = localStorage.getItem("currentuser");
  const name = localStorage.getItem("customername");
  const email = localStorage.getItem("customeremail");
  const totalPrice = parseInt(localStorage.getItem("totalItemPrice"));
  //   const subTotalPrice = localStorage.getItem("subtotalItemPrice");
  //   let newtotal = 0;

  //   const shippingfee = 40;
  //   useEffect(() => {
  //     fetch(`http://localhost:7000/finalorders?email=${currentuser}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setOrders(data);
  //         //     let total = 0;
  //         //     for (const value of data) {
  //         //       newtotal = parseInt(value.price) + parseInt(newtotal);
  //         //       total = shippingfee + newtotal;
  //         //       setTotalPrice(total);
  //         //       setSubtotal(newtotal);
  //         //       console.log("total value fetch from backend");
  //         //     }
  //       });
  //   }, [currentuser]);

  const stripePromise = loadStripe(
    "pk_test_51KRz35GbmEtMgWsc53XlZvsVDIMxRxzDjRQVkyGx30KwonL2eIsrwM5YqWm6yuboxeQHQx2bVeKocisA81fm2ihY00e6gwuQIN"
  );
  //   const totalPaymentAmount = localStorage.getItem("totalItemPrice");

  return (
    <div>
      {totalPrice && (
        <Elements stripe={stripePromise}>
          <CheckOutForm email={email} name={name} price={totalPrice} />
        </Elements>
      )}
    </div>
  );
};

export default Stripe;
