import React from 'react';
import footerimg from '../styles/images/footer-img.png'

const Footer = () => {
  return (
      <div className="footer flex flex-row justify-center  text-white bg-black font-serif pt-6 pb-6 lg:pt-20 lg:pb-20" >
         <div className="lg:ml-[185px] ">
          <img src={footerimg} alt='img' className=' w-[80px] pb-4 lg:w-[170px] lg:mb-9'></img>
          <p className='text-xs lg:text-2xl '>2177 Silvernail Rd,</p>
          <p className="text-xs pb-4 lg:text-2xl lg:mb-9">Pewaukee, WI 53072</p>
          <h2 className="text-xs lg:text-2xl">(262) 549-9477</h2>
        </div>
      <div className="font-serif ml-20 lg:pl-[450px] lg:pr-[400px]  ">
        <h1 className="text-xs lg:text-4xl pb-3 " >Hours</h1>
        <p className="text-xs lg:text-2xl">Monday: 7am - 6pm</p>
        <p className="text-xs lg:text-2xl">Tuesday: 7am - 6pm</p>
        <p className="text-xs lg:text-2xl">Wednesday: 7am - 6pm</p>
        <p className="text-xs lg:text-2xl">Thursday: 7am - 6pm</p>
        <p className="text-xs lg:text-2xl">Friday: 7am - 6pm</p>
        <p className="text-xs lg:text-2xl">Saturday: 7am - 1pm</p>
        <p className="text-xs lg:text-2xl">Sunday: Closed</p>
      </div>
    
      <div className="hidden lg:block  item-center">
        <iframe className="lg:h-[280px] lg:w-[480px] " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.9049459146577!2d-88.26684000843377!3d43.04343141724433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805af20e8430043%3A0xa6e0dac49ec95e18!2sQuick%20Cleaners%20%26%20Laundry!5e0!3m2!1sen!2sus!4v1714941653774!5m2!1sen!2sus" referrerpolicy="no-referrer-when-downgrade" title=" " ></iframe>
      </div>
    </div>
  )
};

export default Footer;