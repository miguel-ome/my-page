import { MenuMobile } from '@/components/menuMobile/menuMobile.component';
import { Navigation } from '@/components/navigation/navigation.component';
import { ReactNode } from 'react';

interface HomeProps {
  children: ReactNode;
}

export default function Home({ children }: HomeProps) {
  return (
    <>
      <header>
        <MenuMobile />
      </header>
      <section className="flex justify-end items-end w-screen h-screen p-8">
        <div className=" w-full h-full flex-col flex justify-center items-center">
          {children}
        </div>
        <Navigation />
      </section>
    </>
  );
}
