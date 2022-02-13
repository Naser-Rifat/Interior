import React, { useState } from "react";

const Addproduct = () => {
  const [productdata, setProductdata] = useState({});
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
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

  const handleSubmit = (e) => {
    if (!image) {
      return;
    }
    const formData2 = new FormData();
    formData2.append("image", image);
    formData2.append("name", name);
    formData2.append("model", model);
    formData2.append("price", price);
    formData2.append("description", description);
    // formData2.append("category", category);
    console.log(formData2);
    fetch("http://localhost:7000/products", {
      method: "POST",
      body: formData2,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // axios
    //   .post("http://localhost:7000/products", formData)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log("Success:", result);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    console.log(image);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <div className="flex h-screen  items-center justify-center  mt-10 mb-32">
          <div className="grid bg-white  w-11/12 md:w-9/12 lg:w-1/2">
            <div className="flex justify-center py-4">
              <div className="flex bg-gray-400 rounded-full md:p-4 p-2 border-2 border-gray-300">
                <svg
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
                </svg>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex">
                <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
                  Add Product Form
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                Name
              </label>
              <input
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                type="text"
                placeholder="Name.."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
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
                  className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="price"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                category
              </label>
              <select
                required
                // onClick={(e) => setCategory(e.current.value)}
                className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              >
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
              </select>
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
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
            </div>

            <div className="grid grid-cols-1 mt-5 mx-7">
              <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                Upload Photo
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-gray-300 group">
                  <div className="flex flex-col items-center justify-center pt-7">
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
                    <p className="lowercase text-sm text-gray-400 group-hover:text-gray-600 pt-1 tracking-wider">
                      Select a photo
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
            </div>

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

export default Addproduct;
