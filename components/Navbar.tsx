"use client";

import Link from "next/link";
import { useState } from "react";

const buyLinks = [
  { label: "Property for sale", href: "/properties?status=For%20Sale" },
  { label: "Houses for sale", href: "/properties?type=House" },
  { label: "Apartments for sale", href: "/properties?type=Apartment" },
  { label: "Land for sale", href: "/properties?type=Land" },
];

const rentLinks = [
  { label: "Property for rent", href: "/properties?status=For%20Rent" },
  { label: "Apartments for rent", href: "/properties?type=Apartment" },
  { label: "Houses for rent", href: "/properties?type=House" },
  { label: "Commercial rentals", href: "/properties?type=Commercial" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#003B5C] text-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#008DD2] text-lg font-black text-white">
            B
          </span>
          <span className="text-2xl font-black tracking-tight">
            BrightNest
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-bold lg:flex">
          <div className="group relative">
            <button className="rounded-md px-3 py-2 hover:bg-[#0074B7]">
              Buy
            </button>

            <div className="invisible absolute left-0 top-full w-[680px] translate-y-3 rounded-b-2xl bg-white p-8 text-[#1E293B] opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-4">
                {buyLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-xl p-4 font-extrabold hover:bg-[#F5F7FA] hover:text-[#0074B7]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="rounded-md px-3 py-2 hover:bg-[#0074B7]">
              Rent
            </button>

            <div className="invisible absolute left-0 top-full w-[680px] translate-y-3 rounded-b-2xl bg-white p-8 text-[#1E293B] opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-4">
                {rentLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-xl p-4 font-extrabold hover:bg-[#F5F7FA] hover:text-[#0074B7]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/properties" className="hover:text-[#8ED8FF]">
            Properties
          </Link>
          <Link href="/about" className="hover:text-[#8ED8FF]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#8ED8FF]">
            Contact
          </Link>
        </div>

        <Link
          href="/contact?type=list-property"
          className="hidden rounded-md bg-[#008DD2] px-5 py-2.5 text-sm font-black text-white transition hover:bg-white hover:text-[#003B5C] lg:inline-flex"
        >
          List Property
        </Link>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-md border border-white/30 px-4 py-2 font-black lg:hidden"
        >
          Menu
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#003B5C] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4 font-bold">
            <Link onClick={() => setMobileOpen(false)} href="/">
              Home
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/properties">
              Properties
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/about">
              About
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/contact">
              Contact
            </Link>
            <Link
              onClick={() => setMobileOpen(false)}
              href="/contact?type=list-property"
              className="rounded-md bg-[#008DD2] px-4 py-3 text-center font-black text-white"
            >
              List Property
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
