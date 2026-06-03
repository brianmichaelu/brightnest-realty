"use client";

import { useState } from "react";

export default function SearchBox() {
  const [activeTab, setActiveTab] = useState<"Buy" | "Rent">("Buy");

  return (
    <div className="w-full max-w-5xl rounded-md bg-white p-4 shadow-2xl md:p-5">
      <div className="grid gap-3 lg:grid-cols-[160px_190px_1fr_160px]">
        <div className="grid grid-cols-2 rounded-md border border-slate-200 bg-[#F5F7FA] p-1">
          {(["Buy", "Rent"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded px-4 py-3 text-sm font-black transition ${
                activeTab === tab
                  ? "bg-[#0074B7] text-white"
                  : "text-[#1E293B] hover:bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <select className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#1E293B] outline-none">
          <option>Homes</option>
          <option>Apartments</option>
          <option>Villas</option>
          <option>Land</option>
          <option>Commercial</option>
        </select>

        <input
          type="text"
          placeholder="Search by location or property"
          className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#1E293B] outline-none placeholder:text-slate-400"
        />

        <button className="rounded-md bg-[#008DD2] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0074B7]">
          Search
        </button>
      </div>
    </div>
  );
}