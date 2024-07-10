import React,{useRef} from 'react'
import transition from '../transition'
import { FaInstagram, FaTelegramPlane,FaGithub, FaLinkedin, FaWhatsapp,FaMap,FaPhoneSquareAlt } from 'react-icons/fa';
import { IoMdMailOpen } from "react-icons/io";
import emailjs from 'emailjs-com';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_osq3nmg', 'template_5hyay89', form.current, 'mCmu8wTrx3r2ikCLq')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send email.');
      });
  };
  return (
    <div className="dark:bg-[#111111] bg-white dark:text-[white] text-[#616262] sm:h-full h-full">
        <div className="sm:flex sm:flex-col sm:items-center sm:justify-center pt-20">
        <div className="relative flex items-center justify-center">
          <h1 className="sm:text-8xl text-6xl font-extrabold absolute text-[#5d5d5d] opacity-20">CONTACT</h1>
          <div className="relative z-10">
            <h1 className="sm:text-5xl text-3xl font-extrabold">
              GET IN <span className="text-[#FFB400]">TOUCH</span>
            </h1>
          </div>
        </div>
      </div>
      <div class="sm:flex sm:items-center sm:justify-center mt-10 sm:mr-40">
        <div class="sm:p-20 sm:w-4/6 sm:ml-10 p-8" id="form">                  
        <form id="contactForm" ref={form} onSubmit={sendEmail}>
      <div className="mb-6">
        <div className="mx-0 mb-1 sm:mb-6 flex gap-4">
          <div className="mb-1 w-full">
            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
            <input 
              type="email" 
              id="email" 
              autoComplete="email" 
              placeholder="YOUR EMAIL" 
              className="input-field mb-2 w-full rounded-full text-right dark:bg-[#252525] py-3 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 "
              name="email"
            />
          </div>
          <div className="mb-1 w-full">
            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
            <input 
              type="text" 
              id="name" 
              autoComplete="given-name" 
              placeholder="YOUR NAME" 
              className="input-field mb-2 w-full rounded-full text-right dark:bg-[#252525] py-3 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 "
              name="name"
            />
          </div>
        </div>
        <div className="mb-1 sm:mb-6">
          <label htmlFor="subject" className="pb-1 text-xs uppercase tracking-wider"></label>
          <input 
            type="text" 
            id="subject" 
            autoComplete="given-subject" 
            placeholder="YOUR SUBJECT" 
            className="input-field mb-2 w-full rounded-full text-right dark:bg-[#252525] py-3 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
            name="subject"
          />
        </div>
        <div className="mb-1 sm:mb-6">
          <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
          <textarea 
            id="textarea" 
            name="message" 
            cols="30" 
            rows="6" 
            placeholder="YOUR MESSAGE" 
            className="input-field mb-2 w-full rounded-2xl text-right dark:bg-[#252525] py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
          ></textarea>
        </div>
      </div>
      <div className="text-center flex justify-end">
      <button 
        type="submit" 
        className="relative overflow-hidden text-[#616262] dark:text-white rounded-full flex items-center gap-2 border border-[#FFB400] group hover:text-white"
      >
        <span className="relative z-10 pl-6 py-2 font-semibold">SEND MESSAGE</span>
        <div className="absolute inset-0 bg-[#FFB400] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
        <span className='relative z-10 bg-[#FFB400] p-2 rounded-full'><FaTelegramPlane size={30} color='white' /></span>
      </button>
    </div>
    </form>
                </div>
            <div class="sm:w-1/3 p-10">
                <div class="h-full">
                    <div className="text-right mb-10">
                        <h2 className="text-2xl font-semibold mb-8">Catch Me Via Social Platforms</h2>
                        <div className="flex justify-end space-x-6">
                            <a href="https://www.instagram.com/harish._.14/" target='_blank'
                                rel="noopener noreferrer" className="text-3xl dark:bg-[#2B2A2A] bg-[#EEEEEE] text-[#666666] dark:text-white p-2 rounded-full hover:bg-[#FFB400] dark:hover:bg-[#FFB400] hover:text-white"><FaInstagram size={30}/></a>
                            <a href="https://github.com/14harish" target='_blank'
                                rel="noopener noreferrer" className="text-3xl dark:bg-[#2B2A2A] bg-[#EEEEEE] text-[#666666] dark:text-white p-2 rounded-full hover:bg-[#FFB400] dark:hover:bg-[#FFB400] hover:text-white"><FaGithub size={30}/></a>
                            <a href="https://www.linkedin.com/in/harish-v-29734821a/" target='_blank'
                                rel="noopener noreferrer" className="text-3xl dark:bg-[#2B2A2A] bg-[#EEEEEE] text-[#666666] dark:text-white p-2 rounded-full hover:bg-[#FFB400] dark:hover:bg-[#FFB400] hover:text-white"><FaLinkedin size={30}/></a>
                            <a href="https://api.whatsapp.com/send?phone=9952807662&text=Hai%HARISH%20!%20." target='_blank'
                                rel="noopener noreferrer" className="text-3xl dark:bg-[#2B2A2A] bg-[#EEEEEE] text-[#666666] dark:text-white p-2 rounded-full hover:bg-[#FFB400] dark:hover:bg-[#FFB400] hover:text-white"><FaWhatsapp size={30}/></a>
                        </div>
                    </div>
                    <ul class="mb-6 text-right p-0">
                        <li class="flex justify-end">
                            <div class="mr-4 mb-6">
                                <h3 class="leading-6 text-[#B3B3B3]">ADDRESS POINT
                                </h3>
                                <p class="font-semibold dark:text-white text-[#616262]">TamilNadu , Salem-636001</p>                              
                            </div>                          
                            <FaMap size={38} color='#FFB400'/>
                        </li>
                        <li class="flex justify-end">
                            <div class="mr-4 mb-6">
                                <h3 class="leading-6 text-[#B3B3B3]">MAIL ME
                                </h3>
                                <p class="font-semibold dark:text-white text-[#616262]">cecsharishv24@gmail.com</p>
                            </div>                        
                            <IoMdMailOpen size={38} color='#FFB400'/>                          
                        </li>
                        <li class="flex justify-end">
                            <div class="mr-4 mb-6">
                                <h3 class="leading-2 text-[#B3B3B3]">CALL ME</h3>
                                <p class="font-semibold dark:text-white text-[#616262]">+91 9952807662</p>
                            </div>          
                            <FaPhoneSquareAlt size={38} color='#FFB400'/>                
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="sm:flex sm:items-center sm:justify-between text-center sm:dark:bg-[#000000] sm:bg-[#d7d6d6] h-16 p-6 mt-6">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Harish. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0 ml-28">
              <a href="https://www.instagram.com/harish._.14/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                 <FaInstagram />
              </a>
              <a href="https://github.com/14harish" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                 <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/harish-v-29734821a/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <FaLinkedin />    
              </a>
              <a href="https://api.whatsapp.com/send?phone=9952807662&text=Hai%HARISH%20!%20." class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                 <FaWhatsapp />
              </a>
          </div>
          </div>
    </div>
  )
}

export default transition(Contact)