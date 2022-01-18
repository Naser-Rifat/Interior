import React from 'react';

function ModalverifyEmail({closeModal}) {
    return (
        <div>
         
<div className="flex items-center justify-center opacity-95 fixed left-0 bottom-0 w-full h-full bg-gray-800">
  <div className="bg-white rounded-lg w-1/2">
    <div className="flex flex-col items-center p-20">
      <div className=" flex items-center w-full">
       
		
      
      </div>
      <hr className='tex'/>
      <div className="text-center  text-gray-900 font-medium text-lg ">Varify your Email</div>
      <hr/>
      <div className="my-5">
         <button onClick={()=>closeModal(false)} className="bg-blue-500 hover:bg-blue-700 text-center text-white font-bold py-2 px-4 rounded">
          ok
        </button> 
       
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default ModalverifyEmail;