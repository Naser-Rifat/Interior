import React from 'react';

const Subscribe = () => {
    return (
        <div >

            <div className="w-full bg-gray-500  bg-no-repeat" style={{
                backgroundBlendMode: "multiply",
                backgroundPosition: "center center",
                objectFit: 'cover',
                backgroundImage: "url('https://emaurri.qodeinteractive.com/wp-content/uploads/2020/12/land-parallax-img1.jpg')"
            }}>
                <div className=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
                    <div className=" m-0  p-0  text-3xl  text-white  antialiased  text-center">Get Our Updates</div>
                    <div className=" m-0  p-0  text-xl  text-white  antialiased  text-center">Find out about events and other news</div>
                    <div className=" mt-3 mx-auto  flex  flex-row  flex-wrap">
                        <input type="text" className=" text-gray-600  lg:w-72  p-2  rounded-l-lg" placeholder="example@mail.com" />
                        <button className=" p-2  w-50  bg-gray-500  rounded-r-lg  text-white hover:bg-black" type="button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;