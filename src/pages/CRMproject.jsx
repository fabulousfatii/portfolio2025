import { Database } from 'lucide-react'
import React from 'react'


const CRMproject = () => {

    const features= [
        "Employees display",
        "Attendance",
        "tasks management",
        "Notifications",
        "Leaves mangement",
        " user Authentication",
        "Employee Panel",
        "Employee details"
    ]

    const tools= [
        "Mongodb",
        "reactjs",
        "express",
        "nodejs"
    ]
  return (
 <div>
            
            <div className=' h-screen overflow-x-hidden relative flex flex-col p-20 justify-start items-center'> 
    
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-96 lg:h-96 rounded-full absolute -top-0 right-2/3 circle1 blur-[130px]'></div>      
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-[500px] lg:h-96 rounded-lg absolute top-0 right-0 circle2 blur-[130px]'></div>  

<div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-sky-400/10 mt-32 rounded-full flex items-center justify-center border border-sky-500/30">
                      <Database className="w-6 h-6 text-sky-400" />
                    </div>

<h1 className='z-20 header mt-3 text-2xl md:text-5xl text-center font-bold text-shadow-lg text-shadow-gray-00'>CRM-employee <br /> website</h1>

     {/* link */}
 <div className=' mt-5'>
  <h2 className='text-center'>github:  </h2>
  <a className='ml-2 rounded-full text-cyan-200 bg-white/10  backdrop-blur-lg border border-white/20 drop-shadow-sky-700 ring ring-cyan-800 shadow-cyan-600 hover:text-cyan-600'
     href="https://github.com/fabulousfatii/CRM-employee"> https://github.com/fabulousfatii/CRM-employee</a>

 </div>

  <p className='z-20 text-md mt-5 md:text-lg p-10 text-center  text-shadow-lg text-shadow-gray-00'>
    A MERN stack CRM project that focuses on employee management. Allowing both admin and managers to manage their employees efficiently.
     Employee panel for employees to keep updated all the time with their progress.</p>
    
  <h1 className='z-20  mt-10 text-2xl md:text-5xl text-center font-bold '>Features</h1>

    <div className=' flex gap-6 mt-10 flex-wrap px-32'>
        {features.map((feature,index)=>{
          return(
            <span key={index} className=' md:w-40 mt-2 text-center  rounded-full  backdrop-blur-lg border border-white/20 drop-shadow-sky-700 ring ring-cyan-600 shadow-cyan-600 hover:text-cyan-600 '>{feature}</span>
          )

    })}
    </div>


  <h1 className='z-20  mt-15 text-2xl md:text-5xl text-center font-bold '>Tools</h1>

    <div className=' flex gap-6 mt-10 flex-wrap px-32'>
        {tools.map((tool,index)=>{
          return(
            <span key={index} className=' md:w-40 mt-2 text-center  rounded-full  backdrop-blur-lg border border-white/20 drop-shadow-sky-700 ring ring-cyan-600 shadow-cyan-600 hover:text-cyan-600 '>{tool}</span>
          )

    })}
    </div>

    <div className='w-full mt-15 flex flex-wrap gap-4  '>
          <img className='w-xl' src="/assets/crm1.png" alt="" />
          <img className='w-xl' src="/assets/crm2.png" alt="" />
          <img className='w-xl' src="/assets/crm3.png" alt="" />
          <img className='w-xl' src="/assets/crm4.png" alt="" />
    </div>
    </div>
        </div>  )
}

export default CRMproject