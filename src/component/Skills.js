import React from 'react';
import Navbar from './Navbar';


function Skills() {
  const skills = [
    { name: 'Java', icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { name: 'HTML', icon: "https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"},
    { name: 'CSS', icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000"},
    { name: 'JAVASCRIPT', icon: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"},
    { name: 'REACT', icon: "https://cdn-icons-png.flaticon.com/128/875/875209.png"},
    { name: 'EXPRESS', icon: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000"},
    { name: 'NODE', icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000"},
    { name: 'MONGODB', icon: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000"},
    { name: 'SQL', icon: "https://img.icons8.com/?size=100&id=qGUfLiYi1bRN&format=png&color=000000"},
    { name: 'SPRING BOOT', icon: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
    { name: 'FIREBASE', icon: "https://www.gstatic.com/devrel-devsite/prod/ve7ce216351f398481fccad3cbbc60c699e78bde8533bfe4daa150955665bb2bf/firebase/images/lockup.svg" },
    { name: 'PYTHON', icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  ];

  return (
    <div className="dark:bg-[#111111] bg-white dark:text-[white] text-[#616262] sm:h-screen h-full pt-20">
      <h1 className="font-bold text-2xl mb-6 text-center">MY SKILLS</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 sm:pt-10 sm:pl-40 sm:pr-40 justify-center items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="relative flex flex-col items-center w-32 justify-center sm:ml-20">
            <div className="relative sm:w-24 sm:h-24 w-10 h-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-full w-auto rounded-full" // Ensure the image fits within the circle
                />
              </div>
            </div>
            <p className="text-center mt-4">{skill.name}</p>
          </div>
        ))}

      </div>
     {/* <Navbar /> */}
    </div>
  );
}

export default Skills;
