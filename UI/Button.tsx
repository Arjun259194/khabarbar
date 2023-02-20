import clsx from "clsx";
import { FC } from "react";

const Button: FC<{
  children: string;
  className?: string;
  clickFunc?: () => any;
}> = ({ clickFunc, children, className }) => {
  return (
    <button
      onClick={clickFunc}
      className={clsx(
        "rounded-md py-1.5 px-3 font-semibold capitalize hover:brightness-110",
        className
      )}>
      {children}
    </button>
  );
};

export default Button;
