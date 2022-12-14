import React from 'react';
import '../../Assets/Styles/Layout/Footer.css'
import logo from '../../Assets/Images/Logo/1.png'
import instagram from '../../Assets/Images/Logo/instagram.png'
import linkedin from '../../Assets/Images/Logo/linkedin.png'
import ChatBotElement from '../../Components/ChatBot/ChatBot';

export const Footer = () => {
    return (
        <div>
            <ChatBotElement />
          
            <footer>
                <div className='footer__container container'>
                    <div className='footer__logo'>
                        <a href='/#'>
                            <img alt='Value' src={logo} />
                        </a>
                    </div>
                    <nav className='nav'>
                        <ul>
                            <a href='/about' alt='footer'>Haqqımızda</a>
                            <a href='/job' alt='footer'>İş Elanları</a>

                        </ul>
                        <ul>
                            <a href='/company' alt='footer'>Şirkətlər</a>
                            <a href='/contact' alt='footer'>Əlaqə</a>

                        </ul>
                    </nav>

                    <div className='footer__lang'>
                        <div className='social__button'>
                            <div className='row'>
                                <div className='col-6'>
                                    <a href='https://www.instagram.com/' rel="noreferrer" target="_blank" className='me-4'>

                                        <div className='social'>
                                            <img src={instagram} alt='logo'></img>

                                        </div>
                                    </a>
                                </div>
                                <div className='col-6'>
                                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/'>
                                        <div className='social'>
                                            <img src={linkedin} alt='logo'></img>

                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};