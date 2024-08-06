import React from 'react'
import { Button, IconButton } from '@mui/material'
import footerLogo from '../../assets/images/footerLogo.svg'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <div className='footerMain'>
      <div className='footerManageWidth'>
        <div className='footerHeader'>
          <Link to='/'>
          <img src={footerLogo} alt="" />
          </Link>
          <div className='navButtonGroup mt-0'>
            <Button variant='contained' className='footerBtn'>Try For Free</Button>
            <Button variant='outlined' className='footerBtn ourFeat' style={{ color: "#FFF" }}>Our Features</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-6 col-12 mt-4">
            <div className="footerHref">
              <h6>Address</h6>
              <p>
                2972 Westheimer Rd. Santa Ana, <br />
                Illinois 85486
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
            <div className="footerHref">
              <h6>Info</h6>
              <Link to='#'>Plans & Pricing</Link>
              <Link to='#'>Work With Us</Link>
              <Link to='#'>Blog & News</Link>
              <Link to='#'>About Us</Link>
              <Link to='#'>Free Demo</Link>
              <Link to='#'>Terms of Service</Link>
              <Link to='#'>Privacy Policy</Link>
              <Link to='#'>Cookies Policy</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 mt-4">
            <div className="footerHref">
              <h6>Contact us</h6>
              <Link to='#'>+1 123 321-12-34</Link>
              <Link to='#'>help@TickTrends.com</Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-5 col-sm-6 col-12 mt-4">
            <div className='socialIcon'>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <i className='bx bxl-facebook'></i>
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p className='copyRight'>©TickTrends 2024 — Copyright</p>
          </div>
        </div>
      </div>
    </div>
  )
}
