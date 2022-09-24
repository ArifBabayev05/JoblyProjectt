import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import src from '../../../Assets/Images/Logo/src.png'
import Loader from '../../../Components/Jobs/Loader'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import Sidebar from '../Sidebar/Sidebar'
import { toast, ToastContainer } from 'react-toastify'
import '../Home/Home.css'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../../Redux/Slice/authSlice'
import { auth } from '../../../Components/Auth/Firebase/config'
import emailjs from 'emailjs-com'

const Appeals = (props) => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
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

        emailjs.sendForm('service_evmbmoc', 'template_8xh3bdq', form.current, 'Lhg9k2LlEjFkq1WxD')
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
    useEffect(() => {
        axios.get('https://sheetdb.io/api/v1/gpxwv62j8wgii')
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])


    const array = data.filter((value) => {
        if (query === "") {
            return value;
        }
        else if (value.name.toLowerCase().includes(query.toLowerCase())) {
            return value;
        }
        else if (value.vacacny.toLowerCase().includes(query.toLowerCase())) {
            return value;
        }
        else if (value.company.toLowerCase().includes(query.toLowerCase())) {
            return value;
        }
    }).map((data, key) => {

        const datas = `#${data.jobId.replace(/[^a-zA-Z]/g, '')}`
        const data2 = `${data.jobId.replace(/[^a-zA-Z]/g, '')}`

        const onDelete = (e) => {

            axios.delete(`https://sheetdb.io/api/v1/gpxwv62j8wgii/jobId/${data.jobId}`)
            toast.success("Müraciət silindi")

        }

        return (
            <tr>
                <td>{data.name}</td>
                <td>{data.mail}</td>
                <td>{data.company}</td>
                <td>{data.vacacny}</td>
                <td>
                    <div className='p-1 viewMore'>
                        <a href='/#' className='viewMoree' data-bs-toggle="modal" data-bs-target={datas}>Daha Ətraflı</a>
                    </div>


                    <div className="modal fade" id={data2} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="modal-header">
                                        <h5 className="modal-title" style={{ "color": "#785BF4" }} id="staticBackdropLabel"><span className='fw-bold' style={{ "color": "#785BF4" }} ></span> Vakansiyasına Müraciət</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">


                                        <div className="my-3">
                                            <h5 style={{ "color": "#785BF4", 'text-decoration': 'underline' }}>Məlumatlar:</h5>
                                        </div>

                                        {/* Istifaçi Adı */}
                                        <div className="my-2 d-flex">
                                            <div className='col-md-4'>
                                                <label style={{ "align-items": "center", "display": "flex" }} className='me-1' name="user_name" for='username'>İstifadəçi Adı:</label>
                                            </div>
                                            <div className='col-md-8'>
                                                <input className='appealInput' name='user_name' value={data.name}/>
                                            </div>

                                        </div>
                                        <div className="my-2 d-flex">
                                            <div className='col-md-4'>
                                                <label style={{ "align-items": "center", "display": "flex" }} className='me-1' name='email' for='username'>Email ünvanı:</label>
                                            </div>
                                            <div className='col-md-8'>
                                            <input className='appealInput' name='email' value={data.mail}/>
                                            </div>

                                        </div>

                                        <div className="my-2 d-flex">
                                            <div className='col-md-4'>
                                                <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>Bacarıqları:</label>
                                            </div>
                                            <div className='col-md-8'>
                                            <input className='appealInput' value={data.skill}/>
                                            </div>

                                        </div>
                                        <div className="my-2 d-flex">
                                            <div className='col-md-4'>
                                                <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>Təhsili:</label>
                                            </div>
                                            <div className='col-md-8'>
                                            <input className='appealInput' value={data.education}/>
                                            </div>

                                        </div>
                                        <div className="my-2 d-flex">
                                            <div className='col-md-4'>
                                                <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>Telefon Nömrəsi:</label>
                                            </div>
                                            <div className='col-md-8'>
                                            <input className='appealInput' value={+994 + data.tel}/>
                                            </div>

                                        </div>
                                        <div className="my-2 d-flex">
                                            <div className='col-md-4'>
                                                <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>İş Təcrübəsi:</label>
                                            </div>
                                            <div className='col-md-8'>
                                            <input className='appealInput' value={data.experience}/>
                                            </div>

                                        </div>
                                        <div className="my-2 d-flex">
                                            <div className='col-md-4'>
                                                <label style={{ "align-items": "center", "display": "flex" }} className='me-1' name='company' for='username'>Şirkət adı:</label>
                                            </div>
                                            <div className='col-md-8'>
                                            <input className='appealInput' name='company'  value={data.company}/>
                                            </div>

                                        </div>
                                        <div className="my-2 d-flex">
                                            <div className='col-md-4'>
                                                <label style={{ "align-items": "center", "display": "flex" }} className='me-1' name='vacancy' for='username'>Vakansiya adı:</label>
                                            </div>
                                            <div className='col-md-8'>
                                            <input className='appealInput' name='vacancy' value={data.vacacny}/>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" onClick={onDelete} className="btn btn-danger" data-bs-dismiss="modal">Qəbul Etmə</button>
                                        <button type="submit" data-bs-dismiss="modal" style={{ border: 'none', backgroundColor: "#785BF4" }} className="btn btn-primary">Müraciəti Təsdiqlə</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </td>


            </tr >
        )
    })

    return (
        <div>
            <ShowOnAdmin>
                <div>
                    <div className="container-fluid">
                        <div className="row flex-nowrap">
                            <Sidebar />
                            <div className="col py-3">
                                <div className='row'>
                                    <div className='col-md-9 col-sm-6 col-lg-12 d-flex mb-3 justify-content-between'>
                                        <h1 className='text container ' style={{ color: 'var(--pink)', fontSize: '35px', alignItems: 'center', display: 'flex' }}>Bütün Müraciətlər</h1>
                                        <div className='searchJob mb-5' style={{ alignItems: 'center', display: 'flex', top: '20px' }}>
                                            <input className='searchBar mt-2 p-2' onChange={(event) => setQuery(event.target.value)} type='text'></input>
                                            <button className='search__submit' type='submit'>
                                                <img src={src} alt='some value' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ 'overflow-x': 'auto' }}>

                                    <table className='table-bordered '>
                                        <tr>

                                            <th>Ad</th>
                                            <th>Mail Ünvanı</th>
                                            <th>Şirkət Adı</th>
                                            <th>Vakansiya Adı</th>

                                        </tr>
                                        {array}
                                    </table>
                                </div>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </ShowOnAdmin>
            <ShowOnUser>
                <div>
                    <Loader />
                </div>
            </ShowOnUser>
        </div>
    )
}

export default Appeals