import React from 'react';
import styles from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt'

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={` ${styles.skillsContainer}`}>
                <Fade left>
                    <div className={styles.titleBackground}><h2 className={styles.title}>Skills</h2></div>
                    <div className={styles.prokladka}></div>
                    <div className={styles.skills}>
                        <Tilt className="Tilt" options={{max: 25}}>
                            <Skill title={'css'}
                                   description={'qqq qqq  qqqqq qqq qqq qqqqqq qqqqqqq qq qqqqqq qqqq qqqq'}/>
                        </Tilt>
                        <Tilt className="Tilt" options={{max: 25}}>
                            <Skill title={'JS'} description={'wwwwww wwwww wwwwww wwwwwwww wwwwwwwwwwww ww   ww'}/>
                        </Tilt>
                        <Tilt className="Tilt" options={{max: 25}}>
                            <Skill title={'React'} description={'eeeeee eeeeeee eeeeeee eeeeee'}/>
                        </Tilt>
                    </div>
                </Fade>
                <p></p>
            </div>
        </div>
    )
}

