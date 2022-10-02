import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Jobs/Loader'
import { ShowOnLogin, ShowOnLogout } from '../../Layouts/HiddenLinks/HiddenLinks'
import '../../Assets/Styles/Company/CardDetail.css';
import bg from '../../Assets/Images/Logo/bglogos.png'

//Job Details
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
          <div class="container mt-5 mb-3">
            <div class="row">
              <div class="col-md-12">
                <div class="card jobCards p-3 mb-2">
                  <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                      <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
                      <div class="ms-2 c-details">
                        <h6 class="mb-0">Mailchimp</h6> <span>1 days ago</span>
                      </div>
                    </div>
                    <div class="badge"> <span>Design</span> </div>
                  </div>
                  <div class="mt-5">
                    <h3 class="heading">Senior Product<br/>Designer-Singapore</h3>
                    <div class="mt-5">
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{"width": "50%", "aria-valuenow":"50", "aria-valuemin":"0" ,"aria-valuemax":"100"}}></div>
                      </div>
                      <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
                    </div>
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
      <div class="padding justify-content-center d-flex">
        <div class="col-md-8">
          <div class="card"> <img class="card-img-top" style={{ 'objectFit': 'cover' }} src={bg} alt="Card image cap" />
            <div class="card-body little-profile text-center">
              <div class="pro-img"><img src={"http://localhost:53410/img/" + product.data.image.name} alt="user" /></div>
              <h3 class="m-b-0">{product.data.name}</h3>
              <p>{product.data.mail}</p>
              <p>{ldata} Vakansiya</p>
              <a href="javascript:void(0)" class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Bütün Vakansiyalar</a>
              <div class="row text-center m-t-20">
                <div class=" m-t-20">
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

      <div>{content}</div>
    </div>


  )
}

export default CompanyHome