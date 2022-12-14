import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import Loader from '../../../Components/Jobs/Loader'
import axios from 'axios'
import '../Admin.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import soruce from '../../../../../../Jobly/BackendJobly/BackendJobly/BackendJobly/wwwroot/assets/'


const CompanyAdmin = (props) => {
    
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:53410/api/Company/getall')

            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])

    function Update(id) {
        
        props.history.push("/company" + id)
        // navigate("/companyupdate")

    }
    const Delete = (id, e) => {
        const url = `http://localhost:53410/api/Company/delete?id=${id}`
        
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
        else if (value.telNumber.toLowerCase().includes(query.toLowerCase())) {
            return value;
        }
        else if (value.mail.toLowerCase().includes(query.toLowerCase())) {
            return value;
        }
        
    }).map((data, index) => {
        return (
            <tr>
                <td>{data.id}</td>
                <td><img alt='value' style={{ 'width': '35px', 'height': '35px', 'border-radius': '50%' }} className='me-3' src={"http://localhost:53410/img/"+data.image.name} /> {data.name}</td>
                <td>{data.mail}</td>
                <td >+{data.telNumber}</td>
                <td>{data.createdDate.slice(0, 10)}</td>
                {/* <td>{data.createdDate}</td> */}

                <td><Link to={`/companyupdate/${data.id}`} onClick={() => Update(data.id)} className='btn text-white btn-info update'>Yenilə</Link></td>
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
                                    <div className='col-md-9 col-sm-6 col-lg-12 d-flex mb-3 justify-content-between'>
                                        <h3>Şirkətlər</h3>
                                        <form class="search-box newSearchInputForm" style={{ 'margin-right': "60px" }}>
                                            <input onChange={(event) => setQuery(event.target.value)} type="text" placeholder="Axtarış hissəsi" />
                                            <button type="reset"></button>
                                        </form>
                                    </div>

                                    <div className='d-flex mb-4 mt-2'>
                                        <a href='admin/companyadd' className='btn btn-success position-relative'>Şirkət Əlavə Et</a>
                                    </div>
                                </div>
                                <div style={{ 'overflow-x': 'auto' }}>
                                    <table>
                                        <tr>
                                            <th>Id</th>
                                            <th>Adı</th>
                                            <th>Email Ünvanı</th>
                                            <th>Telefon Nömrəsi</th>
                                            <th>Yaradılma Tarixi</th>
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

export default CompanyAdmin