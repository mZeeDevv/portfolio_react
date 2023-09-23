import React from 'react'
import {easeOut, motion as m} from 'framer-motion';
import mlh from '../media/mlh.png'
import devconnect from '../media/Cover.png'
import hack from '../media/hack.png'
import pcImg from '../media/pc.jpg'
export default function Resume() {
  return (
    <m.div 
    initial={{paddingTop: 10, opacity: 0}}
    animate={{paddingTop: 4,opacity: 1}}
    transition={{duration: 0.2, ease: easeOut}}
    className='p-1 w-full font'>
    <div>
    
     <div className='flex justify-center'>
        <div className='flex items-center md:shadow-xl shadow-sm shadow-gray-300 md:p-2 p-1 md:my-3 float_sm border '>
        <img src={mlh} alt="mlh.png" className='border border-black rounded-full h-10 md:w-10
        '
        />
        <div className='mx-3 text-xs md:text-[15px]'>
        <p className='text-black'>Student Mentor (MLH) </p>
        <p className='text-black text-center rounded-full md:p[4px] bg-[#93bed7]'>2022 - 2023</p>
        </div>
        </div>
     </div>
     <p className='md:my-3 md:text-center text-xs my-4 md:text-[15px] md:leading-6 leading-4'>
      <a href='https://mlh.io/about' className='text-black underline'>Major League Hacking (MLH)</a> is the official student hackathon league.
      One of the things that truly ignites my excitement is taking part in hackathons hosted by MLH. 
      These events provide the perfect platform to tackle real-world challenges, transform ideas into tangible projects, and connect with like-minded individuals from diverse backgrounds.
      In recognition of my dedication and passion for the MLH community,
       I was honored to be appointed as a <span className='text-black underline'>Student Mentor</span> from 2022 to 2023. As a mentor, I've had the privilege of guiding and inspiring fellow students, sharing my knowledge, and fostering a spirit of creativity and innovation.
      </p>
       

      <div className='flex justify-center'>
        <div className='flex items-center md:shadow-xl shadow-sm shadow-gray-300 md:p-2 p-1 md:my-3 float_sm border'>
        <img src={devconnect} alt="mlh.png" className='border border-black rounded-full h-10 w-10'/>
        <div className='mx-3 text-xs md:text-[15px]'>
        <p className='text-black text-center'>Founder</p>
        <p className='text-black text-center rounded-full md:p-[4px] bg-[#93bed7] p-[2px]'>2022 - Present</p>
        </div>
        </div>
     </div>
     <p className='md:my-3 md:text-center text-xs my-4 md:text-[15px] md:leading-6 leading-4'>
     I believe in the power of community and the transformative impact of technology. My journey began when I entered university, and I couldn't help but notice the 
     lack of awareness and opportunities for students to engage with the ever-evolving world of technology and innovation.In 2022, 
     I decided to take matters into my own hands and embarked on a mission to bridge this gap. That's when <span className='text-black underline'>Devconnect</span> was born.
      Devconnect isn't just a community; it's a movement. Our goal is simple yet profound:  to empower students with the knowledge, skills, and opportunities they need to thrive in the digital age.
      Devconnect a story of <br></br><span className='text-black'>innovation, collaboration, and empowerment.</span>
      </p>

      <div className='flex justify-center py-2 border-t-2'>  

      
      <div className='px-2'>
     <div className='max-w-sm'>
     <img src={hack} alt="hackathons" className=''/>
      
     </div>
      <p className='md:text-xs text-center font-IBMPlexMono text-gray-400 underline md:py-1 text-[10px]'>Picture taken during project presentation (Hackathon)</p>
        </div> 


        <div>
     <div className='max-w-sm'>
     <img src={pcImg} alt="hackathons" className='h-[200px] border border-gray-500 rounded mx-auto'/>
     </div>
      <p className='md:text-xs text-center font-IBMPlexMono text-gray-400 underline md:py-1 text-[10px]'>Random picture taken during task at Computer Lab (2023)</p>
        </div> 
      </div>
    </div>
    </m.div>
  )
}