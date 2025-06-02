import React, { useEffect, useRef, useState } from 'react';

import services1 from '../styles/images/services-1.jpg';
import services2 from '../styles/images/services-2.jpg';
import services3 from '../styles/images/services-3.jpg';
import services4 from '../styles/images/services-4.png';
import services5 from '../styles/images/services-5.png';
import services6 from '../styles/images/services-6.png';
import services7 from '../styles/images/services-7.jpg';
import services8 from '../styles/images/services-8.jpg';

import storyimg from '../styles/images/story-img2.png'


const frontImages = [services1, services2, services3, services4, services5, services6, services7, services8];
const backImages = storyimg;

import React, { useEffect, useRef, useState } from 'react';


export default function FlipOnScrollTailwind() {
  const refs = useRef([]);
  const [currentCenterIndex, setCurrentCenterIndex] = useState(null);

  useEffect(() => {
    function onScroll() {
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = null;
      let closestDistance = Infinity;

      refs.current.forEach((section, i) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setCurrentCenterIndex(closestIndex);
    }

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="container mx-auto max-w-xl py-10">
      {frontImages.map((frontImg, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="relative my-8 h-48 w-full"
        >
          <img
            src={frontImg}
            alt={`Front ${i + 1}`}
            className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
              currentCenterIndex === i ? 'opacity-0' : 'opacity-100'
            }`}
            draggable={false}
          />
          <img
            src={backImages[i]}
            alt={`Back ${i + 1}`}
            className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
              currentCenterIndex === i ? 'opacity-100' : 'opacity-0'
            }`}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}
