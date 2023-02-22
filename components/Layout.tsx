import Head from "next/head";
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Labrada:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* Josefin Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header darkTheme={darkTheme} onThemeChange={handleThemeSwitch} />
      {children}
    </div>
  );
};

export default Layout;
