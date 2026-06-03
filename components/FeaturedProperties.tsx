import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export default function FeaturedProperties() {
  const featured = properties.filter((property) => property.featured);

  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#d91c8f]">
              Featured Listings
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#08112f] md:text-5xl">
              Fresh properties for sale and rent
            </h2>
          </div>

          <p className="max-w-xl text-lg font-medium leading-8 text-slate-600">
            Browse selected homes, apartments, villas and development land with
            clean details and direct contact options.
          </p>
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