import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Cotton County | Premium Apparel',
  description: 'AI-Powered Custom Fashion Store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}