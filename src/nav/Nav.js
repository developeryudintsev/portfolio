import React from 'react';
import styles from './Nav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";

export const Nav = () => {
    return (

        <div className={styles.nav}>
            <a href="">General</a>
            {/*<a href="">Skills</a>*/}
            <Link
                activeClass={styles.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Skills</Link>
            {/*<a href="#projects">Projects</a>*/}

            <Link
                activeClass={styles.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Projects</Link>
            {/*<a href={'#projects'}>Contacts</a>*/}
            <Link
                activeClass={styles.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Contacts</Link>
        </div>

    )
}