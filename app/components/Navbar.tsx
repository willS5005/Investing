"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-5 py-4">
        <Link href="/" className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>FinStart</Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <Link href="/courses" className="hover:text-gray-900 transition">Courses</Link>
          <Link href="/tools" className="hover:text-gray-900 transition">Tools</Link>
          <Link href="/blog" className="hover:text-gray-900 transition">Articles</Link>
          <Link href="/pricing" className="hover:text-gray-900 transition">Pricing</Link>
          <Link href="/about" className="hover:text-gray-900 transition">About</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-3 items-center">
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 transition">Log in</Link>
          <Link href="/signup" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold">
            Get Started Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 py-4 space-y-1">
          {[
            { href: "/courses", label: "Courses" },
            { href: "/tools", label: "Tools" },
            { href: "/blog", label: "Articles" },
            { href: "/pricing", label: "Pricing" },
            { href: "/about", label: "About" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-slate-50 rounded-lg transition"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link href="/login" onClick={() => setOpen(false)} className="block text-center text-sm text-gray-600 py-2.5 rounded-lg hover:bg-slate-50 transition">
              Log in
            </Link>
            <Link href="/signup" onClick={() => setOpen(false)} className="block text-center text-sm bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition font-semibold">
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
