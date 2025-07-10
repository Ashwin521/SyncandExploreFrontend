import { CalendarButton } from "./CalendarComponent";
import Image from "next/image";
import { GoogleSyncButton } from "./GoogleSyncButton";

interface CalendarSyncCardProps {
  destination: string;
  imageSrc: string;
  cardId: string;
}

export function CalendarSyncCard({ destination, imageSrc, cardId }: CalendarSyncCardProps) {
  return (
    <div className="w-full sm:max-w-[333px] bg-[#FAFAFA] border border-[#1A8F98] rounded-[24px] p-3 sm:p-4 flex flex-col justify-between">
      <div className="relative w-full h-[180px] sm:h-[200px] rounded-[14px] overflow-hidden">
        <Image src={imageSrc} alt={destination} fill className="object-cover" />
        <div className="absolute bottom-0 w-full h-[60px] bg-gradient-to-t from-black to-transparent flex items-end p-2 sm:p-3">
          <p className="text-white font-extrabold text-base sm:text-lg tracking-wide">
            {destination}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-3">
        <CalendarButton cardId={cardId} />
        <GoogleSyncButton />
      </div>
    </div>
  );
}
