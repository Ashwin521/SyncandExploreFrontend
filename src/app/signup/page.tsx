import GradientFrame from "../login/components/GradientFrame";
import SignupCard from "./components/SignupCard"

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#62D7DC] to-[#FFFFFF] p-4">
      <GradientFrame bgImageSrc="/login-bg.svg">
        <SignupCard />
      </GradientFrame>
    </main>
  );
}
