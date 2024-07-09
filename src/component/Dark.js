import React from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5';
function Dark() {
  const [dark, setDark] = React.useState(false);
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle('dark');
      };
  return (
    <div className="fixed sm:top-4 sm:right-4 top-2 right-2">
        <button className='bg-[#4B4B4B] sm:p-3 p-2 rounded-full' onClick={darkModeHandler}>
          {dark ? <IoSunny size={32} color='white' /> : <IoMoon size={32} color='white' />}
        </button>
      </div>
  )
}

export default Dark