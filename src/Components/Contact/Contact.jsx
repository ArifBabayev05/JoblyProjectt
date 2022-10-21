import React, { useRef, useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { auth } from '../Auth/Firebase/config';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../Redux/Slice/authSlice';
import contactImage from '../../Assets/Images/Hero/contactt.svg'
import { ShowOnLogin, ShowOnLogout } from '../../Layouts/HiddenLinks/HiddenLinks';
import Loader from '../Jobs/Loader';



const Contact = (props) => {
    
    const [displayname, setDisplayName] = useState("");
    const [displaymail, setDisplayMail] = useState("");
    

    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                if (user.email == null) {
                    const u2 = user.email.substring(0, user.email.indexOf("@"));
                    const u2Name = u2.charAt(0).toUpperCase() + u2.slice(1);
                    
                    setDisplayMail(u2Name);

                } else {
                    setDisplayMail(user.email)
                }
                dispatch(SET_ACTIVE_USER({
                    email: user.email,
                    userName: user.displayName ? user.displayName : displayname,
                    userId: user.uid,
                }))
            } else {
                setDisplayMail("")
                dispatch(REMOVE_ACTIVE_USER())
            };
        })
    }, [dispatch, displaymail]);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
               
                if (user.displayName == null) {
                    const u1 = user.email.substring(0, user.email.indexOf("@"));
                    const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
                    
                    setDisplayName(uName);

                } else {
                    setDisplayName(user.displayName)
                }
                dispatch(SET_ACTIVE_USER({
                    email: user.email,
                    userName: user.displayName ? user.displayName : displayname,
                    userId: user.uid,
                }))
            } else {
                setDisplayName("")
                dispatch(REMOVE_ACTIVE_USER())
            };
        })
    }, [dispatch, displayname]);

    const form = useRef();
    

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_rp4rjam', 'template_s6wcke8', form.current, 'Lhg9k2LlEjFkq1WxD')
            .then((result) => {
                setLoading(false)
                toast.success("Mesajınız Uğurla Göndərildi")
            }, (error) => {
                setLoading(false)
                toast.error("Xəta Baş Verdi! Daha sonra yenidən cəhd edin!")
                
            });
        e.target.reset();
        
    };
    setTimeout(() => {
    }, 0)
    return (
        <div>
            <div className="contact3 mt-5 py-5">
                <div className="row no-gutters">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card-shadow">
                                    <img alt='value' src={contactImage} className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-box ml-3">
                                    <h1 className="font-weight-light mt-2">Mesajı daxil edin</h1>
                                    <form className="mt-4" ref={form} onSubmit={sendEmail}>
                                        <div className="row">
                                            <div className="col-lg-12">
                                               
                                                <div className="form-group mt-2">
                                                    <input style={{'display': 'none'}} className="form-control" type="text" value={displayname} name="user_name" placeholder="name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input style={{'display': 'none'}} className="form-control" value={displaymail} name="user_email" type="email" placeholder="email address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <textarea className="form-control" required name="message" rows="8" placeholder="Mesajınızı Daxil Edin."></textarea>
                                                </div>
                                            </div>
                                            {loading && <Loader />}

                                            <ShowOnLogin>

                                            <div className="col-lg-12">
                                                <button type="submit" value="Send" style={{backgroundColor:"#785BF4"}} className="btn mt-3 submitBut  border-0 px-3 py-2"><span> Göndər</span></button>
                                                
                                            </div>
                                            </ShowOnLogin>
                                            <ShowOnLogout>

                                            <div className="col-lg-12">
                                                <a href='/login' value="Daxil Olun" style={{backgroundColor:"#785BF4"}} className="btn mt-3 submitBut  border-0 px-3 py-2"><span> Daxil Olun</span></a>
                                            </div>
                                            </ShowOnLogout>
                                        </div>
                                    </form>
                                    <div className='row'>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-5">
                                <div className="card mt-4  mb-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="card-body d-flex justify-content-center text-center  align-items-center c-detail pl-0">
                                                <div className="mr-3 justify-content-center text-center align-self-center">
                                                </div>
                                                <div className="">
                                                    <h4 className="font-weight-medium">Email Ünvanımız</h4>
                                                    <p className="mail">
                                                        jobly@info.az </p>
                                                        
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="card-body d-flex justify-content-center text-center  align-items-center c-detail">
                                                <div className="mr-3 justify-content-center text-center align-self-center">
                                                </div>
                                                <div className="">
                                                    <h4 className="font-weight-medium">Telefon nömrəmiz</h4>
                                                    <p type='tel' className="mail">+994774407050</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact