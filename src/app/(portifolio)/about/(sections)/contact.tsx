import { TypingEffect } from '@/components/typingText/typingText';

export function Contact() {
  return (
    <h1>
      <TypingEffect paragraphs={['Contato']} speed={50} />
    </h1>
  );
}
