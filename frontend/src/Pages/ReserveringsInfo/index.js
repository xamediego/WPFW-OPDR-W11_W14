import React from 'react';
import styles from './ReserveringsInfo.module.scss'
import {useLocation} from "react-router-dom";

export default function ReserveringsInfo(props) {

    const location = useLocation();

    console.log(location.state)

    return (
        <div className={styles.RootDiv}>
            <div>{location.state.name}</div>
        </div>
    )
}
