

const Aboutme2 = () => {
  return (
    <div id="section2" className='  relative pb-32 ' >
        <div className='sticky lg:pl-32 xl:pl-64 2xl:pl-[22%] hidden lg:block top-64 mt-14  left-54'>
            <h1 className='text-6xl 2xl:text-7xl text-blue-800 font-bold'>Get to know </h1>
            <h1 className='text-6xl 2xl:text-7xl text-gray-200 font-bold' >about me </h1>
            {/* <MoveRightIcon/> */}
        </div>
  
<div className='sticky hidden md:block  bg-blue-800 w-32 h-32 2xl:w-52 2xl:h-52   ml-[40%] left-64 top-1/2 rounded-full blur-[100px]'></div>



            {/* paragraph */}
        <div className=' h-full relative  flex flex-col justify-center lg:justify-start gap-5 items-end p-15 lg:pr-48 2xl:pr-[26%]'>
                  <div className='absolute bg-blue-800 top-0 left-0 w-40 h-40 rounded-full blur-[90px]'></div>

                  

            
  <div className=" rounded-2xl md:pl-32  xl:p-0   lg:w-1/2 xl:w-1/3 group hover:border-gray-600/50 transition-all duration-500">
            
            <div className=" z-10">

              <p className='text-sm md:text-lg 2xl:text-2xl text-center font-semibold'>
                I strive to create innovative solutions that combine aesthetics with functionality. My <span className='text-blue-500'>passion</span> for 
                coding and problem-solving drives me to continuously improve and stay up-to-date with the latest trends in web development.
                 I believe in the <span className='text-blue-500'>power of collaboration</span> and 
                I am always eager to work with like-minded individuals to create exceptional digital experiences.
              </p>

            </div>
          </div>

        </div>
       

           {/* educationa and experience */}
        <div className=' h-full  mt-15 flex flex-col md:flex-row lg:flex-col justify-center xl:justify-end  items-center lg:justify-start gap-5 lg:items-end py-15  lg:pr-48 2xl:pr-[26%]'>



           {/* experience section */}
            <div className='md:w-1/3 sm:w-1/2'>
              <div className='mb-5  pl-5'>
            <h1 className='text-2xl 2xl:text-3xl text-center font-bold'> Experience</h1>
            </div>

  <div className="bg-gray-900/20 rounded-2xl  border border-gray-700/50 backdrop-blur-xl p-6 relative group hover:border-gray-600/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 ">

              <h3 className=" text-blue-600 font-bold 2xl:text-2xl"> Mern stack internship</h3>
              <h3 className=" text-gray-300 2xl:text-xl ">NerdxSolution ,remote </h3>
              <h3 className=" text-gray-300 font-semibold mb-6 2xl:text-xl"> 3 months</h3>

            </div>
          </div>
            </div>




          {/* Education section */}
          <div className='md:w-1/3 sm:w-1/2 mx-10  md:m-0'>
            <div className='mb-5 pl-5'>
            <h1 className='text-2xl 2xl:text-3xl text-center font-bold'>Education</h1>
            </div>
  <div className="bg-gray-900/20  rounded-2xl border border-gray-700/50 backdrop-blur-xl p-6 relative group hover:border-gray-600/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              
              <h3 className="text-blue-600 text-wrap  font-bold 2xl:text-2xl">Bachelor of Science in Computer Science  </h3>
              <h3 className=" text-gray-300 mb-6 2xl:text-xl">  Virtual University of Pakistan <br/> lahore, Pakistan</h3>

             
            </div>
          </div>
        </div>
        </div>

        
        {/* services */}
        <div className=' h-full  flex flex-col md:flex-row lg:flex-col justify-center xl:justify-end  items-center lg:justify-start gap-5 lg:items-end py-15  lg:pr-48 2xl:pr-[26%]'>
            <div className='md:w-1/3 sm:w-1/2 pl-5'>
            <h1 className='text-2xl 2xl:text-3xl text-center font-bold'>Services</h1>

            </div>
<div className="bg-gray-900/20 md:w-1/3 mx-7 md:mx-0 sm:w-1/2 rounded-2xl border  border-gray-700/70 backdrop-blur-xl p-6 relative group hover:border-gray-600/50 transition-all duration-500">
            
            <div className="relative z-10"> 
              
             <ul className=" text-gray-300 text-md md:text-lg 2xl:text-xl px-4  ">
            <li className="hover:text-white list-disc">Mern stack development</li>
            <li className="hover:text-white list-disc">Backend development</li>
            <li className="hover:text-white list-disc">Frontend development</li>
            <li className="hover:text-white list-disc">Full stack development</li>
            <li className="hover:text-white list-disc">React JS development</li>
          </ul>
              
              
            </div>
          </div>
        </div>

      
    </div>
  )
}

export default Aboutme2