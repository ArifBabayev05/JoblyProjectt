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
    console.log(new Date().toJSON());
    const [selectedFile, setSelectedFile] = useState('')
    const [loading, setLoading] = useState(false)
    const url = 'http://localhost:53410/api/Company/add';
    const [data, setData] = useState({
        name: "",
        mail: "",
        telNumber: "",
        imageId: 1,
        path: "",
        createdDate: ""

    })
    const handleInputChange = (e) => {
        setSelectedFile(e.target.value);
        setLoading(false);
        const newData = { ...data }
        newData[e.target.files[0]] = e.target.value;
        setData(newData);
    }
    function submits() {
        const data = new FormData()
        data.append('file', selectedFile)
        console.warn(selectedFile);
        axios.post("http://localhost:53410/api/Company/fileUpload", data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.warn(res);
            })


    }
    function submit(e) {
        e.preventDefault();
        setLoading(false);
        axios.post(url, {
            name: data.name,
            mail: data.mail,
            telNumber: data.telNumber,
            // imageId: parseInt(data.imageId),
            imageId: data.imageId,
            path: data.path,


            createdDate: new Date().toJSON()
        }).then(res => {
            setLoading(false);
            console.log(res);
            toast.success("Uğurla Əlavə Olundu");
            navigate("/companyadmin")
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
    // const [imageUpload, setImageUpload] = useState(null);
    // const [imageUrls, setImageUrls] = useState([]);

    // const imagesListRef = ref(storage, "images/");
    // const uploadFile = () => {
    //     if (imageUpload == null) return;
    //     const imageRef = ref(storage, `images/${data.createdDate}`);
    //     uploadBytes(imageRef, imageUpload).then((snapshot) => {
    //         getDownloadURL(snapshot.ref).then((url) => {
    //             setImageUrls((prev) => [...prev, url]);
    //         });
    //     });
    // };

    // useEffect(() => {
    //     listAll(imagesListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageUrls((prev) => [...prev, url]);
    //             });
    //         });
    //     });
    // }, []);
    //Category Option
    const [categoryDatas, setCategoryDatas] = useState([])
    const formData = new FormData(); formData.append("file", categoryDatas[0]);
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    useEffect(() => {
        axios.post('http://localhost:53410/api/Company/fileUpload/', config)
            .then(res => {
                setCategoryDatas(res.data)
            }).catch(err => console.log(err))
    }, []);
    function handles(e) {
        const newData = { ...categoryDatas }
        console.log(e.taget.value)
        newData[e.target.selected] = e.target.value;
        setCategoryDatas(newData);
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
                                    {/* <div className="row mb-3">
                                        <label for="inputEmail" className="col-sm-2 col-form-label">İmage İd</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} required type="text" className="form-control" id="imageId" placeholder="İmage İd " />
                                        </div>
                                    </div> */}
                                    <div className="row mb-3">
                                        <label for="inputEmail" className="col-sm-2 col-form-label">İmage upload</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => handleInputChange(e)} value={data.value} accept='image/*' type="file" className="form-control" id="path" placeholder="Path" />
                                            <button type="submit" className="btn btn-dark" onClick={() => submits()}>Əlavə Et</button>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-10 offset-sm-2">
                                            <button type="submit" onMouseEnter={(e) => handles(e)} value={data.value} id='imageId' style={{ 'background-color': '#785BF4', "outline": 'none', 'border': 'none' }} className="btn btn-primary">Əlavə Et</button>
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