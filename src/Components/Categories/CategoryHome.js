import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../Jobs/Loader'

const CategoryHome = () => {
    const { id } = useParams()

    const [ldata, setlData] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:53410/api/Vacancies/getlistbycategory?categoryId=${id}`)
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get(`http://localhost:53410/api/Vacancies/getlistbycategory?categoryId=${id}`)
            .then(res => {
                setlData(res.data.length)
            }).catch(err => console.log(err))
    }, [])



    const url = `http://localhost:53410/api/Categories/getbyid?id=${id}`
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
                                                <h6 className=' ms-3 text-white'>{data.name}</h6> <span className=' ms-3 d-flex'>{data.company.name}</span>
                                            </div>
                                        </div>
                                        <div className="text-dark badge"> <span >Daha ??trafl??</span> </div>
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
        content = <p>X??ta ba?? verdi, yenid??n yoxlay??n.</p>
    }
    if (product.data) {
        content =
            <div className="padding justify-content-center d-flex">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body little-profile text-center">
                            <h3 className="m-b-0  mt-5"><span className='fw-bold text-dark'>{product.data.name}</span> Kateqoriyas??</h3>
                            <p><span className='fw-bold text-dark'>{ldata}</span> Vakansiya</p>
                            <a href="/job" className="m-t-10 waves-effect waves-dark btn btn-primaryy btn-md btn-rounded" data-abc="true">B??t??n Vakansiyalar</a>
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
            <div>{content}</div>
        </div>


    )

}

export default CategoryHome