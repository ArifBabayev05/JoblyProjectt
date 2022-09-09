import React from 'react'
import '../../../Assets/Styles/AboutPage/Hero/Hero.css'
function Hero() {
  return (
    <div>
      <div className='about container'>
        <div className='MainText mt-5'>
          <h1><span>Jobly</span> haqqında</h1>
        </div>
        <div className='subHeading d-flex mt-3'>
          <div className='row'>
            <div className='text'>
              <p><strong>Missiyamız</strong> işəgötürmə prosesini asanlaşdıracaq innovativ vahid mərkəzli platformanı yaradaraq insan resurları mütəxəssislərinə kömək etmək və həm də iş axtaran insanlara yeni fürsətlər təklif edərək töhfə verməkdir.
              </p>

              <p>
                <strong>Vizyonumuz</strong> HR mütəxəssisləri üçün işə qəbul prosesini asanlıqla idarə etmək üçün unikal imkanlar yaratmaq və iş axtaranlara bir kliklə ən uyğun işləri tapmaqda kömək etməkdir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}

export default Hero