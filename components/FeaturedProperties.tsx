import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export default function FeaturedProperties() {
  const featured = properties.filter((property) => property.featured);

  return (
    <section className="bg-[#F5F7FA] px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="font-black uppercase tracking-[0.25em] text-[#0074B7]">
            Featured Listings
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#1E293B] md:text-4xl">
            Display Latest & Featured Properties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Browse selected homes, apartments, villas and land with clear
            details and direct contact options.
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