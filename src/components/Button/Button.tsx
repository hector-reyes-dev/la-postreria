import React from "react";
import "./Button.scss";

interface ButtonProps {
  label: React.ReactNode;
  color?: "purple" | "green" | "pink";
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ label, color, size }) => {
  return (
    <button
      className="main-button"
      style={{ backgroundColor: `var(--${color})` }}
    >
      {label}
    </button>
  );
};

export default Button;
