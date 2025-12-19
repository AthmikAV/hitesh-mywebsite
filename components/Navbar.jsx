"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-lg border-b border-gray-300">
      <div className="h-16 flex justify-between items-center px-6 md:px-16">
        <Link href="/" className="font-bold text-xl">
          My Website
        </Link>

        <div className="hidden md:flex gap-6">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, label }) => (
  <Link
    href={href}
    className="block text-gray-700 hover:text-gray-900 font-medium"
  >
    {label}
  </Link>
);

export default Navbar;
