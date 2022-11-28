import React from 'react';
import styles from './Showcase.module.scss'

import one from '../../../Assets/Showcase/1.png'
import two from '../../../Assets/Showcase/2.png'
import three from '../../../Assets/Showcase/3.png'
import four from '../../../Assets/Showcase/4.png'
import five from '../../../Assets/Showcase/5.png'

const Showcase = () => {
    return (
        <div className={styles.MainBody}>
            <div className={styles.TopDiv}>
                <div>
                    <h1 className={styles.Title}>
                        Laat je verwonderen tijdens de kleurrijke herfst
                    </h1>
                </div>
                <div className={styles.LineDiv}>
                    <hr></hr>
                </div>
            </div>

            <div className={styles.ImageContainer}>
                <div className={styles.TopImages}>
                    <img className={styles.TopImage} src={one}/>
                    <img className={styles.TopImage} src={two}/>
                </div>
                <div className={styles.LowImages}>
                    <img className={styles.LowerImage} src={three}/>
                    <img className={styles.LowerImage} src={four}/>
                    <img className={styles.LowerImage} src={five}/>
                </div>
            </div>

        </div>
    );
};

export default Showcase;
