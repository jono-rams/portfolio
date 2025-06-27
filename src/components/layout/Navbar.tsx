import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-surface text-text-main shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-accent transition-colors duration-300">
            Jonathan Rampersad
          </Link>
        </div>
        <ul className="flex items-center space-x-6 text-lg">
          <li>
            <Link href="/" className="hover:text-accent transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-accent transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-accent transition-colors duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-accent transition-colors duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;