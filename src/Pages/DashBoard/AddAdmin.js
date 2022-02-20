import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

const AddAdmin = () => {
  const [productdata, setProductdata] = useState({});
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  // const [category, setCategory] = useState(0);

  // const name = useRef();

  // const model = useRef();
  // const category = useRef();
  // const description = useRef();

  const handleOnChange = (e) => {
    // const field = e.target.name;
    // const value = e.target.value;
    // const newinfo = { ...productdata };
    // newinfo[field] = value;
    // setProductdata(newinfo);
    // formData.append("productdata", productdata);
  };

  // const handleSubmit = (e) => {
  //   if (!image) {
  //     return;
  //   }
  //
  //   fetch("https://nameless-spire-32128.herokuapp.com/user", {
  //     method: "POST",
  //     body: formData2,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.acknowledged === true) {
  //         setOpen(true);
  //       } else {
  //         setOpen(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  //   console.log(image);
  //   e.preventDefault();
  // };
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
          Data Successfully Added
        </Alert>
      </Snackbar>
      <form onSubmit={"handleSubmit"} className="">
        <div className="flex  items-center justify-center">
          <div className="grid bg-white  w-11/12 md:w-9/12 lg:w-1/2">
            <div className="flex justify-center py-4">
              <div className="flex bg-gray-400 rounded-full md:p-4 p-2 border-2 border-gray-300">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-8 h-8 text-white"
                  viewBox="0 0 457.508 457.508"
                  enableBackground="new 0 0 457.508 457.508"
                >
                  <path
                    d="M199.671,242.677c66.985,0,121.319-54.353,121.319-121.271C320.99,54.363,266.666,0,199.671,0
		C132.638,0,78.38,54.373,78.38,121.406C78.38,188.324,132.628,242.677,199.671,242.677z"
                  />
                  <path
                    d="M353.006,275.974c-6.407-13.722-14.478-27.521-24.786-40.688c-5.546-7.057-15.663-14.803-25.445-20.109
		c-25.36,28.419-62.118,46.416-103.104,46.416c-40.956,0-77.705-17.997-103.036-46.35c-9.562,5.432-19.412,13.178-24.776,20.215
		c-17.404,22.711-44.265,66.728-48.549,126.044c-0.899,12.518,5.059,31.633,15.52,38.929
		c19.852,13.895,62.672,31.671,151.833,31.671c30.868,0,56.878-1.903,78.862-4.867c-8.874-14.965-14.066-32.369-14.066-50.997
		C255.449,321.836,298.968,277.504,353.006,275.974z"
                  />
                  <path
                    d="M353.006,294.946c-44.887,0-81.281,36.395-81.281,81.281c0,44.886,36.395,81.28,81.281,81.28s81.281-36.395,81.281-81.28
		C434.287,331.341,397.901,294.946,353.006,294.946z M393.13,391.183h-31.355v31.365c0,5.192-4.217,9.399-9.409,9.399
		s-9.41-4.207-9.41-9.399v-31.355l-31.354-0.01c-5.202,0.01-9.41-4.197-9.4-9.391c0-5.201,4.207-9.409,9.4-9.409h31.364v-31.355
		c0-5.192,4.208-9.399,9.4-9.391c5.183,0,9.399,4.198,9.409,9.4v31.346h31.346c5.192,0,9.4,4.208,9.41,9.41
		C402.53,386.976,398.322,391.183,393.13,391.183z"
                  />
                </svg>

                {/* <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg> */}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex">
                <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
                  Make an Admin
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              {/* <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Name
              </label> */}
              <input
                name="email"
                onChange={(e) => setName(e.target.value)}
                className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                type="text"
                placeholder="Email.."
                required
              />
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Model
                </label>
                <input
                  name="model"
                  className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  type="text"
                  placeholder="Model.."
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-1">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Price
                </label>
                <input
                  name="price"
                  className="py-2 px-3 rounded-lg bg-transparent border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="price"
                  required
                />
              </div>
            </div> */}

            <div className="grid grid-cols-1 mt-5 mx-7">
              {/* <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                category
              </label> */}
              {/* <select
                required
                // onClick={(e) => setCategory(e.current.value)}
                className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              >
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
              </select> */}
              {/* <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                
                  <Select
                    className=" rounded-lg border-1 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                   

                    placeholder="Category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <MenuItem value={"A"}>A</MenuItem>
                    <MenuItem value={"B"}>B</MenuItem>
                    <MenuItem value={"C"}>C</MenuItem>
                    <MenuItem value={"D"}>D</MenuItem>
                  </Select>
                </FormControl>
              </Box> */}
            </div>

            {/* <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Description
              </label>
              <textarea
                name="description"
                className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                type="text"
                placeholder="description.."
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div> */}

            {/* <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                Upload Photo
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-gray-300 group">
                  <div className="flex flex-col items-center justify-center pt-7">
                    {!image ? (
                      <>
                        <svg
                          className="w-10 h-10 text-gray-400 group-hover:text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </>
                    ) : (
                      <img
                        className="w-10 h-10 text-gray-400 group-hover:text-gray-600"
                        src={checked}
                        alt=""
                      />
                    )}
                    <p className="lowercase text-sm text-gray-400 group-hover:text-gray-600 pt-1 tracking-wider">
                      {image ? "selected" : "Select a photo"}
                    </p>
                  </div>
                  <input
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="image"
                    type="file"
                    className="hidden"
                    required
                  />
                </label>
              </div>
            </div> */}

            <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
              <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                Cancel
              </button>
              <button
                type="submit"
                className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAdmin;
