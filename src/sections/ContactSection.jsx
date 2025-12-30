import { GitBranch, GitBranchPlusIcon, GitCommit, GitGraph, Mail } from "lucide-react"


const ContactSection = () => {
  return (
    <section className="py-16 px-4 min-h-screen overflow-hidden md:px-0 background-3 relative flex  justify-start items-start">
      
        
<div className='absolute hidden md:block  bg-blue-800 w-32 h-32 2xl:w-52 2xl:h-52   ml-[40%] left-64 top-1/2 rounded-full blur-[100px]'></div>


      <div className="container mx-auto max-w-4xl">
        <div className=" backdrop-filter backdrop-blur-md bg-opacity-40 rounded-2xl shadow-lg  md:p-12">
          
          <h2 className=" text-blue-700 md:text-gray-100 text-3xl md:text-5xl 2xl:text-6xl font-bold mb-6 text-center ">Reach me out</h2>
                       <p
               className="text-lg 2xl:text-xl  text-center">Feel free to reach out through any of these channels:</p>
          <div className=" flex flex-col md:flex-row  justify-between item-center mt-18">



            {/* linkedin */}
                <a
                  href="https://www.linkedin.com/in/fatima-saleem-7b4667222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-5 items-center 2xl:text-xl space-x-3 text-blue-600 hover:text-blue-800"
                >
                 
                   <svg viewBox="0 0 20 20" width={50} xmlns="http://www.w3.org/2000/svg" fill="#2e5bc5ff" stroke="#2f54acff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"></path> </g> </g></svg>

                  <span  className='font-medium'>Connect on LinkedIn</span>
                </a>
                

                   {/* whatsapp */}
                <a 
                  href="https://wa.me/923266501371?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-5 items-center 2xl:text-xl space-x-3 text-green-600 hover:text-green-800"
                >
                  <svg viewBox="0 0 24 24" width={50}  fill="#4dd581" xmlns="http://www.w3.org/2000/svg" stroke="#4dd581"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 22L3.41152 16.8691C2.54422 15.3639 2.08876 13.6568 2.09099 11.9196C2.08095 6.44549 6.52644 2 11.99 2C14.6417 2 17.1315 3.02806 19.0062 4.9034C19.9303 5.82266 20.6627 6.91616 21.1611 8.12054C21.6595 9.32492 21.9139 10.6162 21.9096 11.9196C21.9096 17.3832 17.4641 21.8287 12 21.8287C10.3368 21.8287 8.71374 21.4151 7.26204 20.6192L2 22ZM7.49424 18.8349L7.79675 19.0162C9.06649 19.7676 10.5146 20.1644 11.99 20.1654C16.5264 20.1654 20.2263 16.4662 20.2263 11.9291C20.2263 9.73176 19.3696 7.65554 17.8168 6.1034C17.0533 5.33553 16.1453 4.72636 15.1453 4.31101C14.1452 3.89565 13.0728 3.68232 11.99 3.68331C7.44343 3.6839 3.74476 7.38316 3.74476 11.9202C3.74476 13.4724 4.17843 14.995 5.00502 16.3055L5.19645 16.618L4.35982 19.662L7.49483 18.8354L7.49424 18.8349Z" fill="#000000"></path> <path fillRule="evenodd" clipRule="evenodd" d="M9.52024 7.76662C9.33885 7.35303 9.13737 7.34298 8.96603 7.34298C8.81477 7.33294 8.65288 7.33294 8.48154 7.33294C8.32083 7.33294 8.04845 7.39321 7.81684 7.64549C7.58464 7.89719 6.95007 8.49217 6.95007 9.71167C6.95007 10.9318 7.83693 12.1111 7.95805 12.2724C8.07858 12.4337 9.67149 15.0139 12.192 16.0124C14.2883 16.839 14.712 16.6777 15.1657 16.6269C15.6189 16.5767 16.6275 16.0325 16.839 15.4476C17.0405 14.8733 17.0405 14.3693 16.9802 14.2682C16.9199 14.1678 16.748 14.1069 16.5064 13.9758C16.2541 13.8552 15.0446 13.2502 14.813 13.1693C14.5808 13.0889 14.4195 13.0487 14.2582 13.2904C14.0969 13.5427 13.623 14.0969 13.4724 14.2582C13.3306 14.4195 13.1799 14.4396 12.9377 14.3185C12.686 14.1979 11.8895 13.9356 10.9418 13.0889C10.2056 12.4331 9.71167 11.6171 9.56041 11.3755C9.41979 11.1232 9.54032 10.992 9.67149 10.8709C9.78257 10.7604 9.92378 10.579 10.0449 10.4378C10.1654 10.296 10.2056 10.1855 10.2966 10.0242C10.377 9.86292 10.3368 9.71167 10.2765 9.59114C10.2157 9.48006 9.74239 8.25997 9.52024 7.76603V7.76662Z" fill="#000000"></path> </g></svg>          

                 <span className='font-medium'>  +92 326 6501371</span>
                </a>



                 {/* gmail */}
                  <div className='flex flex-col gap-5'>
                <a
                  href="mailto:fatimasaleem778899@gmail.com"
                  className="flex flex-col gap-5 items-center 2xl:text-xl space-x-3  text-red-600 hover:text-red-800"
                >
                <Mail className="text-rose-600 w-13 h-13"/>

                  <span  className='font-medium'>Send an Email</span>
                </a>
                </div>

                <a
                  href="https://github.com/fabulousfatii"
                  className="flex flex-col gap-5 items-center 2xl:text-xl space-x-3 hover:text-yellow-500 text-yellow-300"
                >
                  <GitBranch className="w-13 h-13"/>
                  <span className='font-medium'>Explore Github</span>
                </a>
              </div>
            </div>
          </div>
    </section>
  )
}

export default ContactSection