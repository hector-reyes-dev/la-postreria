import "./Button.scss";

const Button = (label: string, size?: string, color?: string) => {
  return <button className="main-button">{label}</button>;
};

export default Button;
