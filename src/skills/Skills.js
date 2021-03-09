import React from 'react';
import styles from './Skills.module.scss';
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={` ${styles.skillsContainer}`}>
                <div className={styles.titleBackground}><h2 className={styles.title}>Skills</h2></div>
                <div className={styles.prokladka}></div>
                <div className={styles.skills}>
                    <Skill title={'css'} description={'qqq qqq  qqqqq qqq qqq qqqqqq qqqqqqq qq qqqqqq qqqq qqqq'}/>
                    <Skill title={'JS'} description={'wwwwww wwwww wwwwww wwwwwwww wwwwwwwwwwww ww   ww'}/>
                    <Skill title={'React'} description={'eeeeee eeeeeee eeeeeee eeeeee'}/>
                </div>
                <p></p>
            </div>
        </div>
    )
}

