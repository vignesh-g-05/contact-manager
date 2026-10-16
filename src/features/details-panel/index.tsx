import {
  Briefcase,
  Building2,
  CircleDot,
  Mail,
  StickyNote,
  Tag,
  User,
} from "lucide-react";

import { BORDER, FOCUS, HOVER, MUTED } from "@/const/styles";
import { STAGES } from "@/const/contact";
import type { Contact, Draft, Stage } from "@/types";
import { Dash, Labels } from "@/components/primitives";
import Row from "./row";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";

type DetailsPanelProps = {
  contact: Contact;
  draft: Draft;
  setDraft: (draft: Draft) => void;
  onSave: () => void;
  onCancel: () => void;
};

const DetailsPanel = ({
  contact,
  draft,
  setDraft,
  onSave,
  onCancel,
}: DetailsPanelProps) => {
  const dirty = draft.stage !== contact.stage || draft.notes !== contact.notes;

  const field = `w-full rounded-md border bg-transparent px-2 py-1.5 text-sm ${BORDER} ${FOCUS}`;

  return (
    <Sheet open onOpenChange={(open) => !open && onCancel()}>
      <SheetContent
        side="right"
        className="flex h-full w-full flex-col gap-0 border-l border-[#e9e9e7] bg-white p-0 sm:max-w-115 dark:border-[#2f2f2f] dark:bg-[#191919]"
      >
        {/* Header: leave room for the built-in close button */}
        <SheetHeader
          className={`shrink-0 border-b px-5 py-4 pr-14 text-left ${BORDER}`}
        >
          <SheetDescription className={`text-xs ${MUTED}`}>
            Contact details
          </SheetDescription>

          <SheetTitle className="truncate text-xl font-semibold tracking-tight">
            {contact.name}
          </SheetTitle>
        </SheetHeader>

        {/* Scrollable contact fields */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
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
            {contact.owner ?? <Dash />}
          </Row>

          <Row icon={Tag} label="Labels">
            <Labels labels={contact.labels} max={10} />
          </Row>

          <div className={`my-5 border-t ${BORDER}`} />

          <Row icon={CircleDot} label="Stage">
            <select
              aria-label="Stage"
              value={draft.stage}
              onChange={(event) =>
                setDraft({
                  ...draft,
                  stage: event.target.value as Stage,
                })
              }
              className={field}
            >
              {STAGES.map((stage) => (
                <option key={stage} value={stage} className="text-black">
                  {stage}
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
              onChange={(event) =>
                setDraft({ ...draft, notes: event.target.value })
              }
              className={`${field} resize-y`}
            />
          </Row>
        </div>

        {/* Footer stays fixed while the fields scroll */}
        <SheetFooter
          className={`shrink-0 flex-row items-center justify-between gap-3 border-t px-5 py-3 ${BORDER}`}
        >
          <div className="min-w-0 flex-1">
            {dirty && (
              <span className={`text-xs ${MUTED}`}>Unsaved changes</span>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={onCancel}
              className={`rounded-md border px-3 py-1.5 text-sm ${BORDER} ${HOVER} ${FOCUS}`}
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={onSave}
              disabled={!dirty}
              className={`rounded-md bg-[#2383e2] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#0b6ec5] disabled:cursor-not-allowed disabled:opacity-40 ${FOCUS}`}
            >
              Save changes
            </button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default DetailsPanel;
