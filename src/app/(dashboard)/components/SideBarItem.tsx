type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  activeLabel?: string;
  onClick?: () => void;
};

export function SidebarItem({
  icon,
  label,
  activeLabel,
  onClick,
}: SidebarItemProps) {
  const isActive = label === activeLabel;

  return (
    <li
      onClick={onClick}
      className={`flex items-center gap-4 px-4 py-[6px] pr-4 cursor-pointer transition-all rounded-r-full
        ${
          isActive
            ? "text-white font-semibold bg-gradient-to-r from-[#1A8F98] to-[#66D8DD] my-[2px]"
            : "text-[#4B4B4B] hover:bg-gradient-to-r from-[#CFFDFF] to-[#FFFFFF]"
        }`}
    >
      {/* Icon */}
      <span
        className={`w-5 h-5 [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-current ${
          isActive ? "text-white" : "text-[#4B4B4B]"
        }`}
      >
        {icon}
      </span>

      {/* Label */}
      <span className="text-[15px] whitespace-nowrap overflow-hidden text-ellipsis">
        {label}
      </span>
    </li>
  );
}
