import React from 'react'
import { discoverdata } from '../database/discoverdata'
import Card from './Card'

const Discover = () => {
    console.log(discoverdata);

    return (
        <div className=' flex items-center justify-center flex-col'>
            <h1 className='text-4xl font-semibold'>Discover Your Yogic Path</h1>
            <p className='text-slate-600'>Join aor community and transform your yoga practice today.</p>

            <div className=' flex items-center justify-center md:justify-between gap-5 my-5 flex-wrap'>
                {
                    discoverdata.map((data, index) =>
                        <Card key={index} data={data} />
                    )
                }
            </div>


        </div>
    )
}

export default Discover
