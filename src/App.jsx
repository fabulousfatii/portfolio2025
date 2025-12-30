import { useState } from 'react'
import HeroSection from './sections/HeroSection'
import Projects from './sections/Projects'
import ContactSection from './sections/ContactSection'
import Aboutme2 from './pages/Aboutme2'
import ServicesSection2 from './sections/ServicesSection2'
import SkillsSection from './sections/SkillsSection'


function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='text-2x p-0 '>

    <HeroSection/>

   
      {/* <FuturisticCardsLayout/> */}
      <Aboutme2/>

      <ServicesSection2/>

    <SkillsSection/>
    

    <Projects/>

       <div className="min-h-3/5 overflow-x-hidden relative flex flex-col items-center justify-center p-8">
      
    </div>
    
    <ContactSection/>

   </main>
  )
  
}

export default App
