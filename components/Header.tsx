import { FC } from "react";
import ToolTip from "UI/ToolTip";
import Navbar from "./Navbar";
import ThemeSwitch from "./ThemeSwitch";

interface props {
  onThemeChange: () => void;
  darkTheme: boolean;
}

const Header: FC<props> = ({ onThemeChange, darkTheme }) => {
  return (
    <header className="flex w-full items-center justify-between bg-white px-8 py-4 dark:bg-zinc-900 ">
      <h1 className="flex items-center font-labrada text-3xl font-semibold capitalize">
        <span className="mx-0.5">📰</span>
        KhabarBar.com
      </h1>
      <Navbar />
      <ToolTip direction="DownLeft" tooltipText="Theme">
        <ThemeSwitch darkTheme={darkTheme} onThemeChange={onThemeChange} />
      </ToolTip>
    </header>
  );
};

export default Header;
