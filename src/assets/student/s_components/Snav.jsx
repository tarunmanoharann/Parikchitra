import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import '../s-css/Snav.css';

const Snav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars className="icon" />
        </button>
        <div className="website-title">Parikchitra</div>
      </div>

      <div
        className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}
      >
        {isSidebarOpen && (
          <div className="sidebar-content">
            <ul>
              <li>Updates</li>
              <li>Certifications</li>
              <li>Results</li>
            </ul>
            <div className="logout">
              <FaSignOutAlt className="icon" />
              <span>Logout</span>
            </div>
          </div>
        )}
      </div>

      <div className="nav-right">

        

        <div className="profile-container">

        <button>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className='notifications'
        >
       <path fill="none" d="M0 0h24v24H0z"></path>
       <path
      fill="currentColor"
      d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z"
      ></path>
      </svg>
      </button>


          <button className="profile-toggle" onClick={toggleProfile}>
            <FaUserCircle className="icon" />
          </button>
          <div className={`profile-dropdown ${isProfileOpen ? 'show' : ''}`}>
            <a href="#">Profile</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Snav;