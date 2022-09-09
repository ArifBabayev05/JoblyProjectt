import '../../../Assets/Styles/MainPage/Testimonial/Testimonail.css'
import React from 'react'
import info1 from '../../../Assets/Images/Hero/s-info1.png'
import info2 from '../../../Assets/Images/Hero/s-info2.png'
import info3 from '../../../Assets/Images/Hero/s-info3.png'


function index() {
  return (
    <div className='container'>
      <h2 className='fw-bold my-5'>Biz kimik?</h2>

      <div className='row mt-5 '>
        <div className='info col col-lg-4'>
          <img src={info3}  alt='some value'/>

          <h3 className='mt-5 mb-4 fw-bold'>Daxil olun</h3>
          <p className=''>Daxil olaraq, məlumatlarınızın 
              bir çox şirkət tərəfindən 
              görünməsi şansını əldə et.</p>

          <a href='/#' className='mt-5 '>Daha çox</a>    
        </div>
        <div className='info col-lg-4'>
          <img src={info2}  alt='some value'/>

          <h3 className='mt-5 mb-4 fw-bold'>Cv yerləşdirin</h3>
          <p className=''>Öz şəxsi CV-ni məlumatlar hissəsinə yerləşdirərək 
    daha çox iş imkanları əldə et.</p>

          <a href='/#' className='mt-5 '>Daha çox</a>    
        </div>
        <div className='info col-lg-4'>
          <img src={info1}  alt='some value'/>

          <h3 className='mt-5 mb-4 fw-bold'>İş Axtarın</h3>
          <p className=''>Yeni iş imkanlarını kəşf edin və karyeranızda növbəti <br/> addımı atın.</p>

          <a href='/#' className='mt-5'>Daha çox</a>    
        </div>
      </div>

    </div>
  )
}

export default index