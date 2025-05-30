import React, { useEffect }from 'react';
import headerimg from '../styles/images/header-img.png'


const Header = () => {

  useEffect(() => {
    let lastScrollY = window.scrollY;
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
    <div className="header absolute top-0 w-full h-screen-6 lg:h-screen-8 flex justify-center items-center z-[999] bg-white shadow-lg transition-transform duration-300 ease-in-out">
        <img src={headerimg} alt='logo'className="header-logo   w-96 h-12 lg:w-[600px] lg:h-20 " /> 
    </div>
  )
}

export default Header;


