import { Search, Filter } from "lucide-react";
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Search Input with Icon */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Find your stays"
          className="border p-2 pl-10 rounded-2xl w-64 h-10 focus:ring-2 focus:ring-teal-500 outline-none"
        />
      </div>

      {/* Check-in */}
      <div>
        <input
          type="text"
          placeholder="Check-in date"
          className="border p-2 rounded-2xl w-40 h-10"
        />
      </div>

      {/* Check-out */}
      <div>
        <input
          type="text"
          placeholder="Check-out date"
          className="border p-2 rounded-2xl w-40 h-10"
        />
      </div>

      {/* Guests */}
      <div>
        <input
          type="text"
          placeholder="Rooms & Guests"
          className="border p-2 rounded-2xl h-10 w-40"
        />
      </div>

      {/* Filter Icon Button */}
      <button className="border border-gray-300 rounded-2xl h-10 w-10 flex items-center justify-center hover:bg-gray-100 transition-colors">
        <Image
          src="/VectorFilter.png"
          alt="Filter"
          width={20}
          height={20}
          className="object-contain"
        />
      </button>

      {/* Search Button */}
      <button className="bg-[#1A8F98] text-white px-4 h-10 rounded-2xl hover:bg-[#157b83] transition-colors flex items-center justify-center">
        Search
      </button>
    </div>
  );
}
