import React from 'react'

function HeroSection() {
    return (
        <div>
            
            <div className=' h-screen overflow-x-hidden relative flex flex-col p-4 justify-center items-center'> 
                <div class="absolute opacity-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-96 lg:h-96 2xl:w-[900px] 2xl:h-[900px] 2xl:-top-10 rounded-full absolute -top-0 right-2/3 circle1 blur-[130px] 2xl:blur-[270px]'></div>
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-[500px] lg:h-96 2xl:w-[900px] 2xl:h-[700px] 2xl:-top-5 rounded-lg absolute top-0 right-0 circle2 blur-[130px] 2xl:blur-[270px]'></div>
 <h1 className='z-20 text-2xl md:text-3xl 2xl:text-5xl text-center  font-semibold text-shadow-lg text-shadow-gray-00'>Fatima Saleem</h1>
 <h1 className='z-20 header text-4xl md:text-7xl 2xl:text-8xl  text-center font-bold text-shadow-lg text-shadow-gray-00'>Full Stack Developer</h1>
  <h1 className='z-20 text-lg md:text-xl 2xl:text-2xl mt-2 2xl:mt-3  text-center font-mono text-shadow-lg text-shadow-gray-00'>creating websites that stands out!</h1>
  <button className=' hidden md:block md:w-40 2xl:w-48 mt-2 2xl:mt-3  bg-white/5  backdrop-blur-lg border border-white/20 drop-shadow-sky-700 ring ring-cyan-800 shadow-cyan-600 hover:text-cyan-600 '>explore more</button>

    </div>
        </div>
    )
}

export default HeroSection
