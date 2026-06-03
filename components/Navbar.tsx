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
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#13d8c3] text-xl font-black text-[#08112f]">
            B
          </span>
          <span className="text-2xl font-black tracking-tight text-[#08112f]">
            BrightNest
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-[15px] font-bold text-[#08112f] lg:flex">
          <div className="group relative">
            <button className="rounded-xl px-4 py-3 hover:bg-slate-100">
              Buy
            </button>

            <div className="invisible absolute left-1/2 top-full w-[760px] -translate-x-1/2 translate-y-3 rounded-b-3xl bg-[#f7f8fb] p-10 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-8">
                {buyLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl p-4 text-lg font-extrabold hover:bg-white hover:shadow"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="rounded-xl px-4 py-3 hover:bg-slate-100">
              Rent
            </button>

            <div className="invisible absolute left-1/2 top-full w-[760px] -translate-x-1/2 translate-y-3 rounded-b-3xl bg-[#f7f8fb] p-10 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-8">
                {rentLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl p-4 text-lg font-extrabold hover:bg-white hover:shadow"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/properties" className="hover:text-[#d91c8f]">
            Properties
          </Link>
          <Link href="/about" className="hover:text-[#d91c8f]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#d91c8f]">
            Contact
          </Link>
        </div>

        <Link
          href="/contact"
          className="hidden rounded-2xl border-2 border-[#13d8c3] px-5 py-3 font-black text-[#08112f] transition hover:bg-[#13d8c3] lg:inline-flex"
        >
          List Property
        </Link>

        <button
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded-xl border border-slate-200 px-4 py-2 font-black lg:hidden"
        >
          Menu
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
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
          </div>
        </div>
      )}
    </header>
  );
}