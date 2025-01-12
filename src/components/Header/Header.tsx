import { Link, NavLink } from "react-router-dom";
import { AuthModal } from "../Auth/Auth";
import LOGO from './../../assets/images/logoicon.svg';
import FACEBOOK_ICON from './../../assets/images/facebook.svg';
import TWITTER_ICON from './../../assets/images/twitter.svg';
import INSTAGRAM_ICON from './../../assets/images/instagram.svg';
import VK_ICON from './../../assets/images/vk.svg';
import SEARCH from './../../assets/images/search.svg'
export const Header: React.FC = () => {
  return (
    <header>
      <div
        className="w-full flex justify-between  py-6 p-4 md:px-8 lg:px-12 xl:px-16"
      >
        <div className="w-full items-center flex justify-between md:flex-row flex-col">
          <div className="flex flex-col items-center justify-center sm:pb-8 md:pb-0">
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
            className="w-full flex justify-center gap-5 px-8"
          >
            <NavLink to="/afisha">Афиша</NavLink>
            <NavLink to="/media">Медиа</NavLink>
            <NavLink to="/films">Фильмы</NavLink>
            <NavLink to="/actors">Актеры</NavLink>
            <NavLink to="/news">Новости</NavLink>
            <NavLink to="/selections">Подборки</NavLink>
            <NavLink to="/categories">Категории</NavLink>
          </nav>
        </div>
        <button className="w-12 h-12 mr-2 btn-default-white-counter flex justify-center items-center"
        ><img src={SEARCH}/>
        </button>
        <AuthModal />
      </div>
    </header>
  );
};
