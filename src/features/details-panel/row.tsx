import { MUTED } from "@/const/styles";

const Row = ({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-[110px_1fr] items-start gap-2 py-1.5 text-sm">
      <div className={`flex items-center gap-2 pt-1 ${MUTED}`}>
        <Icon className="h-4 w-4" />
        {label}
      </div>
      <div className="min-h-7 py-1">{children}</div>
    </div>
  );
};

export default Row;
