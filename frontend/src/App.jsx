import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
import FarmerHomePage from './pages/FarmerHomepage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<LandingPage />}/>
            <Route path='/farmerhomepage' element={<FarmerHomePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
