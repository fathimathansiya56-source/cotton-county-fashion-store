import React from 'react';
import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 font-sans">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="h-24 w-24 bg-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center text-xl">👕</div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800">Oversized Cotton Tee</h3>
              <p className="text-xs text-slate-400 mt-0.5">Size: L | Color: Beige</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-extrabold text-slate-950">$29.99</span>
                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-2 py-1 bg-slate-50">
                  <button className="text-xs font-bold text-slate-500 px-1">-</button>
                  <span className="text-sm font-semibold text-slate-800 px-1">1</span>
                  <button className="text-xs font-bold text-slate-500 px-1">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Summary Panel */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-fit">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Order Summary</h2>
          <div className="space-y-3 text-sm border-b border-slate-100 pb-4">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-800">$29.99</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Estimated Shipping</span>
              <span className="text-green-600 font-semibold">FREE</span>
            </div>
          </div>
          <div className="flex justify-between text-base font-bold text-slate-900 mt-4">
            <span>Total Amount</span>
            <span>$29.99</span>
          </div>
          <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
}