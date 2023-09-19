import React from 'react'
import profile from '../media/profile.png'
export default function About() {
  return (
    <div className='p-1 w-full'>
        <div className='flex text-center content-center items-center text-xs'> 
       <div className='flex relative'>
       <img className='md:w-[40px] md:h-[40px] rounded-full border border-white relative w-[20px] h-[20px]'
           src={profile} alt="profile" />
           <div className={`md:w-[14px] md:h-[14px] bg-green-600 rounded-full absolute bottom-0 w-[8px] h-[8px]
           right-0 border-2 border-white`}></div>
       </div>
        <p className='md:mx-2 mx-1 font-IBMPlexMono text-gray-500'>@mZeeDev
        </p>
        <p className=' text-gray-800 text-[20px]'> | </p>
        <p className='md:mx-2 md:p-1 text-black bg-gray-200 rounded-lg mx-1'>AKA</p>
        <p className='font-IBMPlexMono text-gray-400'>Hamza Shaukat</p>
        </div>
        
        <div className='md:p-5 p-2'>
        <div className='flex items-center font'>
          <img className='md:w-[40px] md:h-[40px] rounded-full border border-white relative w-[20px] h-[20px]' 
           src={profile} alt="profile" />
           <p className='md:font-bold md:mx-2 md"text-md text-violet-600 text-xs mx-1'>Hamza Shaukat</p>
           <p className='font-IBMPlexMono text-gray-500 md:text-xs text-[9px]'> 9/19/2023 10:28PM
           </p>
           </div>
        </div>
        <div className='md:pl-10 font-IBMPlexMono text-xs md:text-[15px] leading-5  '>
          <p>Hi, I'm Hamza, and I'm really into making websites. I started learning about this stuff in 2021, 
            and I've been practicing and learning more about it ever since. My main focus is using React.js 
            to make websites more interesting and interactive.</p>

            <p className='md:py-7'>
            I'm currently a Computer Science student at the International Islamic University in Islamabad. I've also been a mentor at <a className='text-black underline'>Major League Hacking (MLH)</a>. I like challenges, 
            and I always try to stay updated on the latest trends in web development. Whether it's making the front part of a website look nice or 
            making sure everything works smoothly behind the scenes, I enjoy writing good code that turns ideas into reality.
            </p>

            <p className='md:py-3'>
            Outside of my academic and professional pursuits, I'm leading a community called <a className='text-black underline' >Devconnect</a> at my university. 
            DevConnect is dedicated to helping students enhance their technical and non-technical skills, providing them with a well-rounded education
            .I'm excited about the future of web development and look forward to contributing to this dynamic field. If you share my passion for technology and coding, feel free to connect with me. Together, 
            we can explore the endless possibilities that the world of web development has to offer!
            </p>
        </div>
    </div>
  )
}
