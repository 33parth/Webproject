import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2">
  <img src="" alt="" className="h-8 w-auto" />
  <span className="text-4xl font-bold tracking-wide text-pink-500">Artistly</span>
</Link>


        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-pink-400 transition-colors duration-200">
            Home
          </Link>
          <Link href="/categories" className="hover:text-pink-400 transition-colors duration-200">
            Categories
          </Link>
          <Link href="/artists" className="hover:text-pink-400 transition-colors duration-200">
            Artists
          </Link>
          <Link href="/about" className="hover:text-pink-400 transition-colors duration-200">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-pink-400 transition-colors duration-200">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}