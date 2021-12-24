import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="w-full mx-auto">

                <div className="flex bg-white" style={{ height: "600px" }}>
                    <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Build Your New <span className="text-indigo-600">Idea</span></h2>
                            <p className="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
                            <div className="flex justify-center lg:justify-start mt-6">
                                <a className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
                                <a className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2" style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}>
                        <div className="h-full object-cover" style={{ backgroundImage: "url(https://i.ibb.co/RCQftfk/pierre-chatel-innocenti-Al-Sl-E8-IAj-Zo-unsplash-1.png)" }}>
                            <div className="h-full bg-black opacity-25"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;