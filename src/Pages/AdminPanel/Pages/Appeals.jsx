import axios from 'axios'
import React, { useState, useEffect } from 'react'
import src from '../../../Assets/Images/Logo/src.png'
import Loader from '../../../Components/Jobs/Loader'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import Sidebar from '../Sidebar/Sidebar'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import '../Home/Home.css'

const Appeals = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")


    var api_headers = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer gpgiTH9gCpglLMplHY2ioOTRuVIgfmlSHMt0o0bgSQ18OxXK7EZEHIZC`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
    }
    useEffect(() => {
        axios.get('https://sheet2api.com/v1/XdpCkD4RzeT7/jobly')
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])



    const array = data.filter((value) => {
        if (query == "") {
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
    }).map((data, index) => {

        const datas = `#${data.jobId.replace(/[^a-zA-Z]/g, '')}`
        const data2 = `${data.jobId.replace(/[^a-zA-Z]/g, '')}`
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


                    <div class="modal fade" id={data2} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" style={{ "color": "#785BF4" }} id="staticBackdropLabel"><span className='fw-bold' style={{ "color": "#785BF4" }} ></span> Vakansiyasına Müraciət</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">


                                    <div class="my-3">
                                        <h5 style={{ "color": "#785BF4", 'text-decoration': 'underline' }}>Məlumatlar:</h5>
                                    </div>

                                    {/* Istifaçi Adı */}
                                    <div class="my-2 d-flex">
                                        <div className='col-md-4'>
                                            <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>İstifadəçi Adı:</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{data.name}</p>
                                        </div>

                                    </div>
                                    <div class="my-2 d-flex">
                                        <div className='col-md-4'>
                                            <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>Email ünvanı:</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{data.mail}</p>
                                        </div>

                                    </div>

                                    <div class="my-2 d-flex">
                                        <div className='col-md-4'>
                                            <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>Bacarıqları:</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{data.skill}</p>
                                        </div>

                                    </div>
                                    <div class="my-2 d-flex">
                                        <div className='col-md-4'>
                                            <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>Təhsili:</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{data.education}</p>
                                        </div>

                                    </div>
                                    <div class="my-2 d-flex">
                                        <div className='col-md-4'>
                                            <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>Telefon Nömrəsi:</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>+994{data.tel}</p>
                                        </div>

                                    </div>
                                    <div class="my-2 d-flex">
                                        <div className='col-md-4'>
                                            <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>İş Təcrübəsi:</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{data.experience}</p>
                                        </div>

                                    </div>
                                    <div class="my-2 d-flex">
                                        <div className='col-md-4'>
                                            <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>Şirkət adı:</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{data.company}</p>
                                        </div>

                                    </div>
                                    <div class="my-2 d-flex">
                                        <div className='col-md-4'>
                                            <label style={{ "align-items": "center", "display": "flex" }} className='me-1' for='username'>Vakansiya adı:</label>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{data.vacacny}</p>
                                        </div>

                                    </div>


                                </div>
                                <div class="modal-footer">

                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bağla</button>
                                    <button type="submit" data-bs-dismiss="modal" style={{ border: 'none', backgroundColor: "#785BF4" }} class="btn btn-primary">Müraciəti Təsdiqlə</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </td>


            </tr>
        )
    })

    return (
        <div>
            <ShowOnAdmin>
                <div>
                    <div class="container-fluid">
                        <div class="row flex-nowrap">
                            <Sidebar />
                            <div class="col py-3">
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