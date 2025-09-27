import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage.jsx'
import CRMproject from './pages/CRMproject.jsx'
import EcommercePage from './pages/EcommercePage.jsx'
import Navbar from './components/Navbar.jsx'
import Aboutme from './sections/Aboutme.jsx'
import ContactSection from './sections/ContactSection.jsx'
import PDFsummaryProject from './pages/PDFsummaryProject.jsx'
import Aboutme2 from './pages/Aboutme2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
                    <Navbar/>

      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/contact" element={<ContactSection />} />

        <Route path="/crm-project" element={<CRMproject />} />
        <Route path="/ecommerce-project" element={<EcommercePage />} />
        <Route path="/pdf-project" element={<PDFsummaryProject />} />
        <Route path="/about" element={<Aboutme2 />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>
)
