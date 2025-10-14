"use client";

import { useRouter } from "next/navigation";
import LogoutHandler from "./LogoutHandler";
import { UserInfo } from "./UserInfo";
import { SidebarItem } from "./SideBarItem";
import Image from "next/image";

// SVGs from public folder should be referenced as src strings

interface SideBarProps {
  activeLabel: string;
}

export default function Sidebar({ activeLabel }: SideBarProps) {
  const router = useRouter();

  return (
    <aside className="w-[240px] min-w-[240px] max-w-[240px] h-full bg-gradient-to-b from-[#CFFDFF] to-[#FFFFFF] flex flex-col items-center px-2">
      <div className="w-full h-full bg-gradient-to-b from-[#CFFDFF] to-[#FFFFFF] flex flex-col justify-between rounded-xl overflow-hidden">
        <UserInfo />
        <div className="bg-white flex flex-col justify-between rounded-xl m-2 h-full overflow-hidden gap-36">
          <ul className="text-[#4B4B4B] text-[15px] font-[500] pr-3 pt-2">
            <SidebarItem
              icon={<img src="/sidebar/dashboard.svg" alt="Dashboard" />}
              label="Dashboard"
              onClick={() => router.push("/dashboard")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<img src="/sidebar/trip.svg" alt="Explore Trips" />}
              label="Explore Trips"
              onClick={() => router.push("/explore-trips")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<img src="/sidebar/agency.svg" alt="My Trips" />}
              label="My Trips"
              onClick={() => router.push("/my-trips")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<img src="/sidebar/calendar.svg" alt="Calender Sync" />}
              label="Calender Sync"
              onClick={() => router.push("/calendarSync")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<img src="/sidebar/buddies.svg" alt="Travel Buddies" />}
              label="Travel Buddies"
              onClick={() => router.push("/travel-buddies")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<img src="/sidebar/passenger.svg" alt="Budget & Planner" />}
              label="Budget & Planner"
              onClick={() => router.push("/budget-planner")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<img src="/sidebar/suite.svg" alt="Stay Options" />}
              label="Stay Options"
              onClick={() => router.push("/stay-options")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<img src="/sidebar/group.svg" alt="Group & forums" />}
              label="Group & forums"
              onClick={() => router.push("/group-forums")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<img src="/sidebar/user.svg" alt="Invite friends" />}
              label="Invite friends"
              onClick={() => router.push("/invite-friends")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<img src="/sidebar/settings.svg" alt="Account settings" />}
              label="Account settings"
              onClick={() => router.push("/account-settings")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<img src="/sidebar/dashboard.svg" alt="Help & Support" />}
              label="Help & Support"
              onClick={() => router.push("/help-support")}
              activeLabel={activeLabel}
            />
          </ul>
          <LogoutHandler />
        </div>
      </div>
    </aside>
  );
}
