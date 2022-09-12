import Loader from '../../../../Components/Jobs/Loader'
import { ShowOnAdmin, ShowOnUser } from '../../../../Layouts/HiddenLinks/Router'
import React, { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const VacancyAdd = () => {
    const navigate = useNavigate();
    console.log(new Date().toJSON());
    const [loading, setLoading] = useState(false)
    const url = 'http://localhost:53410/api/Vacancies/add';
    const [data, setData] = useState({
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
            name: data.name,
            typeOfwork:data.typeOfwork,
            vəzifəÖhdəlikləri:data.vəzifəÖhdəlikləri,
            tələblər:data.tələblər,
            salary:data.salary,
            cityId: parseInt(data.cityId),
            categoryId: parseInt(data.categoryId),
            companyId: parseInt(data.companyId),
            deadline: data.deadline,
            createdDate: new Date().toJSON()
        }).then(res => {
            setLoading(false);
            console.log(res);
            toast.success("Uğurla Əlavə Olundu");
            navigate("/vacancyadmin")
        }).catch(() => {
            toast.error("Əməliyyat Uğursuzdur.");
        })
    }

    function handle(e) {
        setLoading(false);
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
    return (
        <div>
            <ShowOnAdmin>
                <div>
                    <div class="container-fluid">
                        <div class="row flex-nowrap">
                            <Sidebar />
                            <div class="col py-3">
                                <form encType='multipart/formdata' onSubmit={(e) => submit(e)}>
                                    {loading && <Loader />}

                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">Ad</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="name" required class="form-control" id="name" placeholder="Ad" />
                                        </div>
                                    </div>
                                    
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">typeOfwork</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="name" required class="form-control" id="typeOfwork" placeholder="typeOfwork" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">vəzifəÖhdəlikləri</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="mail" required class="form-control" id="vəzifəÖhdəlikləri" placeholder="vəzifəÖhdəlikləri" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">tələblər</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="mail" required class="form-control" id="tələblər" placeholder="vəzifəÖhdəlikləri" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">salary</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="text" required class="form-control" id="salary" placeholder="salary" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">deadline</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="date" required class="form-control" id="deadline" placeholder="deadline" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">City İd</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="text" required class="form-control" id="cityId" placeholder="City İd " />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">categoryId</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="text" required class="form-control" id="categoryId" placeholder=" categoryId " />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">companyId</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="text" required class="form-control" id="companyId" placeholder="companyId " />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-10 offset-sm-2">
                                            <button type="submit" style={{ 'background-color': '#785BF4', "outline": 'none', 'border': 'none' }} class="btn btn-primary">Əlavə Et</button>
                                        </div>
                                    </div>
                                </form>
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

export default VacancyAdd