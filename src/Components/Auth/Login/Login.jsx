import { useState } from 'react'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/config'
import Loader from '../../Jobs/Loader'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import image from '../../../Assets/Images/Hero/l.svg'



function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // const user = result.user;
                toast.success("Qeydiyyat Uğurludur!")
                navigate("/")
            }).catch((error) => {
                toast.error(error.message)


            });

    }
    const loginUser = (e) => {
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success("Uğurla Tamamlandı!");
                const user = userCredential.user;
                console.log(user);
                setLoading(false);
                navigate("/")

            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
    }

    return (
        // <section className='container text-center'>
        //     <div className='form'>
        //         <h2>Login</h2>
        //         <form onSubmit={loginUser}>
        //             <div>
        //                 <input type='text' className='m-2' placeholder='Emaili daxil edin.'
        //                     required value={email} onChange={(e) => setEmail(e.target.value)} />
        //                 <input type='text' className='m-2' placeholder='Şifrəni daxil edin.'
        //                     required value={password} onChange={(e) => setPassword(e.target.value)} />
        //             </div>
        //             {loading && <Loader />}
        //             <button  className='btn btn-primary'>Daxil Olun</button>
        //             <div className='links'>
        //                 <Link to='/reset'>
        //                     Şifrəni Yenilə
        //                 </Link>
        //             </div>
        //             <p>-- və ya --</p>
        //         </form>
        //         <ToastContainer />
        //         <button type='submit' onClick={signInWithGoogle} className='btn btn-danger'> Google ilə Daxil Olun</button>
        //         <p>
        //             Hesabınız Yoxdur?
        //             <Link to='/register'>Qeydiyyatdan Keçin</Link>
        //         </p>
        //     </div>
        // </section>

        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center mb-5">
                        <img src={image} alt="Image" class="img-fluid" />
                    </div>
                    <div class="col-md-6 contents">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="mb-4">
                                    <h3>Daxil Ol</h3>
                                    <p class="mb-4 text-secondary">Daxil olaraq iş elanlarına müraciət edin və xəyalınızdakı işi tapın!</p>
                                </div>
                                <form action="#" onSubmit={loginUser} >
                                    <div class="form-group a first">

                                        <input type="text" class="form-control a" id="username" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />

                                    </div>
                                    <div class="form-group last mb-4">

                                        <input type="password" class="color-white a form-control" placeholder='Şifrə' id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

                                    </div>

                                    <div class="d-flex mb-3 align-items-center">

                                        <Link to='/reset'>
                                            Şifrəni Yenilə
                                        </Link>
                                    </div>
                                        <p className='mb-4'>
                                            Hesabınız Yoxdur?
                                            <Link style={{'textDecoration':'none'}} to='/register'>&nbsp; &nbsp;Qeydiyyatdan Keçin</Link>
                                        </p>
                                    {loading && <Loader />}
                                    <input type="submit" value="Daxil Olun" class="login " />

                                    <span class="d-block text-left my-4 text-muted">&mdash; &mdash; və ya &mdash; &mdash; </span>

                                    <div class="social-login mb-5">


                                        <div class="google-btn">

                                            <div class="google-icon-wrapper">
                                                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                            </div>

                                            <p type='submit' onClick={signInWithGoogle} class="btn-text"><b>Google ilə daxil olun</b></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login