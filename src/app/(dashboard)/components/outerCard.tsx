import { ReactNode } from "react";
import Image from "next/image";

interface OuterCardProps {
  children: ReactNode;
}

export function OuterCard({ children }: OuterCardProps) {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#6FCED2] to-[#CFFDFF] flex justify-center items-center p-12 relative overflow-hidden">
      {/* Top-left Aeroplane SVG */}
      <Image
        src="/decor/aeroplane1.svg"
        alt="aeroplane"
        width={160}
        height={160}
        className="absolute top-[10px] left-[-10px] z-0"
      />

      {/* Bottom-right Calendar SVG */}
      <Image
        src="/decor/calendar.svg"
        alt="calendar"
        width={80}
        height={80}
        className="absolute bottom-[300px] right-[1px] z-0"
      />
      <Image
        src="/decor/aeroplane2.svg"
        alt="calendar"
        width={160}
        height={160}
        className="absolute bottom-[150px] right-[1px] z-0"
      />
      {/* Main Card Content */}
      <div className="w-full max-w-[1440px] bg-white rounded-[32px] shadow-xl relative z-10 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
