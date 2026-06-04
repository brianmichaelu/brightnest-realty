"use client";

import { useEffect, useMemo, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const locationSuggestions = [
  "Masaki",
  "Oysterbay",
  "Kinondoni",
  "Sinza",
  "Mbezi Beach",
  "Kunduchi",
  "Tegeta",
  "Goba",
  "Salasala",
  "Kigamboni",
  "Upanga",
  "City Centre",
  "Bagamoyo",
  "Skanska",
];

export default function PropertiesPage() {
  const [locationSearch, setLocationSearch] = useState("");
  const [propertyType, setPropertyType] = useState("Any Type");
  const [propertyStatus, setPropertyStatus] = useState("Any Status");

  const [appliedLocation, setAppliedLocation] = useState("");
  const [appliedType, setAppliedType] = useState("Any Type");
  const [appliedStatus, setAppliedStatus] = useState("Any Status");

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const status = params.get("status");
  const type = params.get("type");
  const location = params.get("location");

  if (location) {
    setLocationSearch(location);
    setAppliedLocation(location);
  }

  if (status === "For Sale" || status === "For Rent") {
    setPropertyStatus(status);
    setAppliedStatus(status);
  }

  if (
    type === "House" ||
    type === "Apartment" ||
    type === "Villa" ||
    type === "Land" ||
    type === "Commercial"
  ) {
    setPropertyType(type);
    setAppliedType(type);
  }
}, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const search = appliedLocation.toLowerCase().trim();

      const matchesLocation =
        search === "" ||
        property.location.toLowerCase().includes(search) ||
        property.title.toLowerCase().includes(search);

      const matchesType =
        appliedType === "Any Type" || property.type === appliedType;

      const matchesStatus =
        appliedStatus === "Any Status" || property.status === appliedStatus;

      return matchesLocation && matchesType && matchesStatus;
    });
  }, [appliedLocation, appliedType, appliedStatus]);

  function applyFilters() {
    setAppliedLocation(locationSearch);
    setAppliedType(propertyType);
    setAppliedStatus(propertyStatus);
  }

  function clearFilters() {
    setLocationSearch("");
    setPropertyType("Any Type");
    setPropertyStatus("Any Status");

    setAppliedLocation("");
    setAppliedType("Any Type");
    setAppliedStatus("Any Status");

    window.history.replaceState(null, "", "/properties");
  }

  const filtersActive =
    appliedLocation ||
    appliedType !== "Any Type" ||
    appliedStatus !== "Any Status";

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
            <div>
              <input
                value={locationSearch}
                onChange={(event) => setLocationSearch(event.target.value)}
                list="property-locations"
                placeholder="Search location, example: Masaki"
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 font-bold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
              />

              <datalist id="property-locations">
                {locationSuggestions.map((location) => (
                  <option key={location} value={location} />
                ))}
              </datalist>
            </div>

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
              onClick={applyFilters}
              className="rounded-md bg-[#008DD2] px-5 py-3 font-black text-white transition hover:bg-[#0074B7]"
            >
              Filter
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {locationSuggestions.slice(0, 8).map((location) => (
              <button
                key={location}
                type="button"
                onClick={() => {
                  setLocationSearch(location);
                  setAppliedLocation(location);
                }}
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#003B5C]"
              >
                {location}
              </button>
            ))}
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
              Search by location, property name, type or sale/rent status.
            </p>
          </div>

          {filtersActive && (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-black text-[#003B5C] transition hover:border-[#008DD2] hover:text-[#008DD2]"
            >
              Clear Filters
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
              Try searching another location such as Masaki, Mbezi Beach,
              Tegeta, Kunduchi, Bagamoyo or City Centre.
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
