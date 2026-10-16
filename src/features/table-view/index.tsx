import { Pill, Labels, Avatar, Dash } from "../../components/primitives";
import { COLUMNS } from "../../const/contact";
import { STAGE_STYLE, MUTED, BORDER, FOCUS, HOVER } from "../../const/styles";
import type { Contact } from "../../types";
import { EmptyState } from "./empty";

const TableView = ({
  contacts,
  onOpen,
}: {
  contacts: Contact[];
  onOpen: (id: string) => void;
}) => {
  if (!contacts.length)
    return (
      <EmptyState
        title="No contacts yet"
        body="Contacts you add will show up here."
      />
    );
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-240 border-collapse text-sm">
        <thead>
          <tr className={`border-b ${BORDER}`}>
            {COLUMNS.map((c) => (
              <th
                key={c}
                className={`px-3 py-2 text-left text-xs font-normal ${MUTED}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr
              key={c.id}
              tabIndex={0}
              onClick={() => onOpen(c.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpen(c.id);
                }
              }}
              className={`cursor-pointer border-b ${BORDER} ${HOVER} ${FOCUS} focus-visible:ring-inset`}
            >
              <td className="px-3 py-2 font-medium">
                <span className="flex items-center gap-2">
                  <Avatar name={c.name} />
                  {c.name}
                </span>
              </td>
              <td className={`px-3 py-2 ${MUTED}`}>{c.email ?? <Dash />}</td>
              <td className="px-3 py-2">{c.company ?? <Dash />}</td>
              <td className="px-3 py-2">{c.role ?? <Dash />}</td>
              <td className="px-3 py-2">{c.owner}</td>
              <td className="px-3 py-2">
                <Labels labels={c.labels} />
              </td>
              <td className="px-3 py-2">
                <Pill className={STAGE_STYLE[c.stage]}>{c.stage}</Pill>
              </td>
              <td
                className={`max-w-55 truncate px-3 py-2 ${MUTED}`}
                title={c.notes}
              >
                {c.notes || <Dash />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
