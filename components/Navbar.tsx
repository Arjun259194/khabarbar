import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <ul className="flex [&>li:hover]:underline [&>li]:mx-2 [&>li]:font-semibold [&>li]:capitalize">
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
