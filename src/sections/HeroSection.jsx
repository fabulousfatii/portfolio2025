import React from 'react'

function HeroSection() {
    return (
        <div>
            
            <div id="section1" className=' h-screen overflow-x-hidden relative flex flex-col p-4 justify-center items-center'> 
                <div class="absolute opacity-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    
{/* <div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-96 lg:h-96 2xl:w-[900px] 2xl:h-[900px] 2xl:-top-10 rounded-full absolute -top-0 right-2/3 circle1 blur-[130px] 2xl:blur-[270px]'></div> */}
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-[190px] lg:h-96 2xl:w-[900px] 2xl:h-[900px] 2xl:-top-10 rounded-full absolute -top-32 right-2/3  bg-blue-900 blur-[130px] 2xl:blur-[270px]'></div>
{/* <div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-[500px] lg:h-96 2xl:w-[900px] 2xl:h-[700px] 2xl:-top-5 rounded-lg absolute top-0 right-0 circle2 blur-[130px] 2xl:blur-[270px]'></div> */}
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-[500px] lg:h-96 2xl:w-[900px] 2xl:h-[700px] 2xl:-top-5 rounded-lg absolute -top-18 right-0 bg-blue-900 blur-[130px] 2xl:blur-[270px]'></div>
 <h1 className='z-20 text-2xl md:text-3xl 2xl:text-5xl text-center text-gray-300 font-semibold text-shadow-lg text-shadow-gray-00 '>Fatima Saleem</h1>
 <h1 className='z-20   text-4xl md:text-7xl 2xl:text-8xl text-blue-500 md:text-white text-center text-shadow-xs md:text-shadow-gray-100 font-bold '>Full Stack Developer</h1>
  <h1 className='z-20 text-lg md:text-xl 2xl:text-2xl mt-2 2xl:mt-3 text-gray-300  text-center font-mono text-shadow-lg text-shadow-gray-00'>creating websites that stands out!</h1>
  <a href='#section2' className=' hidden md:block text-center md:w-40 2xl:w-48 mt-4 2xl:mt-3 p-1  bg-gradient-to-r from-blue-900/20 to-blue-950/20  rounded-full backdrop-blur-lg border border-white/20 drop-shadow-sky-700 text-gray-100 ring ring-blue-800 shadow-blue-600 shadow cursor-pointer hover:px-2 hover:text-gray-400 '>explore more</a >

    </div>
        </div>
    )
}

export default HeroSection
