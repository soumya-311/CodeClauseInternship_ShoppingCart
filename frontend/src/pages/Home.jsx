import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Ourpolicy from '../components/Ourpolicy'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Ourpolicy/>
      <Newsletter/>
    </div>
  )
}

export default Home
