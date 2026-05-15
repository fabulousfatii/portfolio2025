import { Database, File, ShoppingCart } from 'lucide-react'
import Card from '../components/Card'
import { NavLink } from 'react-router-dom'



function Projects() {
    return (
       <div className=" overflow-x-hidden relative flex flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-5xl font-bold text-white mt-16 mb-16">
        Projects
      </h1>
      
      {/* Project Cards Container */}
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
        {/* Project Card 1 */}
              <Card icon={ShoppingCart} image={"/assets/chat.png"} link={"https://chatapp-client-zeta.vercel.app/"} title={"chat website"} description={"A full-stack project "} />

        
        {/* Project Card 2 */}
         <Card icon={Database} image={"/assets/crm.png"} link={"https://crm-client-delta.vercel.app/"} title={"Employee managment website"} description={"A full-stack project "} />

        
        {/* Project Card 3 */}
       <Card icon={File} image={"/assets/pdf-summary.png"} link={"https://pdf-summary-inky.vercel.app/"} title={"PDF Summary website"} description={"A full-stack project "} />

       </div>

        <NavLink to={"/projects"} className=' md:w-40  bg-gradient-to-r from-blue-900/50 to-gray-950/50 bg-opacity-10 mt-16 p-3 rounded-4xl text-center drop-shadow-sky-700 ring transition-all ring-gray-600 hover:scale-105'>explore more</NavLink>

      
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-92 lg:h-72 rounded-full absolute top-2/6 left-68 -z-10 bg-blue-800 opacity-60 rotate-90 blur-[100px]'></div>     
      <div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-92 lg:h-72 rounded-full absolute top-2/6 -z-10 right-68 rotate-180 opacity-60 bg-blue-800 blur-[100px]'></div>
    </div>
    )
}

export default Projects
