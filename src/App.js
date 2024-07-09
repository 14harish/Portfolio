import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import Home from './component/Home';
import About from './component/About';
import Reference from './component/Reference';
import "./index.css"
import Navbar from './component/Navbar';
import Education from './component/Education';
import Dark from './component/Dark';
import Project from './component/Project';
import Contact from './component/Contact';

function App() {

  const location = useLocation();


  return (
    <div className="
      h-full bg-gradient-linear dark:text-white text-black 
      dark:bg-[#111111] bg-[#FFFFFF]
      
    ">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Dark/>
      <Navbar/>
    </div>
  );
}

export default App;
