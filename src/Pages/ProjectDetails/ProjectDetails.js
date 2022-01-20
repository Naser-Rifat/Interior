 import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

 const ProjectDetails = () => {
      const [projectdetails, setProjectDetails]=useState({});
      const {id}=useParams();

     useEffect(()=>{
        fetch(`http://localhost:8000/latest_interiors/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProjectDetails(data)
        })
        .catch((err)=>{

            console.log(err.message); 
            

        })
    })
    return (
         <div>

            <div style={{backgroundColor:"#F3F4F6"}} className="min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative">

               
            <section className="py-48 px-10 bg-white flex flex-col justify-center">

          <div className="lg:grid grid-cols-2 gap-10 max-w-6xl mx-auto">

           <div className="-mt-20 mb-2 lg:flex  justify-end">
              <img style={{height:"516px"}} className="w-2/3   object-cover rounded-lg overflow-hidden" src={projectdetails.img2} />
      </div>
      <div className="lg:flex  justify-start">
        <img style={{height:"347px"}} className="rounded-lg object-cover sm:my-2 h-full w-full overflow-hidden" src={projectdetails.img3} />
      </div>
      <div className="mt-2 mb-16 flex  justify-start">
        <img style={{height:"702px"}} className="rounded-lg object-cover  w-full overflow-hidden" src={projectdetails.img4} />
      </div>
      <div className="lg:flex justify-start  ">

      <div className="-translate-y-20 transform  p-16 shadow-xl rounded-xl overflow-hidden bg-white">
        <div className="space-y-4">
          <p className="text-5xl font-bold text-black tracking-tight">
            {projectdetails.title}
          </p>
          <p className="text-xl text-black">
          Since our humble beginnings in 2006, We has significantly expanded its collection of exclusive lamps. Today we are proud to present you our best lighting design solutions. Our collection is updated every day with beautiful solutions and we are glad that you, our customers, support us on way! Since our humble beginnings in 2006, We has significantly expanded its collection of exclusive lamps. Today we are proud to present you our best lighting design solutions. Our collection is updated every day with beautiful solutions and we are glad that you, our customers, support us on way!

Our collection is updated every day with beautiful solutions. Aenean commodo elit erat, vel hendrerit lacus euismod vel. Maecenas sodales pretium felis, quis rutrum est pellentesque
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 border-t-2  border-gray-200 mt-12 pt-12 pb-2">
         
             
                  
                <p className='text-gray-600 font-semibold'> Object type: </p>
                 <p className=''>  {projectdetails.objectType} </p>
        
        </div>
        <div className="grid grid-cols-2 gap-6 mt-2 py-2">
         
             
                  
                <p className='text-gray-600 font-semibold'>Area: </p>
                 <p className=''> {projectdetails.Area}  </p>
        
        </div>
        <div className="grid grid-cols-2 gap-6  mt-2 py-2">
         
             
                  
                <p className='text-gray-600 font-semibold'> Term of works: </p>
                 <p className=''> {projectdetails.TermOfWorks} </p>
        
        </div>
        <div className="grid grid-cols-2 gap-6  mt-2 py-2">
         
             
                  
                <p className='text-gray-600 font-semibold'> Location: </p>
                 <p className=''> {projectdetails.address} </p>
        
        </div>

        <ul className="social-share social-links without-bg grid grid-cols-10 pt-10 pb-2 ">
            <li> <a className="share-btn share-btn-facebook share-btn-1" href="#"> <i className="fab fa-facebook-f"></i> </a></li>
            <li> <a className="share-btn share-btn-twitter share-btn-2" href="#"> <i className="fab fa-twitter"></i> </a></li>
            <li> <a className="share-btn share-btn-linkedin share-btn-3" href="#"> <i className="fab fa-linkedin"></i> </a></li>
            <li> <a className="share-btn share-btn-reddit share-btn-4" href="#"> <i className="fab fa-reddit-alien" aria-hidden="true"></i> </a></li>
            <li> <a className="share-btn share-btn-pinterest share-btn-5" href="#"> <i className="fab fa-pinterest-p"></i> </a></li>
            </ul>
      </div>
        {/* <img className="w-2/3 h-2/3 object-cover rounded-lg overflow-hidden" src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80" /> */}
      </div>
      
    </div>
  </section>
                {/* <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img src={projectdetails.img} className="w-full relative z-10" alt="" />
                                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl mb-5">Mens's Ragged <br />Waterproof Jacket</h1>
                                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas id quo porro dolorum facilis... <a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right"></i></a></p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5">
                                    <span className="text-2xl leading-none align-baseline">$</span>
                                    <span className="font-bold text-5xl leading-none align-baseline">59</span>
                                    <span className="text-2xl leading-none align-baseline">.99</span>
                                </div>
                                <div className="inline-block align-bottom">
                                    <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-3 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                {/* <div>
                    <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12" rel="noreferrer">
                        <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default ProjectDetails;