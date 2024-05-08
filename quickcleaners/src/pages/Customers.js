import React from 'react';
import Cus from '../styles/images/welovecus.png'


const Customers = () => {
  return (
    <div>
      <div className="top-text-container">
        <h1>Professional Cleaning Services for Every Organization</h1>
        <div className="profession-customers">
          <div className="customers-hospitals">
            <h1>Hospitals</h1>
            <h2>lab coats</h2>
          </div>
          <div  className="customers-churches">
            <h1>Churches</h1>
            <h2>
            Our experts employ the best cleaning methods to ensure your uniforms, choir robes and other church attire always look their very best.
            </h2>
          </div>
          <div className="customers-schools">
            <h1>Schools</h1>
            <h2>
            We perform professional cleaning service on band uniforms, athletic uniforms,and theater costumes as well as alterations for rips, tears and other repairs.
            </h2>
          </div>
        </div>
      </div>

      <div className="middle-text-container">
        <div>
          <img src={Cus} alt='image1' className='cus'/>
        </div>
        <div className="cus-text1">
          <h1>Our</h1>
          <h1>Loyalty</h1>
          <h1>Program</h1>
        </div>
        <div className="cus-text2">
          <h2> 20% off all future dry cleaning & </h2>
          <h2> 10% off all laundered shirts</h2>
          <h2> after you spend $250 </h2>
        </div>
      
      </div>

    <section>
      <div class="container">
        <div class="accordion" className="accordionn">
          <div class="accordion-item" className="question">
            <a class="accordion-link" href="#question1">
            Is it safer to launder or dry clean my clothes?
              <i class="icon ion-md-add"></i>
              <i class="icon ion-md-remove"></i>
            </a>
            <div class="answer">
            <p>
            It depends upon the garment. The safest way is to follow the care label. Our staff are well trained in fabrics and their structure in evaluating what may be best for your garment. They will also take the time to discuss any obvious problems that could occur in processing your garment in a manner that is necessary to achieve removal of stains.
              </p>
           </div>
          </div>

          <div class="accordion-item" className="question">
            <a class="accordion-link" href="#question2">
              Why does a shirt cost less to launder than dryclean?
              <i class="icon ion-md-add"></i>
              <i class="icon ion-md-remove"></i>
            </a>
            <div class="answer">
              <p>
              All dry cleaning is hand finished and involves much more labor than cleaning and pressing shirts. Shirts are done almost exclusively by machine and are done in large volume. The volume and speed of the machines combined with the lower amount of labor required to do them account for the lower price than dry cleaning.
              </p>
            </div>
          </div>

          <div class="accordion-item" className="question">
            <a class="accordion-link" href="#question3">
            Will you replace my shirt buttons for free?
              <i class="icon ion-md-add"></i>
              <i class="icon ion-md-remove"></i>
              <ion-icon name="heart"></ion-icon>
            </a>
            <div class="answer">
              <p>
              Yes we will. Any cracked, broken or missing buttons will be automatically replaced to ensure that your shirt is ready to wear.
              </p>
            </div>
               

          </div>
  
        </div>
      </div>
    </section>

    </div>
  )
};

export default Customers;