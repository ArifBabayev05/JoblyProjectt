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
      <div className=''>
        {/* <h1 style={{ marginTop: '25px' }}>Əlaqə</h1> */}
        <ContactForm/>
      </div>
      
    </div>
  )
}

export default Contact