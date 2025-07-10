import TopBar from "./Topbar";
import Sidebar from "./SideBar";
import { CalendarSyncCard } from "./calendarSyncCard";

export function CalendarSyncPage() {
  return (
    <div className="flex flex-col sm:flex-row w-full h-full bg-white rounded-[24px] overflow-hidden relative">
      <div className="shrink-0 z-10 relative">
        <Sidebar activeLabel="Calender Sync"/>
      </div>

      <main className="flex-1 pt-2 px-4 sm:px-6 md:px-8 pb-6 relative z-0 min-h-[670px]">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2 mt-[8px]">
          <div className="flex flex-col mt-[4px]">
            <p className="text-[#00B3BB] font-medium text-[18px] sm:text-[17px] leading-tight mb-[9px] font-nunito">
              Sync & Explore
            </p>
            <h1 className="text-[#4B4B4B] font-bold text-[34px] sm:text-[26px] leading-tight mb-6">
              Calender Sync
            </h1>
            <p className="text-[#4B4B4B] font-bold text-[20px] sm:text-[26px] leading-tight">
              Sync your Travel dates
            </p>
          </div>
          <div className="shrink-0 mt-5">
            <TopBar />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CalendarSyncCard destination="Bali Gateway" imageSrc="/Bali.png" cardId="bali" />
          <CalendarSyncCard destination="Swiss Alps" imageSrc="/Bali.png" cardId="swiss" />
          <CalendarSyncCard destination="Tokyo Nights" imageSrc="/Bali.png" cardId="tokyo" />
        </div>
      </main>
    </div>
  );
}
