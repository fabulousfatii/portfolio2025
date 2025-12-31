import { Book, Database, File, MessageCircle, ShoppingCart, Square } from 'lucide-react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'


const projects = [
  {
    title: "CRM-employee website",
    description: "A CRM project that focuses on employee management. Allowing both admin and managers to manage their employees efficiently. Employee panel for employees to keep updated all the time with their progress",
    image:"https://i.pinimg.com/1200x/bf/cd/e2/bfcde2ae3e620d4b9239036237471ae9.jpg",
  },
  {
    title: "E-commerce website",
    description:  " A MERN stack E-commerce project that focuses on state management, order products , manage products ,   providing user authentication and stripe integration functionality",
    image:"https://i.pinimg.com/1200x/a2/06/23/a20623a5fb2ce31f1eb04c1162f55111.jpg",
  },
];

const ProjectPage = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className='w-40 h-40 sm:w-50 sm:h-50 md:w-55 md:h-55 lg:w-[190px] lg:h-96 2xl:w-[900px] 2xl:h-[900px] 2xl:-top-10 rounded-full absolute -top-32 right-2/3  bg-blue-900 blur-[130px] 2xl:blur-[270px]'></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mt-8 mb-16 px-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
             Welcome to my projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto ">
            Here you’ll find a selection of projects
            showcasing modern UI, clean code, and thoughtful design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-6 bg-gray-900/40 bg-opacity-40 rounded-2xl p-6 items-center"
            >
              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                <button className="px-5 py-2 rounded-full border border-gray-600 hover:bg-white hover:text-black transition">
                  Full project →
                </button>
              </div>

              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
