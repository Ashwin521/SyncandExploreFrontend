'use client';

type HelpSupportTabsProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const tabs = ['FAQ', 'Contact Us', 'Report Issues'];

export default function HelpSupportTabs({ activeTab, onTabChange }: HelpSupportTabsProps) {
  return (
    <div className="flex space-x-6 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`relative py-2 px-3 font-medium transition-all duration-300 
            ${
              activeTab === tab
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-[#00B3BB]'
            }`}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00B3BB] rounded-full"></span>
          )}
        </button>
      ))}
    </div>
  );
}
