import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";
import "./ExploreProducts.css";

const ExploreProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7000/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div>
      <Navigation></Navigation>
      <div className="">
        <div
          className="w-full mx-auto rounded-xl  shadow-sm p-10 text-gray-800 relative overflow-hidden resize-x min-w-80 max-w-3xl"
          x-data="app()"
          x-init="generatePassword()"
        >
          <div className="relative mt-1">
            <input
              type="text"
              id="password"
              className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Search..."
            />
            <button className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
              <i className="mdi mdi-magnify"></i>
            </button>
          </div>
        </div>
      </div>
      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="mt-16">
            <h3 className="text-gray-600 text-2xl font-medium">
              Find Your Favourite Products
            </h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {products?.slice(0, 20).map((product) => (
                <NavLink to={`/productdetails/${product._id}`}>
                  <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
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
                      <h3 className="text-gray-700 uppercase">
                        {product?.title}
                      </h3>
                      <span className="text-gray-500 mt-2">
                        {"$"}

                        {product?.price}
                      </span>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div></div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ExploreProducts;
