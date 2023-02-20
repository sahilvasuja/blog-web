import React from "react";
import { useQuery, gql } from "@apollo/client";
import Headers from "./components/Headers";
const USERS = gql`
  {
    user_data {
      id
      title
      description
      image
    }
  }
`;



import { useSession } from "next-auth/react"

const list=()=>{
    
    const { loading, error, data } = useQuery(USERS);
    const { data: session, status }: any = useSession()

    console.log(error);
    console.log(data);
    console.log(loading);
    if (loading) return <p>loading...</p>;
    if (error) return <p>error</p>;
    return  (
        <>
        <Headers />
        <div className="grid grid-row-6 grid-flow-col gap-4 ">
            
             {data.user_data.map((item):any => (
                 
                 <div className="flex justify-center ">
                     
        <div
          className="block max-w-sm rounded-lg bg-white shadow-lg border-4 mt-5 bg-#FFFFFF">
            <h1 className="font-bold text-center text-lg text-slate-400 gap-3">{session.user.name}</h1>
                   
          <a href="#!">
            <img
              className="rounded-t-lg"
              src={item.image}
              alt="" />
          </a>
          <div className="p-6">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-sky-400 ">
              {item.title}
            </h5>
            <p className="mb-4 text-base text-gray-400 ">
             {item.description}
            </p>
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              Button
            </button>
          </div>
        </div>
      </div>
      ))}
      </div>
      </>
    )
    
    
}
export default list;