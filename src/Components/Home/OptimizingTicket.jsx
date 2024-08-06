import { Button } from '@mui/material'
import React from 'react'
import Track1 from '../../assets/images/track1.svg'
import Track2 from '../../assets/images/track2.svg'
import TicketPriceChart from './TicketPriceChart'
import EventCard from '../Home/EventCard'
export default function OptimizingTicket() {
    return (
        <div className='container marginSet managewidth'>
            <div className="featureRow">
                <div>
                    <p>TicTrends Features</p>
                    <h2>Optimizing Ticket Sales Strategy</h2>
                </div>
                <Button variant='outlined' className='footerBtn tryForFree'>Try For Free</Button>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12 mt-sm-5 mt-4">
                    <div className="ticketCard">
                        <div className='d-flex gap-sm-3 gap-2 align-items-start flex-column flex-sm-row align-items-sm-center'>
                            <img src={Track1} alt="" />
                            <h3>
                                Maximizing Revenue with Data-Driven Ticket Inventory Management
                            </h3>
                        </div>
                        <p>
                            When it comes to selling ticket inventory, timing is everything. Use our supply and price data to determine if now is the right time to sell your tickets or if prices may go up due to decreasing ticket supply.
                        </p>
                        <div className='priceCard'>
                            <div className='d-flex justify-content-between gap-2 align-items-center'>
                                <h6>Ticket Price</h6>
                                <p style={{ fontSize: '16px', marginTop: '0' }}>Kanie West</p>
                            </div>
                            <TicketPriceChart />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12 mt-xl-5 mt-4">
                    <div className="ticketCard">
                        <div className='d-flex gap-sm-3 gap-2 align-items-start flex-column flex-sm-row align-items-sm-center'>
                            <img src={Track2} alt="" />
                            <h3>
                                Predict Price Ranges for Recent Tour Announcements Using Similar Events
                            </h3>
                        </div>
                        <p>
                            Use our search by venue option to get a list of artists playing at the same venues. Allowing you to find comparable event prices to determine if you should buy tickets for recently announced shows.
                        </p>
                        <div className='priceCard priceCard2'>
                            <EventCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
