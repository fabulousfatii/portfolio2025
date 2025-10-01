import React from 'react'

function Skills() {
    return (
        <div>
            <div className=' h-full overflow-x-hidden relative flex flex-col p-4   items-center '>
                {/* Background Gradient */}
      <div className="absolute top-2 right-0 w-32 h-36 md:w-64 md:h-72 lg:w-72 lg:h-96 bg-blue-800 rounded-full blur-[200px]"></div>
      <div className="absolute top-12 md:bottom-32 left-0 w-32 h-36 md:w-32 md:h-16 lg:w-40 lg:h-20 bg-blue-800 rounded-full blur-[70px] md:blur-[100px]"></div>



                <h1 className="text-3xl md:text-5xl font-bold mt-20 md:mt-30 mb-10 md:mb-20 header"> Skills</h1>

                <div className='flex flex-wrap md:no-wrap  gap-4 md:gap-15 mb-4 justify-center'>
                    
                    <img className='w-12 h-12 md:w-18 md:h-18 ' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10.5 -9.45 21 18.9" fill="none" className="w-12 h-12 md:w-18 md:h-18">
                        <circle cx="0" cy="0" r="2" fill="#61dafb"/>
                        <g stroke="#61dafb">
                            <ellipse rx="10" ry="4.5"/>
                            <ellipse rx="10" ry="4.5" transform="rotate(60)"/>
                            <ellipse rx="10" ry="4.5" transform="rotate(120)"/>
                        </g>
                    </svg>
                    <img className='w-16 h-12 md:w-24 md:h-20' src="https://cdn.iconscout.com/icon/free/png-256/free-mysql-3521596-2945040.png?f=webp" alt="MySQL" />
                </div>
                <div className='flex  flex-wrap md:no-wrap gap-4 md:gap-15 justify-center mb-4'>
                    <img className='w-16 h-16 md:w-24 md:h-24 ' src="https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg" alt="" srcset="" />
                    <img className='w-16 h-16 md:w-24 md:h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s" alt="" srcset="" />
                    <img className='w-16 h-16 md:w-24 md:h-24' src="https://img.freepik.com/premium-psd/html-file-3d-icon_554821-3047.jpg?semt=ais_hybrid&w=740&q=80" alt="" srcset="" />
                    <img className='w-20 h-12 md:w-32 md:h-16' src="https://www.dbtalks.com/article/introduction-of-mongodb/Images/MongoDb.jpg" alt="" srcset="" />
                </div>
                <div className='flex  flex-wrap md:no-wrap gap-4 md:gap-15 mx-2 md:mx-5 mb-16 md:mb-32 justify-center'>
                    <img className='w-16 h-12 md:w-24 md:h-20 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4N-tL_T2jXp9nsyC0SlzFe_EFsyPBxEDYNA&s" alt="" srcset="" />
                    <img className='w-12 h-12 md:w-20 md:h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5OyGM494an0wFKL4bPsMKUEaafxdWda9Ug&s" alt="" srcset="" />
                    <img className='w-24 h-20 md:w-32 md:h-24' src="https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxNTA1Njg4L29yaWdpbmFsXzBjNTQwZDYxYmI2MTJhMGZlOTU3Mzc5ZjgxMTc1OGYyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjoxMjAwLCJmaXQiOiJpbnNpZGUiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9LCJ3ZWJwIjp7InF1YWxpdHkiOjc1fSwianBlZyI6eyJxdWFsaXR5Ijo3NX0sInJvdGF0ZSI6bnVsbH19" alt="" srcset="" />
                </div>
            </div>
            </div>

    )
}

export default Skills
