import React, { ReactNode } from "react";
import "./Link.css";

interface LinkProps {
  children: ReactNode;
}

export const Link: React.FC<LinkProps> = ({ children }) => {
  return <a className="link">{children}</a>;
};
