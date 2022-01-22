import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../src/Hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
            INTERIOR.US
          </div>
          <div className="flex items-center">
            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <NavLink to="" className="py-2 px-6 flex">
                Home
              </NavLink>

              <NavLink to="" className="py-2 px-6 flex">
                Watch
              </NavLink>
              <NavLink to="" className="py-2 px-6 flex">
                Product
              </NavLink>
              <NavLink to="" className="py-2 px-6 flex">
                Contact
              </NavLink>
              <NavLink to="/dashboard" className="py-2 px-6 flex">
                DashBoard
              </NavLink>

              {user?.email ? (
                <button onClick={logout} className="py-2 px-6 flex uppercase">
                  Logout
                </button>
              ) : (
                <NavLink to="/login">
                  {" "}
                  <button className="py-2 px-6 flex uppercase">Login</button>
                </NavLink>
              )}
              {user && <div className="text-black">{user.displayName} </div>}
            </nav>
            <button className="lg:hidden flex flex-col ml-4">
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            </button>
          </div>
        </div>
      </header>
    </main>
    // <div>
    //     <nav className="bg-white shadow-lg">
    //         <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
    //             <div className="flex justify-between items-center">
    //                 <div className="text-2xl font-bold text-gray-800 md:text-3xl">
    //                     <NavLink to="">Brand</NavLink>
    //                 </div>
    //                 <div className="md:hidden">
    //                     <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
    //                         <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
    //                             <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
    //                             <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
    //                         </svg>
    //                     </button>
    //                 </div>
    //             </div>
    //             <div className="flex flex-col md:flex-row hidden md:block -mx-2">
    //                 <NavLink to="" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Home</NavLink>
    //                 <NavLink to="" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">About</NavLink>
    //                 <NavLink to="" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Contact</NavLink>
    //             </div>
    //         </div>
    //     </nav>
    // </div>
  );
};

export default Navigation;
