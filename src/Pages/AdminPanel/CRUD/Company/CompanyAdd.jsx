import Loader from '../../../../Components/Jobs/Loader'
import { ShowOnAdmin, ShowOnUser } from '../../../../Layouts/HiddenLinks/Router'
import React, { useState, useEffect } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import { v4 } from "uuid";
import { storage } from '../../../../Components/Auth/Firebase/config'

const CompanyAdd = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const url = 'http://localhost:53410/api/Company/add';
    const [data, setData] = useState({
        name: "",
        mail: "",
        telNumber: "",
        ImageFile: "",
        imageId: "",
        createdDate: ""

    })
    function submit(e) {
        e.preventDefault();
        setLoading(false);

        let file = data.ImageFile;
        let formData = new FormData();
        formData.append('imageFile', file);

        axios.post(url, formData, {
            name: data.name,
            mail: data.mail,
            telNumber: data.telNumber,
            ImageFile: data.ImageFile,
            imageId: parseInt(data.imageId),
            createdDate: new Date().toJSON(),
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            setLoading(false);
            console.log(res);
            toast.success("Uğurla Əlavə Olundu");
            navigate("/companyadmin")
        }).catch(() => {
            toast.error("Əməliyyat Uğursuzdur.");
        })
    }

    function fileHandle(e) {
        let file = e.target.files
        setData({
            ImageFile: file,
        })
        setLoading(false);
        const newData = { ...data }
        newData[e.target.files] = e.target.value;
        setData(newData);
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
                    <div className="container-fluid">
                        <div className="row flex-nowrap">
                            <Sidebar />
                            <div className="col py-3">

                                <form enctype="multipart/form-data" method="post" onSubmit={(e) => submit(e)}>
                                    {loading && <Loader />}
                                    <div className="row mb-3">
                                        <label for="inputEmail" className="col-sm-2 col-form-label">Ad</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} required type="name" className="form-control" id="name" placeholder="Ad" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} required type="mail" className="form-control" id="mail" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label for="inputEmail" className="col-sm-2 col-form-label">Telefon Nömrəsi</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} required type="tel" className="form-control" id="telNumber" placeholder="Telefon Nömrəsi" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <label for="inputEmail" className="col-sm-2 col-form-label">İmage İd</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} required type="text" className="form-control" id="imageId" placeholder="İmage İd " />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label for="inputEmail" className="col-sm-2 col-form-label">İmage upload</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => fileHandle(e)} value={data.value} accept='image/*' type="file" className="form-control" id="ImageFile" placeholder="Path" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-10 offset-sm-2">
                                            <button type="submit" style={{ 'background-color': '#785BF4', "outline": 'none', 'border': 'none' }} className="btn btn-primary">Əlavə Et</button>
                                        </div>
                                    </div>
                                </form>
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

export default CompanyAdd