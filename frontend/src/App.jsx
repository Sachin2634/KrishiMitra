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
import Dashboard from './pages/Dashboard';
import AddProductForm from './pages/AddProductForm';
import Blogs from './pages/Blogs';
import YourProducts from './pages/YourProducts';
import AccountSettings from './pages/AccountSettings';
import PriceTracking from './pages/PriceTracking';
import RentEquipments from './pages/RentEquipments';
import SearchProducts from './components/SearchProducts';
import ConsumerSearch from './pages/ConsumerSearch';
import ProductDescription from './components/ProductDescription';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<LandingPage />}/>
            <Route path='/farmerhomepage' element={<FarmerHomePage />}/>
            <Route path='/consumerhomepage' element={<ConsumerSearch />}/>
            <Route path='/contactus' element={<ContactUs />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/faq' element={<Faq />}/>
            <Route path='/pricing' element={<Pricing />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/addproduct' element={<AddProductForm />}/>
            <Route path='/product' element={<YourProducts />}/>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/account' element={<AccountSettings />}/>
            <Route path='/pricetracking' element={<PriceTracking />}/>
            <Route path='/rental' element={<RentEquipments />}/>
            <Route path='/product/:id' element={< ProductDescription/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
