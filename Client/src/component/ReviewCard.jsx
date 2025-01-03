import React from 'react'

const ReviewCard = ({ data }) => {
    return (
        
            <div className='w-[350px] h-[200px] bg-slate-200 p-5 flex flex-col items-center justify-center rounded-lg drop-shadow-xl  '>
                <h1 className='text-xl font-medium'>{data.review}</h1>
                <p className='text-lg '>{data.name}</p>
            </div>
        

    )
}

export default ReviewCard