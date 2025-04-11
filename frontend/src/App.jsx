import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import './index.css'
import LandingPage from './pages/LandingPage';
import FarmerHomePage from './pages/FarmerHomepage'
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Faq from './pages/Faq';
import Pricing from './pages/Pricing';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<LandingPage />}/>
            <Route path='/farmerhomepage' element={<FarmerHomePage />}/>
            <Route path='/contactus' element={<ContactUs />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/faq' element={<Faq />}/>
            <Route path='/pricing' element={<Pricing />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
