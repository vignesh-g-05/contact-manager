import { Moon, Sun, Users } from "lucide-react";
import type { Props as ViewSwitcherProps } from "./view-switcher";
import ViewSwitcher from "./view-switcher";
import { BORDER, FOCUS, HOVER } from "@/const/styles";

type HeaderProps = ViewSwitcherProps & {
  dark: boolean;
  onToggleTheme: () => void;
};

const Header = ({ view, onChange, dark, onToggleTheme }: HeaderProps) => {
  return (
    <header
      className={`sticky top-0 z-20 flex items-center justify-between border-b bg-white/90 px-6 py-3 backdrop-blur dark:bg-[#191919]/90 ${BORDER}`}
    >
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-md bg-[#37352f] text-white dark:bg-[#ffffffcf] dark:text-[#191919]">
          <Users className="h-4 w-4" />
        </span>
        <span className="text-sm font-semibold">Contacts</span>
      </div>

      <ViewSwitcher view={view} onChange={onChange} />

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          className={`rounded p-1.5 ${HOVER} ${FOCUS}`}
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <span className="text-sm font-medium">Lumen</span>
      </div>
    </header>
  );
};

export default Header;
