"use client";

import Image from "next/image";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm">
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
            <Image
              src="/login-pass-icon.svg"
              alt="Lock icon"
              width={13}
              height={13}
            />
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
            {showPassword ? (
              <Image src="/eye-off.svg" alt="Hide password" width={18} height={18} />
            ) : (
              <Image src="/eye-off.svg" alt="Show password" width={18} height={18} />
            )}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="mb-2 flex justify-end">
          <a href="#" className="text-xs text-white hover:text-white/70">
            Forgot your password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full rounded-full bg-white py-2.5 text-sm font-semibold text-[#1A8F98] transition hover:bg-white/90"
        >
          Login
        </button>

        {/* Divider */}
        <div className="my-4 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/30"></div>
          <span className="text-xs font-bold text-white">or continue with</span>
          <div className="h-px flex-1 bg-white/30"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="mx-auto flex w-64 items-center justify-center gap-3 rounded-[10px] border border-white bg-black/50 px-2 py-2.5 text-white backdrop-blur-[16px] transition text-sm shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,30,40,0.20) 0%, rgba(30,30,40,0.10) 100%)",
          }}
        >
          <Image src="/Google 2.svg" alt="Google" width={24} height={24} />
          <span className="font-medium">Continue with Google</span>
        </button>

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-sm text-white/70">
          Not a user ?{" "}
          <a href="#" className="font-semibold text-white underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}
