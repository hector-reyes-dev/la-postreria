import React from "react";
import "./Button.scss";

interface ButtonProps {
  label: React.ReactNode;
  bgColor?: string;
  size?: string;
}

const Button: React.FC<ButtonProps> = ({ label, bgColor, size }) => {
  return (
    <button className="main-button" style={{ backgroundColor: bgColor }}>
      {label}
    </button>
  );
};

export default Button;
