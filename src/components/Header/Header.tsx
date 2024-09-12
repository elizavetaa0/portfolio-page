import { FC, useState } from "react";
import { HeaderProps } from "./type";

import style from './style.module.css';
import logo from '../../assets/svg/logo.svg';
import github from '../../assets/svg/github.svg';
import twitter from '../../assets/svg/twitter.svg';
import linked from '../../assets/svg/linkedin.svg';
import Menu from "../Menu/Menu";
import hamburger from '../../assets/svg/hamburger-menu.svg';

const Header: FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={style.header__container}>
      <img src={logo} alt="Logo of the portfolio page" />

      <div className={style.hamburger} onClick={toggleMenu}>
        <img src={hamburger} alt="Hamburger menu" />
      </div>

      <div className={`${style.menu_socials_container} ${isMenuOpen ? style.open : ''}`}>
        <Menu menuItems={[]} />
        <div className={style.header__socials__container}>
          <a><img src={github} alt="Logo of GitHub" /></a>
          <a><img src={twitter} alt="Logo of Twitter" /></a>
          <a><img src={linked} alt="Logo of LinkedIn" /></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
