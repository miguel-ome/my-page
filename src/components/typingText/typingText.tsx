'use client';

import { useState, useEffect, ReactNode } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
}

export function TypingText({ text, speed = 10 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  return <>{displayedText}</>;
}
