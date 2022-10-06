
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CompanyOption = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:53410/api/Company/getall')
            .then(res => {
                setData(res.data)
            }).catch(err => console.log(err))
    }, []);
    
    
    
    const companyOption = data.map((data, index) => {
        return (
            
            <option key={data.id} onClick={(e)=>handle(e)} value={data.id} id={data.id}>{data.name}</option>
        
        )
    })



    return (
        <select>
            {companyOption } 
        </select>
    )
}

export default CompanyOption