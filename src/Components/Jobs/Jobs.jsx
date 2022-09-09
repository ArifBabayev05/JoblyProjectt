import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import JobCard from './JobCard'
import '../../Assets/Styles/Job/Job.css'
// import search from '../../Assets/Images/Logo/search.svg'



//Full Jobs

//CORS policy Error with Another URL!!!
function Jobs() {
  const url = `http://localhost:53410/api/Vacancies/getall`
  const [query, setQuery] = useState("")

  
  const [products, setProducts] = useState({
    loading: false,
    data: null,
    error: false
  })

  

  useEffect(()=>{
    setProducts({
      loading:true,
      data: null,
      error: false
      
    })

    axios.get(url)
    .then(response =>{
        setProducts({
          loading:false,
          data: response.data,
          error: false
        })

        .catch(() =>{
          setProducts({
            loading:false,
            data: null,
            error: true
          })
        })
    })
  }, [url])

  let content = null

  if(products.loading){
    content = <Loader/>
  }

  if(products.error){
    content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
  }

  if(products.data){
    content =
     products.data.map((product)=>
      <div key={product.id}>
        <JobCard product={product}/>
      </div>
     )

   }

   if(products.data){
    content = 
    products.data.filter(product=>{
      if (query === "") {
        return product;
      } else if(product.name.toLowerCase().includes(query.toLowerCase())) {
        
        return product;
      }
      else  if(product.company.name.toLowerCase().includes(query.toLowerCase())) {
        
        return product;
      }
    }).map((product)=>
    <div key={product.id}>
      <JobCard product={product}/>
    </div>
   ).reverse();
   }

  return (
    <div>
     <div className='d-flex container'>
     <h1  className='text container '  style={{color:'var(--pink)',fontSize:'35px',alignItems:'center',display:'flex'}}>Aktiv Vakansiyalar</h1>
    <form className='searchJob mb-5' style={{alignItems:'center',display:'flex',top:'20px'}}>
      <input  className='searchBar mt-2 p-2'  onChange={event =>console.log( setQuery(event.target.value))} type='text'></input>
      <button className='search__submit' type='submit'>
                  <img src='https://www.citypng.com/public/uploads/small/116400840186bmo0mkghcdq8hn99wmpbh9wrgbytghidisi7e41vegbclccrb6kg9hrk0ebgqrpc5ezz2tjtkvsfsvk7yfbakowxbpvrzsakde3.png'   alt='some value'/>
      </button>

    </form>
     </div>

      {content}

    </div>
  )
}

export default Jobs