import { Database, File, ShoppingCart } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({icon:Icon,image, title, description,navigate,link}) => {
  return (
    <>
      {navigate?(
        <NavLink to={navigate? navigate: null} className=" w-64 2xl:w-80 h-80 lg:h-80 2xl:h-96 bg-gray-900/10 bg-opacity-40 border border-gray-500  rounded-2xl backdrop-blur-lg hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:bg-blue-850 cursor-pointer">
              <div className="w-full h-full flex flex-col justify-start rounded-2xl p-7 2xl:p-12 bg-gradient-to-br from-transparent to-black/20 ">
                {/* icon */}
              <div className="flex justify-start items-center w-full h-32 mb-5 mt-3  ">
         {/* <div className="w-12 h-12 2xl:w-16 2xl:h-16 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-full flex items-center justify-center border border-blue-500/30"> */}
                      <img src={image} className=" rounded-xl object-cover  text-blue-400" />
                    {/* </div> */}
                  </div>
                 {/* text */}
                <h1 className='text-2xl 2xl:text-2xl text-white font-semibold '>{title}</h1>
                <h3 className='text-sm 2xl:text-base text-blue-500'>{description}</h3>
              </div>
            </NavLink>
      ):(
        <a href={link} className=" w-64 2xl:w-80 h-64 md:h-80 2xl:h-96 bg-gray-900/10 bg-opacity-40 border border-gray-500  rounded-2xl backdrop-blur-lg hover:bg-opacity-50 transition-all duration-300 hover:scale-105 hover:bg-blue-850 cursor-pointer">
              <div className="w-full h-full flex flex-col justify-end rounded-2xl p-10 2xl:p-12 bg-gradient-to-br from-transparent to-black ">
                {/* icon */}
              <div className="flex justify-start items-center h-16 2xl:h-20">
                    <div className="w-12 h-12 2xl:w-16 2xl:h-16 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-full flex items-center justify-center border border-blue-500/10">
                      <Icon className="w-6 h-6 2xl:w-8 2xl:h-8 text-blue-400" />
                    </div>
                  </div>
                 {/* text */}
                <h1 className='text-2xl 2xl:text-3xl text-white font-semibold '>{title}</h1>
                <h3 className='text-sm 2xl:text-base text-blue-800'>{description}</h3>
                {/* {link && <a href={link}>click to explore</a>} */}
              </div>
            </a>
      )
      }
            </>
  )
}

export default Card