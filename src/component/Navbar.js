import React from 'react';
import { MdHome, MdAccountCircle } from 'react-icons/md';
import { IoMdMailOpen } from "react-icons/io";
import { SiGooglescholar, Si9Gag } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const routePage = (val) => {
    navigate(val);
  };

  return (
    <div className='sm:fixed flex sm:flex-col sm:gap-4 gap-2 sm:top-64 sm:right-24 sm:w-10 mt-10 ml-10 sm:mt-0'>
      <button className="group flex items-center justify-start sm:w-11 sm:h-11 w-14 h-14 bg-[#FFB400] rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-32 active:translate-x-1 active:translate-y-1" onClick={() => { routePage("/") }}>
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
          <MdHome size={24} color='white' />
        </div>
        <div className="absolute sm:right-5 right-3 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Home
        </div>
      </button>
      <button className="group flex items-center justify-start sm:w-11 sm:h-11 w-14 h-14 dark:bg-[#2B2A2A] bg-gray-400 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-32 active:translate-x-1 active:translate-y-1 hover:bg-[#FFB400] dark:hover:bg-[#FFB400]" onClick={() => { routePage("/about") }}>
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
          <MdAccountCircle size={24} color='white' />
        </div>
        <div className="absolute sm:right-5 right-3 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          About
        </div>
      </button>
      <button className="group flex items-center justify-start sm:w-11 sm:h-11 w-14 h-14 dark:bg-[#2B2A2A] bg-gray-400 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-32 active:translate-x-1 active:translate-y-1 hover:bg-[#FFB400] dark:hover:bg-[#FFB400]" onClick={()=>{routePage("/education")}}>
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
          <SiGooglescholar size={24} color='white' />
        </div>
        <div className="absolute sm:right-2 sm:top-2 top-7 right-2 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Education
        </div>
      </button>
      <button className="group flex items-center justify-start sm:w-11 sm:h-11 w-14 h-14 dark:bg-[#2B2A2A] bg-gray-400 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-32 active:translate-x-1 active:translate-y-1 hover:bg-[#FFB400] dark:hover:bg-[#FFB400]">
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
          <Si9Gag size={24} color='white' />
        </div>
        <div className="absolute sm:right-5 right-2 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Project
        </div>
      </button>
      <button className="group flex items-center justify-start sm:w-11 sm:h-11 w-14 h-14 dark:bg-[#2B2A2A] bg-gray-400 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-32 active:translate-x-1 active:translate-y-1 hover:bg-[#FFB400] dark:hover:bg-[#FFB400]">
        <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
          <IoMdMailOpen size={24} color='white' />
        </div>
        <div className="absolute sm:right-5 right-2 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Contact
        </div>
      </button>
    </div>
  );
}

export default Navbar;
