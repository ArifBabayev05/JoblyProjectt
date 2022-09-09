import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Loader from '../../Jobs/Loader'
import Category from './Category'
import '../../../Assets/Styles/MainPage/Category/Category.css'


function Index() {
    const url = `http://localhost:53410/api/Vacancies/getall`
  // const [query, setQuery] = useState("")

  
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
        <Category product={product}/>
      </div>
     )

   }
  return (
    <div className='container category'>
        <h2 className='fade-up'>
            Populyar Kateqoriyalar
        </h2>
        <hr/>

        <div className=''>
        {content}
        </div>
    </div>
  )
}

export default Index