import { Link, NavLink } from "react-router-dom";
import { AuthModal } from "../Auth/Auth";
import LOGO from './../../assets/images/logoicon.svg';
import FACEBOOK_ICON from './../../assets/images/facebook.svg';
import TWITTER_ICON from './../../assets/images/twitter.svg';
import INSTAGRAM_ICON from './../../assets/images/instagram.svg';
import VK_ICON from './../../assets/images/vk.svg';

export const Header: React.FC = () => {
  return (
    <header>
      <div
        className="flex items-center justify-between py-6 gap-20 px-16"
      >
        <div className="flex-column">
          <Link to="/afisha" className="flex pb-2 gap-2">
            <img src={LOGO}/>
            <span className="text-xl">
              <span className="text-blue-600">Kino</span>area
            </span>
            
          </Link>
          <div className="flex gap-2 items-center justify-between">
            <img src={VK_ICON} className="w-4 cursor-pointer"/>
            <img src={INSTAGRAM_ICON}  className="w-4 cursor-pointer"/>
            <img src={FACEBOOK_ICON}  className="w-4 cursor-pointer"/>
            <img src={TWITTER_ICON}  className="w-4 cursor-pointer"/>
          </div>
        </div>
        
        <nav
           className="flex justify-between gap-5"
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
