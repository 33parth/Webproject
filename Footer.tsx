export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-2">Artistly</h4>
          <p className="mb-2">
            Artistly is an independent platform that connects you to the right performers.
            We do not represent or claim exclusive affiliation with any artist.
          </p>
          <p>© {new Date().getFullYear()} Artistly. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:text-pink-400">About Us</a></li>
            <li><a href="/categories" className="hover:text-pink-400">Categories</a></li>
            <li><a href="/reviews" className="hover:text-pink-400">Client Reviews</a></li>
            <li><a href="/contact" className="hover:text-pink-400">Contact</a></li>
            <li><a href="https://youtube.com" target="_blank" className="hover:text-pink-400">YouTube Channel</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-2">Contact Us</h4>
          <ul className="space-y-1">
            <li>📍 Connaught Place, Delhi 110001</li>
            <li>📞 +91 98705 42770</li>
            <li>📧 info@artistly.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" className="hover:text-pink-500">🌐</a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500">📸</a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-pink-500">💼</a>
            <a href="https://youtube.com" target="_blank" className="hover:text-pink-500">▶️</a>
          </div>
        </div>
      </div>
    </footer>
  );
}