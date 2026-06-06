import React from 'react';

const DUMMY_PRODUCTS = [
  { id: 1, name: 'Oversized Cotton Tee', price: 29.99, category: 'T-Shirts', tag: 'Trending' },
  { id: 2, name: 'Premium Heavyweight Hoodie', price: 59.99, category: 'Hoodies', tag: 'Best Seller' },
  { id: 3, name: 'Relaxed Fit Denim Jeans', price: 49.99, category: 'Jeans', tag: 'New' },
  { id: 4, name: 'Classic Kurta Shacket', price: 64.99, category: 'Traditional Wear', tag: 'Cultural' },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-fit">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Filters</h2>
          <div className="space-y-6">
            <div>
              <label className="text-xs font-semibold uppercase text-slate-400">Search</label>
              <input type="text" placeholder="Search clothes..." className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-slate-400">Categories</label>
              <div className="mt-2 space-y-2 text-sm text-slate-600">
                {['All Items', 'T-Shirts', 'Hoodies', 'Jeans', 'Traditional'].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-600" /> {cat}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid Content Area */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-extrabold text-slate-900">Our Collection</h1>
            <span className="text-sm text-slate-500">{DUMMY_PRODUCTS.length} Outfits Found</span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DUMMY_PRODUCTS.map((product) => (
              <div key={product.id} className="group relative rounded-2xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition">
                <div className="relative h-64 w-full overflow-hidden rounded-xl bg-[#f4f1ea] flex items-center justify-center text-slate-400">
                  <span className="absolute top-2 left-2 rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {product.tag}
                  </span>
                  📦 Cloth Preview
                </div>
                <div className="mt-4">
                  <span className="text-xs text-slate-400">{product.category}</span>
                  <h3 className="text-base font-bold text-slate-800 mt-0.5 group-hover:text-blue-600 transition">{product.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-black text-slate-900">${product.price}</span>
                    <button className="rounded-lg bg-slate-100 p-2 text-xs font-bold text-slate-700 hover:bg-blue-600 hover:text-white transition">
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}