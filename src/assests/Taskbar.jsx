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

      <li className='mt-9 cursor-pointer text-sm flex items-center'
      >
       <SiLinkedin className='md:mx-1'/>Hamza Shaukat
      </li>
      <li className='mt-9 cursor-pointer text-sm items-center flex'
      >
       <FaSquareGithub className='md:mx-1'/> mZeeDevv
      </li>
      <li className='mt-9 cursor-pointer text-sm items-center flex'
      >
       <FaSquareXTwitter className='md:mx-1'/>mZeeDevv
      </li>
      </ul>
    </div>
  )
}
