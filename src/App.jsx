import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PortfolioPage from './pages/PortfolioPage'
import LessonPage from './pages/LessonPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/lessons/:id" element={<LessonPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
