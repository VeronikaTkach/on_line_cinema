import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import Container from "../../layouts/Container/Container";

import { SearchButton } from "../SearchButton/SearchButton";
import { Modal } from "../Modal/Modal";
import { SearchForm } from "../SearchForm/SearchForm";
import { Login } from "../Authorization/Login";
import { Button } from "../Button/Button";

import {facebook, twitter, vk, instagram, logo, menu_icon} from './../../assets/images/index'
import styles from './../../assets/styles/defaultStyles.module.scss';
import { createUseStyles } from "react-jss";

export const Header: React.FC = () => {
  const classes = useStyles();
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
      <Container className={classes.container}>
        {/* Заглушка */}
        <Button text="" img={menu_icon} className={`${classes.menuButton} btn-default-white`}/>
        <SearchButton onClick={handleClick} plusStyle={classes.searchSmallButton}/>
        <div className={classes.navContent}>
          <Link to="/" className={classes.logo}>
            <img src={logo} className={classes.logoImg}/>
            <div className={classes.iconsBlock}>
              {/* Добавить линку по требованию */}
              {iconsArray.map(item => <img src={item} className={classes.icon}/>)}
            </div>
          </Link>
          <nav className={classes.navContainer}>
            {data.map(({name, link}) => <NavLink to={link} className={styles.text_small_white}>{name}</NavLink>)}
          </nav>
        </div>
        <SearchButton onClick={handleClick} plusStyle={classes.searchButton}/>
        <Modal isOpen={isPopupOpen} onOpenChange={toggleOpenPopUp}>
          <SearchForm onOpenChange={toggleOpenPopUp} />
        </Modal>
        <Login />
      </Container>
    </header>
  );
};
const useStyles = createUseStyles({
  container:{
    display:"flex",
    padding: "11px 0",
    '@media (max-width: 768px)':{
      
    },
    '@media (max-width: 1024px)':{
      padding: "21px 0",
      justifyContent: "center"
    },
    '@media (min-width: 1025px)':{
      padding: "23px 0",
      alignItems: "start",
    },
  },
  logo:{
    display:"flex",
    flexDirection:"column"
  },
  logoImg:{
    paddingBottom:"0.375rem",
    '@media (min-width: 768px)':{
      width: "120px"
    },
    '@media (max-width: 1024px)':{
      paddingBottom: "0.5rem",
    },
    '@media (min-width: 1025px)':{
      paddingBottom: "0.625rem",
    },
  },
  menuButton:{
    padding: "10px",
     height: "32px",
     '@media (min-width: 768px)':{
        display: "none",
    }
  },
  iconsBlock:{
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  icon:{
    width:"1rem"
  },
  searchSmallButton:{
    margin: "0 4px",
    '@media (min-width: 1024px)':{
      display: "none"
    },
    '@media (max-width: 1024px)':{
      height: "38px",
    },
    '@media (max-width: 768px)':{
      height: "32px",
    }
  },
  searchButton: {
    marginRight: "0.75rem",
    '@media (max-width: 1024px)':{
      display: "none"
    }
  },
  navContent:{
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    flexGrow:1,
    flexDirection:"column",
    '@media (min-width: 1024px)':{
       flexDirection:"row"
    }
  },
  navContainer: {
    display:"flex",
    width:"100%",
    justifyContent: "space-around",
    flexGrow: 1,
    '@media (max-width: 768px)':{
      display: "none"
    },
    '@media (max-width: 1024px)':{
       paddingTop: "12px",
    },
    '@media (min-width: 1024px)':{
       padding: "0 12px",
    }
  },
  
});