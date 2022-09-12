import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../../../Components/Jobs/Loader'
import Sidebar from '../../Sidebar/Sidebar'
import { ShowOnAdmin, ShowOnUser } from '../../../../Layouts/HiddenLinks/Router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'


const VacancyUpdate = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:53410/api/Vacancies/getbyid?id=${id}`)
      .then(res => {
        console.log(res.data);
        setData(res.data)
      }).catch(err => console.log(err))
  }, [])

  useEffect(() => {
    axios.post(`http://localhost:53410/api/Vacancies/update?id=${id}`)
      .then(res => {
        setData(res.data)
      }).catch(err => console.log(err))
  }, [])


  return (
    <div>
      <p>
        {data.name}
      </p>
      <p>
        {data.tələblər}
      </p>
    </div>
  )
}

export default VacancyUpdate