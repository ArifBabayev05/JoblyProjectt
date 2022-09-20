import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../../../Components/Auth/Firebase/config';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../../Redux/Slice/authSlice';

const Home = () => {

  const [displayname, setDisplayName] = useState("");
  const dispatch = useDispatch()
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
    <div>
      <div class="row">
        <div class="col-sm-5">
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
        </div>
        <div class="col-sm-5">
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

        </div>
      </div>
      <div class="row2-container d-flex">



      </div>


    </div>
  )
}

export default Home