import { useState } from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Reset.css'
import { auth } from '../Firebase/config'
// import Loader from '../../Jobs/Loader'
import { sendPasswordResetEmail } from 'firebase/auth';
import Loader from '../../Jobs/Loader'
import image from '../../../Assets/Images/Hero/lr.svg'

function Reset() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const resetPassword = (e) => {
    setLoading(true);
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
      setLoading(false)

        toast.success("Email ünvanınıza yeni şifrə göndərildi.")
      }).catch((error) => {
        toast.error("Bu email ünvanı ilə qeydiyyatdan keçilməyib.")

      });
  }
  return (
    //     <section className=' container text-center'>
    //     <div className='form'>
    //         <h2>Şifrəni Yenilə</h2>
    //         <form onSubmit={resetPassword}>
    //             <div>
    //             <input type='text' className='m-2' placeholder='Emaili daxil edin.' required
    //               value={email} onChange={(e)=>setEmail(e.target.value)} />

    //             </div>
    //             <button type='submit' className='btn btn-primary'>Şifrəni Yenilə</button>
    //             <ToastContainer/>
    //         </form>
    //         <p>
    //             <Link to='/login'>Daxil Olun</Link>
    //             <Link to='/register'>Qeydiyyatdan Keçin</Link>

    //         </p>
    //     </div>
    // </section>
    <div className="content">
      <div className="container">
        <div className="row">

        <div className="col-md-6 d-flex justify-content-center mb-5">
            <img src={image} alt="Image" className="img-fluid" />
          </div>
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                  <h3>Şifrəni Yenilə</h3>
                  <p className="mb-4 text-secondary">Emaili daxil edərək, şifrənin yenilənməsi haqqında mesaj alın.</p>
                </div>
                <form action="#" onSubmit={resetPassword} >
                    {loading && <Loader />}
                  <div className="form-group mb-4 a first last">

                    <input type='text' className='m-2 form-control a' placeholder='Emaili daxil edin.'
                      required value={email} onChange={(e) => setEmail(e.target.value)} />

                  </div>

                  <p className='mb-4'>

                    <Link to='/login'>Daxil Olun</Link>
                  </p>
                  <p className='mb-4'>
                  
                  <Link to='/register'>Qeydiyyatdan Keçin</Link>
                  </p>
                  {loading && <Loader />}
                  <input type="submit" value="Şifrəni Yeniləyin" className="login " />

                  <span className="d-block text-left my-4 text-muted"> </span>


                </form>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Reset