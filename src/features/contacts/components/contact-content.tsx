import BoardView from "@/features/board-view";
import TableView from "@/features/table-view";
import type { Contact, View } from "@/types";

type Props = {
  contacts: Contact[];
  view: View;
  onOpen: (id: string) => void;
};

export const ContactContent = ({ contacts, view, onOpen }: Props) => {
  if (view === "table") {
    return <TableView contacts={contacts} onOpen={onOpen} />;
  }

  return <BoardView contacts={contacts} onOpen={onOpen} />;
};
