import { BORDER, FOCUS, HOVER, MUTED } from "@/const/styles";
import type { Contact, Draft, Stage } from "@/types";
import { useEffect, useRef } from "react";
import Row from "./row";
import {
  Briefcase,
  Building2,
  CircleDot,
  Mail,
  StickyNote,
  Tag,
  User,
  X,
} from "lucide-react";
import { Dash, Labels } from "@/components/primitives";
import { STAGES } from "@/const/contact";

const DetailsPanel = ({
  contact,
  draft,
  setDraft,
  onSave,
  onCancel,
}: {
  contact: Contact;
  draft: Draft;
  setDraft: (d: Draft) => void;
  onSave: () => void;
  onCancel: () => void;
}) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dirty = draft.stage !== contact.stage || draft.notes !== contact.notes;

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onCancel();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      trigger?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const field = `w-full rounded-md border bg-transparent px-2 py-1.5 text-sm ${BORDER} ${FOCUS}`;

  return (
    <div className="fixed inset-0 z-30">
      <div
        className="absolute inset-0 bg-black/20"
        onClick={onCancel}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={`${contact.name} details`}
        className="cm-slide absolute top-0 right-0 flex h-full w-full max-w-115 flex-col border-l border-[#e9e9e7] bg-white shadow-2xl dark:border-[#2f2f2f] dark:bg-[#191919]"
      >
        <div className="flex items-center justify-between px-5 py-3">
          <span className={`text-xs ${MUTED}`}>Contact</span>
          <button
            ref={closeRef}
            onClick={onCancel}
            aria-label="Close panel"
            className={`rounded p-1 ${HOVER} ${FOCUS}`}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-6">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            {contact.name}
          </h2>

          <Row icon={Mail} label="Email">
            {contact.email ?? <Dash />}
          </Row>
          <Row icon={Building2} label="Company">
            {contact.company ?? <Dash />}
          </Row>
          <Row icon={Briefcase} label="Role">
            {contact.role ?? <Dash />}
          </Row>
          <Row icon={User} label="Owner">
            {contact.owner}
          </Row>
          <Row icon={Tag} label="Labels">
            <Labels labels={contact.labels} max={10} />
          </Row>

          <div className={`my-4 border-t ${BORDER}`} />

          <Row icon={CircleDot} label="Stage">
            <select
              aria-label="Stage"
              value={draft.stage}
              onChange={(e) =>
                setDraft({ ...draft, stage: e.target.value as Stage })
              }
              className={field}
            >
              {STAGES.map((s) => (
                <option key={s} value={s} className="text-black">
                  {s}
                </option>
              ))}
            </select>
          </Row>
          <Row icon={StickyNote} label="Notes">
            <textarea
              aria-label="Notes"
              rows={6}
              value={draft.notes}
              placeholder="Add a note…"
              onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
              className={`${field} resize-y`}
            />
          </Row>
        </div>

        <div
          className={`flex items-center justify-end gap-2 border-t px-5 py-3 ${BORDER}`}
        >
          {dirty && (
            <span className={`mr-auto text-xs ${MUTED}`}>Unsaved changes</span>
          )}
          <button
            onClick={onCancel}
            className={`rounded-md border px-3 py-1.5 text-sm ${BORDER} ${HOVER} ${FOCUS}`}
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            disabled={!dirty}
            className={`rounded-md bg-[#2383e2] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#0b6ec5] disabled:cursor-not-allowed disabled:opacity-40 ${FOCUS}`}
          >
            Save changes
          </button>
        </div>
      </aside>
    </div>
  );
};

export default DetailsPanel;
