import React from 'react';
import Movie from '../styles/videos/movie1.mp4';
import ServiceDropdown from '../components/section-2'
import FloatingSections from '../components/section-3'
import storyimg from '../styles/images/story-img.png'
import storyimg2 from '../styles/images/story-img2.png'
import servicesimg from '../styles/images/services-img.png'



const Home = () => {

return (
  <div class="homepage">
    <section className="section-1" >
      <div className='video-container' >
           <video className='video' loop autoPlay='true' muted><source src={Movie} type="video/mp4"/></video>
           <div className='gradient-overlay'></div>
            <div className="video-overlay-text">
              <h1 >Distinctive Care For All That You Wear</h1>
              <h4>From everyday laundry to preserving the elegance of your finest attire, every item is handled with expertise and care</h4>
              <h4>Trust us to bring out the best in what you wear</h4>
            </div>   
      </div>
    </section>
    <section className="section-2" >
      <div className='section2-header'>
        <h1> Our Services</h1>
      </div>
      <div className='section2-container'>
          <img class='section2-img' src={servicesimg} style={{width: '38vw', height: '50vh', padding:'100px'}}/> 
          <ServiceDropdown class='service-dropdown'/>
      </div>
    </section>
    <section className='section-3' style={{background:'black'}}>
      <FloatingSections/>
    </section>
    <section className='section-4' >
    <img src={storyimg} className='section4-photo' ></img>
    <img src={storyimg2} className='section4-photo2' ></img>
    <div className='section4-text'>
      <h1>Our Story</h1>
      <h2> For over 35 years, Quick Cleaners has been dedicated to the art of dry cleaning, turning a small-town family ran store into a place of trust, care, and quality service. From wedding dresses to everyday wear, we’ve always believed that great service goes beyond clean clothes—it’s about building lasting relationships. As a small business, we take pride in preserving the integrity of our customers’ wardrobes while staying true to our roots. Because for us, it’s not just about dry cleaning—it’s about the people we serve and the town we call home, from Oconomowoc, Okauchee, Pewaukee, Waukesha and beyond. A sincere thank you to our loyal customers, and a grateful welcome to new ones. We hope to provide distinctive care for all that you wear.
      </h2>
      <h2> - Sandy & staff at Quick Cleaners & Laundry</h2>
    </div>
    </section>
  </div>
  )
};

export default Home;

