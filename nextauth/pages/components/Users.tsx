import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useSession } from "next-auth/react"
import Image from 'next/image';
import backpackPic from '/Users/sahilvasuja/Downloads/blogs_website_img/backpack.png'
import cafePic from '/Users/sahilvasuja/Downloads/blogs_website_img/cafe.png'
import focuslaptopPic from '/Users/sahilvasuja/Downloads/blogs_website_img/focus-on-laptop.png'
import makingPic from '/Users/sahilvasuja/Downloads/blogs_website_img/making-notes.png'
import mobilePic from '/Users/sahilvasuja/Downloads/blogs_website_img/mobile.png'
import podastPic from '/Users/sahilvasuja/Downloads/blogs_website_img/podast.png'
import sunsetPic from '/Users/sahilvasuja/Downloads/blogs_website_img/sunset.png'
import whiteboardPic from '/Users/sahilvasuja/Downloads/blogs_website_img/whiteboard.png'
import settingPic from '/Users/sahilvasuja/Downloads/blogs_website_img/women-sitting-down.png'
interface Users{
  id?:number;
  name?:string;
 
}
const USERS = gql`
  {
    users {
      id
      name
      last_seen
      created_at
    }
  }
`;

export const Users = () => {
  const { data: session, status }: any = useSession()

  // if (status === "authenticated") {
  //   return <p>Signed in as{status} {session.user.name}</p>
  // }
  return (
    <>
    <main className="container mx-auto max-w-6xl px-5">
        <article className="border-t border-cw-grey-100 flex justify-between py-10 flex-col md:flex-row">
            <a href="#" className="md:w-1/2 md:mr-12 hover:bg-cw-blue-600">
           
   
                <Image src={backpackPic} alt="Backpacker outside by sea" className="border-sm hover:opacity-75 ease-in duration-100" />
            </a>
            <div className="md:w-1/2 mt-4">
                <a href="#" className="text-cw-blue-300 hover:text-cw-blue-600 hover:underline text-sm mb-1 block">Travel</a>
                <h1 className=" mb-3"><a href="#" className=" font-work-sans text-3xl text-cw-grey-800 leading-tight hover:text-cw-blue-600 hover:underline">Backbacking planning tips for the summer</a></h1>
                <p className="leading-relaxed">Lorem ipsum dolor sit amet, fugit persius inermis eos ad, eu oblique tacimates qui. Vim quodsi fabellas rationibus ei, imperdiet appellantur eum ne, consetetur intellegam usu an. Has eu disputationi comprehensam vituperatoribus. Pri quod brute urbanitas ex, omnes offendit mei ut. Id quodsi atomorum definitiones est.</p>
            </div>
        </article>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 row-gap-6 pb-10">
            <article>
                <a href="#" className="hover:bg-cw-blue-600 block">
                    <Image src={whiteboardPic} alt="whiteboard meeting" className="mb-2 hover:opacity-75 ease-in duration-100" />
                </a>
                <a href="#" className="text-cw-blue-300 hover:text-cw-blue-600 hover:underline text-sm mb-1 block">Business</a>
                <h2><a href="#" className=" font-work-sans text-xl text-cw-grey-900 hover:text-cw-blue-600 hover:underline">Ten tips for productive meetings</a></h2>
                <p className="text-sm leading-loose">Lorem ipsum dolor sit amet, fugit persius inermis eos ad, eu oblique tacimates qui. Vim quodsi fabellas rationibus...</p>
            </article>
            <article>
                <a href="#" className="block mb-2 hover:bg-cw-blue-600"><Image src={cafePic} alt="Female sitting in the cafe" className="border-sm hover:opacity-75 ease-in duration-100"/></a>
                <a href="#" className="text-cw-blue-300 text-sm block mb-1 hover:text-cw-blue-600 hover:underline">Travel</a>
                <h2 className="mb-1"><a href="#" className="text-xl  text-cw-grey-800  font-work-sans leading-tight hover:text-cw-blue-600 hover:underline">Adjusting to leaving in a new city</a></h2>
                <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, fugit persius inermis eos ad, eu oblique tacimates qui....</p>
            </article>
            <article>
                <a href="#" className="block mb-2 hover:bg-cw-blue-600"><Image src={podastPic} alt="Microphone" className="border-sm hover:opacity-75 ease-in duration-100"/></a>
                <a href="#" className="text-cw-blue-300 text-sm block mb-1 hover:text-cw-blue-600 hover:underline">Technology</a>
                <h2 className="mb-1"><a href="#" className="text-xl  text-cw-grey-800  font-work-sans leading-tight hover:text-cw-blue-600 hover:underline">Setting up your first podcast</a></h2>
                <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, fugit persius inermis eos ad, eu oblique tacimates qui....</p>
            </article>
            <article>
                <a href="#" className="block mb-2 hover:bg-cw-blue-600"><Image src={mobilePic} alt="Female typing on mobile phone" className="border-sm hover:opacity-75 ease-in duration-100"/></a>
                <a href="#" className="text-cw-blue-300 text-sm block mb-1 hover:text-cw-blue-600 hover:underline">Technology</a>
                <h2 className="mb-1"><a href="#" className="text-xl  text-cw-grey-800  font-work-sans leading-tight hover:text-cw-blue-600 hover:underline">Rumours on the new phones launching this year</a></h2>
                <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, fugit persius inermis eos ad, eu oblique tacimates qui. Vim quodsi fabellas rationibus...</p>
            </article>
            <article>
                <a href="#" className="block mb-2 hover:bg-cw-blue-600"><Image src={sunsetPic} alt="Person walking with a sunset background" className="border-sm hover:opacity-75 ease-in duration-100"/></a>
                <a href="#" className="text-cw-blue-300 text-sm block mb-1 hover:text-cw-blue-600 hover:underline">Travel</a>
                <h2 className="mb-1"><a href="#" className="text-xl  text-cw-grey-800  font-work-sans leading-tight hover:text-cw-blue-600 hover:underline">Our favorite walking locations</a></h2>
                <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, fugit persius inermis eos ad, eu oblique tacimates qui....</p>
            </article>
            <article>
                <a href="#" className="block mb-2 hover:bg-cw-blue-600"><Image src={settingPic} alt="Female smiling with a laptop in front of her" className="border-sm hover:opacity-75 ease-in duration-100"/></a>
                <a href="#" className="text-cw-blue-300 text-sm block mb-1 hover:text-cw-blue-600 hover:underline">Buisness</a>
                <h2 className="mb-1"><a href="#" className="text-xl  text-cw-grey-800  font-work-sans leading-tight hover:text-cw-blue-600 hover:underline">Our tips on the perfect home office</a></h2>
                <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, fugit persius inermis eos ad, eu oblique tacimates qui. Vim quodsi fabellas rationibus...</p>
            </article>
        </div>
        <section className="flex flex-col md:flex-row justify-between pb-10 border-t border-cw-grey-100 pt-10 ">
            <div className="md:w-1/2 md:mr-10 mb-6 md:mb-0">
                <a href="#" className="mb-2 block  hover:bg-cw-blue-600"><Image className="rounded-sm hover:opacity-75 ease-in duration-100" src={makingPic} alt="Person making notes by a laptop" /> </a>
                <h3 className="mb-1"><a href="#" className="text-lg  text-cw-grey-800  font-work-sans leading-tight hover:text-cw-blue-600 hover:underline">Join our online digital university</a> </h3>
                <p className="leading-relaxed">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            </div>
            <div className=" md:w-1/2">
                <a href="#" className="mb-2 block  hover:bg-cw-blue-600"><Image className="rounded-sm hover:opacity-75 ease-in duration-100" src={focuslaptopPic} alt="Male is focus on his laptop" /> </a>
                <h3 className="mb-1"><a href="#" className="text-lg  text-cw-grey-800  font-work-sans leading-tight hover:text-cw-blue-600 hover:underline">This month webinar all your tax questions</a> </h3>
                <p className="leading-relaxed">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            </div>
        </section>
    </main>
    <footer>
        <div className="bg-gray-300 py-10 mb-10">
            <div className="container mx-auto max-w-6xl px-5 flex flex-col md:flex-row justify-between ">
                <div className="md:w-1/2">
                    <h3 className="text-2xl  font-work-sans text-cw-grey-900 mb-3">Sign up to stay up to date on all our courses</h3>
                    <p className="text-lg w-11/12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quam eos, quaerat adipisci doloremque, necessitatibus odit mollitia.</p>
                </div>

                {/* <form action="#" className="flex md:align-center md:self-center py-3 md:py-0">
                    <label for="email" className="sr-only">Enter your email</label>
                    <input className="placeholder-cw-grey-700 h-12 px-2 w-64" type="email" name="email" id="email" placeholder="Enter your email" />
                    <button className="bg-cw-blue-400 hover:hover:bg-cw-blue-600 w-12 h-12">
                        <svg className="text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </form> */}
            </div>
        </div>
        <div className="container mx-auto max-w-6xl px-5 flex flex-col md:flex-row justify-between pb-10">
            <ul className="flex flex-col md:flex-row space-x-10">
                <li><a href="#" className="text-cw-grey-800  hover:text-cw-blue-600 hover:underline py-2 md:py-0 inline-block">&copy;Blogs</a></li>
                <li><a href="#" className="text-cw-grey-800  hover:text-cw-blue-600 hover:underline py-2 md:py-0 inline-block">Home</a></li>
                <li><a href="#" className="text-cw-grey-800  hover:text-cw-blue-600 hover:underline py-2 md:py-0 inline-block">Travel</a></li>
                <li><a href="#" className="text-cw-grey-800  hover:text-cw-blue-600 hover:underline py-2 md:py-0 inline-block">Music</a></li>
                <li><a href="#" className="text-cw-grey-800  hover:text-cw-blue-600 hover:underline py-2 md:py-0 inline-block">Technology</a></li>
                <li><a href="#" className="text-cw-grey-800  hover:text-cw-blue-600 hover:underline py-2 md:py-0 inline-block">Business</a></li>
            </ul>
            {/* <ul className="flex pt-3">
                <li className="mr-8">
                    <a href="#">
                        <svg className="fill-current w-6 h-6 hover:text-twitter-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.54753 21.7512C16.6042 21.7512 21.5578 14.2479 21.5578 7.74098C21.5578 7.52789 21.5578 7.31573 21.5434 7.10452C22.507 6.40744 23.3389 5.54442 24 4.55573C23.1014 4.95394 22.148 5.21503 21.1718 5.33044C22.1995 4.71525 22.9692 3.74691 23.3366 2.60691C22.3701 3.18042 21.3126 3.58467 20.2099 3.80212C19.2789 2.81208 17.9786 2.25 16.6196 2.25C13.9158 2.25 11.691 4.47487 11.691 7.17862C11.691 7.55372 11.7338 7.92764 11.8185 8.29298C7.86145 8.09466 4.16948 6.22294 1.67039 3.14836C0.370828 5.38552 1.04325 8.28473 3.19486 9.72145C2.41134 9.69825 1.64466 9.48684 0.96 9.10514V9.16753C0.960656 11.5026 2.62158 13.5321 4.91039 13.9944C4.18552 14.1921 3.42478 14.221 2.68706 14.0789C3.33052 16.0798 5.18602 17.459 7.28738 17.4984C5.54409 18.8685 3.38939 19.6126 1.17216 19.6104C0.780375 19.6097 0.388969 19.586 0 19.5394C2.25159 20.9843 4.87219 21.7509 7.54753 21.7474" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <svg className="fill-current w-6 h-6 hover:text-facebook-blue" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5405 13.398L13.2017 9.08737H9.06573V6.29002C9.06573 5.11069 9.64347 3.96117 11.496 3.96117H13.3765V0.291281C13.3765 0.291281 11.6698 0 10.0383 0C6.63189 0 4.40556 2.06447 4.40556 5.80195V9.08737H0.619141V13.398H4.40556V23.8188C5.1648 23.938 5.94297 24 6.73567 24C7.52838 24 8.30655 23.938 9.06573 23.8188V13.398H12.5405Z" fill="#334E68" />
                        </svg>

                    </a>
                </li>
            </ul> */}
        </div>
    </footer>
    </>
  )
  
  {/* return <a href="/api/auth/signin">Sign in</a> */}
  {/* // const { loading, error, data } = useQuery(USERS);
  // console.log(error);
  // console.log(data);
  // console.log(loading);
  // if (loading) return <p>loading...</p>;
  // if (error) return <p>error</p>;
  // return (data.users.map(({ id, name }:Users) => (
  //   <div key={id}>
  //   <div classNameName="flex text-white bg-rose-400 text-center justify-center  items-center uppercase ">
    
  //     <p>{name}</p>
  //   </div>
    
  //   </div>
  // )
  // )
  // ) */}
}
