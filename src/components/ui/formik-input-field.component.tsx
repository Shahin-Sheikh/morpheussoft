import { useField, FieldHookConfig } from "formik";
import React from "react";

type FormInputProps = {
  label?: string;
  containerClassName?: string;
} & FieldHookConfig<string> &
  React.InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({
  label,
  containerClassName,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className={`mb-4 ${containerClassName || ""}`}>
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        {...field}
        {...props}
        className={`
          w-full px-3 py-2 border rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${meta.touched && meta.error ? "border-red-500" : "border-gray-300"}
          ${props.className || ""}
        `}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
