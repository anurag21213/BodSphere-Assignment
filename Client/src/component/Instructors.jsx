import React from 'react'
import Slider from "react-slick";
import i1 from '../assets/images/i1.jpg'
import i2 from '../assets/images/i2.jpg'

const Instructors = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className=' '>
            <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-semibold'>Meet Our Instructors</h1>
                    <p className='text-slate-500'>We work with the finest professionals</p>
            </div>
            <Slider {...settings} className='overflow-hidden my-5'>
                <div className=' p-3 flex flex-col items-center justify-center' >
                    <img src={i1} alt="i1" />
                    <h1 className='font-semibold text-xl'>Preetika Bhatnagar</h1>
                </div>
                <div className=' p-3 flex flex-col items-center justify-center' >
                    <img src={i2} alt="i1" />
                    <h1 className='font-semibold text-xl'>Smarthya Bhatnagar</h1>
                </div>
                <div className=' p-3 flex flex-col items-center justify-center' >
                    <img src={i1} alt="i1" />
                    <h1 className='font-semibold text-xl'>Preetika Bhatnagar</h1>
                </div>
                <div className=' p-3 flex flex-col items-center justify-center' >
                    <img src={i2} alt="i1" />
                    <h1 className='font-semibold text-xl'>Smarthya Bhatnagar</h1>
                </div>
                <div className='p-3 flex flex-col items-center justify-center' >
                    <img src={i1} alt="i1" />
                    <h1 className='font-semibold text-xl'>Preetika Bhatnagar</h1>
                </div>
                <div className=' p-3 flex flex-col items-center justify-center' >
                    <img src={i2} alt="i1" />
                    <h1 className='font-semibold text-xl'>Smarthya Bhatnagar</h1>
                </div>
                <div className=' p-3 flex flex-col items-center justify-center' >
                    <img src={i2} alt="i1" />
                    <h1 className='font-semibold text-xl'>Preetika Bhatnagar</h1>
                </div>
               
               
                
            </Slider>
        </div>
    )
}

export default Instructors
