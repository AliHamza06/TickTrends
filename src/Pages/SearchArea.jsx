import React from 'react'
import EventList from '../Components/EventListContent/EventList'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

export default function SearchArea() {
  return (
    <>
      <div className='mainContainer'>
        <Header />
        <EventList />
      </div>
      <Footer />
    </>
  )
}
