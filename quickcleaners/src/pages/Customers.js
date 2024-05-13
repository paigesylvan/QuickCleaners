import * as React from 'react';
import Cus from '../styles/images/cusy.png'
import { SlArrowDown } from "react-icons/sl";


const Customers = () => {

  const FAQComponent = () => {
    const [openQ, setOpenQ] = React.useState([]);

    const manageOpenArray = (qIndex) => {
      if (openQ.includes(qIndex)) { 
        setOpenQ(
          openQ.filter(o => {
            return o !== qIndex;
        }))
      } else {
        setOpenQ([...openQ, qIndex]);
      }
      console.log(openQ);
    }

    const faqData = [
      {
        id: 0,
        title: 'Is it safer to launder or dry clean my clothes?',
        answer: 'It depends upon the garment. The safest way is to follow the care label. Our staff are well trained in fabrics and their structure in evaluating what may be best for your garment. They will also take the time to discuss any obvious problems that could occur in processing your garment in a manner that is necessary to achieve removal of stains.',
      },
      {
        id: 1,
        title: 'Why does a shirt cost less to launder than dryclean?',
        answer: 'All dry cleaning is hand finished and involves much more labor than cleaning and pressing shirts. Shirts are done almost exclusively by machine and are done in large volume. The volume and speed of the machines combined with the lower amount of labor required to do them account for the lower price than dry cleaning.',
      },
      {
        id: 2,
        title: 'Will you replace my shirt buttons for free?',
        answer: 'Yes we will. Any cracked, broken or missing buttons will be automatically replaced to ensure that your shirt is ready to wear.',
      },
    ]

    return (
      
      faqData.map(q => (
        <div key={q.id}>
          {/* Style this div as the box that holds the Q */}
          <div className="qContainer" onClick={() => {
            // if (openQ === q.id) setOpenQ(null);
            // else setOpenQ(q.id)
            manageOpenArray(q.id);
          }}>
            <p>{q.title}</p>
            {/* Find an arrow img (install FontAwesome free library and then import chosen icon then use here) */}
            {/* Style this arrow img according to the openQ state to be up or down */}
            {/* Use animation styles to make it flip nicely */}
            
          
           
            <SlArrowDown className={`arrow ${openQ.includes(q.id) ? 'toggle-up' : 'toggle-down'}`}/>
          
          </div>
          {/* Style openAnswer and closedAnswer as the box that holds the A */}
          <div className={openQ.includes(q.id) ? 'openAnswer' : 'closedAnswer'}>
            <p>
              {q.answer}
            </p>
          </div>
        </div>
      ))
    )
  }


  return (
    <div>
      
  

      <div className="top-text-container">
        <div>
          <img src={Cus} alt='image1' className='cus'/>
        </div>
        <div className="cus-text">
          <h1>Our Loyalty Program</h1>
       
          <h2> Spend over $250 and receive 20% off all future dry cleaning </h2>
          <h2>& 10% off all laundered shirts</h2>
          
        </div>
      
      </div>

      <div className="middle-text-container">
      <script src="https://kit.fontawesome.com/cf3a32c481.js" crossOrigin="anonymous"></script>
        <h1>Professional Cleaning Services for Every Organization</h1>
        <div className="profession-customers">
          <div className="customers-hospitals">
            <h1>Hospitals</h1>
            <h2>We understand the importance of maintaining a sterile and professional appearance in the healthcare enviroment. Thats why we offer specialized cleaning services for hospital lab coats and clothes, ensuring that every garment is impeccably clean, pressed and ready for the demanding standards of medical professionals.</h2>
          </div>
          <div  className="customers-churches">
            <h1>Churches</h1>
            <h2>
              Our experienced professionals are trained to handle a variety of materials with precision and delicacy. 
              We understand the importance of your church attire in expressing your faith and devotion, so our experts employ the best cleaning methods to ensure your uniforms, choir robes and other church attire always look their very best.
            </h2>
          </div>
          <div className="customers-schools">
            <h1>Schools</h1>
            <h2>
              We're commited to helping students make the best impression with clean, fresh uniforms and school gear. We perform professional cleaning service on band uniforms, athletic uniforms,and theater costumes as well as alterations for rips, tears and other repairs.
            </h2>
          </div>
        </div>
      </div>

    <section>
      <div className="container">
      <h1>Frequently Asked Questions</h1>
        <FAQComponent />
      </div>
    </section>

    </div>
  )
};

export default Customers;