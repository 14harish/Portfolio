import React from "react";
import transition from "../transition";
import Me from "../assets/Profile/Me.png";
import { FaArrowCircleRight } from "react-icons/fa";
import Typewriter from "./TypeWriter";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
  const texts = [
    "Web",
    "Software",
    "FrontEnd",
    "BackEnd",
];
const routePage = (val) => {
  navigate(val);
};
  return (
    <div className="sm:flex sm:flex-row sm:pt-6 sm:h-screen h-[90vh] pt-36
       sm:dark:bg-gradient-dark-back sm:bg-gradient-light-back 
      dark:bg-[#111111] bg-[#FFFFFF]
       ">
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
          <span className="text-[#FFB400]">.I'M HARISH V</span> — <span className="sm:text-4xl">Aspiring <span><Typewriter texts={texts} speed={100} interval={2000} /> </span> Developer !</span>
        </h1>
        <p className="sm:text-lg sm:text-right text-center sm:mb-4 mb-0">
        "Committed to crafting seamless development experiences through creative problem-solving and the integration of cutting-edge technologies"
        </p>
      <div className="text-center flex justify-end">
          <button 
            type="submit" 
            className="relative overflow-hidden text-[#616262] dark:text-white rounded-full flex items-center gap-2 border border-[#FFB400] group hover:text-white mt-8"
            onClick={()=>{routePage("/about")}}
          >
          <span className="relative z-10 pl-6 py-2 font-semibold">MORE ABOUT ME</span>
          <div className="absolute inset-0 bg-[#FFB400] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
          <span className='relative z-10 bg-[#FFB400] p-2 rounded-full'><FaArrowCircleRight size={24} color='white' /></span>
      </button>
    </div>
      </div>
    </div>
  );
}

export default transition(Home);
