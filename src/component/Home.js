import React from "react";
import Navbar from "./Navbar";
import { FaArrowAltCircleRight } from "react-icons/fa";
import transition from "../transition";

import "../style.css";
import Me from "../assets/profile-pic (7).png";
import Dark from "./Dark";

function Home() {
  return (
    <div className="sm:flex sm:flex-row sm:pt-6 min-h-screen pt-36
       sm:dark:bg-gradient-dark-back sm:bg-gradient-light-back 
      dark:bg-[#111111] bg-[#FFFFFF]
       ">
      {/* <Dark /> */}
      <div
        className="
          sm:w-1/3 sm:ml-10 ml-6 flex items-center justify-center
          "
      >
        <img
          className="sm:rounded-3xl sm:w-3/4 w-48 rounded-full shadow-gray-600 shadow-2xl"
          src={Me}
          alt="Harish V"
        />
      </div>
      <div className="sm:w-3/6 sm:pl-44 w-auto p-10 sm:flex sm:flex-col sm:justify-center">
        <h1 className="sm:text-6xl text-4xl text-center font-bold mb-4">
          <span className="text-yellow-500">.I'm Harish V</span> — Web Designer
        </h1>
        <p className="sm:text-lg sm:text-right text-center sm:mb-4 mb-0">
          I'm a Tunisian based web designer & front-end developer focused on
          crafting clean & user-friendly experiences. I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>

        {/* <button className="mt-4 text-lg font-semibold border-2 rounded-full border-[#FFB400] flex hover:bg-[#FFB400] tracking-tighter">
              <div className='p-2'>More About Me</div>
              <div className='bg-[#FFB400] rounded-full'>
              <FaArrowAltCircleRight size={44} width={20}/>
              </div>
            </button> */}
          {/* <div className="sm:mt-0 mt-52">
        <Navbar />
        </div> */}
      </div>
      <div></div>
    </div>
  );
}

export default transition(Home);
