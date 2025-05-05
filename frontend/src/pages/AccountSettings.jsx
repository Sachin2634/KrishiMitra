import React from 'react'
import Nav_Weather from '../components/Nav_Weather'
import Dash_Sidebar from '../components/Dash_Sidebar'
import Footer from '../components/Footer'
import MyAccount from '../components/MyAccount'
import PersonalDet_Account from '../components/PersonalDet_Account'
import AddressDetails from '../components/AddressDetails'
import BankDetails from '../components/BankDetails'
import DeliveryPreferences from '../components/DeliveryPreferences'
import UploadDocuments from '../components/UploadDocuments'


const AccountSettings = () => {
  return (
    <div>
        <Nav_Weather/>
        <div className='flex'>
            <div className='bg-[#00cc5c]'><Dash_Sidebar/></div>
            <div>
              <MyAccount/>
              <PersonalDet_Account/>
              <AddressDetails/>
              <DeliveryPreferences/>
              <BankDetails/>
              <UploadDocuments/>
              <button className='w-[130px] p-[10px] rounded-[32px] text-white bg-[#006A30] ml-[40vw] mb-12 cursor-pointer hover:bg-green-700 justify-items-center text-[24px]'>Save</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AccountSettings