"use client";
import Image from "next/image";

export function GoogleSyncButton() {
  const today = new Date();
  const day = today.getDate();

  const calendarLogoUrl = `https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${day}_2x.png`;

  const handleSyncGoogleCalendar = () => {
    window.open("https://calendar.google.com", "_blank");
  };

  return (
    <button
      onClick={handleSyncGoogleCalendar}
      className="flex items-center justify-center gap-3 w-full h-[50px] bg-[#67BCC3] rounded-[24px] text-white font-bold text-[15px] tracking-wide cursor-pointer font-nunito hover:scale-[1.03] transition-transform duration-200"
    >
      {/* Logo Box */}
      <div className="w-[30px] h-[30px] bg-white rounded-[10px] flex items-center justify-center">
        <Image
          src={calendarLogoUrl}
          alt="Google Calendar"
          width={24}
          height={24}
        />
      </div>

      Sync Google Calendar
    </button>
  );
}
