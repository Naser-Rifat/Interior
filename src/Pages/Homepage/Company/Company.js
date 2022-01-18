import React from 'react';

const Company = () => {
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 4,
    //     speed: 500,
    //     rows: 2,
    //     slidesPerRow: 1


    // };

    return (

        <section className="relative pt-2 lg:mx-16">
            <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                    <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://i.ibb.co/bBYL9nt/Toy-house-in-the-background-a-Christmas-tree-and-a-deer-Procurement-for-design-Background-New-Year-W.jpg" />
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="md:pr-12 md:mt-10">
                        {/* <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                            <i className="fas fa-rocket text-xl"></i>
                        </div> */}
                        <h3 className="text-3xl font-semibold ">History of our creation</h3>
                        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                            Since our humble beginnings in 2006, We has significantly expanded its collection of exclusive lamps. Today we are proud to present you our best lighting design solutions. Our collection is updated every day with beautiful solutions and we are glad that you, our customers, support us on way! Our collection is updated every day with beautiful solutions
                        </p>
                        <ul className="list-none mt-6">
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fas fa-fingerprint"></i></span>
                                    </div>
                                    <div>
                                        <h4 className="text-blueGray-500">
                                            Carefully crafted components
                                        </h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="fab fa-html5"></i></span>
                                    </div>
                                    <div>
                                        <h4 className="text-blueGray-500">Amazing Design Feature</h4>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="flex items-center">
                                    <div>
                                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i className="far fa-paper-plane"></i></span>
                                    </div>
                                    <div>
                                        <h4 className="text-blueGray-500">Dynamic components</h4>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer className="relative  pt-8 pb-6 mt-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-6/12 px-4 mx-auto text-center">

                        </div>
                    </div>
                </div>
            </footer>
        </section>

        // <div className='bg-black px-10 mx-auto '>
        //     <h2 className='text-white text-center'>Multiple Rows</h2>
        //     <Slider {...settings}>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>1</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>2</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>3</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>4</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>5</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>6</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>7</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>8</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>9</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>10</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>11</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>12</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>13</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>14</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>15</h3>
        //         </div>
        //         <div className='mx-1  text-5xl text-center justify-items-center items-center'>
        //             <h3 className='my-5 mx-auto p-5 text-white ' style={{ width: "250px", height: "100px", backgroundColor: "#9BD3DB" }}>16</h3>
        //         </div>


        //     </Slider>
        // </div>
    );
};

export default Company;