"use client";
const LogoutHandler = () => {
  const handleLogout = () => {};

  return (
    <div
      onClick={handleLogout}
      className="flex items-center gap-2 text-[#1A8F98] font-bold text-[15px] cursor-pointer px-4 py-4  hover:bg-[#E6F5F6] transition-colors rounded-md"
    >
      <svg
        width="20"
        height="21"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.036 9.35115L19.3005 11.0867L22.4761 14.2746H9.95836V16.7363H22.4761L19.3005 19.9119L21.036 21.6597L27.1903 15.5054L21.036 9.35115ZM5.03495 6.88944H14.8818V4.42773H5.03495C3.68101 4.42773 2.57324 5.5355 2.57324 6.88944V24.1214C2.57324 25.4753 3.68101 26.5831 5.03495 26.5831H14.8818V24.1214H5.03495V6.88944Z"
          fill="#1A8F98"
        />
      </svg>
      Log Out
    </div>
  );
};

export default LogoutHandler;
