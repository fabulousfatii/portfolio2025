import React from 'react'

function Aboutme() {
    return (
          <div className='h-screen  relative flex p-4 justify-center items-center'>
      <div className=' min-h-[80vh] mt-15 relative p-10 px-15 rounded-3xl bg-gray-900/30 backdrop-filter backdrop-blur-md bg-opacity-40 0 shadow-cyan-600 '>
              {/* <div className='w-[80vw] h-[80vh] absolute -z-10  bg-[url(assets/download.jpg)] bg-cover blur-sm overflow-x-hidden overflow-hidden rounded-3xl'></div> */}
 {/* About Me Heading */}
      <h1 className="text-4xl   font-bold mb-4">About me</h1>

      {/* Description */}
      <p className="italic text-gray-300 max-w-3xl mb-12">
        
                  strive to create innovative solutions that combine aesthetics with functionality. My passion for coding and
                  problem-solving drives me to continuously improve and stay up-to-date with the latest trends in web development. 
                  I believe in the power of collaboration and I
                  am always eager to work with like-minded individuals to create exceptional digital experiences.
      </p>

      {/* Sections Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="bg-cyan-900 text-white px-4 py-3 rounded-lg shadow-md">
            <p className="font-semibold">BSCS</p>
            <p className="text-sm">Virtual University of Pakistan</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white">Mern stack development</li>
            <li className="hover:text-white">Backend developer</li>
            <li className="hover:text-white">Frontend developer</li>
            <li className="hover:text-white">Full stack developer</li>
            <li className="hover:text-white">React JS developer</li>
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white">Mern stack development</li>
            <li className="hover:text-white">Backend developer</li>
            <li className="hover:text-white">Frontend developer</li>
          </ul>
        </div>
      </div>

      {/* Additional Experience Block */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="bg-cyan-900 text-white px-4 py-3 rounded-lg shadow-md">
          <p className="font-semibold">Mern stack internship</p>
          <p className="text-sm">Nextsolution</p>
        </div>
      </div>
    
      </div>
        
      
    </div>
    )
}

export default Aboutme
