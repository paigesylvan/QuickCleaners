import React, { useEffect, useState } from 'react';
import Movie from '../styles/videos/movie1.mp4';
import PNG from '../styles/images/png.png'
import one from '../styles/images/1.png'
import two from '../styles/images/2.png'
import three from '../styles/images/3.png'
import four from '../styles/images/4.png'
import six from '../styles/images/6.png'
import hungshirts2 from '../styles/images/hungshirts2.png'
import seven from '../styles/images/7.png'
import ServiceDropdown from './ServicesDD'
import eight from '../styles/images/8.jpg'
import nine from '../styles/images/9.avif'
import ten from '../styles/images/10.png'
import eleven from '../styles/images/11.png'
import twelve from '../styles/images/12.png'



const Home = () => {


  return (
    

  <div class="homepage">
   
    <section class="section section-1" style={{background:'white'}}>

      <div className='video-container'>

           <video className='video' loop autoPlay='true' muted><source src={Movie} type="video/mp4"/></video> 

           <div class="gradient-overlay"></div>

           <div className="video-overlay-text">
              <h1>Distinctive Care For All That You Wear</h1>
              <h2> Family Owned and Operated Since 1997</h2>
              <h4>From everyday laundry to preserving the elegance of your finest attire, every item is handled with expertise and care</h4>
              <h4>Trust us to bring out the best in what you wear</h4>
            </div>
            
      </div>
     
     
    </section>

    <section class="section section-3" /* style={{background: '#662222'}} */>
      <div class='section3-container'>
        <div className='service-img' >
          <h1> Our Services</h1>
          <img src={seven} alt='shirts' style={{width: '38vw', height: '50vh'}}/> 
        </div>
        <ServiceDropdown class='service-dropdown'/>
      </div>
  

    </section>

    
    <section class="section section-4" style={{background:'white'}}>

    <div class="three-row-section">

  <div class="row" style={{background:'black'}}>
    <div class="sub-row">
    <h1> All Work Done</h1>
      <h1> on Premise</h1>
    </div>
    <div class="sub-row">
 
    </div>

    <div class="sub-row">
    <img src={ten} alt='img' style={{height:'390px', width:'600px'}}/>
    </div>
  </div>


  <div class="row">
    <div class="sub-row">
    <img src={eleven} alt='img' style={{height:'400px', width:'700px'}}/>
    </div>
    <div class="sub-row">
    <p> Spend more than $250</p>
    <p> and receive 20% off Dry Cleaning</p>
    <p> and receive 10% off Laundry</p>
    </div>
    <div class="sub-row">
    <h1>Loyalty</h1>
    <h1>Program</h1>
    </div>
  </div>


  <div class="row">
    <div class="sub-row">
    <h1>We Accept All</h1>
    <h1>Competitor Coupons</h1>
    </div>
    <div class="sub-row">
    
    </div>
    <div class="sub-row">
    <img src={twelve} alt='img' style={{height:'390px', width:'300px'}}/>
    
    </div>
  </div>
</div>



      
    </section>

    <section class="section section-5" style={{background:'white'}}>

      <div class="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.9049459146577!2d-88.26684000843377!3d43.04343141724433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805af20e8430043%3A0xa6e0dac49ec95e18!2sQuick%20Cleaners%20%26%20Laundry!5e0!3m2!1sen!2sus!4v1714941653774!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title=" " ></iframe>
        </div>
    </section>

  </div>


  
  )
};

export default Home;

/*
<a href="/services"> <button className='our-services-button'> Our Services</button> </a> 

  <section class="section section-2" >
      <div className='section2' > 

      <div className='section2-column1' >
        <div>
        <h1></h1>
        <h3 style={{paddingBottom:'20px'}}>Visit us today and let us take care of your dry cleaning needs!</h3>
        <h3 style={{paddingBottom:'20px', fontWeight:'bold'}}> 2177 Silvernail Rd, Pewaukee WI</h3>
        <h3> Monday - Friday: 7am - 6pm</h3>
        <h3> Saturday: 8am - 12:30pm</h3>
        <h2 style={{marginTop: '80px'}}>From everyday laundry to preserving the elegance of your finest attire, every item is handled with expertise and care. </h2>
        <h2>Trust us to bring out the best in what you wear</h2>
        
     
        </div>

      </div>

        
        <div class="section2-gradient-overlay"></div>
      </div>
  </section>


   <div className='section1-bottomcontainer' style={{background:'white'}}>
            
            <div className='bottom-section'>
              <img src={one} alt='dry cleaning img' />
              <h1>Dry Cleaning</h1>
            </div>

            <div className='bottom-section'>
              <img src={two} alt='dry cleaning img' />
              <h1>Wash and Fold</h1>
            </div>

            <div className='bottom-section'>
              <img src={six} alt='pressing img' />
              <h1>Pressing</h1>
            </div>
           
            <div className='bottom-section'>
              <img src={three} alt='alteration'/>
              <h1>Alterations</h1>
            </div>

           <div className='bottom-section'>
            <img src={four} alt='special garmen'/>
             <h1>Special Cleaning</h1>
           </div>
            
          
      </div>

*/