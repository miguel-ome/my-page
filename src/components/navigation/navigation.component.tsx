import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="h-48 w-48 border-t-2 rounded-tl-lg border-l-2 border-orange pl-4 pt-4 hidden md:block">
      <ul className="space-y-3 text-white text-lg">
        <li>
          <Link href="/home" className="hover:text-orange transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-orange transition">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-orange transition">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-orange transition">
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
