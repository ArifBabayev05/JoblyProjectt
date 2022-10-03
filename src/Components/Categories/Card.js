import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/Logo/1.png'


const Card = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:53410/api/Vacancies/getlistbycategory?categoryId=${props.product.id}`)
            .then(res => {
                setData(res.data.length)
            }).catch(err => console.log(err))
    }, [])

    return (
        <div className="col ">
            <div className='border-2 aa rounded container'>
                <div className="card  card-margin">

                    <Link id='cards' to={`/category/${props.product.id}`} style={{ textDecoration: 'none' }}>

                        <div className="card-body bodyy pt-0 mt-4">

                            <div className="widget-49">
                                <div className="widget-49-title-wrapper">
                                    <div className="widget-49-date-primaryy">
                                        <img style={{ 'width': '60px', 'border-radius': "50px" }} src={logo} alt='aaa' />
                                    </div>
                                    <div className="widget-49-meeting-info">
                                        <span className="widget-49-pro-title fw-bolder fs-5">{props.product.name}</span>
                                    </div>
                                </div>
                                <ul className="widget-49-meeting-points">
                                    {/* <li className="widget-49-meeting-item"><span className='text-dark '>Email Ünvanı: {props.product.mail}</span></li> */}
                                    {/* <li className="widget-49-meeting-item"><span className='text-dark '>Vakansiya Sayı: {data}</span></li> */}


                                    {/* <li className="widget-49-meeting-item"><span className='text-dark '>Telefon Nömrəsi: +{props.product.telNumber}</span></li> */}
                                </ul>
                                <div className="widget-49-meeting-action">
                                    <a href="/#" className="btn btn-sm btn-flash-border-primary">Daha ətraflı</a>
                                </div>
                            </div>
                        </div>
                    </Link >
                </div>
            </div>

        </div>

    )
}

export default Card