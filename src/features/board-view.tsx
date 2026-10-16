import { Labels, Avatar, Pill } from "@/components/primitives";
import { STAGES } from "@/const/contact";
import { MUTED, BORDER, FOCUS, STAGE_STYLE } from "@/const/styles";
import type { Contact } from "@/types";

const BoardView = ({
  contacts,
  onOpen,
}: {
  contacts: Contact[];
  onOpen: (id: string) => void;
}) => {
  return (
    <div className="overflow-x-auto">
      <div className="grid min-w-220 grid-cols-4 gap-4">
        {STAGES.map((stage) => {
          const items = contacts.filter((c) => c.stage === stage);
          return (
            <section
              key={stage}
              aria-label={stage}
              className="rounded-lg bg-[#f7f7f5] p-2 dark:bg-[#202020]"
            >
              <header className="flex items-center gap-2 px-1.5 py-1.5">
                <Pill className={STAGE_STYLE[stage]}>{stage}</Pill>
                <span className={`text-xs ${MUTED}`}>{items.length}</span>
              </header>
              <div className="flex flex-col gap-2">
                {items.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => onOpen(c.id)}
                    className={`rounded-md border bg-white p-3 text-left shadow-[0_1px_2px_rgba(15,15,15,0.06)] transition-colors hover:bg-[#fbfbfa] dark:bg-[#2b2b2b] dark:hover:bg-[#303030] ${BORDER} ${FOCUS}`}
                  >
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className={`mt-0.5 text-xs ${MUTED}`}>
                      {c.company ?? "No company"}
                    </div>
                    {c.email && (
                      <div className={`mt-1 truncate text-xs ${MUTED}`}>
                        {c.email}
                      </div>
                    )}
                    {c.labels.length > 0 && (
                      <div className="mt-2">
                        <Labels labels={c.labels} />
                      </div>
                    )}
                    <div
                      className={`mt-2 flex items-center gap-1.5 text-xs ${MUTED}`}
                    >
                      <Avatar name={c.owner} />
                      {c.owner}
                    </div>
                  </button>
                ))}
                {!items.length && (
                  <div
                    className={`rounded-md border border-dashed px-3 py-6 text-center text-xs ${BORDER} ${MUTED}`}
                  >
                    No contacts in {stage}. Change a contact's stage to move it
                    here.
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default BoardView;
