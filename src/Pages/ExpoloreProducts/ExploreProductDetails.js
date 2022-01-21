import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

const ExploreProductDetails = () => {
  const { user, setIsloading } = useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [state, setState] = useState(false);

  // console.log(item);

  useEffect(() => {
    fetch(`http://localhost:8000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setIsloading(false));
  }, [state]);

  useEffect(() => {
    fetch(`http://localhost:8000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setIsloading(false));
  }, []);

  return (
    <div>
      <div className="antialiased">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <a href="#" className="hover:underline hover:text-gray-600">
                Home
              </a>
              <span>
                <svg
                  className="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <a href="#" className="hover:underline hover:text-gray-600">
                Electronics
              </a>
              <span>
                <svg
                  className="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span>Headphones</span>
            </div>
          </div>

          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div x-cloak>
                  <div className="  overflow-hidden  h-full md:h-80 rounded-lg  mb-4">
                    <div className="lg:h-full md:h-80 hoverscale transation rounded-lg    mb-4 flex items-center justify-center">
                      <img className="" src={product.img} />
                    </div>
                  </div>

                  {/* <div  className="flex -mx-2 mb-4">
              <template x-for="i in 4">
                <div  className="flex-1 px-2">
                  <button x-on:click="image = i" : className="{ 'ring-2 ring-indigo-300 ring-inset': image === i }"  className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                    <span x-text="i"  className="text-2xl"></span>
                  </button>
                </div>
              [</template]>
            </div> */}
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                  Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" className="text-black-600 hover:underline">
                    ABC Company
                  </a>
                </p>

                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span className="text-black-400 mr-1 mt-1">$</span>
                      <span className="font-bold text-black-600 text-3xl">
                        25
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-green-500 text-xl font-semibold">
                      Save 12%
                    </p>
                    <p className="text-gray-400 text-sm">
                      Inclusive of all Taxes.
                    </p>
                  </div>
                </div>

                <p className="text-gray-500">
                  Lorem ipsum, dolor sit, amet consectetur adipisicing elit.
                  Vitae exercitationem porro saepe ea harum corrupti vero id
                  laudantium enim, libero blanditiis expedita cupiditate a est.
                </p>

                <div className="flex py-4 space-x-4">
                  <div className="relative">
                    <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                      Qty
                    </div>
                    <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    className="h-14 px-6 py-2 font-semibold rounded-xl bg-orange-400 hover:bg-orange-500 text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ratting setion */}

      <div className="lg:ml-28  bg-white  rounded-lg  px-4 py-4 max-w-sm ">
        <div className="mb-1 tracking-wide px-4 py-4">
          <h2 className="w-full bg-zinc-50	py-2 pr-2	 text-gray-900 text-xl font-semibold mt-1">
            Ratings & Reviews of{" "}
          </h2>
          <h2 className="text-gray-800 font-semibold mt-1">67 Users reviews</h2>
          <div className="border-b -mx-8 px-8 pb-3">
            <div className="flex items-center mt-1">
              <div className=" w-1/5 text-black-500 tracking-tighter">
                <span>5 star</span>
              </div>
              <div className="w-3/5">
                <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-7/12 bg-orange-400 rounded-lg h-2"></div>
                </div>
              </div>
              <div className="w-1/5 text-gray-700 pl-3">
                <span className="text-sm">51%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="w-1/5 text-black-500 tracking-tighter">
                <span>4 star</span>
              </div>
              <div className="w-3/5">
                <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className="w-1/5 bg-orange-400 rounded-lg h-2"></div>
                </div>
              </div>
              <div className="w-1/5 text-gray-700 pl-3">
                <span className="text-sm">17%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="w-1/5 text-black-500 tracking-tighter">
                <span>3 star</span>
              </div>
              <div className="w-3/5">
                <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-3/12 bg-orange-400 rounded-lg h-2"></div>
                </div>
              </div>
              <div className="w-1/5 text-gray-700 pl-3">
                <span className="text-sm">19%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className=" w-1/5 text-black-500 tracking-tighter">
                <span>2 star</span>
              </div>
              <div className="w-3/5">
                <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-1/5 bg-orange-400 rounded-lg h-2"></div>
                </div>
              </div>
              <div className="w-1/5 text-gray-700 pl-3">
                <span className="text-sm">8%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="w-1/5 text-black-500 tracking-tighter">
                <span>1 star</span>
              </div>
              <div className="w-3/5">
                <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-2/12 bg-orange-400 rounded-lg h-2"></div>
                </div>
              </div>
              <div className="w-1/5 text-gray-700 pl-3">
                <span className="text-sm">5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Review section  */}
      <div className=" lg:mx-16  flex items-start mx-5 justify-content-center">
        <div className="flex-shrink-0">
          <div className="inline-block relative">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                src="https://picsum.photos/id/646/200/200"
                alt="Profile picture"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
            </div>
            <svg
              className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
            </svg>
          </div>
        </div>
        <div className="lg:mr-20 sm:mx-3 ml-6">
          <p className="flex items-baseline">
            <span className="text-gray-600 font-bold">Mary T.</span>
            <span className="ml-2 text-green-600 text-xs">Verified Buyer</span>
          </p>
          <div className="flex items-center mt-1">
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-yellow-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <svg
              className="w-4 h-4 fill-current text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
          <div className="flex items-center mt-4 text-gray-600">
            <div className="flex items-center">
              <span className="text-sm">Product Quality</span>
              <div className="flex items-center ml-2">
                <svg
                  className="w-3 h-3 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-3 h-3 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-3 h-3 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-3 h-3 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-3 h-3 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
            </div>
            <div className="flex items-center ml-4">
              <span className="text-sm">Purchasing Experience</span>
              <div className="flex items-center ml-2">
                <svg
                  className="w-3 h-3 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-3 h-3 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-3 h-3 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-3 h-3 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-3 h-3 fill-current text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <span className="font-bold">Sapien consequat eleifend!</span>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
            <button className="flex items-center">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
              </svg>
              <span className="mx-2">Share</span>
            </button>
            <div className="flex items-center mx-2">
              <span>Was this review helplful?</span>
              <button className="flex items-center ml-6">
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                </svg>
                <span className="ml-2">56</span>
              </button>
              <button className="flex items-center ml-4">
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                </svg>
                <span className="ml-2">10</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Products  */}
      <div className=" mt-16  lg:mx-36">
        <h3 className="text-gray-600 text-2xl smWidth font-medium">
          More Products
        </h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.slice(3, 7).map((product) => (
            <NavLink to={`/productdetails/${product._id}`}>
              <div
                onClick={() => setState(true)}
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              >
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover"
                  style={{
                    backgroundImage: `url(${product.img})`,
                  }}
                >
                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </button>
                </div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">Chanel</h3>
                  <span className="text-gray-500 mt-2">$12</span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProductDetails;
