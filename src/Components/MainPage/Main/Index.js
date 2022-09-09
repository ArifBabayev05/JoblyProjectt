import React from 'react'
import '../../../Assets/Styles/MainPage/Hero/Hero.css'
import logo from '../../../Assets/Images/Hero/Hero.png'
import search from '../../../Assets/Images/Hero/arroww.png'


function Index() {

  // const [query, setQuery] = useState("")

  return (
    <div className='container'>
        <div className='row'>
        <div className='col-lg-6 h2'>
            <h2 className='color-dark'>Yeni <span>Karyera <br/> İmkanları </span><br/> Əldə Edin!</h2>
            <p>Biliklərinizi təsdiq edin, sertifikat alın və axtardığınız işi asanlıqla tapın!</p>

            <form method='get' href='/job' className='homepage_search'>
                <input type='hidden' />
                <label htmlFor='search'></label>
                <a href='/job'>
                <input disabled className='search'  placeholder='İş Axtarırsan? Elə indi başla!'/>
                
                </a>

                <a  href='/job'  className='search__submit' type='submit'>
                
                  <img src={search}  alt='some value'/>
                </a>
               
            </form>
        </div>
        <div className='col-lg-6'>
            <img className='hero' alt='Hero' src={logo}/>
        </div>
        </div>
    </div>
  )
}

export default Index