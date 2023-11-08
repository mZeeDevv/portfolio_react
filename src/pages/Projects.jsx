import React from 'react'
import API from '../media/API.jpg'
import weather from '../media/weather.png'
import multi from '../media/mutli.jpg'
import Motors from '../media/Motors.png'
import {easeOut, motion as m} from 'framer-motion';
import photo from '../media/photogra.jpg'
import joker from '../media/laugh.jpeg'
import Mechanics from '../media/mechanics.jpg'
import home from '../media/home.jpg'



export default function Projects() {
  return (
<m.div
initial={{paddingTop: 10, opacity: 0}}
animate={{paddingTop: 4,opacity: 1}}
transition={{duration: 0.2, ease: easeOut}}
>
<div>
  <p className='w-full text-center font-IBMPlexMono md:text-xl my-3 font'>Curious to know what I have been doing? Here's the history of my work.
</p>
<div className='flex flex-wrap'>
      
<div className="max-w-[250px] rounded overflow-hidden shadow-lg m-3 border-2 border-[#0F6292]">
        <img className="w-full" src={home} alt="Sunset in the mountains"/>
        <div className="px-3 py-2">
          <div className="font-bold text-md text-center mb-2">Realthor Project</div>
          <p className="text-gray-700 text-sm">
            A complex project created with React and  <b className='text-xs'>Firebase Database</b> in 2023. The project is fully 
            functional.
          </p>
        </div>
        <div className="flex justify-center my-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Complex Project</span>
        </div>
        <div className='flex justify-center'>
        <button className=" bg-[#0F6292] hover:bg-[#0f6292f1] border-[#5687a4] rounded-sm text-xs
                       hover:border-[#141f25] border text-white p-1 m-2" type="button">
                    <a href="https://github.com/mZeeDevv/portfolio_react" className='font'>Project Preview</a>
                  </button>
        </div>
      </div>

      <div className="max-w-[250px] rounded overflow-hidden shadow-lg m-3 border-2 border-[#0F6292]">
        <img className="w-full" src={Motors} alt="Sunset in the mountains"/>
        <div className="px-3 py-2">
          <div className="font-bold text-md text-center mb-2">Auto Mobile Workshop</div>
          <p className="text-gray-700 text-sm">
            Project created for Hackathon hosted by  <b className='text-xs'>Major League Hacking (MLH) </b>in 2023. The project is connected with Firebase and fully 
            functional.
          </p>
        </div>
        <div className="flex justify-center my-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Hackathon Project</span>
        </div>
        <div className='flex justify-center'>
        <button className=" bg-[#0F6292] hover:bg-[#0f6292f1] border-[#5687a4] rounded-sm text-xs
                       hover:border-[#141f25] border text-white p-1 m-2" type="button">
                    <a href="https://github.com/mZeeDevv/Hackathon_Project_MLH-V2" className='font'>Project Preview</a>
                  </button>
        </div>
      </div>

      <div className="max-w-[250px] rounded overflow-hidden shadow-lg m-3 border-2 border-[#0F6292]">
        <img className="w-full" src={Mechanics} alt="Sunset in the mountains"/>
        <div className="px-3 py-2">
          <div className="font-bold text-md text-center mb-2">Auto Mobile Workshop (V2) </div>
          <p className="text-gray-700 text-sm">
            A project created for auto mobile workshop owner to provide his services. This project contact contact page (fully functional), Locations and offers.
          </p>
        </div>
        <div className="flex justify-center my-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Hackathon Project</span>
        </div>
        <div className='flex justify-center'>
        <button className=" bg-[#0F6292] hover:bg-[#0f6292f1] border-[#5687a4] rounded-sm text-xs
                       hover:border-[#141f25] border text-white p-1 m-2" type="button">
                    <a href="https://test-sessions.github.io/Mechanic/index.html" className='font'>Project Preview</a>
                  </button>
        </div>
      </div>

      
      <div className="max-w-[250px] rounded shadow-lg  m-3 border-2 border-[#0F6292]">
        <img className="w-full max-h-[200px]" src={photo
        }alt="Sunset in the mountains"/>
        <div className="px-3 py-2">
          <div className="font-bold text-md text-center mb-2">Photographer Website</div>
          <p className="text-gray-700 text-sm">
          A website that a Photographer can use to provide his services. By using this website he can introduce his self, sell this services and many more.
          </p>
        </div>
        <div className="flex justify-center my-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Pratice Project</span>
        </div>
        <div className='flex justify-center'>
        <button className=" bg-[#0F6292] hover:bg-[#0f6292f1] border-[#5687a4] rounded-sm text-xs
                       hover:border-[#141f25] border text-white p-1 m-2" type="button">
                    <a href="https://mzeedevv.github.io/Photographer-Website/" className='font'>Project Preview</a>
                  </button>
        </div>
      </div>

      <div className="max-w-[250px] rounded shadow-lg  m-3 border-2 border-[#0F6292]">
        <img className="w-full max-h-[200px]" src={joker
        }alt="Sunset in the mountains"/>
        <div className="px-3 py-2">
          <div className="font-bold text-md text-center mb-2">Joke Generator </div>
          <p className="text-gray-700 text-sm">
          Some of bad jokers are stored in JavaScript file using arrays. Use can get different type of jokes on each click.
          </p>
        </div>
        <div className="flex justify-center my-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Pratice Project</span>
        </div>
        <div className='flex justify-center'>
        <button className=" bg-[#0F6292] hover:bg-[#0f6292f1] border-[#5687a4] rounded-sm text-xs
                       hover:border-[#141f25] border text-white p-1 m-2" type="button">
                    <a href="https://mzeedevv.github.io/Joke_Generator/" className='font'>Project Preview</a>
                  </button>
        </div>
      </div>





      <div className="max-w-[250px] rounded shadow-lg  m-3 border-2 border-[#0F6292]">
        <img className="w-full max-h-[200px]" src={weather} alt="Sunset in the mountains"/>
        <div className="px-3 py-2">
          <div className="font-bold text-md text-center mb-2">Weather App</div>
          <p className="text-gray-700 text-sm">
            A weather app created with using a free API. This app can provide a user his city weather information such as <b className='text-xs'>Feels like</b>, <b  className='text-xs'>Humidity </b>and <b className='text-xs'>Wind Speed</b>.
          </p>
        </div>
        <div className="flex justify-center my-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Pratice Project</span>
        </div>
        <div className='flex justify-center'>
        <button className=" bg-[#0F6292] hover:bg-[#0f6292f1] border-[#5687a4] rounded-sm text-xs
                       hover:border-[#141f25] border text-white p-1 m-2" type="button">
                    <a href="https://mzeedevv.github.io/weather_app/" className='font'>Project Preview</a>
                  </button>
        </div>
      </div>
      
      
      <div className="max-w-[250px] rounded overflow-hidden shadow-lg m-3 border-2 border-[#0F6292]">
        <img className="w-full max-h-[200px]" src={API} alt="Sunset in the mountains"/>
        <div className="px-3 py-2">
          <div className="font-bold text-md text-center mb-2">API Projects</div>
          <p className="text-gray-700 text-sm">
          A Repository which contact some API projects that I've been created using free APIs. There is a song application which is under development will be added after I completed it.
          </p>
        </div>
        <div className="flex justify-center my-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">API Project</span>
        </div>
        <div className='flex justify-center'>
        <button className=" bg-[#0F6292] hover:bg-[#0f6292f1] border-[#5687a4] rounded-sm text-xs
                       hover:border-[#141f25] border text-white p-1 m-2" type="button">
                    <a href="https://github.com/mZeeDevv/All_API_Projects" className='font'>Project Preview</a>
                  </button>
        </div>
      </div>
      
      
      
      
      
      <div className="max-w-[250px] rounded shadow-lg m-3 border-2 border-[#0F6292]">
        <img className="w-full max-h-[200px]" src={multi} alt="Sunset in the mountains"/>
        <div className="px-3 py-2">
          <div className="font-bold text-md text-center mb-2">Multiplication App</div>
          <p className="text-gray-700 text-sm">
         A Multiplication app/Quiz in which your score will be save in local storage, added some awesome background and effect too. Later this will be modified even more ! :)
          </p>
        </div>
        <div className="flex justify-center my-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Pratice Project</span>
        </div>
        <div className='flex justify-center'>
        <button className=" bg-[#0F6292] hover:bg-[#0f6292f1] border-[#5687a4] rounded-sm text-xs
                       hover:border-[#141f25] border text-white p-1 m-2" type="button">
                    <a href="https://github.com/mZeeDevv/Multiplication-app" className='font'>Project Preview</a>
                  </button>
        </div>
      </div>
      <p className='w-full my-2 bg-gray-200 text-center font'>For more projects please visit my <b className='text-sm'><a href='https://github.com/mZeeDevv/'>Github profile</a></b>, more projects will be added some. :)</p>
          </div>
</div>

  
</m.div>
  )
}
