import React from 'react';
import Hero from '../Components/Hero';
import Popular from '../Components/Popular';
import Offers from '../Components/Offers';
import NewCollection from '../Components/NewCollection';
import NewsLetter from '../Components/NewsLetter';
function Home() {
  return (
    <>
        <Hero />
        <Popular />
        <Offers />
        <NewCollection />
        <NewsLetter />
    </>
  )
}

export default Home