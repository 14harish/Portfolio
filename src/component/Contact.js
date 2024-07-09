import React from 'react'
import transition from '../transition'

function Contact() {
  return (
    <div className="dark:bg-[#111111] bg-white dark:text-[white] text-[#616262] sm:h-screen h-full">
        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center pt-20">
        <div className="relative flex items-center justify-center">
          <h1 className="sm:text-8xl text-5xl font-extrabold absolute text-[#5d5d5d] opacity-20">CONTACT</h1>
          <div className="relative z-10">
            <h1 className="sm:text-5xl text-3xl font-extrabold">
              GET IN <span className="text-[#FFB400]">TOUCH</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default transition(Contact)