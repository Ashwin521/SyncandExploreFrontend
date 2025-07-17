"use client";
import { useAtom } from "jotai";
import { useState } from "react";
import { Bell, Search } from "lucide-react";
import axios from "axios";
import { searchQueryAtom, searchResultsAtom } from "./searchAtom";

export default function TopBar() {
  const [query, setQuery] = useAtom(searchQueryAtom);
  const [results, setResults] = useAtom(searchResultsAtom);
  const [isFocused, setIsFocused] = useState(false);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await axios.get(`${backendUrl}/search`, {
        params: { query },
      });
      setResults(response.data.results || []);
    } catch (err) {
      console.error("Search failed:", err);
      setResults([]);
    }
  };

  return (
    <div className="flex justify-end items-center gap-4">
      <div
        className={`relative flex items-center transition-all duration-300 ease-in-out ${
          isFocused ? "w-60" : "w-[50.67px]"
        } h-[50.67px]`}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => {
          if (!query) setIsFocused(false);
        }}
      >
        <form
          onSubmit={handleSearch}
          className={`flex items-center border border-black/20 rounded-full bg-white shadow-sm transition-all duration-300 ease-in-out h-full ${
            isFocused ? "pl-5 px-3 w-full" : "p-0 w-[50.67px] justify-center"
          }`}
        >
          {isFocused ? (
            <>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                autoFocus
                className="outline-none text-md font-semibold text-gray-600 w-full bg-transparent"
              />
              <button type="submit">
                <Search className="w-[20px] h-[20px] text-[#67BCC3]" />
              </button>
            </>
          ) : (
            <Search className="w-[22.78px] h-[22.78px] text-[#67BCC3]" />
          )}
        </form>

        {results.length > 0 && (
          <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {
              //@ts-ignore
              results.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                >
                  {item.name || item.title || JSON.stringify(item)}
                </div>
              ))
            }
          </div>
        )}
      </div>

      <div className="w-[50.67px] h-[50.67px] rounded-full border border-black/20 flex justify-center items-center bg-white shadow-sm cursor-pointer hover:bg-[#67BCC3]/10">
        <Bell className="w-[22.78px] h-[22.78px] text-[#67BCC3]" />
      </div>
    </div>
  );
}
