import clsx from "clsx";
import { FC, ReactNode } from "react";

interface props {
  children: ReactNode;
  className?: string;
}

const Container: FC<props> = ({ children, className }) => {
  return <div className={clsx("mx-auto w-5/6", className)}>{children}</div>;
};

export default Container;
