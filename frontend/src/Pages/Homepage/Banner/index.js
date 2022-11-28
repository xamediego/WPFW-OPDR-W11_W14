import React from 'react';
import styles from "./Banner.module.scss";
import {useNavigate} from "react-router-dom";

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.banner}>
            <div className={styles.OntdekmeerDiv}>

                <div className={styles.OntdekmeerContent}>

                    <p>Beleef de Halloween<br/>in de efteling</p>

                    <button className={styles.OntdekMeerButton}
                            onClick={() => navigate('overons')}>
                        Ontdek meer >
                    </button>
                </div>
            </div>

            <div className={styles.ReserveDiv}>
                <div className={styles.TopReserve}>
                    <h1 className={styles.Title}>
                        Reservering en tickets kopen
                    </h1>
                </div>
                <div className={styles.LowReserve}>
                    <div className={styles.InfoReserve}>
                        <h2 className={styles.Title}>
                            Bezoek de wereld vol horrors
                        </h2>
                        <h2 className={styles.Info}>
                            Reserveer je bezoek aan de Efteling. Kinderen t/m 3 jaar gratis
                        </h2>
                    </div>
                    <div className={styles.r}>
                        <button className="PrimaryButton" style={{width: "200px", height: "50px"}}
                                onClick={() => navigate('ticket')}>
                            Reserveren >
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
