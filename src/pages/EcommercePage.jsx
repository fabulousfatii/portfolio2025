import { Database } from 'lucide-react'
import React from 'react'


const EcommercePage = () => {

    const features= [
        "user authentication",
        "admin panel",
        " add delete update product",
        "stripe integration",
        "checkout page ",
        "responsive design",
        "products cart",
        "search filters "
    ]

    const tools= [
        "Mongodb",
        "reactjs",
        "express",
        "nodejs",
        "stripe",
        "passport.js"
    ]
  return (
 <div>
            
            <div className=' h-screen overflow-x-hidden relative flex flex-col p-20 justify-start items-center'> 
    
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-[190px] lg:h-96 2xl:w-[900px] 2xl:h-[900px] 2xl:-top-10 rounded-full absolute -top-32 right-2/3  bg-blue-900 blur-[130px] 2xl:blur-[270px]'></div>
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-[500px] lg:h-96 2xl:w-[900px] 2xl:h-[700px] 2xl:-top-5 rounded-lg absolute -top-18 right-0 bg-blue-900 blur-[130px] 2xl:blur-[270px]'></div>

<div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-sky-400/10 mt-32 rounded-full flex items-center justify-center border border-sky-500/30">
                      <Database className="w-6 h-6 text-sky-400" />
                    </div>

 <h1 className='z-20 header mt-3 text-2xl md:text-5xl text-center font-bold text-shadow-lg text-shadow-gray-00'>E-commerce <br /> website</h1>

  {/* link */}
 <div className=' mt-5'>
  <h2 className='text-center'>github:  </h2>
  <a className='ml-2 rounded-full text-cyan-200 bg-white/10  backdrop-blur-lg border border-white/20 drop-shadow-sky-700 ring ring-cyan-800 shadow-cyan-600 hover:text-cyan-600'
     href="https://github.com/fabulousfatii/e-comerce-app"> https://github.com/fabulousfatii/CRM-employee</a>

 </div>
 
  <p className='z-20 text-md mt-15 md:text-lg  text-center  text-shadow-lg text-shadow-gray-00'>
    A MERN stack CRM project that focuses on employee management. Allowing both admin and managers to manage their employees efficiently.
     Employee panel for employees to keep updated all the time with their progress.</p>

{/* features */}
  <h1 className='z-20  mt-15 text-2xl md:text-5xl text-center font-bold '>Features</h1>

    <div className=' flex gap-6 mt-10 flex-wrap px-32'>
        {features.map((feature,index)=>{
          return(
            <span key={index} className=' md:w-40 mt-2 text-center  rounded-full  backdrop-blur-lg border border-white/20 drop-shadow-sky-700 ring ring-cyan-600 shadow-cyan-600 hover:text-cyan-600 '>{feature}</span>
          )

    })}
    </div>

  {/* tools */}
  <h1 className='z-20  mt-15 text-2xl md:text-5xl text-center font-bold '>Tools</h1>

    <div className='flex gap-2 md:gap-6 mt-10 flex-wrap md:px-32'>
        {tools.map((tool,index)=>{
          return(
            <span key={index} className=' md:w-40 mt-2 p-1 text-center  rounded-full  backdrop-blur-lg border border-white/20 drop-shadow-sky-700 ring ring-cyan-600 shadow-cyan-600 hover:text-cyan-600 '>{tool}</span>
          )

    })}
    </div>

    <div className='w-full mt-18 flex flex-wrap gap-4  '>
    </div>
          <img className='w-4xl mb-2' src="/assets/ecommerce1.png" alt="" srcset="" />
          <img className='w-4xl' src="/assets/ecommerce2.png" alt="" srcset="" />
    </div>
        </div>  )
}

export default EcommercePage