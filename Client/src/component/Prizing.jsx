import React from 'react'

const Prizing = () => {
  return (
    <div className='my-5 max-w-7xl bg-pink-600 drop-shadow-2xl rounded-xl mx-auto  text-white p-6 flex items-center justify-center md:justify-evenly flex-wrap '>
      <div className='font-semibold p-5'>
        <h1 className='text-3xl my-5'>Get Unlimited access to everyhing.</h1>
        <p className='my-5'>Unlimited access to all yoga teachers trainings....</p>
        <ul className='list-disc my-5'>
            <li>30 hrs yoga</li>
            <li>30 hrs yoga</li>
            <li>30 hrs yoga</li>
            <li>30 hrs yoga</li>
            <li>30 hrs yoga</li>
            <li>30 hrs yoga</li>
            <li>30 hrs yoga</li>
            <li>30 hrs yoga</li>
            <li>30 hrs yoga</li>
        </ul>
      </div>
      <div className=' drop-shadow-xl w-[300px] p-5 rounded-lg font-semibold bg-slate-200 text-black flex items-center justify-center flex-col gap-4'>
            <h2>Become a part of Bodsphare yogic Revolution</h2>
            
            <div className='w-[250px] h-[80px] rounded-lg bg-white flex items-center justify-between p-4 cursor-pointer hover:bg-pink-200'>
                <h1>Monthly</h1>
                <h1>$10</h1>
            </div>
            <div className='w-[250px] h-[80px] rounded-lg bg-white flex items-center justify-between p-4 cursor-pointer hover:bg-pink-200'>
                <h1>Quaterly</h1>
                <h1>$40</h1>
            </div>
            <div className='w-[250px] h-[80px] rounded-lg bg-white flex items-center justify-between p-4 cursor-pointer hover:bg-pink-200'>
                <h1>Yearly</h1>
                <h1>$100</h1>
            </div>
            
      </div>
    </div>
  )
}

export default Prizing
