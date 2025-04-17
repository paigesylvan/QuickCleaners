import React, {useState} from 'react';
import Logo from '../styles/images/Logo1.png';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import qclogo2 from '../styles/images/qclogo2.png'


const Header = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (

    <div className="header">

      <div className='icons'>
        <div className="dropdown">
          <FiAlignJustify className="dropdown-button" style={{width: '40', height: '40px'}}onClick={() => {setDropdownOpen(!dropdownOpen);}} />
          <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <li><Link to="/home" className="home-button"> Home </Link></li>
            <li><Link to="/services" className="services-button"> Our Services</Link></li>
            <li><Link to="/customers" className="customers-button"> Our Customers</Link> </li>
          </ul>

        <div className="call-button">
          <a href="tel:222-222-2222" className="phone-link" aria-label="Call Phone Number">
          <FaPhone className='phone-icon'style={{ fontSize: '1.8rem', color: 'black', cursor: 'pointer' }} />
          <span className="phone-number">222-222-2222</span>
          </a>
        </div>

         </div>
      </div>

        <div className="header-logo">
            <img src={qclogo2} alt='logo' style={{width: '700px', height: '90px'}}/> 
        </div>

      

    </div>
  )
}

export default Header;


