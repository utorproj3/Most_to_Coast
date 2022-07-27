import React from 'react';
import "./header.css";
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

const Header = () => {
  return (
    <section class="top-nav">
      <div>
        <NavLink to="/main"><img src="img/Most2Coast.png" className="logo-header" alt="airplanelogo" /></NavLink>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class='menu-button-container' for="menu-toggle">
        <div class='menu-button'></div>
      </label>
      <ul class="menu">
        <li><NavLink to="/account">Account</NavLink></li>
        <li><NavLink to="/planner">Make A Plan</NavLink></li>
        <li><NavLink to="/viewplanner">View Your Plans</NavLink></li>
      </ul>
    </section>
  );
};

export default Header;
