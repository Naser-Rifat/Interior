import { DialogTitle, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";

const Orders = () => {
  const { currentuser, user } = useAuth();
  // const currentuser = localStorage.getItem("currentuser");
  // const [checked, setChecked] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalPrice, setTotaPrice] = useState(0);
  const [newOrder, setNeworder] = useState(0);
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [idvalue, setIdvalue] = useState(0);
  // const navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = (id) => {
    setOpen(true);
    console.log(id);
    setIdvalue(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let newtotal = 0;
  // let totalPrice = localStorage.getItem("totalItemPrice");

  // let neworder = [];
  const shippingfee = 40;
  // if (checked == false) {
  //   newtotal = 0;
  // }

  // const [ordersubtotal, setOrdersubtotal] = useState([]);

  useEffect(() => {
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
        setOrders(data);
        let total = 0;
        let count = 0;
        for (const value of data) {
          if (!value.payment) {
            count = count + 1;
            newtotal = parseInt(value.price) + parseInt(newtotal);
            total = shippingfee + newtotal;
            setSubtotal(newtotal);
            setNeworder(parseInt(count));
            console.log(count);
            console.log(value);
            setTotaPrice(total);
            //  console.log("under new order", neworder);
            // setTotal(total);
            localStorage.setItem("totalItemPrice", parseInt(total));
            localStorage.setItem("newOrder", count);
            localStorage.setItem("subtotalItemPrice", parseInt(newtotal));
          }
          // localStorage.setItem("orderID", value._id);
        }
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, [orders]);

  // if (res.status === 200) {
  //   return res.json();
  // } else if (res.status === 401) {
  //   navigate("/login");
  // }
  // for (const value of orders) {
  //   newtotal = value + parseInt(value.price);
  //   seTotal(newtotal);
  // }

  // orders?.map((value) =>
  //   seTotal((newtotal = parseInt(value.price) + parseInt(newtotal)))
  // );
  // console.log(total);
  const handleModalDelete = () => {
    handleDelete(idvalue);
    console.log(idvalue);
    handleClose();
  };

  const handleDelete = (id) => {
    fetch(`https://nameless-spire-32128.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const filter = orders.filter((order) => order._id !== id);
          let total = 0;
          let count = 0;
          for (const value of filter) {
            if (!value.payment) {
              count = count + 1;
              newtotal = parseInt(value.price) + parseInt(newtotal);
              total = shippingfee + newtotal;
              setSubtotal(parseInt(newtotal));
              setNeworder(parseInt(count));
              console.log(count);
              console.log(value);
              //  console.log("under new order", neworder);
              // setTotal(total);
              localStorage.setItem("totalItemPrice", parseInt(total));
              localStorage.setItem("newOrder", count);
              localStorage.setItem("subtotalItemPrice", parseInt(newtotal));
            }
          }
          setOrders(filter);
        }
      });
  };
  console.log(newOrder);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  //   console.log("new result", newChecked);
  //   const finalorder = {
  //     name: value.name,
  //     email: value.email,
  //     price: value.price,
  //     model: value.model,
  //     title: value.title,
  //     status: value.status,
  //     img: value.img,
  //   };
  //   localStorage.setItem("customername", finalorder.name);
  //   localStorage.setItem("customeremail", finalorder.email);
  //   axios.post(`https://nameless-spire-32128.herokuapp.com/final/orders`, finalorder);
  // };
  // for (const value of checked) {
  //   newtotal = parseInt(value.price) + parseInt(newtotal);
  //   total = shippingfee + newtotal;
  //   localStorage.setItem("totalItemPrice", total);
  //   localStorage.setItem("orderID", value._id);
  // }
  return (
    <div>
      <div>
        <Navigation></Navigation>

        <div className="grid lg:grid-cols-12 bg-gray-100  ">
          <div className="bg-white my-5 p-8 rounded-md w-full col-span-8">
            <div className=" flex items-center justify-between pb-6">
              <div>
                <h2 className="text-gray-600 font-semibold">Products Order</h2>
                <span className="text-xs">All products item</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex bg-gray-50 items-center p-2 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <input
                    className="bg-gray-50 outline-none ml-1 rounded block "
                    type="text"
                    name=""
                    id=""
                    placeholder="search..."
                  />
                </div>
                <div className="lg:ml-40 ml-10 space-x-8">
                  <button className="bg-pink-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                    New Report
                  </button>
                  <button className="bg-pink-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                    Create
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          products Model
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Date
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-5 py-3 border-b-2 text-center border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders?.map((order) => {
                        const labelId = `checkbox-list-label-${order}`;
                        return (
                          <>
                            {!order.payment ? (
                              <tr key={order._key}>
                                {/* {setTotal(
                      (newtotal = parseInt(total.price) + newtotal)
                    )} */}

                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {/* {order.status === 200 && (
                        <div className="flex items-center">
                          <div
                          // role={undefined}
                          // onClick={handleToggle(order)}
                          // dense
                          >
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(order) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </div>
                        </div>
                      )} */}
                                </td>

                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 w-20 h-20">
                                      {/* <img
                                        className="w-full h-full rounded"
                                        src={`data:image/*;base64,${order.img}`}
                                        
                                        alt=""
                                      /> */}
                                      <p> {order.model}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {order.title}
                                  </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {order.date}
                                  </p>
                                </td>

                                {/* {setTotal(
                      (newtotal = parseInt(total.price) + newtotal)
                    )} */}
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  {order.status === 200 ? (
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                      <span
                                        aria-hidden
                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                      ></span>
                                      <span className="relative">
                                        Confirmed
                                      </span>
                                    </span>
                                  ) : (
                                    <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                      <span
                                        aria-hidden
                                        className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                                      ></span>
                                      <span className="relative">Pending</span>
                                    </span>
                                  )}

                                  {
                                    <Dialog
                                      fullScreen={fullScreen}
                                      open={open}
                                      onClose={handleClose}
                                      aria-labelledby="responsive-dialog-title"
                                    >
                                      <DialogTitle
                                        sx={{ width: "300px" }}
                                        id="responsive-dialog-title"
                                      >
                                        {" Are you Sure ?"}
                                      </DialogTitle>

                                      <DialogActions>
                                        <Button autoFocus onClick={handleClose}>
                                          Disagree
                                        </Button>
                                        <Button
                                          onClick={handleModalDelete}
                                          autoFocus
                                        >
                                          Agree
                                        </Button>
                                      </DialogActions>
                                    </Dialog>
                                  }
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                  <span className="relative inline-block px-3 py-1 font-bold  ">
                                    {order?.status === "pending" ? (
                                      <RiDeleteBinLine
                                        onClick={() =>
                                          handleClickOpen(order._id)
                                        }
                                        className="  cursor-pointer "
                                      />
                                    ) : (
                                      <RiDeleteBinLine className="opacity-50 " />
                                    )}
                                  </span>
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
          <div className="col-span-3 border-2 bg-white w-full my-5 lg:mx-16">
            <div className=" m-5">
              <div className="text-center p-2 ">
                <div className="">
                  <div className="bg-pink-400 text-white p-2 font-medium rounded">
                    Order Summary
                  </div>
                </div>
                <Divider />

                <div className="">
                  <div className="flex grid grid-cols-2  mt-4">
                    <div className="col-span-1  text-left text-gray-500 font-medium ">
                      Subtotal ({newOrder}items)
                    </div>
                    <div className="col-span-1 text-gray-500 font-medium">
                      <span className="text-xl  mr-1">৳</span>
                      {subtotal}
                    </div>
                  </div>

                  <div className="flex grid grid-cols-2 mt-2">
                    <div className="col-span-1 text-left text-gray-500 font-medium">
                      Shipping Fee
                    </div>
                    <div className="col-span-1 text-gray-500 font-medium">
                      <span className="text-xl  mr-1">৳</span>
                      {subtotal > 1 ? shippingfee : "0"}
                    </div>
                  </div>
                  <div className="flex mt-3 mr-0">
                    <input
                      placeholder="Enter voucher code"
                      className="border-2 border-gray-300 rounded-l p-1"
                    />
                    <button className="px-5 py-2 bg-pink-500 text-white font-medium  rounded-r">
                      Apply
                    </button>
                  </div>

                  <div className="flex grid grid-cols-2 mt-2 ">
                    <div className="col-span-1 text-left text-gray-900 font-medium">
                      Total
                    </div>
                    <div className="col-span-1 text-gray-900 font-medium">
                      <span className="text-xl  mr-1">৳</span>
                      {totalPrice}
                    </div>
                  </div>
                  <NavLink to="/payment">
                    <button
                      style={{ width: "274px" }}
                      className=" py-2 mt-4 bg-pink-500 text-white font-medium  rounded"
                    >
                      Place Your Order
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Orders;
