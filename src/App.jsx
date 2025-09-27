import { useState } from 'react'
import HeroSection from './sections/HeroSection'
import Aboutme from './sections/Aboutme'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import FuturisticCardsLayout from './sections/ExtraSection'
import { MessageCircleIcon } from 'lucide-react'
import ContactSection from './sections/ContactSection'
import Navbar from './components/Navbar'
import Aboutme2 from './pages/Aboutme2'


function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='text-2x p-0 '>

    <HeroSection/>

   
      {/* <FuturisticCardsLayout/> */}
      <Aboutme2/>

    <Skills/>

    <Projects/>

       <div className="min-h-3/5 overflow-x-hidden relative flex flex-col items-center justify-center p-8">
      
    </div>
    
    <ContactSection/>

   </main>
  )
  
}

export default App
