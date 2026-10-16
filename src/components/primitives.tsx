import { STAGE_STYLE } from "../const/styles";
import { labelStyle } from "../lib/utils";

export const Dash = () => (
  <span className="text-[#b4b4b0] dark:text-[#5a5a5a]">—</span>
);

export const Pill = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <span
      className={`inline-flex items-center rounded px-1.5 py-0.5 text-xs leading-4 font-medium whitespace-nowrap ${className}`}
    >
      {children}
    </span>
  );
};

export const Labels = ({
  labels,
  max = 2,
}: {
  labels: string[];
  max?: number;
}) => {
  if (!labels.length) return <Dash />;
  return (
    <div className="flex flex-wrap gap-1">
      {labels.slice(0, max).map((l) => (
        <Pill key={l} className={labelStyle(l)}>
          {l}
        </Pill>
      ))}
      {labels.length > max && (
        <Pill className={STAGE_STYLE.Lead}>+{labels.length - max}</Pill>
      )}
    </div>
  );
};

export const Avatar = ({ name }: { name: string }) => {
  return (
    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#f1f1ef] text-[11px] font-semibold text-[#5f5e5b] dark:bg-[#333] dark:text-[#cfcfcf]">
      {name.charAt(0)}
    </span>
  );
};
