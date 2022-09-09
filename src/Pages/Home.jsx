import React from 'react'
import Hero from '../Components/MainPage/Main/Index'
import Testimonial from '../Components/MainPage/Info/index'
import Statistics from '../Components/MainPage/Statistics/Index'
import Image from '../Components/MainPage/Image/Index'
import Choose from  '../Components/MainPage/Choose/Index'
import Category from  '../Components/MainPage/Categories/Index'
import Slider from '../Components/MainPage/Slider/Index'
function Home() {
  return (
    <div>
            
            <Hero/>
            <Choose/>
            <Category/>
      <Testimonial/>
      <Slider/>
      <Statistics/>
      <Image/>

    </div>
  )
}

export default Home