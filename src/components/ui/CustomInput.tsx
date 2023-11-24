import { Input } from "@material-tailwind/react";
import React from "react";

interface CustomInputProps {
  type: "password" | "text";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label: string;
  value: string;
}

const CustomInput: React.FunctionComponent<CustomInputProps> = ({
  type,
  onChange,
  name,
  value,
  label,
}) => {
  return (
    <Input
      type={type}
      crossOrigin="true"
      label={label}
      size="lg"
      name={name}
      className="border w-[350px] text-sm rounded font-normal "
      onChange={onChange}
      value={value}
    />
  );
};

export default CustomInput;
