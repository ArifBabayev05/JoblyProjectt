import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Jobs/Loader'
import { ShowOnLogin, ShowOnLogout } from '../../Layouts/HiddenLinks/HiddenLinks'
import '../../Assets/Styles/Company/CardDetail.css';

//Job Details
function CompanyHome() {
  const { id } = useParams()

  const [query, setQuery] = useState("")
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:53410/api/Vacancies/getlistbycompany?companyId=${id}`)
      .then(res => {
        setData(res.data)
      }).catch(err => console.log(err))
  }, [])

  const array = data.map((data, index) => {
    return (
      <div>
        {data.name}
      </div>
    )
  })

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


  if (product.loading) {
    content = <Loader />
  }

  if (product.error) {
    content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
  }
  if (product.data) {
    content =
      <div class="padding justify-content-center">
        <div class="col-md-8">
          <div class="card"> <img class="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap" />
            <div class="card-body little-profile text-center">
              <div class="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user" /></div>
              <h3 class="m-b-0">Brad Macullam</h3>
              <p>Web Designer &amp; Developer</p> <a href="javascript:void(0)" class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a>
              <div class="row text-center m-t-20">
                <div class="col-lg-4 col-md-4 m-t-20">
                  <h3 class="m-b-0 font-light">10434</h3><small>Articles</small>
                </div>
                <div class="col-lg-4 col-md-4 m-t-20">
                  <h3 class="m-b-0 font-light">434K</h3><small>Followers</small>
                </div>
                <div class="col-lg-4 col-md-4 m-t-20">
                  <h3 class="m-b-0 font-light">5454</h3><small>Following</small>
                </div>
                <div>
                  {array}
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