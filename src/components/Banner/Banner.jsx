import BannerPng from '../../assets/banner.png';
import { FaBookReader, FaCode } from "react-icons/fa";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion"
import { PiPathFill } from 'react-icons/pi';

const Banner = () => {
  return (
    <section>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">

            {/**===========Banner Image========== */}
            <div className='flex justify-center items-center'>
                <motion.img 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{duration: 0.5, ease: "easeInOut"}}
                src={BannerPng} alt="" className='w-[550px] md:max-w-[650px] object-cover drop-shadow ' />
            </div>

            {/**===========Banner Text============ */}
            <div className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-12">
                  <motion.h1
                   initial={{ opacity: 0, scale: 0.5 }}
                   whileInView={{opacity: 1, scale: 1}}
                   viewport={{once: true}}
                   transition={{duration: 0.5}}

                  className='text-3xl md:text-4xl font-bold !leading-snug'>The World&apos;s Leading Online Learning Platform </motion.h1>

                  <div className='flex flex-col gap-6'>
                    <motion.div 
                    variants={FadeUp(0.2)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{once:true}}

                    className='flex items-center gap-4 p-6 bg-gradient-to-r from-pink-200 to-gray-200 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                        <FaBookReader className='text-2xl'/>
                         <p className='text-lg'>1000+ Courses</p>
                    </motion.div>
                    {/**--------------- */}
                    <motion.div 
                    variants={FadeUp(0.4)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{once:true}}

                    className='flex items-center gap-4 p-6 bg-gradient-to-r from-pink-200 to-gray-200 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                        <FaCode className='text-2xl'/>
                         <p className='text-lg'>Code Samples</p>
                    </motion.div>
                    {/**---------------- */}
                    <motion.div 
                    variants={FadeUp(0.6)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{once:true}}

                    className='flex items-center gap-4 p-6 bg-gradient-to-r from-pink-200 to-gray-200 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl'>
                        <PiPathFill
                         className='text-2xl'/>
                         <p className='text-lg'>50+ Learning Paths</p>
                    </motion.div>


                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
