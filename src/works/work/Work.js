import React from 'react';
import styles from './Work.module.scss';
import reactPng from "../../assets/img/react.png";


export const Work = (props) => {
    return (
        <div className={styles.workBlock}>
            <div className={styles.picture}>
                <img className={styles.pictureJpg} src={props.picture}/>
                <span><h2 className={styles.watch}>watch</h2></span>
                <div className={styles.black}></div>
            </div>
            <div className={styles.nameProject}>{'NAME PROJECT: ' + props.nameProject}</div>
            <div className={styles.projDescr}>PROJECT DESCRIPTION:</div>
            <div className={styles.projectDescription}>{props.projectDescription}</div>
        </div>
    )
}