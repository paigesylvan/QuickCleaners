import React from 'react';

import services1 from '../styles/images/services-1.jpg';
import services2 from '../styles/images/services-2.jpg';
import services3 from '../styles/images/services-3.jpg';
import services4 from '../styles/images/services-4.png';
import services5 from '../styles/images/services-5.png';
import services6 from '../styles/images/services-6.jpg';
import services7 from '../styles/images/services-7.jpg';
import services8 from '../styles/images/services-8.png';
import services9 from '../styles/images/services-9.jpg';

import back1 from '../styles/images/back-1.png';
import back2 from '../styles/images/back-2.png';
import back3 from '../styles/images/back-3.png';
import back4 from '../styles/images/back-4.png';
import back5 from '../styles/images/back-5.png';
import back6 from '../styles/images/back-6.png';
import back7 from '../styles/images/back-7.png';
import back8 from '../styles/images/back-8.png';
import back9 from '../styles/images/back-9.png';

const frontImages = [services1, services2, services3, services4, services5, services6, services7, services8, services9];
const backImages = [back1, back2, back3, back4, back5, back6, back7, back8, back9

];
const backTitles = [
  "Dry Cleaning",
  "Laundry",
  "Bulk Laundry",
  "Household Fabric",
  "Wedding",
  "Press Only",
  "Suede & Leather",
  "Alteration & Repair",
  "Commercial",
];

const backTexts = [
  "Experience expert care for your finest garments. We gently restore the beauty and structure of suits, gowns, and delicate fabrics",
  "Enjoy freshly laundered and perfectly pressed garments, ready to wear and wrinkle-free. For added convenience, we offer boxed shirt packaging, ideal for travel, storage, or just a polished finish.",
  "Simplify your routine with our bulk laundry service; washed, dried, and neatly folded with care. Let us take the hassle out of laundry day so you can focus on everything else.",
  "Refresh your home with our expert care for bedding, curtains, linens, rugs and more. We handle the heavy lifting; cleaning, pressing, and finishing each item to elevate your space with effortless comfort and cleanliness.",
  "Trust us with the dress of a lifetime. We carefully clean, restore, and preserve your gown with expert attention to every fabric, detail, and memory, so it stays beautiful for generations to come.",
  "Sometimes all your clothes need is a flawless finish. Our press-only service smooths, sharpens, and refreshes garments—perfect for when cleaning isn’t required, but presentation is everything.",
  "Delicate by nature, luxurious by feel. Suede and leather deserve expert care. We clean, condition, and restore your specialty items to preserve their texture, shape, and timeless appeal.",
  "Well-fitting clothes make all the difference. From tailoring to zipper replacements and button repairs, our expert service keeps your wardrobe looking sharp and ready to wear.",
  "Professional care you can count on. We provide reliable cleaning services for hospitals, uniforms, and bulk accounts. Tailored solutions to keep your team looking polished and prepared.",
];

export default function FlipOnScrollTailwind() {
  const refs = React.useRef([]);
  const [currentCenterIndex, setCurrentCenterIndex] = React.useState(null);

  React.useEffect(() => {
    function onScroll() {
      if (window.innerWidth >= 1024) {
        // Disable scroll flipping on desktop
        setCurrentCenterIndex(null);
        return;
      }

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
      <div className="w-full px-4 mb-12 lg:px-8  lg:mb-14">
        <h1 className=' text-5xl py-12 font-bold text-center lg:text-5xl overflow-hidden lg:mb-8 '>Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 overflow-hidden">
          {frontImages.map((frontImg, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className="relative w-full aspect-[4/3] overflow-hidden group lg:cursor-pointer"
            >
              {/* Front Image */}
              <img
                src={frontImg}
                alt={`Front ${i + 1}`}
                className={`
                  absolute inset-0 w-full h-full object-cover overflow-hidden
                  transition-opacity duration-500
                  ${currentCenterIndex === null || currentCenterIndex !== i ? 'opacity-100' : 'opacity-0'}
                  lg:group-hover:opacity-0
                `}
                draggable={false}
              />
    
              {/* Back Image */}
              <div
                className={`absolute w-full h-full transition-opacity duration-500 overflow-hidden
                  ${currentCenterIndex === i ? 'opacity-100' : 'opacity-0'}
                  lg:group-hover:opacity-100
                  bg-cover bg-center flex flex-col justify-center p-6 text-white`}
                  style={{ backgroundImage: `url(${backImages[i]})` }}
                  >
                <h2 className=" text-xl lg:text-4xl font-bold mb-4 drop-shadow-md">{backTitles[i]}</h2>
                <p className="text-sm lg:text-xl drop-shadow-md">{backTexts[i]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    
}

