import React from 'react'
import img from '../../../Assets/Images/Hero/i-code.png'
import '../../../Assets/Styles/MainPage/Category/CategoryCard.css'

function Category(props) {
  return (
    <div className=''>
    <div className=' cardd '>
        <div className='category_card'>
            <div className='cb-header'>
                <img src={img} alt='value'/>
                {/* <span className='job_count'>123</span> */}
            </div>
            <div className='cb-body'>
                    <h3>
                    {props.product.name}
                    </h3>
                    <p>
                    Software Engineer, Web / Mobile Developer & More
                    </p>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Category