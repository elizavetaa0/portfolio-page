import { FC } from "react";
import { SkillsProps } from "./type";
import Card from "../Card/Card";

import style from './style.module.css';
import icons from "./icons";


const Skills: FC<SkillsProps> = () => {
  return (
    <div className={style.skills__container}>
      <h2 id="tech-stack" className={style.skills__main_title}>My Tech Stack</h2>
      <h3 className={style.skills__main_subtitle}>Technologies I’ve been working with recently</h3>
      <div className={style.skills__icons_container}>
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt={icon}
        />
      ))}
      </div>
      <h2 id="projects" className={style.skills__main_title}>Projects</h2>
      <h3 className={style.skills__main_subtitle}>Things I’ve built so far</h3>
      <div className={style.skills__card_container}>
        <Card
          img={""}
          title={""}
          description={""}
          linkIcon={""}
          gitIcon={""}
        />
      </div>
    </div>

  );
}

export default Skills;