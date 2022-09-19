import React from 'react'
import { useEffect, useState, } from 'react'
import '../../Assets/Styles/User/UserSettings.css'
import { auth } from '../../Components/Auth/Firebase/config'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
// import { ShowOnLogin, ShowOnLogout } from '../../Layouts/HiddenLinks/HiddenLinks'
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../Redux/Slice/authSlice';


const UpdateProfile = () => {
  // const navigate = useNavigate();
  // const [menu, setMenu] = useState(false);
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
    <div className="container light-style flex-grow-1 container-p-y">

      <h4 className="font-weight-bold py-3 mb-4">
        Profil Məlumatları
      </h4>

      <div className="card overflow-hidden" style={{'backgroundColor':"#c9aeffca" }}>
        <div className="row no-gutters row-bordered row-border-light">
          
          <div className="col-md-12 justify-content-center">
            <div className="tab-content justify-content-center">
              <div className="text-center justify-content-center tab-pane fade active show" id="account-general">

                <div className="card-body media align-items-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="d-block ui-w-80"/>
                    <div className="media-body ml-4">
                      <label className="btn btn-outline-primary">
                        Upload new photo
                        <input type="file" className="account-settings-fileinput"/>
                      </label> &nbsp;
                      <button type="button" className="btn btn-default md-btn-flat">Reset</button>

                      <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                    </div>
                </div>
                <hr className="border-light m-0"/>

                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label">Istifadəçi adı</label>
                      <input type="text" className="form-control mb-1" value={displayname}/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Ad</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">E-mail</label>
                      <input type="text" className="form-control mb-1" value="nmaxwell@mail.com"/>
                        <div className="alert alert-warning mt-3">
                          Your email is not confirmed. Please check your inbox.<br/>
                            <a href="/#">Resend confirmation</a>
                        </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input type="text" className="form-control" value="Company Ltd."/>
                    </div>
                  </div>

              </div>
              <div className="tab-pane fade" id="account-change-password">
                <div className="card-body pb-2">

                  <div className="form-group">
                    <label className="form-label">Current password</label>
                    <input type="password" className="form-control"/>
                  </div>

                  <div className="form-group">
                    <label className="form-label">New password</label>
                    <input type="password" className="form-control"/>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Repeat new password</label>
                    <input type="password" className="form-control"/>
                  </div>

                </div>
              </div>
              <div className="tab-pane fade" id="account-info">
                <div className="card-body pb-2">

                  <div className="form-group">
                    <label className="form-label">Bio</label>
                    <textarea className="form-control" rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.</textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Birthday</label>
                    <input type="text" className="form-control" value="May 3, 1995"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <select className="custom-select">
                      <option>USA</option>
                      <option selected="">Canada</option>
                      <option>UK</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>
                <hr className="border-light m-0"/>
                  <div className="card-body pb-2">

                    <h6 className="mb-4">Contacts</h6>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input type="text" className="form-control" value="+0 (123) 456 7891"/>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Website</label>
                      <input type="text" className="form-control" value=""/>
                    </div>

                  </div>

              </div>
              <div className="tab-pane fade" id="account-social-links">
                <div className="card-body pb-2">

                  <div className="form-group">
                    <label className="form-label">Twitter</label>
                    <input type="text" className="form-control" value="https://twitter.com/user"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Facebook</label>
                    <input type="text" className="form-control" value="https://www.facebook.com/user"/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Google+</label>
                    <input type="text" className="form-control" value=""/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">LinkedIn</label>
                    <input type="text" className="form-control" value=""/>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instagram</label>
                    <input type="text" className="form-control" value="https://www.instagram.com/user"/>
                  </div>

                </div>
              </div>
              <div className="tab-pane fade" id="account-connections">
                <div className="card-body">
                  <button type="button" className="btn btn-twitter">Connect to <strong>Twitter</strong></button>
                </div>
                <hr className="border-light m-0"/>
                  <div className="card-body">
                    <h5 className="mb-2">
                      <a href="/#" className="float-right text-muted text-tiny"><i className="ion ion-md-close"></i> Remove</a>
                      <i className="ion ion-logo-google text-google"></i>
                      You are connected to Google:
                    </h5>
                    nmaxwell@mail.com
                  </div>
                  <hr className="border-light m-0"/>
                    <div className="card-body">
                      <button type="button" className="btn btn-facebook">Connect to <strong>Facebook</strong></button>
                    </div>
                    <hr className="border-light m-0"/>
                      <div className="card-body">
                        <button type="button" className="btn btn-instagram">Connect to <strong>Instagram</strong></button>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="account-notifications">
                      <div className="card-body pb-2">

                        <h6 className="mb-4">Activity</h6>

                        <div className="form-group">
                          <label className="switcher">
                            <input type="checkbox" className="switcher-input" checked=""/>
                              <span className="switcher-indicator">
                                <span className="switcher-yes"></span>
                                <span className="switcher-no"></span>
                              </span>
                              <span className="switcher-label">Email me when someone comments on my article</span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label className="switcher">
                            <input type="checkbox" className="switcher-input" checked=""/>
                              <span className="switcher-indicator">
                                <span className="switcher-yes"></span>
                                <span className="switcher-no"></span>
                              </span>
                              <span className="switcher-label">Email me when someone answers on my forum thread</span>
                          </label>
                        </div>
                        <div className="form-group">
                          <label className="switcher">
                            <input type="checkbox" className="switcher-input"/>
                              <span className="switcher-indicator">
                                <span className="switcher-yes"></span>
                                <span className="switcher-no"></span>
                              </span>
                              <span className="switcher-label">Email me when someone follows me</span>
                          </label>
                        </div>
                      </div>
                      <hr className="border-light m-0"/>
                        <div className="card-body pb-2">

                          <h6 className="mb-4">Application</h6>

                          <div className="form-group">
                            <label className="switcher">
                              <input type="checkbox" className="switcher-input" checked=""/>
                                <span className="switcher-indicator">
                                  <span className="switcher-yes"></span>
                                  <span className="switcher-no"></span>
                                </span>
                                <span className="switcher-label">News and announcements</span>
                            </label>
                          </div>
                          <div className="form-group">
                            <label className="switcher">
                              <input type="checkbox" className="switcher-input"/>
                                <span className="switcher-indicator">
                                  <span className="switcher-yes"></span>
                                  <span className="switcher-no"></span>
                                </span>
                                <span className="switcher-label">Weekly product updates</span>
                            </label>
                          </div>
                          <div className="form-group">
                            <label className="switcher">
                              <input type="checkbox" className="switcher-input" checked=""/>
                                <span className="switcher-indicator">
                                  <span className="switcher-yes"></span>
                                  <span className="switcher-no"></span>
                                </span>
                                <span className="switcher-label">Weekly blog digest</span>
                            </label>
                          </div>

                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="text-right mt-3">
            <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
            <button type="button" className="btn btn-default">Cancel</button>
          </div>

        </div>
        )
}

        export default UpdateProfile