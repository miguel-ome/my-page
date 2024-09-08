import { TypingEffect } from '@/components/typingText/typingText';
import { FaReact } from 'react-icons/fa';

export function Hability() {
  return (
    <>
      <h1 className="text-3xl mb-3">Habilidades</h1>
      <p className="text-start my-5 whitespace-pre-line" id="summary">
        <TypingEffect
          paragraphs={[
            `Frontend: utilizo o React como tecnologia de front, e um dos motivos foi sua versatilidade para com o mobile (React-Native). Então, trabalho com Nextjs para criação de SPA's e SSR's: - React \n - NextJs \n - Styled Components \n - TailwindCSS \n - React-Native (em andamento ✍)\n`,
            `Backend: como disse anteriormente, eu trabalho utilizando o ambiente NodeJs. Então, alguns frameworks como Express, NestJs, para gerenciamento das requisições. Prisma, Mongoose como ORM (TypeORM em estudo). Jest como ferramenta de testes e sempre respeitando os padrões do SOLID, usando também alguns Designe Patterns: \n - Express.JS \n - NestJS \n - Prisma \n - Mongoose \n - TypeORM (em andamento ✍) \n - Jest\n`,
            'Banco de Dados: tenho conhecimento da linguagem SQL (DML, DDL, etc), e uso PostgresSQL, MySQL e MongoDB como Bancos Relacionais e Não Relacionais. Dentre os três, tenho mais experiência e uso com PostgreSQL: \n - PostgreSQL \n - MySQL \n - MondoDB \n - SQL\n',
            'Outros: deixei esse paragrafp disponível para trazer os conhecimentos complementares, mas sem especificar uma área específica, mas que uso constantemente no meu desenvolvimento de códigos:\n - Javascript e Typescript \n - C# (em andamento ✍) \n - Versionamento de Git (Git) \n - Github \n - Docker (em andamento ✍) \n - API Rest \n - JWT | OAuth | Passport \n - CI/CD (em andamento ✍) \n - TDD (em andamento)',
          ]}
          speed={25}
        />
      </p>
    </>
  );
}
