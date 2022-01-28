import React, { useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = React.useState([]);
  useEffect(() => {
    fetch("http://pure-plains-03469.herokuapp.com/images")
      .then((res) => res.json())
      .then((data) => {
        console.log("gallery", data);
        setImages(data);
      });
  }, []);
  return (
    <div className="max-w-5xl   mx-auto  my-32 upgallary">
      <div className=" py-2">
        {/* <h2 className="text-4xl py-4 rounded text-black font-bold ">GALLERY  </h2> */}
        <h1 className="sm:text-4xl    ml-2 text-5xl uppercase pt-2 pb-8 font-medium title-font mb-2 text-black">
          <hr className="border-2 border-neutral-800  w-16 ml-2 mr-2 mb-3 font-bold inline-block" />
          Gallery
        </h1>
        <div className="gallery">
          {images.slice(0, 10).map((image) => (
            <div className="pics" style={{ width: "100%" }} key={image._id}>
              <img src={image.img}></img>
            </div>
          ))}
        </div>
        {/* <div className="grid grid-cols-3 gap-4 my-3">
                    
                    <a className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded" href="" style={{ backgroundImage: "url('https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png')" }}></a>
                    <a className="block bg-center  bg-no-repeat bg-cover h-40 w-full rounded" href="" style={{ backgroundImage: "url('https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png')" }}></a>
                    <a className="block bg-center row-span-2 bg-no-repeat bg-cover  w-full rounded" href="" style={{ backgroundImage: "url('https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png')" }}></a>

                    <a className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded" href="" style={{ backgroundImage: "url('https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png')" }}></a>
                    <a className="block bg-center row-span-2 bg-no-repeat bg-cover  w-full rounded" href="" style={{ backgroundImage: "url('https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png')" }}></a>
                    <a className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded" href="" style={{ backgroundImage: "url('https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png')" }}></a>

                    <a className="block bg-center row-span-2 bg-no-repeat bg-cover  w-full rounded" href="" style={{ backgroundImage: "url('https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png')" }}></a>
                    <a className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded" href="" style={{ backgroundImage: "url('https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png')" }}></a>
                    <a className="block bg-center bg-no-repeat bg-cover h-40 w-full rounded" href="" style={{ backgroundImage: "url('https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png')" }}></a>

                </div> */}
      </div>

      {/* 
            <div className="flex justify-between items-center bg-yellow-600 bg-opacity-20 px-10 py-5 rounded-full text-gray-500">
                <button className="p-2 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </button>
                <button className="p-2 rounded-full bg-pink-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </button>
            </div> */}
    </div>
    // <div className='mx-auto'>

    //     <div className="mx-auto px-2 mx-32 my-1">
    //         <h2 className="text-4xl bg-gray-700 p-4 rounded-sm text-white text-center">GALLERY  </h2>
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
    //             <div className="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500 hover:bg-red-700"><img className="w-full rounded-sm bg-red-500" alt="" src="https://i.ibb.co/RCQftfk/pierre-chatel-innocenti-Al-Sl-E8-IAj-Zo-unsplash-1.png" /></div>
    //             <div className="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500 hover:bg-red-700"><img className="w-full rounded-sm" alt="" src="https://i.ibb.co/RCQftfk/pierre-chatel-innocenti-Al-Sl-E8-IAj-Zo-unsplash-1.png" /></div>
    //             <div className="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500 hover:bg-red-700"><img className="w-full rounded-sm" alt="" src="https://i.ibb.co/RCQftfk/pierre-chatel-innocenti-Al-Sl-E8-IAj-Zo-unsplash-1.png" /></div>
    //             <div className="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500 hover:bg-red-700"><img className="w-full rounded-sm" alt="" src="https://i.ibb.co/RCQftfk/pierre-chatel-innocenti-Al-Sl-E8-IAj-Zo-unsplash-1.png" /></div>
    //         </div>
    //     </div>

    //     <div className="mx-auto px-2 mx-32 my-10">
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
    //             <div className="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500"><img className="w-full rounded-sm" alt="" src="https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png" /></div>
    //             <div className="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500"><img className="w-full rounded-sm" alt="" src="https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png" /></div>
    //             <div className="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500"><img className="w-full rounded-sm" alt="" src="https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png" /></div>
    //             <div className="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500"><img className="w-full rounded-sm" alt="" src="https://i.ibb.co/fxSnKj2/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png" /></div>
    //         </div>
    //     </div>

    // </div>
  );
};

export default Gallery;
