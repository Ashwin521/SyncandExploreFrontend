import { ReactNode } from "react";

interface GradientFrameProps {
  children: ReactNode;
  bgImageSrc?: string;
}

export default function GradientFrame({ children, bgImageSrc = "/login-bg.svg" }: GradientFrameProps) {
  return (

      <div
        className="relative flex h-[95vh] w-full items-center justify-center overflow-hidden rounded-[26px]"
        style={{
          backgroundImage: `url(${bgImageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* subtle dark overlay to ensure contrast over the image */}
        <div className="pointer-events-none absolute inset-0 bg-black/20" />
        {/* content */}
        <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 md:px-8">
          {children}
        </div>
      </div>
  );
}
