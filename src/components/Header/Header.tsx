import { Link, NavLink } from "react-router-dom";
import { AuthModal } from "../Auth/Auth";

export const Header: React.FC = () => {
  return (
    <header>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/afisha" style={{ marginRight: "2rem" }}>
          ЛОГО
        </Link>
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
        <AuthModal />
      </div>
    </header>
  );
};
