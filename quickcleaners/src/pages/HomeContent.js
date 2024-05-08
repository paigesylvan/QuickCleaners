import React from 'react';
import Movie from '../styles/videos/movie1.mp4';
import HomeImage from '../styles/images/homeImage.png';

const Home = () => {
  return (
    <div style={{position: 'relative'}}>
        <div style={{postition: 'relative'}}>
            <video className='video' loop autoPlay='true' muted>
                <source src={Movie} type="video/mp4"/>
            </video>
            <div className="video-overlay-text">
                <p>Distinctive Care For All That You Wear</p>
                <p></p>
                <a href="/services">
                    <button className='our-services-button'> Our Services</button>
                </a>
            </div>
        </div>
        <div>
            <img src={HomeImage} alt='image1' className='home-image'/>
        </div>
        <div className="middle-section">
            <div className='family-owned'>
                <h2>Family Owned and Operated Since 1997</h2>
                <h3> Welcome to Quick Cleaners Dry Cleaning and Laundry, your local experts in fabric care and meticulous garment treatment. For over 20 years, our family-run establishment has been the cornerstone of the neighborhood, dedicated to delivering unparalled dry cleaning, laundry and precise alteration services. We treasure the community we serve and understand that every piece of clothing you bring to us is more than just fabric- its a part of your lifes moments and memories. From luxurious silk blouses and cashmere sweaters to bespoke suits and ornate wedding dresses, our skilled professionals handle each item with the care it deserves. Let us take the hassle out of laundry day and give you the peace of mind that your wardrome is in the best hands.</h3>
            </div>
            <div class="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.9049459146577!2d-88.26684000843377!3d43.04343141724433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805af20e8430043%3A0xa6e0dac49ec95e18!2sQuick%20Cleaners%20%26%20Laundry!5e0!3m2!1sen!2sus!4v1714941653774!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title=" " ></iframe>
            </div>
        </div>
    </div>
  )
};

export default Home;

