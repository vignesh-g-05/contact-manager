import DetailsPanel from "@/features/details-panel";
import type { Contact, Draft } from "@/types";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  contact: Contact;
  draft: Draft;
  setDraft: Dispatch<SetStateAction<Draft | null>>;
  onSave: () => void;
  onCancel: () => void;
};

const ContactDetails = ({
  contact,
  draft,
  setDraft,
  onSave,
  onCancel,
}: Props) => {
  return (
    <DetailsPanel
      key={contact.id}
      contact={contact}
      draft={draft}
      setDraft={setDraft}
      onSave={onSave}
      onCancel={onCancel}
    />
  );
};

export default ContactDetails;
