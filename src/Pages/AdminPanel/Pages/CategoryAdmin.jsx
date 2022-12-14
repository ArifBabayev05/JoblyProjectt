import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import Loader from '../../../Components/Jobs/Loader'
import axios from 'axios'
import '../Admin.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import '../../../Assets/Styles/Admin/AdminSearch.css'

const CategoryAdmin = (props) => {
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:53410/api/Categories/getall')
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])

    function Update(id) {
        
        props.history.push("/vacancy" + id)
        

    }
    const Delete = (id, e) => {
        const url = `http://localhost:53410/api/Categories/delete?id=${id}`
        
        e.preventDefault();

        axios.post(url)
            .then(res => {
                toast.success("Uğurla silindi")
                
            }).catch(err => toast.error(err))
    }
    const array = data.filter((value) => {
        if (query === "") {
            return value;
        }
        else if (value.name.toLowerCase().includes(query.toLowerCase())) {
            return value;
        }
        
    }).map((data, index) => {
        return (
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td><Link to={`/categoryupdate/${data.id}`} onClick={() => Update(data.id)} className='btn text-white btn-info update'>Yenilə</Link></td>
                <td><button onClick={(e) => Delete(data.id, e)} className='btn btn-danger delete'>Sil</button></td>

            </tr>
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

                                    {/* new Search */}
                                    <div className='col-md-9 col-sm-6 col-lg-12 d-flex justify-content-between'>
                                        <h3>Kateqoriyalar</h3>
                                        <form class="search-box newSearchInputForm">
                                            <input onChange={(event) => setQuery(event.target.value)} type="text" placeholder="Axtarış hissəsi" />
                                            <button type="reset"></button>
                                        </form>
                                    </div>

                                    <div className='d-flex mb-4 mt-2'>
                                        <a href='admin/CategoryAdd' className='btn btn-success position-relative'>Kateqoriya Əlavə Et</a>

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
                    <ToastContainer />
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