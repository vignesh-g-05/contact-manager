import type { Stage } from "../types";

export const STAGE_STYLE: Record<Stage, string> = {
  Lead: "bg-[#e3e2e0] text-[#32302c] dark:bg-[#454b4e] dark:text-[#ffffffcf]",
  Prospect: "bg-[#d3e5ef] text-[#183347] dark:bg-[#2b4a5a] dark:text-[#d3e5ef]",
  Qualified:
    "bg-[#fdecc8] text-[#402c1b] dark:bg-[#5a4a2a] dark:text-[#fdecc8]",
  Customer: "bg-[#dbeddb] text-[#1c3829] dark:bg-[#2b4a37] dark:text-[#dbeddb]",
};

export const LABEL_STYLES = [
  "bg-[#e8deee] text-[#412454] dark:bg-[#4a3a5a] dark:text-[#e8deee]",
  "bg-[#f5e0e9] text-[#4c2337] dark:bg-[#5a3a4a] dark:text-[#f5e0e9]",
  "bg-[#ffe2dd] text-[#5d1715] dark:bg-[#5a3a35] dark:text-[#ffe2dd]",
  "bg-[#fadec9] text-[#49290e] dark:bg-[#5a4030] dark:text-[#fadec9]",
  "bg-[#d3e5ef] text-[#183347] dark:bg-[#2b4a5a] dark:text-[#d3e5ef]",
];

export const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2383e2]/60";

export const MUTED = "text-[#787774] dark:text-[#9b9b9b]";

export const BORDER = "border-[#e9e9e7] dark:border-[#2f2f2f]";

export const HOVER = "hover:bg-[#f7f7f5] dark:hover:bg-[#252525]";
