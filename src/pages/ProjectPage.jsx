import { Book, Database, File, MessageCircle, ShoppingCart, Square } from 'lucide-react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const ProjectPage = () => {
  return (
     <div className=" overflow-x-hidden relative flex flex-col items-center justify-center p-8">
      {/* Title */}
      <h1 className="text-5xl font-bold text-white mt-16 mb-5">
        All Projects
      </h1>
      <h1 className="text-xl text-cyan-600 mb-16">
        Click to see project Details
      </h1>
      
      {/* Project Cards Container */}
      <div className="flex flex-col flex-wrap  justify-center lg:flex-row gap-8 max-w-4xl">
        {/* Project Card 1 */}
              <Card icon={ShoppingCart} navigate={"/ecommerce-project"} title={"E-commerce website"} description={"A full-stack project "} />

        
        {/* Project Card 2 */}
         <Card icon={Database} navigate={"/crm-project"} title={"CRM-employee website"} description={"A Mern-stack project "} />

        
        {/* Project Card 3 */}
       <Card icon={File} navigate={"/pdf-project"} title={"PDF Summary website"} description={"A full-stack project "} />

       <Card icon={Book} link={'https://blog-app-lyart-two.vercel.app/'} title={"Blog website"} description={" reactjs project "} />
       {/* <Card icon={MessageCircle} title={"Chat website"} description={" mern-stack project "} /> */}
       <Card icon={Square} title={"landing page"} description={"frontend project"} />


       </div>
      
<div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-80 lg:h-80 rounded-full fixed top-2/6 -left-36 circle1 rotate-90 blur-[100px]'></div>     
      <div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-80 lg:h-80 rounded-full fixed top-2/6 z-10 -right-36 rotate-180 circle2 blur-[100px]'></div>
    </div>
  )
}

export default ProjectPage