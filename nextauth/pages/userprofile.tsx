import Link from "next/link";
import { useSession } from "next-auth/react"
import { getSession } from 'next-auth/react'

import React,{useEffect,useState} from "react";
import img from 'next/image';
//  import 'tw-elements';

const Userprofile=()=>{
    const { data: session, status }: any = useSession()
    const sessions =  getSession()
    const [TwElements, setTwElements] = useState('');
    useEffect(() => {
      import('tw-elements').then((module) => {
        setTwElements(module.default);
      });
    }, []);
    if (!TwElements) {
      return <div>Loading...</div>;
    }

    if(session && session.user){ 

    
    return(
        <>
           
           <div className="bg-gray-300 antialiased">

           <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        className=" w-full h-64"
        alt="..."
        />
     
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        className=" w-full h-64 "
        alt="..."
        />
      {/* <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div> */}
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        className=" w-full h-64   "
        alt="..."
        />
      {/* <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div> */}
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
    >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
    >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>  
<body className="bg-gray-300 antialiased pb-8 ">
    <div className="container mx-auto">
        <div>

            <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                <div className="flex justify-center">
                
                        <img src={session.user.image} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>
                
                <div className="mt-16">
                    <h1 className="font-bold text-center text-3xl text-gray-900">{session.user.name}</h1>
                    <p className="text-center text-sm text-gray-400 font-medium">Software Engineer</p>
                    <p>
                        <span>
                            
                        </span>
                    </p>
                    <div className="my-5 px-6">
                        <a href="#" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span className="font-bold">{session.user.email}</span></a>
                    </div>
                    

                    <div className="w-full">
                        <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                        <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                            <a href="#" className=" border-t w-full border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150">
                                <img src={session.user.image} alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Updated his status
                                    <span className="text-gray-500 text-xs">24 min ago</span>
                            </a>

                            <a href="#" className="border-t w-full border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150">
                                <img src={session.user.image} alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                    Added new profile picture
                                    <span className="text-gray-500 text-xs">42 min ago</span>
                            </a>

                            <a href="#" className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src={session.user.image} alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                Posted new article in <span className="font-bold">#Web Dev</span>
                                <span className="text-gray-500 text-xs">49 min ago</span>
                            </a>

                            <a href="#" className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                <img src={session.user.image} alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                Edited website settings
                                <span className="text-gray-500 text-xs">1 day ago</span>
                            </a>

                            <a href="#" className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                                <img src={session.user.image} alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                Added new rank
                                <span className="text-gray-500 text-xs">5 days ago</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>
      </div>

        </>
    )
    }
    else{
        return (<div>hello</div>)
    }
}
export default Userprofile