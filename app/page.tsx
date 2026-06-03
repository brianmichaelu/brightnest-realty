import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-[#fffbea] px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Buy Properties",
              text: "Find homes, apartments, villas and land for sale in growing locations.",
              href: "/properties?status=For%20Sale",
            },
            {
              title: "Rent Properties",
              text: "Explore rental homes, apartments and commercial spaces for different budgets.",
              href: "/properties?status=For%20Rent",
            },
            {
              title: "List Your Property",
              text: "Contact us to showcase your property with clear photos and professional details.",
              href: "/contact",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 h-14 w-14 rounded-2xl bg-[#e7ff3c]" />
              <h2 className="text-3xl font-black text-[#08112f]">
                {item.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <FeaturedProperties />

      <section className="bg-[#08112f] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#13d8c3]">
              Why BrightNest?
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              A cleaner way to present real estate online
            </h2>
          </div>

          <div className="grid gap-5">
            {[
              "Bright modern design that looks professional on desktop and mobile.",
              "Property pages with images, price, location, features and contact options.",
              "Simple navigation with dropdown menus inspired by top property platforms.",
              "Direct WhatsApp and email contact for serious inquiries.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-lg font-semibold leading-8 text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}