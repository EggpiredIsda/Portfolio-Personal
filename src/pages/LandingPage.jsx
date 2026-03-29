import React from 'react'
import HeroSection from '../components/Hero/HeroSection'
import CircularGallery from '../components/Gallery/CircularGallery'

function LandingPage() {
  return (
    <div className="landing-page">
      <HeroSection />
      <CircularGallery />
    </div>
  )
}

export default LandingPage
