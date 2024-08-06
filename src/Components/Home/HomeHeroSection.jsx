import { Button, IconButton } from '@mui/material';
import React from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import TicTrendChart from './TicTrendChart';
import ChartTable from './ChartTable';
export default function HomeHeroSection() {
    return (
        <div className="">
            <div className="heroSection">
                <div className="heroBackground">
                    <div className="container managewidth">
                        <div className="heroContent">
                            <div className="stayAhead">
                                <Button variant='contained' className='ticTrendBtn'>TicTrends</Button>
                                <div className='d-flex align-items-center stayDes'>
                                    <p>Stay Ahead With Event Pricing And Supply Trends</p>
                                    <IconButton>
                                        <ArrowForwardOutlinedIcon />
                                    </IconButton>
                                </div>
                            </div>
                            <h1>
                                Analyzing Pricing & Supply Trends <strong>Made Easy</strong>
                            </h1>
                            <p>
                                Maximize Your Ticket Sales Strategy: Our Software Helps You Identify the Best Time to Sell Tickets and Gives You An Idea of What Newly Announced Tours Tickets May Sell For.
                            </p>
                            <Button variant='contained' className='footerBtn mt-4'>Try For Free</Button>
                        </div>
                        <div className=''>
                            <TicTrendChart />
                            <ChartTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
