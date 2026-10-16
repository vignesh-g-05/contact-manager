import { Labels, Avatar, Pill } from "@/components/primitives";
import { STAGES } from "@/const/contact";
import { MUTED, BORDER, FOCUS, STAGE_STYLE } from "@/const/styles";
import type { Contact } from "@/types";

type BoardViewProps = {
  contacts: Contact[];
  onOpen: (id: string) => void;
};

const BoardView = ({ contacts, onOpen }: BoardViewProps) => {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0">
      <div className="grid min-w-65 grid-cols-1 gap-4 sm:min-w-140 sm:grid-cols-2 xl:min-w-0 xl:grid-cols-4">
        {STAGES.map((stage) => {
          const items = contacts.filter((contact) => contact.stage === stage);

          return (
            <section
              key={stage}
              aria-label={stage}
              className="min-w-0 rounded-lg bg-[#f7f7f5] p-2 dark:bg-[#202020]"
            >
              <header className="flex items-center gap-2 px-1.5 py-1.5">
                <Pill className={STAGE_STYLE[stage]}>{stage}</Pill>
                <span className={`text-xs ${MUTED}`}>{items.length}</span>
              </header>

              <div className="flex flex-col gap-2">
                {items.map((contact) => (
                  <button
                    key={contact.id}
                    type="button"
                    onClick={() => onOpen(contact.id)}
                    className={`w-full min-w-0 rounded-md border bg-white p-3 text-left shadow-[0_1px_2px_rgba(15,15,15,0.06)] transition-colors hover:bg-[#fbfbfa] dark:bg-[#2b2b2b] dark:hover:bg-[#303030] ${BORDER} ${FOCUS}`}
                  >
                    <div className="truncate text-sm font-medium">
                      {contact.name}
                    </div>

                    <div className={`mt-0.5 truncate text-xs ${MUTED}`}>
                      {contact.company ?? "No company"}
                    </div>

                    {contact.email && (
                      <div className={`mt-1 text-xs break-all ${MUTED}`}>
                        {contact.email}
                      </div>
                    )}

                    {contact.labels.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        <Labels labels={contact.labels} />
                      </div>
                    )}

                    <div
                      className={`mt-2 flex min-w-0 items-center gap-1.5 text-xs ${MUTED}`}
                    >
                      <Avatar name={contact.owner} />
                      <span className="truncate">{contact.owner}</span>
                    </div>
                  </button>
                ))}

                {items.length === 0 && (
                  <div
                    className={`rounded-md border border-dashed px-3 py-6 text-center text-xs ${BORDER} ${MUTED}`}
                  >
                    No contacts in {stage}. Change a contact&apos;s stage to
                    move it here.
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
