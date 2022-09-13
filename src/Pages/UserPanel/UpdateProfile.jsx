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
    <div class="container light-style flex-grow-1 container-p-y">

      <h4 class="font-weight-bold py-3 mb-4">
        Profil Məlumatları
      </h4>

      <div class="card overflow-hidden" style={{'backgroundColor':"#c9aeffca" }}>
        <div class="row no-gutters row-bordered row-border-light">
          
          <div class="col-md-12 justify-content-center">
            <div class="tab-content justify-content-center">
              <div class="text-center justify-content-center tab-pane fade active show" id="account-general">

                <div class="card-body media align-items-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="d-block ui-w-80"/>
                    <div class="media-body ml-4">
                      <label class="btn btn-outline-primary">
                        Upload new photo
                        <input type="file" class="account-settings-fileinput"/>
                      </label> &nbsp;
                      <button type="button" class="btn btn-default md-btn-flat">Reset</button>

                      <div class="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                    </div>
                </div>
                <hr class="border-light m-0"/>

                  <div class="card-body">
                    <div class="form-group">
                      <label class="form-label">Istifadəçi adı</label>
                      <input type="text" class="form-control mb-1" value={displayname}/>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Ad</label>
                      <input type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                      <label class="form-label">E-mail</label>
                      <input type="text" class="form-control mb-1" value="nmaxwell@mail.com"/>
                        <div class="alert alert-warning mt-3">
                          Your email is not confirmed. Please check your inbox.<br/>
                            <a href="/#">Resend confirmation</a>
                        </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Company</label>
                      <input type="text" class="form-control" value="Company Ltd."/>
                    </div>
                  </div>

              </div>
              <div class="tab-pane fade" id="account-change-password">
                <div class="card-body pb-2">

                  <div class="form-group">
                    <label class="form-label">Current password</label>
                    <input type="password" class="form-control"/>
                  </div>

                  <div class="form-group">
                    <label class="form-label">New password</label>
                    <input type="password" class="form-control"/>
                  </div>

                  <div class="form-group">
                    <label class="form-label">Repeat new password</label>
                    <input type="password" class="form-control"/>
                  </div>

                </div>
              </div>
              <div class="tab-pane fade" id="account-info">
                <div class="card-body pb-2">

                  <div class="form-group">
                    <label class="form-label">Bio</label>
                    <textarea class="form-control" rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.</textarea>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Birthday</label>
                    <input type="text" class="form-control" value="May 3, 1995"/>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Country</label>
                    <select class="custom-select">
                      <option>USA</option>
                      <option selected="">Canada</option>
                      <option>UK</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>
                <hr class="border-light m-0"/>
                  <div class="card-body pb-2">

                    <h6 class="mb-4">Contacts</h6>
                    <div class="form-group">
                      <label class="form-label">Phone</label>
                      <input type="text" class="form-control" value="+0 (123) 456 7891"/>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Website</label>
                      <input type="text" class="form-control" value=""/>
                    </div>

                  </div>

              </div>
              <div class="tab-pane fade" id="account-social-links">
                <div class="card-body pb-2">

                  <div class="form-group">
                    <label class="form-label">Twitter</label>
                    <input type="text" class="form-control" value="https://twitter.com/user"/>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Facebook</label>
                    <input type="text" class="form-control" value="https://www.facebook.com/user"/>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Google+</label>
                    <input type="text" class="form-control" value=""/>
                  </div>
                  <div class="form-group">
                    <label class="form-label">LinkedIn</label>
                    <input type="text" class="form-control" value=""/>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Instagram</label>
                    <input type="text" class="form-control" value="https://www.instagram.com/user"/>
                  </div>

                </div>
              </div>
              <div class="tab-pane fade" id="account-connections">
                <div class="card-body">
                  <button type="button" class="btn btn-twitter">Connect to <strong>Twitter</strong></button>
                </div>
                <hr class="border-light m-0"/>
                  <div class="card-body">
                    <h5 class="mb-2">
                      <a href="/#" class="float-right text-muted text-tiny"><i class="ion ion-md-close"></i> Remove</a>
                      <i class="ion ion-logo-google text-google"></i>
                      You are connected to Google:
                    </h5>
                    nmaxwell@mail.com
                  </div>
                  <hr class="border-light m-0"/>
                    <div class="card-body">
                      <button type="button" class="btn btn-facebook">Connect to <strong>Facebook</strong></button>
                    </div>
                    <hr class="border-light m-0"/>
                      <div class="card-body">
                        <button type="button" class="btn btn-instagram">Connect to <strong>Instagram</strong></button>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="account-notifications">
                      <div class="card-body pb-2">

                        <h6 class="mb-4">Activity</h6>

                        <div class="form-group">
                          <label class="switcher">
                            <input type="checkbox" class="switcher-input" checked=""/>
                              <span class="switcher-indicator">
                                <span class="switcher-yes"></span>
                                <span class="switcher-no"></span>
                              </span>
                              <span class="switcher-label">Email me when someone comments on my article</span>
                          </label>
                        </div>
                        <div class="form-group">
                          <label class="switcher">
                            <input type="checkbox" class="switcher-input" checked=""/>
                              <span class="switcher-indicator">
                                <span class="switcher-yes"></span>
                                <span class="switcher-no"></span>
                              </span>
                              <span class="switcher-label">Email me when someone answers on my forum thread</span>
                          </label>
                        </div>
                        <div class="form-group">
                          <label class="switcher">
                            <input type="checkbox" class="switcher-input"/>
                              <span class="switcher-indicator">
                                <span class="switcher-yes"></span>
                                <span class="switcher-no"></span>
                              </span>
                              <span class="switcher-label">Email me when someone follows me</span>
                          </label>
                        </div>
                      </div>
                      <hr class="border-light m-0"/>
                        <div class="card-body pb-2">

                          <h6 class="mb-4">Application</h6>

                          <div class="form-group">
                            <label class="switcher">
                              <input type="checkbox" class="switcher-input" checked=""/>
                                <span class="switcher-indicator">
                                  <span class="switcher-yes"></span>
                                  <span class="switcher-no"></span>
                                </span>
                                <span class="switcher-label">News and announcements</span>
                            </label>
                          </div>
                          <div class="form-group">
                            <label class="switcher">
                              <input type="checkbox" class="switcher-input"/>
                                <span class="switcher-indicator">
                                  <span class="switcher-yes"></span>
                                  <span class="switcher-no"></span>
                                </span>
                                <span class="switcher-label">Weekly product updates</span>
                            </label>
                          </div>
                          <div class="form-group">
                            <label class="switcher">
                              <input type="checkbox" class="switcher-input" checked=""/>
                                <span class="switcher-indicator">
                                  <span class="switcher-yes"></span>
                                  <span class="switcher-no"></span>
                                </span>
                                <span class="switcher-label">Weekly blog digest</span>
                            </label>
                          </div>

                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="text-right mt-3">
            <button type="button" class="btn btn-primary">Save changes</button>&nbsp;
            <button type="button" class="btn btn-default">Cancel</button>
          </div>

        </div>
        )
}

        export default UpdateProfile