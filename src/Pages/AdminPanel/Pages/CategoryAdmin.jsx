import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import Loader from '../../../Components/Jobs/Loader'
import axios from 'axios'
import '../Admin.css'
import CategoryAdd from '../CRUD/Category/CategoryAdd'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'


const CategoryAdmin = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:53410/api/Categories/getall')
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])

    function Update(id) {
        console.log(id);
        props.history.push("/vacancy" + id)
        // navigate("/companyupdate")

    }
    const Delete=(id,e)=>{
        const url = `http://localhost:53410/api/Categories/delete?id=${id}`
        console.log(id);
        e.preventDefault();

        axios.post(url)
        .then(res => {
            toast.success("Uğurla silindi")
            console.log(res.data)
        }).catch(err => toast.error(err))
    }
    const array = data.map((data, index) => {
        return (
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td><Link to={`/categoryupdate/${data.id}`} onClick={() => Update(data.id)} className='btn text-white btn-info update'>Yenilə</Link></td>
                <td><button onClick={(e) => Delete(data.id,e)} className='btn btn-danger delete'>Sil</button></td>

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