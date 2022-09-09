import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import logo from '../../Assets/Images/Logo/1.png'
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import '../../Assets/Styles/Layout/Header.css'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Components/Auth/Firebase/config'
import Loader from '../../Components/Jobs/Loader'


function Header() {
  const navigate = useNavigate();
  // const [menu, setMenu] = useState(false);
  // const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);


  const logoutUser = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      // toast.success("Hesabdan çıxış uğurla tamamlandı!");
      
    }).catch((error) => {
      toast.error(error.message)
    });

  }

  // useEffect( () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       setName(user.displayName)

  //     } else {
  //       setName("")
  //     };
  //   })
  // },[]);
  
    return (
      <div className=''>
        <nav className="navbar navbar-light ">
          <div className="container container-fluid">
            <a href='/#'>
              <img src={logo} alt='' />
            </a>

            <form className="d-flex">
              <div className='d-flex search mx-4'>

                <i className="fa-solid mt-1 me-2 fa-magnifying-glass"></i>
                <a href='/#' className='fw-600'>Salam </a>
              </div>
              <div className='d-flex search mx-4'>

                <i className="fa-solid mt-1 me-2 fa-magnifying-glass"></i>
                <a href='/job' className='fw-600'>İş Axtarın</a>
              </div>

              <div>
                <a href='/login'>Daxil Olun</a>
                <Link className='ms-1' onclick={logoutUser} href='/'>Çıxış</Link>
                <ToastContainer />

              </div>
            </form>
          </div>
        </nav>

      </div>
    )
}

export default Header