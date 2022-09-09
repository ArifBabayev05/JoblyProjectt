import React from 'react'
import Image from '../../../Assets/Images/Hero/img.png'
import '../../../Assets/Styles/MainPage/Image/Image.css'

function Index() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-12'>
                <img className='img' src={Image} alt='some value'/>
            </div>
        </div>
    </div>
  )
}

export default Index