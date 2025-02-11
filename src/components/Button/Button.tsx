import React from "react";

interface ButtonProps {
  className?: string;
  text?: string;
  img?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, text, img }) => {
  return (
    <button className={className}>
      {text}
      {img && <img src={img} />}
    </button>
  );
};
