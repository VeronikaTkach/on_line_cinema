import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import Container from "../../layouts/Container/Container";

import { SearchButton } from "../SearchButton/SearchButton";
import { Modal } from "../Modal/Modal";
import { SearchForm } from "../SearchForm/SearchForm";
import { Login } from "../Authorization/Login";
import { Button } from "../Button/Button";

import {facebook, twitter, vk, instagram, logo, menu_icon} from './../../assets/images/index'

const linkStyles = 'font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4 active:text-[rgb(192,191,191)] xl:text-lg lg:text-md md:text-md text-white'
const navStyle = 'grow sm:hidden md:flex md:justify-between md:pt-6 lg:pt-0 lg:justify-around xl:px-6 w-full px-4'

export const Header: React.FC = () => {
  // Вынести в редакс
  const data = [
    {
      link: '/afisha',
      name: "Афиша"
    },
    {link: '/media',
      name:'Медиа'
    },
    {link: '/films',
      name: "Фильмы"
    },
    {link: '/actors',
      name:'Актеры'
    },
    {link: '/news',
      name: "Новости"
    },
     {link: '/selections',
      name: "Подборки"
    },
    {link: '/categories',
      name:'Категории'
    }
  ]
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const iconsArray = [vk, instagram, facebook, twitter, ]
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const toggleOpenPopUp = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header>
      <Container className="flex xl:py-[23px] lg:py-[21px] py-[11px] md:items-start lg:items-center">
        <Button text="" img={menu_icon} className="md:hidden btn-default-white py-2.5 px-2.5 h-8"/>
        <SearchButton onClick={handleClick} plusStyle={"lg:hidden mx-1 sm:h-8 md:h-full"}/>
        <div className="flex items-center justify-center flex-grow md:flex-col lg:flex-row">
          <Link to="/" className=" flex-column">
            <img src={logo} className="md:w-[120px] xl:pb-2.5 lg:pb-2 pb-1.5"/>
            <div className="flex justify-between w-full">
              {/* Добавить линку по требованию */}
              {iconsArray.map(item => <img src={item} className="w-4"/>)}
            </div>
          </Link>
          <nav className={navStyle}>
            {data.map(({name, link}) => <NavLink to={link} className={linkStyles}>{name}</NavLink>)}
          </nav>
        </div>
        <SearchButton onClick={handleClick} plusStyle={"hidden lg:block mr-3 h-full"}/>
        <Modal isOpen={isPopupOpen} onOpenChange={toggleOpenPopUp}>
          <SearchForm onOpenChange={toggleOpenPopUp} />
        </Modal>
        <Login />
      </Container>
    </header>
  );
};
