import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Jobs/Loader'
import '../../Assets/Styles/Company/CardDetail.css';
import bg from '../../Assets/Images/Logo/bglogos.png'

function CompanyHome() {
  const { id } = useParams()

  const [ldata, setlData] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:53410/api/Vacancies/getlistbycompany?companyId=${id}`)
      .then(res => {
        setData(res.data)
      }).catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get(`http://localhost:53410/api/Vacancies/getlistbycompany?companyId=${id}`)
      .then(res => {
        setlData(res.data.length)
      }).catch(err => console.log(err))
  }, [])

  let emptyValue = null;
  if (ldata === 0) {
    emptyValue =
      <div className='my-4'>
        <h3>Təssüf ki, bu şirkətə aid <br /> heçbir vakansiya mövcud deyil.</h3>
      </div>

  }




  const url = `http://localhost:53410/api/Company/getbyid?id=${id}`
  const [product, setProduct] = useState({
    loading: false,
    data: null,
    error: false
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

  const VacanciesList = data.map((data, index) => {
    return (
      <div>
        <Link id='cards' to={`/job/${data.id}`} style={{ textDecoration: 'none' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card jobCards p-3 mb-2">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="icon">
                        <img src={"http://localhost:53410/img/" + data.company.image.name} style={{ 'objectFit': 'cover', 'width': '60px', 'border-radius': '50px' }} alt='value' />
                      </div>
                      <div className="ms-2 c-details">
                        <h6 className=' ms-3 text-white' style={{ 'text-align': 'left' }}>{data.name}</h6> <span className=' ms-3 d-flex'> Son Tarix: {data.deadline.slice(0, 10)} </span>
                      </div>
                    </div>
                    <div className="text-dark badge"> <span >Daha Ətraflı</span> </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Link>
      </div>
    )
  })
  if (product.loading) {
    content = <Loader />
  }

  if (product.error) {
    content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
  }
  if (product.data) {
    content =
      <div className="padding justify-content-center d-flex">
        <div className="col-md-8">
          <div className="card"> <img className="card-img-top" style={{ 'objectFit': 'cover' }} alt='value' src={bg} />
            <div className="card-body little-profile text-center">
              <div className="pro-img"><img src={"http://localhost:53410/img/" + product.data.image.name} alt="value" /></div>
              <h3 className="m-b-0 ">{product.data.name}</h3>
              <p>{product.data.mail}</p>
              <p><span className='fw-bold text-dark'>{ldata}</span> Vakansiya</p>
              {emptyValue}
              <a href="/job" className="m-t-10 waves-effect waves-dark btn btn-primaryy btn-md btn-rounded" data-abc="true">Bütün Vakansiyalar</a>
              <div className="row text-center m-t-20">
                <div className=" m-t-20">
                </div>

                <div>
                  {VacanciesList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  }

  return (
    <div className='container'>

      <div>{content}
      </div>
    </div>


  )
}

export default CompanyHome