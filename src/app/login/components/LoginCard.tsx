import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg rounded-[20px] bg-black/50 pt-6 pb-6 px-8 shadow-2xl backdrop-blur-[16px] border border-white/20"
      style={{
        background: 'linear-gradient(135deg, rgba(30,30,40,0.20) 0%, rgba(30,30,40,0.10) 100%)',
      }}
    >
      {/* Remove horizontal padding for header only */}
      <div className="-mx-6">
        <LoginHeader />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <LoginForm />
      </div>
      {/* Bottom right calendar icon */}
      <div className="absolute right-0 bottom-0 mb-4 mr-4 z-10">
        <img src="/login-calender-icon.svg" alt="Calendar Icon" width={78} height={78} />
      </div>
    </div>
  );
}
