import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { Button } from '@mui/material';
import UserImg from '../../assets/images/user.svg'
export default function Header() {
    const location = useLocation();

    return (
        <div className='mainHeader'>
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto navUl">
                            <li className="nav-item">
                                <Link to='/search-area' className="nav-link navLink" aria-current="page">
                                    Use Cases
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/analysis" className="nav-link navLink">
                                    How It Works
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navLink" href='#'>
                                    Our Company
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navLink" to='/analysis'>
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                        {location.pathname === '/' ? (
                            <div className='navButtonGroup'>
                                <Button variant='outlined' className='navBtn signInBtn'>Sign In</Button>
                                <Button variant='contained' className='navBtn'>Try For Free</Button>
                            </div>
                        ) : (

                            <div className='navButtonGroup'>
                                <Button variant='outlined' className='navBtn signInBtn'>Support</Button>
                                <Button variant='contained' className='navBtn'><img src={UserImg} alt="" style={{ marginRight: '5px' }} /> My account</Button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}
