import React from 'react'

const ServicesSection2 = () => {
    const services = [
    { name: "Frontend Development", active: true },
    { name: "Backend Development", active: true },
    { name: "UI/UX Design", active: false },
    { name: "Mobile App Development", active: false },
    { name: "Cloud Solutions", active: true },
    { name: "E-commerce Solutions", active: true },
    { name: "API Integration", active: false },
  ];
  return (
<section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-card border  border-gray-700/50 bg-gray-900/30 backdrop-blur-md p-8 rounded-2xl ">
          <h2 className="text-xl md:text-2xl text-gray-300 font-semibold mb-5 ml-2">
           ✨Services, <span className="text-blue-500">I provide</span>
          </h2>
          
          <div className="flex flex-wrap gap-3 mr-5 ">
            {services.map((service, index) => (
              <span
                key={service.name}
                className={`skill-pill ${service.active ? 'skill-pill-active' : ''}  md:block text-center mt-1 2xl:mt-3 p-1 px-3  bg-gradient-to-r from-blue-900/20 to-blue-950/20  rounded-full backdrop-blur-lg
   border border-white/20 drop-shadow-sky-700 text-gray-300 text-sm md:text-md
   shadow-blue-800 shadow-sm cursor-pointer hover:scale-105 transition-all hover:text-blue-300 ` }
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {service.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>  )
}

export default ServicesSection2