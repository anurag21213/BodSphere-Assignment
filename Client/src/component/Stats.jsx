import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-wrap items-center justify-center md:justify-between p-5'>
        <div className='p-5 flex items-center justify-center flex-col'>
          <h1 className='font-semibold text-3xl'>192+</h1>
          <p className='text-slate-700'>Countries</p>
        </div>
        <div className='p-5 flex items-center justify-center flex-col'>
          <h1 className='font-semibold text-3xl'>1000+</h1>
          <p className='text-slate-700'>On Demand Classes</p>
        </div>
        <div className='p-5 flex items-center justify-center flex-col'>
          <h1 className='font-semibold text-3xl'>100K</h1>
          <p className='text-slate-700'>Members</p>
        </div>
      </div>
  )
}

export default Stats
