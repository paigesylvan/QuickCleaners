import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FloatingSections = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".section3-row", {
      scrollTrigger: {
        trigger: ".scroll-container3",
        start: "top 50%", 
        end: "bottom center",
        toggleActions: "play none none none",
      },
      opacity: 1, 
    });

    gsap.fromTo(".box-right", { x: -200 }, { x: 0, duration: 2, ease: "power2.out", scrollTrigger: {
      trigger: ".scroll-container3",
      start: "top 40%",
      end: "bottom center",
      toggleActions: "play none none none"
    }});

    gsap.fromTo(".box-middle", { x: -200 }, { x: 0, duration: 3, ease: "power2.out", scrollTrigger: {
      trigger: ".scroll-container3",
      start: "top 40%",
      end: "bottom center",
      toggleActions: "play none none none"
    }});

    gsap.fromTo(".box-left", { x: -200 }, { x: 0, duration: 4, ease: "power2.out", scrollTrigger: {
      trigger: ".scroll-container3",
      start: "top 40%",
      end: "bottom center",
      toggleActions: "play none none none"
    }});

  }, []); 

  return (
    <section className="scroll-container3 ">
      <div className="section3-row flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="section3 box-left  w-[270px] h-[270px] flex flex-col items-center justify-center " style={{ backgroundPosition: 'center'}}>
          <div className='leftbox-text text-center text-[19px] leading-[10px]'>
            <h1>All Work</h1>
            <h1>Done on</h1>
            <h1>Premise</h1>
          </div>
        </div>
        <div className="section3 box-middle w-[270px] h-[270px] flex flex-col items-center justify-center" style={{ backgroundPosition: 'center' }}>
          <div className='middlebox-text text-center text-[19px] leading-[10px]'>
            <h1>We Accept</h1>
            <h1>Competitor</h1> 
            <h1>Coupons</h1>
          </div>
        </div>
        <div className="section3 box-right w-[270px] h-[270px] flex flex-col items-center justify-center" style={{ backgroundPosition: 'center' }}>
          <div className='rightbox-text text-center text-[19px] leading-[10px]'>
            <h1>Loyalty</h1>
            <h1>Program</h1>
            <p>Spend more than $250 and </p>
            <p>receive 25% off dry cleaning </p>  
            <p>& 10% off laundry for all future orders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingSections;
