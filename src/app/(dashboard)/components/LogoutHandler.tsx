"use client";

// import Image from "next/image";
// import logout from "../../../../public/sidebar/logout.svg";

const LogoutHandler = () => {
  const handleLogout = () => {};

  return (
    <div
      onClick={handleLogout}
      className="flex items-center gap-2 text-[#1A8F98] font-bold text-[15px] cursor-pointer px-2 py-2  hover:bg-[#E6F5F6] transition-colors rounded-md"
    >
  <img src="/sidebar/logout.svg" alt="Log out" />
      Log Out
    </div>
  );
};

export default LogoutHandler;
