"use client";

import { useAtom } from "jotai";
import { selectedDateAtom, calendarPopupAtom } from "../atoms/dateAtom";
import { useMemo, useState } from "react";

function formatDate(date: Date) {
  return date.toISOString().split("T")[0];
}

function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

const today = new Date();

interface CalendarComponentProps {
  cardId: string;
}

export function Calendar({ cardId }: CalendarComponentProps) {
  const [selectedDates, setSelectedDates] = useAtom(selectedDateAtom);
  const [popupState, setPopupState] = useAtom(calendarPopupAtom);

  const tempSelected = useMemo(() => new Set(selectedDates), [selectedDates]);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = daysInMonth(currentYear, currentMonth);

  const handleDateToggle = (date: Date) => {
    if (date.getTime() < new Date(today.setHours(0, 0, 0, 0)).getTime()) return;
    const dateStr = formatDate(date);
    if (tempSelected.has(dateStr)) {
      tempSelected.delete(dateStr);
    } else {
      tempSelected.add(dateStr);
    }
    setSelectedDates(Array.from(tempSelected));
  };

  const handleDone = () => {
    setPopupState({ open: false, targetId: null, clicked: false });
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToPrevMonth = () => {
    const firstDayOfSelected = new Date(currentYear, currentMonth, 1);
    if (firstDayOfSelected < new Date(today.getFullYear(), today.getMonth(), 1)) return;

    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const weeks = [];
  let day = 1;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        week.push(<div key={`empty-${j}`} className="w-5 h-5" />);
      } else if (day <= totalDays) {
        const date = new Date(currentYear, currentMonth, day);
        const isSelected = tempSelected.has(formatDate(date));
        const isToday = isSameDate(date, today);
        const isPast = date < new Date(today.setHours(0, 0, 0, 0));

        week.push(
          <div
            key={day}
            onClick={() => handleDateToggle(date)}
            className={`w-5 h-5 flex items-center justify-center text-[9px] cursor-pointer rounded-full
              ${isPast ? "text-gray-400 cursor-not-allowed" : ""}
              ${!isPast && isSelected ? "bg-[#1A9DA6] text-white" : ""}
              ${!isPast && !isSelected && isToday ? "border border-[#1A9DA6] text-[#1A9DA6]" : ""}
              ${!isPast && !isSelected && !isToday ? "text-gray-700" : ""}
            `}
          >
            {day++}
          </div>
        );
      } else {
        week.push(<div key={`empty-${i}-${j}`} className="w-5 h-5" />);
      }
    }
    weeks.push(
      <div key={`week-${i}`} className="flex gap-[1px] justify-center">
        {week}
      </div>
    );
  }

  return (
    <div className="absolute top-full mt-1 z-50 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-start px-2 pt-2 pb-1 w-[180px] h-[200px] bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between w-full mb-1">
          <button
            onClick={goToPrevMonth}
            disabled={currentMonth === today.getMonth() && currentYear === today.getFullYear()}
            className={`font-bold px-1 text-xs ${
              currentMonth === today.getMonth() && currentYear === today.getFullYear()
                ? "text-gray-300 cursor-not-allowed"
                : "text-[#1A9DA6]"
            }`}
          >
            {"<"}
          </button>
          <div className="text-center font-semibold text-[10px] text-[#1A1A1A]">
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "short",
              year: "numeric",
            })}
          </div>
          <button
            onClick={goToNextMonth}
            className="text-[#1A9DA6] font-bold px-1 text-xs"
          >
            {">"}
          </button>
        </div>

        {/* Week Days */}
        <div className="flex gap-[1px] justify-center mb-[1px] text-[8px] text-gray-800 font-bold w-full">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
            <div key={i} className="w-5 text-center">
              {day}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="flex flex-col gap-[1px] w-full overflow-hidden mb-1">
          {weeks}
        </div>

        {/* Done Button */}
        <div className="w-full">
          <button
            onClick={handleDone}
            className="w-full py-[4px] bg-[#67BCC3] text-white rounded-md text-[9px] font-semibold hover:bg-[#5caab4] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
