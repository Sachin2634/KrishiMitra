import React from 'react'
import Nav_Weather from '../components/Nav_Weather'
import Dash_Sidebar from '../components/Dash_Sidebar'
import Equipments from '../components/Equipments'
import Footer from '../components/Footer'

const RentEquipments = () => {
  return (
    <div>
        <Nav_Weather/>
        <div className='flex'>
            <div className='bg-[#00cc5c]'><Dash_Sidebar/></div>
            <Equipments/>
        </div>
        <Footer/>
    </div>
  )
}

export default RentEquipments