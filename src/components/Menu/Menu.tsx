import { FC } from "react";
import { MenuProps } from "./type";
import style from './style.module.css';

const Menu: FC<MenuProps> = () => {
  return (
    <nav >
      <ul className={style.menu__list}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Menu;