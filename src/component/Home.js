import React from "react";
import transition from "../transition";
import Me from "../assets/Profile/Me.png";

function Home() {
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
          <span className="text-yellow-500">.I'm HARISH V</span> — Web Designer
        </h1>
        <p className="sm:text-lg sm:text-right text-center sm:mb-4 mb-0">
          I'm a Tunisian based web designer & front-end developer focused on
          crafting clean & user-friendly experiences. I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>

      </div>
      <div></div>
    </div>
  );
}

export default transition(Home);
