import { ReactNode } from 'react';

interface CarrouselProps {
  children: ReactNode;
}

export function Carrousel({ children }: CarrouselProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
