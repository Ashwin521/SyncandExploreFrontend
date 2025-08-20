import LoginHeader from "../../login/components/LoginHeader";
import Link from "next/link";

export default function ForgotPasswordCard() {
  return (
    <div className="relative mx-auto w-full max-w-lg min-h-[600px] rounded-[20px] bg-black/50 pt-6 pb-6 px-8 shadow-2xl backdrop-blur-[16px] border border-white/20"
      style={{
        background: 'linear-gradient(135deg, rgba(30,30,40,0.20) 0%, rgba(30,30,40,0.10) 100%)',
      }}>
      <div className="-mx-6">
        <LoginHeader subtitle="Enter Your mail for Verifying" />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={e => e.preventDefault()}>
          <div className="relative">
            <label className="absolute left-4 top-[-8] text-xs font-medium text-white bg-[#717D72] z-[100]">Email Id</label>
            <div className="absolute left-4 top-4 flex items-center">
              <img src="/login-mail-icon.svg" alt="" width={13} height={13} />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-white/30 bg-black/50 px-8 pb-1.5 pt-3 text-white placeholder-white/50 backdrop-blur-[16px] outline-none transition focus:border-white/60 focus:text-white text-sm shadow-lg autofill:bg-black/50 autofill:text-white"
              style={{
                background: "linear-gradient(135deg, rgba(30,30,40,0.20) 0%, rgba(30,30,40,0.10) 100%)",
              }}
            />
          </div>
          <button type="submit" className="w-full rounded-full bg-white py-2.5 text-sm font-semibold text-[#1A8F98] transition hover:bg-white/90 mt-6">Verify</button>
        </form>
      </div>
      <div className="absolute left-0 right-0 bottom-4 flex justify-center">
        <Link href="/login" className="font-semibold text-white underline text-sm text-center">Back to login</Link>
      </div>
      <div className="absolute right-0 bottom-0 mb-4 mr-4 z-10">
        <img src="/login-calender-icon.svg" alt="Calendar Icon" width={78} height={78} />
      </div>
    </div>
  );
}
