import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />

        <div className="absolute left-4 top-4 rounded-full bg-[#e7ff3c] px-4 py-2 text-sm font-black text-[#08112f]">
          {property.status}
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d91c8f]">
          {property.type}
        </p>

        <h3 className="mt-2 text-2xl font-black text-[#08112f]">
          {property.title}
        </h3>

        <p className="mt-2 font-semibold text-slate-500">
          {property.location}
        </p>

        <p className="mt-4 text-xl font-black text-[#08112f]">
          {property.price}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm font-bold text-slate-600">
          <span className="rounded-2xl bg-slate-50 px-3 py-3">
            {property.beds} Beds
          </span>
          <span className="rounded-2xl bg-slate-50 px-3 py-3">
            {property.baths} Baths
          </span>
          <span className="rounded-2xl bg-slate-50 px-3 py-3">
            {property.size}
          </span>
        </div>

        <Link
          href={`/properties/${property.id}`}
          className="mt-6 inline-flex w-full justify-center rounded-2xl bg-[#08112f] px-5 py-4 text-center font-black text-white transition hover:bg-[#13d8c3] hover:text-[#08112f]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}