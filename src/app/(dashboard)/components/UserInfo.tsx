"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useAtom, useSetAtom } from "jotai";
import { userNameAtom, userRoleAtom, userAvatarAtom } from "./userAtom";

const getUserInfo = async () => {
  return {
    name: "Sam-yuk",
    role: "Traveller",
    avatar: "/file.svg",
  };
};

export const UserInfo = () => {
  const [userName] = useAtom(userNameAtom);
  const [userRole] = useAtom(userRoleAtom);
  const [userAvatar] = useAtom(userAvatarAtom);

  const setUserName = useSetAtom(userNameAtom);
  const setUserRole = useSetAtom(userRoleAtom);
  const setUserAvatar = useSetAtom(userAvatarAtom);

  const handleUserClick = () => {
    console.log("User info clicked");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserInfo();
        setUserName(user.name);
        setUserRole(user.role);
        setUserAvatar(user.avatar);
      } catch (err) {
        console.error("Failed to fetch user info:", err);
      }
    };

    fetchUser();
  }, [setUserName, setUserRole, setUserAvatar]);

  return (
    <div className="px-3 mt-4">
      <div
        onClick={handleUserClick}
        className="flex items-center gap-3 px-3 py-2 rounded-[12px] border border-[#CFFDFF] cursor-pointer hover:bg-[#F4FEFF] transition-colors"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={userAvatar}
            alt="User Avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="leading-[1.2]">
          <p className="text-[#343434] font-normal text-[16px] mb-1">
            Hii, {userName}
          </p>
          <p className="text-black font-semibold text-[15px]">{userRole}</p>
        </div>
      </div>
    </div>
  );
};
