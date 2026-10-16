import { useEffect, useState } from "react";

import type { Contact, Draft, View } from "./types";
import { defaultContacts } from "./const/contact";
import Header from "./features/header";
import { ContactContent } from "./features/contacts/components/contact-content";
import ContactHeading from "./features/contacts/components/contact-heading";
import DetailsPanel from "./features/details-panel";

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem("contacts") || "null");
      return parsed || defaultContacts;
    } catch {
      return defaultContacts;
    }
  });
  const [view, setView] = useState<View>("table");
  const [dark, setDark] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const selected =
    contacts.find((contact) => contact.id === selectedId) ?? null;

  function openContact(id: string) {
    const contact = contacts.find((item) => item.id === id);

    if (!contact) return;

    setSelectedId(id);
    setDraft({
      stage: contact.stage,
      notes: contact.notes,
    });
  }

  function closeContact() {
    setSelectedId(null);
    setDraft(null);
  }

  function saveContact() {
    if (!selectedId || !draft) return;

    setContacts((currentContacts) =>
      currentContacts.map((contact) =>
        contact.id === selectedId ? { ...contact, ...draft } : contact,
      ),
    );

    closeContact();
  }

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white font-sans text-[#37352f] antialiased dark:bg-[#191919] dark:text-[#ffffffcf]">
        <Header
          view={view}
          onChange={setView}
          dark={dark}
          onToggleTheme={() => setDark((current) => !current)}
        />

        <main className="mx-auto max-w-330 px-6 py-8">
          <ContactHeading count={contacts.length} />

          <ContactContent
            contacts={contacts}
            view={view}
            onOpen={openContact}
          />
        </main>

        {selected && draft && (
          <DetailsPanel
            contact={selected}
            draft={draft}
            setDraft={setDraft}
            onSave={saveContact}
            onCancel={closeContact}
          />
        )}
      </div>
    </div>
  );
}
