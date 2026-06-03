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

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7FF] text-2xl font-black text-[#0074B7]">
                  ✓
                </div>

                <h2 className="text-2xl font-black text-[#1E293B] group-hover:text-[#0074B7]">
                  {card.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">{card.text}</p>

                <p className="mt-6 font-black text-[#0074B7]">
                  Learn More →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProperties />

      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.22em] text-[#0074B7]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#1E293B] md:text-5xl">
              A modern real estate experience built for serious property
              inquiries.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BrightNest Realty helps visitors quickly discover properties,
              compare options and contact you directly through WhatsApp or
              email. This home page is designed to feel professional, clean and
              ready for a real estate client.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-md bg-[#008DD2] px-7 py-4 font-black text-white transition hover:bg-[#0074B7]"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Clean property search experience",
              "Professional property cards",
              "Direct WhatsApp inquiries",
              "Mobile-friendly layout",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-[#F5F7FA] p-7"
              >
                <div className="mb-5 h-12 w-12 rounded-full bg-[#008DD2]" />
                <h3 className="text-xl font-black text-[#1E293B]">{item}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Placeholder text for this feature. You can replace this with
                  client-specific details later.
                </p>
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
