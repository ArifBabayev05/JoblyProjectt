import axios from 'axios'
import React, { useState, useEffect } from 'react'
import src from '../../../Assets/Images/Logo/src.png'
import Loader from '../../../Components/Jobs/Loader'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import Sidebar from '../Sidebar/Sidebar'
import { toast, ToastContainer } from 'react-toastify'
import JobCard from './UserCard'
import { Link } from 'react-router-dom'

const Appeals = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://sheet.best/api/sheets/a8f66677-58df-4cea-82d6-02e7aaab0f3f')
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
                                        <h3>Bütün Müraciətlər</h3>
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