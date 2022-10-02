import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../../Assets/Styles/Company/CompanyCard.css';

function CompanyCard(props) {
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:53410/api/Vacancies/getlistbycompany?companyId=${props.product.id}`)
            .then(res => {
                setData(res.data.length)
            }).catch(err => console.log(err))
    }, [])

    // const array = data.map((data, index) => {
    //     return (
    //         <tr>
    //             <td>{data}</td>

    //         </tr>
    //     )
    // })

    return (
        <div class="col ">
            <div className='border-2 aa rounded container'>
                <div class="card  card-margin">

                    <Link id='cards' to={`/company/${props.product.id}`} style={{ textDecoration: 'none' }}>

                        <div class="card-body bodyy pt-0 mt-4">

                            <div class="widget-49">
                                <div class="widget-49-title-wrapper">
                                    <div class="widget-49-date-primary">
                                        <img style={{ 'width': '60px', 'border-radius': "50px" }} src={"http://localhost:53410/img/" + props.product.image.name} alt='aaa' />


                                    </div>
                                    <div class="widget-49-meeting-info">
                                        <span class="widget-49-pro-title fw-bolder fs-5">{props.product.name}</span>
                                    </div>
                                </div>
                                <ul class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span className='text-dark '>Email Ünvanı: {props.product.mail}</span></li>
                                    <li class="widget-49-meeting-item"><span className='text-dark '>Vakansiya Sayı: {data}</span></li>


                                    <li class="widget-49-meeting-item"><span className='text-dark '>Telefon Nömrəsi: +{props.product.telNumber}</span></li>
                                </ul>
                                <div class="widget-49-meeting-action">
                                    <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                                </div>
                            </div>
                        </div>
                    </Link >
                </div>
            </div>

        </div>

    )
}

export default CompanyCard