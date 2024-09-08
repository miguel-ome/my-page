'use client';

import { useState, useEffect } from 'react';

interface TypingEffectProps {
  speed?: number;
  paragraphs: string[];
}

export const TypingEffect = ({ paragraphs, speed = 50 }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentParagraph < paragraphs.length) {
      if (charIndex < paragraphs[currentParagraph].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + paragraphs[currentParagraph].charAt(charIndex),
          );
          setCharIndex(charIndex + 1);
        }, speed); // Velocidade da digitação
        return () => clearTimeout(timeout);
      } else {
        // Pausa entre parágrafos
        const timeout = setTimeout(() => {
          setCurrentParagraph(currentParagraph + 1);
          setDisplayedText((prev) => prev + '\n\n'); // Adiciona uma quebra de linha
          setCharIndex(0);
        }, 1000); // Tempo entre um parágrafo e outro
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentParagraph, paragraphs, speed]);

  return <>{displayedText}</>;
};
