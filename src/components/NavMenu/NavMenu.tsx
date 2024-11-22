import React from "react";
import { NavLink } from "react-router-dom";
import { NavMenuProps } from "./nav-menu.interfaces";

export const NavMenu: React.FC<NavMenuProps> = ({ menuItems, className }) => {
  const cl =
    "font-semibold leading-[21px] cursor-pointer transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4 active:text-[rgb(192,191,191)] xl:text-lg lg:text-sm text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500  ";

  return (
    <nav>
      <ul className={className}>
        {menuItems.map((el, index) => (
          <li key={index}>
            <NavLink className={cl} to={el.href} key={index}>
              {el.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
