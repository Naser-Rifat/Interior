import React from 'react';

const LatestInterrior = () => {

    return (
        <div>


            <div class="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200">


                <div class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style={{ minHeight: "19rem" }}>
                    <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{ minHeight: "19rem" }}>
                        <img class="absolute inset-0 w-full h-full object-cover object-center" src="https://i.ibb.co/PtbFcHH/Mask-Group-1.png" alt="" />
                        <div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-20"></div>
                        <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">

                        </div>
                    </div>
                    <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
                        <div class="p-12 md:pr-24 md:pl-16 md:py-12">
                            <p class="text-gray-600"><span class="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
                            <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
                                <span>Learn more about our users</span>
                                <span class="text-xs ml-1">&#x279c;</span>
                            </a>
                        </div>
                        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                    </div>
                    <button class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
                        <span class="block" style={{ transform: "scale(-1)" }}>&#x279c;</span>
                    </button>
                    <button class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
                        <span class="block" style={{ transform: "scale(1)" }}>&#x279c;</span>
                    </button>
                </div>


                <div class="flex items-center pt-5 justify-between">
                    <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg" alt="" style={{ maxHeight: "60px" }} /></button>
                    <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/slack.svg" alt="" style={{ maxHeight: "60px" }} /></button>
                    <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg" alt="" style={{ maxHeight: "60px" }} /></button>
                    <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg" alt="" style={{ maxHeight: "60px" }} /></button>
                    <button class="px-2 opacity-100 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg" alt="" style={{ maxHeight: "60px" }} /></button>
                </div>

            </div>

            {/* <html>

                <body>
                    <div className="min-h-screen bg-gray-100 p-3 relative">
                        <div className="w-96 mx-auto" style={{ scrollSnapType: "x mandatory" }}>

                            <div className="">
                                <input className="sr-only peer" type="radio" name="carousel" id="carousel-1" checked />

                                <div
                                    className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                    <img className="rounded-t-lg w-96 h-64" src="https://images.unsplash.com/photo-1628788835388-415ee2fa9576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80" alt="" />
                                    <div className="py-4 px-8">
                                        <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">Lorem
                                            ipsum dolor sit amet consectetur adipisicing.
                                        </h1>
                                        <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Lorem ipsum dolor, sit amet
                                            consectetur adipisicing elit.
                                        </p>
                                    </div>

                                    <div className="absolute top-1/2 w-full flex justify-between z-20">
                                        <label for="carousel-3" className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                        <label for="carousel-2" className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <input className="sr-only peer" type="radio" name="carousel" id="carousel-2" />

                                <div
                                    className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                    <img className="rounded-t-lg w-96 h-64" src="https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80" alt="" />
                                    <div className="py-4 px-8">
                                        <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                            Scelerisque eleifend donec pretium vulputate sapien.
                                        </h1>
                                        <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Egestas diam in arcu cursus euismod
                                            quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.
                                        </p>
                                    </div>

                                    <div className="absolute top-1/2 w-full flex justify-between z-20">
                                        <label for="carousel-1" className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                        <label for="carousel-3" className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <input className="sr-only peer" type="radio" name="carousel" id="carousel-3" />

                                <div
                                    className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                    <img className="rounded-t-lg w-96 h-64" src="https://images.unsplash.com/photo-1628718120482-07e03fe361dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80" alt="" />
                                    <div className="py-4 px-8">
                                        <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                            Consectetur purus ut faucibus pulvinar elementum.
                                        </h1>
                                        <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Aliquam ultrices sagittis orci a
                                            scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam
                                            tempor orci eu lobortis elementum.
                                        </p>
                                    </div>

                                    <div className="absolute top-1/2 w-full flex justify-between z-20">
                                        <label for="carousel-2" className="inline-block text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                        <label for="carousel-1" className="inline-block text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right animate-bounce">
                        <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" />
                    </a>

                </body>
            </html> */}
        </div>
    );
};

export default LatestInterrior;