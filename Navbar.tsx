import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-100 px-8 py-5 flex items-center justify-between font-sans sticky top-0 z-50 shadow-sm">
      {/* Brand Title Logo */}
      <Link href="/" className="text-xl font-black tracking-tight text-slate-900 hover:opacity-80 transition">
        COTTON <span className="text-blue-600">COUNTY</span>
      </Link>
      
      {/* Universal Page Links */}
      <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <Link href="/products" className="hover:text-blue-600 transition">Shop Collection</Link>
        <Link href="/cart" className="hover:text-blue-600 transition">Cart</Link>
        <Link href="/login" className="rounded-full bg-slate-900 px-4 py-1.5 text-xs text-white hover:bg-slate-800 transition">
          Account
        </Link>
      </div>
    </nav>
  );
}