import React from "react";
import "./Footer.css";

export const Footer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="footer">{children}</div>;
};
