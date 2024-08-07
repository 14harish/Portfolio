import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import Home from './component/Home';
import About from './component/About';
import "./index.css"
import Navbar from './component/Navbar';
import Education from './component/Education';
import Dark from './component/Dark';
import Project from './component/Project';
import Contact from './component/Contact';

function App() {

  return (
    
    <div className="
      h-full bg-gradient-linear dark:text-white text-black 
      dark:bg-[#111111] bg-[#FFFFFF]
      
    ">
     <AnimatePresence mode='wait'>
          
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </AnimatePresence>
          <Navbar/>
          <Dark/>
      
    </div>
  );
}

export default App;
