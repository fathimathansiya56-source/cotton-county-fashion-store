import React from 'react';

export default function LoginPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-md bg-white border border-slate-100 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Welcome Back</h1>
          <p className="text-sm text-slate-500 mt-2">Sign in to experience personalized AI styling suggestions.</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-slate-700 block">Email Address</label>
            <input type="email" required placeholder="name@domain.com" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700 block">Password</label>
            <input type="password" required placeholder="••••••••" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <button type="submit" className="mt-6 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 transition">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-slate-400">
          Don't have an account? <span className="text-blue-600 cursor-pointer hover:underline">Create an account</span>
        </div>
      </div>
    </main>
  );
}