import React from "react";

interface ButtonProps {
  className?: string;
  text?: string;
  img?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ className, text,img }) => {
  return <button className={className}>
    {text}
    {img && <img src={img}/>}
  </button>;
};
