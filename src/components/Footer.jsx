import Link from "next/link";
import {LogoFacebook, LogoGithub, LogoLinkedin} from '@gravity-ui/icons';
import Image from "next/image";
import logo from "../../public/images/logo.png"

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
        
        {/* Brand Section */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Link href="/" className="text-2xl font-bold tracking-tight">
           <Image 
      src={logo} 
      alt="Description of image"
      width={150}
      height={100}
      priority
    />
          </Link>
          <p className="text-gray-400 text-sm max-w-xs">
            The AI-native career platform. Built for people who take their work seriously.
          </p>
          <div className="flex gap-3 mt-2">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-white"><LogoFacebook/></div>
            <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-white"><LogoGithub/></div>
            <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-white"><LogoLinkedin/></div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-blue-500 mb-4">Product</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Job discovery</Link></li>
              <li><Link href="#" className="hover:text-white">Worker AI</Link></li>
              <li><Link href="#" className="hover:text-white">Companies</Link></li>
              <li><Link href="#" className="hover:text-white">Salary data</Link></li>
            </ul>
          </div>

          {/* Navigations */}
          <div>
            <h3 className="text-sm font-semibold text-blue-500 mb-4">Navigations</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Help center</Link></li>
              <li><Link href="#" className="hover:text-white">Career library</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-blue-500 mb-4">Resources</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white">Brand Guideline</Link></li>
              <li><Link href="#" className="hover:text-white">Newsroom</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-6xl px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
        <p>© 2024 — HireLoop</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white">Terms & Policy</Link>
          <Link href="#" className="hover:text-white">Privacy Guideline</Link>
        </div>
      </div>
    </footer>
  );
}