import React from 'react';
import '../../Assets/Styles/Layout/Footer.css'
import logo from '../../Assets/Images/Logo/1.png'
import instagram from '../../Assets/Images/Logo/instagram.png'
import linkedin from '../../Assets/Images/Logo/linkedin.png'




export const Footer = () => {
    return (
        <div>
            <footer>
                <div className='footer__container container'>
                    <div className='footer__logo'>
                        <a href='/#'>
                            <img alt='Value' src={logo}/>
                        </a>
                    
                       
                    </div>

                    <nav className='nav'>
                        <ul>
                            <a href='/about' alt='footer'>Haqqımızda</a>
                            <a href='/job' alt='footer'>İş Elanları</a>

                        </ul>
                        <ul>
                            <a href='/profile' alt='footer'>Profil</a>
                            <a href='/contact' alt='footer'>Əlaqə</a>

                        </ul>
                    </nav>

                    <div className='footer__lang'>
                        <div className='social__button'>
                            <a href='https://www.instagram.com/' target="_blank" className='me-4'>
                                
                                <div className='social'>
                                    <img src={instagram} alt='logo'></img>
                                    
                                </div>
                            </a>
                            <a target="_blank" href='https://www.linkedin.com/'>
                                <div className='social'>
                                    <img src={linkedin} alt='logo'></img>
                    
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
      );
};