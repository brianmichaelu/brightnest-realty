"use client";

import { useState } from "react";

export default function SearchBox() {
  const [activeTab, setActiveTab] = useState<"Buy" | "Rent">("Buy");

  return (
    <div className="w-full max-w-5xl rounded-lg bg-white p-3 shadow-2xl md:p-4">
      <div className="mb-3 flex gap-2">
        {(["Buy", "Rent"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-5 py-2.5 text-sm font-black transition ${
              activeTab === tab
                ? "bg-[#0074B7] text-white"
                : "bg-[#F5F7FA] text-[#1E293B] hover:bg-[#EAF7FF]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-[1fr_170px_170px_145px]">
        <input
          type="text"
          placeholder="Search location, example: Masaki, Mbezi Beach, Tegeta"
          className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#1E293B] outline-none placeholder:text-slate-400 focus:border-[#008DD2]"
        />

        <select className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#1E293B] outline-none focus:border-[#008DD2]">
          <option>All Types</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Villa</option>
          <option>Land</option>
          <option>Commercial</option>
        </select>

        <select className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#1E293B] outline-none focus:border-[#008DD2]">
          <option>Any Budget</option>
          <option>Below 100M</option>
          <option>100M - 300M</option>
          <option>300M - 700M</option>
          <option>Above 700M</option>
        </select>

        <button className="rounded-md bg-[#008DD2] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0074B7]">
          Search
        </button>
      </div>
    </div>
  );
}
