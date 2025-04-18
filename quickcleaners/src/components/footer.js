import React from 'react';
import FooterPic from '../styles/images/footer.png';

const Footer = () => {
  return (
    <footer className='footer'> 
        <div className="bottom-section-text-container">
            <div className='hours'>
                <p>Monday - Friday: 7am - 6pm</p>
                <p>Saturday: 8am - 7pm</p>
                <p>Closed Sundays</p>
            </div>  
            <img className='footer-picture' src={FooterPic} alt='logoImage'/>
            <div className='address'>
                <p>2177 D Silvernail Road</p>
                <p>Pewaukee, Wisconsin</p>
                <p>262-549-9477</p>
            </div>
        </div>  
    </footer>
  )
};

export default Footer;