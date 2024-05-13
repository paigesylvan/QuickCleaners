import React from 'react'
import one from '../styles/images/images-services/1.png'
import two from '../styles/images/images-services/2.png'
import three from '../styles/images/images-services/3.png'
import four from '../styles/images/images-services/4.png'
import five from '../styles/images/images-services/5.png'
import six from '../styles/images/images-services/6.png'
import seven from '../styles/images/images-services/7.png'
import eight from '../styles/images/images-services/8.png'
import nine from '../styles/images/images-services/9.png'
import services from '../styles/images/images-services/services.png'
import MOV from '../styles/videos/movie2.mp4'



const Services = () => {
  return (
    <div>
      <div className="title-text-container">
            <video className='video2' loop autoPlay='true' muted>
                <source src={MOV} type="video/mp4"/>
            </video>
      </div>

      <div className="row-1">
        <div className="box">
          <h1>Dry Cleaning</h1>
          <img src={one} alt='image1' className='image'/>
        </div>
        <div className="box">
          <h1>Laundered Shirts</h1>
          <img src={two} alt='image1' className='image'/>
        </div>
        <div className="box">
          <h1>Pressing</h1>
          <img src={three} alt='image1' className='image'/>
        </div>
      </div>

      <div className="row-2">
        <div className="box">
          <h1>Wash and Fold</h1>
          <img src={four} alt='image1' className='image'/>
        </div>
        <div className="box">
          <h1>Household</h1>
          <img src={five} alt='image1' className='image'/>
        </div>
        <div className="box">
          <h1>Alteration and Repair</h1>
          <img src={six} alt='image1' className='image'/>
        </div>
      </div>

      <div className="row-3">
        
        <button class="button" className='box' type="button"  data-hover='We handle your treasured items with the utmost care, ensuring theyre preserved and revitilized. Wedding Gowns and Dresses, Suit Jackets and Tuxedos, Silk, Lace and Cashmere' data-active='i am active' ><span>
           <img src={seven} alt='img7' className='image'/>Speciality Garments </span></button>

        <button class="button" className='box' type="button"  data-hover='blah blah blah blah' data-active='i am active' ><span>
           <img src={eight} alt='img8' className='image'/>Suede and Leather </span></button>

        <button class="button" className='box' type="button"  data-hover='blah blah blah blah' data-active='i am active' ><span>
           <img src={nine} alt='img9' className='image'/>Express Bag </span></button>
        
     
      </div>

    </div>

   
  )
}

export default Services