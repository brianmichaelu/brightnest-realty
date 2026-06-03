"use client";

import { useState } from "react";

export default function SearchBox() {
  const [activeTab, setActiveTab] = useState<"Buy" | "Rent">("Buy");

  return (
    <div className="mx-auto w-full max-w-6xl rounded-3xl bg-[#e7ff3c]/95 p-5 shadow-2xl backdrop-blur md:p-8">
      <h2 className="mb-6 text-center text-2xl font-black text-[#08112f] md:text-4xl">
        Find your next property
      </h2>

      <div className="grid gap-4 lg:grid-cols-[220px_240px_1fr_180px]">
        <div className="grid grid-cols-2 rounded-xl bg-white p-1">
          {(["Buy", "Rent"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-5 py-4 text-lg font-black transition ${
                activeTab === tab
                  ? "bg-[#d91c8f] text-white"
                  : "text-[#08112f] hover:bg-slate-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <select className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-lg font-bold text-[#08112f] outline-none">
          <option>Homes</option>
          <option>Apartments</option>
          <option>Villas</option>
          <option>Land</option>
          <option>Commercial</option>
        </select>

        <input
          type="text"
          placeholder="Search location, example: Masaki, Mbezi Beach, Tegeta"
          className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-lg font-semibold text-[#08112f] outline-none placeholder:text-slate-400"
        />

        <button className="rounded-xl bg-[#d91c8f] px-6 py-4 text-lg font-black text-white transition hover:bg-[#b91576]">
          Search
        </button>
      </div>
    </div>
  );
}