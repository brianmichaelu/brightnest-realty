import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties, type Property } from "@/data/properties";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getPropertyFeatures(property: Property) {
  if (property.type === "Land") {
    return [
      { label: "Category", value: "Plot" },
      { label: "Use", value: "Development" },
      { label: "Size", value: property.size },
      { label: "Status", value: property.status },
    ];
  }

  if (property.type === "Commercial") {
    return [
      { label: "Layout", value: "Open Plan" },
      { label: "Bathrooms", value: `${property.baths} Baths` },
      { label: "Size", value: property.size },
      { label: "Status", value: property.status },
    ];
  }

  return [
    { label: "Bedrooms", value: `${property.beds} Beds` },
    { label: "Bathrooms", value: `${property.baths} Baths` },
    { label: "Size", value: property.size },
    { label: "Status", value: property.status },
  ];
}

export default async function PropertyDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const property = properties.find((item) => item.id === id);

  if (!property) {
    notFound();
  }

  const features = getPropertyFeatures(property);

  const message = `Hello BrightNest Realty, I am interested in this property: ${property.title} - ${property.location}`;

  return (
    <section className="bg-white px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/properties"
          className="mb-8 inline-flex rounded-md bg-[#F5F7FA] px-5 py-3 font-black text-[#003B5C] transition hover:bg-[#EAF7FF] hover:text-[#008DD2]"
        >
          ← Back to properties
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="relative h-[420px] overflow-hidden rounded-2xl shadow-sm md:h-[500px]">
              <Image
                src={property.image}
                alt={property.title}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

              <div className="absolute left-5 top-5 rounded-md bg-[#008DD2] px-4 py-2 text-sm font-black text-white shadow">
                {property.status}
              </div>
            </div>

            <div className="mt-8">
              <p className="font-black uppercase tracking-[0.22em] text-[#0074B7]">
                {property.type}
              </p>

              <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-[#1E293B] md:text-5xl">
                {property.title}
              </h1>

              <p className="mt-4 text-xl font-bold text-slate-500">
                {property.location}
              </p>

              <p className="mt-5 text-3xl font-black text-[#0074B7]">
                {property.price}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => (
                  <div
                    key={feature.label}
                    className="rounded-xl border border-slate-200 bg-[#F5F7FA] p-5"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                      {feature.label}
                    </p>
                    <p className="mt-2 text-lg font-black text-[#1E293B]">
                      {feature.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-3xl font-black text-[#1E293B]">
                  Property Description
                </h2>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {property.description}
                </p>
              </div>

              <div className="mt-8 rounded-2xl bg-[#F5F7FA] p-7">
                <h2 className="text-2xl font-black text-[#1E293B]">
                  Listing Highlights
                </h2>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {[
                    "Located in a convenient and growing area",
                    "Clear property information for quick decision-making",
                    "Direct WhatsApp and email inquiry options",
                    "Suitable for serious buyers, tenants or investors",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white p-4 font-semibold leading-7 text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl bg-[#003B5C] p-7 text-white shadow-lg lg:sticky lg:top-28">
            <p className="font-black uppercase tracking-[0.2em] text-[#8ED8FF]">
              Inquiry
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Interested in this property?
            </h2>

            <p className="mt-4 leading-8 text-white/75">
              Contact BrightNest Realty directly for viewing, availability,
              price discussion or more details about this listing.
            </p>

            <div className="mt-7 rounded-xl bg-white/10 p-5">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-white/50">
                Price
              </p>
              <p className="mt-2 text-2xl font-black text-white">
                {property.price}
              </p>
            </div>

            <a
              href={`https://wa.me/255689824682?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex justify-center rounded-md bg-[#008DD2] px-5 py-4 font-black text-white transition hover:bg-white hover:text-[#003B5C]"
            >
              WhatsApp Us
            </a>

            <a
              href={`mailto:lubrun.enterprises@gmail.com?subject=Property Inquiry: ${property.title}`}
              className="mt-4 flex justify-center rounded-md border border-white/20 px-5 py-4 font-black text-white transition hover:bg-white hover:text-[#003B5C]"
            >
              Email Inquiry
            </a>

            <div className="mt-7 border-t border-white/10 pt-6 text-sm leading-7 text-white/65">
              <p>
                Email:{" "}
                <span className="font-bold text-white">
                  lubrun.enterprises@gmail.com
                </span>
              </p>
              <p>
                WhatsApp:{" "}
                <span className="font-bold text-white">
                  +255 689 824 682
                </span>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
