import React from 'react';
import styles from './Footer.module.scss';
import Fade from 'react-reveal/Fade';
import stylesContainer from './../common/styles/Container.module.css'
import {Link} from "react-scroll";

export const Footer = (props) => {
    return (
        <div id={'contacts'} className={styles.ContactsBlock}>
            <div >
                <Fade bottom>

                <h2 className={styles.title}>Alexander Yudintsev</h2>
                <div className={styles.form}>
                    <div className={styles.content}></div>
                    <div className={styles.content}></div>
                    <div className={styles.content}></div>
                    <div className={styles.content}></div>
                </div>
                <p></p>
                <div className={styles.button}>©All rights Reserved</div>
                    <p></p>
                </Fade>
            </div>
            <div className={styles.prokladka}></div>
             </div>
    )
}