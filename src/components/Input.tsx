import React from "react";
import clsx from "clsx";
import type { PassThroughProps } from "../../types";

type InputProps = {
  label: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
} & PassThroughProps;

export default function Input({
  label,
  inputProps,
  className,
  style,
  id,
  onChange,
  value,
}: InputProps) {
  return (
    <div className={className} style={style} id={id}>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type="text"
          onChange={onChange}
          value={value}
          {...inputProps}
          className={clsx(
            "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
            inputProps?.className
          )}
        />
      </div>
    </div>
  );
}
