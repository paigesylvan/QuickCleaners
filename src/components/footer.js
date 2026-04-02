import React from 'react';
import footerimg from '../styles/images/footer-img.png';

const Footer = () => {
  const handlePhoneClick = () => {
    if (window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'footer_phone',
      });
    }
  };

  return (
    <div className="footer flex flex-row justify-center space-x-24 text-white bg-black pt-6 pb-6 lg:pt-20 lg:pb-20 lg:space-x-46">
      <div className="lg:ml-24 lg:w-[400px]">
        <img
          src={footerimg}
          alt="img"
          className="w-[80px] pb-4 lg:w-[170px] lg:mb-3"
        />
        <p className="text-xs lg:text-xl">2177 Silvernail Rd,</p>
        <p className="text-xs pb-4 lg:text-xl lg:mb-4">Pewaukee, WI 53072</p>

        <a
          href="tel:2625499477"
          onClick={handlePhoneClick}
          className="text-xs lg:text-xl hover:text-gray-700 transition-colors duration-200 block"
        >
          (262) 549-9477
        </a>
      </div>

      <div className="lg:w-[400px]">
        <h1 className="text-md lg:text-4xl pb-1">Hours</h1>
        <p className="text-xs lg:text-xl">Monday: 7am - 6pm</p>
        <p className="text-xs lg:text-xl">Tuesday: 7am - 6pm</p>
        <p className="text-xs lg:text-xl">Wednesday: 7am - 6pm</p>
        <p className="text-xs lg:text-xl">Thursday: 7am - 6pm</p>
        <p className="text-xs lg:text-xl">Friday: 7am - 6pm</p>
        <p className="text-xs lg:text-xl">Saturday: 7am - 1pm</p>
        <p className="text-xs lg:text-xl">Sunday: Closed</p>
      </div>

      <div className="hidden lg:block item-center">
        <iframe
          className="lg:h-[280px] lg:w-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.9049459146577!2d-88.26684000843377!3d43.04343141724433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805af20e8430043%3A0xa6e0dac49ec95e18!2sQuick%20Cleaners%20%26%20Laundry!5e0!3m2!1sen!2sus!4v1714941653774!5m2!1sen!2sus"
          referrerPolicy="no-referrer-when-downgrade"
          title="Quick Cleaners map"
        />
      </div>
    </div>
  );
};

export default Footer;