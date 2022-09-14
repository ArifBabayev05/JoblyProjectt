import React from 'react'
import '../../../Assets/Styles/AboutPage/Contact/Contact.css'
import emailjs from 'emailjs-com'
import ContactForm from '../../Contact/Contact'

function Contact() {

  return (
    <div className='container my-5'>
      <div className='Title'>
        <h1>Probleminiz var? <br />
          Bizlə əlaqə saxlayın! 👋 </h1>
      </div>
      <div className='border'>
        {/* <h1 style={{ marginTop: '25px' }}>Əlaqə</h1> */}
        <ContactForm/>
      </div>
      <div className='infos'>
        <div className='row'>
          <div className='add col-lg-6'>
            <h3>E - Poçt:</h3>
            <a href='/#'>jobfier@info.az</a>
          </div>

          <div className='add col-lg-6'>
            <h3>Əlaqə nömrəsi:</h3>
            <a href='/#' >+994 77 440 70 50</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact