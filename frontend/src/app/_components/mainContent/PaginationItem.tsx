import { cn } from "@/lib/utils";
import { memo } from "react";

type PaginationItemProps = {
  label: string;
  className?: string;
  isActive?: boolean;
};

const PaginationItem = ({
  label,
  className,
  isActive,
}: PaginationItemProps) => {
  return (
    <div
      className={cn(
        "px-2 py-1 rounded-md font-semibold border border-gray-400 text-gray-500",
        {
          className,
          "bg-green-600 border-green-600 text-white": isActive,
        }
      )}>
      {label}
    </div>
  );
};

export default memo(PaginationItem);
