import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
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
