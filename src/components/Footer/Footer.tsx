import { FC } from "react";
import { FooterProps } from "./type";

import style from './style.module.css';
import logo from '../../assets/svg/logo-footer.svg';
import github from '../../assets/svg/github-accent.svg';
import twitter from '../../assets/svg/twitter-accent.svg';
import linked from '../../assets/svg/linked-accent.svg';

const Footer: FC<FooterProps> = () => {
  return (
  <div className={style.footer__container}>
    <div className={style.footer__container_primary}>
      <img src={logo} alt="Logo of the portfolio page" />
      <div id="contacts" className={style.footer__contacts_container}>
        <a href="tel: +911234509876">+91 12345 09876</a>
        <a href="mailto info@example.com">info@example.com</a>
      </div>
      <div className={style.footer__socials__container}>
          <a><img src={github} alt="Logo of GitHub" /></a>
          <a><img src={twitter} alt="Logo of Twitter" /></a>
          <a><img src={linked} alt="Logo of LinkedIn" /></a>
        </div>
    </div>
    <div className={style.footer__container_secondary}>
      <nav>
        <ul className={style.footer__menu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#tech-stack">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <p className={style.footer__description}>
          Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span>
        </p>
    </div>

  </div>
);
}

export default Footer;