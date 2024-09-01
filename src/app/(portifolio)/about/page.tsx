'use client';

import { ReactNode, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { AboutToMe } from './(sections)/aboutToMe';
import { Projects } from './(sections)/projects';
import { Hability } from './(sections)/hability';
import { Contact } from './(sections)/contact';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const sections: ReactNode[] = [
  <AboutToMe key={1} />,
  <Projects key={2} />,
  <Hability key={3} />,
  <Contact key={4} />,
];

export default function About() {
  const [indexCarrousel, setIndexCarrousel] = useState(0);

  const handlePropsSwipeable = useSwipeable({
    onSwipedLeft: () => toggleIndexCarrousel({ index: 1 }),
    onSwipedRight: () => toggleIndexCarrousel({ index: -1 }),
  });

  const toggleIndexCarrousel = ({ index }: { index: number }) => {
    if (indexCarrousel === 3 && index === 1) {
      setIndexCarrousel(0);
      return;
    }

    if (indexCarrousel === 0 && index === -1) {
      setIndexCarrousel(3);
      return;
    }
    setIndexCarrousel(indexCarrousel + index);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-white md:w-4/5 relative">
      <button
        className="absolute opacity-10 hover:opacity-50 transition left-0"
        onClick={() => toggleIndexCarrousel({ index: -1 })}
      >
        <FaChevronLeft size="150" color="gray" />
      </button>
      <div
        className="w-full h-full flex flex-col justify-center items-center transition"
        {...handlePropsSwipeable}
      >
        <div>
          <div className="w-80 text-center">{sections[indexCarrousel]}</div>
        </div>
      </div>
      <button
        className="absolute opacity-10 hover:opacity-50 transition right-0"
        onClick={() => toggleIndexCarrousel({ index: 1 })}
      >
        <FaChevronRight size="150" color="gray" />
      </button>
      <nav className="space-x-2">
        <button
          className={`w-3 h-3 rounded-full border ${indexCarrousel === 0 ? 'border-orange bg-orange' : 'border-white'}`}
        />
        <button
          className={`w-3 h-3 rounded-full border ${indexCarrousel === 1 ? 'border-orange bg-orange' : 'border-white'}`}
        />
        <button
          className={`w-3 h-3 rounded-full border ${indexCarrousel === 2 ? 'border-orange bg-orange' : 'border-white'}`}
        />
        <button
          className={`w-3 h-3 rounded-full border ${indexCarrousel === 3 ? 'border-orange bg-orange' : 'border-white'}`}
        />
      </nav>
    </div>
  );
}
