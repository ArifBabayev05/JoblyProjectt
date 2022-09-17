import axios from 'axios'
import React, { useState, useEffect } from 'react'
import src from '../../../Assets/Images/Logo/src.png'
import Loader from '../../../Components/Jobs/Loader'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import Sidebar from '../Sidebar/Sidebar'
import { toast, ToastContainer } from 'react-toastify'
import JobCard from './UserCard'
import { Link } from 'react-router-dom'
import '../Home/Home.css'

const Appeals = (props) => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/baf059c7-f740-4fb5-b9e7-a5899b4aeb41')
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])


    const array = data.map((data, index) => {
        return (
            <tr>
                <td>{data.name}</td>
                <td>{data.mail}</td>
                <td>{data.company}</td>
                <td>{data.vacacny}</td>
            <td>
            <a>Daha Ətraflı</a>
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
                                            <input className='searchBar mt-2 p-2' onChange={event => console.log(setQuery(event.target.value))} type='text'></input>
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