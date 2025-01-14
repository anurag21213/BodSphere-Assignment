import React from 'react'

import {motion} from 'framer-motion'

import mobile from '../assets/images/mobile.png'

const GetStarted = () => {
  return (
    <div className=' flex items-center justify-center md:justify-evenly p-5 my-5  mx-auto flex-wrap'>
      <motion.div

      initial={{x:-100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}
      
      
      className='max-w-4xl flex items-center flex-col justify-center md:block'>
        <h1 className='text-3xl font-semibold my-4'>Get Internationally Accredited by Bodsphere,from the comfort of your home.  </h1>
        <p className='text-slate-500 my-4'>
        Join the Bodsphere
        </p>
        <button className=' w-[200px] h-[40px] p-2 rounded-lg border border-black my-5 hover:text-orange-500'>Get Accredited</button>
      
      </motion.div>
      <motion.img
      initial={{x:100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}
      src={mobile} alt="moile" className='drop-shadow-2xl ' />
      
    </div>
  )
}

export default GetStarted
