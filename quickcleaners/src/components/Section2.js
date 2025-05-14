import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const FloatingSections = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".section2-row", {
      scrollTrigger: {
        trigger: ".scroll-container2",
        start: "top 40%", // Starts animation when 20vh of next screen is visible
        end: "bottom center",
        toggleActions: "play none none none",
      },
      opacity: 1, // Fades in the entire row
    });

    gsap.to(".box-right", {
      scrollTrigger: ".scroll-container2",
      x: 0, // Moves into position
      duration: 2,
      ease: "power2.out",
    });

    gsap.to(".box-middle", {
      scrollTrigger: ".scroll-container2",
      x: 0,
      duration: 3,
      ease: "power2.out",
    });

    gsap.to(".box-left", {
      scrollTrigger: ".scroll-container2",
      x: 0,
      duration: 4,
      ease: "power2.out",
    });
  }, []);

  

  return (
    <section className="scroll-container2">
      <div className="section2-row">
        <div className="section2 box-left"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className='leftbox-text'>
            <h1>All Work</h1>
            <h1>Done on </h1>
            <h1>Premise</h1>
            </div>
          </div>
        <div className="section2 box-middle"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
                    <div className='middlebox-text'>
                    <h1>We Accept</h1>
                    <h1>Compeitor</h1>
                    <h1>Coupons</h1>
                    </div>
        </div>
        <div className="section2 box-right"
                  style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
                    <div className='rightbox-text'>
                    <h1>Loyalty </h1>
                    <h1>Program</h1>
                    <p>
                    Spend more than $250 and receive 25% off dry cleaning & 10% off laundry for all future orders
                    </p>
                    </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingSections;
