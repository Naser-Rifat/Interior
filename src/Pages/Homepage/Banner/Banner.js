import React from 'react';
import chair from "../../../Images/Image/chair&lamp2.jpg";
import './bnaner.css';

const Banner = () => {
    return (


        <main className="dark:bg-gray-800 bg-white relative overflow-hidden lg:h-screen">
            {/* <header className="h-24 sm:h-32 flex items-center z-30 w-full">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                        Watch.ME
                    </div>
                    <div className="flex items-center">
                        <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                            <a href="#" className="py-2 px-6 flex">
                                Home
                            </a>
                            <a href="#" className="py-2 px-6 flex">
                                Watch
                            </a>
                            <a href="#" className="py-2 px-6 flex">
                                Product
                            </a>
                            <a href="#" className="py-2 px-6 flex">
                                Contact
                            </a>
                            <a href="#" className="py-2 px-6 flex">
                                Carrer
                            </a>
                        </nav>
                        <button className="lg:hidden flex flex-col ml-4">
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                            <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                        </button>
                    </div>
                </div>
            </header> */}
            <div className=" bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="text-start sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                        </span>
                        <h1 className="m font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col  dark:text-white text-gray-800">
                            Meet





                            <span className="text-5xl sm:text-7xl">
                                natural art
                            </span>
                        </h1>
                        <p className="text-sm italic sm:text-base text-gray-700 dark:text-white">
                            “We shape our homes and then our homes shape us.” – Winston Churchill
                        </p>
                        <div className="flex mt-8">
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                Get started
                            </a>
                            <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img src={chair} className="max-w-xs lg:max-w-sm m-auto" />
                    </div>
                </div>
            </div>
        </main>

        // <div>
        //     <div className="w-full mx-auto">

        //         <div className="flex bg-white" style={{ height: "600px" }}>
        //             <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
        //                 <div>
        //                     <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Build Your New <span className="text-indigo-600">Idea</span></h2>
        //                     <p className="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
        //                     <div className="flex justify-center lg:justify-start mt-6">
        //                         <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
        //                         <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className='hidden  inset-0 pb-10 lg:block lg:w-1/2'>
        //                 <img className="  w-full h-full object-cover object-center" src="https://i.ibb.co/PtbFcHH/Mask-Group-1.png" alt="" />
        //             </div>
        //             {/* <div className="hidden pb-10 lg:block lg:w-1/2" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
        //                 <div className=" h-full object-cover object-center " style={{ backgroundImage: "url(https://i.ibb.co/PtbFcHH/Mask-Group-1.png)" }}>
        //                     <div className=" w-full  bg-black opacity-25"></div>
        //                 </div>
        //             </div> */}
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;