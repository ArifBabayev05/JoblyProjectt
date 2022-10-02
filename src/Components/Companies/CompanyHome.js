import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'
import Loader from '../Jobs/Loader'
import { ShowOnLogin,ShowOnLogout } from '../../Layouts/HiddenLinks/HiddenLinks'
//Job Details
function CompanyHome() {

  const { id } = useParams()
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
      <div className='card'>
        <div className='card-header'>
          <div className='d-flex'>
            <div className='headerImage me-4 mb-3'>
              <img src={"http://localhost:53410/img/"+product.data.image.name} alt='asf' />
              {/* src={"http://localhost:53410/img/"+props.product.company.image.name} */}
            </div>
            <h1>{product.data.name}</h1>
          </div>

          <div className='salaryInfo'>

          </div>
        </div>

        <div className='apply'>
          <ShowOnLogin>
          <button className='btn h'>Müraciət Et</button>

          </ShowOnLogin>
          <ShowOnLogout>
          <a href='/login' className='btn h'>Daxil Olun</a>

          </ShowOnLogout>
        </div>

     

        <div className='card-body'>
          <div className='top_infos d-flex'>
            <p className='me-2'>{product.data.name}</p>
            <p>{product.data.name}</p>

          </div>

          <div className='body_infos row'>
            <div className='works col-lg-6 col-sm-12'>
              <h3 className='mb-3 ms-1'>Əsas Vəzifə Öhdəlikləri</h3>
              {/* <p className='mt-4 ms-4'>{product.data.vəzifəÖhdəlikləri}</p> */}
            </div>
            <div className='skills  col-lg-6 col-sm-12'>
              <h3 className='mb-4 ms-1'>Lazım Olan Bacarıqlar</h3>
              {/* <p className='ms-5'>{product.data.tələblər}</p> */}
            </div>


          </div>

        </div>
        <div className='d-flex justify-content-end card-footer'>
          <h6> {product.data.name}</h6>
         
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