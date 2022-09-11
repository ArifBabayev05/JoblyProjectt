import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Loader from '../../../Components/Jobs/Loader'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import '../Admin.css'
import Sidebar from '../Sidebar/Sidebar'

const VacancyAdmin = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:53410/api/Vacancies/getall')
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])
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
                                        <h3>Vakansiyalar</h3>
                                        <a href='admin/vacancyadd'  className='btn btn-success position-relative'>Vakansiya Əlavə Et</a>
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