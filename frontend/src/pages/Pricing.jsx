import React from 'react'
import SellerNavbar from '../components/SellerNavbar'
import Footer from '../components/Footer'
import Hero_Pricing from '../components/Hero_Pricing'
import Commission_Pricing from '../components/Commission_Pricing'
import Shipping from '../components/Shipping'
import Pricing_works from '../components/Pricing_works'
import Faq_Commisions from '../components/Faq_Commisions'
const Pricing = () => {
  return (
    <div>
        <SellerNavbar/>
        <Hero_Pricing/>
        <Commission_Pricing/>
        <Shipping/>
        <Pricing_works/>
        <Faq_Commisions/>
        <Footer/>
    </div>
  )
}

export default Pricing