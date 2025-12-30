import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "gsap/";
import  { useEffect, useRef } from 'react'

export default function ServicesSection() {
gsap.registerPlugin(ScrollTrigger);

const serviceRef = useRef(null);

 useEffect(() => {
  gsap.to(serviceRef.current,
    {
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: "none",
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none pause",
      }
 })

 },[])


  
  const services = [
    "frontend development",
    "backend development",
    "frontend development",
    "frontend development"
  ];

  const advantages = [
    "Having professional workers with more than 10 years of experience in the IT field.",
    "Services are tailored to the needs of each client.",
    "The security system we use has a high level of security to protect client data."
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br overflow-hidden  text-white p-8 md:p-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
        {/* Left Section */}
        <div className="space-y-8 md:mt-56 px-10 pl-24 ">
          <div>
            <h2 className="text-2xl md:text-3xl  mb-6">
              Technology<br />
              Services<br />
              Professional<br />
              IT Services
            </h2>
            <p className="text-gray-400 text-md font-light leading-none max-w-md pr-24">
              Technology solutions for smarter and more  efficient businesses!
            </p>
            <div className="w-48 h-1 bg-gray-600 mt-6"></div>
          </div>
        </div>

        {/* center Section */}
        <div className="space-y-8 py-7 relative">
          <div ref={serviceRef} className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-80 lg:h-80 rounded-full absolute  top-1/4 bg-gradient-to-r  from-blue-800/70 to-blue-800/50 rotate-90 blur-[50px]'></div>     

          <div  className="flex flex-col justify-center items-center z-10">
            <h3 className="text-4xl font-bold text-center mb-8">Services</h3>
            <div className="space-y-4 flex flex-col justify-center mr-5 items-center">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="w-72 bg-gray-950 hover:from-blue-800/60 hover:to-cyan-800/60 backdrop-blur-sm border border-blue-500/30 rounded-full text-center p-2 font-light  text-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          
        </div>

         {/* right section */}
        <div className="space-y-8 flex flex-col justify-center items-center">
            <h3 className="text-3xl font mb-6">
              Why You<br />
              Should<br />
              Choose Our<br />
              Services
            </h3>
            <p className="text-gray-400 mb-6 text-lg">Our advantages are:</p>
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className=" mx-18 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                >
                  <p className="text-gray-300 text-sm leading-none ">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
      </div>

          <div className='w-48 h-48 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-96 lg:h-96 rounded-full flex justify-center items-center absolute -z-10  top-0 -left-40 bg-gray-900 rotate-90 blur-[15px]'>
          <div className="w-60 h-60 lg:w-72 lg:h-72 bg-black rounded-full m-10 "></div>
          </div>   

          <div className='w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-96 lg:h-96 rounded-full flex justify-center items-center absolute -z-10  top-20 -right-40 bg-gray-900 rotate-90 blur-[15px]'>
          <div className="w-66 h-66 lg:w-72 lg:h-72 bg-black rounded-full m-10 "></div>
          </div>     
    </div>
  );
}