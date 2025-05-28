import React from 'react';
import footerimg from '../styles/images/footer-img.png'

const Footer = () => {
  return (
      <div className="footer
      flex flex-row justify-center overflow-hidden p-2 md:flex-col md:items-start md:justify-start md:pl-20 md:pt-0 md:pr-0 md:pb-0 md:h-auto
      " style={{background:'black'}}>
         <div className="left5
         ml-5 sm:ml-12 sm:mt-9
         ">
          <img src={footerimg} height={'130px'} width={'240px'} alt='img' className='footerlogo sm:h-auto sm:w-auto sm:pt-[50px]'></img>
          <p className='sm:text-[10px] sm:leading-[2px]'>2177 Silvernail Rd,</p>
          <p className="sm:text-[10px] sm:leading-[2px]">Pewaukee, WI 53072</p>
          <h2 className="mt-4 text-[10px] sm:mt-[50px]">(262) 549-9477</h2>
        </div>
      <div className="middle5 sm:ml-[50px] sm:mt-[20px] sm:mb-[15px]">
        <h1 className="sm:text-[13px]" >Hours</h1>
        <p className="sm:text-[9px] sm:leading-[4px]">Monday: 7am - 6pm</p>
        <p className="sm:text-[9px] sm:leading-[4px]">Tuesday: 7am - 6pm</p>
        <p className="sm:text-[9px] sm:leading-[4px]">Wednesday: 7am - 6pm</p>
        <p className="sm:text-[9px] sm:leading-[4px]">Thursday: 7am - 6pm</p>
        <p className="sm:text-[9px] sm:leading-[4px]">Friday: 7am - 6pm</p>
        <p className="sm:text-[9px] sm:leading-[4px]">Saturday: 7am - 1pm</p>
        <p className="sm:text-[9px] sm:leading-[4px]">Sunday: Closed</p>
      </div>
    
      <div className="right5 max-[1750px]:hidden">
        <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.9049459146577!2d-88.26684000843377!3d43.04343141724433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805af20e8430043%3A0xa6e0dac49ec95e18!2sQuick%20Cleaners%20%26%20Laundry!5e0!3m2!1sen!2sus!4v1714941653774!5m2!1sen!2sus" referrerpolicy="no-referrer-when-downgrade" title=" " ></iframe>
      </div>
    </div>
  )
};

export default Footer;