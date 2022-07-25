import React from 'react';
import "./header.css";
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

const Header = () => {
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
        </ul>
      </div>

    </header>
  );
};

export default Header;