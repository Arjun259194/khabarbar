import clsx from "clsx";
import { FC, ReactNode } from "react";

const ToolTip: FC<{
  children: ReactNode;
  tooltipText: string;
  direction:
    | "Up"
    | "Down"
    | "Right"
    | "Left"
    | "UpRight"
    | "DownRight"
    | "DownLeft"
    | "UpLeft";
}> = ({ children, tooltipText, direction }) => {
  return (
    <div className="group relative">
      <span
        className={`${clsx(
          "pointer-events-none m-2 opacity-0 group-hover:pointer-events-auto group-hover:opacity-100",
          "transition-all duration-200 ease-in-out",
          "absolute z-20 w-max animate-bounce rounded-md py-1 px-2 font-semibold shadow-md",
          "text-rich-black bg-gray-100 dark:bg-zinc-700 dark:text-white",
          direction === "Up" && " bottom-full ",
          direction === "Down" && " top-full ",
          direction === "Right" && " left-full ",
          direction === "Left" && " right-full ",
          direction === "UpRight" && "bottom-full left-full",
          direction === "DownRight" && "top-full left-full",
          direction === "DownLeft" && "top-full right-full",
          direction === "UpLeft" && "bottom-full right-full"
        )}`}>
        {tooltipText}
      </span>
      {children}
    </div>
  );
};

export default ToolTip;
