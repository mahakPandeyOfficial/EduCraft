import CommunityPng from '../../assets/community.png';
import { motion } from "framer-motion"


const Community = () => {
  return (
    <section>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">


             {/**===========Banner Text============ */}
             <motion.div
              initial={{opacity: 0, x:0 }}
              whileInView={{ opacity:1 , x:0}}

             className="flex flex-col justify-center">
                <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                <h1 className='text-4xl font-bold !leading-snug'>Join Our Community to Start your Journey</h1>
                <p className='text-dark2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem, odio vero deleniti qui neque est autem ad obcaecati blanditiis eveniet nulla! Aspernatur, laborum quasi!</p>

                <a href="" className='primary-btn !mt-8'> Join Now </a>
                </div>
                
                
                </motion.div>
            {/**===========Banner Image========== */}
            <div className='flex justify-center items-center'>
                <motion.img 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{opacity: 1, x: 0 }}
                src={CommunityPng} alt="" className='w-[550px] md:max-w-[650px] object-cover drop-shadow ' />
            </div>

            
        </div>
    </section>
  )
}

export default Community
