import React from 'react';
import { Router, Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return <div className="nav-container">
         <ul className="nav__list-container">
            <li>
                <Link style={{ textDecoration: "none", color: "black" }} to="/">Home</Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "black" }} to="/users">Users</Link>
            </li>
        </ul>
    </div>;
};

export default Nav;