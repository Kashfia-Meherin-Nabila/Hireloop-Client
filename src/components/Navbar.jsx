"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { signOut, useSession } from "@/lib/auth-client";
import { Button, Avatar } from "@heroui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 1. Correct hook usage
  const { data: session, isPending } = useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = "/"; // Force refresh to clear state
        },
      },
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={50}
            style={{ width: "150px", height: "auto" }}
            priority
          />
        </Link>

        {/* Navigation Group */}
        <div className="hidden md:flex items-center ml-auto gap-8">
          <ul className="flex items-center gap-8">
            <li><Link href="/browse-jobs" className="text-sm text-gray-300 hover:text-white">Browse Jobs</Link></li>
            <li><Link href="/company" className="text-sm text-gray-300 hover:text-white">Company</Link></li>
            <li><Link href="/pricing" className="text-sm text-gray-300 hover:text-white">Pricing</Link></li>
          </ul>

          <div className="h-6 w-px bg-white/20" />

          {/* Auth Section */}
          <div className="flex items-center gap-6">
            {!isPending && (
              user ? (
                <div className="flex items-center gap-4">
                  <Avatar name={user.name || "User"} src={user.image || ""} />
                  <Button onClick={handleSignOut} variant="ghost" className="text-white">
                    Sign out
                  </Button>
                </div>
              ) : (
                <Link href="/signin" className="text-sm text-gray-300 hover:text-white">
                  Sign In
                </Link>
              )
            )}
            <Link href="/get-started" className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium text-white">
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </header>
    </nav>
  );
}