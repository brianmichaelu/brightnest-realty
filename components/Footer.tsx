import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#08112f] px-5 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-black">BrightNest Realty</h2>
          <p className="mt-4 max-w-xl text-white/70">
            A modern real estate website for showcasing homes, apartments,
            commercial spaces and land with bright visuals and simple contact
            options.
          </p>
        </div>

        <div>
          <h3 className="font-black text-[#e7ff3c]">Pages</h3>
          <div className="mt-4 flex flex-col gap-3 text-white/75">
            <Link href="/">Home</Link>
            <Link href="/properties">Properties</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-black text-[#e7ff3c]">Contact</h3>
          <div className="mt-4 flex flex-col gap-3 text-white/75">
            <a href="mailto:lubrun.enterprises@gmail.com">
              lubrun.enterprises@gmail.com
            </a>
            <a href="https://wa.me/255689824682" target="_blank">
              +255 689 824 682
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/50">
        © {new Date().getFullYear()} BrightNest Realty. All rights reserved.
      </div>
    </footer>
  );
}