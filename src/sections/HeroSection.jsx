import { gsap } from "gsap";
import React, { useRef, useEffect } from 'react'

function HeroSection() {

 const textRef = useRef(null);
 const text2Ref = useRef(null);
 const text3Ref = useRef(null);
  const buttonRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({delay:0.2});

    tl.fromTo(
  textRef.current,
  {
    opacity:0,
    transformOrigin: "50% 50%",
  },
  {
    opacity: 1,
    duration: 1.5,
    ease: "ease.in",
  }
)

.fromTo([ text2Ref.current,text3Ref.current],
        {
          //  y: -100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          // delay:0.8,
          duration: 1,
          ease: 'ease.in'
        }
      )
      .fromTo(navRef.current.children,  {
          //  y: -100,
          opacity: 0
        },
        {
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
          stagger:0.2,
        })

  }, []);

    return (
        <div>
            
            <div id="section1" className=' h-screen overflow-x-hidden relative flex flex-col p-4 justify-center items-center'> 
                <div className="absolute opacity-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-[190px] lg:h-96 2xl:w-[900px] 2xl:h-[900px] 2xl:-top-10 rounded-full absolute -top-32 right-2/3  bg-blue-900 blur-[130px] 2xl:blur-[270px]'></div>
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-[500px] lg:h-96 2xl:w-[900px] 2xl:h-[700px] 2xl:-top-5 rounded-lg absolute -top-18 right-0 bg-blue-900 blur-[130px] 2xl:blur-[270px]'></div>
 <h1 ref={text2Ref} className='z-20 text-2xl md:text-3xl 2xl:text-5xl text-center text-gray-300 font-semibold text-shadow-lg text-shadow-gray-00 '> <span className='text-blue-300 font-sans'> I am </span>,Fatima Saleem</h1>
 <div ref={textRef}><h1  className='z-20   text-4xl md:text-7xl 2xl:text-8xl text-blue-500 md:text-white text-center text-shadow-xs md:text-shadow-gray-100 font-bold '>Full Stack Developer</h1></div>
  <h1 ref={text3Ref} className='z-20 text-sm md:text-md 2xl:text-md mt-3 2xl:mt-10 text-gray-300  text-center  text-shadow-lg leading-5 text-shadow-gray-00'>
    Building modern web apps with clean UI, solid architecture,<br /> and real-world performance in mind.</h1>
  <div ref={navRef} className="flex gap-5 mt-1 ">
  <a  href='#section2' className=' hidden md:block text-center mt-4 2xl:mt-3 p-1 px-3  bg-gradient-to-r from-blue-900/20 to-blue-950/20  rounded-full backdrop-blur-lg
   border border-white/20 drop-shadow-sky-700 text-gray-300 transition-all
   shadow-blue-800 shadow-sm cursor-pointer hover:scale-105 hover:text-blue-300 '>explore more🔎</a >
  <a  className=' hidden md:block text-center mt-4 2xl:mt-3 p-1 px-3  bg-gradient-to-r from-blue-900/20 to-blue-950/20  rounded-full backdrop-blur-lg
   border border-white/20 drop-shadow-sky-700 text-gray-300 transition-all
   shadow-blue-800 shadow-sm cursor-pointer hover:scale-105 hover:text-blue-300 '>open for internship roles💻</a >
  <a  className='  md:block text-center mt-4 2xl:mt-3 p-1 px-3  bg-gradient-to-r from-blue-900/20 to-blue-950/20  rounded-full backdrop-blur-lg
   border border-white/20 drop-shadow-sky-700 text-gray-300 
   shadow-blue-800 shadow-sm cursor-pointer hover:scale-105 transition-all hover:text-blue-300 '>lets build together✨</a >

   </div>
    </div>
        </div>
    )
}

export default HeroSection
