// @flow strict
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        {/* Logo / Nom du Portfolio */}
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold"
          >
            Portfolio
          </Link>
        </div>

        {/* Menu de navigation */}
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-4 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link href="/#about" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">À propos</div>
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Expériences</div>
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Compétences</div>
            </Link>
          </li>
          <li>
            <Link href="/#education" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Formation</div>
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Blog</div>
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="block px-4 py-2 no-underline outline-none hover:no-underline">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">Projets</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
