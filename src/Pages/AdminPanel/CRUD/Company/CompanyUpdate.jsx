import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../../../Components/Jobs/Loader'
import Sidebar from '../../Sidebar/Sidebar'
import { ShowOnAdmin, ShowOnUser } from '../../../../Layouts/HiddenLinks/Router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const CompanyUpdate = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    id: id,
    name: "",
    mail: "",
    telNumber: "",
    imageId: "",
    createdDate: ""

  })
  function submit(e) {
    e.preventDefault();
    console.log(data);
    axios.post(`http://localhost:53410/api/Company/update?id=${id}`, {
      id: data.id,
      name: data.name,
      mail: data.mail,
      telNumber:data.telNumber,
      imageId: parseInt(data.imageId),
      createdDate: new Date().toJSON()
    }).then(res => {
      console.log(res);
      toast.success("Uğurla Əlavə Olundu");
      navigate("/vacancyAdmin")
    }).catch(() => {
      toast.error("Əməliyyat Uğursuzdur.");
    })
  }

  function handle(e) {

    const newData = { ...data }
    newData[e.target.id] = e.target.value;
    // newData[e.target.name] = e.target.value;

    setData(newData);
  }


  const url = `http://localhost:53410/api/Vacancies/getbyid?id=${id}`
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false,


  })

  let content = null

  useEffect(() => {
    setProduct({
      loading: true,
      data: null,
      error: false

    })

    axios.get(url)
      .then(response => {
        setProduct({
          loading: false,
          data: response.data,
          error: false
        })

          .catch(() => {
            setProduct({
              loading: false,
              data: null,
              error: true
            })
          })
      })
  }, [url])

  if (product.loading) {
    content = <Loader />
  }

  if (product.error) {
    content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
  }

  if (product.data) {
    content =
      <form encType='multipart/formdata' onSubmit={(e) => submit(e)}>
        {/* {loading && <Loader />} */}



        <input defaultValue={data.id} onChange={(e) => handle(e)} value={data.value} style={{ 'display': 'none' }} type="name" required class="form-control" id="id" placeholder="Ad" />

        <div class="row mb-3">
          <label for="inputEmail" class="col-sm-2 col-form-label">Ad</label>
          <div class="col-sm-10">
            <input defaultValue={product.data.name} onChange={(e) => handle(e)} value={data.value} type="name" required class="form-control" id="name" placeholder="Ad" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail" class="col-sm-2 col-form-label">Mail</label>
          <div class="col-sm-10">
            <input defaultValue={product.data.mail} onChange={(e) => handle(e)} value={data.value} type="name" required class="form-control" id="mail" placeholder="Mail" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail" class="col-sm-2 col-form-label">Telefon Nömrəsi</label>
          <div class="col-sm-10">
            <input defaultValue={product.data.telNumber} onChange={(e) => handle(e)} value={data.value} type="name" required class="form-control" id="telNumber" placeholder="Tel" />
          </div>
        </div>

        <div class="row mb-3">
          <label for="inputEmail" class="col-sm-2 col-form-label">İmage İd</label>
          <div class="col-sm-10">
            <input defaultValue={product.data.imageId} onChange={(e) => handle(e)} value={data.value} type="name" required class="form-control" id="imageId" placeholder="İmage" />
          </div>
        </div>
        


        <div class="row">
          <div class="col-sm-10 offset-sm-2">
            <button type="submit" style={{ 'background-color': '#785BF4', "outline": 'none', 'border': 'none' }} class="btn btn-primary">Əlavə Et</button>
          </div>
        </div>
      </form>

  }

  return (
    <div>
      <ShowOnAdmin>
        <div>
          <div class="container-fluid">
            <div class="row flex-nowrap">
              <Sidebar />
              <div class="col py-3">
                <h1 className="mb-4">Yeniləmək</h1>
                {content}
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

export default CompanyUpdate