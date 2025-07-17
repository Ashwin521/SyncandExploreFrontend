"use client";
import { CalendarSyncCard } from "./components/calendarSyncCard";

export default function CalendarSyncPage() {
  return (
    <div className="flex flex-col sm:flex-row w-full h-full bg-white rounded-[24px] ">
      <main className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2 mt-[8px]">
          <h1 className="text-[#4B4B4B] font-bold text-[34px] sm:text-[30px] leading-tight mb-6">
            Sync your Travel dates
          </h1>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
          <CalendarSyncCard
            destination="Bali Gateway"
            imageSrc="/Bali.png"
            cardId="bali"
          />
          <CalendarSyncCard
            destination="Swiss Alps"
            imageSrc="/Bali.png"
            cardId="swiss"
          />
          <CalendarSyncCard
            destination="Tokyo Nights"
            imageSrc="/Bali.png"
            cardId="tokyo"
          />
        </div>
      </main>
    </div>
  );
}
