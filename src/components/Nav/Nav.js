import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">Work</Link>
          </li>
          {/* <li>
            <Link to="/photography">Photography</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
