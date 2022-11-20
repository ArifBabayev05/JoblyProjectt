import axios from 'axios'
import React, { useEffect, useState } from 'react'
import JobCard from './Card'
import Loader from '../Jobs/Loader'
import src from '../../Assets/Images/Logo/src.png'


const Categories = () => {
    const url = `http://localhost:53410/api/Categories/getall`
    const [query, setQuery] = useState("")


    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false

        })

        axios.get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })

                    .catch(() => {
                        setProducts({
                            loading: false,
                            data: null,
                            error: true
                        })
                    })
            })
    }, [url])

    let content = null

    if (products.loading) {
        content = <Loader />
    }

    if (products.error) {
        content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
    }

    if (products.data) {
        content =
            products.data.map((product) =>
                <div key={product.id}>
                    <JobCard product={product} />
                </div>
            )
    }

    if (products.data) {
        content =
            products.data.filter(product => {
                if (query === "") {

                    return product;

                } else if (product.name.toLowerCase().includes(query.toLowerCase())) {

                    return product;
                }
                return "";
            }).map((product) =>
                <div key={product.id}>
                    <JobCard product={product} />
                </div>
            ).reverse();
    }

    return (
        <div>
            <div className='d-flex container'>
                <h1 className='text container ' style={{ color: 'var(--pink)', fontWeight: 'normal', fontSize: '35px', alignItems: 'center', display: 'flex' }}>Kateqoriyalar</h1>
                <form className='searchJob mb-5' style={{ alignItems: 'center', display: 'flex', top: '20px' }}>
                    <input className='searchBar mt-2 p-2' onChange={event => setQuery(event.target.value)} type='text'></input>
                    <button className='search__submit' type='submit'>
                        <img src={src} alt='some value' />
                    </button>
                </form>
            </div>

            <div className='row row-cols-1 row-cols-sm-1 row-cols-lg-3  row-cols-md-2 g-8 mx-5'>
                {content}
            </div>
        </div>
    )

}

export default Categories