import { GitBranch, GitBranchPlusIcon, GitCommit, GitGraph, Mail, MailIcon, MessageCircle } from "lucide-react"


const ContactSection = () => {
  return (

 <section id="contact" className="py-16 px-4 md:px-0 background-3 relative flex  justify-center items-center">
      <div className='absolute left-1/4 w-1/4 h-1/2 bg-blue-950/70 rounded-full blur-[100px] z-0 '>
        </div>


      <div className="container mx-auto max-w-4xl">
        <div className="backdrop-blur-md  rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl 2xl:text-4xl font-semibold mb-10 text-center">Open to <span className="text-blue-500">Frontend</span> & <span className="text-blue-500">MERN Stack</span> roles
             <br /> feel free to reach out anytime.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form  className="space-y-3 px-4">
              <input
                type="text"
                placeholder="Your Name"
                name='user_name'
                className="w-full px-3  py-2 bg-black/20 bg-opacity-20 border backdrop-blur-lg  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                name='user_email'
                className="w-full px-3 py-2 bg-black/20 bg-opacity-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 py-2 bg-black/20 bg-opacity-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                name='message'
                className="w-full px-3 py-2 bg-black/20 bg-opacity-20 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900/50 to-blue-700/50 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-900 transition duration-300"
              >
                Send Message
              </button>
            </form>
            <div className="space-y-4">
              <p className="text-md text-gray-400 2xl:text-lg">Let’s build something impactful together</p>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/fatima-saleem-7b4667222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center 2xl:text-xl space-x-3 text-blue-600 hover:text-blue-800"
                >
                  <svg viewBox="0 0 20 20" width={28} xmlns="http://www.w3.org/2000/svg" fill="#2e5bc5ff" stroke="#2f54acff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"></path> </g> </g></svg>
                  <span  className='font-medium'>Connect on LinkedIn</span>
                </a>
                <a 
                  href="https://wa.me/923266501371?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center 2xl:text-xl space-x-3 text-green-600 hover:text-green-800"
                >
                  <MessageCircle className="text-green-600"/>
                 <span className='font-medium'>  whatsapp</span>
                </a>
                <a
                  href="mailto:fatimasaleem778899@gmail.com"
                  className="flex items-center 2xl:text-xl space-x-3 text-red-600 hover:text-red-800"
                >
                  <MailIcon/>
                  <span  className='font-medium'>Send an Email</span>
                </a>
                <a
                  href="https://github.com/fabulousfatii"
                  className="flex items-center 2xl:text-xl space-x-3 hover:text-yellow-500 text-yellow-300"
                >
                  <GitBranch />
                  <span className='font-medium'>Explore Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection