import React from 'react';
import Movie from '../styles/movie1.mp4';
import Image1 from '../styles/Logo1.png';

const Home = () => {
  return (
    <div>
        <video className='video' loop autoPlay='true' muted>
            <source src={Movie} type="video/mp4"/>
        </video>
        <div>
            <img src={Image1} alt='image1' className='image'/>
        </div>
        <div className="middle-section">
            <div className='family-owned'>
                <h2>Family Owned and Operated Since 1997</h2>
                <h3> Welcome to Quick Cleaners Dry Cleaning and Laundry, your local experts in fabric care and meticulous garment treatment. For over 20 years, our family-run establishment has been the cornerstone of the neighborhood, dedicated to delivering unparalled dry cleaning, laundry and precise alteration services. We treasure the community we serve and understand that every piece of clothing you bring to us is more than just fabric- its a part of your lifes moments and memories. From luxurious silk blouses and cashmere sweaters to bespoke suits and ornate wedding dresses, our skilled professionals handle each item with the care it deserves. Let us take the hassle out of laundry day and give you the peace of mind that your wardrome is in the best hands.</h3>
                <button className='our-services-button'> Our Services</button>
            </div>
        </div>
    </div>
  )
};

export default Home;