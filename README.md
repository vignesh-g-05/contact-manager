# Contact Manager

A responsive contact management interface built with React, TypeScript, Vite, and Tailwind CSS. It provides table and Kanban-style board views for managing contacts, with a shared details panel for editing contact stages and notes.

## Features

- **Table view:** Browse contacts in a structured table with name, email, company, role, owner, labels, stage, and notes.
- **Board view:** View contacts grouped by Lead, Prospect, Qualified, and Customer.
- **Shared contact data:** Both views use the same underlying contacts collection, keeping updates consistent.
- **Contact details panel:** Open a contact from either view to review its information and edit its stage and notes.
- **Save and cancel:** Save changes to update the contact, or cancel to discard unsaved edits.
- **Local Storage persistence:** Contacts, selected view, and theme preferences persist across page reloads.
- **Theme switching:** Switch between light and dark themes.
- **Responsive layout:** Designed to remain usable at narrower desktop widths and smaller screen sizes.
- **Empty states and fallbacks:** Empty board columns remain visible, and missing optional contact information is handled gracefully.
- **Keyboard accessibility:** Interactive elements include visible focus styles for keyboard navigation.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- shadcn/ui
- Browser Local Storage

## Getting Started

### Prerequisites

- Node.js v24.18.0
- pnpm v11.15.1

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/vignesh-g-05/contact-manager.git
cd contact-manager
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the [localhost:5173](http://localhost:5173/)

### Production Build

Create a production build:

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview
```

## How It Works

### State Management

The application maintains a single shared contacts array. The table and board derive their content from this collection rather than maintaining separate copies.

Contacts are identified by stable IDs. Selecting a contact opens a shared details panel with a draft containing the editable fields.

- **Save:** Applies the draft to the matching contact in the shared collection.
- **Cancel or close:** Discards the draft without modifying the saved contact.
- **Change view:** Switches between table and board without creating duplicate records or losing saved updates.

When a contact's stage changes and the update is saved, the contact appears in the corresponding board column.

### Persistence

Local Storage is used to persist:

- Contact records
- Selected view
- Theme preference

This allows the application to restore the user's saved workspace after a page reload. The application runs entirely in the browser and does not require a backend or database.

## Design Decisions and Trade-offs

- **One source of truth:** A shared contacts collection avoids synchronization issues between the table and board.
- **Draft-based editing:** Changes are kept separate from saved data until the user explicitly saves, making cancellation predictable.
- **Shared details panel:** Both views reuse the same editing interface and save logic, reducing duplication.
- **Local Storage instead of a backend:** Keeps the prototype self-contained and easy to run, but data is limited to the current browser's storage.
- **Focused editing scope:** Only Stage and Notes are editable, as required. Other contact fields are displayed as read-only information.
- **No drag-and-drop:** Stage changes are handled through the details panel to keep the initial implementation focused on the core interactions.
- **No deletion or multi-user synchronization:** These features are outside the initial scope.

## Future Improvements

- Add drag-and-drop support for moving contacts between board columns.
- Add search, sorting, filtering, and label-based filtering.
- Add contact creation, deletion
