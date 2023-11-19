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
             Home
            </Link>
            <Link href="/about">
              about
            </Link>
            <Link href="/contact">
             Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
