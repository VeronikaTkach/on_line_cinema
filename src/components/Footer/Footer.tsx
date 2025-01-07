import React from "react";
import Container from "../../layouts/Container/Container";
import SocialIcons from "../SocialIcons/SocialIcons";
import { NavMenu } from "../NavMenu/NavMenu";
import { PrivacyPolicy } from "../PrivacyPolicy/PrivacyPolicy";

export const Footer: React.FC = () => {
  const data = [
    { text: "Афиша", href: "/afisha" },
    { text: "Новости", href: "/news" },
    { text: "Персоны", href: "/actors" },
    { text: "Рейтинги", href: "#" },
    { text: "Рецензии", href: "#" },
    { text: "Каталог фильмов", href: "/films" },
  ];

  return (
    <div className="footer w-full md:py-16 py-10 bg-darks-primary">
      <Container>
        <SocialIcons />
        <NavMenu
          menuItems={data}
          className="flex justify-center xl:gap-12 md:gap-6 xl:mb-12 lg:mb-9 md:mb-6 mb-5 md:flex-row flex-col"
        />
        <PrivacyPolicy text={"Политика конфиденциальности"} />
      </Container>
    </div>
  );
};
