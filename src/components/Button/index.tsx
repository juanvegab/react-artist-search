import "./styles.css";
import { FC } from "react";

interface ButtonProps {
  type?: "primary" | "secondary" | "link";
  label: string;
  action: VoidFunction;
}

const Button: FC<ButtonProps> = ({ label, action, type = "primary" }) => {
  return (
    <button className={`btn btn-${type}`} onClick={action}>
      {label}
    </button>
  );
};

export { Button };
