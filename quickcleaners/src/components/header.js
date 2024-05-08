import React from 'react';
import Logo from '../styles/images/Logo1.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt='logo' className="qc-header-logo"/>
        <div className="header-navagation">
          <Link to="/home" className="home-button"> Home </Link>
          <Link to="/services" className="services-button"> Our Services</Link>
          <Link to="/customers" className="customers-button"> Our Customers</Link>
        </div>
      </div>
  )
};

export default Header;