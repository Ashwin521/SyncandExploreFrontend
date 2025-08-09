
"use client";
import GradientFrame from "../login/components/GradientFrame";
import ForgotPasswordCard from "./components/ForgotPasswordCard";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#62D7DC] to-[#FFFFFF] p-4">
      <GradientFrame bgImageSrc="/login-bg.svg">
        <ForgotPasswordCard />
      </GradientFrame>
    </main>
  );
}
