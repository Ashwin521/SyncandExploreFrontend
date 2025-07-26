"use client";

import { ReactNode } from "react";
import { OuterCard } from "./components/outerCard";
import Sidebar from "./components/SideBar";
import { usePathname } from "next/navigation";
import TopBar from "./components/Topbar";

function getActiveLabel(pathname: string): string {
  if (pathname.startsWith("/dashboard")) return "Dashboard";
  if (pathname.startsWith("/explore-trips")) return "Explore Trips";
  if (pathname.startsWith("/my-trips")) return "My Trips";
  if (pathname.startsWith("/calendarSync")) return "Calender Sync";
  if (pathname.startsWith("/travel-buddies")) return "Travel Buddies";
  if (pathname.startsWith("/budget-planner")) return "Budget & Planner";
  if (pathname.startsWith("/stay-options")) return "Stay Options";
  if (pathname.startsWith("/group-forums")) return "Group & forums";
  if (pathname.startsWith("/invite-friends")) return "Invite friends";
  if (pathname.startsWith("/account-settings")) return "Account settings";
  if (pathname.startsWith("/help-support")) return "Help & Support";
  return "";
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const activeLabel = getActiveLabel(pathname);

  return (
    <OuterCard>
      <div className="flex">
        <Sidebar activeLabel={activeLabel} />
        <div className="p-6 w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <p className="text-[#00B3BB] font-medium text-[18px] sm:text-[17px] leading-tight mb-[9px] font-nunito">
                Sync & Explore
              </p>
              <h1 className="text-2xl font-bold text-gray-800">
                {activeLabel}
              </h1>
            </div>
            <TopBar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </OuterCard>
  );
}
