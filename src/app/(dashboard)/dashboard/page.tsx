export default function DashboardPage() {
  return (
    <div className="flex flex-col sm:flex-row w-full h-full bg-white rounded-[24px] overflow-hidden relative">
      <main>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2 mt-[8px]">
          <h1 className="text-[#4B4B4B] font-bold text-[34px] sm:text-[30px] leading-tight mb-6">
            Sync and Travel dates
          </h1>
          <div className="shrink-0 mt-5"></div>
        </div>
      </main>
    </div>
  );
}
