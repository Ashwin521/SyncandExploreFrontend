import Image from "next/image";

export default function LoginHeader() {
  return (
    <div className="mb-8">
      {/* Airplane vector with dotted line trail */}
      <div className="w-full flex justify-start mb-6 mt-2">
        <Image src="/login-plane.svg" alt="Airplane" width={250} height={180} priority />
      </div>
      {/* Main title and subtitle centered */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-extrabold text-white md:text-4xl">
          Sync & Explore
        </h1>
        <p className="mt-5 text-[0.55em] font-extrabold uppercase tracking-wider text-white">
          Login Now
        </p>
      </div>
    </div>
  );
}
