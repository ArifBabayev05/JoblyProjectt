import React from 'react'
import { useEffect, useState, } from 'react'
import '../../Assets/Styles/User/UserSettings.css'
import { auth } from '../../Components/Auth/Firebase/config'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, updateEmail, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux'
// import { ShowOnLogin, ShowOnLogout } from '../../Layouts/HiddenLinks/HiddenLinks'
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../Redux/Slice/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const UpdateProfile = () => {
  const nav = useNavigate();
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  // const [tel, setTel] = useState("")
  // const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("");
  const [displayTel, setDisplayTel] = useState("");
  const [displayname, setDisplayNames] = useState("");
  const [displaymail, setDisplayMail] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

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

      if (user.email == null) {
        const u3 = user.email.substring(0, user.email.indexOf("@"));
        const u3Name = u3.charAt(0).toUpperCase() + u3.slice(1);
        // console.log(uName);
        setDisplayTel(u3Name);

      }
       else {
        setDisplayTel(user.email)
      }
      dispatch(SET_ACTIVE_USER({
        email: user.email,
        phoneNumber : user.phoneNumber,
        userName: user.displayName ? user.displayName : displayname,
        userId: user.uid,
      }))
    } else {
      setDisplayTel("")
      dispatch(REMOVE_ACTIVE_USER())
    };
  })
}, [dispatch, displayTel]);


useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // const uid = user.uid;
      if (user.displayName == null) {
        const u1 = user.email.substring(0, user.email.indexOf("@"));
        const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
        // console.log(uName);
        setDisplayNames(uName);

      } else {
        setDisplayNames(user.displayName)
      }
      dispatch(SET_ACTIVE_USER({
        email: user.email,
        userName: user.displayName ? user.displayName : displayname,
        userId: user.uid,
      }))
    } else {
      setDisplayNames("")
      dispatch(REMOVE_ACTIVE_USER())
    };
  })
}, [dispatch, displayname]);


const update = (e) => {
  e.preventDefault();
  nav('/')
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName
  }).then(() => {
    
    toast.success("Uğurla Yeniləndi!")
  }).catch((error) => {
    
    toast.error("Xəta baş verdi")

  });
  updateEmail(auth.currentUser, email).then(() => {
    
  }).catch((error) => {
    
  });
  // updatePhoneNumber(auth.currentUser, tel).then(() => {
  //   console.log(auth)
  // }).catch((error) => {
  //   console.log(auth)
  // });
}


return (
  <div className="container light-style flex-grow-1 container-p-y">
    <div class="registration-form">

      <form className='updateForm' onSubmit={update}>
        <div class="form-icon">
          <span><i class="fas fa-user"></i></span>
        </div>
        <div class="form-group row">
          <label className='mb-1'>İstifadəçi Adı:</label>
          <input type="text" class="form-control item" id="username" defaultValue={displayname} onChange={(e) => setDisplayName(e.target.value)} placeholder="Username" />
        </div>
        <div class="form-group row">
          <label className='mb-1'>Email:</label>
          <input type="text" class="form-control item" id="email" defaultValue={displaymail} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        
        <div class="form-group row">
          <a href='/reset' type="submit" class="btn btn-block create-account">Şifrəni Yenilə</a>
          <button type="submit" class="btn btn-block create-account">Yenilə</button>

        </div>
      </form>
    </div>




    {/* <div className="card overflow-hidden" style={{ 'backgroundColor': "#c9aeffca" }}>
        <div className="row no-gutters row-bordered row-border-light">

          <div className="col-md-12 justify-content-center">
            <div className="tab-content justify-content-center">
              <form onSubmit={update} className="text-center justify-content-center tab-pane fade active show" id="account-general">

                <hr className="border-light m-0" />

                <div className="card-body">
                  <div className="form-group row">
                    <label className="form-label">Istifadəçi adı</label>
                    <input type="text" className="form-control mb-1" defaultValue={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                  </div>
                  <div className="form-group row">
                    <label className="form-label">E-mail</label>
                    <input type="text" className="form-control mb-1" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group row">
                    <label className="form-label">New password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="text-right mt-3">
                  <button type='submit' className="btn btn-primary">Save changes</button>&nbsp;
                  <button type="button" className="btn btn-default">Cancel</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div> */}


  </div>
)
}

export default UpdateProfile