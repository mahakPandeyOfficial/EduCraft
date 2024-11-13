
import { animate } from 'framer-motion'
import React from 'react'
import { CgNotes } from 'react-icons/cg'
import { FaBookmark, FaFileCode } from 'react-icons/fa'
import { GoCommentDiscussion } from 'react-icons/go'
import { GrInProgress } from 'react-icons/gr'
import { MdQuiz } from 'react-icons/md'
import { motion } from 'framer-motion';

const ServicesData = [
    {
        id: 1,
        title: "Lecture Notes & Summaries",
        link: "#",
        icon: <CgNotes />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Bookmark Lessons",
        link: "#",
        icon: <FaBookmark />,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Downloadable Code Samples",
        link: "#",
        icon: <FaFileCode />,
        delay: 0.4,
    },
    {
        id: 4,
        title: "Quiz Bank",
        link: "#",
        icon: <MdQuiz />,
        delay: 0.5,
    },
    {
        id: 5,
        title: "Discussion Boards",
        link: "#",
        icon: <GoCommentDiscussion />,
        delay: 0.6,
    },
    {
        id: 6,
        title: "Progress Tracking",
        link: "#",
        icon: <GrInProgress />,
        delay: 0.7,
    },

]

const SlideLeft = (delay) =>{
    return {
        initial : {
            opacity: 0,
            x:50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
            },
        }
    }
}

const Services = () => {
  return (
    <section className='bg-white'>
        <div className="container pb-14 pt-16">
            <h1 className='text-4xl font-bold text-left pb-10'>
                Services We Provide
            </h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8'>
                
                  {ServicesData.map((service) =>(
                    <motion.div 
                      variants={SlideLeft(service.delay)}
                      initial="initial"
                      whileInView={"animate"}
                      viewport={{once: true}}
                    className='bg-gradient-to-r from-pink-200 to-gray-200 rounded-2xl  flex flex-col gap-4 items-center justify-center px-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                        <div className='text-4xl mb-4 '> {service.icon} </div>
                        <div className='text-lg font-semibold text-center px-3'> {service.title} </div>
                    </motion.div>

                  ))}
            </div>
        </div>
    </section>
  )
}

export default Services
