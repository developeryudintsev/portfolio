import React from 'react';
import styles from './Footer.module.scss';
import stylesContainer from './../common/styles/Container.module.css'

export const Footer = (props) => {
    return (
        <div className={styles.ContactsBlock}>
            <div >
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
            </div>
            <div className={styles.prokladka}></div>

        </div>
    )
}