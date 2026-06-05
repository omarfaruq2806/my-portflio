"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#001418]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Omar<span className="text-[rgb(0,222,238)]">.dev</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </ul>

        {/* Resume Button */}
        <Link
          href="/resume.pdf"
          download
          className="hidden md:block bg-[rgb(0,222,238)] text-black px-4 py-2 rounded-md font-semibold hover:opacity-90"
        >
          Resume
        </Link>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10">
          <ul lassName="flex flex-col items-center gap-3 px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-4 px-6 text-gray-300 hover:text-cyan-400 "
              >
                {link.name}
              </Link>
            ))}
            
          </ul>
        </div>
      )}
    </nav>
  );
}
