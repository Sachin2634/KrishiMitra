import React, { useEffect, useState } from 'react';
import Nav_Weather from '../components/Nav_Weather';
import Dash_Sidebar from '../components/Dash_Sidebar';
import KrishiLearn from '../components/KrishiLearn';
import Footer from '../components/Footer';
import ConsumerNavbar from '../components/ConsumerNavbar';
import ConsumerSideBar from '../components/ConsumerSideBar';

const Blogs = () => {
  // Local state for managing the user data
  const [user, setUser] = useState(null);

  // Use effect to load the user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
        // Optionally handle the case where the JSON is invalid
      }
    }
  }, []);

  // Rendering logic
  const renderNavbar = () => {
    if (!user) return null;
    return user.role === 'farmer' ? <Nav_Weather /> : <ConsumerNavbar />;
  };

  const renderSidebar = () => {
    if (!user) return null;
    return user.role === 'farmer' ? <Dash_Sidebar /> : <ConsumerSideBar />;
  };

  return (
    <div>
      {renderNavbar()}
      <div className='flex'>
        <div className='bg-[#00cc5c]'>
          {renderSidebar()}
        </div>
        <KrishiLearn />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;