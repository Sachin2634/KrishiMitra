import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import LandingPage from './pages/LandingPage';
import FarmerHomePage from './pages/FarmerHomepage'
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<LandingPage />}/>
            <Route path='/farmerhomepage' element={<FarmerHomePage />}/>
            <Route path='/contactus' element={<ContactUs />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
