import React, { useEffect } from 'react';

import one from '../styles/images/one.png';
import two from '../styles/images/two.png';
import three from '../styles/images/three.png';

const boxImages = [one, two, three];

const boxContent = [
  {
    title: 'All Work Done on Premise',
    text: 'Your garments are cared for by us on-site to ensure quality and accountability.',
  },
  {
    title: 'Competitive Pricing',
    text: 'We honor competitor coupons for even more savings. Enjoy premium services at affordable rates, without sacrificing quality.',
  },
  {
    title: 'Loyalty Rewards',
    text: 'We love our customers! Spend more than $250 and recieve 25% off dry cleaning and 10% off laundry for all future orders',
  },
];

const ScrollRevealBoxes = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.5 }
    );

    boxes.forEach((box) => observer.observe(box));
    return () => boxes.forEach((box) => observer.unobserve(box));
  }, []);

  return (
    <section className="bg-gray-100 lex items-center justify-center px-6 py-10 lg:py-20 lg:mb-36 lg:mt-36">
      <div className=" flex flex-col md:flex-row gap-8 lg:gap-24 w-full max-w-7xl ">
        {boxContent.map((item, i) => (
          <div
            key={i}
            className="flex-1 h-full lg:h-[400px] overflow-hidden bg-white shadow-xl opacity-0 transition-all duration-700 transform translate-y-10"
            data-animate
          >
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <img
                src={boxImages[i]}
                alt={`Box ${i + 1}`}
                className="w-24 h-24 object-cover mb-3"
              />
              <h2 className="text-3xl font-bold mb-2 mt-4">{item.title}</h2>
              <p className="text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollRevealBoxes;
