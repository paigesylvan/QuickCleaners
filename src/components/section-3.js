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
    <section className="scroll-container3 flex item-center justify-center font-serif">
      <div className="section3-row  items-center flex flex-col m-auto lg:flex-row mt-10 mb-10">
        <div className=" bg-white  w-[500px] h-[350px] m-[35px] " style={{ backgroundPosition: 'center'}}>
          <div className=' text-5xl font-bold leading-[60px] text-center mt-20'>
            <h1>All Work</h1>
            <h1>Done on</h1>
            <h1>Premise</h1>
          </div>
        </div>
        <div className=" bg-white w-[500px] h-[350px] m-[35px]" style={{ backgroundPosition: 'center' }}>
          <div className='text-5xl font-bold leading-[60px] text-center mt-20'>
            <h1>We Accept</h1>
            <h1>Competitor</h1> 
            <h1>Coupons</h1>
          </div>
        </div>
        <div className=" bg-white w-[500px] h-[350px] m-[35px]" style={{ backgroundPosition: 'center' }}>
          <div className='text-5xl font-bold leading-16 text-center mt-16'>
            <h1>Loyalty</h1>
            <h1>Program</h1>
            </div>
            <div className='text-xl leading-normal text-center mt-6'>
            <p>Spend more than $250 and receive </p>
            <p>25% off dry cleaning& 10% off laundry </p>  
            <p>for all future orders</p>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default FloatingSections;
