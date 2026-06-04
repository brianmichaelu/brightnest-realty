"use client";

import { useEffect, useMemo, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function PropertiesPage() {
  const [locationSearch, setLocationSearch] = useState("");
  const [propertyType, setPropertyType] = useState("Any Type");
  const [propertyStatus, setPropertyStatus] = useState("Any Status");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const type = params.get("type");

    if (status === "For Sale" || status === "For Rent") {
      setPropertyStatus(status);
    }

    if (
      type === "House" ||
      type === "Apartment" ||
      type === "Villa" ||
      type === "Land" ||
      type === "Commercial"
    ) {
      setPropertyType(type);
    }
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesLocation =
        locationSearch.trim() === "" ||
        property.location.toLowerCase().includes(locationSearch.toLowerCase()) ||
        property.title.toLowerCase().includes(locationSearch.toLowerCase());

      const matchesType =
        propertyType === "Any Type" || property.type === propertyType;

      const matchesStatus =
        propertyStatus === "Any Status" || property.status === propertyStatus;

      return matchesLocation && matchesType && matchesStatus;
    });
  }, [locationSearch, propertyType, propertyStatus]);

  function clearFilters() {
    setLocationSearch("");
    setPropertyType("Any Type");
    setPropertyStatus("Any Status");

    window.history.replaceState(null, "", "/properties");
  }

  return (
    <section className="bg-white px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="properties-hero-slideshow mb-10 rounded-2xl p-6 text-white shadow-lg md:p-8">
          <p className="font-black uppercase tracking-[0.25em] text-[#8ED8FF]">
            Browse Properties
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-[44px]">
            Find properties for sale and rent
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Explore homes, apartments, villas, land and commercial spaces in
            prime locations across Dar es Salaam and nearby growing areas.
          </p>

          <div className="mt-6 grid gap-3 rounded-xl bg-white p-4 md:grid-cols-[1fr_180px_180px_130px]">
            <input
              value={locationSearch}
              onChange={(event) => setLocationSearch(event.target.value)}
              placeholder="Search location"
              className="rounded-md border border-slate-200 bg-white px-4 py-3 font-bold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
            />

            <select
              value={propertyType}
              onChange={(event) => setPropertyType(event.target.value)}
              className="rounded-md border border-slate-200 bg-white px-4 py-3 font-bold text-[#1E293B] outline-none focus:border-[#008DD2]"
            >
              <option>Any Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Land</option>
              <option>Commercial</option>
            </select>

            <select
              value={propertyStatus}
              onChange={(event) => setPropertyStatus(event.target.value)}
              className="rounded-md border border-slate-200 bg-white px-4 py-3 font-bold text-[#1E293B] outline-none focus:border-[#008DD2]"
            >
              <option>Any Status</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>

            <button
              type="button"
              onClick={clearFilters}
              className="rounded-md bg-[#008DD2] px-5 py-3 font-black text-white transition hover:bg-[#0074B7]"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="font-black text-[#1E293B]">
              {filteredProperties.length}{" "}
              {filteredProperties.length === 1 ? "property" : "properties"}{" "}
              found
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-500">
              Use the filters above to narrow your search.
            </p>
          </div>

          {(locationSearch ||
            propertyType !== "Any Type" ||
            propertyStatus !== "Any Status") && (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-black text-[#003B5C] transition hover:border-[#008DD2] hover:text-[#008DD2]"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-[#F5F7FA] p-10 text-center">
            <h2 className="text-3xl font-black text-[#1E293B]">
              No properties found
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
              Try changing the location, property type or status to see more
              available listings.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-md bg-[#008DD2] px-7 py-4 font-black text-white transition hover:bg-[#0074B7]"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
