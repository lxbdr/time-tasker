import clsx from "clsx";
import React from "react";

type DarkModeButtonProps = React.HTMLProps<HTMLButtonElement>;

export default function DarkModeButton(props: DarkModeButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        props?.className
      )}
      type={props?.type === "submit" ? "submit" : "button"}
    >
      {props.children}
    </button>
  );
}
