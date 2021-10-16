import React from 'react';
import styles from './Teleworking.module.scss';
import stylesContainer from './../common/styles/Container.module.css'
import Fade from 'react-reveal/Fade';

export const Teleworking = (props) => {
    return (
        <div className={styles.TeleworkingBlock}>
            <Fade bottom>

            <div className={styles.form}>
                <h2 className={styles.title}>Consider options of teleworking</h2>
                <p></p>
                <div className={styles.button}>send</div>
                <p className={styles.p}></p>
            </div>
            <div className={styles.prokladka}></div>
            </Fade>
        </div>
    )
}