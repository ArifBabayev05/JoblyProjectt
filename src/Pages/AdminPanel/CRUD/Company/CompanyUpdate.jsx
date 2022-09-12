import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import Loader from '../../../../Components/Jobs/Loader'
import Sidebar from '../../Sidebar/Sidebar'
import { ShowOnAdmin,ShowOnUser } from '../../../../Layouts/HiddenLinks/Router'

const CompanyUpdate = (props) => {
  // const navigate = useNavigate();
  //   const [data, setData] = useState([])
  //   useEffect(() => {
  //     const id  = props.match.params.id
  //       axios.get(`http://localhost:53410/api/Vacancies/update?id=${id}`)
  //           .then(res => {
  //               setData(res.data)
  //           }).catch(err => console.log(err))
  //   }, [])
  // return (
  //   <div>

  //   </div>
  // )
}

export default CompanyUpdate