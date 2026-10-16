import { MUTED } from "@/const/styles";
import { Inbox } from "lucide-react";

export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col items-center gap-2 py-24 text-center">
      <Inbox className={`h-8 w-8 ${MUTED}`} />
      <p className="text-sm font-medium">{title}</p>
      <p className={`text-sm ${MUTED}`}>{body}</p>
    </div>
  );
}
