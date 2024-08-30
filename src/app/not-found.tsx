import Link from 'next/link';
import { TbError404 } from 'react-icons/tb';

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center flex-col">
      <TbError404 size="200" color="white" />
      <h2 className="text-2xl text-white text-center">Error 404 | Not Found</h2>
      <p className="text-white text-center flex flex-col">
        Esta página não existe em nosso sistema.{'\n'}
        <span className="text-orange">
          Retorne a página
          <Link
            href="/home"
            className="text-white underline underline-offset-4 mx-2 transition hover:text-orangeBold"
          >
            {''}
            Home{' '}
          </Link>
          acessar!
        </span>
      </p>
    </div>
  );
}
