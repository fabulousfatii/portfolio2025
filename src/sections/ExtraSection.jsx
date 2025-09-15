import React from 'react';
import { ArrowUpRight, TrendingUp, Shield, Atom, CheckCircle, DollarSign, Grip } from 'lucide-react';


export default function FuturisticCardsLayout() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0  bg-gradient-to-br from-cyan-600 via-black to-cyan-500/30"></div> */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          
          {/* Main Card - EVM-Based Scalability */}
          <div className="md:col-span-1 lg:row-span-2 bg-gradient-to-br bg-cyan-700/30 rounded-3xl border border-cyan-500 backdrop-blur-xl p-8 relative group hover:border-purple-400/40 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-sky-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-sky-500/25">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-sky-600 rounded"></div>
                </div>
              </div>
              
              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-6">
                About me
              </h2>
              
              {/* Description */}
              <p className="text-gray-300 mb-12 leading-relaxed">
 I 
                  strive to create innovative solutions that combine aesthetics with functionality. My passion for coding and
                  problem-solving drives me to continuously improve and stay up-to-date with the latest trends in web development. 
                  I believe in the power of collaboration and I
                  am always eager to work with like-minded individuals to create exceptional digital experiences.              </p>
              
            </div>
          </div>

          {/* Perpetual Low Gas Fees Card */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-xl p-6 relative group hover:border-gray-600/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              
              <div className="flex items-center gap-3 mb-4">
                <Grip className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400 font-medium">Services</span>
              </div>
              
             <ul className=" text-gray-300 font-semibold px-4 text-pretty ">
            <li className="hover:text-white list-disc">Mern stack development</li>
            <li className="hover:text-white list-disc">Backend development</li>
            <li className="hover:text-white list-disc">Frontend development</li>
            <li className="hover:text-white list-disc">Full stack development</li>
            <li className="hover:text-white list-disc">React JS development</li>
          </ul>
              
              
            </div>
          </div>

          {/* True Decentralization Card */}
          <div className="bg-cyan-700/30 rounded-2xl border border-cyan-500 backdrop-blur-xl p-6 relative group hover:border-cyan-400 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-purple-400" />
                {/* <span className="text-sm text-purple-400 font-medium">True Decentralization</span> */}
              </div>
              
              <h3 className="text-white font-semibold mb-6">
                {/* WE BUILD TRUST AND SECURITY BY ELIMINATING A SINGLE POINT OF FAILURE */}
              </h3>
              
              {/* Network visualization */}
              <div className="flex justify-center items-center h-16 relative">
                <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-2 left-8 animate-pulse delay-300"></div>
                <div className="absolute w-2 h-2 bg-pink-400 rounded-full bottom-2 right-8 animate-pulse delay-700"></div>
                <div className="absolute w-1 h-8 bg-gradient-to-t from-purple-400/20 to-transparent rotate-45 origin-bottom"></div>
                <div className="absolute w-1 h-8 bg-gradient-to-t from-blue-400/20 to-transparent -rotate-45 origin-bottom"></div>
              </div>
            </div>
          </div>

          {/* Streamlined Atomic Processing Card */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-xl p-6 relative group hover:border-gray-600/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Atom className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400 font-medium">Education</span>
              </div>
              
              <h3 className="text-white font-semibold ">Bachelor of Science in Computer Science  </h3>
              <h3 className=" text-gray-300 mb-6 ">  Virtual University of Pakistan <br/> lahore, Pakistan</h3>

              
              {/* Atomic visualization */}
              <div className="flex justify-center items-center h-16">
                <div className="relative">
                  <div className="w-12 h-12 border-2 border-blue-400/50 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-12 h-12 border-2 border-purple-400/50 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '3s'}}></div>
                  <div className="absolute inset-3 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Solid Security Card */}
          <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 backdrop-blur-xl p-6 relative group hover:border-gray-600/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400 font-medium">Experience</span>
              </div>
              
              <h3 className="text-white font-semibold uppercase">
                Mern stack internship
              </h3>
              <h3 className=" text-gray-300 font-semibold ">NerdxSolution ,remote </h3>
              <h3 className=" text-gray-300 font-semibold mb-6 "> 3 months</h3>
              
              {/* Security check visualization */}
              <div className="flex justify-center items-center h-16">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-400/10 rounded-full flex items-center justify-center border border-green-500/30">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}