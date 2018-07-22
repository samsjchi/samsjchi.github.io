import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../../assets/img/sc-logo.jpg';

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={Logo} alt="" />
      </div>
      <nav className="nav__links">
        <ul>
          <li>
            <NavLink exact to="/">
              Work
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/photography">Photography</NavLink>
          </li> */}
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
