"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

export default function SearchBox() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"Buy" | "Rent">("Buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [budget, setBudget] = useState("Any Budget");

  function handleSearch() {
    const params = new URLSearchParams();

    if (location.trim()) {
      params.set("location", location.trim());
    }

    if (propertyType !== "All Types") {
      params.set("type", propertyType);
    }

    params.set("status", activeTab === "Buy" ? "For Sale" : "For Rent");

    if (budget !== "Any Budget") {
      params.set("budget", budget);
    }

    router.push(`/properties?${params.toString()}`);
  }

  return (
    <div className="w-full max-w-4xl rounded-lg bg-white p-3 shadow-2xl">
      <div className="mb-2 flex gap-2">
        {(["Buy", "Rent"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-5 py-2 text-sm font-black transition ${
              activeTab === tab
                ? "bg-[#0074B7] text-white"
                : "bg-[#F5F7FA] text-[#1E293B] hover:bg-[#EAF7FF]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-2 lg:grid-cols-[1fr_150px_150px_125px]">
        <div>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            list="home-property-locations"
            placeholder="Search location or property"
            className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
          />

          <datalist id="home-property-locations">
            {locationSuggestions.map((item) => (
              <option key={item} value={item} />
            ))}
          </datalist>
        </div>

        <select
          value={propertyType}
          onChange={(event) => setPropertyType(event.target.value)}
          className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#1E293B] outline-none focus:border-[#008DD2]"
        >
          <option>All Types</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Land</option>
          <option>Commercial</option>
        </select>

        <select
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
          className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#1E293B] outline-none focus:border-[#008DD2]"
        >
          <option>Any Budget</option>
          <option>Below 100M</option>
          <option>100M - 300M</option>
          <option>300M - 700M</option>
          <option>Above 700M</option>
        </select>

        <button
          type="button"
          onClick={handleSearch}
          className="rounded-md bg-[#008DD2] px-4 py-3 text-sm font-black text-white transition hover:bg-[#0074B7]"
        >
          Search
        </button>
      </div>
    </div>
  );
}
