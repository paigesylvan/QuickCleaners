import React from 'react';
import ServiceDropdown from '../components/section-2'
import FloatingSections from '../components/section-3'
import Video from '../components/video'
import storyimg from '../styles/images/story-img.png'
import storyimg2 from '../styles/images/story-img2.png'
import servicesimg from '../styles/images/services-img.png'



const Home = () => {

return (
  <div className="homepage">
    <section className="section-1 md:h-auto sm:h-[auto] sm:overflow-hidden w-full" >
      <div className='video-container' >
           <Video/>
           <div className='gradient-overlay'></div>
            <div className="video-overlay-text lg:w-[90%] sm:w-[90%">
              <h1 className="lg:mt-[170px] lg:mb-[100px] sm:text-[32px] sm:leading-[40px] sm:mb-[70px]">
                Distinctive Care For All That You Wear</h1>
              <h4 className="lg:text-[32px] lg:ml-[45px] lg:leading-[40px] lg:w-[90%]
                       sm:text-[15px] sm:ml-[32px] sm:leading-[20px] sm:w-[80%]"
              >From everyday laundry to preserving the elegance of your finest attire, every item is handled with expertise and care</h4>
              <h5 className="lg:text-[32px] lg:ml-[45px] lg:leading-[40px] lg:w-[90%]
                       sm:text-[15px] sm:ml-[32px] sm:leading-[20px] sm:w-[80%]"
              >Trust us to bring out the best in what you wear</h5>
            </div>   
      </div>
    </section>
    <section className="section-2  lg:h-auto lg:mb-[200px] sm:flex sm:flex-col sm:items-center w-full" >
      <div className='section2-header lg:mb-[20px] sm:text-[26px] sm:mb-[20px]'>
        <h1> Our Services</h1>
      </div>
      <div className="section2-container " >
        <img className="section2-img hidden lg:block"
            src={servicesimg} alt="image" style={{ width: "34vw", height: "51vh" }}/>
        <ServiceDropdown className="service-dropdown lg:h-full" />
      </div>
    </section>
    <section className='section-3 flex flex-col m-auto md:flex-row w-full' style={{background:'black'}}>
      <FloatingSections/>
    </section>
    <section className='section-4 w-full' >
    <img src={storyimg} className='section4-photo hidden lg:block ' alt='owner-image'></img>
    <img src={storyimg2} className='section4-photo2  md:block lg:hidden w-[370px] h-[270px] mr-[6px]' alt='owner-image-single' ></img>
    <div className='section4-text
    sm:flex sm:flex-col sm:items-start sm:justify-center sm:w-[90%] font-montserrat'>
      <h1 className="sm:text-[40px] font-montserrat">Our Story</h1>
      <h2 className="sm:text-[10px] font-montserrat"> For over 35 years, Quick Cleaners has been dedicated to the art of dry cleaning, turning a small-town family ran store into a place of trust, care, and quality service. From wedding dresses to everyday wear, we’ve always believed that great service goes beyond clean clothes—it’s about building lasting relationships. As a small business, we take pride in preserving the integrity of our customers’ wardrobes while staying true to our roots. Because for us, it’s not just about dry cleaning—it’s about the people we serve and the town we call home, from Oconomowoc, Okauchee, Pewaukee, Waukesha and beyond. A sincere thank you to our loyal customers, and a grateful welcome to new ones. We hope to provide distinctive care for all that you wear.
      </h2>
      <h2 className="sm:text-[10px] font-montserrat"> - Sandy & staff at Quick Cleaners & Laundry</h2>
    </div>
    </section>
  </div>
  )
};

export default Home;

