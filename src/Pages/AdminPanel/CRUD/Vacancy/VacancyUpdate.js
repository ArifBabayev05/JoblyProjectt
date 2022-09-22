import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../../../Components/Jobs/Loader'
import Sidebar from '../../Sidebar/Sidebar'
import { ShowOnAdmin, ShowOnUser } from '../../../../Layouts/HiddenLinks/Router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CompanyOption from './CompanyOption'
// import { Link } from 'react-router-dom'


const VacancyUpdate = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    id: id,
    name: "",
    cityId: "",
    deadline: "",
    typeOfwork: "",
    vəzifəÖhdəlikləri: "",
    tələblər: "",
    salary: "",
    categoryId: "",
    companyId: "",
    createdDate: ""

  })
  function submit(e) {
    e.preventDefault();
    console.log(data);
    axios.post(`http://localhost:53410/api/Vacancies/update?id=${id}`, {
      id: data.id,
      name: data.name,
      typeOfwork: data.typeOfwork,
      vəzifəÖhdəlikləri: data.vəzifəÖhdəlikləri,
      tələblər: data.tələblər,
      salary: data.salary,
      cityId: parseInt(data.cityId),
      categoryId: parseInt(data.categoryId),
      // companyId: parseInt(data.companyId),
      companyId:data.companyId,
      deadline: data.deadline,
      createdDate: new Date().toJSON()
    }).then(res => {
      console.log(res);
      toast.success("Uğurla Yeniləndi");
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



        <input defaultValue={data.id} onChange={(e) => handle(e)} value={data.value} style={{ 'display': 'none' }} type="name" required className="form-control" id="id" placeholder="Ad" />

        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">Ad</label>
          <div className="col-sm-10">
            <input defaultValue={product.data.name} onChange={(e) => handle(e)} value={data.value} type="name" required className="form-control" id="name" placeholder="Ad" />
          </div>
        </div>

        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">İşin Tipi</label>
          <div className="col-sm-10">
            <input defaultValue={product.data.typeOfwork} onChange={(e) => handle(e)} value={data.value} type="name" required className="form-control" id="typeOfwork" placeholder="typeOfwork" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">Vəzifə Öhdəlikləri</label>
          <div className="col-sm-10">
            <input defaultValue={product.data.vəzifəÖhdəlikləri} onChange={(e) => handle(e)} value={data.value} type="mail" required className="form-control" id="vəzifəÖhdəlikləri" placeholder="vəzifəÖhdəlikləri" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">Tələblər</label>
          <div className="col-sm-10">
            <input defaultValue={product.data.tələblər} onChange={(e) => handle(e)} value={data.value} type="mail" required className="form-control" id="tələblər" placeholder="vəzifəÖhdəlikləri" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">Əmək Haqqı</label>
          <div className="col-sm-10">
            <input defaultValue={product.data.salary} onChange={(e) => handle(e)} value={data.value} type="text" required className="form-control" id="salary" placeholder="salary" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">Bitmə Tarixi</label>
          <div className="col-sm-10">
            <input defaultValue={product.data.deadline} onChange={(e) => handle(e)} value={data.value} type="date" required className="form-control" id="deadline" placeholder="deadline" />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">City İd</label>
          <div className="col-sm-10">
            <input defaultValue={product.data.cityId} onChange={(e) => handle(e)} value={data.value} type="text" required className="form-control" id="cityId" placeholder="City İd " />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">categoryId</label>
          <div className="col-sm-10">
            <input defaultValue={product.data.categoryId} onChange={(e) => handle(e)} value={data.value} type="text" required className="form-control" id="categoryId" placeholder=" categoryId " />
          </div>
        </div>
        {/* <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">companyId</label>
          <div className="col-sm-10">
            <input defaultValue={product.data.companyId} onChange={(e) => handle(e)} value={data.value} type="text" required className="form-control" id="companyId" placeholder="companyId " />
          </div>
        </div> */}

        <div className="row mb-3">
          <label for="inputEmail" className="col-sm-2 col-form-label">companyId</label>
          <div className="col-sm-10">
            {/* <input onChange={(e) => handle(e)} value={product.data.companyId} type="text" required className="form-control" id="companyId" placeholder="companyId " /> */}
            <CompanyOption defaultValue={product.data.companyId} onChange={(e)=>console.log(e.target.value)} value={data.value} id="companyId" />
          </div>
        </div>


        <div className="row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" style={{ 'background-color': '#785BF4', "outline": 'none', 'border': 'none' }} className="btn btn-primary">Yenilə</button>
          </div>
        </div>
      </form>

  }

  return (
    <div>
      <ShowOnAdmin>
        <div>
          <div className="container-fluid">
            <div className="row flex-nowrap">
              <Sidebar />
              <div className="col py-3">
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

export default VacancyUpdate