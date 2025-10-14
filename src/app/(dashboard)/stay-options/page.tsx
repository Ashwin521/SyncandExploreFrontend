"use client";

import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import StayCard from "./components/StayCard";

export default function StayOptionsPage() {
  const stays = [
    {
      imageUrl: "./HomeStayVilla.png",
      title: "Alice Home Stay Villa",
      price: "₹ 2900",
      location: "Delhi | 1.9 km drive to Candolim Beach",
      rating: "4.5",
      bedrooms: 6,
      guests: 10,
    },
  ];

  return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-2xl font-bold">Stays Option</h1>
          <SearchBar />
        </div>

        <FilterButtons />

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Homestays</h2>
            <a href="#" className="text-teal-500 hover:underline">
              See All
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {stays.map((stay, index) => (
              <StayCard key={index} {...stay} />
            ))}
          </div>
        </div>
      </div>
    
  );
}
