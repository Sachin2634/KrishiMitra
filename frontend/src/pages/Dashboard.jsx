import React from 'react'
import Footer from '../components/Footer'
import Dashboarddataboxes from '../components/dashboarddataboxes'
import Dash_Sidebar from '../components/Dash_Sidebar'
// import SalesAnalysis from '../components/SalesAnalysis'
const Dashboard = () => {
  return (
    
    <div>
    <div className="flex">
      <Dash_Sidebar />

      <div className="flex flex-col">
        <Dashboarddataboxes />  
      </div>

      
    </div>
    <Footer/>
    </div>
  )
}

export default Dashboard