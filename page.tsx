import Link from "next/link";
import { categories } from "./lib/categories";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white px-6 py-16">
        {/* 🎤 Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover and Book the Perfect Celebrity for Your Event!
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            We connect you with top-notch artists and public figures to make your event unforgettable.
          </p>
          <Link
            href="/artists"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-sm font-medium transition"
          >
            INQUIRE NOW
          </Link>
        </section>
        {}
        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Top Categories for Every Occasion</h2>
          <p className="text-gray-400 text-md">
            From singers to sports stars — find the perfect match by category.
          </p>
        </section>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/artists?category=${encodeURIComponent(cat.name)}`}
            >
              <div className="relative aspect-square bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center py-2.5">
                  <p className="text-sm font-semibold text-white">{cat.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* 🚀 Expert Advice CTA */}
      <div className="bg-pink-600 text-white px-6 py-6 sm:py-8 rounded-xl shadow-lg border border-pink-600/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
            Take Expert Advice to Book an Artist
          </h2>
          <a
            href="/contact"
            className="bg-white text-pink-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-pink-100 transition"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </>
  );
}