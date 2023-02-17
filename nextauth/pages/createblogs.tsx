import Link from "next/link";
import { useSession } from "next-auth/react"
import React, { useState } from "react";
import img from 'next/image';
// import 'tw-elements';
const Createblogs=()=>{
    const [Image,setImage]=useState()
    const { data: session, status }: any = useSession()
    const uploadImage=(event:any)=>{
        setImage(event?.target.files[0])
        console.log(event?.target.files[0])
    }
    return(
        <>
        


  <div className="items-center bg-gray-400 justify-center flex  p-10 h-screen ">
  
    <div className="rounded items-center bg-white overflow-hidden shadow-lg p-3">
    <div className="flex justify-center">
  <div className="mb-3 w-96">
    <label  className="form-label inline-block mb-2 text-gray-700">Image</label>
    <input className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" accept=".png,.jpg,jpeg" onChange={uploadImage} type="file" id="formFile"/>
  </div>
</div>
{/* <div className="flex justify-center"> */}
  <div className="mb-3 xl:w-96">
    
    <label  className="form-label inline-block mb-2 text-gray-700"
      >Title</label
    >
    <input
      type="text"
      className="
        form-control
        block
        w-full
        px-14
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleText0"
      placeholder="Text input"
    />
  {/* </div> */}
</div>
{/* <div className="flex justify-center"> */}
  <div className="mb-3 xl:w-96">
    <label  className="form-label inline-block mb-2 text-gray-700"
      >Description</label
    >
    <textarea
      className="
        form-control
        block
        w-full
        px-14
        py-3.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      
      placeholder="Your message"
    ></textarea>
  {/* </div> */}
</div>
<div className="flex justify-center">

<button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg items-center transition duration-150 ease-in-out">Post</button>
</div>
     
  
    </div>
   
    
  </div>



  </>
        
    
    )
}
export default Createblogs