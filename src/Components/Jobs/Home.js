import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import '../../Assets/Styles/Job/Job.css'
import {  useParams } from 'react-router-dom'
import Loader from './Loader'
import '../../Assets/Styles/Job/Home.css'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Auth/Firebase/config'
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../Redux/Slice/authSlice'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Tooltip from 'react-bootstrap/Tooltip';
import info from '../../Assets/Images/Hero/info.png'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuid } from 'uuid';
import { ShowOnLogin,ShowOnLogout } from '../../Layouts/HiddenLinks/HiddenLinks'
//Job Details
function Home() {

  const unique_id = uuid();
  const [jobId, setJobId] = useState('')
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [tel, setTel] = useState('');
  const [experience, setExperience] = useState('');
  const [skill, setSkill] = useState('');
  const [education, setEducation] = useState('');
  const [company, setCompany] = useState('');
  const [vacacny, setVacancy] = useState('');

  const { id } = useParams()
  const url = `http://localhost:53410/api/Vacancies/getbyid?id=${id}`
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false
  })
  const onSubmit = (e) => {
    toast.success("Müraciətiniz uğurludur!")

    axios.post(`https://sheetdb.io/api/v1/gpxwv62j8wgii`, {
      name, mail, tel, experience, skill, education, company, vacacny, jobId
    }
    )
  }
  

  let content = null

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false

    })

    axios.get(url)
      .then(response => {
        setProduct({
          loading: false,
          data: response.data,
          error: false
        })

          .catch(() => {
            setProduct({
              loading: false,
              data: null,
              error: true
            })
          })
      })
  }, [url])
  // const [menu, setMenu] = useState(false);
  const dispatch = useDispatch()
  const [displayname, setDisplayName] = useState("");
  const [displaymail, setDisplayMail] = useState("");
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

  if (product.loading) {
    content = <Loader />
  }

  if (product.error) {
    content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
  }
  if (product.data) {
    content =
      <div className='card'>
        <div className='card-header'>
          <div className='d-flex'>
            <div className='headerImage me-4 mb-3'>
              <img src={"http://localhost:53410/img/"+product.data.company.image.name} alt='asf' />
              {/* src={"http://localhost:53410/img/"+props.product.company.image.name} */}
            </div>
            <h1>{product.data.name}</h1>
          </div>

          <div className='salaryInfo'>
            <p className='salary'>Maaş : {product.data.salary}</p>
            <p className='salary'>İşin Tipi : {product.data.typeOfwork}</p>
            <p className='salary'>Müraciətin Bitmə Tarixi : {product.data.deadline.slice(0, 10)}</p>

          </div>
        </div>

        <div className='apply'>
          <ShowOnLogin>
          <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='btn h'>Müraciət Et</button>

          </ShowOnLogin>
          <ShowOnLogout>
          <a href='/login' className='btn h'>Daxil Olun</a>

          </ShowOnLogout>
        </div>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" style={{ "color": "#785BF4" }} id="staticBackdropLabel"><span className='fw-bold' style={{ "color": "#785BF4" }} >{product.data.name}</span> Vakansiyasına Müraciət</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Dəyərli  <span className='fw-bold text-dark'> {displayname},  </span> {product.data.name} vakansiyasına maraq göstərdiyiniz üçün <span className='fw-bold text-dark'>{product.data.company.name}</span> adından sizə təşəkkür edirik.

                <div className="my-3">
                  <h5 style={{ "color": "#785BF4", 'text-decoration': 'underline' }}>Müraciət Formu:</h5>
                </div>

                {/* Istifaçi Adı */}
                <div className="my-2 d-flex">
                  <div className='col-md-4'>
                    <label style={{ "align-items": "center", "display": "flex" }} className='me-3' for='username'>İstifadəçi Adı:</label>
                  </div>
                  <div className='col-md-6'>
                    <input name='username' defaultValue={displayname} onMouseEnter={(e) => setName(e.target.value)} required className=' form-control' placeholder='İstifadəçi Adı' />
                  </div>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip id="button-tooltip-2">Müsahibəyə çağırıldığınız zaman, sizə necə müraciət olunmasına kömək edir</Tooltip>}
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Button
                        variant=""
                        {...triggerHandler}
                        className="d-inline-flex ms-3 align-items-center"
                      >
                        <Image style={{ 'width': '20px' }}
                          ref={ref}
                          roundedCircle
                          src={info}
                        />

                      </Button>
                    )}
                  </OverlayTrigger>
                </div>

                {/* Mail */}
                <div className="my-2 d-flex">
                  <div className='col-md-4'>
                    <label style={{ "align-items": "center", "display": "flex" }} className='me-3' for='username'>Email Ünvanı:</label>
                  </div>
                  <div className='col-md-6'>
                    <input name='username' type='mail' defaultValue={displaymail} onMouseEnter={(e) => setMail(e.target.value)} required className=' form-control' placeholder='Email ünvanı' />
                  </div>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip id="button-tooltip-2">Müsahibəyə çağırıldığınız təqdirdə bu email ünvanına mesaj gələcək.</Tooltip>}
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Button
                        variant=""
                        {...triggerHandler}
                        className="d-inline-flex ms-3 align-items-center"
                      >
                        <Image style={{ 'width': '20px' }}
                          ref={ref}
                          roundedCircle
                          src={info}
                        />

                      </Button>
                    )}
                  </OverlayTrigger>
                </div>

                {/* Telefon Nömrəsi */}
                <div className="my-2 d-flex">
                  <div className='col-md-4'>
                    <label style={{ "align-items": "center", "display": "flex" }} className='me-3' for='username'>Telefon Nömrəsi:</label>
                  </div>
                  <div className='col-md-6'>
                    <input name='username' type='tel' required onChange={(e) => setTel(e.target.value)} className=' form-control' placeholder='Telefon Nömrəsi' />
                  </div>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip id="button-tooltip-2">Şirkətin sizinlə əlaqə saxlaması üçün lazımlıdır.</Tooltip>}
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Button
                        variant=""
                        {...triggerHandler}
                        className="d-inline-flex ms-3 align-items-center"
                      >
                        <Image style={{ 'width': '20px' }}
                          ref={ref}
                          roundedCircle
                          src={info}
                        />

                      </Button>
                    )}
                  </OverlayTrigger>
                </div>

                {/* İş Təcrübəsi */}
                <div className="my-2 d-flex">
                  <div className='col-md-4'>
                    <label style={{ "align-items": "center", "display": "flex" }} className='' for='username'>İş Təcrübəsi:</label>
                  </div>
                  <div className='col-md-6'>
                    <input name='username' required onChange={(e) => setExperience(e.target.value)} className=' form-control' placeholder='İş Təcrübəsi' />
                  </div>
                  <div className='col-md-2'>
                    <OverlayTrigger
                      placement="right"
                      overlay={<Tooltip id="button-tooltip-2">Vakansiyada tələb olunan iş təcrübəsinə uyğunluq üçün lazımlıdır.</Tooltip>}
                    >
                      {({ ref, ...triggerHandler }) => (
                        <Button
                          variant=""
                          {...triggerHandler}
                          className="d-inline-flex ms-3 align-items-center"
                        >
                          <Image style={{ 'width': '20px' }}
                            ref={ref}
                            roundedCircle
                            src={info}
                          />

                        </Button>
                      )}
                    </OverlayTrigger></div>
                </div>

                {/* Bacarıqları */}
                <div className="my-2 d-flex">
                  <div className='col-md-4'>
                    <label style={{ "align-items": "center", "display": "flex" }} className='me-3' for='username'>Bacarıqlar:</label>
                  </div>
                  <div className='col-md-6'>
                    <input name='username' required onChange={(e) => setSkill(e.target.value)} className=' form-control' placeholder='Bacarıqlar' />
                  </div>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip id="button-tooltip-2">Vakansiyada tələb olunan iş bacarıqlarına uyğunluq üçün lazımlıdır.</Tooltip>}
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Button
                        variant=""
                        {...triggerHandler}
                        className="d-inline-flex ms-3 align-items-center"
                      >
                        <Image style={{ 'width': '20px' }}
                          ref={ref}
                          roundedCircle
                          src={info}
                        />

                      </Button>
                    )}
                  </OverlayTrigger>
                </div>

                {/* Təhsili */}
                <div className="my-2 d-flex">
                  <div className='col-md-4'>
                    <label style={{ "align-items": "center", "display": "flex" }} className='me-3' for='username'>Təhsil:</label>
                  </div>
                  <div className='col-md-6'>
                    <input name='username' required onChange={(e) => setEducation(e.target.value)} className=' form-control' placeholder='Təhsil' />
                  </div>
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip id="button-tooltip-2">Vakansiyada tələb olunan təhsil kriteriyasına uyğunluq üçün lazımlıdır.</Tooltip>}
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Button
                        variant=""
                        {...triggerHandler}
                        className="d-inline-flex ms-3 align-items-center"
                      >
                        <Image style={{ 'width': '20px' }}
                          ref={ref}
                          roundedCircle
                          src={info}
                        />

                      </Button>
                    )}
                  </OverlayTrigger>
                </div>
                {/* Təhsili */}
                <div className="my-2 d-flex">
                <div className='col-md-5 me-3 ms-3'>
                  <label>Vakansiya Adı:</label>
                    <input name='username' required  value={product.data.name} onMouseMove={(e) => setVacancy(e.target.value)} className=' form-control' />
                  </div>
                  <div className='col-md-5'>
                  <label>Şirkət Adı:</label>
                    <input name='username' required value={product.data.company.name} onMouseMove={(e) => setCompany(e.target.value)} className=' form-control' />
                  </div>
                
                </div>
              </div>
              

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Bağla</button>
                <button type="submit" onClick={onSubmit}  onMouseEnter={(e) => setJobId(e.target.value)} value={unique_id} data-bs-dismiss="modal" style={{ border: 'none', backgroundColor: "#785BF4" }} className="btn btn-primary">Müraciəti Təsdiqlə</button>
              </div>
            </div>
          </div>
        </div>

        <div className='card-body'>
          <div className='top_infos d-flex'>
            <p className='me-2'>{product.data.city.name}</p>
            <p>{product.data.company.name}</p>

          </div>

          <div className='body_infos row'>
            <div className='works col-lg-6 col-sm-12'>
              <h3 className='mb-3 ms-1'>Əsas Vəzifə Öhdəlikləri</h3>
              <p className='mt-4 ms-4'>{product.data.vəzifəÖhdəlikləri}</p>
            </div>
            <div className='skills  col-lg-6 col-sm-12'>
              <h3 className='mb-4 ms-1'>Lazım Olan Bacarıqlar</h3>
              <p className='ms-5'>{product.data.tələblər}</p>
            </div>


          </div>

        </div>
        <div className='d-flex justify-content-end card-footer'>
          <h6> {product.data.city.name}</h6>
          <h6>{product.data.deadline.slice(0, 10)}</h6>
        </div>


      </div>

  }

  return (
    <div className='container'>

      <div>{content}</div>
    </div>


  )
}

export default Home