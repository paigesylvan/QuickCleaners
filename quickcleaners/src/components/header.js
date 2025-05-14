import React, { useEffect }from 'react';
import headerimg from '../styles/images/header-img.png'


const Header = () => {

  useEffect(() => {
    let lastScrollY = 0;
    const header = document.querySelector(".header");
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        header.style.transform = "translateY(-100%)";
      } else {
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
      <div className="header-logo">
        <img src={headerimg} alt='logo' style={{width: '650px', height: '95px'}}/> 
      </div>
    </div>
  )
}

export default Header;


