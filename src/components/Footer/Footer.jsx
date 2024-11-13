import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FaTwitter } from "react-icons/fa6";


const Footer = () => {
  return <footer className="py-28 bg-[#f7f7f7] ">
    <motion.div 
     initial={{ opacity: 0, y:50 }}
     whileInView={{ opacity: 1, y:0 }}

    className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4 ">
             
             {/** first section  */}
              <div className="space-y-4 max-w-[300px] ">
                <h1 className="text-2xl font-bold">EduCraft</h1>
                <p className="text-dark2">EduCraft is your personalized learning hub, crafted to empower students in coding and engineering. Dive into hands-on projects, interactive lessons, and real-world skills to fuel your journey toward tech mastery. Learn, build, and thrive with EduCraft, where education meets innovation.</p>
              </div>

             {/** second section */}
             <div className="grid grid-cols-2 gap-10">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Courses</h1>
                    <div className="text-dark2">
                        <ul className="space-y-2 text-lg">
                            <li className="cursor-pointer hover:text-secondary duration-200">Web Development</li>
                            <li className="cursor-pointer hover:text-secondary duration-200">Cyber Security</li>
                            <li className="cursor-pointer hover:text-secondary duration-200">Andriod Developement</li>
                            <li className="cursor-pointer hover:text-secondary duration-200">Data Structure & Algorithm</li>
                            <li className="cursor-pointer hover:text-secondary duration-200">Database Management</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold">Links</h1>
                    <div className="text-dark2">
                        <ul className="space-y-2 text-lg">
                            <li className="cursor-pointer hover:text-secondary duration-200">Home</li>
                            <li className="cursor-pointer hover:text-secondary duration-200">Services</li>
                            <li className="cursor-pointer hover:text-secondary duration-200">About us</li>
                            <li className="cursor-pointer hover:text-secondary duration-200">Contact</li>
                            <li className="cursor-pointer hover:text-secondary duration-200">Resources</li>
                        </ul>
                    </div>
                </div>
             </div>
             </div>
             {/** third section */}
            <div className="space-y-4 max-w-[300px]">
                <h1 className="text-2xl font-bold">Get In Touch</h1>
                <div className="flex items-center">
                    <input type="email"  placeholder="Enter your email" className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"  />
                    <button className="bg-secondary text-white font-semibold py-4 px-6 rounded-e-xl">Go</button>
                </div>

                {/** Social icons */}
                <div className="flex space-x-6 py-3">
                    <a href="#"> <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-150 duration-200" /> </a>
                    <a href="#"> <FaInstagram className="cursor-pointer hover:text-primary hover:scale-150 duration-200" /> </a>
                    <a href="#"> <FaTwitter className="cursor-pointer hover:text-primary hover:scale-150 duration-200" /> </a>
                    <a href="#"> <FaLinkedin className="cursor-pointer hover:text-primary hover:scale-150 duration-200" /> </a>
                </div>
            </div>

        
        </div>
    </motion.div>
  </footer>
}

export default Footer
