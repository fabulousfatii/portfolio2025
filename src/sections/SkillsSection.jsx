import React from 'react'

const SkillsSection = () => {
    const services = [
    { name: "nextjs", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s" },
    { name: "langchain", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTofYXCMI-pt3FrXzdsEMVeMqRJ6HXFLrHg&s" },
    { name: "html", image: "https://img.freepik.com/premium-psd/html-file-3d-icon_554821-3047.jpg?semt=ais_hybrid&w=740&q=80" },
    { name: "css ", image: "https://static.vecteezy.com/system/resources/thumbnails/060/194/928/small/css-programming-language-3d-icon-transparent-background-free-png.png" },
    { name: "tailwind css ", image: "https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg" },
    { name: "gsap ", image: "https://pbs.twimg.com/profile_images/1713633504431394816/h28jJ1qM_400x400.jpg" },
    { name: "redux", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gltPu8C7VFaLIEprGm9Vpms3NLxqQJX1Gw&s" },
    { name: "mysql", image: "https://cdn.iconscout.com/icon/free/png-256/free-mysql-3521596-2945040.png?f=webp" },
    { name: "javascript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "typescript", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5OyGM494an0wFKL4bPsMKUEaafxdWda9Ug&s" },
    { name: "mongodb", image: "https://www.shutterstock.com/shutterstock/videos/3951234859/thumb/1.jpg?ip=x480" },
    { name: "express js", image: false },
    { name: "node js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4N-tL_T2jXp9nsyC0SlzFe_EFsyPBxEDYNA&s" },


  ];
  return (
<section className="py-10 px-3 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-card   p-8 rounded-2xl ">
          <h2 className="text-3xl md:text-3xl text-gray-300 font-semibold mb-5 ml-2">
           My Tect stack, <span className="text-blue-500"></span>
          </h2>
          
          <div className="flex flex-wrap gap-3 mr-5 ">
            <div className={` md: max-w-full text-center mt-1 2xl:mt-3 p-1 px-2  rounded-full backdrop-blur-lg
   border border-white/20 drop-shadow-sky-700 text-gray-300 
    cursor-pointer hover:scale-105 transition-all hover:text-blue-300 flex gap-1  ` }
              >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10.5 -9.45 21 18.9" fill="none" className="w-4 h-4 md:w-5 md:h-5">
                        <circle cx="0" cy="0" r="2" fill="#61dafb"/>
                        <g stroke="#61dafb">
                            <ellipse rx="10" ry="4.5"/>
                            <ellipse rx="10" ry="4.5" transform="rotate(60)"/>
                            <ellipse rx="10" ry="4.5" transform="rotate(120)"/>
                        </g>
                    </svg>
                </div>
                <div><h4>reactjs</h4></div>
              </div>
            {services.map((service, index) => (
              <div
                key={service.name}
                className={` md: max-w-full text-center mt-1 2xl:mt-3 p-1 px-2  rounded-full backdrop-blur-lg
   border border-white/20 drop-shadow-sky-700 text-gray-300 text-sm md:text-md
    cursor-pointer hover:scale-105 transition-all hover:text-blue-300 flex gap-1  ` }
              >
                <div><img src={service.image? service.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPw2Lkrun5pwbFs1wv17AIKSSLeiOsh2QyA&s"} alt={service?.name}
                className='w-4 h-4 md:w-5 md:h-5 rounded-full ' /></div>
                <div><h4>{service.name}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>  )
}

export default SkillsSection