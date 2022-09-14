import React from 'react'
import '../../../Assets/Styles/AboutPage/Contact/Contact.css'
import emailjs from 'emailjs-com'
function Contact() {

function sendMail(e:any){
e.preventDefault();

}
  return (
    <div className='container my-5'>
      <div className='Title'>
        <h1>Probleminiz var? <br />
          Bizlə əlaqə saxlayın! 👋 </h1>
      </div>
      <div className='container border' style={{
        marginTop: '50px', width: "50%",
        backgroundImage: `url(https://images.unsplash.com/photo-1617957689233-207e3cd3c610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVycGxlJTIwZ3JhZGllbnR8ZW58MHx8MHx8&w=1000&q=80)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <h1 style={{ marginTop: '25px' }}>Əlaqə</h1>
        <form className='row' onSubmit={sendMail} style={{ margin: "25px 85px 75px 100px" }}>
          <label>Ad</label>
          <input type='text' name='name' className='form-control' />

          <label>Email</label>
          <input type='text' name='user_email' className='form-control' />

          <label>Mesaj</label>
          <textarea name='message'   className='form-control'/>
          <input type='submit' value="Send" className='form-control btn btn-info' style={{marginTop:'30px'}} />
        </form>
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