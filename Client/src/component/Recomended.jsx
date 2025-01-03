import React from 'react'
import med from '../assets/images/medi.jpg'

import { motion } from 'framer-motion'

const Recomended = () => {
  return (
    <div 
      
    
    className='md:h-[700px] overflow-hidden  flex flex-col justify-center items-center md:items-baseline'>
      <motion.div 
      initial={{x:-200,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}
      
      className='absolute w-[400px]  md:mx-10'>
        <p className='text-slate-400 my-2'>Recomended</p>
        <h1 className='text-3xl text-white my-2'>Get access to the entire content and transform your life.</h1>
        <button className='w-[200px] h-[45px] outline-none rounded-md  bg-slate-400 my-5'>Start Your Free Trial</button>
      </motion.div>
      <img src={med} alt='meditation' className='h-full w-full rounded-3xl' />
    </div>
  )
}

export default Recomended
