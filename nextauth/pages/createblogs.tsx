import Link from "next/link";
import { useSession } from "next-auth/react"
import React, { useState,useEffect } from "react";
import img from 'next/image';
import { useQuery, gql,useMutation } from "@apollo/client";

import client from "../pages/index";
// import Mutation from "./mutation.js";
const BlogUser = gql`
  {
    user_data(order_by: { id: asc }) {
        title
        description
        image
        id
    }
  }
`;

//  import 'tw-elements';
const Createblogs=()=>{
  const [input,setInput]=useState("")
  const [input_two,setInput_two]=useState("")

  const { loading, error, data,refetch } = useQuery(BlogUser);
  console.log(error);
  console.log(data);
  console.log(loading);
  const [TwElements, setTwElements] = useState('');
  const [Image,setImage]=useState()
  const { data: session, status }: any = useSession()
  const uploadImage=(event:any)=>{
      setImage(event?.target.files[0])
      console.log(event?.target.files[0])
  }
  useEffect(() => {
    import('tw-elements').then((module) => {
      setTwElements(module.default);
    });
  }, []);

  const ADD_TITLE_MUTATION = gql`mutation MyMutation6($description: String $id: bigint $title: String) {
    insert_user_data_one(object: {description: $description, id: $id, title: $title}) {
      id
      title
      
      description
    }
  }`;
  const [add_Title] = useMutation(ADD_TITLE_MUTATION);
  const addtitle=(event)=>{
    console.log(input,"60")
    event.preventDefault();
    if(input!==""){
      let temp_id = Date.now();
      console.log("input")
      add_Title({ variables:  { title: input,description: input_two,id: temp_id} });
      // console.log(variables,"67");
      console.log(add_Title,"66")
      console.log(input,"40")
      setInput('');
      setInput_two('');

    }
    refetch() 
   
    
  }
  const inputtext=(event)=>{
    setInput(event.target.value)
    console.log(event.target.value,"68")
  }
  const inputtext1=(event)=>{
    setInput_two(event.target.value)
    console.log(event.target.value,"68")
  }
  if (!TwElements) {
    return <div>Loading...</div>;
  }
    return(
        <>
        

  <div className="items-center bg-gray-400 justify-center flex  p-10 h-screen ">
  
  <form className="task" onSubmit={addtitle}>
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
      value={input} onChange={inputtext}
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
      value={input_two}
      onChange={inputtext1}
      placeholder="Your message"
    ></textarea>
  {/* </div> */}
</div>
<div className="flex justify-center">

<button type="submit" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg items-center transition duration-150 ease-in-out">Post</button>
           
</div>
    </div>
</form>
     
  
   
    
  </div>



  </>
        
    
    )
}
export default Createblogs