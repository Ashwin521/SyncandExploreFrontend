"use client";

import { useRouter } from "next/navigation";
import LogoutHandler from "./LogoutHandler";
import { UserInfo } from "./UserInfo";
import { SidebarItem } from "./SideBarItem";
import Image from "next/image";

import dashboard from "../../../../public/sidebar/dashboard.svg";
import buddies from "../../../../public/sidebar/buddies.svg";
import trip from "../../../../public/sidebar/trip.svg";
import calendar from "../../../../public/sidebar/calendar.svg";
import explore from "../../../../public/sidebar/explore.svg";
import group from "../../../../public/sidebar/group.svg";
import user from "../../../../public/sidebar/user.svg";
import settings from "../../../../public/sidebar/settings.svg";
import agency from "../../../../public/sidebar/agency.svg";
import passenger from "../../../../public/sidebar/passenger.svg";
import suite from "../../../../public/sidebar/suite.svg";

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
              icon={<Image src={dashboard} alt="Dashboard" />}
              label="Dashboard"
              onClick={() => router.push("/dashboard")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<Image src={trip} alt="Explore Trips" />}
              label="Explore Trips"
              onClick={() => router.push("/explore-trips")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<Image src={agency} alt="My Trips" />}
              label="My Trips"
              onClick={() => router.push("/my-trips")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<Image src={calendar} alt="Calender Sync" />}
              label="Calender Sync"
              onClick={() => router.push("/calendarSync")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<Image src={buddies} alt="Travel Buddies" />}
              label="Travel Buddies"
              onClick={() => router.push("/travel-buddies")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<Image src={passenger} alt="Budget & Planner" />}
              label="Budget & Planner"
              onClick={() => router.push("/budget-planner")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<Image src={suite} alt="Stay Options" />}
              label="Stay Options"
              onClick={() => router.push("/stay-options")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<Image src={group} alt="Group & forums" />}
              label="Group & forums"
              onClick={() => router.push("/group-forums")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<Image src={user} alt="Invite friends" />}
              label="Invite friends"
              onClick={() => router.push("/invite-friends")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<Image src={settings} alt="Account settings" />}
              label="Account settings"
              onClick={() => router.push("/account-settings")}
              activeLabel={activeLabel}
            />
            <SidebarItem
              icon={<Image src={dashboard} alt="Help & Support" />}
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
