import React from 'react';
import "./header.css";
import { Navigate, NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const handleLogout = (event) => {
    event.preventDefault();
    Auth.logout();

    return <Navigate to={'/'} />;
  }

  return (
    <header>

      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/main"><img src="img/Most2Coast.png" className="logo-header" alt="airplanelogo" /></NavLink>
          </li>
          <li>
            <NavLink to="/account">Account</NavLink>
          </li>
          <li>
            <NavLink to="/planner">Make A Plan</NavLink>
          </li>
          <li>
            <NavLink to="/viewplanner">View Your Plans</NavLink>
          </li>
          <li>
            <button type='click' className='logout-button' onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default Header;