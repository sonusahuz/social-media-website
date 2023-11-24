import { Input } from "@material-tailwind/react";
import React from "react";

interface CustomButtonProps {
  type?: "submit";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  className: string;
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  type,
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} bg-black text-white rounded`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
