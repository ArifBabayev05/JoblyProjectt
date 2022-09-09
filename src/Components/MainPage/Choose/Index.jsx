import React from 'react'
import '../../../Assets/Styles/MainPage/Choose/Choose.css'
import user1 from '../../../Assets/Images/Hero/u1.png'
// import user1Add from '../../../Assets/Images/Hero/u1a.png'

import user2 from '../../../Assets/Images/Hero/u2.png'
// import user2Add from '../../../Assets/Images/Hero/u2a.png'



function Index() {
  return (
    <div className='container user_type'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='user_type_inner  user_type_seeker'>
                    <a href='/job'>
                        <div className='usertype_img'>
                            <img alt='value' src={user1}/>
                            {/* <img alt='value' src={user1Add} classname='usertype-addon'/> */}
                        </div>
                        <div >
                            <h3>İş Axtarıram</h3>
                            <p>CV'ni paylaş və sevdiyin işi tap!</p>
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </a>

                </div>
            </div>
            <div className='col-md-6'>
                <div className='user_type_inner  user_type_seeker'>
                    <a href='/job'>
                        <div className='usertype_img'>
                            <img alt='value' src={user2}/>
                            {/* <img alt='value' src={user2Add} classname='usertype-addon'/> */}
                        </div>
                        <div>
                            <h3>İşçi Axtarıram</h3>
                            <p>Vakansiyanı paylaş,  <br/> sizə uyğun mütəxəssisi tap!</p>
                            <i class="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Index