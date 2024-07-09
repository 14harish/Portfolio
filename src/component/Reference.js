import React from 'react'

function Reference() {
  return (
    <div>
            <button class="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                Button
            </button>

            <button class="cursor-pointer transition-all 
bg-gray-700 text-white px-6 py-2 rounded-lg
border-green-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
                Button
            </button>
            <div>
                <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
                    <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
                    <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
                    <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
                    <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
                    <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
                    <p class="z-10">Discover More</p>
                </button>
            </div>
            <div>
                <button
                    class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
                >
                    Hover me!
                    <span
                        class="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
                    ></span>
                    <span
                        class="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
                    ></span>
                    <span
                        class="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
                    ></span>
                    <span
                        class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                    >Explore!</span
                    >
                </button>
            </div>
            <div><button
                class="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
            >
                <div
                    class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                >
                    <svg fill="white" viewBox="0 0 512 512" class="w-4 h-4">
                        <path
                            d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                        ></path>
                    </svg>
                </div>
                <div
                    class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                    Logout
                </div>
            </button>
            </div>
            <div>
                <button
                    class="rounded-lg relative w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
                >
                    <span
                        class="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300"
                    >Add Item</span
                    >
                    <span
                        class="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
                    >
                        <svg
                            class="svg w-8 text-white"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="12" x2="12" y1="5" y2="19"></line>
                            <line x1="5" x2="19" y1="12" y2="12"></line>
                        </svg>
                    </span>
                </button>
            </div>
            <div><div class="flex flex-wrap justify-center items-center w-11/12 mx-auto select-none gap-2 max-w-[500px]">
                <label class="text-slate-400">
                    <input type="checkbox" class="h-[1px] opacity-0 overflow-hidden absolute whitespace-nowrap w-[1px] peer" />
                    <span class="peer-checked:border-blue-500 peer-checked:shadow-blue-500/10 peer-checked:text-blue-500 peer-checked:before:border-blue-500 peer-checked:before:bg-blue-500 peer-checked:before:opacity-100 peer-checked:before:scale-100 peer-checked:before:content-['✓'] flex flex-col items-center justify-center w-28 min-h-[7rem] rounded-lg shadow-lg transition-all duration-200 cursor-pointer relative border-slate-300 border-[3px] bg-white before:absolute before:block before:w-5 before:h-5 before:border-[3px]  before:rounded-full before:top-1 before:left-1 before:opacity-0 before:transition-transform before:scale-0 before:text-white before:text-xs before:flex before:items-center before:justify-center hover:border-blue-500 hover:before:scale-100 hover:before:opacity-100">
                        <span class="transition-all duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="currentColor" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none"></rect>
                                <circle cx="162" cy="128" r="34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></circle>
                                <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path>
                                <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path>
                                <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path>
                                <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path>
                            </svg>
                        </span>
                        <span class="transition-all duration-300 text-center">Figma</span>
                    </span>
                </label>

            </div>
                <div>
                    <div class="flex min-h-screen relative items-center justify-center w-full">
                        <div class="absolute top-8">hover over the card😁</div>
                        <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
                            <div class="text-gray-500 group-hover:scale-105 transition-all">
                                <svg class="w-16 h-16" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linejoin="round" stroke-linecap="round"></path>
                                </svg>
                            </div>
                            <div class="group-hover:pb-10 transition-all duration-500 delay-200">
                                <h1 class="font-semibold text-gray-700">Tamani Phiri</h1>
                                <p class="text-gray-500 text-sm">@senior_developer</p>
                            </div>
                            <div class="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full">
                                <div class="flex gap-3 text-2xl bg-gray-700 text-white p-1 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm">
                                    <a class="hover:scale-110 transition-all duration-500 delay-200">
                                        <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
                                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                                        </svg>
                                    </a>
                                    <a class="hover:scale-110 transition-all duration-500 delay-200">
                                        <svg width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <path d="M22 6l-10 7L2 6"></path>
                                        </svg>
                                    </a>
                                    <a class="hover:scale-110 transition-all duration-500 delay-200">
                                        <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 960 1000">
                                            <path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20M362 698V386h-96v312h96m-48-352c34.667 0 52-16 52-48s-17.333-48-52-48c-14.667 0-27 4.667-37 14s-15 20.667-15 34c0 32 17.333 48 52 48m404 352V514c0-44-10.333-77.667-31-101s-47.667-35-81-35c-44 0-76 16.667-96 50h-2l-6-42h-84c1.333 18.667 2 52 2 100v212h98V518c0-12 1.333-20 4-24 8-25.333 24.667-38 50-38 32 0 48 22.667 48 68v174h98"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-slate-800 border border-slate-700 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
                            <h1 class="text-center text-slate-600 text-xl font-bold col-span-6">Send Feedback</h1>
                            <textarea class="bg-slate-700 text-slate-300 h-28 placeholder:text-slate-300 placeholder:opacity-50 border border-slate-600 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-300" placeholder="Your feedback..."></textarea>
                            <button class="fill-slate-300 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-700 hover:border-slate-300 focus:fill-blue-200 focus:bg-blue-600 border border-slate-600">
                                <svg viewBox="0 0 512 512" height="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                                </svg>
                            </button>
                            <button class="fill-slate-300 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-700 hover:border-slate-300 focus:fill-blue-200 focus:bg-blue-600 border border-slate-600">
                                <svg viewBox="0 0 512 512" height="20px" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
                            </button>
                            <span class="col-span-2"></span>
                            <button class="col-span-2 stroke-slate-300 bg-slate-700 focus:stroke-blue-200 focus:bg-blue-600 border border-slate-600 hover:border-slate-300 rounded-lg p-2 duration-300 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                                    <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M10.11 13.6501L13.69 10.0601" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>

                        </div>
                        <div>
                            <section class="flex justify-center items-center">
                                <button
                                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                    href="/"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 15 15"
                                        class="w-5"
                                    >
                                        <path
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                            fill="currentColor"
                                            d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                                        ></path>
                                    </svg>
                                    <span
                                        class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                    >
                                        GitHub
                                    </span>
                                </button>
                            </section>

                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center h-[100vh]">
                    <div class="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800  dark:!shadow-none">
                        <div class="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                            <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' alt='pro' class="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
                            <div class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                                <img class="h-full w-full rounded-full" src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png' alt="" />
                            </div>
                        </div>
                        <div class="mt-16 flex flex-col items-center">
                            <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                                Adela Parkson
                            </h4>
                            <p class="text-base font-normal text-gray-600">Product Manager</p>
                        </div>
                        <div class="mt-6 mb-3 flex gap-14 md:!gap-14">
                            <div class="flex flex-col items-center justify-center">
                                <p class="text-2xl font-bold text-navy-700 ">17</p>
                                <p class="text-sm font-normal text-gray-600">Posts</p>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <p class="text-2xl font-bold text-navy-700 ">
                                    9.7K
                                </p>
                                <p class="text-sm font-normal text-gray-600">Followers</p>
                            </div>
                            <div class="flex flex-col items-center justify-center">
                                <p class="text-2xl font-bold text-navy-700 ">
                                    434
                                </p>
                                <p class="text-sm font-normal text-gray-600">Following</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex flex-col items-center justify-center min-h-screen bg-gray-900">

                    <div class="container  m-4">
                        <div class="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">

                            <div class="flex flex-col justify-center p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                                <div class=" text-gray-400 flex items-center ">
                                    <img class="w-6 mr-2" src="https://v1.tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3b72656960a6ae5ad8b85928d0.svg" alt="taiwind css" />

                                </div>
                            </div>

                            <div class="flex flex-col sticky top-0 z-10">
                                <div class="bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl p-4">
                                    <div class="flex-none sm:flex">
                                        <div class=" relative h-32 w-32   sm:mb-0 mb-3">
                                            <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" w-32 h-32 object-cover rounded-2xl" />
                                            <a href="#" class="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-4 w-4">
                                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                                    </path>
                                                </svg>
                                            </a>
                                        </div>
                                        <div class="flex-auto sm:ml-5 justify-evenly">
                                            <div class="flex items-center justify-between sm:mt-2">
                                                <div class="flex items-center">
                                                    <div class="flex flex-col">
                                                        <div class="w-full flex-none text-lg text-gray-200 font-bold leading-none">Aji</div>
                                                        <div class="flex-auto text-gray-400 my-1">
                                                            <span class="mr-3 ">UI/UX Designer</span><span class="mr-3 border-r border-gray-600  max-h-0"></span><span>Cochin, IND</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-row items-center">
                                                <div class="flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 text-yellow-400">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div class="flex-1 inline-flex   items-center ml-2 space-x-2">
                                                    <a hre="https://www.behance.net/ajeeshmon" target="_blank"><svg class=" cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 172 172">
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#ffffff">
                                                                <path d="M71.66667,82.41667c3.58333,0 14.33333,-5.79783 14.33333,-20.13117c0,-22.28475 -19.72983,-26.45217 -41.95367,-26.45217c-4.19967,0 -17.00292,0.00717 -26.12967,0.00358c-5.93758,-0.00358 -10.75,4.81242 -10.75,10.75v78.82975c0,5.93758 4.81242,10.75 10.75,10.75h42.28333c15.83475,0 29.25792,-12.52733 29.38333,-28.36208c0.16842,-21.77233 -17.91667,-25.38792 -17.91667,-25.38792zM28.66667,53.75h25.08333c5.93758,0 10.75,4.81242 10.75,10.75c0,5.93758 -4.81242,10.75 -10.75,10.75h-25.08333zM55.54167,118.25h-26.875v-25.08333h26.875c6.92658,0 12.54167,5.61508 12.54167,12.54167c0,6.92658 -5.61508,12.54167 -12.54167,12.54167zM163.0775,103.91667c2.97058,0 5.375,-2.40442 5.37858,-5.375v0c0,-20.77975 -14.37275,-37.625 -35.83333,-37.625c-19.79075,0 -35.83333,16.84525 -35.83333,37.625c0,20.77975 16.04258,37.625 35.83333,37.625c17.51175,0 27.2405,-8.1915 31.992,-20.22075c0.91733,-2.31842 -0.8815,-4.83033 -3.3755,-4.83033h-8.60358c-1.30792,0 -2.46533,0.74175 -3.14258,1.86333c-3.27517,5.41083 -8.27392,8.85442 -15.00342,8.85442c-10.07633,0 -17.415,-7.65042 -19.2855,-17.91667h38.4205zM132.62275,75.25c7.44258,0 14.65583,5.934 16.69117,14.33333h-33.22825c2.69825,-8.41725 9.08375,-14.33333 16.53708,-14.33333zM148.70833,53.75h-28.66667c-2.967,0 -5.375,-2.408 -5.375,-5.375v0c0,-2.967 2.408,-5.375 5.375,-5.375h28.66667c2.967,0 5.375,2.408 5.375,5.375v0c0,2.967 -2.408,5.375 -5.375,5.375z"></path>
                                                            </g>
                                                        </g>
                                                    </svg></a>

                                                    <a hre="https://www.linkedin.com/in/ajeeshmon" target="_blank"><svg class="cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 172 172" >
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" >
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#ffffff">
                                                                <path d="M51.6,143.33333h-28.66667v-86h28.66667zM37.2724,45.86667c-7.9292,0 -14.33907,-6.42707 -14.33907,-14.33907c0,-7.912 6.42133,-14.3276 14.33907,-14.3276c7.90053,0 14.3276,6.42707 14.3276,14.3276c0,7.912 -6.42707,14.33907 -14.3276,14.33907zM154.8,143.33333h-27.56013v-41.85333c0,-9.98173 -0.1892,-22.81867 -14.3276,-22.81867c-14.35053,0 -16.55787,10.8704 -16.55787,22.09627v42.57573h-27.5544v-86.06307h26.4536v11.75907h0.37267c3.6808,-6.76533 12.6764,-13.8976 26.0924,-13.8976c27.92133,0 33.08133,17.82493 33.08133,40.99907z"></path>
                                                            </g>
                                                        </g>
                                                    </svg></a>
                                                    <a hre="https://twitter.com/ajeemon?lang=en" target="_blank"><svg class="cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-400 hover:text-white transition ease-in duration-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" >
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" >
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#ffffff">
                                                                <path d="M155.04367,28.88883c-5.84083,2.75917 -15.781,7.9335 -20.77617,8.9225c-0.1935,0.05017 -0.35117,0.11467 -0.5375,0.16483c-5.8265,-5.74767 -13.81017,-9.3095 -22.64667,-9.3095c-17.80917,0 -32.25,14.44083 -32.25,32.25c0,0.93883 -0.07883,2.666 0,3.58333c-23.06233,0 -39.904,-12.03283 -52.51017,-27.4985c-1.68417,-2.07833 -3.47583,-0.99617 -3.8485,0.48017c-0.8385,3.33967 -1.12517,8.9225 -1.12517,12.90717c0,10.0405 7.8475,19.90183 20.06667,26.015c-2.25033,0.5805 -4.73,0.99617 -7.31,0.99617c-3.03867,0 -6.536,-0.7955 -9.59617,-2.40083c-1.13233,-0.59483 -3.57617,-0.43 -2.85233,2.46533c2.9025,11.60283 16.1465,19.75133 27.97867,22.1235c-2.6875,1.58383 -8.42083,1.26133 -11.05817,1.26133c-0.97467,0 -4.3645,-0.22933 -6.5575,-0.50167c-1.9995,-0.24367 -5.074,0.27233 -2.50117,4.171c5.5255,8.3635 18.02417,13.61667 28.78133,13.81733c-9.90433,7.76867 -26.101,10.60667 -41.61683,10.60667c-3.139,-0.07167 -2.98133,3.5045 -0.4515,4.83033c11.44517,6.00567 30.19317,9.56033 43.58767,9.56033c53.24833,0 83.51317,-40.58483 83.51317,-78.8405c0,-0.61633 -0.01433,-1.90633 -0.03583,-3.2035c0,-0.129 0.03583,-0.25083 0.03583,-0.37983c0,-0.1935 -0.05733,-0.37983 -0.05733,-0.57333c-0.0215,-0.97467 -0.043,-1.88483 -0.0645,-2.35783c4.22117,-3.04583 10.6855,-8.33483 13.9535,-12.384c1.11083,-1.376 0.215,-3.04583 -1.29717,-2.52267c-3.8915,1.3545 -10.621,3.9775 -14.835,4.47917c8.43517,-5.58283 12.60617,-10.44183 16.1895,-15.83833c1.2255,-1.84183 -0.30817,-3.71233 -2.17867,-2.82367z"></path>
                                                            </g>
                                                        </g>
                                                    </svg></a>
                                                </div>
                                            </div>
                                            <div class="flex pt-2  text-sm text-gray-400">
                                                <div class="flex-1 inline-flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
                                                        </path>
                                                    </svg>
                                                    <p class="">1.2k Followers</p>
                                                </div>
                                                <div class="flex-1 inline-flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <p class="">14 Components</p>
                                                </div>
                                                <a href="https://www.behance.net/ajeeshmon" class="flex-no-shrink bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">FOLLOW</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-12 gap-4 ">
                                <div class="col-span-12 sm:col-span-4">
                                    <div class="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14  absolute bottom-4 right-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                        </svg>
                                        <div class="flex justify-between items-center ">
                                            <img class="w-7 filter grayscale" src="https://v1.tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3b72656960a6ae5ad8b85928d0.svg" alt="taiwind css" />
                                        </div>
                                        <div class="text-2xl text-gray-100 font-medium leading-8 mt-5">20</div>
                                        <div class="text-sm text-gray-500">Components</div>
                                    </div>
                                </div>
                                <div class="col-span-12 sm:col-span-4">
                                    <div class="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14  absolute bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                        </svg>
                                        <div class="flex justify-between items-center ">
                                            <i class="fab fa-behance text-xl text-gray-400"></i>
                                        </div>
                                        <div class="text-2xl text-gray-100 font-medium leading-8 mt-5">99</div>
                                        <div class="text-sm text-gray-500">Projects</div>
                                    </div>
                                </div>
                                <div class="col-span-12 sm:col-span-4">
                                    <div class="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14  absolute bottom-4 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                        <div class="flex justify-between items-center ">
                                            <i class="fab fa-codepen text-xl text-gray-400"></i>
                                        </div>
                                        <div class="text-2xl text-gray-100 font-medium leading-8 mt-5">50</div>
                                        <div class="text-sm text-gray-500">Pen Items</div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid gap-4 grid-cols-1 md:grid-cols-2">


                                <div class="flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                                    <div class="">
                                        <div class="text-center p-5 flex-auto justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-gray-600 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                            </svg>
                                            <h2 class="text-xl font-bold py-4 text-gray-200">Are you sure?</h2>
                                            <p class="text-sm text-gray-500 px-8">Do you really want to delete your account?
                                                This process cannot be undone</p>
                                        </div>
                                        <div class="p-3  mt-2 text-center space-x-4 md:block">
                                            <button class="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
                                                Cancel
                                            </button>
                                            <button class="bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">Confirm</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col space-y-4">



                                    <div class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center mr-auto">
                                                <div class="inline-flex w-12 h-12"><img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" relative p-1 w-12 h-12 object-cover rounded-2xl" /><span class="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                                                    <span></span>
                                                </div>

                                                <div class="flex flex-col ml-3 min-w-0">
                                                    <div class="font-medium leading-none text-gray-100">Ajimon</div>
                                                    <p class="text-sm text-gray-500 leading-none mt-1 truncate">Jul 066, 2021, 8.25 PM</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col ml-3 min-w-0">
                                                <div class="flex">
                                                    <h5 class="flex items-center font-medium text-gray-300 mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg> 1800
                                                    </h5>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center mr-auto">
                                                <div class="inline-flex w-12 h-12"><img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" relative p-1 w-12 h-12 object-cover rounded-2xl" /><span class="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                                                    <span></span>
                                                </div>

                                                <div class="flex flex-col ml-3 min-w-0">
                                                    <div class="font-medium leading-none text-gray-100">Ajimon</div>
                                                    <p class="text-sm text-gray-500 leading-none mt-1 truncate">Jul 066, 2021, 8.25 PM</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col ml-3 min-w-0">
                                                <div class="flex">
                                                    <h5 class="flex items-center font-medium text-gray-300 mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg> 1800
                                                    </h5>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center mr-auto">
                                                <div class="inline-flex w-12 h-12"><img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" relative p-1 w-12 h-12 object-cover rounded-2xl" /><span class="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                                                    <span></span>
                                                </div>

                                                <div class="flex flex-col ml-3 min-w-0">
                                                    <div class="font-medium leading-none text-gray-100">Ajimon</div>
                                                    <p class="text-sm text-gray-500 leading-none mt-1 truncate">Jul 066, 2021, 8.25 PM</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col ml-3 min-w-0">
                                                <div class="flex">
                                                    <h5 class="flex items-center font-medium text-gray-300 mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg> 1800
                                                    </h5>
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col p-4 bg-gray-800 border border-gray-800 shadow-md hover:text-green-500 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center mr-auto">
                                                <div class="-space-x-5 flex ">
                                                    <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800" />
                                                    <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800 shadow" />
                                                </div>

                                                <div class="flex flex-col ml-3 min-w-0">
                                                    <div class="font-medium leading-none text-gray-100">Pending Request </div>
                                                    <p class="text-sm text-gray-500 leading-none mt-1 truncate">Jul 066, 2021, 8.25 PM</p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col ml-3 min-w-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-center p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <div class="flex flex-col">
                                                <div class="font-medium leading-none text-gray-100">Delete Your Acccount?</div>
                                                <p class="text-sm text-gray-500 leading-none mt-1">By deleting your account.</p>
                                            </div>
                                        </div>
                                        <a class="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                        </svg></a>
                                    </div>
                                </div>
                                <div class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                                    <div class="flex">
                                        <img src="https://images.unsplash.com/photo-1575390730294-dfc5efa5250b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80" alt="Just a flower" class=" w-16  object-fit  h-16 rounded-2xl" />
                                        <div class="flex flex-col justify-center w-full px-2 py-1">
                                            <div class="flex justify-between items-center ">
                                                <div class="flex flex-col">
                                                    <h2 class="font-medium leading-none text-gray-100">Massive Dynamic</h2>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                                </svg>
                                            </div>
                                            <div class="flex pt-2  text-sm text-gray-500">
                                                <div class="flex items-center mr-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                    <p class="font-normal">4.5</p>
                                                </div>
                                                <div class="flex items-center font-medium text-gray-300 ">
                                                    $1800
                                                    <span class="text-gray-600 text-sm font-normal"> /wk</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <div class="lg:w-3/5 p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                                    <div class="flex-none lg:flex">
                                        <div class=" h-full w-full lg:h-36 lg:w-36   lg:mb-0 mb-3">
                                            <img src="https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="unsplash " class=" w-full  object-scale-down lg:object-cover  lg:h-36 rounded-2xl" />
                                        </div>
                                        <div class="flex-auto lg:ml-3 justify-evenly py-2">
                                            <div class="flex flex-col ">
                                                <div class="flex items-center mr-auto text-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                        </path>
                                                    </svg>
                                                    <p class="font-normal text-gray-500">4.5</p>
                                                </div>
                                                <div class="flex items-center  justify-between min-w-0">
                                                    <h2 class="mr-auto   text-base text-gray-100 font-medium truncate">Massive Dynamic</h2>
                                                    <div class="flex items-center font-medium text-gray-300 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                        800
                                                        <span class="text-gray-500 text-sm font-normal"> /Day</span>
                                                    </div>
                                                </div>
                                                <p class="flex items-center text-sm text-gray-400">Fortcochi,Cochin . 7km <span class="relative inline-flex rounded-md shadow-sm ml-2">
                                                    <span class="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                                                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                        <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                    </span>
                                                </span>

                                                </p>
                                            </div>
                                            <div class="flex my-3 border-t border-gray-800 "></div>
                                            <div class="flex space-x-3 text-sm font-medium">
                                                <div class="flex-auto items-center flex space-x-3 text-xs text-gray-500">
                                                    <span>2 Bedroom</span><span>4 Guest</span>

                                                </div>
                                                <button class="mb-2 md:mb-0 flex-no-shrink bg-green-400 hover:bg-green-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300" type="button" aria-label="like">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:w-2/5 ..."></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div class="mt-4 -mb-3"><div class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25"><div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div><div class="relative rounded-xl overflow-auto p-8"><div class="overflow-hidden relative max-w-sm mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                <img class="absolute -left-6 w-24 h-24 rounded-full shadow-lg" alt='profile' src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80" />
                <div class="flex flex-col py-5 pl-24">
                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Andrew Alfred</strong>
                    <span class="text-slate-500 text-sm font-medium dark:text-slate-400">Technical advisor</span>
                </div>
            </div></div><div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div></div></div>

            <div className='mt-6 w-full' >
                <div class="bg-gray-900 min-h-screen flex items-center justify-center">
                    <div class="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">

                        <div class="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
                            <nav class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
                                <a class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                </a>
                                {/* <!-- Active: bg-gray-800 text-white, Not active: text-white/50 --> */}
                                <a class="bg-gray-800 text-white p-4 inline-flex justify-center rounded-md" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                </a>
                                <a class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </nav>
                            <div class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
                                <a class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <a class="text-white/50 p-4 inline-flex justify-center rounded-md hover:bg-gray-800 hover:text-white smooth-hover" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="flex-1 px-2 sm:px-0">
                            <div class="flex justify-between items-center">
                                <h3 class="text-3xl font-extralight text-white/50">Groups</h3>
                                <div class="inline-flex items-center space-x-2">
                                    <a class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                    </a>
                                    <a class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div class="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
                                    <a class="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center" href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </a>
                                    <a class="text-white/50 group-hover:text-white group-hover:smooth-hover text-center" href="/">Create group</a>
                                </div>
                                <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                                    <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="cuisine" />
                                    <h4 class="text-white text-2xl font-bold capitalize text-center">Cuisine</h4>
                                    <p class="text-white/50">55 members</p>
                                    <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">22 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                                </div>
                                <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                                    <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="art" />
                                    <h4 class="text-white text-2xl font-bold capitalize text-center">Art</h4>
                                    <p class="text-white/50">132 members</p>
                                    <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">4 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                                </div>
                                <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                                    <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="gaming" />
                                    <h4 class="text-white text-2xl font-bold capitalize text-center">Gaming</h4>
                                    <p class="text-white/50">207 members</p>
                                    <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">0 Online <span class="ml-2 w-2 h-2 block bg-red-400 rounded-full group-hover:animate-pulse"></span></p>
                                </div>
                                <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                                    <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80" alt="cinema" />
                                    <h4 class="text-white text-2xl font-bold capitalize text-center">cinema</h4>
                                    <p class="text-white/50">105 members</p>
                                    <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">12 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                                </div>
                                <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                                    <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="song" />
                                    <h4 class="text-white text-2xl font-bold capitalize text-center">Song</h4>
                                    <p class="text-white/50">67 members</p>
                                    <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">3 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                                </div>
                                <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                                    <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="code" />
                                    <h4 class="text-white text-2xl font-bold capitalize text-center">Code</h4>
                                    <p class="text-white/50">83 members</p>
                                    <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">43 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                                </div>
                                <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                                    <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="dancing" />
                                    <h4 class="text-white text-2xl font-bold capitalize text-center">Dancing</h4>
                                    <p class="text-white/50">108 members</p>
                                    <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">86 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
                    <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                    <form>
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="username">Username</label>
                                <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                                <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                                <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                                <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                            </div>
                        </div>

                        <div class="flex justify-end mt-6">
                            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                        </div>
                    </form>
                </section>

            </div>

            <div class="relative rounded-xl overflow-auto mt-5"><div class="px-3">
                <div class="relative max-w-md mx-auto bg-white dark:bg-slate-800 shadow-lg h-80 overflow-auto ring-1 ring-slate-900/5 -my-px">
                    <div class="relative">
                        <div class="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">A</div>
                        <div class="divide-y dark:divide-slate-200/5">
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Andrew Alfred</strong>
                            </div>
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Aisha Houston</strong>
                            </div>
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Anna White</strong>
                            </div>
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Andy Flint</strong>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">B</div>
                        <div class="divide-y dark:divide-slate-200/5">
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Bob Alfred</strong>
                            </div>
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Bianca Houston</strong>
                            </div>
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Brianna White</strong>
                            </div>
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Bert Flint</strong>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">C</div>
                        <div class="divide-y dark:divide-slate-200/5">
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Colton Alfred</strong>
                            </div>
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Cynthia Houston</strong>
                            </div>
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Cheyenne White</strong>
                            </div>
                            <div class="flex items-center gap-4 p-4">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
                                    <strong class="text-slate-900 text-sm font-medium dark:text-slate-200">Charlie Flint</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>

        </div>
  )
}

export default Reference