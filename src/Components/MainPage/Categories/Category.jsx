import React from 'react'
import img from '../../../Assets/Images/Hero/icodes.png'
import '../../../Assets/Styles/MainPage/Category/CategoryCard.css'

function Category(props) {
  
  return (
    <div className=''>
    <div className=' cardd '>
        <div className='category_card'>
            <div className='cb-header'>
            {/* <i style={{}} className=" fa-solid fa-briefcase"></i> */}
                <img href='/#' style={{'width':'100px'}}  src={img} alt='value'/>
                
            </div>
            <div className='cb-body'>
                    <h3>
                    {props.product.name}
                    </h3>
                    <p>
                    Jobly vasitəsilə kateqoriyaya uyğun  işi və ya <br/> işçini tap!
                    </p>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Category