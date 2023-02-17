import React from 'react'
import Link from 'next/link'
import NextAuth from 'next-auth/next';
import { useSession,signIn,signOut, getSession } from "next-auth/react"
import { redirect } from 'react-router-dom';
interface signIn{
  account?:String;
  profile?:any; 
 
}
// export default async function getServerSideProps({req}:any) {
//   const session=await getSession({req})
//   if(!session){
//     return(
//       redirect: {
//         destination: '/blogs'
//         permanent:false
//       }
//     )
//   }
//   return (
//     props: ({session}:any)
//   )
// }
const signin = () => {
  // async function HandleGoogle(){
  //   signIn('google',{callbackUrl:"http://localhost:3000"})

  // }
  async function HandleGithub(){
    signIn('github',{callbackUrl:"http://localhost:3000"})   
  }

  
//  console.log(NextAuth,"10");
  return (
    <section className="h-screen">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="Phone image"
        />
      </div>
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <form>
         
          <div className="mb-6 ">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email address"
            />
          </div>

         
          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>

          

          
          <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light">
            Sign in
          </button>

          <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
         

          <Link href="/api/auth/callback/google" className="px-7 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3">
           Continue with Google
          </Link>
          <Link href="http://localhost:3000/api/auth/callback/github" className="px-7 py-3 bg-blue-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center">
            Continue with Github
          </Link>
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default signin