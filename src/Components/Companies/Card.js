import React from 'react'
import { Link } from "react-router-dom";
import '../../Assets/Styles/Company/CompanyCard.css';


function CompanyCard(props) {
    const [company, setCompany] = useState('');


    //data.at(-1) last element of array
    useEffect(() => {
      axios.get("http://localhost:53410/api/Company/getall")
        .then(res => setCompany(res.data.length))
  
    })
    // const background = props.product.companyImage;
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
                                        <span class="widget-49-pro-title">{props.product.name}</span>
                                        <span class="widget-49-meeting-time">{props.product.mail}</span>
                                    </div>
                                </div>
                                <ol class="widget-49-meeting-points">
                                    <li class="widget-49-meeting-item"><span className='text-dark '>{company}</span></li>
                                    <li class="widget-49-meeting-item"><span className='text-dark '>Data migration is in scope</span></li>
                                    <li class="widget-49-meeting-item"><span className='text-dark '>Telefon Nömrəsi: +{props.product.telNumber}</span></li>
                                </ol>
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