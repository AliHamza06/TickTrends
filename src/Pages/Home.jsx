import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import HomeHeroSection from '../Components/Home/HomeHeroSection'
import OptimizingTicket from '../Components/Home/OptimizingTicket'
import Brokers from '../Components/Home/Brokers'
import OurPlatform from '../Components/Home/OurPlatform'
import Newsletter from '../Components/Home/Newsletter'

export default function Home() {
    return (
        <>
            <div className='mainContainer'>
                <Header />
                <HomeHeroSection />
            </div>
            <OptimizingTicket />
            <Brokers />
            <OurPlatform />
            <Newsletter />
            <Footer />
        </>
    )
}
