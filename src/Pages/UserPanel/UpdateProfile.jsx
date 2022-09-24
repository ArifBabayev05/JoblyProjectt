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


const UpdateProfile = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch()

  const update = (e) => {
    e.preventDefault();
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
  }


  return (
    <div className="container light-style flex-grow-1 container-p-y">

      <h4 className="font-weight-bold py-3 mb-4">
        Profil Məlumatları
      </h4>

      <div class="registration-form">

        <form onSubmit={update}>
          <div class="form-icon">
            <span><i class="icon icon-user"></i></span>
          </div>
          <div class="form-group">
            <input type="text" class="form-control item" id="username" defaultValue={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Username" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control item" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control item"  value={password} onChange={(e) => setPassword(e.target.value)}  id="password" placeholder="Password" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control item" id="phone-number" placeholder="Phone Number" />
          </div>
          <div class="form-group">
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
                  <div className="form-group">
                    <label className="form-label">Istifadəçi adı</label>
                    <input type="text" className="form-control mb-1" defaultValue={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input type="text" className="form-control mb-1" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
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