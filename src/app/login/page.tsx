"use client";

import GradientFrame from "./components/GradientFrame";
import LoginCard from "./components/LoginCard";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#62D7DC] to-[#FFFFFF] p-4">
      <GradientFrame bgImageSrc="/login-bg.svg">
        <LoginCard />
      </GradientFrame>
    </main>
  );
}
