import React, { useEffect }from 'react';

import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import qclogo2 from '../styles/images/qclogo2.png'


const Header = () => {

  useEffect(() => {
    let lastScrollY = 0;
    const header = document.querySelector(".header");

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide the header
        header.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up, show the header
        header.style.transform = "translateY(0)";
      }
      lastScrollY = window.scrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (

    <div className="header">
        <div className="header-logo">
            <img src={qclogo2} alt='logo' style={{width: '700px', height: '90px'}}/> 
        </div>
    </div>
  )
}

export default Header;


