import React from 'react';
import styles from './Main.module.scss';
import reactPng from './../assets/img/react.png'
import foto from './../assets/img/foto.jpg'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={` ${styles.mainContainer}`}>
                <div className={styles.text}>
                    <span><h2>Hi There</h2></span>
                    <h1> I am Yudintsev Igor</h1>
                    <p className={styles.developerText}><h1>Frontend Developer</h1></p>
                    <div>
                        <img className={styles.reactPng} src={reactPng}/>
                    </div>
                </div>
                <div >
                    <img className={styles.pastePhoto} src={foto}/>
                </div>

            </div>
            <div className={styles.emptyBlock}></div>
        </div>
    )
}


