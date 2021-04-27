import React from "react";

interface ButtonProps {
  clicked(): void;
  children: string;
}
export const Button: React.FC<ButtonProps> = ({ clicked, children }): JSX.Element => {
  return (
    <button type="button" onClick={clicked}>
      {children}
    </button>
  );
};

