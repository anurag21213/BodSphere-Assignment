import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Discover from '../component/Discover'
import Stats from '../component/Stats'
import GetStarted from '../component/GetStarted'
import Instructors from '../component/Instructors'
import Add from '../component/Add'
import Review from '../component/Review'
import Prizing from '../component/Prizing'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Stats/>
      <Discover/>
      <GetStarted/>
      <Instructors/>
      <Add/>
      <Review/>
      <Prizing/>
    </div>
  )
}

export default Home
