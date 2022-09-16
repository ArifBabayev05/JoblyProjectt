import React from 'react'
import img from '../../../Assets/Images/Hero/i-code.png'
import '../../../Assets/Styles/MainPage/Category/CategoryCard.css'

function Category(props) {
  
  // axios.get(`http://localhost:53410/api/Vacancies/getlistbycategory?categoryId=${props.product.id}`)
  // .then(res=>{
  //   console.log(res)
  // });
  
  
  return (
    <div className=''>
    <div className=' cardd '>
        <div  className='category_card'>
            <div className='cb-header'>
                <img src={img} alt='value'/>
                
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