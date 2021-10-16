import React from 'react';
import styles from './Works.module.scss';
import stylesContainer from './../common/styles/Container.module.css'
import {Work} from "./work/Work";
import socWeb from './../assets/img/socWeb.JPG'
import todoList from './../assets/img/todoList.JPG'
import Fade from 'react-reveal/Fade';

export const Works = (props) => {
    return (
        <div id={'projects'} className={styles.workBlock}>
            <div className={` ${styles.worksContainer}`}>
                <Fade right>
                    <div className={styles.titleBackground}>
                        <h2 className={styles.MyWorks}>My works</h2>
                    </div>
                    <div className={styles.prokladka}></div>
                    <div className={styles.workKontainer}>
                        <Work nameProject={'zzzzzzzzzzz'} projectDescription={'zzzzz zzzz zzzzz zzzzzz ' +
                        'zzzzzzzzzzz zzzzzzzz zzzzzzzz z zzzzzzzzz zzzzzzzzzz zzzz zzz'} picture={socWeb}/>
                        <Work nameProject={'xxxxxxxxxxx'} projectDescription={'xxxx xxxxxxxxxxxx xxxxxx xxxxxx ' +
                        'xxxxxx x xxxxxxxxx xxxxxxx xxxxxxxxx xxxxxxxxxx xxxxxxxx xxx xxxxx'} picture={todoList}/>
                    </div>
                    <p></p>
                </Fade>
            </div>
            <div className={styles.prokladka}></div>
        </div>
    )
}