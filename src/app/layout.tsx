import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Eliseu Miguel | Dev',
  description:
    'Bem-vindo ao portfólio de Eliseu Miguel, desenvolvedor fullstack especializado em Node.js e React. Explore meus projetos, habilidades e entre em contato para colaborarmos em soluções inovadoras e de alto impacto.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  );
}
