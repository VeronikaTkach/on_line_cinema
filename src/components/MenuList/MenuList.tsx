import React, { ReactNode } from "react";
import "./MenuList.css";

interface MenuListProps {
  children: ReactNode;
}

export const MenuList: React.FC<MenuListProps> = ({ children }) => {
  return (
    <ul className="menu">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return <li key={child.key}>{child}</li>;
        }
      })}
    </ul>
  );
};
