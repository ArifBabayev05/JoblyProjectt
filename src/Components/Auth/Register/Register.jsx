import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/config'
// import Loader from '../../Jobs/Loader'
import image from '../../../Assets/Images/Hero/lq.svg'


function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  // setLoading(true);
  // console.log(password, cPassword)
  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Şifrədə yanlışlıq var!")
    }
    setLoading(true);
    // else{
    //   toast.success("Qeydiyyat Uğurludur!")
    // }

    if(password==cPassword){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Qeydiyyat Uğurludur!")
        ////////////////////////////////////////////////////////////////////////////////
        // const user = userCredential.user;
        ////////////////////////////////////////////////////////////////////////////////
        setLoading(false);
        // console.log(user);
        navigate('/')

      })
      .catch((error) => {
        toast.error(error.message)
        setLoading(false);
      });
    }
  }



  return (

    <div className="content">
      <div className="container">
        <div className="row">
          
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>Qeydiyyat</h3>
                  <p className="mb-4 text-secondary">Qeydiyyatdan keçərək bizimlə iş dünyasına daha da yaxınlaşın</p>
                </div>
                <form action="#" onSubmit={registerUser} >
                  <div className="form-group a first">

                    <input type='text' className='m-2 form-control a' placeholder='Emaili daxil edin.'
                      required value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                  </div>
                  <div className="form-group ">

                  <input type='password' className='m-2 a form-control' placeholder='Şifrəni daxil edin.' required value={password} onChange={(e) => setPassword(e.target.value)} />

                  </div>
                  <div className="form-group last mb-4">
                  <input type='password' className='m-2 a form-control' placeholder='Şifrəni yenidən daxil edin.' required value={cPassword} onChange={(e) => setCPassword(e.target.value)} />

                  </div>

                  


                  <p className='mb-4'>
                    Hesabınız Var?
                    <Link style={{ 'textDecoration': 'none' }} to='/login'>&nbsp; &nbsp;Daxil Olun</Link>
                  </p>
                  {loading && <p>Yüklənir...</p>}
                  <button type="submit" value="Daxil Olun"  className="login ">Daxil Olun</button>
                  

                  <span className="d-block text-left my-4 text-muted"> </span>


                </form>
                <ToastContainer/>
              </div>
            </div>

          </div>

          <div className="col-md-6 d-flex justify-content-center mb-5">
            <img src={image} alt="Imagsdae" className="img-fluid" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Register