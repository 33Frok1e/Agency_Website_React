import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

function Newsletter() {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
            <motion.div 
            variants={fadeIn('up',0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}

            className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>Pellentesque suscipt fringilla libero eu.</h2>
                <div className='flex items-center justify-center gap-8'>
                    <button className='btn-primary text-white'>Get a Demo <MdOutlineArrowRightAlt size={20} className='inline-block ml-2' /> </button>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Newsletter