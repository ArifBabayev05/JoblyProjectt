
import React, { useRef, useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { auth } from '../Auth/Firebase/config';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../Redux/Slice/authSlice';
import contactImage from '../../Assets/Images/Hero/contactt.svg'
import tel from '../../Assets/Images/Hero/tel.png'

// const Result = () => {
//     return (
//        toast.success("Mesajınız Uğurla Göndərildi")
//     )
// }


const Contact = (props) => {
    const navigate = useNavigate();
    // const [menu, setMenu] = useState(false);
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
                    // console.log(uName);
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
                // const uid = user.uid;
                if (user.displayName == null) {
                    const u1 = user.email.substring(0, user.email.indexOf("@"));
                    const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
                    // console.log(uName);
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
    // const [result, setResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rp4rjam', 'template_s6wcke8', form.current, 'Lhg9k2LlEjFkq1WxD')
            .then((result) => {
                console.log(result.text);
                toast.success("Mesajınız Uğurla Göndərildi")
                
                
            }, (error) => {
                toast.error("Xəta Baş Verdi! Daha sonra yenidən cəhd edin!")
                console.log(error.text);
            });
        e.target.reset();
        // setResult(true);
    };
    setTimeout(() => {
        // setResult(false);
    }, 0)
    return (
        <div>
            <div class="contact3 mt-5 py-5">
                <div class="row no-gutters">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card-shadow">
                                    <img src={contactImage} class="img-fluid" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="contact-box ml-3">
                                    <h1 class="font-weight-light mt-2">Mesajı daxil edin</h1>
                                    <form class="mt-4" ref={form} onSubmit={sendEmail}>
                                        <div class="row">
                                            <div class="col-lg-12">
                                               
                                                <div class="form-group mt-2">
                                                    <input style={{'display': 'none'}} class="form-control" type="text" value={displayname} name="user_name" placeholder="name" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <input style={{'display': 'none'}} class="form-control" value={displaymail} name="user_email" type="email" placeholder="email address" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <textarea class="form-control" name="message" rows="8" placeholder="Mesajınızı Daxil Edin."></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <button type="submit" value="Send" style={{backgroundColor:"#785BF4"}} class="btn mt-3 submitBut  border-0 px-3 py-2"><span> Göndər</span></button>
                                                
                                            </div>
                                        </div>
                                    </form>
                                    <div className='row'>
                                        {/* {result ? <Result /> : null} */}
                                        <ToastContainer/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-5">
                                <div class="card mt-4  mb-4">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6">
                                            <div class="card-body d-flex justify-content-center text-center  align-items-center c-detail pl-0">
                                                <div class="mr-3 justify-content-center text-center align-self-center">
                                                </div>
                                                <div class="">
                                                    <h4 class="font-weight-medium">Email Ünvanımız</h4>
                                                    <p class="mail">
                                                        jobly@info.az </p>
                                                        
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6">
                                            <div class="card-body d-flex justify-content-center text-center  align-items-center c-detail">
                                                <div class="mr-3 justify-content-center text-center align-self-center">
                                                </div>
                                                <div class="">
                                                    <h4 class="font-weight-medium">Telefon nömrəmiz</h4>
                                                    <p type='tel' class="mail">+994774407050</p>
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