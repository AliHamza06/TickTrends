import React from 'react'
import PlatForm from '../../assets/images/platform.svg'
import { Button, IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function OurPlatform() {
    return (
        <div className='container marginSet managewidth'>
            <div className="featureRow">
                <div>
                    <p>Our Platform</p>
                    <h2>Let’s Get Start Monitoring Tickets!</h2>
                </div>
                <Button variant='outlined' className='footerBtn tryForFree'>Try For Free</Button>
            </div>
            <div className='platFormSec'>
                <img src={PlatForm} alt="" />
                <div className='playArea'>
                    <IconButton>
                        <PlayArrowIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
