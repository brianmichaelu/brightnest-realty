import Link from "next/link";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export default function FeaturedProperties() {
  const featured = properties.filter((property) => property.featured);

  return (
    <section className="bg-[#F5F7FA] px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.22em] text-[#0074B7]">
              Featured Listings
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight text-[#1E293B] md:text-5xl">
              Latest featured properties
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Explore our handpicked selection of homes, apartments, land and
              commercial properties available for sale or rent in prime
              locations.
            </p>
          </div>

          <Link
            href="/properties"
            className="inline-flex rounded-md bg-[#008DD2] px-7 py-4 text-center font-black text-white shadow-sm transition hover:-translate-y-1 hover:bg-[#0074B7] hover:shadow-lg"
          >
            View All Properties
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
