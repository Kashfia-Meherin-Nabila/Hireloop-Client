"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../../public/images/logo.png"
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
           <Image 
      src={logo} 
      alt="Description of image"
      width={150}
      height={100}
      priority
    />
          </Link>
        </div>

        {/* Navigation Group (Right Aligned) */}
        <div className="hidden md:flex items-center ml-auto gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/browse-jobs" className="text-sm text-gray-300 hover:text-white transition-colors">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link href="/company" className="text-sm text-gray-300 hover:text-white transition-colors">
                Company
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
            </li>
          </ul>

          {/* Vertical Separator Line */}
          <div className="h-6 w-[1px] bg-white/20" />

          {/* Sign In & CTA */}
          <div className="flex items-center gap-6">
            <Link href="/signin" className="text-sm text-gray-300 hover:text-white transition-colors">
              Sign In
            </Link>
            <Link 
              href="/get-started" 
              className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0a] md:hidden">
          <ul className="flex flex-col p-6 gap-4">
            <li><Link href="/browse-jobs" className="block text-gray-300 hover:text-white">Browse Jobs</Link></li>
            <li><Link href="/company" className="block text-gray-300 hover:text-white">Company</Link></li>
            <li><Link href="/pricing" className="block text-gray-300 hover:text-white">Pricing</Link></li>
            <hr className="border-white/10" />
            <li><Link href="/signin" className="block text-gray-300 hover:text-white">Sign In</Link></li>
            <li>
              <Link 
                href="/get-started" 
                className="block w-full text-center rounded-xl bg-blue-600 py-2.5 text-white font-medium"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}