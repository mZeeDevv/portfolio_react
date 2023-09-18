import React from 'react'
import profile from '../media/profile.png'
export default function About() {
  return (
    <div className='p-2'>
        <div className='flex text-center content-center items-center'> 
       <div className='flex relative'>
       <img className='md:w-[40px] md:h-[40px] rounded-full border border-white relative'
           src={profile} alt="profile" />
           <div className={`md:w-[14px] md:h-[14px] bg-green-600 rounded-full absolute bottom-0 right-0`}></div>
       </div>
        <p className='text-black mx-2'>@mZeeDev</p>
        </div>
    </div>
  )
}
