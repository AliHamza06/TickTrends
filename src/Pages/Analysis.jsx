import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AnalysisHero from '../Components/Analysis/AnalysisHero'
export default function Analysis() {
    return (
        <>
            <div className='analysismainContainer'>
                <Header />
                <AnalysisHero />
            </div>
            <Footer />
        </>
    )
}
