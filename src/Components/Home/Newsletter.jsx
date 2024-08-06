import { Button } from '@mui/material'
import React from 'react'

export default function Newsletter() {
    return (
        <div className="newsLetterSec marginSet">
            <div className='container'>
                <div className="newLetterSec">
                    <h6>Newsletter</h6>
                    <h4>Subscribe to our newsletter </h4>
                    <p>
                        Subscribe to our free newsletter for tour announcements with free analytics
                    </p>
                    <div className='emailCont'>
                        <input type="email" placeholder='Enter your email address' className='form-control' />
                        <Button variant='contained' className='subscribeBtn'>Subscribe Now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
