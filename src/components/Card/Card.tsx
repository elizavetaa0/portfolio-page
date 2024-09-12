import { FC } from "react";
import { CardProps } from "./type";

import style from './style.module.css';
import images from './images';
import link from '../../assets/svg/link-icon.svg';
import github from '../../assets/svg/github-black.svg';

const Card: FC<CardProps> = () => {
  return (
    <div className={style.card__list}>
      {images.map((image, index) => (
        <div key={index} className={style.card__container}>
          <img className={style.card__image} src={image} alt={`Project ${index + 1}`} />
          <div className={style.card__text_container}>
            <h4 className={style.card__title}>Project Title goes here</h4>
            <p className={style.card__description}>
              This is a sample project description. Random things are here in the description. This is a sample project description lorem ipsum generator for dummy content.
            </p>
            <p className={style.card__description}>
              <span className={style.card__description_accent}>Tech stack:</span> HTML, JavaScript, SASS, React
            </p>
            <div className={style.card__container_links}>
              <div className={style.card__links}>
                <img src={link} alt="Link icon" />
                <a className={style.card__link} href="#">Live preview</a>
              </div>
              <div className={style.card__links}>
                <img src={github} alt="GitHub icon" />
                <a className={style.card__link} href="#">View code</a>
              </div>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Card;
