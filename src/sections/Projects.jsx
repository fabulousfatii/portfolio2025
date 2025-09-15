import { Database, File, ShoppingCart } from 'lucide-react'
import Card from '../components/Card'

function Projects() {
    return (
       <div className=" overflow-x-hidden relative flex flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-5xl font-bold text-white mt-16 mb-16">
        Projects
      </h1>
      
      {/* Project Cards Container */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-4xl">
        {/* Project Card 1 */}
              <Card icon={ShoppingCart} title={"E-commerce website"} description={"A full-stack project "} />

        
        {/* Project Card 2 */}
         <Card icon={Database} title={"CRM-employee website"} description={"A full-stack project "} />

        
        {/* Project Card 3 */}
       <Card icon={File} navigate={"/pdf-project"} title={"PDF Summary website"} description={"A full-stack project "} />

       </div>

        <button className=' md:w-40 bg-cyan-800 mt-16 p-3 drop-shadow-sky-700 ring ring-cyan-600 shadow-cyan-600 '>explore more</button>

      
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-80 lg:h-80 rounded-full absolute top-2/6 -left-36 circle1 rotate-90 blur-[100px]'></div>     
      <div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-80 lg:h-80 rounded-full absolute top-2/6 z-10 -right-36 rotate-180 circle2 blur-[100px]'></div>
    </div>
    )
}

export default Projects
