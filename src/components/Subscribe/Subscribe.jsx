import { FaBell } from 'react-icons/fa'
import BgImage from '../../assets/bg.png';
import { motion } from 'framer-motion';


const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const Subscribe = () => {
  return (
    <section className='bg-gradient-to-r from-pink-200 to-gray-200'>

        <motion.div 
         initial={{ opacity: 0}}
         whileInView={{ opacity: 1}}
         
        style={bgStyle} className='container py-24 md:py-48'>
           <motion.div 
           initial={{ opacity: 0, scale: 0.5 }}
           whileInView={{ opacity: 1, scale: 1}}
           transition={{ duration: 0.6, ease: "easeInOut" }}

           className="flex flex-col justify-center">
            <div className='text-center space-y-4 lg:max-w-[430px] mx-auto'>
                <h1 className='text-4xl font-bold !leading-snug'>250K+ Students are learning from us</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis architecto excepturi reprehenderit animi reiciendis rem delectus, sapiente dolores at laborum. Et placeat laudantium est nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente provident nulla?</p>
                <a href='' 
                className='primary-btn !mt-8 inline-flex items-center gap-4 group'>
                    Subscribe Now
                    <FaBell className='group-hover:animate-bounce group-hover:text-lg duration-200 ' />
                </a>
            </div>
           </motion.div>
        </motion.div>

    </section>
  )
}

export default Subscribe
