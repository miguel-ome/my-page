'use client';

import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed: number;
}

const TypingText = ({ text, speed = 100 }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return (
    <p className="text-white text-base md:text-lg text-center w-full">
      {displayedText}
    </p>
  );
};

export default TypingText;
