"use client";

import { useAtom } from "jotai";
import { FaCalendarAlt } from "react-icons/fa";
import { calendarPopupAtom } from "../atoms/dateAtom";
import { Calendar } from "./Calender";

interface CalendarButtonProps {
  cardId: string;
}

export function CalendarButton({ cardId }: CalendarButtonProps) {
  const [popupState, setPopupState] = useAtom(calendarPopupAtom);

  const isActive = popupState.open && popupState.targetId === cardId;

  const handleToggle = () => {
    if (isActive && popupState.clicked) {
      setPopupState({ open: false, targetId: null, clicked: false });
    } else {
      setPopupState({ open: true, targetId: cardId, clicked: true });
    }
  };

  const handleMouseEnter = () => {
    if (!popupState.clicked) {
      setPopupState({ open: true, targetId: cardId, clicked: false });
    }
  };

  const handleMouseLeave = () => {
    if (!popupState.clicked) {
      setPopupState({ open: false, targetId: null, clicked: false });
    }
  };

  return (
    <div
      className="relative w-full flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={handleToggle}
        className="flex items-center justify-center gap-3 w-full h-[50px] bg-[#67BCC3] rounded-[24px] text-white font-bold text-[15px] tracking-wide cursor-pointer font-nunito hover:scale-[1.03] transition-transform duration-200"
      >
        <FaCalendarAlt className="text-white text-[16px]" />
        Add your Travel Dates
      </button>

      {isActive && <Calendar cardId={cardId} />}
    </div>
  );
}
