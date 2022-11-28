import styles from './Top.module.scss';
import Buttons from "./Buttons";
import {useTicketInfo} from "../TicketContext";


const Top = () => {

    const count = useTicketInfo();

    return (
        <div className={styles.TopDivContainer}>
            <div className={styles.TopDivTitle}>
                <h2>
                    Voor hoeveel personen wil je reserveren?
                </h2>
            </div>
            <div className={styles.TopInfoDiv}>
                <div className={styles.t}>
                    <div className={styles.text}>
                        <h3>
                            Aantal personen vanaf 4 jaar
                        </h3>
                    </div>
                    <div className={styles.ButtonDiv}><Buttons count={count.adultCount} setCount={count.setAdultCount}/></div>
                </div>
                <div className={styles.InfoLine}>
                    <hr></hr>
                </div>
                <div className={styles.t}>
                    <div className={styles.text}>
                        <h3>
                            Aantal personen vanaf 4 jaar
                        </h3>
                        <span className={styles.InfoText}>
                                Kinderen (0-3) hebben gratis toegang, maar worden wel meegenomen
                                <br/>in de reservering. Er kan gvraagdworden naar een legitimatiebewijs
                            </span>
                    </div>
                    <div className={styles.ButtonDiv}><Buttons count={count.minorCount} setCount={count.setMinorCount}/></div>
                </div>
            </div>
        </div>
    );
};

export default Top;
