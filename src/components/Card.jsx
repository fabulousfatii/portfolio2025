import { Database, File, ShoppingCart } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({icon:Icon, title, description,navigate,link}) => {
  return (
    <NavLink to={navigate? navigate: null} className=" w-64 h-48 lg:h-80 bg-gray-900/10 bg-opacity-40 border border-cyan-600  rounded-2xl backdrop-blur-lg hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:bg-cyan-950 cursor-pointer">
              <div className="w-full h-full flex flex-col justify-end rounded-2xl p-10  bg-gradient-to-br from-transparent to-black ">
                {/* icon */}
              <div className="flex justify-start items-center h-16">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-sky-400/10 rounded-full flex items-center justify-center border border-sky-500/30">
                      <Icon className="w-6 h-6 text-sky-400" />
                    </div>
                  </div>
                 {/* text */}
                <h1 className='text-2xl text-white font-semibold '>{title}</h1>
                <h3 className='text-sm text-gray-300'>{description}</h3>
                {link && <a href={link}>click to explore</a>}
              </div>
            </NavLink>
  )
}

export default Card