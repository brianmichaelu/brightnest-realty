import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import Link from "next/link";

const serviceCards = [
  {
    title: "Buy a Property",
    text: "Browse houses, apartments, villas, commercial spaces and land available for sale.",
    href: "/properties?status=For%20Sale",
  },
  {
    title: "Rent a Property",
    text: "Find comfortable rental homes, apartments and business spaces in prime locations.",
    href: "/properties?status=For%20Rent",
  },
  {
    title: "List Your Property",
    text: "Showcase your property with clear details, photos and direct inquiry options.",
    href: "/contact",
  },
];

const stats = [
  { number: "120+", label: "Property Listings" },
  { number: "15+", label: "Prime Locations" },
  { number: "50+", label: "Happy Clients" },
  { number: "24/7", label: "Inquiry Support" },
];

const locations = [
  "Masaki",
  "Mbezi Beach",
  "Tegeta",
  "Kigamboni",
  "Upanga",
  "City Centre",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-white px-5 py-12">
  <div className="mx-auto max-w-7xl">
    <div className="mb-10 text-center">
      <p className="font-black uppercase tracking-[0.22em] text-[#0074B7]">
        What We Offer
      </p>

      <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black leading-tight text-[#1E293B] md:text-4xl">
        Simple property services for buyers, renters and property owners
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
        BrightNest Realty gives visitors a clear way to search, compare and
        inquire about properties without confusion.
      </p>
    </div>

    <div className="grid gap-7 md:grid-cols-3">
      {serviceCards.map((card, index) => (
        <Link
          key={card.title}
          href={card.href}
          className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-[#008DD2] hover:shadow-2xl"
        >
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7FF] text-2xl font-black text-[#0074B7] transition group-hover:bg-[#008DD2] group-hover:text-white">
            {index + 1}
          </div>

          <h3 className="text-2xl font-black text-[#1E293B] group-hover:text-[#0074B7]">
            {card.title}
          </h3>

          <p className="mt-4 min-h-[90px] text-base leading-8 text-slate-600">
            {card.text}
          </p>

          <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
            <span className="font-black text-[#0074B7]">Learn More</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA] font-black text-[#0074B7] transition group-hover:bg-[#008DD2] group-hover:text-white">
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
      <FeaturedProperties />

      <section className="bg-white px-5 py-12">
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    <div>
      <p className="font-black uppercase tracking-[0.22em] text-[#0074B7]">
        Why Choose Us
      </p>

      <h2 className="mt-4 text-3xl font-black leading-tight text-[#1E293B] md:text-5xl">
        A smarter way to discover and present real estate.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        BrightNest Realty is built to help buyers, renters and property owners
        connect faster through a clean property search experience, professional
        listing cards and direct inquiry options.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="https://wa.me/255689824682?text=Hello BrightNest Realty, I would like to ask about your properties."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-[#008DD2] px-7 py-4 text-center font-black text-white transition hover:bg-[#0074B7]"
        >
          Talk to Us
        </a>

        <Link
          href="/properties"
          className="rounded-md border border-slate-300 px-7 py-4 text-center font-black text-[#003B5C] transition hover:border-[#008DD2] hover:text-[#008DD2]"
        >
          Browse Listings
        </Link>
      </div>
    </div>

    <div className="grid gap-5 sm:grid-cols-2">
      {[
        {
          number: "01",
          title: "Easy Property Search",
          text: "Visitors can quickly search by location, property type and budget to find suitable homes, land or commercial spaces.",
        },
        {
          number: "02",
          title: "Professional Listings",
          text: "Each property is presented with clear photos, price, location, size and key features to build trust with serious clients.",
        },
        {
          number: "03",
          title: "Direct Inquiries",
          text: "WhatsApp and email contact options make it easy for interested buyers or tenants to reach out immediately.",
        },
        {
          number: "04",
          title: "Mobile-Friendly Design",
          text: "The website is designed to look clean and easy to use on phones, tablets and desktop screens.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-[#F5F7FA] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#008DD2] text-sm font-black text-white">
            {item.number}
          </div>

          <h3 className="text-xl font-black leading-tight text-[#1E293B]">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="bg-[#003B5C] px-5 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-black text-[#8ED8FF]">
                {stat.number}
              </p>
              <p className="mt-2 font-bold text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F7FA] px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-black uppercase tracking-[0.22em] text-[#0074B7]">
              Popular Locations
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#1E293B]">
              Explore properties by location
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              These are placeholder locations. You can update them based on the
              client’s actual service areas.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location}
                href="/properties"
                className="rounded-xl bg-white p-6 font-black text-[#1E293B] shadow-sm transition hover:-translate-y-1 hover:text-[#0074B7] hover:shadow-xl"
              >
                Properties in {location} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#003B5C] px-8 py-14 text-center text-white md:px-14">
          <p className="font-black uppercase tracking-[0.22em] text-[#8ED8FF]">
            Ready to Move?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            Find your next home, rental or investment property today.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            Contact BrightNest Realty through WhatsApp or email and start your
            property search with a simple inquiry.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/255689824682?text=Hello BrightNest Realty, I am looking for a property."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#008DD2] px-7 py-4 font-black text-white transition hover:bg-white hover:text-[#003B5C]"
            >
              WhatsApp Us
            </a>

            <Link
              href="/properties"
              className="rounded-md border border-white/30 px-7 py-4 font-black text-white transition hover:bg-white hover:text-[#003B5C]"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
