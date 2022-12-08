import React from 'react';
import styles from './ReserveringsInfo.module.scss'
import {useLocation} from "react-router-dom";

export default function ReserveringsInfo(props) {

    const location = useLocation();

    console.log(location.state)

    return (
        <div className={styles.RootDiv}>
            <div className={styles.InfoDiv}>
                <div className={styles.InfoTitle}>
                    <h2>ReserveringsInfo</h2>
                </div>
                <div className={styles.InfoContainer}>
                    <h3>Datum</h3>
                    <p>{location.state.date}</p>
                    <h3>Aantal</h3>
                    <p>{location.state.count}</p>
                    <h3>Email</h3>
                    <p>{location.state.email}</p>
                </div>
            </div>
        </div>
    )
}
