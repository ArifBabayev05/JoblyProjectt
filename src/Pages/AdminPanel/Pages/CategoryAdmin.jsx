import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import Loader from '../../../Components/Jobs/Loader'
import axios from 'axios'
import '../Admin.css'
import CategoryAdd from '../CRUD/CategoryAdd'


const CategoryAdmin = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:53410/api/Categories/getall')
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])
    const array = data.map((data, index) => {
        return (
            <tr>
                <td>{data.id}</td>
                <td> {data.name}</td>
                {/* <img style={{ 'width': '35px', 'height': '35px', 'border-radius': '50%' }} className='me-3' src={data.image.name} /> */}
                <td><button className='btn text-white btn-info update'>Yenilə</button></td>
                <td><button className='btn btn-danger delete'>Sil</button></td>

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
                                        <h3>Kateqoriyalar</h3>
                                        <a href='admin/CategoryAdd'  className='btn btn-success position-relative'>Kateqoriya Əlavə Et</a>
                                    </div>
                                </div>
                                <div style={{ 'overflow-x': 'auto' }}>
                                    <table>
                                        <tr>
                                            <th>Id</th>
                                            <th>Adı</th>
                                            <th className='text-info'>Yəniləmək</th>
                                            <th className='text-danger'>Silmək</th>



                                        </tr>
                                        {array}
                                    </table>
                                </div>
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

export default CategoryAdmin