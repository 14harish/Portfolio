import React from 'react';
import transition from "../transition";
import Certficates from './Certficates';



function Education() {
   

    return (
        <div className="dark:bg-[#111111] bg-white dark:text-[white] text-[#616262] h-screen">
            <div className="sm:flex sm:flex-col sm:items-center sm:justify-center pt-20">
                <div className="relative flex items-center justify-center">
                    <h1 className="sm:text-8xl text-6xl font-extrabold absolute text-[#5d5d5d] opacity-20">EXPERIENCE</h1>
                    <div className="relative z-5">
                        <h1 className="sm:text-5xl text-3xl font-extrabold">
                            MY <span className="text-[#FFB400]">EDUCATION</span>
                        </h1>
                    </div>
                </div>
            </div>
           {/* <Certficates/> */}
        </div>
    );
}

export default transition(Education);
