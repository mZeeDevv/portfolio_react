import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {SiLinkedin} from 'react-icons/si'
import {FaSquareGithub} from 'react-icons/fa6'
import {FaSquareXTwitter} from 'react-icons/fa6'
export default function Taskbar() {
  const location = useLocation();
  const naviagte = useNavigate();
 
  function router(router){
   if(router === location.pathname)
   {
    return true;
   }
  }
  const myInfo = {
    LinkedIN: "https://www.linkedin.com/in/hamza-shaukat-b5551925a/",
    GitHub: "https://github.com/mZeeDevv",
    Twitter: "https://twitter.com/mZeeDev"
  }

  return (
    <div className='md:text-xl font md:w-40 text-sm w-16'>
      <ul>
        <li 
        className={`mt-3 cursor-pointer border-b-2 border-transparent md:w-20 w-16
      ${router("/") && "border-b-blue-300"}`}
        onClick={() => naviagte("/")}
        >About
        </li>
        <li 
        className={`mt-9 cursor-pointer border-b-2 border-transparent md:w-20 w-16
        ${router("/projects") && "border-b-blue-300"}`}
        onClick={() => naviagte("/projects")}
        >
          Projects
          </li>
        <li 
        className={`mt-9 cursor-pointer border-b-2 border-transparent md:w-20 w-16
        ${router("/resume") && "border-b-blue-300"}`}
        onClick={() => naviagte("/resume")}
        >
          Resume</li>
        <li 
        className={`mt-9 cursor-pointer border-b-2 border-transparent md:w-20 w-16
        ${router("/skills") && "border-b-blue-300"}`}
        onClick={() => naviagte("/skills")}
        >
          Skills</li>
        <li 
        className={`mt-9 cursor-pointer border-b-2 border-transparent md:w-20 w-16
        ${router("/contact") && "border-b-blue-300"}`}
        onClick={() => naviagte("/contact")}
        >
          Contact</li>
      
      <div className='mt-5 w-16 border border-gray-800 opacity-20 md:w-24'>
      </div>

      <a href={myInfo.LinkedIN}>
      <li className='mt-9 cursor-pointer md:text-sm flex items-center text-[8px]'
      >
       <SiLinkedin className='mx-1 '/> Hamza <span className='hidden md:inline-block ml-1'>Shaukat</span>
      </li>
      </a>


      <a href={myInfo.GitHub}>
      <li className='mt-9 cursor-pointer md:text-sm items-center flex text-[10px]'
      >
       <FaSquareGithub className='mx-1'/>mZeeDevv
      </li>
      </a>


     <a href={myInfo.Twitter}>
     <li className='mt-9 cursor-pointer md:text-sm items-center flex text-[10px]'
      >
       <FaSquareXTwitter className='mx-1'/>mZeeDevv
      </li>
     </a>


      </ul>
    </div>
  )
}
