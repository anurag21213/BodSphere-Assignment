import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const Stats = () => {
  




  return (
    <div className='flex flex-wrap items-center justify-center md:justify-between p-5'>
        <motion.div

        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        
        className='p-5 flex items-center justify-center flex-col'>
          <h1 className='font-semibold text-3xl'>190+</h1>
          <p className='text-slate-700'>Countries</p>
        </motion.div>
        <motion.div
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1.5}}
        viewport={{once:true}}
        
        className='p-5 flex items-center justify-center flex-col'>
          <h1 className='font-semibold text-3xl'>1000+</h1>
          <p className='text-slate-700'>On Demand Classes</p>
        </motion.div>
        <motion.div
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:2}}
        viewport={{once:true}}
        
        className='p-5 flex items-center justify-center flex-col'>
          <h1 className='font-semibold text-3xl'>100K</h1>
          <p className='text-slate-700'>Members</p>
        </motion.div>
      </div>
  )
}

export default Stats
