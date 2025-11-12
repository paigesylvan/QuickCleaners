import React from 'react';
import ScrollRevealBoxes from '../components/OurPerks'
import Video from '../components/video'
import storyimg from '../styles/images/story-img.png'
import storyimg2 from '../styles/images/story-img2.png'
import FlipSection from '../components/OurServices'


const Home = () => {

return (
  <div className="homepage ">
    <section className="w-full relative flex flex-col overflow-hidden " >
      <div className='relative w-screen h-[90vh] lg:h-screen bg-black overflow-hidden' >
           <Video/>
           <div className='gradient-overlay relative w-full h-full bg-gradient-to-t from-[rgba(6,2,2,0.33)] to-transparent z-10'></div>
            <div className="video-overlay-text w-[80%] lg:w-[69%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center text-white z-20">
              <h1 className=" text-2xl font-semibold lg:text-5xl max-w-xl
              ">  Distinctive Care For All That You Wear</h1>
              <h4 className="text-sm  lg:text-2xl mt-4 lg:leading-[30px] lg:w-3/4 max-w-3xl"
              >From everyday laundry to preserving the elegance of your finest attire, every item is handled with expertise and care. Trust us to bring out the best in what you wear.</h4>
              <button
              onClick={() => {document.getElementById('our-services')?.scrollIntoView({ behavior: 'smooth' });}}
              className="text-md w-44 h-12 mt-16 lg:w-60 lg:h-14 lg:text-2xl inline-block px-6 py-3 bg-gray-700 text-white  rounded-lg shadow hover:bg-white hover:text-black transition-all duration-300"
              >Our Services
              </button>
            </div>   
        </div>
    </section>

    <section className='flex flex-col items-center mb-12 lg:mb-24 mt-12' >
      <img src={storyimg} className=' hidden lg:block px-96' alt='owner-image'></img>
      <img src={storyimg2} className='block lg:hidden p-6' alt='owner-image-single' ></img>
        <div className='flex flex-col items-center justify-center  '>
          <h1 className="text-5xl font-bold text-center lg:text-5xl overflow-hidden ">Our Story</h1>
          <h2 className="text-md mt-11 w-[88%] lg:text-2xl lg:w-[55%] text-center overflow-hidden "> For over 35 years, Quick Cleaners has been dedicated to the art of dry cleaning, turning a small town family ran store into a place of trust, care, and quality service. From wedding dresses to everyday wear, we’ve always believed that great service goes beyond clean clothes, it’s about building lasting relationships. As a small business, we take pride in preserving the integrity of our customers’ wardrobes while staying true to our roots. Because for us, it’s not just about dry cleaning, it’s about the people we serve and the town we call home, from Oconomowoc, Okauchee, Pewaukee, Waukesha and beyond. A sincere thank you to our loyal customers, and a grateful welcome to new ones. We hope to provide distinctive care for all that you wear.
          </h2>
          <h2 className="text-md  mt-12  lg:text-2xl overflow-hidden "> - Sandy & staff at Quick Cleaners & Laundry</h2>
        </div>
    </section>

    <section>
      <ScrollRevealBoxes/>
    </section>

    <section id="our-services">
    <FlipSection/>
    </section>
  </div>
  )
};

export default Home;

