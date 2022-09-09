import { useEffect, useState, } from 'react'
import '../../Assets/Styles/Layout/Header.css'
import logo from '../../Assets/Images/Logo/1.png'
import { signOut } from "firebase/auth";
import { auth } from '../../Components/Auth/Firebase/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../Redux/Slice/authSlice';
import { ShowOnLogin, ShowOnLogout } from '../HiddenLinks/HiddenLinks';
import { ShowOnAdmin } from '../HiddenLinks/Router';

function Index() {
  const navigate = useNavigate();
  // const [menu, setMenu] = useState(false);
  const [displayname, setDisplayName] = useState("");
  const dispatch = useDispatch()

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Hesabdan çıxış uğurla tamamlandı!");
      navigate('/')

    }).catch((error) => {
      toast.error(error.message)
    });


  }
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

  return (
    <div className=''>
      <nav className="navbar navbar-light ">
        <div className="container container-fluid">
          <a href='/#'>
            <img src={logo} alt='' />

          </a>

          <form className="d-flex">

            <div className='d-flex search'>

              <i className="fa-solid mt-1 me-2 fa-magnifying-glass"></i>
              <a href='/job' className='fw-600'>İş Axtarın</a>
            </div>

            <div className='d-flex search mx-2'>
              <ShowOnLogin>

                <div class="dropdown ms-3">
                  <a style={{'cursor':'pointer'}} class="dropdown-toggle" href='/#'  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Profilim
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="/#">Salam {displayname}</a></li>
                    <li><a class="dropdown-item" href="/#"> Tənzimləmələr</a></li>
                    <li><a class="dropdown-item" href="/#" onClick={logoutUser} >Çıxış</a></li>
                  </ul>
                </div>

              </ShowOnLogin>
            </div>
              <ShowOnAdmin>
                <a>Hi Admin</a>
                
              </ShowOnAdmin>



            <div>
              <ShowOnLogout>
                <Link to='/login'>Daxil Olun</Link>
              </ShowOnLogout>
             
              <ToastContainer />

            </div>
          </form>
        </div>
      </nav>

    </div>
  );
}


export default Index


