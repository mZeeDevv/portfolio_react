import React from 'react'
import Taskbar from '../assests/Taskbar'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Projects from '../pages/Projects'
import Resume from '../pages/Resume'
import Skills from '../pages/Skills'
import { Routes, Route} from 'react-router-dom';

export default function Container() {

  return (
    <div
     className='border-4 border-black mx-auto md:w-[960px] bg-[#ECF2FF] flex
     md:p-4 md:p-2 border-double rounded-md'
    >
      <Taskbar/>
     <div className='md:mx-4 bg-white w-full border border-[#0F6292] border-l-4'>
     <Routes>
      <Route path='/' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/skills' element={<Skills/>} />
      <Route path='/communities' element={<Resume/>} />
      <Route path='/projects' element={<Projects/>} />
     </Routes>
     </div>
    </div>
  )
}
