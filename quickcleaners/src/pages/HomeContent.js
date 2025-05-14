import React, { useEffect, useState } from 'react';
import Movie from '../styles/videos/movie1.mp4';
import ServiceDropdown from './ServicesDD'
import FloatingSections from '../components/Section2'
import fourteen from '../styles/images/14.png'
import fifteen from '../styles/images/15.png'
import twentyone from '../styles/images/21.png'



const Home = () => {


  return (
    

  <div class="homepage">
   
    <section class="section section-1" >
      <div className='video-container' >
           <video className='video' loop autoPlay='true' muted><source src={Movie} type="video/mp4"/></video>
           <div className='gradient-overlay'></div>
           <div className="video-overlay-text">
              <h1 >Distinctive Care For All That You Wear</h1>
              <h4>From everyday laundry to preserving the elegance of your finest attire, every item is handled with expertise and care</h4>
              <h4>Trust us to bring out the best in what you wear</h4>
            </div>   
      </div>
      <div className='black-line' style={{background:'black', height:'20px', width:'100%'}}></div>
    </section>

    <section class="section section-3" >
      <div className='section3-header'>
        <h1> Our Services</h1>
      </div>
      <div className='section3-container'>
          <img class='section3-img' src={twentyone} alt='shirts' style={{width: '38vw', height: '50vh'}}/> 
          <ServiceDropdown class='service-dropdown'/>
      </div>
      <div>
      
      </div>
    </section>

    <section class='section section-2' style={{background:'black'}}>
      <FloatingSections/>
  </section>

<section class='section section-4' >
  <img src={fifteen} className='section4-photo' ></img>
  <div className='section4-text'>
    <h1>Our Story</h1>
    <h2> For over 35 years, Quick Cleaners has been dedicated to the art of dry cleaning, turning a small-town family ran store into a place of trust, care, and quality service. From wedding dresses to everyday wear, we’ve always believed that great service goes beyond clean clothes—it’s about building lasting relationships. As a small business, we take pride in preserving the integrity of our customers’ wardrobes while staying true to our roots. Because for us, it’s not just about dry cleaning—it’s about the people we serve and the town we call home, from Oconomowoc, Okauchee, Pewaukee, Waukesha and beyond. A sincere thank you to our loyal customers, and a grateful welcome to new ones. We hope to provide distinctive care for all that you wear.
    </h2>
    <h2> - Sandy & staff at Quick Cleaners & Laundry</h2>
  </div>
</section>

    <section className="section section-5" style={{background:'black'}}>


      <div className="section5">
        <div className="left5">
          <img src={fourteen} height={'130px'} width={'240px'} className='footerlogo'></img>

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
    </section>

  </div>


  
  )
};

export default Home;

