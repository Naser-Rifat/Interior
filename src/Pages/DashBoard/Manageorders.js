import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Hooks/useAuth";

const Manageorders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);
  const [idvalue, setIdvalue] = useState(0);
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleModalDelete = () => {
    handleDelete(idvalue);
    console.log(idvalue);
    handleClose();
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    console.log(id);
    setIdvalue(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch(`https://nameless-spire-32128.herokuapp.com/orders/all`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [state]);

  const handleDelete = (id) => {
    fetch(`https://nameless-spire-32128.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const filter = orders.filter((order) => order._id !== id);

          let newtotal = 0;
          let shippingfee = 0;
          let total = 0;
          let count = 0;
          for (const value of filter) {
            if (!value.payment) {
              count = count + 1;
              newtotal = parseInt(value.price) + parseInt(newtotal);
              total = shippingfee + newtotal;
              // setSubtotal(newtotal);
              // setNeworder(parseInt(count));
              // console.log(count);
              // console.log(value);
              //  console.log("under new order", neworder);
              // setTotal(total);
              localStorage.setItem("totalItemPrice", parseInt(total));
              localStorage.setItem("newOrder", parseInt(count));
              localStorage.setItem("subtotalItemPrice", parseInt(newtotal));
            }
          }
          setOrders(filter);
          setState(true);
        }
      });
  };

  const handleConfirm = (id) => {
    fetch(`https://nameless-spire-32128.herokuapp.com/orders/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          fetch("https://nameless-spire-32128.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
          setState(true);
        }
      });
  };
  return (
    <>
      {
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle sx={{ width: "300px" }} id="responsive-dialog-title">
            {" Are you Sure ?"}
          </DialogTitle>

          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Disagree
            </Button>
            <Button onClick={handleModalDelete} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      }
      {orders ? (
        <div>
          {/* <Button variant="outlined" onClick={handleClickOpen}>
            Open responsive dialog
          </Button>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                Disagree
              </Button>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog> */}

          <div className="bg-white p-8 rounded-md w-full">
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
                    className="bg-gray-50 outline-none ml-1 block "
                    type="text"
                    name=""
                    id=""
                    placeholder="search..."
                  />
                </div>
                <div className="lg:ml-40 ml-10 space-x-8">
                  <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                    New Report
                  </button>
                  <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
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
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          products
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Created at
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          QRT
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-5 py-3 border-b-2 text-center border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Edit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => {
                        return (
                          <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img
                                    className="w-full h-full rounded-full"
                                    src={user?.photoURL}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {order.name}
                                  </p>
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
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <p className="text-gray-900 whitespace-no-wrap">
                                43
                              </p>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {order.status === 200 ? (
                                <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-green-200 cursor-pointer opacity-50 rounded-full"
                                  ></span>
                                  <span className="relative">Confirmed</span>
                                </span>
                              ) : (
                                <span
                                  onClick={() => handleConfirm(order._id)}
                                  className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                >
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-green-200 cursor-pointer rounded-full"
                                  ></span>
                                  <span className="relative">Confirm</span>
                                </span>
                              )}
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                {order?.status === "pending" ? (
                                  <span
                                    onClick={() => handleClickOpen(order._id)}
                                    className="relative inline-block cursor-pointer px-3 py-1 font-semibold text-red-900 leading-tight"
                                  >
                                    <span
                                      aria-hidden
                                      className="absolute inset-0 bg-red-500  cursor-pointer  rounded-full"
                                    ></span>
                                    <span className="relative text-white">
                                      Cancle
                                    </span>
                                  </span>
                                ) : (
                                  <span className="relative inline-block  px-3 py-1 font-semibold text-red-300 leading-tight">
                                    <span
                                      aria-hidden
                                      className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                    ></span>
                                    <span className="relative">Cancle</span>
                                  </span>
                                )}

                                {/* <span className="relative text-white  cursor-pointer">
                             Cancle
                           </span> */}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                    <span className="text-xs xs:text-sm text-gray-900">
                      Showing 1 to 4 of {orders.length} Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                      <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                        Prev
                      </button>
                      &nbsp; &nbsp;
                      <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <CircularProgress />{" "}
        </div>
      )}
    </>
  );
};

export default Manageorders;
