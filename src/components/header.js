import React, { useEffect, useRef } from 'react';
import headerimg from '../styles/images/header-img.png';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const header = headerRef.current;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        header.classList.add('-translate-y-full');
        header.classList.remove('translate-y-0');
      } else {
        // Scrolling up
        header.classList.remove('-translate-y-full');
        header.classList.add('translate-y-0');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={headerRef} className="fixed top-0 w-full z-[999] bg-white shadow-md transform translate-y-0 transition-transform duration-300 ease-in-out">
      <div className="flex justify-center items-center">
        <img src={headerimg} alt="logo" className="w-96 lg:w-[600px] h-20 object-contain" />
      </div>
    </div>
  );
};

export default Header;
