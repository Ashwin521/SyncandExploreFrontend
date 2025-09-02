"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL!
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/register`, {
        email,
        password
      });
      // Handle successful signup
      console.log('Signup successful:', response.data);
      if(response.data.user){
        router.push('/dashboard');
      }
    } catch (error) {
      // Handle signup error
      console.error('Signup failed:', error);
    }
  }

  return (
    <div className="w-full max-w-sm">
      <form className="flex flex-col gap-4" onSubmit={e => {
        e.preventDefault();
        handleSubmit()
      }}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              <AiOutlineEyeInvisible size={18} />
            ) : (
              <AiOutlineEye size={18} />
            )}
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
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible size={18} />
            ) : (
              <AiOutlineEye size={18} />
            )}
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
