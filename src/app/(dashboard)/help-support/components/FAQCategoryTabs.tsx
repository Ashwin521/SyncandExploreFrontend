'use client';

type FAQCategoryTabsProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const categories = ['General', 'Service', 'Dashboard', 'Miscellaneous'];

export default function FAQCategoryTabs({ activeCategory, setActiveCategory }: FAQCategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-colors duration-200 
            ${
              activeCategory === category
                ? 'bg-[#E0F7F8] text-[#00B3BB] border-[#00B3BB]'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-[#E0F7F8]'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
