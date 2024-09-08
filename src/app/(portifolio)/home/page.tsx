import { TypingEffect } from '@/components/typingText/typingText';

export default function Home() {
  return (
    <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 max-w-lg md:max-w-3xl">
      <h1 className="text-4xl text-white font-bold leading-none sm:text-5xl">
        Hello, I&apos;m
        <span className="text-orange m-4"> Eliseu Miguel </span>
      </h1>
      <p className="text-white text-2xl m-4">
        Bem-vindo ao meu espaço digital!
      </p>
      <p className="text-white text-lg font-medium">
        <TypingEffect
          paragraphs={[
            'Fico feliz em te ver por aqui. Este é o lugar onde compartilho minha jornada como desenvolvedor fullstack, meus projetos, e um pouco sobre minhas paixões. Navegue à vontade, explore meus trabalhos, e não hesite em entrar em contato. Vamos construir algo incrível juntos!',
          ]}
          speed={50}
        />
      </p>
    </div>
  );
}
