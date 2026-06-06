import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#ebe7df] to-[#f4f1ea] px-8 py-24 text-center md:px-12 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Premium Apparel Collection</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
            Wear Comfort. <br />Wear Confidence.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto">
            Discover minimal designs engineered with maximum quality cotton fabrics. Tailored for young trendsetters.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/products" className="rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 transition">
              Shop Collection
            </Link>
            <Link href="/ai-recommendation" className="rounded-full border-2 border-blue-600 bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-md hover:bg-blue-50 transition">
              ✨ Try AI Recommendation
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Categories Layout */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {['T-Shirts', 'Hoodies', 'Jeans', 'Traditional Wear'].map((category) => (
            <div key={category} className="group relative cursor-pointer overflow-hidden rounded-xl bg-white p-6 border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="h-32 w-full rounded-lg bg-[#f4f1ea] mb-4 flex items-center justify-center text-slate-400 group-hover:scale-105 transition duration-200">
                👕
              </div>
              <h3 className="font-semibold text-slate-800 text-center">{category}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}