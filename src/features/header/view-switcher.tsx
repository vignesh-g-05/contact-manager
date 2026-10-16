import { FOCUS, HOVER, MUTED } from "@/const/styles";
import type { View } from "@/types";
import { Columns3, Table2 } from "lucide-react";
import type { ElementType } from "react";

export type Props = {
  view: View;
  onChange: (view: View) => void;
};

const ViewSwitcher = ({ view, onChange }: Props) => {
  const tabs: { value: View; label: string; Icon: ElementType }[] = [
    { value: "table", label: "Table", Icon: Table2 },
    { value: "board", label: "Board", Icon: Columns3 },
  ];

  return (
    <div
      role="tablist"
      aria-label="Contact view"
      className="flex gap-0.5 rounded-md bg-[#f1f1ef] p-0.5 dark:bg-[#2a2a2a]"
    >
      {tabs.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          role="tab"
          aria-selected={view === value}
          onClick={() => onChange(value)}
          className={`flex items-center gap-1.5 rounded px-2.5 py-1 text-sm ${FOCUS} ${
            view === value
              ? "bg-white font-medium shadow-sm dark:bg-[#333]"
              : `${MUTED} ${HOVER}`
          }`}
        >
          <Icon className="h-4 w-4" />
          {label}
        </button>
      ))}
    </div>
  );
};

export default ViewSwitcher;
