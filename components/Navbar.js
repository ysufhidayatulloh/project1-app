// src/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">Your Logo</div>
          <div className="flex space-x-4">
            <Link href="/">
              <a className="text-white">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-white">About</a>
            </Link>
            <Link href="/contact">
              <a className="text-white">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
