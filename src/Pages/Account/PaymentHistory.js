import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";

const PaymentHistory = () => {
  const { currentuser } = useAuth();
  // const currentuser = localStorage.getItem("currentuser");
  // const [checked, setChecked] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  // const [total, setTotal] = useState(0);
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

  const shippingfee = 40;
  // if (checked == false) {
  //   newtotal = 0;
  // }

  // const [ordersubtotal, setOrdersubtotal] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7000/orders?email=${currentuser}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // let total = 0;
        // for (const value of data) {
        //   newtotal = parseInt(value.price) + parseInt(newtotal);
        //   total = shippingfee + newtotal;
        //   setSubtotal(newtotal);
        //   // setTotal(total);
        //   localStorage.setItem("totalItemPrice", total);
        //   localStorage.setItem("subtotalItemPrice", newtotal);
        //   // localStorage.setItem("orderID", value._id);
        // }
        setOrders(data);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, [currentuser]);
  //   const totalPrice = localStorage.getItem("totalItemPrice");
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
  //   const handleModalDelete = () => {
  //     handleDelete(idvalue);
  //     console.log(idvalue);
  //     handleClose();
  //   };
  //   const handleDelete = (id) => {
  //     fetch(`http://localhost:7000/orders/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.deletedCount > 0) {
  //           const filter = orders.filter((order) => order._id !== id);

  //           setOrders(filter);
  //         }
  //       });
  //   };

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
  //   axios.post(`http://localhost:7000/final/orders`, finalorder);
  // };
  // for (const value of checked) {
  //   newtotal = parseInt(value.price) + parseInt(newtotal);
  //   total = shippingfee + newtotal;
  //   localStorage.setItem("totalItemPrice", total);
  //   localStorage.setItem("orderID", value._id);
  // }
  return (
    <div>
      <Navigation></Navigation>

      <div className="grid lg:grid-cols-12 bg-gray-100  ">
        <div className="bg-white my-5 p-8 rounded-md w-full col-span-12">
          <div className=" flex items-center justify-between pb-6">
            <div>
              <h2 className="text-gray-600 font-semibold">Payment History</h2>
              <span className="text-xs">All products item</span>
            </div>
            {/* <div className="flex items-center justify-between">
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
            </div> */}
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        products
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>

                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      {/* <th className="px-5 py-3 border-b-2 text-center border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Edit
                      </th> */}
                      <th className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Payment
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders?.map((order) => {
                      const labelId = `checkbox-list-label-${order}`;
                      return (
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
                                <img
                                  className="w-full h-full rounded"
                                  src={order.img}
                                  alt=""
                                />
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
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
                            {order.status === 200 ? (
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">Confirmed</span>
                              </span>
                            ) : (
                              <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">pending</span>
                              </span>
                            )}
                          </td>
                          {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-bold  ">
                              {order?.status === "pending" ? (
                                <RiDeleteBinLine
                                  onClick={() => handleClickOpen(order._id)}
                                  className="  cursor-pointer "
                                />
                              ) : (
                                <RiDeleteBinLine className="opacity-50 " />
                              )}
                            </span>
                          </td> */}
                          <td className="px-5 py-5 border-b border-gray-200 text-center bg-white text-sm">
                            {order?.payment ? (
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">Paid</span>
                              </span>
                            ) : (
                              <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                <span
                                  aria-hidden
                                  className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                                ></span>
                                <span className="relative">Payment</span>
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                  <span className="text-xs xs:text-sm text-gray-900">
                    Showing {orders.length} to {orders.length} of{" "}
                    {orders?.length} Entries
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
      </div>

      <Footer></Footer>
    </div>
  );
};

export default PaymentHistory;
