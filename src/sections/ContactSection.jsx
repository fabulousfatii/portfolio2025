

const ContactSection = () => {
  return (
    <section className="py-16 px-4 min-h-screen overflow-hidden md:px-0 background-3 relative flex  justify-center items-center">
      <div className='absolute w-5xl h-full -bottom-4/6 circle1 rounded-full blur-[200px] z-0 ' >
        </div>


      <div className="container mx-auto max-w-4xl">
        <div className="bg-gray-900/30 backdrop-filter backdrop-blur-md bg-opacity-40 rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl 2xl:text-4xl font-bold mb-6 text-center">Reach me out</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form  className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                name='user_name'
                className="w-full px-3 py-2  bg-opacity-20 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                name='user_email'
                className="w-full px-3 py-2  bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 py-2  bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                name='message'
                className="w-full px-3 py-2  bg-opacity-20 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
            <div className="space-y-6">
              <p
               className="text-lg 2xl:text-xl">Feel free to reach out through any of these channels:</p>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/fatima-saleem-7b4667222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center 2xl:text-xl space-x-3 text-blue-600 hover:text-blue-800"
                >
                  
                  <span  className='font-medium'>Connect on LinkedIn</span>
                </a>
                
                <div className='flex gap-3'>
                <a 
                  href="https://wa.me/923266501371?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center 2xl:text-xl space-x-3 text-green-600 hover:text-green-800"
                >
                 <span className='font-medium'>  +92 326 6501371</span>
                </a>
                </div>
                <a
                  href="mailto:fatimasaleem778899@gmail.com"
                  className="flex items-center 2xl:text-xl space-x-3 text-red-600 hover:text-red-800"
                >
                  
                  <span  className='font-medium'>Send an Email</span>
                </a>
                <a
                  href="https://github.com/fabulousfatii"
                  className="flex items-center 2xl:text-xl space-x-3 hover:text-yellow-500 text-yellow-300"
                >
                  
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