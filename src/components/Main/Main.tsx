import { FC } from "react";
import { MainProps } from "./type";

import style from './style.module.css';
import avatar from '../../assets/images/avatar.jpg';

const Main: FC<MainProps> = () => {
  return (
    <div className={style.main__container}>
      <h1 id="about" className={style.main__title}>
        Hi 👋,<br />
        My name is<br />
        <span className={style.main__title_accent}>Pavan MG</span><br />
        I build things for web
      </h1>
      <img className={style.main__img} src={avatar} alt="User avatar" />
    </div>
  );
}

export default Main;