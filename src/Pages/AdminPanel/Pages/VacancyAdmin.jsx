import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loader from '../../../Components/Jobs/Loader'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import '../Admin.css'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const VacancyAdmin = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:53410/api/Vacancies/getall')
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])

    const url = 'http://localhost:53410/api/Vacancies/add';
    const [udata, setUData] = useState({
        name: "",
        cityId:"",
        deadline:"",
        typeOfwork:"",
        vəzifəÖhdəlikləri:"",
        tələblər:"",
        salary:"",
        categoryId:"",
        companyId:"",
        createdDate: ""

    })
    function submit(e) {
        e.preventDefault();
        setLoading(false);
        axios.post(url, {
            name: udata.name,
            typeOfwork:udata.typeOfwork,
            vəzifəÖhdəlikləri:udata.vəzifəÖhdəlikləri,
            tələblər:udata.tələblər,
            salary:udata.salary,
            cityId: parseInt(udata.cityId),
            categoryId: parseInt(udata.categoryId),
            companyId: parseInt(udata.companyId),
            deadline: udata.deadline,
            createdDate: new Date().toJSON()
        }).then(res => {
            setLoading(false);
            console.log(res);
            toast.success("Uğurla yeniləndi");
            navigate("/vacancyadmin")
        }).catch(() => {
            toast.error("Əməliyyat Uğursuzdur.");
        })
    }

    function handle(e) {
        setLoading(false);
        const newData = { ...udata }
        newData[e.target.id] = e.target.value;
        setUData(newData);
    }
    const Delete = (id, e) => {
        const url = `http://localhost:53410/api/Vacancies/delete?id=${id}`
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
                <td>{data.company.name}</td>
                <td >{data.category.name}</td>
                <td >{data.city.name}</td>
                <td>{data.typeOfwork}</td>
                <td>{data.deadline.slice(0, 10)}</td>
                <td>{data.salary}</td>
                <td><button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='btn text-white btn-info update'>Yenilə</button></td>
                <td><button onClick={(e) => Delete(data.id, e)} className='btn btn-danger delete'>Sil</button></td>


                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <form onSubmit={(e) => submit(e)}>
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Yeniləmə</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <input  onChange={(e) => handle(e)} value={udata.value} type="name" required class="form-control" id="name" placeholder="Ad" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bağla</button>
                                    <button type="button" class="btn btn-primary">Yadda Saxla</button>
                                </div>
                            </div>
                        </div>
                </form>
                    </div>
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
                                        <h3>Vakansiyalar</h3>

                                        <a href='admin/vacancyadd' className='btn btn-success position-relative'>Vakansiya Əlavə Et</a>
                                    </div>
                                </div>
                                <div style={{ 'overflow-x': 'auto' }}>
                                    <table className='table-bordered '>
                                        <tr>
                                            <th>Id</th>
                                            <th>Vakansiya Adı</th>
                                            <th>Şirkət Adı</th>
                                            <th>Kateqoriya</th>
                                            <th>Ünvanı</th>

                                            <th>İşçi növü</th>
                                            <th>Son Tarix</th>
                                            <th> Maaş</th>

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

export default VacancyAdmin