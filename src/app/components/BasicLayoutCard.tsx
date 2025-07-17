import TopBar from "./Topbar";
import Sidebar from "./SideBar";
import { OuterCard } from "./OuterCard";
import { ReactNode } from "react";

interface BasicProps {
  label: string;
  children?: ReactNode ,
}

export function BasicLayoutCard({ label, children }: BasicProps) {
  return (
    <OuterCard>
      <div className="flex flex-col sm:flex-row w-full h-full bg-white rounded-[24px] overflow-hidden relative">
        <div className="shrink-0 z-10 relative">
          <Sidebar activeLabel={label}/>
        </div>

        <main className="flex-1 pt-2 px-4 sm:px-6 md:px-8 pb-6 relative z-0 min-h-[670px]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2 mt-[8px]">
            <div className="flex flex-col mt-[4px]">
              <p className="text-[#00B3BB] font-medium text-[18px] sm:text-[17px] leading-tight mb-[9px] font-nunito">
                Sync & Explore
              </p>
              <h1 className="text-[#4B4B4B] font-bold text-[34px] sm:text-[26px] leading-tight mb-6">
                {label}
              </h1>
            </div>
            <div className="shrink-0 mt-5">
              <TopBar />
            </div>
          </div>
          {children}
        </main>
      </div>
    </OuterCard>
  );
}
