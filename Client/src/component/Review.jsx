import React from 'react'
import Slider from "react-slick";
import { reviewdata } from '../database/reviewdata';
import ReviewCard from './ReviewCard';


const Review = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <div className=' my-9'>
            <div className='flex flex-col items-center justify-center my-5'>
                    <h1 className='text-3xl font-semibold'>What they say about Bodsphere</h1>
                
            </div>
            <Slider {...settings} className='overflow-hidden my-5'>
                {
                    reviewdata.map((item,index)=><ReviewCard key={index} data={item} />)
                }
            </Slider>
        </div>
    )
}

export default Review
