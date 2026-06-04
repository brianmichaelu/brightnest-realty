import Link from "next/link";

const values = [
  {
    title: "Clear Property Listings",
    text: "Every listing is presented with useful details, pricing, location, size and direct inquiry options.",
  },
  {
    title: "Buyer-Friendly Experience",
    text: "Visitors can browse homes, apartments, land and commercial spaces without confusion.",
  },
  {
    title: "Direct Communication",
    text: "WhatsApp and email inquiry buttons help serious clients reach the business quickly.",
  },
];

const stats = [
  { number: "120+", label: "Property Listings" },
  { number: "15+", label: "Prime Locations" },
  { number: "50+", label: "Happy Clients" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white px-5 py-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#0074B7]">
              About BrightNest
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-[#1E293B] md:text-[46px]">
              A modern real estate platform built for trusted property
              discovery.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              BrightNest Realty helps buyers, renters and property owners
              connect through a clean and professional property website. The
              platform is designed to showcase homes, apartments, villas, land
              and commercial spaces with clear information and simple inquiry
              options.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/properties"
                className="rounded-md bg-[#008DD2] px-7 py-4 text-center font-black text-white transition hover:bg-[#0074B7]"
              >
                Browse Properties
              </Link>

              <Link
                href="/contact"
                className="rounded-md border border-slate-300 px-7 py-4 text-center font-black text-[#003B5C] transition hover:border-[#008DD2] hover:text-[#008DD2]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-[#003B5C] p-7 text-white shadow-lg">
            <p className="font-black uppercase tracking-[0.22em] text-[#8ED8FF]">
              Our Focus
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight">
              Making property search simple, clear and professional.
            </h2>

            <p className="mt-5 leading-8 text-white/75">
              The goal is to give visitors the information they need quickly:
              property type, price, location, size, features and direct contact
              options.
            </p>

            <div className="mt-8 grid gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/10 p-5"
                >
                  <p className="text-3xl font-black text-[#8ED8FF]">
                    {stat.number}
                  </p>
                  <p className="mt-1 font-bold text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-black uppercase tracking-[0.25em] text-[#0074B7]">
              What We Value
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#1E293B] md:text-[44px]">
              Built for serious property inquiries
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              BrightNest Realty focuses on clean presentation, easy navigation
              and direct communication for buyers, renters and property owners.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7FF] text-sm font-black text-[#0074B7]">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-black text-[#1E293B]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#003B5C] px-8 py-14 text-center text-white">
          <p className="font-black uppercase tracking-[0.22em] text-[#8ED8FF]">
            Need Property Help?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            Talk to BrightNest Realty about buying, renting or listing a
            property.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            Reach out directly through WhatsApp or email and start your property
            inquiry today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/255689824682?text=Hello BrightNest Realty, I would like to ask about your real estate services."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#008DD2] px-7 py-4 font-black text-white transition hover:bg-white hover:text-[#003B5C]"
            >
              WhatsApp Us
            </a>

            <Link
              href="/contact"
              className="rounded-md border border-white/30 px-7 py-4 font-black text-white transition hover:bg-white hover:text-[#003B5C]"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
