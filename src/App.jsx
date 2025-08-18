import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './assets/Componets/AllHomepages/Navigation/Navigation'
import AllHomepages from './assets/Componets/AllHomepages/AllHomepages'
import SmoothCursor from './assets/Componets/SmoothCursor/SmoothCursor'
import AboutSection from './assets/Componets/Aboutus/AboutSection'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <SmoothCursor />
        <Routes>
          <Route path='/' element={<AllHomepages />} />
          <Route path='/about' element={<AboutSection />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
