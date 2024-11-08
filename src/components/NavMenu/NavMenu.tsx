import React from "react";
import { Link } from "../Link/Link";
import { NavMenuProps } from "./nav-menu.interfaces";

export const NavMenu: React.FC<NavMenuProps> = ({ menuItems, className }) => {
  return (
    <nav>
      <ul className={className}>
        {menuItems.map((el, index) => (
          <li key={index}>
            <Link href={el.href} key={index}>
              {el.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
