import { FC, ReactNode, useEffect, useState } from "react";
import Header from "./Header";

interface props {
  children: ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true); // a state that can be dark or light

  //checks what is User's preferred theme and changes the state
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  // every time state is changed, adds or removes "dark" class from document element
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  // changes the state
  const handleThemeSwitch = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="text-rich-black dark:text-white">
      <Header darkTheme={darkTheme} onThemeChange={handleThemeSwitch} />
      {children}
    </div>
  );
};

export default Layout;
