import React from 'react';
import styles from './Main.module.scss';
import reactPng from './../assets/img/react.png'
import Flip from 'react-reveal/Flip';
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import {Link} from "react-scroll";

const particlesOpt = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
    },
}

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={` ${styles.mainContainer}`}>

                <Particles className={styles.particles} params={particlesOpt}/>
                <Flip left>
                    <div className={styles.text}>
                      <span><h2>
                        <ReactTypingEffect
                            text={'Hi There'}
                        />
                      </h2></span>

                        <h1>
                            <ReactTypingEffect
                                text={'I am Yudintsev Igor'}
                            />
                        </h1>
                        <p className={styles.developerText}><h1>
                            <ReactTypingEffect
                                text={'Frontend Developer'}
                            />
                        </h1></p>
                        <div>
                            <Tilt className="Tilt" options={{max: 25}}>
                                <img className={styles.reactPng} src={reactPng}/>
                            </Tilt>
                        </div>
                    </div>
                    <div className={styles.divForPhoto}>
                        <Tilt className="Tilt" options={{max: 25, scale: 1}}>
                            <img className={styles.pastePhoto}/>
                        </Tilt>
                    </div>

                </Flip>
            </div>


            <div className={styles.emptyBlock}></div>

        </div>

    )
}

//------------------------------------------------------------

// import React from 'react';
// import styles from './Main.module.scss';
// import reactPng from './../assets/img/react.png'
// import foto from './../assets/img/foto.jpg'
//
// import Particles from 'react-particles-js';
//
// //
// const particlesOpt = {
//     particles: {
//         number: {
//             value: 80,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//     },
// }
//
// export const Main = () => {
//     return (
//         <div className={styles.mainBlock}>
//             <Particles className={styles.particles} params={particlesOpt}/>
//             {/*<Particles />*/}
//             <div className={` ${styles.mainContainer}`}>
//
//                 <div className={styles.text}>
//                     <span><h2>Hi There</h2></span>
//                     <h1> I am Yudintsev Igor</h1>
//                     <p className={styles.developerText}><h1>Frontend Developer</h1></p>
//                     <div>
//                         <img className={styles.reactPng} src={reactPng}/>
//                     </div>
//                 </div>
//                 <div>
//                     <img className={styles.pastePhoto} src={foto}/>
//
//                 </div>
//             </div>
//             <div className={styles.emptyBlock}></div>
//
//         </div>
//
//     )
// }







