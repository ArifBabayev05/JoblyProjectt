import Loader from '../../../Components/Jobs/Loader'
import { ShowOnAdmin, ShowOnUser } from '../../../Layouts/HiddenLinks/Router'
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { error } from 'console'

const CompanyAdd = () => {
    console.log(new Date().toJSON());
    const [loading, setLoading] = useState(false)
    const url = 'http://localhost:53410/api/Company/add';
    const [data, setData] = useState({
        name: "",
        mail: "",
        telNumber: "",
        imageId: "",
        createdDate: ""
    })
    function submit(e) {
        e.preventDefault();
        setLoading(false);
        // const fd = new FormData();
        axios.post(url, {
            name: data.name,
            mail: data.mail,
            telNumber: data.telNumber,
            imageId: parseInt(data.imageId),
            createdDate : new Date().toJSON()
        }).then(res => {
            setLoading(false);
            // console.log(res.data);
            toast.success("Uğurla Əlavə Olundu")
        }).catch(() => {
            toast.error("Əməliyyat Uğursuzdur.");
            toast.info("Mənfi ədəd daxil edilə bilməz");
        })
    }
    function handle(e) {
        setLoading(false);
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData);
        // toast.success("Uğurla Əlavə Olundu")
    }
    return (
        <div>
            <ShowOnAdmin>
                <div>
                    <div class="container-fluid">
                        <div class="row flex-nowrap">
                            <Sidebar />
                            <div class="col py-3">
                                <form onSubmit={(e) => submit(e)}>
                                    {loading && <Loader />}
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">Ad</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="name" class="form-control" id="name" placeholder="Ad" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="mail" class="form-control" id="mail" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">Telefon Nömrəsi</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="tel" class="form-control" id="telNumber" placeholder="Telefon Nömrəsi" />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">İmage İd</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="text" class="form-control" id="imageId" placeholder="İmage İd " />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmail" class="col-sm-2 col-form-label">İmage upload</label>
                                        <div class="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="file" class="form-control" id="imageId" placeholder="İmage İd " />
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

export default CompanyAdd