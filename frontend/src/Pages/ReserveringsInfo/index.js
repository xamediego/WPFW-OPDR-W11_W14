import React from 'react';
import styles from './ReserveringsInfo.module.scss'
import {useLocation} from "react-router-dom";

export default function ReserveringsInfo(props) {

    const location = useLocation();

    console.log(location)
    console.log(location.state)
    console.log(location.state.count)

    return (
        <div id='ReservationInfo' className={styles.RootDiv}>
            <div className={styles.InfoDiv}>
                <div className={styles.InfoTitle}>
                    <h2>ReserveringsInfo</h2>
                </div>
                <div className={styles.InfoContainer}>
                    <div className={styles.ReservationDataDiv}>
                        <h3>Datum</h3>
                        <p>{location.state.date}</p>
                    </div>
                    <div className={styles.ReservationDataDiv}>
                        <h3>Aantal</h3>
                        <p>{location.state.count}</p>
                    </div>
                    <div className={styles.ReservationDataDiv}>
                        <h3>Email</h3>
                        <p>{location.state.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
