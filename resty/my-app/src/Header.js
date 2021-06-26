import './Header.scss'
import React from 'react';
import { Link } from "react-router-dom";

const Header = ()=> {
    return (
        <header>
            <h1> RESTy</h1>
            <nav id="nav">
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/history">History</Link>
            </li>
            <li>
              <Link className="link" to="/help"> Help</Link>
            </li>
          </ul>
        </nav>
        </header>
    )
}

export default Header;
