

import SignupForm from "./SignupForm";
import LoginHeader from "../../login/components/LoginHeader";
import Link from "next/link";
import Image from "next/image";

export default function SignupCard() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg rounded-[20px] bg-black/50 pt-6 pb-6 px-8 shadow-2xl backdrop-blur-[16px] border border-white/20"
      style={{
        background: 'linear-gradient(135deg, rgba(30,30,40,0.20) 0%, rgba(30,30,40,0.10) 100%)',
      }}
    >
      {/* Remove horizontal padding for header only */}
      <div className="-mx-6">
        <LoginHeader subtitle="Signup Now" />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <SignupForm />
        {/* Divider */}
        <div className="my-4 flex items-center gap-4 w-full">
          <div className="h-px flex-1 bg-white/30"></div>
          <span className="text-xs font-bold text-white">or continue with</span>
          <div className="h-px flex-1 bg-white/30"></div>
        </div>
        {/* Google Button */}
        <button
          type="button"
          className="mx-auto flex w-64 items-center justify-center gap-3 rounded-[10px] border border-white bg-black/50 px-2 py-2.5 text-white backdrop-blur-[16px] transition text-sm shadow-lg hover:bg-white/10 hover:border-[#1A8F98]"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,30,40,0.20) 0%, rgba(30,30,40,0.10) 100%)",
          }}
        >
          <Image src="/google2.svg" alt="Google" width={24} height={24} />
          <span className="font-medium">Continue with Google</span>
        </button>
        {/* Already a user? Login */}
        <p className="mt-4 text-center text-sm text-white/70">
          Already a user?{' '}
          <Link href="/login" className="font-semibold text-white underline">
            Login
          </Link>
        </p>
      </div>
      {/* Bottom right calendar icon */}
      <div className="absolute right-0 bottom-0 mb-4 mr-4 z-10">
        <img src="/login-calender-icon.svg" alt="Calendar Icon" width={78} height={78} />
      </div>
    </div>
  );
}
