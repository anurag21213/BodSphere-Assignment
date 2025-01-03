import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import bg from '../assets/images/bg.jpg'
import pr from '../assets/images/desktop.png'

import { motion } from 'framer-motion'

const Promo = () => {
    return (
        <div className='md:h-[450px] overflow-hidden  flex flex-col justify-center items-center md:items-baseline my-5'>
            <motion.div 

            initial={{ x:-200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            
            className='absolute md:w-[400px]  md:mx-10 p-5'>

                <h1 className='text-3xl text-white my-2'>Download the application</h1>
                <p className='text-slate-400 my-2'>Get unlimited access to Yoga Teacher Trainings,Classes,Meditation,Pranayama,Music,Philosophy& More.</p>
                <div className='flex w-full items-center justify-between'>
                    <button className='w-[150px] h-[45px] outline-none rounded-md  my-5 bg-black text-white flex items-center justify-center hover:scale-105'><AppleIcon />Apple Store</button>
                    <button className='w-[150px] h-[45px] outline-none rounded-md  my-5 text-white bg-black flex items-center justify-center hover:scale-105'><PlayArrowIcon />Play Store</button>
                </div>

            </motion.div>


            <img src={bg} alt='meditation' className='h-full w-full rounded-3xl' />
        </div>
    )
}

export default Promo
