import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../../../Components/Auth/Firebase/config';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../../Redux/Slice/authSlice';
import Clock from './Clock';


const Home = () => {

  const [displayname, setDisplayName] = useState("");
  const dispatch = useDispatch()
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


  return (
    <div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-lg-5">
          <div class="box orange">
            <div className='row'>
              <div className='col-lg-9'>
                <h2>Xoş Gəldin!</h2>
                <p>Salam {displayname}!</p>
                <p>Işlərində bol səbr və uğurlar!</p>

              </div>
              <div className='col-lg-3 d-flex align-items-center'>

                <img className='imgss' src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
              </div>
            </div>
          </div>
          
          <div class="box orange">
            <div className='row'>

              <div className='col-lg-9'>
                <h2>Səlahiyyətlər</h2>
                <p>Admin olaraq aşağıdakı səlahiyyətlərə sahibsiniz:</p>
                <li className='li'>Şirkət Yaratmaq,Yeniləmək,Silmək</li>
                <li className='li'>Vakansiya Yaratmaq,Yeniləmək,Silmək</li>
                <li className='li'>Kateqoriya Yaratmaq,Yeniləmək,Silmək</li>
                <li className='li'>Müraciətləri görmək və idarə etmək</li>


              </div>
              <div className='col-lg-3 d-flex align-items-center'>
                <img className='imgss' style={{ "width": '90px' }} src="https://cdn3d.iconscout.com/3d/premium/thumb/transaction-4721271-3927984.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-sm-12  col-lg-5">
        <div class="box orange">
            <div className='row'>
              <div className='col-lg-12'>
                <Clock />

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home