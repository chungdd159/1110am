import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Header = (props) => {
  const { brand } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {brand}
        </a>
        <div>
          <ul className="navbar-nav mr-auto" style={{flexDirection: "row"}}>
            <li className="nav-item ml-4">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item ml-4">
              <Link to="/add" className="nav-link">
                <i className="fas fa-plus"></i> Add
              </Link>
            </li>
            <li className="nav-item ml-4">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  brand: 'My App',
};
export default Header;
