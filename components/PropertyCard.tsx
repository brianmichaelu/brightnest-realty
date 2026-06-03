import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />

        <div className="absolute left-3 top-3 rounded bg-[#008DD2] px-3 py-1.5 text-xs font-black text-white">
          {property.status}
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0074B7]">
          {property.type}
        </p>

        <h3 className="mt-2 text-xl font-black text-[#1E293B]">
          {property.title}
        </h3>

        <p className="mt-2 text-sm font-semibold text-slate-500">
          {property.location}
        </p>

        <p className="mt-4 text-lg font-black text-[#0074B7]">
          {property.price}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-600">
          <span className="rounded bg-[#F5F7FA] px-2 py-2">
            {property.beds} Beds
          </span>
          <span className="rounded bg-[#F5F7FA] px-2 py-2">
            {property.baths} Baths
          </span>
          <span className="rounded bg-[#F5F7FA] px-2 py-2">
            {property.size}
          </span>
        </div>

        <Link
          href={`/properties/${property.id}`}
          className="mt-5 inline-flex w-full justify-center rounded-md bg-[#003B5C] px-5 py-3 text-center text-sm font-black text-white transition hover:bg-[#008DD2]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}