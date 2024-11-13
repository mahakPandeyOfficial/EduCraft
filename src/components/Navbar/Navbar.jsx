import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion';

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "Services",
        path: "#",
    },
    {
        id: 3,
        title: "About Us",
        path: "#",
    },
    {
        id: 4,
        title: "Our Team",
        path: "#",
    },
    {
        id: 5,
        title: "Contact Us",
        path: "#",
    },

]
const Navbar = () => {
  return <nav className='relative z-20'>
    <motion.div initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }} className="container py-6 flex  justify-between items-center ">
         {/** ==========Logo Section========== */}
         <div>
            <h1 className='font-bold text-2xl bg-gradient-to-r from-pink-500 to-gray-500 bg-clip-text text-transparent'>EduCraft</h1>
         </div>

         {/** ==========Menu Section========== */}
         <div className='hidden lg:block'>
            <ul className='flex items-center gap-3'>
                {
                    NavbarMenu.map((menu) =>(
                        <li key={menu.id}>
                            <a href="menu.path" className='inline-block py-2 px-4 hover:text-secondary relative group:'>
                                <div className='w-2 h-2 mt-2  bg-secondary absolute  rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'>

                                </div>
                                {menu.title} </a>
                        </li>
                    ))
                }
                <button className='px-5  primary-btn'>Sign In</button>
            </ul>
         </div>

         {/** ==========Mobile Hamburger Menu Section========== */}
         <div className="lg:hidden">
         <IoMdMenu className='text-4xl' />

         </div>
    </motion.div>
  </nav>
}

export default Navbar
