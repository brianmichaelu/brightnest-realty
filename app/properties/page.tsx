import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function PropertiesPage() {
  return (
    <section className="bg-white px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 rounded-2xl bg-[#003B5C] p-8 text-white shadow-lg md:p-12">
  <p className="font-black uppercase tracking-[0.25em] text-[#8ED8FF]">
    Browse Properties
  </p>

  <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
    Find properties for sale and rent
  </h1>

  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
    Explore homes, apartments, villas, land and commercial spaces in prime
    locations across Dar es Salaam and nearby growing areas.
  </p>

  <div className="mt-8 grid gap-4 rounded-xl bg-white p-4 md:grid-cols-4">
    <input
      placeholder="Search location"
      className="rounded-md border border-slate-200 bg-white px-5 py-4 font-bold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
    />

    <select className="rounded-md border border-slate-200 bg-white px-5 py-4 font-bold text-[#1E293B] outline-none focus:border-[#008DD2]">
      <option>Any Type</option>
      <option>House</option>
      <option>Apartment</option>
      <option>Villa</option>
      <option>Land</option>
      <option>Commercial</option>
    </select>

    <select className="rounded-md border border-slate-200 bg-white px-5 py-4 font-bold text-[#1E293B] outline-none focus:border-[#008DD2]">
      <option>Any Status</option>
      <option>For Sale</option>
      <option>For Rent</option>
    </select>

    <button className="rounded-md bg-[#008DD2] px-5 py-4 font-black text-white transition hover:bg-[#0074B7]">
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
