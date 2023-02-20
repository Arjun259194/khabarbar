import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <ul className="flex [&>li]:capitalize [&>li]:font-semibold [&>li]:mx-2 [&>li:hover]:underline">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
