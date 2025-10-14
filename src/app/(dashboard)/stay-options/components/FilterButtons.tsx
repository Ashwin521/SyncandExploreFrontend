"use client";

import { useState } from "react";

const filters = ["Homestay", "Couchsurfing", "Hostel"];

export default function FilterButtons() {
  const [activeFilter, setActiveFilter] = useState("Homestay");

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-[#1A8F98] text-white border-[#1A8F98] shadow-md"
                : "bg-[#FCFCFC] text-[#1A8F98] border-[#1A8F98] hover:bg-[#E6F7F8]"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
