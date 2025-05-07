import React from 'react';
import Nav_Weather from '../components/Nav_Weather';
import Dash_Sidebar from '../components/Dash_Sidebar';
import KrishiLearn from '../components/KrishiLearn';
import Footer from '../components/Footer';
import ConsumerNavbar from '../components/ConsumerNavbar';
import ConsumerSideBar from '../components/ConsumerSideBar';

const Blogs = () => {
  // Read user from localStorage and parse it
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      {user && user.role === 'farmer' ? <Nav_Weather /> : <ConsumerNavbar />}

      <div className='flex'>
          <div className='bg-[#00cc5c]'>
          {user && user.role === 'farmer' ? <Dash_Sidebar/> : <ConsumerSideBar />}
          </div>
        <KrishiLearn />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;