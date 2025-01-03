import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <footer>
            <div className='flex-col flex md:flex-row flex-wrap justify-evenly items-center'>
                <div className='md:w-[400px]  md:mx-10 p-5 my-5'>

                    <h2 className='text-3xl font-semibold'><span className='text-orange-500'>BOD</span> SPHERE</h2>
                    <p className='text-slate-400 my-2'>Get unlimited access to Yoga Teacher Trainings,Classes,Meditation,Pranayama,Music,Philosophy& More.</p>
                    <div className='flex w-full items-center justify-between'>
                        <button className='w-[150px] h-[45px] outline-none rounded-md  my-5 bg-black text-white flex items-center justify-center hover:scale-105'><AppleIcon />Apple Store</button>
                        <button className='w-[150px] h-[45px] outline-none rounded-md  my-5 text-white bg-black flex items-center justify-center hover:scale-105'><PlayArrowIcon />Play Store</button>
                    </div>

                </div>
                <div className='flex items-center justify-center space-x-20 flex-wrap my-5'>
                    <h1 className='font-semibold text-3xl'>FAQ</h1>
                    <h1 className='font-semibold text-3xl'>Contact Us</h1>
                    
                </div>
                <div className='flex items-center flex-col justify-between my-5 '>
                        <h1>Follow Bodsphere</h1>
                        <div className='flex items-center justify-center space-x-2 text-3xl'>
                            <InstagramIcon fontSize='large'/>
                            <LinkedInIcon fontSize='large'/>
                            <FacebookIcon fontSize='large'/>
                            <YouTubeIcon fontSize='large'/>
                        </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <h1><CopyrightIcon/> 2024 Bodsphere All Rights Reserved</h1>
            </div>
        </footer>
    )
}

export default Footer
