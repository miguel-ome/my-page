import { TypingEffect } from '@/components/typingText/typingText';

export function AboutToMe() {
  return (
    <>
      <h1 className="text-3xl">Sobre mim</h1>
      <p className="text-start my-5 whitespace-pre-line">
        <TypingEffect
          paragraphs={[
            'Olá, me chamo Eliseu Miguel e vou compartilhar um pouco de mim para você. Sou de Itabuna/Ba, tenho 22 anos e me declaro um viciado em assuntos de tecnologia. Conheci o mundo da programação em 2021 e de lá até hoje, eu não parei de pensar nela. Sempre lendo, estudando, tentanto criar alguma coisa, praticando, acabou se tornando meu hobby preferido. Entretanto decidi fazer do meu hobby algo mais profissional.',
            'Comecei a projetar objetivos mais profissinais no final de 2022, foi quando comecei a tentar alguns projetos Freelancer em algumas plataformas conhecidas como Workana, 99 Freelas, etc. Atualmente eu trabalho usando o ambiente NodeJS, mas estou me aprimorando em algumas outras linguagens (no momento C# e o ambiente .NET) e áreas (no momento DevOps: CI/DI, Docker).',
          ]}
          speed={25}
        />
      </p>
    </>
  );
}

//'Comecei a projetar objetivos mais profissinais no final de 2022, foi quando comecei a tentar alguns projetos Freelancer em algumas plataformas conhecidas como Workana, 99 Freelas, etc. Atualmente eu trabalho usando o ambiente NodeJS, mas estou me aprimorando em algumas outras linguagens e áreas, parte disso para me aprimorar profissionalmente, mas a outra parte é de '
