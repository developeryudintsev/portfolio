import React from 'react';
import styles from './Skill.module.scss';
// import stylesContainer from './../common/styles/Container.module.css'

export const Skill = (props) => {
    return (
       <div id={'skills'} className={styles.skill}>
           <div className={styles.icon}></div>
           <h3 className={styles.title}>{props.title}</h3>
           <span className={styles.description}>
               {props.description}
           </span>
       </div>
    )
}

