import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './assets/Componets/AllHomepages/Navigation/Navigation'
import AllHomepages from './assets/Componets/AllHomepages/AllHomepages'
import SmoothCursor from './assets/Componets/SmoothCursor/SmoothCursor'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <SmoothCursor />
        <Routes>
          <Route path='/' element={<AllHomepages />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
