import React from 'react';
import ServiceDropdown from '../components/section-2'
import FloatingSections from '../components/section-3'
import Video from '../components/video'
import storyimg from '../styles/images/story-img.png'
import storyimg2 from '../styles/images/story-img2.png'
import servicesimg from '../styles/images/services-img.png'


/** mt-[180px] block w-[90%] h-auto 
   */

const Home = () => {

return (
  <div className="homepage">
    <section className="w-full relative flex flex-col overflow-hidden " >
      <div className='relative w-screen h-screen bg-black overflow-hidden' >
           <Video/>
           <div className='gradient-overlay relative w-full h-full bg-gradient-to-t from-[rgba(6,2,2,0.33)] to-transparent z-10'></div>
            <div className="video-overlay-text w-[80%] lg:w-[69%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center text-white z-20">
              <h1 className=" text-3xl font-bold font-serif lg:text-7xl 
              ">  Distinctive Care For All That You Wear</h1>
              <h4 className="text-xl font-serif mt-9 lg:text-5xl lg:mt-28 lg:leading-[60px]"
              >From everyday laundry to preserving the elegance of your finest attire, every item is handled with expertise and care</h4>
              <h5 className="text-2xl font-serif mt-10 font-bold lg:text-5xl lg:mt-16"
              >Trust us to bring out the best in what you wear</h5>
            </div>   
      </div>
    </section>

    <section className="flex flex-col items-center justify-center w-full " >
      <div>
        <h1 className='text-black text-5xl text-center font-sans font-bold mt-16 lg:text-6xl'> Our Services</h1>
      </div>
      <div className="section2-container flex flex-row items-center justify-center gap-20 mt-20 mb-60" >
        <img className="section2-img hidden lg:block"
            src={servicesimg} alt="image" style={{ width: "34vw", height: "51vh" }}/>
        <ServiceDropdown className="service-dropdown lg:h-full" />
      </div>
    </section>


    <section  style={{background:'black'}}>
      <FloatingSections/>
    </section>

    <section className='flex flex-col items-center mb-[100px]' >
    <img src={storyimg} className=' hidden lg:block p-20' alt='owner-image'></img>
    <img src={storyimg2} className='block lg:hidden p-6' alt='owner-image-single' ></img>
    <div className='flex flex-col items-center justify-center font-serif '>
      <h1 className="text-5xl font-serif font-bold text-center lg:text-7xl">Our Story</h1>
      <h2 className="text-xl font-serif mt-11 w-[88%] lg:text-4xl lg:w-[69%] text-center"> For over 35 years, Quick Cleaners has been dedicated to the art of dry cleaning, turning a small-town family ran store into a place of trust, care, and quality service. From wedding dresses to everyday wear, we’ve always believed that great service goes beyond clean clothes—it’s about building lasting relationships. As a small business, we take pride in preserving the integrity of our customers’ wardrobes while staying true to our roots. Because for us, it’s not just about dry cleaning—it’s about the people we serve and the town we call home, from Oconomowoc, Okauchee, Pewaukee, Waukesha and beyond. A sincere thank you to our loyal customers, and a grateful welcome to new ones. We hope to provide distinctive care for all that you wear.
      </h2>
      <h2 className="text-lg font-serif mt-8  lg:text-4xl"> - Sandy & staff at Quick Cleaners & Laundry</h2>
    </div>
    </section>
  </div>
  )
};

export default Home;

