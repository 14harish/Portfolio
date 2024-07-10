import React from 'react';
import transition from '../transition';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa'; // Import icons from react-icons library
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbJson } from "react-icons/tb";
import { TiWeatherDownpour } from "react-icons/ti";

import square from '../assets/Projects/square.png'
import Weather from '../assets/Projects/Weather.png'
import chatbot from '../assets/Projects/chatbot.png'
import portfolio from '../assets/Projects/portfolio.png'

function Project() {
  const projectsData = [
    {
      "id": 1,
      "title": "Student Workspace",
      "image": square,
      "description": "Created and enhanced a collaborative learning platform using ReactJS and NodeJS. Improved academic activities management with features like internal marks access, group conversations, file sharing, and attendance management. Achieved a 50% increase in task management and collaboration efficiency",
      "stackIcons": [<FaReact />, <FaNodeJs />, <SiExpress />, <SiMongodb />, <IoLogoFirebase />, <RiTailwindCssFill />], // Example icons for React and Node.js
      "link": "https://github.com/Main-Project-Code-X/New-UI",
    },
    {
      "id": 2,
      "title": "Chatbot for Department",
      "image": chatbot,
      "description": "Developed a ReactJS and NodeJS-based chatbot for streamlined communication on academic details, placements, and departmental rules, reducing response times by 40% for parent and student queries",
      "stackIcons": [<FaReact />, <FaNodeJs />, <TbJson />, <SiExpress />, <FaCss3Alt />], // Example icons for React and Node.js
      "link": "https://github.com/14harish/ChatBotFinal",
    },
    {
      "id": 3,
      "title": "Weather Application",
      "image": Weather,
      "description": "Developed a ReactJS and ExpressJS web app for accurate weather information retrieval and display based on city names. Improved user engagement by offering a reliable seven-day weather forecast, resulting in a 30% increase in user interaction.",
      "stackIcons": [<FaReact />, <SiExpress />, <TiWeatherDownpour />], // Example icons for React and Node.js
      "link": 'https://14harish.github.io/WeatherReact2/',
    },
    {
      "id": 4,
      "title": "Portfolio",
      "image": portfolio,
      "description": "Created a user-friendly personal portfolio using React and Tailwind CSS to showcase professional achievements and skills effectively.",
      "stackIcons": [<FaReact />, <RiTailwindCssFill />], // Example icons for React and Tailwind CSS
      "link": "",
    },
  ];

  return (
    <div className='sm:h-screen h-[90vh]  dark:text-white text-[#616262]'>
      <div className="flex flex-col items-center justify-center pt-20">
        <div className="relative flex items-center justify-center">
          <h1 className="sm:text-9xl text-7xl font-extrabold absolute text-[#5d5d5d] opacity-20">WORK</h1>
          <div className="relative z-10">
            <h1 className="sm:text-5xl text-3xl font-extrabold">
              MY <span className="text-[#FFB400]">PROJECTS</span>
            </h1>
          </div>
        </div>
        <div className="flex sm:gap-12 gap-5 overflow-x-scroll w-5/6 mt-20 sm:mr-20 mr-0 sm:mb-0 mb-28 container cursor-pointer">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card dark:bg-[#252525] bg-[#F5F8FC] rounded-lg shadow-lg p-8 sm:min-w-96 min-w-72 overflow-hidden hover:scale-x-105 transition-transform duration-300 hover:text-[#FFB400]">
              <a href={project.link} className="block">
                <div className="relative overflow-hidden border-[#FFB400] border-b-4">
                  <img className="w-full h-48 transform scale-100 hover:scale-110 transition-transform duration-300" src={project.image} alt={project.title} />
                </div>
                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                <p className="dark:text-[#D2D2D2] text-[#616262] text-sm mt-2">{project.description}</p>
                <div className="flex items-center mt-4">
                  {project.stackIcons.map((icon, index) => (
                    <div key={index} className="mr-2 text-xl text-[#FFB400]">{icon}</div>
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default transition(Project);
