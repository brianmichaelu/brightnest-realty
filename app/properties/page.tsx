import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function PropertiesPage() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-[2rem] bg-[#e7ff3c] p-8 md:p-12">
          <p className="font-black uppercase tracking-[0.25em] text-[#d91c8f]">
            Browse Properties
          </p>
          <h1 className="mt-4 text-4xl font-black text-[#08112f] md:text-6xl">
            Find properties for sale and rent
          </h1>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <input
              placeholder="Search location"
              className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-bold outline-none"
            />

            <select className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-bold outline-none">
              <option>Any Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Land</option>
              <option>Commercial</option>
            </select>

            <select className="rounded-xl border border-slate-200 bg-white px-5 py-4 font-bold outline-none">
              <option>Any Status</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>

            <button className="rounded-xl bg-[#d91c8f] px-5 py-4 font-black text-white">
              Filter
            </button>
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}