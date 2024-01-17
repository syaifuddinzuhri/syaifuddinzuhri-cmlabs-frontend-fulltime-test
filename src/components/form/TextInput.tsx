import React, { ChangeEvent, KeyboardEvent } from "react";

type TextInputProps = {
  name: string;
  type: "text" | "number" | "email" | "password";
  size?: "sm" | "md";
  placeholder: string;
  value?: string;
  icon?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  error?: string | undefined;
};
const TextInput = ({
  name,
  placeholder,
  type,
  value,
  size,
  onChange,
  onKeyDown,
  error,
  icon,
}: TextInputProps) => {
  const hasValue = Boolean(value);
  return (
    <div className="relative text-left">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={`${icon ? 'pl-10' : ''} w-full my-2 ${
          size === "sm" ? "p-3" : "p-4"
        } focus:outline-primary-100 ${
          hasValue ? "bg-neutral-100" : "bg-white"
        } rounded-lg border border-neutral-200`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
