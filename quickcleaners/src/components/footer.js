import React from 'react';
import footerimg from '../styles/images/footer-img.png'

const Footer = () => {
  return (
      <div className="footer" style={{background:'black'}}>
        <div className="left5">
          <img src={footerimg} height={'130px'} width={'240px'} className='footerlogo'></img>
          <p>2177 Silvernail Rd,</p>
          <p>Pewaukee, WI 53072</p>
          <h2>(262) 549-9477</h2>
        </div>
      <div className="middle5">
        <h1>Hours</h1>
        <p>Monday: 7am - 6pm</p>
        <p>Tuesday: 7am - 6pm</p>
        <p>Wednesday: 7am - 6pm</p>
        <p>Thursday: 7am - 6pm</p>
        <p>Friday: 7am - 6pm</p>
        <p>Saturday: 7am - 1pm</p>
        <p>Sunday: Closed</p>
      </div>
      <div className="right5">
        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.9049459146577!2d-88.26684000843377!3d43.04343141724433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805af20e8430043%3A0xa6e0dac49ec95e18!2sQuick%20Cleaners%20%26%20Laundry!5e0!3m2!1sen!2sus!4v1714941653774!5m2!1sen!2sus" referrerpolicy="no-referrer-when-downgrade" title=" " ></iframe>
      </div>
    </div>
  )
};

export default Footer;