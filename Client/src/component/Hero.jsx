import React from 'react'
import hero from '../assets/images/nv.jpg'

import {motion} from 'framer-motion'
import { duration } from '@mui/material'

const Hero = () => {
  return (
    <div className='h-[80vh] w-screen'>
      <motion.div

      initial={{y:100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}
      
      className='absolute text-white  text-lg md:w-[400px] md:h-[300px] m-10 p-5'>
        <h1 className='text-4xl font-semibold'>Welcome to the Yogic World.</h1>
        <p> Yoga Teacher Trainings,Classes,Meditation,Pranayama,Music,Philosophy& More.
        </p>
        <p>Everything under $10.</p>
      </motion.div>
      <img src={hero} className='h-[100%] w-full'/>
      
    </div>
  )
}

export default Hero
