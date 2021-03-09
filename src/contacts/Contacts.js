import React from 'react';
import styles from './Contacts.module.scss';
import stylesContainer from './../common/styles/Container.module.css'

export const Contacts = (props) => {
    return (
        <div className={styles.ContactsBlock}>
            <div >
                <h2 className={styles.title}>Contacts</h2>
                <div className={styles.prokladka}></div>
                <div>
                    <form className={styles.form}>

                        <input type="text" className={styles.input} placeholder={'contacts'}/>

                        <input type="text" className={styles.input} placeholder={'contacts'}/>

                        <textarea rows="4" className={`${styles.input} ${styles.textarea}`} placeholder={'contacts'}></textarea>
                        <p></p>
                    </form>
                </div>
                <p></p>
                <div className={styles.button}>send</div>
                <p></p>
            </div>
            <div className={styles.prokladka}></div>
        </div>
    )
}