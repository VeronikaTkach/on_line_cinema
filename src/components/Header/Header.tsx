import { Link, NavLink } from "react-router-dom";
import { Login } from "../Authorization/Login";
import { SearchButton } from "../SearchButton/SearchButton";
import { Modal } from "../Modal/Modal";
import { SearchForm } from "../SearchForm/SearchForm";
import { useState } from "react";

export const Header: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  const toggleOpenPopUp = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header>
      {/* MK: нужно поместить всю врестку внтури тега хедер в компонент Container, который уже адптирован под все экраны*/}
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/afisha" style={{ marginRight: "2rem" }}>
          ЛОГО
        </Link>

        {/* MK:  nav и все что внтури я бы удалила и пересипользовала бы компонент NavLink из футера */}
        <nav
          className="bg-dark-gray-white"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexGrow: 1,
          }}
        >
          <NavLink to="/afisha">Афиша</NavLink>
          <NavLink to="/media">Медиа</NavLink>
          <NavLink to="/films">Фильмы</NavLink>
          <NavLink to="/actors">Актеры</NavLink>
          <NavLink to="/news">Новости</NavLink>
          <NavLink to="/selections">Подборки</NavLink>
          <NavLink to="/categories">Категории</NavLink>
        </nav>
        <SearchButton onClick={handleClick} />
        <Modal isOpen={isPopupOpen} onOpenChange={toggleOpenPopUp}>
          <SearchForm onOpenChange={toggleOpenPopUp} />
        </Modal>
        <Login />
      </div>
    </header>
  );
};
