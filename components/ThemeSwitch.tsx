import { Switch } from "@headlessui/react";
import { FC } from "react";

interface props {
  darkTheme: boolean;
  onThemeChange: () => void;
}

const ThemeSwitch: FC<props> = ({ onThemeChange, darkTheme }) => {
  return (
    <Switch
      checked={darkTheme}
      onChange={onThemeChange}
      className={`${
        !darkTheme ? "bg-zinc-900" : "bg-zinc-100 "
      } relative inline-flex h-6 w-11 items-center rounded-full shadow-lg`}>
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          darkTheme ? "translate-x-6 bg-zinc-900" : "translate-x-1 bg-white"
        } inline-block h-4 w-4 transform rounded-full transition`}
      />
    </Switch>
  );
};

export default ThemeSwitch;
