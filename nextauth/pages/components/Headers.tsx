import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router';
const Headers = () => {
  const router = useRouter();
  const { data: session, status }: any = useSession()
  
  function profile(){
    console.log(session.user, "8");
    console.log("first")
   router.push('/userprofile');
  }
  return (
    <nav className="bg-teal-600 border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a className="flex items-center">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
         Blogs
          </span>
        </a>
        <div className="flex md:order-2 space-x-5">
        { status==="authenticated"? <Link
            href="/api/auth/signout"
            className="text-white bg-slate-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            Sign OUT
          </Link> : ''
        }
         { status!=="authenticated"?   <Link
            href="/api/auth/callback/google"
            className="text-white bg-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Sign IN
          </Link> : <p className="text-white bg-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" onClick={profile}
          >{session.user.name}</p>
        }
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
    <ul className="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
      <li>
        <Link href="#" className="block py-2 pl-3 pr-4  hover:text-green-300 text-white rounded md:bg-transparent md:p-0" aria-current="page">List</Link>
      </li>
      <li>
        <Link href="/createblogs" className="block py-2 pl-3 pr-4  hover:text-green-300 text-white rounded md:bg-transparent md:p-0" aria-current="page">Create</Link>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4  hover:text-green-300 text-white rounded md:bg-transparent md:p-0" aria-current="page">View</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4  hover:text-green-300 text-white rounded md:bg-transparent md:p-0" aria-current="page">Edit</a>
      </li>
    </ul>
  </div>
      </div>
      
    </nav>


  

  );
};

export default Headers;
