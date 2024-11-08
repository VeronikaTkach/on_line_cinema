import React, { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export const Link: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="font-semibold leading-[21px] cursor-pointer transition-all duration-300 ease-in-out 
        hover:underline hover:underline-offset-4 active:text-[rgb(192,191,191)] 
        xl:text-lg lg:text-sm text-xs text-white
        focus:outline-none focus:ring-2 focus:ring-blue-500  "
    >
      {children}
    </a>
  );
};
