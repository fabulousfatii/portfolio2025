import { NavLink,Link } from "react-router-dom";
import { gsap } from "gsap";
import React, { useRef, useEffect } from 'react'

const Navbar = () => {
    const navRef = useRef(null);
  
    useEffect(()=>{
       gsap.set(navRef.current, { opacity: 0 });
       gsap.to(navRef.current, {
        opacity:1,
        duration:2,
        delay:1,
        ease:'ease.in'
       });
    },[])
  return (
    <nav ref={navRef} className="absolute z-10 2xl:text-xl top-4 left-1/2 transform -translate-x-1/2 bg-white/5  backdrop-blur-lg border border-white/20 rounded-full shadow-lg px-8 py-1.5 flex space-x-10 text-white font-medium">
      <Link to={"/"} className="hover:text-blue-300 transition">
        Home
      </Link>
      <Link to={"/aboutme"} className="hover:text-blue-300 hidden md:block transition">
        About me
      </Link>
      <Link to={"/projects"} className={({ isActive }) => "hover:text-blue-300 transition " + (isActive ? "text-blue-400 font-semibold" : "")}>
        Projects
      </Link>
      <Link to={"/contact"} className=" cursor-pointer hover:text-blue-300 transition">
        Contact
      </Link>
    </nav>
    
  );
};

export default Navbar;

