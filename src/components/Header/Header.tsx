import { Link } from "react-router-dom";
// import search from '../../assets/icons/'

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-dark-gray-white" style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/afisha">ЛОГО</Link>
        <Link to="/afisha">Афиша</Link>
        <Link to="/media">Медиа</Link>
        <Link to="/films">Фильмы</Link>
        <Link to="/actors">Актеры</Link>
        <Link to="/news">Новости</Link>
        <Link to="/selections">Подборки</Link>
        <Link to="/categories">Категории</Link>        
      </nav>
    </header>
  );
};
