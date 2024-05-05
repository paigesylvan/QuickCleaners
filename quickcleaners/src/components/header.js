import React from 'react';
import Logo from '../styles/Logo1.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt='logo' className="qc-header-logo"/>
        <div className="header-navagation">
          <nav className="home-button">Home</nav>
          <nav className="services-button">Our Services</nav>
          <Link to="/customers" className="customers-button"> Our Customers</Link>
        </div>
      </div>
  )
};

export default Header;