import styles from "./Button.module.css";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({ children, onClick, type = "button", className = "" }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
