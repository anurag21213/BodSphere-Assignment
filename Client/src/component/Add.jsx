import React from 'react'
import ad from '../assets/images/ad.jpg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';

import {motion} from 'framer-motion'

const Add = () => {
  return (
    <div className=' flex items-center justify-evenly'>
      <motion.img 
      initial={{x:-100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}
      
      src={ad} alt='ad' className='w-[500px] h-[600px] rounded-lg drop-shadow-xl hidden lg:block'  />
      <motion.div
      initial={{x:100,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}

      >
      
        <h1 className='text-4xl font-semibold my-5'>Yoga Like Never Before</h1>
        <p className='text-slate-500 my-5'>Becoming a yoga teacher has never been so easy.</p>
        <div className='my-5'>
            <button className='w-[200px] h-[55px] text-xl text-white bg-black rounded-lg'><AppleIcon/> Apple Store</button>
            <button className='w-[200px] h-[55px] text-xl text-white bg-black rounded-lg mx-4'><PlayArrowIcon/> Play Store</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Add
