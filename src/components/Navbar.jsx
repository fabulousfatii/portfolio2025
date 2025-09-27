import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute z-10 2xl:text-xl top-4 left-1/2 transform -translate-x-1/2 bg-white/5  backdrop-blur-lg border border-white/20 rounded-full shadow-lg px-8 py-1.5 flex space-x-10 text-white font-medium">
      <NavLink to={"/"} className="hover:text-blue-300 transition">
        Home
      </NavLink>
      <NavLink to={"/aboutme"} className="hover:text-blue-300 hidden md:block transition">
        About me
      </NavLink>
      <NavLink to={"/projects"} className={({ isActive }) => "hover:text-blue-300 transition " + (isActive ? "text-blue-400 font-semibold" : "")}>
        Projects
      </NavLink>
      <NavLink to={"/contact"} className=" cursor-pointer hover:text-blue-300 transition">
        Contact
      </NavLink>
    </nav>
    
  );
};

export default Navbar;

