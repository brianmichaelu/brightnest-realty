import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  const hasBeds = property.beds > 0;
  const hasBaths = property.baths > 0;

  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

        <div className="absolute left-4 top-4 rounded-md bg-[#008DD2] px-4 py-2 text-sm font-black text-white shadow">
          {property.status}
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0074B7]">
          {property.type}
        </p>

        <h3 className="mt-2 text-2xl font-black leading-tight text-[#1E293B]">
          {property.title}
        </h3>

        <p className="mt-3 text-sm font-semibold text-slate-500">
          {property.location}
        </p>

        <p className="mt-4 text-xl font-black text-[#0074B7]">
          {property.price}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-600">
          <span className="rounded-md bg-[#F5F7FA] px-2 py-3">
            {hasBeds ? `${property.beds} Beds` : "N/A"}
          </span>

          <span className="rounded-md bg-[#F5F7FA] px-2 py-3">
            {hasBaths ? `${property.baths} Baths` : "N/A"}
          </span>

          <span className="rounded-md bg-[#F5F7FA] px-2 py-3">
            {property.size}
          </span>
        </div>

        <Link
          href={`/properties/${property.id}`}
          className="mt-6 inline-flex w-full justify-center rounded-md bg-[#003B5C] px-5 py-3 text-center text-sm font-black text-white transition hover:bg-[#008DD2]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
