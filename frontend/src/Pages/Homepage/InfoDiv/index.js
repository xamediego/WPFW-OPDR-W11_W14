import React from 'react';
import styles from "./InfoDiv.module.scss";

const InfoDiv = (props) => {
    return (
        <div className={styles.MidInfoDiv}>

            <img className={styles.ImgDiv} src={props.ImgUrl} alt="img" height="360px" width="450px"/>

            <div className={styles.InfoContainer}>
                <div className={styles.InfoDiv}>
                    <h2 className={styles.Title}>
                        {props.Title}
                    </h2>
                    <span className={styles.Info}>
                    {props.Info}
                        </span>
                </div>

                <div className={styles.BDiv}>
                    <button onClick={() => props.line ? window.location.href = props.link : console.log("no link")} className="PrimaryButton" style={{width: "250px", height: "50px"}}>
                        {props.Button}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoDiv;
