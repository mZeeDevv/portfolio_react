import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {SiLinkedin} from 'react-icons/si'
import {FaSquareGithub, FaDiagramProject, FaSquareXTwitter, FaHammer} from 'react-icons/fa6'
import {IoMdContact} from 'react-icons/io'
import {RiContactsFill} from 'react-icons/ri'
import {IoIosPeople} from 'react-icons/io'
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
    <div className='px-1 md:text-[17px] font md:w-40 text-sm pb-3 w-10'>
      <ul>
        <li 
        className={`flex items-center mt-3 cursor-pointer border-b-2 border-transparent text-center justify-center
      ${router("/") && "border-b-blue-500"}`}
        onClick={() => naviagte("/")}
        >
          <IoMdContact  />
          <p className='hidden md:inline-block ml-1'>About</p>
        </li>
        <li 
        className={`flex mt-9 cursor-pointer border-b-2 border-transparent  items-center text-center justify-center
        ${router("/projects") && "border-b-blue-500"}`}
        onClick={() => naviagte("/projects")}
        >
          <FaDiagramProject/>
          <p className='hidden md:inline-block ml-1'>Projects</p>
          </li>
        <li 
        className={`flex mt-9 cursor-pointer border-b-2 border-transparent items-center text-center justify-center
        ${router("/communities") && "border-b-blue-500"}`}
        onClick={() => naviagte("/communities")}
        >
          <IoIosPeople/>
          <p className='hidden md:inline-block ml-1'>Communities</p>
          </li>
        <li 
        className={`flex mt-9 cursor-pointer border-b-2 border-transparent items-center  text-center justify-center
        ${router("/skills") && "border-b-blue-500"}`}
        onClick={() => naviagte("/skills")}
        >
          <FaHammer />
          <p className='hidden md:inline-block mx-1'>Skills</p>
          </li>
        <li 
        className={`flex mt-9 cursor-pointer border-b-2 border-transparent items-center text-center justify-center
        ${router("/contact") && "border-b-blue-500"}`}
        onClick={() => naviagte("/contact")}
        >
          <RiContactsFill />
          <p className='hidden md:inline-block ml-1'>Contact</p>
          </li>
      
      <div className='mt-5 border border-gray-800 opacity-20 '>
      </div>

      <a href={myInfo.LinkedIN}>
      <li className='flex mt-9 cursor-pointer md:text-sm flex items-center'
      >
        <SiLinkedin className='mx-1 '/> 
       <p className='hidden md:inline-block'>Hamza Shaukat</p>
       
             </li>
      </a>


      <a href={myInfo.GitHub}>
      <li className='flex mt-9 cursor-pointer md:text-sm items-center flex'
      >
         <FaSquareGithub className='mx-1' />
      <p className='hidden md:inline-block'>mZeeDev</p>
      </li>
      </a>
     <a href={myInfo.Twitter}>
     <li className='flex mt-9 cursor-pointer md:text-sm items-center flex'
      >
       <FaSquareXTwitter className='mx-1' />
      <p className='hidden md:inline-block'>mZeeDev</p>
      </li>
     </a>
      </ul>
    </div>
  )
}
