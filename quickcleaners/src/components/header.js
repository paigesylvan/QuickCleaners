import React, { useEffect }from 'react';
import headerimg from '../styles/images/header-img.png'


const Header = () => {

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const header = document.querySelector(".header");
  
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down - hide header
        header.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up - show header
        header.style.transform = "translateY(0)";
      }
      lastScrollY = window.scrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header">
        <img src={headerimg} alt='logo'className="header-logo" /> 
    </div>
  )
}

export default Header;


