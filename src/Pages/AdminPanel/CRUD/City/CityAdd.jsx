import Loader from '../../../../Components/Jobs/Loader'
import { ShowOnAdmin, ShowOnUser } from '../../../../Layouts/HiddenLinks/Router'
import React, { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
const CityAdd = () => {
    const navigate = useNavigate();
    console.log(new Date().toJSON());
    const [loading, setLoading] = useState(false)
    const url = 'http://localhost:53410/api/City/add';
    const [data, setData] = useState({
        name: "",
    })
    function submit(e) {
        e.preventDefault();
        setLoading(false);
        axios.post(url, {
            name: data.name,
        }).then(res => {
            setLoading(false);
            
            toast.success("Uğurla Əlavə Olundu");
            navigate("/cityadmin")
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
                    <div className="container-fluid">
                        <div className="row flex-nowrap">
                            <Sidebar />
                            <div className="col py-3">
                                <form encType='multipart/formdata' onSubmit={(e) => submit(e)}>
                                    {loading && <Loader />}
                                    <div className="row mb-3">
                                        <label for="inputEmail" className="col-sm-2 col-form-label">Ad</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => handle(e)} value={data.value} type="name" required className="form-control" id="name" placeholder="Ad" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-10 offset-sm-2">
                                            <button type="submit" style={{ 'background-color': '#785BF4', "outline": 'none', 'border': 'none' }} className="btn btn-primary">Əlavə Et</button>
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

export default CityAdd