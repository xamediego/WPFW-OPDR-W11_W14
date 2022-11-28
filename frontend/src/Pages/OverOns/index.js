import React from 'react';
import styles from './OverOns.module.scss'
import t from '../../Menu/Footer/Footer.module.scss'

import One from '../../Assets/OverOns/1.png'
import Two from '../../Assets/OverOns/2.png'

const OverOns = () => {
    return (
        <div className={styles.MainBody}>
            <div>
                <h1 className={styles.Title}>Over ons</h1>
            </div>
            <div className={styles.LineDiv}>
                <hr style={{color: "#2B1313"}}/>
            </div>

            <div className={styles.ContentDiv}>
                <text className={styles.ContentText}>Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit.<br/>
                    In vel mi non ex interdum molestie.<br/>
                    Praesent eget ipsum risus.<br/>
                    Cras in placerat ipsum.<br/>
                    Etiam semper pretium<br/>
                    quam quis venenatis.<br/>
                    Cras mollis dapibus mauris.<br/>
                    Ut vel augue id felis rhoncus accumsan.<br/>
                </text>

                <img className={styles.ContentImage} src={One} alt="sneed"/>
            </div>

            <div className={styles.LineDiv}>
                <hr style={{color: "#2B1313"}}/>
            </div>

            <div className={styles.ContentDiv}>
                <img className={styles.ContentImage} src={Two} alt="sneed"/>

                <text className={styles.ContentText}>Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit.<br/>
                    In vel mi non ex interdum molestie.<br/>
                    Praesent eget ipsum risus.<br/>
                    Cras in placerat ipsum.<br/>
                    Etiam semper pretium<br/>
                    quam quis venenatis.<br/>
                    Cras mollis dapibus mauris.<br/>
                    Ut vel augue id felis rhoncus accumsan.<br/>
                </text>
            </div>
        </div>
    );
};

export default OverOns;
