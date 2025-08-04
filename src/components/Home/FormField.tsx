import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  icon?: ReactNode;
  className?: string;
}

export default function FormField({
  label,
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  icon,
  className = "",
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full font-['Montserrat'] px-4 py-2 border border-gray-300 rounded-md text-[10px] sm:text-xs focus:outline-none ${
            icon ? "pl-10" : ""
          } ${className}`}
          placeholder={placeholder}
          required={required}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
