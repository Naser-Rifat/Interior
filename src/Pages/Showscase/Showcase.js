import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Showcase.css';

const Showcase = () => {
    const [productsimages,setProductImages]=React.useState([]);

    const settings = {
        dots: true,
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    useEffect(()=>{
    fetch('http://localhost:8000/productsimages')
     .then(res=>res.json())
     .then(data=>setProductImages(data))

    },[])
    return (
        <div className='lg:flex  mx-auto'>
            <div className='  my-auto lg:mt-40 sm:mt-20 lg:w-1/2 sm:w-full'>

            
                <div className=" m-10   ">
            <Slider className='lg:m-10 ' {...settings}>
          
                    {
                        productsimages.map(productsimage=>
                            <img key={productsimage._id} className="rounded-t-lg w-80  h-96  object-contain	" src={productsimage.img} alt="" />
                            )
                    }        
      
         
        </Slider>

        </div>
        </div>
            {/* <div className='  lg:mt-40 sm:mt-20 lg:w-1/2 sm:w-full'>

            
                <div className="min-h-screen  relative">
                {
                        productsimages.map(productsimage=>
                    <div className=" lg:w-96 mx-auto" style={{ scrollSnapType: "x mandatory" }}>

                            <div className="">
                            <input className="sr-only peer" type="radio" name="carousel" id="carousel-1" checked />

                            <div
                                className="w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                <img className="rounded-t-lg w-96 h-full" src={productsimage.img} alt="" />
                                <div className="py-4 px-8">
                                    <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">Lorem
                                        ipsum dolor sit amet consectetur adipisicing.
                                    </h1>
                                    <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Lorem ipsum dolor, sit amet
                                        consectetur adipisicing elit.
                                    </p>
                                </div>

                                <div className="absolute top-1/2 w-full flex justify-between z-20">
                                    <label for="carousel-3" className="inline-block text-pink-600	cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                                        </svg>
                                    </label>
                                    <label for="carousel-2" className="inline-block text-pink-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
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
                        )
                    }
                </div>
                        
                <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right animate-bounce">
                    <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" />
                </a>

            </div> */}
            
            <div className=' lg:mt-16  sm:mt-20 lg:w-1/2 sm:w-full'>

                <div className='mb-20 lg:text-left'>
                    <h1 className='text-4xl  font-extrabold upercase text-left mb-1 '>SHOWCASE AND SELL YOUR
                        PRODUCTS WITH TOTAL EASE</h1>
                    <i>WooCommerce compatible & equipped with shop layouts.
                    </i>
                </div>
                <img className='mb-0' src="https://aalto.qodeinteractive.com/wp-content/uploads/2017/11/landing-img-1.jpg" alt="" />

            </div>
        </div>
        
    );
};

export default Showcase;