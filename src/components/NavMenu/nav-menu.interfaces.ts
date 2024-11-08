export interface MenuItem {
  text: string;
  href: string;
}

export interface NavMenuProps {
  menuItems: MenuItem[];
  className?: string;
}
