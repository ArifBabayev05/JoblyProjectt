import React from 'react'
import '../../../Assets/Styles/AboutPage/Image/Image.css'
import image from '../../../Assets/Images/Hero/about.png'

function Image() {
  return (
    <div className='container image'>
        <img src={image} alt='value'/>
    </div>
  )
}

export default Image