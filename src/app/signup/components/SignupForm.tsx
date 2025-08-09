"use client";
import { useState } from "react";
import Image from "next/image";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full max-w-sm">
      <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
        {/* Email Field */}
        <div className="relative">
          <label className="absolute left-4 top-[-8] text-xs font-medium text-white bg-[#717D72] z-[100]">
            Email Id
          </label>
          <div className="absolute left-4 top-4 flex items-center">
            <Image src="/login-mail-icon.svg" alt="" width={13} height={13} />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-white/30 bg-black/50 px-8 pb-1.5 pt-3 text-white placeholder-white/50 backdrop-blur-[16px] outline-none transition focus:border-white/60 focus:text-white text-sm shadow-lg autofill:bg-black/50 autofill:text-white"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,30,40,0.20) 0%, rgba(30,30,40,0.10) 100%)",
            }}
          />
        </div>
        {/* Password Field */}
        <div className="relative mt-8">
          <label className="absolute left-4 top-[-8] text-xs font-medium text-white bg-[#717D72] z-[100]">
            Password
          </label>
          <div className="absolute left-4 top-4 flex items-center">
            <Image src="/login-pass-icon.svg" alt="Lock icon" width={13} height={13} />
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            className="w-full rounded-lg border border-white/30 bg-black/50 px-8 pb-1.5 pt-3 text-white placeholder-white/50 backdrop-blur-[16px] outline-none transition focus:border-white/60 focus:text-white text-sm shadow-lg autofill:bg-black/50 autofill:text-white"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,30,40,0.20) 0%, rgba(30,30,40,0.10) 100%)",
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-4 text-white/60 hover:text-white/80"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <Image src="/eye-off.svg" alt={showPassword ? "Hide password" : "Show password"} width={18} height={18} />
          </button>
        </div>
        {/* Confirm Password Field */}
        <div className="relative mt-8">
          <label className="absolute left-4 top-[-8] text-xs font-medium text-white bg-[#717D72] z-[100]">
            Confirm Password
          </label>
          <div className="absolute left-4 top-4 flex items-center">
            <Image src="/login-pass-icon.svg" alt="Lock icon" width={13} height={13} />
          </div>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            required
            className="w-full rounded-lg border border-white/30 bg-black/50 px-8 pb-1.5 pt-3 text-white placeholder-white/50 backdrop-blur-[16px] outline-none transition focus:border-white/60 focus:text-white text-sm shadow-lg autofill:bg-black/50 autofill:text-white"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,30,40,0.20) 0%, rgba(30,30,40,0.10) 100%)",
            }}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-4 text-white/60 hover:text-white/80"
            aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
          >
            <Image src="/eye-off.svg" alt={showConfirmPassword ? "Hide confirm password" : "Show confirm password"} width={18} height={18} />
          </button>
        </div>
        {/* Signup Button */}
        <button
          type="submit"
          className="w-full rounded-full bg-white py-2.5 text-sm font-semibold text-[#1A8F98] transition hover:bg-white/90 mt-6"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
