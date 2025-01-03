import React from 'react'
import ad from '../assets/images/ad.jpg'

const Add = () => {
  return (
    <div className=' flex items-center justify-evenly'>
      <img src={ad} alt='ad' className='w-[500px] h-[600px] rounded-lg drop-shadow-xl'  />
      <div>
        <h1 className='text-4xl font-semibold my-5'>Yoga Like Never Before</h1>
        <p className='text-slate-500 my-5'>Becoming a yoga teacher has never been so easy.</p>
        <div className='my-5'>
            <button className='w-[200px] h-[55px] text-xl text-white bg-black rounded-lg'>Apple Store</button>
            <button className='w-[200px] h-[55px] text-xl text-white bg-black rounded-lg mx-4'>Play Store</button>
        </div>
      </div>
    </div>
  )
}

export default Add
