import React from 'react'
import hero from '../assets/images/nv.jpg'

const Hero = () => {
  return (
    <div className='h-[80vh] w-screen'>
      <div className='absolute text-white  text-lg md:w-[400px] md:h-[300px] m-10 p-5'>
        <h1 className='text-4xl font-semibold'>Welcome to the Yogic World.</h1>
        <p> Yoga Teacher Trainings,Classes,Meditation,Pranayama,Music,Philosophy& More.
        </p>
        <p>Everything under $10.</p>
      </div>
      <img src={hero} className='h-[100%] w-full'/>
      
    </div>
  )
}

export default Hero
